'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import SimpleGraveyardMap from './SimpleGraveyardMap';

interface Graveyard {
  id: string;
  name: string;
  distance: number;
  address: string;
  latitude: number;
  longitude: number;
  services: string[];
}

const NearbyGraveyards = () => {
  const [location, setLocation] = useState<GeolocationPosition | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [graveyards, setGraveyards] = useState<Graveyard[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [fetchError, setFetchError] = useState<string | null>(null);

  const fetchNearbyGraveyards = async (position: GeolocationPosition) => {
    try {
      setIsLoading(true);
      setFetchError(null);
      
      const response = await fetch('/api/nearby-graveyards', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          maxDistance: 50, // Maximum distance in miles
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch nearby graveyards');
      }
      
      const data = await response.json();
      setGraveyards(data.graveyards);
    } catch (error) {
      console.error('Error fetching nearby graveyards:', error);
      setFetchError('Failed to fetch nearby graveyards. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const getLocation = () => {
    setLoading(true);
    setError(null);

    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      setLoading(false);
      
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation(position);
        setLoading(false);
        fetchNearbyGraveyards(position);
      },
      (_error) => {
        setError('Unable to retrieve your location. Please enable location access.');
        setLoading(false);
      }
    );
  };

  return (
    <div className="my-8 rounded-lg bg-white p-6 shadow-md">
      <h3 className="mb-4 font-serif text-2xl font-bold text-[#5F6C8A]">Find Nearby Graveyards</h3>
      <p className="mb-4 text-gray-600">
        We can help you locate Islamic burial grounds in your area. Please allow location access to find graveyards near you.
      </p>
      {(error || fetchError) && (
        <div className="mb-4 border-l-4 border-red-500 bg-red-50 p-4">
          <p className="text-red-700">{error || fetchError}</p>
        </div>
      )}
      <button 
        onClick={getLocation} 
        disabled={loading || isLoading}
        className="flex items-center rounded-md bg-[#7F8CAA] px-4 py-2 font-medium text-white transition-all duration-300 hover:bg-[#5F6C8A]"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="mr-2 size-5" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
          />
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
          />
        </svg>
        {loading || isLoading ? 'Locating...' : 'Find Nearby Graveyards'}
      </button>
      {location && graveyards.length > 0 && (
        <div className="mt-6">
          <h4 className="mb-3 text-lg font-medium text-[#5F6C8A]">Graveyards Near You</h4>
          {/* Map View */}
          <div className="mb-6"><SimpleGraveyardMap graveyards={graveyards} userLocation={location} /></div>
          {/* List View */}
          <h5 className="text-md mb-3 font-medium text-[#5F6C8A]">List of Graveyards</h5>
          <div className="space-y-3">
            {graveyards.map((graveyard) => (
              <div key={graveyard.id} className="rounded-md border border-gray-200 p-3 transition-colors hover:border-[#7F8CAA]">
                <div className="flex justify-between">
                  <h5 className="font-medium">{graveyard.name}</h5>
                  <span className="text-sm text-gray-500">{graveyard.distance} miles away</span>
                </div>
                <p className="text-sm text-gray-600">{graveyard.address}</p>
                <div className="mt-2">
                  <div className="mb-2 flex flex-wrap gap-1">
                    {graveyard.services && graveyard.services.map((service, index) => (
                      <span key={index} className="inline-block rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600">
                        {service}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <Link 
                      href={`https://maps.google.com/?q=${graveyard.latitude},${graveyard.longitude}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-sm font-medium text-[#7F8CAA] hover:underline"
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="mr-1 size-4" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" 
                        />
                      </svg>
                      Directions
                    </Link>
                    <button 
                      className="flex items-center text-sm font-medium text-orange-600 hover:underline"
                      onClick={() => window.location.href = '/booking?graveyard=' + graveyard.id}
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="mr-1 size-4" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
                        />
                      </svg>
                      Book Service
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NearbyGraveyards;

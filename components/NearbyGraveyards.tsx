'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface Graveyard {
  id: string;
  name: string;
  distance: number;
  address: string;
}

const NearbyGraveyards = () => {
  const [location, setLocation] = useState<GeolocationPosition | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [graveyards, setGraveyards] = useState<Graveyard[]>([]);

  // Mock data for demonstration purposes
  const mockGraveyards: Graveyard[] = [
    { id: '1', name: 'Green Hills Memorial', distance: 1.2, address: '123 Memorial Dr, Springfield' },
    { id: '2', name: 'Peaceful Gardens', distance: 2.5, address: '456 Serenity Ave, Springfield' },
    { id: '3', name: 'Islamic Memorial Gardens', distance: 3.1, address: '789 Faith Rd, Springfield' },
    { id: '4', name: 'Riverside Cemetery', distance: 4.7, address: '101 River View, Springfield' },
  ];

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
        // In a real app, we would use the coordinates to fetch nearby graveyards
        // For demo purposes, we'll use mock data
        setGraveyards(mockGraveyards);
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
      {error && (
        <div className="mb-4 border-l-4 border-red-500 bg-red-50 p-4">
          <p className="text-red-700">{error}</p>
        </div>
      )}
      <button 
        onClick={getLocation} 
        disabled={loading}
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
        {loading ? 'Locating...' : 'Find Nearby Graveyards'}
      </button>
      {location && graveyards.length > 0 && (
        <div className="mt-6">
          <h4 className="mb-3 text-lg font-medium text-[#5F6C8A]">Graveyards Near You</h4>
          <div className="space-y-3">
            {graveyards.map((graveyard) => (
              <div key={graveyard.id} className="rounded-md border border-gray-200 p-3 transition-colors hover:border-[#7F8CAA]">
                <div className="flex justify-between">
                  <h5 className="font-medium">{graveyard.name}</h5>
                  <span className="text-sm text-gray-500">{graveyard.distance} miles away</span>
                </div>
                <p className="text-sm text-gray-600">{graveyard.address}</p>
                <div className="mt-2 flex justify-between">
                  <Link 
                    href={`https://maps.google.com/?q=${graveyard.address}`} 
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
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NearbyGraveyards;

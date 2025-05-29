'use client';

import React from 'react';

interface Graveyard {
  id: string;
  name: string;
  distance: number;
  address: string;
  latitude: number;
  longitude: number;
  services: string[];
}

interface GraveyardMapProps {
  graveyards: Graveyard[];
  userLocation: GeolocationPosition | null;
}

const GraveyardMap: React.FC<GraveyardMapProps> = ({ userLocation }) => {
  // Create map URL
  const createMapUrl = () => {
    if (!userLocation) return '';
    
    // Use direct Google Maps URL which doesn't require an API key
    const latitude = userLocation.coords.latitude;
    const longitude = userLocation.coords.longitude;
    
    // Create a URL that will show the user's location and nearby graveyards
    return `https://www.google.com/maps/embed/v1/search?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=islamic+cemetery+near+${latitude},${longitude}&zoom=12`;
  };

  if (!userLocation) {
    return (
      <div className="flex h-[400px] w-full items-center justify-center rounded-lg bg-gray-100 text-center">
        <div>
          <p className="text-gray-600">Location data not available</p>
          <p className="mt-2 text-sm text-gray-500">Please enable location services to view nearby graveyards.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden rounded-lg shadow-md">
      <iframe
        title="Nearby Graveyards Map"
        width="100%"
        height="400"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        src={createMapUrl()}
      ></iframe>
    </div>
  );
};

export default GraveyardMap;

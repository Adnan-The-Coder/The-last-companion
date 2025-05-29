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

interface SimpleGraveyardMapProps {
  graveyards: Graveyard[];
  userLocation: GeolocationPosition | null;
}

const SimpleGraveyardMap: React.FC<SimpleGraveyardMapProps> = ({ graveyards: _graveyards, userLocation }) => {
  if (!userLocation) {
    return (
      <div className="flex h-[400px] w-full items-center justify-center rounded-lg bg-gray-100">
        <p className="text-gray-600">Location data not available</p>
      </div>
    );
  }

  // Create a Google Maps URL with user location
  const createMapUrl = () => {
    // Use direct Google Maps URL which doesn't require an API key
    const latitude = userLocation.coords.latitude;
    const longitude = userLocation.coords.longitude;
    
    // Create a URL that will show Islamic cemeteries near the user's location
    return `https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d24000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sislamic%20cemetery%20near%20${latitude}%2C${longitude}!5e0!3m2!1sen!2sus!4v1653689712831!5m2!1sen!2sus`;
  };

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

export default SimpleGraveyardMap;

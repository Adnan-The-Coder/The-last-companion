'use client';

import React, { useState, useEffect } from 'react';

const ContactMap: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mapUrl, setMapUrl] = useState('');

  useEffect(() => {
    // Create a Google Maps URL for Hyderabad with Islamic graveyards
    try {
      // Create a URL that will show Islamic cemeteries in Hyderabad
      const url = `https://www.google.com/maps/embed/v1/search?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=islamic+cemetery+in+hyderabad+india&zoom=12`;
      setMapUrl(url);
      setLoading(false);
    } catch (err) {
      console.error('Error creating map URL:', err);
      setError('Failed to load map');
      setLoading(false);
    }
  }, []);

  if (error) {
    return (
      <div className="flex h-[400px] w-full items-center justify-center rounded-lg bg-gray-100 text-center">
        <div>
          <p className="text-red-500">{error}</p>
          <p className="mt-2 text-sm text-gray-500">Please ensure you have an internet connection and try again.</p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex h-[400px] w-full items-center justify-center rounded-lg bg-gray-100">
        <div className="text-center">
          <div className="mb-3 size-8 animate-spin rounded-full border-4 border-[#7F8CAA] border-t-transparent"></div>
          <p className="text-gray-600">Loading map...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden rounded-lg shadow-md">
      <iframe
        title="Graveyard Locations Map"
        width="100%"
        height="400"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        src={mapUrl}
      ></iframe>
    </div>
  );
};

export default ContactMap;

'use client';

import React, { useState, useEffect } from 'react';

interface LocationPermissionPromptProps {
  onPermissionGranted: (_position: GeolocationPosition) => void;
  onPermissionDenied: () => void;
}

const LocationPermissionPrompt: React.FC<LocationPermissionPromptProps> = ({
  onPermissionGranted,
  onPermissionDenied,
}) => {
  const [showPrompt, setShowPrompt] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Check if permission was previously granted
    const locationPermission = localStorage.getItem('locationPermission');
    
    if (locationPermission === null) {
      // Show prompt if permission wasn't previously set
      setShowPrompt(true);
    } else if (locationPermission === 'granted') {
      // If permission was previously granted, try to get location
      requestLocationPermission();
    }
  }, []);

  const requestLocationPermission = () => {
    setLoading(true);
    
    if (!navigator.geolocation) {
      onPermissionDenied();
      setLoading(false);
      setShowPrompt(false);
      localStorage.setItem('locationPermission', 'denied');
      
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        // Success
        localStorage.setItem('locationPermission', 'granted');
        onPermissionGranted(position);
        setLoading(false);
        setShowPrompt(false);
      },
      () => {
        // Error or denied
        localStorage.setItem('locationPermission', 'denied');
        onPermissionDenied();
        setLoading(false);
        setShowPrompt(false);
      }
    );
  };

  const handleDeny = () => {
    localStorage.setItem('locationPermission', 'denied');
    onPermissionDenied();
    setShowPrompt(false);
  };

  if (!showPrompt) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="max-w-md rounded-lg bg-white p-6 shadow-xl">
        <h2 className="mb-3 font-serif text-xl font-semibold text-[#5F6C8A]">Location Access</h2>
        <p className="mb-4 text-gray-600">
          The Last Companion would like to access your location to help you find nearby Islamic graveyards and funeral services.
        </p>
        <p className="mb-6 text-sm text-gray-500">
          Your location data is only used to provide you with relevant local services and is not stored on our servers.
        </p>
        <div className="flex justify-end space-x-3">
          <button
            onClick={handleDeny}
            className="rounded-md border border-gray-300 px-4 py-2 text-gray-600 transition-colors hover:bg-gray-50"
            disabled={loading}
          >
            Deny
          </button>
          <button
            onClick={requestLocationPermission}
            className="rounded-md bg-[#7F8CAA] px-4 py-2 text-white transition-colors hover:bg-[#5F6C8A]"
            disabled={loading}
          >
            {loading ? 'Processing...' : 'Allow'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationPermissionPrompt;

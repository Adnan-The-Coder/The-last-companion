'use client';

import React, { useState, useEffect } from 'react';

import LocationPermissionPrompt from './LocationPermissionPrompt';

interface LocationPermissionProviderProps {
  children: React.ReactNode;
}

const LocationPermissionProvider: React.FC<LocationPermissionProviderProps> = ({ children }) => {
  const [showPrompt, setShowPrompt] = useState<boolean>(false);

  useEffect(() => {
    // Check if this is running in the browser
    if (typeof window !== 'undefined') {
      // Check if permission was previously set
      const storedPermission = localStorage.getItem('locationPermission');
      
      if (storedPermission === null) {
        // Show prompt if permission wasn't previously set
        setShowPrompt(true);
      }
    }
  }, []);

  const handlePermissionGranted = (position: GeolocationPosition) => {
    setShowPrompt(false);
    
    // Log permission status to backend (optional)
    fetch('/api/nearby-graveyards', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: 'anonymous', // In a real app, you'd use a real user ID
        permissionStatus: 'granted',
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      }),
    }).catch(error => {
      console.error('Error logging permission status:', error);
    });
  };

  const handlePermissionDenied = () => {
    setShowPrompt(false);
    
    // Log permission status to backend (optional)
    fetch('/api/nearby-graveyards', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: 'anonymous', // In a real app, you'd use a real user ID
        permissionStatus: 'denied',
      }),
    }).catch(error => {
      console.error('Error logging permission status:', error);
    });
  };

  return (
    <>
      {showPrompt && (
        <LocationPermissionPrompt
          onPermissionGranted={handlePermissionGranted}
          onPermissionDenied={handlePermissionDenied}
        />
      )}
      {children}
    </>
  );
};

export default LocationPermissionProvider;

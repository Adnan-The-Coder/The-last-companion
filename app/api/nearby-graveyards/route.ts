import { NextResponse } from 'next/server';

// Database of graveyards with coordinates in Hyderabad
const graveyardDatabase = [
  {
    id: '1',
    name: 'Humayun Nagar Graveyard',
    latitude: 17.4019,
    longitude: 78.4467,
    address: 'Mehdipatnam, Hyderabad',
    services: ['Burial', 'Janazah Prayer', 'Ghusl'],
  },
  {
    id: '2',
    name: 'Jamali Burial Ground',
    latitude: 17.4134,
    longitude: 78.4150,
    address: 'Tolichowki, Hyderabad',
    services: ['Burial', 'Janazah Prayer', 'Ghusl', 'Transportation'],
  },
  {
    id: '3',
    name: 'Hakimpet Kabristan',
    latitude: 17.4145,
    longitude: 78.4160,
    address: 'Tolichowki, Hyderabad',
    services: ['Burial', 'Janazah Prayer', 'Ghusl', 'Kafan'],
  },
  {
    id: '4',
    name: 'Dargah Hazrat Syed Hussain Shah Wali RH',
    latitude: 17.4350,
    longitude: 78.4480,
    address: 'Shaikpet, Hyderabad',
    services: ['Burial', 'Janazah Prayer', 'Historical Site'],
  },
  {
    id: '5',
    name: 'Shaikpet Sarai',
    latitude: 17.4330,
    longitude: 78.4470,
    address: 'Shaikpet, Hyderabad',
    services: ['Burial', 'Historical Site', 'Mosque'],
  },
  {
    id: '6',
    name: 'Dargah Yousufain',
    latitude: 17.3950,
    longitude: 78.4650,
    address: 'Nampally, Hyderabad',
    services: ['Burial', 'Janazah Prayer', 'Sufi Shrine'],
  },
  {
    id: '7',
    name: 'Daira Mir Momin',
    latitude: 17.3610,
    longitude: 78.4740,
    address: 'Old City, Hyderabad',
    services: ['Burial', 'Historical Site', 'Heritage Site'],
  },
  {
    id: '8',
    name: 'Gulshan Colony Graveyard',
    latitude: 17.4340,
    longitude: 78.4490,
    address: 'Shaikpet, Hyderabad',
    services: ['Burial', 'Janazah Prayer', 'Community Events'],
  },
  {
    id: '9',
    name: 'Qutub Shahi Khabristan',
    latitude: 17.4050,
    longitude: 78.4430,
    address: 'Near Mehdipatnam, Hyderabad',
    services: ['Burial', 'Historical Site', 'Heritage Site'],
  }
];

// Calculate distance between two coordinates using Haversine formula
function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 3958.8; // Earth's radius in miles
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);
  
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  const distance = R * c;
  
  return parseFloat(distance.toFixed(1)); // Return distance in miles with 1 decimal place
}

function toRadians(degrees: number): number {
  return degrees * (Math.PI / 180);
}

export async function POST(request: Request) {
  try {
    const { latitude, longitude, maxDistance = 50 } = await request.json();
    
    // Validate input
    if (typeof latitude !== 'number' || typeof longitude !== 'number') {
      
      return NextResponse.json(
        { error: 'Invalid coordinates. Latitude and longitude must be numbers.' },
        { status: 400 }
      );
    }

    // Find nearby graveyards
    const nearbyGraveyards = graveyardDatabase.map(graveyard => {
      const distance = calculateDistance(
        latitude,
        longitude,
        graveyard.latitude,
        graveyard.longitude
      );
      
      return {
        ...graveyard,
        distance,
      };
    })
    .filter(graveyard => graveyard.distance <= maxDistance)
    .sort((a, b) => a.distance - b.distance);

    return NextResponse.json({ graveyards: nearbyGraveyards });
  } catch (error) {
    console.error('Error processing nearby graveyards request:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}

// For logging location permissions
export async function PUT(request: Request) {
  try {
    const { userId, permissionStatus } = await request.json();
    
    // In a real application, you would store this in a database
    console.log(`User ${userId} set location permission to: ${permissionStatus}`);
    
    // For demonstration purposes, we're just returning success
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error logging permission status:', error);
    return NextResponse.json(
      { error: 'Failed to log permission status' },
      { status: 500 }
    );
  }
}

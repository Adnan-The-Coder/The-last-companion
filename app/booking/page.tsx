/* eslint-disable no-unused-vars */
/* eslint-disable unused-imports/no-unused-imports */
'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { createClient } from '@supabase/supabase-js';

import NearbyGraveyards from '../../components/NearbyGraveyards';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://xyzcompaniondb.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5emNvbXBhbmlvbmRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2MjA0NjQ2MjAsImV4cCI6MTkzNjA0MDYyMH0.examplekey';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

interface ServiceType {
  id: string;
  name: string;
  description: string;
  price: string;
}

// Component to handle search params
const BookingForm = () => {
  const searchParams = useSearchParams();
  const initialGraveyardId = searchParams.get('graveyard');
  
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [deceasedName, setDeceasedName] = useState('');
  const [selectedGraveyard, setSelectedGraveyard] = useState<string | null>(initialGraveyardId || null);
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [bookingId, setBookingId] = useState<string | null>(null);
  
  // Status for error handling
  const [status, setStatus] = useState({
    isError: false,
    message: ''
  });

  // Hyderabad graveyard locations
  const graveyardLocations = [
    {
      id: '1',
      name: 'Humayun Nagar Graveyard',
      address: 'Mehdipatnam, Hyderabad'
    },
    {
      id: '2',
      name: 'Jamali Burial Ground',
      address: 'Tolichowki, Hyderabad'
    },
    {
      id: '3',
      name: 'Hakimpet Kabristan',
      address: 'Tolichowki, Hyderabad'
    },
    {
      id: '4',
      name: 'Dargah Hazrat Syed Hussain Shah Wali RH',
      address: 'Shaikpet, Hyderabad'
    },
    {
      id: '5',
      name: 'Shaikpet Sarai',
      address: 'Shaikpet, Hyderabad'
    },
    {
      id: '6',
      name: 'Dargah Yousufain',
      address: 'Nampally, Hyderabad'
    },
    {
      id: '7',
      name: 'Daira Mir Momin',
      address: 'Old City, Hyderabad'
    },
    {
      id: '8',
      name: 'Gulshan Colony Graveyard',
      address: 'Shaikpet, Hyderabad'
    },
    {
      id: '9',
      name: 'Qutub Shahi Khabristan',
      address: 'Near Mehdipatnam, Hyderabad'
    }
  ];

  // Mock data for service types
  const serviceTypes: ServiceType[] = [
    {
      id: 'ghusl',
      name: 'Ghusl Service',
      description: 'Complete Islamic ritual washing and shrouding (kafan) of the deceased.',
      price: '$400'
    },
    {
      id: 'sitting',
      name: 'Sitting Arrangements Service',
      description: 'Arrangements for mourners including seating, water, and basic facilities.',
      price: '$300'
    },
    {
      id: 'burial',
      name: 'Islamic Burial Service',
      description: 'Full burial service following Islamic traditions and customs.',
      price: '$1,200'
    },
    {
      id: 'transport',
      name: 'Body Transportation',
      description: 'Respectful transportation of the deceased to the burial site.',
      price: '$300'
    },
    {
      id: 'complete',
      name: 'Complete Funeral Package',
      description: 'All-inclusive package with ghusl, sitting arrangements, burial, and transportation services.',
      price: '$2,000'
    }
  ];

  // Get tomorrow's date as the minimum selectable date
  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    return tomorrow.toISOString().split('T')[0];
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ isError: false, message: '' });
    
    try {
      // Get the selected service details
      const selectedServiceDetails = serviceTypes.find(s => s.id === selectedService);
      
      // Prepare booking data for Supabase
      const bookingData = {
        customer_name: name,
        customer_email: email,
        customer_phone: phone,
        deceased_name: deceasedName,
        service_type: selectedService,
        service_name: selectedServiceDetails?.name || '',
        service_description: selectedServiceDetails?.description || '',
        service_price: selectedServiceDetails?.price || '',
        booking_date: selectedDate,
        booking_time: selectedTime,
        graveyard_id: selectedGraveyard,
        graveyard_name: graveyardLocations.find(g => g.id === selectedGraveyard)?.name || '',
        graveyard_address: graveyardLocations.find(g => g.id === selectedGraveyard)?.address || '',
        additional_notes: notes || null,
        booking_status: 'pending',
        created_at: new Date().toISOString(),
      };

      // Insert booking data into Supabase
      const { data, error } = await supabase
        .from('FuneralServiceBookings')
        .insert([bookingData])
        .select('id')
        .single();

      if (error) {
        throw error;
      }

      // Send confirmation email
      const emailResponse = await fetch('/api/mail-sender', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      if (!emailResponse.ok) {
        console.error('Failed to send confirmation email');
      }

      // Store the booking ID for reference
      setBookingId(data.id);
      setIsSubmitting(false);
      setIsComplete(true);
    } catch (error) {
      console.error('Error submitting booking:', error);
      setIsSubmitting(false);
      setStatus({
        isError: true,
        message: 'Failed to submit booking. Please try again or contact us directly.'
      });
    }
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2D3142]/5 to-[#2D3142]/10 py-12">
      <div className="container mx-auto max-w-4xl px-4" style={{opacity: 1, transform: 'translateY(0)', transition: 'opacity 0.6s ease, transform 0.6s ease'}}>
        <h1 className="mb-2 text-center font-serif text-4xl font-bold text-[#2D3142]">Book a <span className="text-[#EF8354]">Service</span></h1>
        <p className="mb-8 text-center text-[#4F5D75]">Schedule Islamic funeral services with dignity and respect</p>
        {/* Error Message Display */}
        {status.isError && (
          <div className="mb-6 rounded-lg border border-red-500/20 bg-red-500/10 p-4 text-center">
            <p className="text-red-600">{status.message}</p>
          </div>
        )}
        {!isComplete ? (
          <div className="mb-8 rounded-lg border border-[#BFC0C0]/10 bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl">
            <div className="mb-8 flex items-center justify-between">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className={`flex size-10 items-center justify-center rounded-full ${
                    step >= i ? 'bg-[#2D3142] text-white' : 'bg-[#BFC0C0]/20 text-[#4F5D75]'
                  } transition-colors duration-300`}>
                    {i}
                  </div>
                  <span className={`mt-2 text-sm ${step >= i ? 'text-[#2D3142]' : 'text-[#4F5D75]'} transition-colors duration-300`}>
                    {i === 1 ? 'Service' : i === 2 ? 'Details' : 'Confirmation'}
                  </span>
                </div>
              ))}
            </div>
            {step === 1 && (
              <div className="animate-fade-in">
                <h3 className="mb-4 text-xl font-semibold text-[#2D3142]">Select Burial Location</h3>
                <div className="mb-6">
                  <label htmlFor="graveyard" className="mb-2 block text-sm font-medium text-[#4F5D75]">Select Graveyard</label>
                  <select
                    id="graveyard"
                    value={selectedGraveyard || ''}
                    onChange={(e) => setSelectedGraveyard(e.target.value)}
                    className="w-full rounded-md border border-gray-300 p-2 text-[#2D3142] focus:border-[#EF8354] focus:outline-none focus:ring-1 focus:ring-[#EF8354]"
                    required
                  >
                    <option value="" disabled>Select a graveyard</option>
                    {graveyardLocations.map((graveyard) => (
                      <option key={graveyard.id} value={graveyard.id}>
                        {graveyard.name} - {graveyard.address}
                      </option>
                    ))}
                  </select>
                </div>
                <h3 className="mb-4 mt-8 text-xl font-semibold text-[#2D3142]">Select a Service</h3>
                <div className="mb-6 grid gap-4 md:grid-cols-2">
                  {serviceTypes.map((service) => (
                    <div 
                      key={service.id}
                      onClick={() => setSelectedService(service.id)}
                      className={`cursor-pointer rounded-lg border p-4 transition-all duration-300 hover:border-[#EF8354] hover:shadow-md ${selectedService === service.id ? 'border-[#EF8354] bg-[#EF8354]/5 shadow-md' : 'border-gray-200'}`}
                    >
                      <h4 className="mb-1 font-medium text-[#2D3142]">{service.name}</h4>
                      <p className="mb-2 text-sm text-[#4F5D75]">{service.description}</p>
                      <p className="font-medium text-[#EF8354]">{service.price}</p>
                    </div>
                  ))}
                </div>
                <div className="flex justify-end">
                  <button onClick={nextStep}
                    disabled={!selectedService || !selectedGraveyard}
                    className={`group relative flex items-center overflow-hidden rounded-md bg-[#2D3142] px-6 py-2 font-medium text-white transition-all duration-300 hover:bg-[#2D3142]/90 hover:shadow-md disabled:opacity-50`}
                  >
                    <span className="relative z-10">Continue</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-[#EF8354]/80 to-[#D64C1B]/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                  </button>
                </div>
              </div>
            )}
            {step === 2 && (
              <div className="animate-fade-in">
                <h2 className="mb-4 font-serif text-2xl font-bold text-[#2D3142]">Your <span className="text-[#EF8354]">Details</span></h2>
                <div className="mb-6 space-y-4">
                  <div className="mb-6">
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-[#4F5D75]">Your Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-md border border-gray-300 p-2 text-[#2D3142] focus:border-[#EF8354] focus:outline-none focus:ring-1 focus:ring-[#EF8354]"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="deceasedName" className="mb-2 block text-sm font-medium text-[#4F5D75]">Deceased Person's Full Name</label>
                    <input 
                      type="text" 
                      id="deceasedName" 
                      value={deceasedName}
                      onChange={(e) => setDeceasedName(e.target.value)}
                      className="w-full rounded-md border border-gray-300 p-2 text-[#2D3142] focus:border-[#EF8354] focus:outline-none focus:ring-1 focus:ring-[#EF8354]"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1 block text-sm font-medium text-[#4F5D75]">Email Address</label>
                    <input type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-md border border-gray-300 p-2 text-[#2D3142] focus:border-[#EF8354] focus:outline-none focus:ring-1 focus:ring-[#EF8354]"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1 block text-sm font-medium text-[#4F5D75]">Phone Number</label>
                    <input type="tel"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full rounded-md border border-gray-300 p-2 text-[#2D3142] focus:border-[#EF8354] focus:outline-none focus:ring-1 focus:ring-[#EF8354]"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label htmlFor="date" className="mb-1 block text-sm font-medium text-[#4F5D75]">Date</label>
                      <input type="date"
                        id="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        min={getTomorrowDate()}
                        className="w-full rounded-md border border-gray-300 p-2 text-[#2D3142] focus:border-[#EF8354] focus:outline-none focus:ring-1 focus:ring-[#EF8354]"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="time" className="mb-1 block text-sm font-medium text-[#4F5D75]">Time</label>
                      <select id="time"
                        value={selectedTime}
                        onChange={(e) => setSelectedTime(e.target.value)}
                        className="w-full rounded-md border border-gray-300 p-2 text-[#2D3142] focus:border-[#EF8354] focus:outline-none focus:ring-1 focus:ring-[#EF8354]"
                        required
                      >
                        <option value="">Select a time</option>
                        <option value="9:00 AM">9:00 AM</option>
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="11:00 AM">11:00 AM</option>
                        <option value="12:00 PM">12:00 PM</option>
                        <option value="1:00 PM">1:00 PM</option>
                        <option value="2:00 PM">2:00 PM</option>
                        <option value="3:00 PM">3:00 PM</option>
                        <option value="4:00 PM">4:00 PM</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="notes" className="mb-1 block text-sm font-medium text-[#4F5D75]">Additional Notes (Optional)</label>
                    <textarea id="notes"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      rows={4}
                      className="w-full rounded-md border border-gray-300 p-2 text-[#2D3142] focus:border-[#EF8354] focus:outline-none focus:ring-1 focus:ring-[#EF8354]"
                      placeholder="Any special requests or information we should know"></textarea>
                  </div>
                </div>
                <div className="flex justify-between">
                  <button onClick={prevStep}
                    className="group relative flex items-center overflow-hidden rounded-md border border-[#2D3142] bg-white px-6 py-2 font-medium text-[#2D3142] transition-all duration-300 hover:bg-[#2D3142]/5 hover:shadow-md"
                  >
                    <span className="relative z-10">Back</span>
                    <span className="absolute inset-0 bg-[#2D3142]/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                  </button>
                  <button onClick={nextStep}
                    disabled={!name || !email || !phone || !selectedDate || !selectedTime}
                    className={`group relative flex items-center overflow-hidden rounded-md bg-[#2D3142] px-6 py-2 font-medium text-white transition-all duration-300 ${
                      name && email && phone && selectedDate && selectedTime
                        ? 'hover:bg-[#2D3142]/90 hover:shadow-md'
                        : 'cursor-not-allowed opacity-50'
                    }`}
                  >
                    <span className="relative z-10">Review Booking</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-[#EF8354]/80 to-[#D64C1B]/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                  </button>
                </div>
              </div>
            )}
            {step === 3 && (
              <div className="animate-fade-in">
                <h3 className="mb-4 text-xl font-semibold text-[#2D3142]">Review Your Booking</h3>
                <div className="mb-6 rounded-lg border border-gray-200 p-4">
                  <div className="mb-4 border-b border-gray-100 pb-4">
                    <h4 className="font-medium text-[#2D3142]">Selected Graveyard</h4>
                    <p className="text-[#4F5D75]">{graveyardLocations.find(g => g.id === selectedGraveyard)?.name}</p>
                    <p className="text-sm text-[#4F5D75]">{graveyardLocations.find(g => g.id === selectedGraveyard)?.address}</p>
                  </div>
                  <div className="mb-4 border-b border-gray-100 pb-4">
                    <h4 className="font-medium text-[#2D3142]">Deceased Person</h4>
                    <p className="text-[#4F5D75]">{deceasedName}</p>
                  </div>
                  <div className="mb-4 border-b border-gray-100 pb-4">
                    <h4 className="font-medium text-[#2D3142]">Selected Service</h4>
                    <p className="text-[#4F5D75]">{serviceTypes.find(s => s.id === selectedService)?.name}</p>
                    <p className="text-sm text-[#4F5D75]">{serviceTypes.find(s => s.id === selectedService)?.description}</p>
                    <p className="mt-1 font-medium text-[#EF8354]">{serviceTypes.find(s => s.id === selectedService)?.price}</p>
                  </div>
                  <div className="mb-4 border-b border-gray-100 pb-4">
                    <h4 className="font-medium text-[#2D3142]">Date & Time</h4>
                    <p className="text-[#4F5D75]">{selectedDate} at {selectedTime}</p>
                  </div>
                  <div className="mb-4 border-b border-gray-100 pb-4">
                    <h4 className="font-medium text-[#2D3142]">Your Details</h4>
                    <p className="text-[#4F5D75]">{name}</p>
                    <p className="text-sm text-[#4F5D75]">{email}</p>
                    <p className="text-sm text-[#4F5D75]">{phone}</p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <button onClick={prevStep}
                    disabled={isSubmitting}
                    className="group relative flex items-center overflow-hidden rounded-md border border-[#2D3142] bg-white px-6 py-2 font-medium text-[#2D3142] transition-all duration-300 hover:bg-[#2D3142]/5 hover:shadow-md disabled:opacity-50"
                  >
                    <span className="relative z-10">Back</span>
                    <span className="absolute inset-0 bg-[#2D3142]/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                  </button>
                  <button onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="group relative flex items-center overflow-hidden rounded-md bg-[#2D3142] px-6 py-2 font-medium text-white transition-all duration-300 hover:bg-[#2D3142]/90 hover:shadow-md disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="mr-2 size-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      'Confirm Booking'
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="animate-fade-in rounded-lg border border-[#BFC0C0]/10 bg-white p-8 text-center shadow-lg">
            <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-[#EF8354]/10">
              <svg xmlns="http://www.w3.org/2000/svg" 
                className="size-8 text-[#EF8354]" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor">
                <path strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="mb-2 font-serif text-2xl font-bold text-[#2D3142]">Booking <span className="text-[#EF8354]">Confirmed</span></h2>
            <p className="mb-4 text-[#4F5D75]">
              Thank you for your booking. We have sent a confirmation email to {email} with all the details.
            </p>
            {bookingId && (
              <p className="mb-4 text-sm text-[#4F5D75]">
                Your booking reference ID: <span className="font-mono font-medium text-[#2D3142]">{bookingId}</span>
              </p>
            )}
            <p className="mb-6 text-[#4F5D75]">
              Our team will contact you shortly to confirm the details and arrange for payment.
            </p>
            <div className="flex justify-center">
              <Link href="/"
                className="group relative overflow-hidden rounded-md bg-[#2D3142] px-6 py-2 font-medium text-white transition-all duration-300 hover:bg-[#2D3142]/90 hover:shadow-md"
              >
                <span className="relative z-10">Return to Home</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#EF8354]/80 to-[#D64C1B]/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default function BookingPage() {
  return (
    <Suspense fallback={
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-[#2D3142]/5 to-[#2D3142]/10 py-12">
        <div className="animate-pulse text-center">
          <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-[#EF8354]/10">
            <svg className="size-8 animate-spin text-[#EF8354]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
          <p className="text-[#4F5D75]">Loading booking form...</p>
        </div>
      </div>
    }>
      <BookingForm />
    </Suspense>
  );
}
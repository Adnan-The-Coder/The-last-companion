/* eslint-disable no-unused-vars */
/* eslint-disable unused-imports/no-unused-imports */
'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

import NearbyGraveyards from '../../components/NearbyGraveyards';

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
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  // Using underscore prefix to indicate intentionally unused variable
  const [selectedGraveyardId] = useState<string | null>(initialGraveyardId);

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
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsComplete(true);
    }, 1500);
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
            {step === 1 && (<div className="animate-fade-in">
              <h2 className="mb-4 font-serif text-2xl font-bold text-[#2D3142]">Select a <span className="text-[#EF8354]">Service</span></h2>
              <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                {serviceTypes.map((service) => (
                  <div key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={`cursor-pointer rounded-lg border p-4 transition-all duration-300 hover:shadow-md ${
                      selectedService === service.id 
                        ? 'border-[#EF8354] bg-[#EF8354]/5' 
                        : 'border-[#BFC0C0]/20 bg-white hover:border-[#BFC0C0]/40'
                    }`}>
                    <h3 className="mb-1 font-medium text-[#2D3142]">{service.name}</h3>
                    <p className="mb-3 text-sm text-[#4F5D75]">{service.description}</p>
                    <p className="font-medium text-[#EF8354]">{service.price}</p>
                  </div>
                ))}
              </div>
              <div className="flex justify-end">
                <button onClick={nextStep}
                  disabled={!selectedService}
                  className={`group relative overflow-hidden rounded-md px-6 py-2 font-medium text-white transition-all duration-300 ${
                    selectedService 
                      ? 'bg-[#2D3142] hover:bg-[#2D3142]/90 hover:shadow-md' 
                      : 'cursor-not-allowed bg-gray-200 text-gray-500'
                  }`}>
                  <span className="relative z-10">Continue</span>
                  {selectedService && (
                    <span className="absolute inset-0 bg-gradient-to-r from-[#EF8354] to-[#D64C1B] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                  )}
                </button>
              </div>
            </div>)}
            {step === 2 && (<div className="animate-fade-in">
              <h2 className="mb-4 font-serif text-2xl font-bold text-[#2D3142]">Your <span className="text-[#EF8354]">Details</span></h2>
              <div className="mb-6 space-y-4">
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm font-medium text-[#4F5D75]">Full Name</label>
                  <input type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-md border border-[#BFC0C0]/30 bg-white px-4 py-2 text-[#2D3142] outline-none transition-all duration-300 focus:border-[#EF8354] focus:ring focus:ring-[#EF8354]/20"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1 block text-sm font-medium text-[#4F5D75]">Email Address</label>
                  <input type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-md border border-[#BFC0C0]/30 bg-white px-4 py-2 text-[#2D3142] outline-none transition-all duration-300 focus:border-[#EF8354] focus:ring focus:ring-[#EF8354]/20"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1 block text-sm font-medium text-[#4F5D75]">Phone Number</label>
                  <input type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-md border border-[#BFC0C0]/30 bg-white px-4 py-2 text-[#2D3142] outline-none transition-all duration-300 focus:border-[#EF8354] focus:ring focus:ring-[#EF8354]/20"
                    placeholder="Enter your phone number"
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
                      className="w-full rounded-md border border-[#BFC0C0]/30 bg-white px-4 py-2 text-[#2D3142] outline-none transition-all duration-300 focus:border-[#EF8354] focus:ring focus:ring-[#EF8354]/20"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className="mb-1 block text-sm font-medium text-[#4F5D75]">Time</label>
                    <select id="time"
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full rounded-md border border-[#BFC0C0]/30 bg-white px-4 py-2 text-[#2D3142] outline-none transition-all duration-300 focus:border-[#EF8354] focus:ring focus:ring-[#EF8354]/20"
                      required>
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
                    className="w-full rounded-md border border-[#BFC0C0]/30 bg-white px-4 py-2 text-[#2D3142] outline-none transition-all duration-300 focus:border-[#EF8354] focus:ring focus:ring-[#EF8354]/20"
                    placeholder="Any special requests or information we should know"></textarea>
                </div>
              </div>
              <div className="flex justify-between">
                <button onClick={prevStep}
                  className="group relative overflow-hidden rounded-md border border-[#2D3142] bg-white px-6 py-2 font-medium text-[#2D3142] transition-all duration-300 hover:shadow-md">
                  <span className="relative z-10">Back</span>
                  <span className="absolute inset-0 bg-[#2D3142]/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                </button>
                <button onClick={nextStep}
                  disabled={!name || !email || !phone || !selectedDate || !selectedTime}
                  className={`group relative overflow-hidden rounded-md px-6 py-2 font-medium text-white transition-all duration-300 ${
                    name && email && phone && selectedDate && selectedTime
                      ? 'bg-[#2D3142] hover:bg-[#2D3142]/90 hover:shadow-md' 
                      : 'cursor-not-allowed bg-gray-200 text-gray-500'
                  }`}>
                  <span className="relative z-10">Review Booking</span>
                  {name && email && phone && selectedDate && selectedTime && (
                    <span className="absolute inset-0 bg-gradient-to-r from-[#EF8354] to-[#D64C1B] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                  )}
                </button>
              </div>
            </div>)}
            {step === 3 && (<div className="animate-fade-in">
              <h2 className="mb-4 font-serif text-2xl font-bold text-[#2D3142]">Confirm Your <span className="text-[#EF8354]">Booking</span></h2>
              <div className="mb-6 rounded-lg bg-[#2D3142]/5 p-6">
                <h3 className="mb-4 font-bold text-[#2D3142]">Booking Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <dt className="text-[#4F5D75]">Service:</dt>
                    <dd className="font-medium text-[#2D3142]">
                      {serviceTypes.find(s => s.id === selectedService)?.name}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-[#4F5D75]">Date & Time:</dt>
                    <dd className="font-medium text-[#2D3142]">
                      {selectedDate} at {selectedTime}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-[#4F5D75]">Contact:</dt>
                    <dd className="font-medium text-[#2D3142]">
                      {name}, {email}, {phone}
                    </dd>
                  </div>
                  {notes && (
                    <div className="flex justify-between">
                      <dt className="text-[#4F5D75]">Notes:</dt>
                      <dd className="font-medium text-[#2D3142]">{notes}</dd>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <dt className="text-[#4F5D75]">Price:</dt>
                    <dd className="font-medium text-[#2D3142]">
                      {serviceTypes.find(s => s.id === selectedService)?.price}
                    </dd>
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <button onClick={prevStep}
                  className="group relative overflow-hidden rounded-md border border-[#2D3142] bg-white px-6 py-2 font-medium text-[#2D3142] transition-all duration-300 hover:shadow-md">
                  <span className="relative z-10">Back</span>
                  <span className="absolute inset-0 bg-[#2D3142]/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                </button>
                <button onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="group relative flex items-center overflow-hidden rounded-md bg-[#2D3142] px-6 py-2 font-medium text-white transition-all duration-300 hover:bg-[#2D3142]/90 hover:shadow-md">
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
            </div>)}
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
            <p className="mb-6 text-[#4F5D75]">
              Thank you for your booking. We have sent a confirmation email to {email} with all the details.
            </p>
            <p className="mb-6 text-[#4F5D75]">
              Our team will contact you shortly to confirm the details and arrange for payment.
            </p>
            <div className="flex justify-center">
              <Link href="/"
                className="group relative overflow-hidden rounded-md bg-[#2D3142] px-6 py-2 font-medium text-white transition-all duration-300 hover:bg-[#2D3142]/90 hover:shadow-md">
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

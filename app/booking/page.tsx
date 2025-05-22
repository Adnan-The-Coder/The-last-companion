'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import NearbyGraveyards from '@/components/NearbyGraveyards';

interface ServiceType {
  id: string;
  name: string;
  description: string;
  price: string;
}

const BookingPage = () => {
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
  const [selectedGraveyardId, setSelectedGraveyardId] = useState<string | null>(initialGraveyardId);

  // Mock data for service types
  const serviceTypes: ServiceType[] = [
    {
      id: 'janazah',
      name: 'Janazah Prayer Service',
      description: 'Complete Islamic funeral prayer service with religious guidance.',
      price: '$500'
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
      description: 'All-inclusive package with prayer, burial, and transportation services.',
      price: '$1,800'
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
      <div className="container max-w-4xl mx-auto px-4" style={{opacity: 1, transform: 'translateY(0)', transition: 'opacity 0.6s ease, transform 0.6s ease'}}>
        <h1 className="text-4xl font-serif font-bold text-[#2D3142] mb-2 text-center">Book a <span className="text-[#EF8354]">Service</span></h1>
        <p className="text-[#4F5D75] text-center mb-8">Schedule Islamic funeral services with dignity and respect</p>
        
        {!isComplete ? (
          <>
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 mb-8 border border-[#BFC0C0]/10">
              <div className="flex justify-between items-center mb-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div 
                      className={`size-10 rounded-full flex items-center justify-center ${
                        step >= i ? 'bg-[#2D3142] text-white' : 'bg-[#BFC0C0]/20 text-[#4F5D75]'
                      } transition-colors duration-300`}
                    >
                      {i}
                    </div>
                    <span className={`text-sm mt-2 ${step >= i ? 'text-[#2D3142]' : 'text-[#4F5D75]'} transition-colors duration-300`}>
                      {i === 1 ? 'Service' : i === 2 ? 'Details' : 'Confirmation'}
                    </span>
                  </div>
                ))}
              </div>
              
              {step === 1 && (
                <div className="animate-fade-in">
                  <h2 className="text-2xl font-serif font-bold text-[#2D3142] mb-4">Select a <span className="text-[#EF8354]">Service</span></h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {serviceTypes.map((service) => (
                      <div 
                        key={service.id}
                        onClick={() => setSelectedService(service.id)}
                        className={`border rounded-lg p-4 cursor-pointer transition-all duration-300 ${selectedService === service.id ? 'border-[#EF8354] bg-[#EF8354]/5' : 'border-[#BFC0C0]/30 hover:border-[#EF8354]/50'}`}
                      >
                        <div className="flex justify-between items-start">
                          <h3 className="font-bold text-[#2D3142] group-hover:text-[#EF8354] transition-colors duration-300">{service.name}</h3>
                          <p className="text-[#4F5D75] text-sm mb-2">{service.description}</p>
                          <p className="text-[#EF8354] font-semibold">{service.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {!selectedGraveyardId && <NearbyGraveyards />}
                  
                  <div className="flex justify-end mt-6">
                    <button
                      onClick={nextStep}
                      disabled={!selectedService}
                      className="group relative overflow-hidden px-6 py-2 bg-[#2D3142] text-white rounded-md font-medium hover:bg-[#2D3142]/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-md"
                    >
                      <span className="relative z-10">Continue</span>
                      <span className="absolute inset-0 bg-gradient-to-r from-[#EF8354]/80 to-[#D64C1B]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </button>
                  </div>
                </div>
              )}
              
              {step === 2 && (
                <div className="animate-fade-in">
                  <h2 className="text-2xl font-serif font-bold text-[#2D3142] mb-4">Enter Booking <span className="text-[#EF8354]">Details</span></h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-[#2D3142] mb-1">Select Date</label>
                      <input
                        type="date"
                        min={getTomorrowDate()}
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-[#BFC0C0]/30 rounded-md shadow-sm focus:outline-none focus:ring-[#EF8354] focus:border-[#EF8354] transition-colors duration-200"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-[#2D3142] mb-1">Select Time</label>
                      <select
                        value={selectedTime}
                        onChange={(e) => setSelectedTime(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-[#BFC0C0]/30 rounded-md shadow-sm focus:outline-none focus:ring-[#EF8354] focus:border-[#EF8354] transition-colors duration-200"
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
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-[#2D3142] mb-1">Full Name</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder="Your full name"
                        className="w-full px-3 py-2 border border-[#BFC0C0]/30 rounded-md shadow-sm text-black placeholder:text-[#4F5D75]/50 focus:outline-none focus:ring-[#EF8354] focus:border-[#EF8354] transition-colors duration-200"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-[#2D3142] mb-1">Email Address</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="your.email@example.com"
                        className="w-full px-3 py-2 border border-[#BFC0C0]/30 rounded-md shadow-sm text-black placeholder:text-[#4F5D75]/50 focus:outline-none focus:ring-[#EF8354] focus:border-[#EF8354] transition-colors duration-200"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-[#2D3142] mb-1">Phone Number</label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        placeholder="(123) 456-7890"
                        className="w-full px-3 py-2 border border-[#BFC0C0]/30 rounded-md shadow-sm text-black placeholder:text-[#4F5D75]/50 focus:outline-none focus:ring-[#EF8354] focus:border-[#EF8354] transition-colors duration-200"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-[#2D3142] mb-1">Special Instructions (Optional)</label>
                      <textarea
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Any special requirements or additional information"
                        rows={3}
                        className="w-full px-3 py-2 border border-[#BFC0C0]/30 rounded-md shadow-sm text-black placeholder:text-[#4F5D75]/50 focus:outline-none focus:ring-[#EF8354] focus:border-[#EF8354] transition-colors duration-200"
                      ></textarea>
                    </div>
                  </div>
                  
                  <div className="flex justify-between mt-6">
                    <button
                      onClick={prevStep}
                      className="px-6 py-2 border border-[#4F5D75]/30 text-[#2D3142] rounded-md font-medium hover:bg-[#BFC0C0]/10 transition-all duration-300"
                    >
                      Back
                    </button>
                    <button
                      onClick={nextStep}
                      disabled={!selectedDate || !selectedTime || !name || !email || !phone}
                      className={`px-6 py-2 rounded-md font-medium ${
                        selectedDate && selectedTime && name && email && phone
                          ? 'bg-[#2D3142] text-white hover:bg-[#2D3142]/90' 
                          : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      } transition-all duration-300 hover:shadow-md`}
                    >
                      Review Booking
                    </button>
                  </div>
                </div>
              )}
              
              {step === 3 && (
                <div className="animate-fade-in">
                  <h2 className="text-2xl font-serif font-bold text-[#2D3142] mb-4">Confirm Your <span className="text-[#EF8354]">Booking</span></h2>
                  
                  <div className="bg-[#2D3142]/5 rounded-lg p-6 mb-6">
                    <h3 className="font-bold text-[#2D3142] mb-4">Booking Summary</h3>
                    
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
                        <dd className="font-medium text-[#2D3142]">{email} | {phone}</dd>
                      </div>
                      
                      <div className="flex justify-between">
                        <dt className="text-[#4F5D75]">Price:</dt>
                        <dd className="font-medium text-[#EF8354]">
                          {serviceTypes.find(s => s.id === selectedService)?.price}
                        </dd>
                      </div>
                      
                      {notes && (
                        <div className="mt-3">
                          <span className="text-gray-600 block">Notes:</span>
                          <span className="text-sm mt-1">{notes}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-6">
                    <div className="flex">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="size-5 text-[#EF8354] mr-2" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                        />
                      </svg>
                      <p className="text-[#4F5D75]">
                        By confirming this booking, you agree to our <a href="#" className="text-[#EF8354] hover:text-[#D64C1B] transition-colors duration-300">terms and conditions</a>. 
                        A 50% deposit will be required to secure your booking.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between mt-6">
                    <button
                      onClick={prevStep}
                      className="px-6 py-2 border border-[#4F5D75]/30 text-[#2D3142] rounded-md font-medium hover:bg-[#BFC0C0]/10 transition-all duration-300"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="group relative overflow-hidden px-6 py-2 bg-[#2D3142] text-white rounded-md font-medium hover:bg-[#2D3142]/90 transition-all duration-300 flex items-center hover:shadow-md"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin size-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
          </>
        ) : (
          <div className="bg-white rounded-lg shadow-lg p-8 text-center animate-fade-in border border-[#BFC0C0]/10">
            <div className="size-16 bg-[#EF8354]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="size-8 text-[#EF8354]" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 13l4 4L19 7" 
                />
              </svg>
            </div>
            <h2 className="text-2xl font-serif font-bold text-[#2D3142] mb-2">Booking <span className="text-[#EF8354]">Confirmed</span></h2>
            <p className="text-[#4F5D75] mb-6">
              Thank you for your booking. We have sent a confirmation email to {email} with all the details.
            </p>
            <p className="text-[#4F5D75] mb-6">
              Our team will contact you shortly to confirm the details and arrange for payment.
            </p>
            <div className="flex justify-center">
              <Link 
                href="/"
                className="group relative overflow-hidden px-6 py-2 bg-[#2D3142] text-white rounded-md font-medium hover:bg-[#2D3142]/90 transition-all duration-300 hover:shadow-md"
              >
                <span className="relative z-10">Return to Home</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#EF8354]/80 to-[#D64C1B]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingPage;

/* eslint-disable no-unused-vars */
'use client';

import React, { useState } from 'react';
import { BiDonateHeart } from 'react-icons/bi';
import { motion } from 'framer-motion';

import DonationModal from '@/components/DonationModal';

export default function FundraiserPage() {
  const [donationAmount, setDonationAmount] = useState<number>(100);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isAnonymous, setIsAnonymous] = useState<boolean>(false);
  const [showDonationModal, setShowDonationModal] = useState<boolean>(false);

  const handleDonationAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (!isNaN(value) && value >= 0) {
      setDonationAmount(value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (donationAmount <= 0) {
      alert('Please enter a valid donation amount');
      
return;
    }

    if (!email) {
      alert('Email is required');
      
return;
    }

    if (!phone) {
      alert('Phone number is required');
      
return;
    }

    if (!isAnonymous && !name) {
      alert('Name is required');
      
return;
    }

    // Open donation modal with current form data
    setShowDonationModal(true);
  };

  const handleDonationSuccess = async (paymentData: any) => {
    try {
      // Reset form
      setDonationAmount(100);
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setIsAnonymous(false);
      setShowDonationModal(false);
    } catch (error) {
      console.error('Error logging payment:', error);
      alert('There was an error processing your donation. Please contact support.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2D3142]/5 to-[#2D3142]/10">
      {/* Hero Section */}
      <section className="relative py-20 text-white">
        <div className="absolute inset-0 bg-[url('/images/mosque-silhouette.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#2D3142]/95 to-[#4F5D75]/80"></div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Support Our <span className="text-[#EF8354]">Community</span> Initiatives
            </h1>
            <p className="mb-8 text-xl text-[#BFC0C0]">
              Your donations help us provide dignified Islamic funeral services to those in need and support community projects.
            </p>
            <div className="mx-auto mb-8 h-1 w-24 rounded bg-[#EF8354]"></div>
            <div className="mb-8 rounded-lg border-l-4 border-[#EF8354] bg-[#2D3142]/80 p-4 shadow-lg">
              <p className="arabic-quote mb-2 text-right text-xl text-[#EF8354]">
                مَن ذَا الَّذِي يُقْرِضُ اللَّهَ قَرْضًا حَسَنًا فَيُضَاعِفَهُ لَهُ أَضْعَافًا كَثِيرَةً
              </p>
              <p className="italic text-[#BFC0C0]">
                "Who is it that would loan Allah a goodly loan so He may multiply it for him many times over?"
              </p>
              <p className="text-sm text-[#4F5D75]">— Surah Al-Baqarah [2:245]</p>
            </div>
          </div>
        </div>
      </section>
      {/* Donation Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="relative mb-4 inline-block font-serif text-3xl font-bold text-[#2D3142]">
                Make a Donation
                <span className="absolute inset-x-1/4 -bottom-2 h-0.5 rounded-full bg-[#EF8354]/70"></span>
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-lg text-[#4F5D75]">
                Your generous contributions help us serve the community and provide assistance to those who cannot afford funeral services.
              </p>
            </div>
            <div className="rounded-lg bg-white p-8 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Donation Amount */}
                <div>
                  <label htmlFor="donationAmount" className="mb-2 block font-medium text-[#2D3142]">
                    Donation Amount (₹)
                  </label>
                  <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                    {[100, 500, 1000, 5000].map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        className={`rounded-md py-3 text-center transition-all ${
                          donationAmount === amount
                            ? 'bg-[#EF8354] text-white'
                            : 'border border-[#4F5D75]/30 text-[#4F5D75] hover:border-[#EF8354] hover:text-[#EF8354]'
                        }`}
                        onClick={() => setDonationAmount(amount)}
                      >
                        ₹{amount}
                      </button>
                    ))}
                  </div>
                  <div className="mt-4">
                    <label htmlFor="customAmount" className="mb-2 block text-sm font-medium text-[#4F5D75]">
                      Or enter custom amount:
                    </label>
                    <input
                      type="number"
                      id="customAmount"
                      value={donationAmount}
                      onChange={handleDonationAmountChange}
                      className="w-full rounded-md border border-[#4F5D75]/30 p-3 text-black focus:border-[#EF8354] focus:outline-none focus:ring-1 focus:ring-[#EF8354]"
                      min="1"
                    />
                  </div>
                </div>
                {/* Personal Information */}
                <div className="space-y-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="anonymous"
                      checked={isAnonymous}
                      onChange={() => setIsAnonymous(!isAnonymous)}
                      className="size-4 rounded border-[#4F5D75]/30 text-[#EF8354] focus:ring-[#EF8354]"
                    />
                    <label htmlFor="anonymous" className="ml-2 text-[#4F5D75]">
                      Donate Anonymously
                    </label>
                  </div>
                  {!isAnonymous && (
                    <div>
                      <label htmlFor="name" className="mb-2 block font-medium text-[#2D3142]">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-md border border-[#4F5D75]/30 p-3 text-black focus:border-[#EF8354] focus:outline-none focus:ring-1 focus:ring-[#EF8354]"
                        required={!isAnonymous}
                      />
                    </div>
                  )}
                  <div>
                    <label htmlFor="email" className="mb-2 block font-medium text-[#2D3142]">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-md border border-[#4F5D75]/30 p-3 text-black focus:border-[#EF8354] focus:outline-none focus:ring-1 focus:ring-[#EF8354]"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-2 block font-medium text-[#2D3142]">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full rounded-md border border-[#4F5D75]/30 p-3 text-black focus:border-[#EF8354] focus:outline-none focus:ring-1 focus:ring-[#EF8354]"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-2 block font-medium text-[#2D3142]">
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={4}
                      className="w-full rounded-md border border-[#4F5D75]/30 p-3 text-black focus:border-[#EF8354] focus:outline-none focus:ring-1 focus:ring-[#EF8354]"
                    />
                  </div>
                </div>
                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full rounded-md bg-[#EF8354] py-3 font-medium text-white transition-all duration-300 hover:bg-[#D64C1B] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <BiDonateHeart className="text-xl" />
                    <span>Proceed to Donate</span>
                  </div>
                </motion.button>
                <p className="mt-2 text-center text-sm text-[#4F5D75]">
                  Secure payment powered by{' '}
                  <span className="font-medium text-[#072654]">Razorpay</span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Impact Section */}
      <section className="bg-[#2D3142] py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="relative mb-4 inline-block font-serif text-3xl font-bold text-[#EF8354]">
              Your Impact
              <span className="absolute inset-x-1/4 -bottom-2 h-0.5 rounded-full bg-[#EF8354]/70"></span>
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-[#BFC0C0]">
              See how your donations are making a difference in our community.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Impact Cards */}
            <div className="rounded-lg bg-[#1A1D2A] p-6 text-center shadow-lg transition-transform duration-300 hover:-translate-y-1">
              <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-[#4F5D75]/20 text-[#EF8354]">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-2 font-serif text-xl font-bold text-[#EF8354]">24/7 Support</h3>
              <p className="text-[#BFC0C0]">
                Your donations help us maintain our 24/7 support services for families in need during difficult times.
              </p>
            </div>
            <div className="rounded-lg bg-[#1A1D2A] p-6 text-center shadow-lg transition-transform duration-300 hover:-translate-y-1">
              <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-[#4F5D75]/20 text-[#EF8354]">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="mb-2 font-serif text-xl font-bold text-[#EF8354]">Financial Assistance</h3>
              <p className="text-[#BFC0C0]">
                We provide financial assistance for funeral services to families who cannot afford them.
              </p>
            </div>
            <div className="rounded-lg bg-[#1A1D2A] p-6 text-center shadow-lg transition-transform duration-300 hover:-translate-y-1">
              <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-[#4F5D75]/20 text-[#EF8354]">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="mb-2 font-serif text-xl font-bold text-[#EF8354]">Community Education</h3>
              <p className="text-[#BFC0C0]">
                We organize workshops and provide resources to educate the community about Islamic funeral practices.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Donation Modal */}
      <DonationModal
        isOpen={showDonationModal}
        onClose={() => setShowDonationModal(false)}
        onSuccess={handleDonationSuccess}
        donationAmount={donationAmount}
        email={email}
        phone={phone}
        name={name}
        isAnonymous={isAnonymous}
      />
    </div>
  );
}
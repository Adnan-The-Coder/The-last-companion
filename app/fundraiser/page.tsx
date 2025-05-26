'use client';

import React, { useState } from 'react';
import Script from 'next/script';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function FundraiserPage() {
  const [donationAmount, setDonationAmount] = useState<number>(100);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isAnonymous, setIsAnonymous] = useState<boolean>(false);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const handleDonationAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDonationAmount(Number(e.target.value));
  };

  const logPaymentToSupabase = async (paymentData: {
    amount: number;
    name: string;
    email: string;
    phone: string;
    message: string;
    isAnonymous: boolean;
    paymentId: string;
    orderId: string;
    status: string;
  }) => {
    try {
      const { data, error } = await supabase
        .from('payments')
        .insert([
          {
            amount: paymentData.amount,
            donor_name: paymentData.isAnonymous ? 'Anonymous' : paymentData.name,
            email: paymentData.email,
            phone: paymentData.phone,
            message: paymentData.message,
            is_anonymous: paymentData.isAnonymous,
            payment_id: paymentData.paymentId,
            order_id: paymentData.orderId,
            status: paymentData.status,
            payment_method: 'razorpay',
            created_at: new Date().toISOString(),
          }
        ]);

      if (error) {
        console.error('Error logging payment to Supabase:', error);
      } else {
        console.log('Payment logged successfully:', data);
      }
    } catch (error) {
      console.error('Error logging payment:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
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

    setIsProcessing(true);
    
    try {
      // Create order
      const res = await fetch('/api/razorpay-create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: donationAmount * 100 }),
      });
      
      const data = await res.json();
      console.log("Data got from razorpay ", data);
      if (!data || !data.id) {
        throw new Error('Failed to create order');
      }
      
      if (!res.ok) {
        throw new Error(data.error || 'Failed to create order');
      }
      
      // Setup Razorpay payment
      const PaymentData = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || process.env.RAZORPAY_LIVE_KEY_ID,
        amount: donationAmount * 100,
        currency: "INR",
        name: "Community Fundraiser",
        description: "Donation for Islamic funeral services and community initiatives",
        order_id: data.id,
        
        handler: async function (response: any) {
          try {
           // Verify payment
            const verifyRes = await fetch("/api/razorpay-verify-payment", {
              method: "POST",
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                orderId: response.razorpay_order_id,
                razorpayPaymentId: response.razorpay_payment_id,
                razorpaySignature: response.razorpay_signature,
              }),
            });
            
            const verifyData = await verifyRes.json();
            
            if (verifyData.success) {
              // Log payment to Supabase
              await logPaymentToSupabase({
                amount: donationAmount,
                name: name,
                email: email,
                phone: phone,
                message: message,
                isAnonymous: isAnonymous,
                paymentId: response.razorpay_payment_id,
                orderId: response.razorpay_order_id,
                status: 'completed'
              });

              // Show success message
              alert(`Thank you ${isAnonymous ? '' : name}! Your donation of ₹${donationAmount} has been received successfully. May Allah reward you for your generosity.`);
              
              // Reset form
              setDonationAmount(100);
              setName('');
              setEmail('');
              setPhone('');
              setMessage('');
              setIsAnonymous(false);
            } else {
              // Log failed payment
              await logPaymentToSupabase({
                amount: donationAmount,
                name: name,
                email: email,
                phone: phone,
                message: message,
                isAnonymous: isAnonymous,
                paymentId: response.razorpay_payment_id,
                orderId: response.razorpay_order_id,
                status: 'failed'
              });
              
              alert("Payment verification failed. Please contact support if amount was debited.");
            }
          } catch (error) {
            console.error("Payment verification error:", error);
            console.log("Payment verification error:", error);
            alert("There was an error verifying your payment. Please contact support.");
          }
          
          setIsProcessing(false);
        },
        
        prefill: {
          name: isAnonymous ? "Anonymous Donor" : name,
          email: email,
          contact: phone,
        },
        
        theme: {
          color: "#EF8354",
        },
        
        modal: {
          ondismiss: function() {
            setIsProcessing(false);
          }
        }
      };

      // Check if Razorpay is loaded
      if (typeof window !== 'undefined' && (window as any).Razorpay) {
        const payment = new (window as any).Razorpay(PaymentData);
        payment.open();
      } else {
        throw new Error('Razorpay SDK not loaded');
      }
    } catch (error) {
      console.error("Payment error:", error);
      alert("There was an error processing your payment. Please try again.");
      setIsProcessing(false);
    }
  };

  return (
    <>
      <Script 
        type='text/javascript'
        src='https://checkout.razorpay.com/v1/checkout.js'
        strategy="lazyOnload"
      />
      <div className="min-h-screen bg-gradient-to-b from-[#2D3142]/5 to-[#2D3142]/10">
        {/* Hero Section */}
        <section className="relative py-20 text-white">
          <div className="absolute inset-0 bg-[url('/images/mosque-bg.jpg')] bg-cover bg-center opacity-30"></div>
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
                        min="10"
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
                        className="size-4 rounded border-[#4F5D75]/30 text-[#EF8354]  focus:ring-[#EF8354]"
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
                      ></textarea>
                    </div>
                  </div>
                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isProcessing}
                      className="w-full rounded-md bg-[#EF8354] py-3 font-medium text-white transition-all duration-300 hover:bg-[#D64C1B] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {isProcessing ? (
                        <div className="flex items-center justify-center space-x-2">
                          <div className="size-5 animate-spin rounded-full border-b-2 border-white"></div>
                          <span>Processing Payment...</span>
                        </div>
                      ) : (
                        'Donate Now with Razorpay'
                      )}
                    </button>
                    <p className="mt-2 text-center text-sm text-[#4F5D75]">
                      Secure payment powered by{' '}
                      <span className="font-medium text-[#072654]">Razorpay</span>
                    </p>
                  </div>
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
        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="relative mb-4 inline-block font-serif text-3xl font-bold text-[#2D3142]">
                Frequently Asked Questions
                <span className="absolute inset-x-1/4 -bottom-2 h-0.5 rounded-full bg-[#EF8354]/70"></span>
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-[#4F5D75]">
                Common questions about our fundraising initiatives.
              </p>
            </div>
            <div className="mx-auto max-w-3xl">
              <div className="mb-8 rounded-lg border-l-4 border-[#EF8354] bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
                <h3 className="mb-2 text-xl font-bold text-[#2D3142]">How is my donation used?</h3>
                <p className="text-[#4F5D75]">
                  Your donations directly support our Islamic funeral services, including financial assistance for families in need, community education programs, and maintaining our 24/7 support services.
                </p>
              </div>
              <div className="mb-8 rounded-lg border-l-4 border-[#EF8354] bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
                <h3 className="mb-2 text-xl font-bold text-[#2D3142]">Is my donation tax-deductible?</h3>
                <p className="text-[#4F5D75]">
                  Yes, all donations are tax-deductible. You will receive a receipt for your donation that can be used for tax purposes.
                </p>
              </div>
              <div className="mb-8 rounded-lg border-l-4 border-[#EF8354] bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
                <h3 className="mb-2 text-xl font-bold text-[#2D3142]">Can I make a recurring donation?</h3>
                <p className="text-[#4F5D75]">
                  Yes, you can set up monthly recurring donations through our Razorpay payment system. This helps us plan our services and support more effectively.
                </p>
              </div>
              <div className="mb-8 rounded-lg border-l-4 border-[#EF8354] bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
                <h3 className="mb-2 text-xl font-bold text-[#2D3142]">How secure is the donation process?</h3>
                <p className="text-[#4F5D75]">
                  We use Razorpay, a secure and trusted payment gateway that complies with industry-standard security protocols to ensure your payment information is protected.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
"use client";
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
// Replace these with your actual Supabase URL and anon key
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    message: ''
  });

  const handleInputChange = (e:any) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id === 'phone' ? 'phoneNumber' : id]: value
    }));
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setStatus({ isSubmitting: true, isSuccess: false, isError: false, message: '' });

    try {
      // Insert data into Supabase using the client library
      const { error } = await supabase
        .from('lastCompanionContact')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phoneNumber: formData.phoneNumber,
            subject: formData.subject,
            message: formData.message
          }
        ]);

      if (error) throw error;

      // Reset form and show success message
      setFormData({
        name: '',
        email: '',
        phoneNumber: '',
        subject: '',
        message: ''
      });
      
      setStatus({
        isSubmitting: false,
        isSuccess: true,
        isError: false,
        message: 'Thank you for your message! We\'ll get back to you as soon as possible.'
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus(prev => ({ ...prev, isSuccess: false, message: '' }));
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: 'There was an error sending your message. Please try again or call us directly.'
      });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 text-white">
        <div className="absolute inset-0 bg-[url('/images/contact-bg.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#2D3142]/95 to-[#4F5D75]/80"></div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center" style={{opacity: 1, transform: 'translateY(0)', transition: 'opacity 0.8s ease, transform 0.8s ease'}}>
            <h1 className="mb-6 font-serif text-4xl font-bold md:text-5xl">Contact <span className="text-[#EF8354]">Us</span></h1>
            <p className="mb-8 text-xl text-[#BFC0C0]">We're available 24/7 to provide support and assistance during your time of need.</p>
          </div>
        </div>
      </section>
      {/* Contact Information & Form */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <div style={{opacity: 1, transform: 'translateY(0)', transition: 'opacity 0.6s ease, transform 0.6s ease'}}>
              <h2 className="relative mb-6 inline-block font-serif text-3xl font-bold text-[#2D3142]">
                Get in Touch
                <span className="absolute -bottom-2 left-0 h-0.5 w-1/2 rounded-full bg-[#EF8354]/70"></span>
              </h2>
              <p className="mb-8 text-[#4F5D75]">
                We understand that dealing with the loss of a loved one is difficult. Our compassionate team is here to help you through every step of the process.
              </p>
              <div className="space-y-6">
                <div className="group flex items-start">
                  <div className="mr-4 rounded-full bg-[#4F5D75]/10 p-3 transition-colors duration-300 group-hover:bg-[#EF8354]/10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-6 text-[#EF8354]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-bold text-[#2D3142] transition-colors duration-300 group-hover:text-[#EF8354]">Phone (24/7)</h3>
                    <p className="text-[#4F5D75]">+91 9618316290</p>
                    <p className="mt-1 text-sm text-[#4F5D75]/70">Available 24 hours a day, 7 days a week</p>
                  </div>
                </div>
                <div className="group flex items-start">
                  <div className="mr-4 rounded-full bg-[#4F5D75]/10 p-3 transition-colors duration-300 group-hover:bg-[#EF8354]/10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-6 text-[#EF8354]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-bold text-[#2D3142] transition-colors duration-300 group-hover:text-[#EF8354]">Email</h3>
                    <p className="text-[#4F5D75]">thelastcompanion1@gmail.com</p>
                  </div>
                </div>
                <div className="group flex items-start">
                  <div className="mr-4 rounded-full bg-[#4F5D75]/10 p-3 transition-colors duration-300 group-hover:bg-[#EF8354]/10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-6 text-[#EF8354]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-bold text-[#2D3142] transition-colors duration-300 group-hover:text-[#EF8354]">Location</h3>
                    <p className="text-[#4F5D75]">7-13/Plot no120 Alkapur,<br />500089, Hyderabad, India</p>
                    <p className="mt-1 text-sm text-[#4F5D75]/70">Our main office and prayer hall</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="mb-4 text-xl font-bold text-blue-900">Hours of Operation</h3>
                <p className="mb-2 text-gray-600">Our emergency services are available 24/7.</p>
                <p className="mb-2 text-gray-600">Office Hours:</p>
                <ul className="text-gray-600">
                  <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                  <li>Saturday: 10:00 AM - 4:00 PM</li>
                  <li>Sunday: By appointment only</li>
                </ul>
              </div>
            </div>
            {/* Contact Form */}
            <div style={{opacity: 1, transform: 'translateY(0)', transition: 'opacity 0.8s ease, transform 0.8s ease'}}>
              <h2 className="relative mb-6 inline-block font-serif text-3xl font-bold text-[#2D3142]">
                Send a Message
                <span className="absolute -bottom-2 left-0 h-0.5 w-1/2 rounded-full bg-[#EF8354]/70"></span>
              </h2>
              <p className="mb-8 text-[#4F5D75]">
                If you have any questions or need assistance, please don't hesitate to reach out. We're here to help.  
              </p>
              {/* Success/Error Messages */}
              {status.isSuccess && (
                <div className="mb-6 rounded-md border border-green-200 bg-green-50 p-4">
                  <div className="flex">
                    <svg className="size-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-green-800">
                        {status.message}
                      </p>
                    </div>
                  </div>
                </div>
              )}
              {status.isError && (
                <div className="mb-6 rounded-md border border-red-200 bg-red-50 p-4">
                  <div className="flex">
                    <svg className="size-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-red-800">
                        {status.message}
                      </p>
                    </div>
                  </div>
                </div>
              )}
              <form onSubmit={handleSubmit} className="rounded-lg border border-[#BFC0C0]/10 bg-[#2D3142]/5 p-6 shadow-md">
                <div className="mb-4">
                  <label htmlFor="name" className="mb-2 block font-medium text-[#2D3142]">Your Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-md border border-[#BFC0C0]/30 bg-white/80 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#EF8354]/50"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="mb-2 block font-medium text-[#2D3142]">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-md border border-[#BFC0C0]/30 bg-white/80 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#EF8354]/50"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="mb-2 block font-medium text-[#2D3142]">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-[#BFC0C0]/30 bg-white/80 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#EF8354]/50"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="subject" className="mb-2 block font-medium text-[#2D3142]">Subject *</label>
                  <input 
                    type="text" 
                    id="subject" 
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-md border border-[#BFC0C0]/30 bg-white/80 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#EF8354]/50"
                    placeholder="Enter subject"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="mb-2 block font-medium text-[#2D3142]">Message *</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-md border border-[#BFC0C0]/30 bg-white/80 px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-[#EF8354]/50"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  disabled={status.isSubmitting}
                  className="group relative flex w-full items-center justify-center overflow-hidden rounded-md bg-[#EF8354] px-4 py-3 font-medium text-white transition-all duration-300 hover:bg-[#D64C1B] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {status.isSubmitting ? (
                    <>
                      <svg className="-ml-1 mr-3 size-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span className="relative z-10">Sending...</span>
                    </>
                  ) : (
                    <span className="relative z-10">Send Message</span>
                  )}
                  <span className="absolute inset-0 bg-gradient-to-r from-[#D64C1B] to-[#EF8354] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Map Section */}
      <section className="bg-[#2D3142]/5 py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center" style={{opacity: 1, transform: 'translateY(0)', transition: 'opacity 0.7s ease, transform 0.7s ease'}}>
            <h2 className="relative mb-4 inline-block font-serif text-3xl font-bold text-[#2D3142]">
              Our Location
              <span className="absolute inset-x-1/4 -bottom-2 h-0.5 rounded-full bg-[#EF8354]/70"></span>
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-[#4F5D75]">Visit our main office and prayer hall located in Hyderabad, India.</p>
          </div>
          <div className="h-96 overflow-hidden rounded-lg border border-[#BFC0C0]/10 bg-white/80 shadow-md">
            {/* Map would be embedded here in a real implementation */}
            <div className="flex h-full items-center justify-center">
              <p className="text-[#4F5D75]">Map would be displayed here</p>
            </div>
          </div>
        </div>
      </section>
      {/* Emergency Call Section */}
      <section className="bg-[#2D3142] py-12 text-white">
        <div className="container mx-auto px-4 text-center" style={{opacity: 1, transform: 'translateY(0)', transition: 'opacity 0.8s ease, transform 0.8s ease'}}>
          <h2 className="mb-6 font-serif text-3xl font-bold">Need Immediate Assistance?</h2>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-[#BFC0C0]">Our team is available 24/7 to provide support and guidance during your time of need.</p>
          <a 
            href="tel:+919618316290" 
            className="group relative inline-block overflow-hidden rounded-md bg-[#EF8354] px-8 py-4 text-xl font-medium text-white transition-all duration-300 hover:bg-[#D64C1B] hover:shadow-lg"
          >
            <span className="relative z-10">Call Now: +91 9618316290</span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#D64C1B] to-[#EF8354] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
          </a>
        </div>
      </section>
    </>
  );
}
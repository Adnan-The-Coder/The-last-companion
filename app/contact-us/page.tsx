"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactUsPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitted(true);
    setLoading(false);
    // Reset form
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#F5F5F7]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#2D3142] text-white">
        <div className="absolute inset-0 bg-[url('/images/pattern-light.png')] opacity-10"></div>
        <div className="container relative z-10 mx-auto px-4 py-16 sm:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">Contact <span className="text-[#EF8354]">Us</span></h1>
            <p className="mb-8 text-lg text-[#BFC0C0]">
              We're here to assist you during your time of need. Reach out to us anytime.
            </p>
          </motion.div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/20 to-transparent"></div>
      </section>
      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-6 font-serif text-3xl font-bold text-[#2D3142]">Get in Touch</h2>
              <p className="mb-8 text-[#4F5D75]">
                Our compassionate team is available 24/7 to assist you with any questions or to help arrange funeral services. We understand this is a difficult time, and we're here to provide guidance and support.
              </p>
              <div className="space-y-6 p-6">
                <div className="flex items-start">
                  <div className="mr-4 shrink-0 rounded-full bg-[#EF8354]/10 p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-6 text-[#EF8354]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#2D3142]">Phone</h3>
                    <p className="text-[#4F5D75]">Available 24/7 for emergencies</p>
                    <a href="tel:+919618316290" className="font-medium text-[#EF8354] transition-colors duration-200 hover:text-[#D64C1B]">+91 9618316290</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 shrink-0 rounded-full bg-[#EF8354]/10 p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-6 text-[#EF8354]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#2D3142]">Email</h3>
                    <p className="text-[#4F5D75]">We'll respond as soon as possible</p>
                    <a href="mailto:thelastcompanion1@gmail.com" className="font-medium text-[#EF8354] transition-colors duration-200 hover:text-[#D64C1B]">thelastcompanion1@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 shrink-0 rounded-full bg-[#EF8354]/10 p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-6 text-[#EF8354]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#2D3142]">Address</h3>
                    <p className="text-[#4F5D75]">Main Office</p>
                    <address className="not-italic text-[#4F5D75]">
                      7-13/Plot no120 Alkapur<br />
                      500089<br />
                      Hyderabad, India
                    </address>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <h3 className="mb-4 text-lg font-medium text-[#2D3142]">Hours of Operation</h3>
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <div className="grid grid-cols-2 gap-2 text-[#4F5D75]">
                    <div>Monday - Friday</div>
                    <div>8:00 AM - 8:00 PM</div>
                    <div>Saturday</div>
                    <div>9:00 AM - 6:00 PM</div>
                    <div>Sunday</div>
                    <div>10:00 AM - 4:00 PM</div>
                  </div>
                  <div className="mt-3 border-t border-[#BFC0C0]/30 pt-3 font-medium text-[#2D3142]">
                    Emergency services available 24/7
                  </div>
                </div>
              </div>
            </motion.div>
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="rounded-lg bg-white p-6 shadow-md md:p-8">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-8 text-center"
                  >
                    <div className="mb-4 inline-flex size-16 items-center justify-center rounded-full bg-green-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="size-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="mb-2 text-2xl font-medium text-[#2D3142]">Thank You</h3>
                    <p className="mb-6 text-[#4F5D75]">
                      Your message has been sent successfully. We'll get back to you as soon as possible.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="inline-flex items-center font-medium text-[#EF8354] transition-colors duration-200 hover:text-[#D64C1B]"
                    >
                      Send another message
                      <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <h2 className="mb-6 font-serif text-2xl font-bold text-[#2D3142]">Send Us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="mb-1 block text-sm font-medium text-[#2D3142]">
                          Full Name
                        </label>
                        <motion.input
                          whileFocus={{ scale: 1.01 }}
                          transition={{ duration: 0.2 }}
                          type="text"
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          className="w-full rounded-md border border-[#BFC0C0]/30 px-3 py-2 text-black shadow-sm transition-colors duration-200 placeholder:text-[#4F5D75]/50 focus:border-[#EF8354] focus:outline-none focus:ring-[#EF8354]"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div>
                          <label htmlFor="email" className="mb-1 block text-sm font-medium text-[#2D3142]">
                            Email Address
                          </label>
                          <motion.input
                            whileFocus={{ scale: 1.01 }}
                            transition={{ duration: 0.2 }}
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full rounded-md border border-[#BFC0C0]/30 px-3 py-2 text-black shadow-sm transition-colors duration-200 placeholder:text-[#4F5D75]/50 focus:border-[#EF8354] focus:outline-none focus:ring-[#EF8354]"
                            placeholder="Your email"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="mb-1 block text-sm font-medium text-[#2D3142]">
                            Phone Number
                          </label>
                          <motion.input
                            whileFocus={{ scale: 1.01 }}
                            transition={{ duration: 0.2 }}
                            type="tel"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full rounded-md border border-[#BFC0C0]/30 px-3 py-2 text-black shadow-sm transition-colors duration-200 placeholder:text-[#4F5D75]/50 focus:border-[#EF8354] focus:outline-none focus:ring-[#EF8354]"
                            placeholder="Your phone (optional)"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="message" className="mb-1 block text-sm font-medium text-[#2D3142]">
                          Message
                        </label>
                        <motion.textarea
                          whileFocus={{ scale: 1.01 }}
                          transition={{ duration: 0.2 }}
                          id="message"
                          rows={5}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          required
                          className="w-full rounded-md border border-[#BFC0C0]/30 px-3 py-2 text-black shadow-sm transition-colors duration-200 placeholder:text-[#4F5D75]/50 focus:border-[#EF8354] focus:outline-none focus:ring-[#EF8354]"
                          placeholder="How can we help you?"
                        ></motion.textarea>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        type="submit"
                        disabled={loading}
                        className="w-full rounded-md bg-[#EF8354] px-4 py-3 font-medium text-white transition-colors duration-300 hover:bg-[#D64C1B] focus:outline-none focus:ring-2 focus:ring-[#EF8354] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        {loading ? (
                          <span className="flex items-center justify-center">
                            <svg className="-ml-1 mr-2 size-4 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </span>
                        ) : "Send Message"}
                      </motion.button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Map Section */}
      <section className="container mx-auto mb-16 px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center"
          >
            <h2 className="mb-4 font-serif text-3xl font-bold text-[#2D3142]">Find Us</h2>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-[#BFC0C0]">
              Our central location makes it easy to reach us from anywhere in the city. We also offer home visits for those unable to come to our office.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="overflow-hidden rounded-lg bg-white shadow-xl"
          >
            {/* This would be replaced with an actual map component in production */}
            <div className="relative flex h-40 items-center justify-center bg-gradient-to-r from-[#EF8354] to-[#EF8354]/80">
              <div className="mb-12 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-4 size-16 text-[#4F5D75]/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <p className="text-[#4F5D75]">Interactive Map Would Be Displayed Here</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Emergency Contact */}
      <section className="bg-gradient-to-r from-[#2D3142] to-[#4F5D75] py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-col items-center justify-between rounded-lg bg-white/10 p-6 backdrop-blur-sm md:flex-row md:p-8">
              <div>
                <h3 className="mb-2 text-2xl font-bold">24/7 Emergency Service</h3>
                <p className="text-white/80">We understand that loss can occur at any time. Our team is available day and night to provide immediate assistance.</p>
              </div>
              <div className="mt-4 md:mt-0">
                <a href="tel:+919618316290" className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-[#2D3142] transition-colors duration-200 hover:bg-[#EF8354] hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Emergency Hotline
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

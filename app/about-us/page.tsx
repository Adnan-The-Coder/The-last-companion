'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutUs() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative text-white">
        <div className="absolute inset-0 bg-[url('/images/about-hero.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#2D3142]/95 to-[#4F5D75]/80"></div>
        <div className="container relative z-10 mx-auto px-4 py-28 md:py-32">
          <div className="max-w-3xl" style={{opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(20px)', transition: 'opacity 0.8s ease, transform 0.8s ease'}}>
            <h1 className="mb-6 font-serif text-4xl font-bold md:text-5xl lg:text-6xl">
              About <span className="text-[#EF8354]">The Last Companion</span>
            </h1>
            <p className="mb-8 text-xl text-[#BFC0C0]">Providing compassionate Islamic funeral services with dignity and respect, following proper Islamic traditions and practices.</p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
            <div style={{opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(20px)', transition: 'opacity 0.5s ease, transform 0.5s ease'}}>
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src="/images/mission.jpg" 
                  alt="Our Mission" 
                  width={600} 
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D3142]/80 to-transparent"></div>
              </div>
            </div>
            <div style={{opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(20px)', transition: 'opacity 0.7s ease, transform 0.7s ease'}}>
              <h2 className="text-3xl font-bold text-[#2D3142] mb-4 font-serif relative inline-block">
                Our Mission
                <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-[#EF8354]/70 rounded-full"></span>
              </h2>
              <p className="text-lg text-[#4F5D75] mb-6">Our mission is to provide comprehensive Islamic funeral services that honor the deceased and comfort the bereaved, while adhering to Islamic principles and traditions.</p>
              <p className="text-lg text-[#4F5D75] mb-6">We strive to guide families through the funeral process with compassion, dignity, and respect during their time of grief, ensuring that all Islamic burial rites are properly observed.</p>
              <div className="p-4 bg-[#2D3142]/5 rounded-lg border-l-4 border-[#EF8354]">
                <p className="italic text-[#4F5D75]">"The Last Companion is dedicated to serving the Muslim community with excellence and care, providing a dignified farewell in accordance with Islamic teachings."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-[#2D3142]/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" style={{opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(20px)', transition: 'opacity 0.5s ease, transform 0.5s ease'}}>
            <h2 className="text-3xl font-bold text-[#2D3142] mb-4 font-serif relative inline-block">
              Our Core Values
              <span className="absolute -bottom-2 left-1/4 right-1/4 h-0.5 bg-[#EF8354]/70 rounded-full"></span>
            </h2>
            <p className="text-lg text-[#4F5D75] max-w-3xl mx-auto mt-6">These principles guide our service and commitment to the Muslim community.</p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Value 1 */}
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-[#EF8354]" style={{opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(20px)', transition: 'opacity 0.6s ease, transform 0.6s ease'}}>
              <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-[#EF8354]/10 text-[#EF8354]">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#2D3142] mb-2">Respect & Dignity</h3>
              <p className="text-[#4F5D75]">We treat every deceased person and their family with the utmost respect and dignity, honoring their life and religious beliefs.</p>
            </div>
            
            {/* Value 2 */}
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-[#EF8354]" style={{opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(20px)', transition: 'opacity 0.7s ease, transform 0.7s ease'}}>
              <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-[#EF8354]/10 text-[#EF8354]">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#2D3142] mb-2">Islamic Compliance</h3>
              <p className="text-[#4F5D75]">We ensure that all funeral services strictly adhere to Islamic principles and traditions, providing guidance on proper religious practices.</p>
            </div>
            
            {/* Value 3 */}
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-[#EF8354]" style={{opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(20px)', transition: 'opacity 0.8s ease, transform 0.8s ease'}}>
              <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-[#EF8354]/10 text-[#EF8354]">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#2D3142] mb-2">Compassionate Support</h3>
              <p className="text-[#4F5D75]">We provide emotional and practical support to families during their time of grief, offering guidance and assistance throughout the funeral process.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#2D3142] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] bg-repeat opacity-5"></div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <div style={{opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(20px)', transition: 'opacity 0.5s ease, transform 0.5s ease'}}>
            <h2 className="text-3xl font-bold mb-6 font-serif">Need Our Services or Have Questions?</h2>
            <p className="text-[#BFC0C0] text-lg max-w-3xl mx-auto mb-8">We're here to provide guidance and support during difficult times. Contact us to learn more about our services or to make arrangements.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="group relative overflow-hidden bg-[#EF8354] hover:bg-[#D64C1B] rounded-md px-6 py-3 text-center font-medium text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <span className="relative z-10">Contact Us</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#D64C1B] to-[#EF8354] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              </Link>
              <Link 
                href="/services" 
                className="relative overflow-hidden border-[#4F5D75] hover:border-[#EF8354] rounded-md border px-6 py-3 text-center font-medium text-white transition-all duration-300 hover:shadow-md group"
              >
                <span className="relative z-10">Our Services</span>
                <span className="absolute inset-0 bg-[#4F5D75]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

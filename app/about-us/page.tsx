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
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div style={{opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(20px)', transition: 'opacity 0.5s ease, transform 0.5s ease'}}>
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <Image 
                  src="/images/mission.jpg" 
                  alt="Our Mission" 
                  width={600} 
                  height={400}
                  className="h-auto w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D3142]/80 to-transparent"></div>
              </div>
            </div>
            <div style={{opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(20px)', transition: 'opacity 0.7s ease, transform 0.7s ease'}}>
              <h2 className="relative mb-4 inline-block font-serif text-3xl font-bold text-[#2D3142]">
                Our Mission
                <span className="absolute -bottom-2 left-0 h-0.5 w-1/2 rounded-full bg-[#EF8354]/70"></span>
              </h2>
              <p className="mb-6 text-lg text-[#4F5D75]">Our mission is to provide comprehensive Islamic funeral services that honor the deceased and comfort the bereaved, while adhering to Islamic principles and traditions.</p>
              <p className="mb-6 text-lg text-[#4F5D75]">We strive to guide families through the funeral process with compassion, dignity, and respect during their time of grief, ensuring that all Islamic burial rites are properly observed.</p>
              <div className="rounded-lg border-l-4 border-[#EF8354] bg-[#2D3142]/5 p-4">
                <p className="italic text-[#4F5D75]">"The Last Companion is dedicated to serving the Muslim community with excellence and care, providing a dignified farewell in accordance with Islamic teachings."</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Values */}
      <section className="bg-[#2D3142]/5 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center" style={{opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(20px)', transition: 'opacity 0.5s ease, transform 0.5s ease'}}>
            <h2 className="relative mb-4 inline-block font-serif text-3xl font-bold text-[#2D3142]">
              Our Core Values
              <span className="absolute inset-x-1/4 -bottom-2 h-0.5 rounded-full bg-[#EF8354]/70"></span>
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-[#4F5D75]">These principles guide our service and commitment to the Muslim community.</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Value 1 */}
            <div className="rounded-lg border-t-4 border-[#EF8354] bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg" style={{opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(20px)', transition: 'opacity 0.6s ease, transform 0.6s ease'}}>
              <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-[#EF8354]/10 text-[#EF8354]">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-[#2D3142]">Respect & Dignity</h3>
              <p className="text-[#4F5D75]">We treat every deceased person and their family with the utmost respect and dignity, honoring their life and religious beliefs.</p>
            </div>
            {/* Value 2 */}
            <div className="rounded-lg border-t-4 border-[#EF8354] bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg" style={{opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(20px)', transition: 'opacity 0.7s ease, transform 0.7s ease'}}>
              <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-[#EF8354]/10 text-[#EF8354]">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-[#2D3142]">Islamic Compliance</h3>
              <p className="text-[#4F5D75]">We ensure that all funeral services strictly adhere to Islamic principles and traditions, providing guidance on proper religious practices.</p>
            </div>
            {/* Value 3 */}
            <div className="rounded-lg border-t-4 border-[#EF8354] bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg" style={{opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(20px)', transition: 'opacity 0.8s ease, transform 0.8s ease'}}>
              <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-[#EF8354]/10 text-[#EF8354]">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-[#2D3142]">Compassionate Support</h3>
              <p className="text-[#4F5D75]">We provide emotional and practical support to families during their time of grief, offering guidance and assistance throughout the funeral process.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="relative overflow-hidden bg-[#2D3142] py-16 text-white">
        <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] bg-repeat opacity-5"></div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <div style={{opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(20px)', transition: 'opacity 0.5s ease, transform 0.5s ease'}}>
            <h2 className="mb-6 font-serif text-3xl font-bold">Need Our Services or Have Questions?</h2>
            <p className="mx-auto mb-8 max-w-3xl text-lg text-[#BFC0C0]">We're here to provide guidance and support during difficult times. Contact us to learn more about our services or to make arrangements.</p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link 
                href="/contact" 
                className="group relative overflow-hidden rounded-md bg-[#EF8354] px-6 py-3 text-center font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#D64C1B] hover:shadow-lg"
              >
                <span className="relative z-10">Contact Us</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#D64C1B] to-[#EF8354] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              </Link>
              <Link 
                href="/services" 
                className="group relative overflow-hidden rounded-md border border-[#4F5D75] px-6 py-3 text-center font-medium text-white transition-all duration-300 hover:border-[#EF8354] hover:shadow-md"
              >
                <span className="relative z-10">Our Services</span>
                <span className="absolute inset-0 bg-[#4F5D75]/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

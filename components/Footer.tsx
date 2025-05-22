'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  return (
    <footer className="bg-[#2D3142] text-white">
      {/* Arabic Quote Banner */}
      <div className="bg-[#1A1D2A] py-8 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#EF8354]/5 to-transparent opacity-50"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div 
            className="mb-6 inline-block relative"
            style={{opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(20px)', transition: 'opacity 0.8s ease, transform 0.8s ease'}}
          >
            <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#EF8354]/20 to-transparent blur-md"></span>
            <p className="arabic-quote text-3xl mb-2 text-[#EF8354] relative">
              إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ
            </p>
          </div>
          <p 
            className="text-xl italic text-[#BFC0C0] max-w-2xl mx-auto"
            style={{opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(20px)', transition: 'opacity 1s ease, transform 1s ease'}}
          >
            "Indeed we belong to Allah, and indeed to Him we will return."
          </p>
          <p 
            className="text-sm text-[#4F5D75] mt-2"
            style={{opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(20px)', transition: 'opacity 1.2s ease, transform 1.2s ease'}}
          >
            — Surah Al-Baqarah [2:156]
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <div 
            className="space-y-4"
            style={{opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(20px)', transition: 'opacity 0.5s ease, transform 0.5s ease'}}
          >
            <h3 className="text-xl font-bold font-serif text-[#EF8354] relative inline-block">
              About Us
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-[#EF8354]/50 rounded-full"></span>
            </h3>
            <p className="text-[#BFC0C0]">Providing compassionate Islamic funeral services with dignity and respect, following proper Islamic traditions and practices.</p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="group relative p-2 bg-[#4F5D75]/20 rounded-full hover:bg-[#4F5D75]/30 transition-colors duration-300">
                <span className="absolute inset-0 rounded-full bg-[#EF8354]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-5 text-[#BFC0C0] group-hover:text-[#EF8354] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
              <a href="#" className="group relative p-2 bg-[#4F5D75]/20 rounded-full hover:bg-[#4F5D75]/30 transition-colors duration-300">
                <span className="absolute inset-0 rounded-full bg-[#EF8354]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-5 text-[#BFC0C0] group-hover:text-[#EF8354] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="group relative p-2 bg-[#4F5D75]/20 rounded-full hover:bg-[#4F5D75]/30 transition-colors duration-300">
                <span className="absolute inset-0 rounded-full bg-[#EF8354]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-5 text-[#BFC0C0] group-hover:text-[#EF8354] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.979 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.979-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div 
            className="space-y-4"
            style={{opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(20px)', transition: 'opacity 0.7s ease, transform 0.7s ease'}}
          >
            <h3 className="text-xl font-bold font-serif text-[#EF8354] relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-[#EF8354]/50 rounded-full"></span>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-[#BFC0C0] hover:text-[#EF8354] transition-colors duration-300 flex items-center">
                  <span className="mr-2 text-[#EF8354] text-xs">→</span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[#BFC0C0] hover:text-[#EF8354] transition-colors duration-300 flex items-center">
                  <span className="mr-2 text-[#EF8354] text-xs">→</span>
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#BFC0C0] hover:text-[#EF8354] transition-colors duration-300 flex items-center">
                  <span className="mr-2 text-[#EF8354] text-xs">→</span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-[#BFC0C0] hover:text-[#EF8354] transition-colors duration-300 flex items-center">
                  <span className="mr-2 text-[#EF8354] text-xs">→</span>
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#BFC0C0] hover:text-[#EF8354] transition-colors duration-300 flex items-center">
                  <span className="mr-2 text-[#EF8354] text-xs">→</span>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div 
            className="space-y-4"
            style={{opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(20px)', transition: 'opacity 0.9s ease, transform 0.9s ease'}}
          >
            <h3 className="text-xl font-bold font-serif text-[#EF8354] relative inline-block">
              Contact Us
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-[#EF8354]/50 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-3 mt-1 inline-flex items-center justify-center rounded-full bg-[#4F5D75]/20 p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-4 text-[#EF8354]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <span className="text-[#BFC0C0]">
                  1234 Islamic Center Dr.<br />
                  Suite 100<br />
                  Houston, TX 77001
                </span>
              </li>
              <li className="flex items-center">
                <span className="mr-3 inline-flex items-center justify-center rounded-full bg-[#4F5D75]/20 p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-4 text-[#EF8354]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <a href="tel:+1234567890" className="text-[#BFC0C0] hover:text-[#EF8354] transition-colors duration-300">+1-234-567-8900</a>
              </li>
              <li className="flex items-center">
                <span className="mr-3 inline-flex items-center justify-center rounded-full bg-[#4F5D75]/20 p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-4 text-[#EF8354]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <a href="mailto:info@thelastcompanion.com" className="text-[#BFC0C0] hover:text-[#EF8354] transition-colors duration-300">info@thelastcompanion.com</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div 
            className="space-y-4"
            style={{opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(20px)', transition: 'opacity 1.1s ease, transform 1.1s ease'}}
          >
            <h3 className="text-xl font-bold font-serif text-[#EF8354] relative inline-block">
              Subscribe
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-[#EF8354]/50 rounded-full"></span>
            </h3>
            <p className="text-[#BFC0C0]">Subscribe to our newsletter for updates on our services and resources.</p>
            <form className="mt-4">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full bg-[#4F5D75]/20 border border-[#4F5D75]/30 rounded-md py-2 px-4 text-white placeholder-[#BFC0C0]/70 focus:outline-none focus:ring-2 focus:ring-[#EF8354]/50"
                />
                <button 
                  type="submit" 
                  className="absolute right-1 top-1 bg-[#EF8354] hover:bg-[#D64C1B] text-white p-1 rounded transition-colors duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </form>
            <div className="mt-4">
              <Link 
                href="/booking" 
                className="block w-full bg-[#EF8354] hover:bg-[#D64C1B] text-white text-center py-2 rounded-md transition-colors duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Book Our Services</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#D64C1B] to-[#EF8354] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="py-6 bg-[#1A1D2A] border-t border-[#4F5D75]/30">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4 flex justify-center space-x-6">
            <a href="#" className="text-[#4F5D75] hover:text-[#EF8354] transition-colors duration-300">
              <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-[#4F5D75] hover:text-[#EF8354] transition-colors duration-300">
              <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="text-[#4F5D75] hover:text-[#EF8354] transition-colors duration-300">
              <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
          <p className="text-[#4F5D75]">&copy; {new Date().getFullYear()} <span className="text-[#EF8354]">The Last Companion</span>. All rights reserved.</p>
          <p className="mt-2 text-sm text-[#4F5D75] font-arabic">إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

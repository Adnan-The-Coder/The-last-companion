"use client";

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname?.() || '';
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    setIsLoaded(true);
    
return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`text-white transition-all duration-500 ${isScrolled ? 'bg-[#2D3142]/95 shadow-lg' : 'bg-[#2D3142]'} sticky top-0 z-50`}>
      {/* Main Navigation */}
      <div className="container mx-auto p-4">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="group flex items-center" 
            style={{opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(-10px)', transition: 'opacity 0.6s ease, transform 0.6s ease'}}
          >
            <div className="relative mr-3 size-12 overflow-hidden">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#EF8354] to-[#D64C1B] transition-all duration-500 group-hover:from-[#D64C1B] group-hover:to-[#EF8354]"></div>
              <div className="animate-pulse-slow absolute inset-0 rounded-full bg-gradient-to-br from-[#EF8354] to-[#D64C1B] opacity-50 blur-md transition-opacity duration-500 group-hover:opacity-70"></div>
              <div className="absolute inset-1 flex items-center justify-center rounded-full bg-white transition-transform duration-300 group-hover:scale-105">
                <span className="font-arabic text-lg text-[#2D3142]">الله</span>
              </div>
            </div>
            <div>
              <h1 className="font-serif text-2xl font-bold transition-colors duration-300 group-hover:text-[#EF8354]">The Last Companion</h1>
              <p className="text-xs text-[#BFC0C0] opacity-80 transition-opacity duration-300 group-hover:opacity-100">Islamic Funeral Services</p>
            </div>
          </Link>
          <nav className="hidden space-x-8 md:flex">
            {["Home", "Services", "About Us", "Resources", "Contact Us"].map((item, _index) => {
              const path = item === "Home" ? "/" : `/${item.toLowerCase().replace(/ /g, "-")}`;
              const isActive = pathname === path;
              const delay = 0.7 + (_index * 0.1);
              
              return (
                <Link 
                  key={item} 
                  href={path}
                  className={`relative font-medium transition-all duration-300 hover:text-[#EF8354] ${isActive ? 'text-[#EF8354]' : ''}`}
                  style={{opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(-10px)', transition: `opacity ${delay}s ease, transform ${delay}s ease`}}
                >
                  {item}
                  {isActive && (
                    <span className="animate-scaleX absolute -bottom-1 left-0 h-0.5 w-full origin-left rounded-full bg-[#EF8354]"></span>
                  )}
                </Link>
              );
            })}
          </nav>    
          <div className="md:hidden">
            <button 
              className="relative rounded-full bg-[#4F5D75]/20 p-2 text-white transition-colors duration-300 hover:bg-[#4F5D75]/30 focus:outline-none" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(-10px)', transition: 'opacity 1.2s ease, transform 1.2s ease'}}
            >
              <div className="relative size-6">
                <span 
                  className={`absolute h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${mobileMenuOpen ? 'top-3 -rotate-45' : 'top-1'}`}
                ></span>
                <span 
                  className={`absolute top-3 h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}
                ></span>
                <span 
                  className={`absolute h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${mobileMenuOpen ? 'top-3 rotate-45' : 'top-5'}`}
                ></span>
              </div>
            </button>
          </div>
          <div className="hidden items-center space-x-4 md:flex">
            <Link 
              href="/booking" 
              className="group relative overflow-hidden rounded-md bg-[#EF8354] px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:shadow-lg"
              style={{opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(-10px)', transition: 'opacity 1.3s ease, transform 1.3s ease'}}
            >
              <span className="relative z-10">Book Now</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#2D3142] to-[#4F5D75] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
              <span className="absolute -inset-px rounded-md border border-white/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
            </Link>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div 
        className={`overflow-hidden transition-all duration-500 md:hidden ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="bg-[#2D3142] px-4 py-2 shadow-inner">
          <div className="flex flex-col space-y-4 py-3">
            {["Home", "Services", "About Us", "Resources", "Contact Us"].map((item, _index) => {
              const path = item === "Home" ? "/" : `/${item.toLowerCase().replace(/ /g, "-")}`;
              const isActive = pathname === path;
              
              return (
                <Link 
                  key={item}
                  href={path} 
                  className={`font-medium transition-all duration-300 hover:text-[#EF8354] ${isActive ? 'text-[#EF8354]' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="flex items-center">
                    {item === "Home" && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    )}
                    {item === "Services" && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    )}
                    {item === "About Us" && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    )}
                    {item === "Resources" && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    )}
                    {item === "Contact Us" && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    )}
                    {item}
                  </div>
                </Link>
              );
            })}
            <div className="border-t border-[#4F5D75]/30 pt-3">
              <Link 
                href="/booking" 
                className="group relative block w-full overflow-hidden rounded-md bg-[#EF8354] py-2.5 text-center font-medium transition-all duration-300 hover:shadow-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="relative z-10">Book Now</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#2D3142] to-[#4F5D75] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

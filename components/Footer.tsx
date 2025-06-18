 
/* eslint-disable tailwindcss/migration-from-tailwind-2 */
'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram,
  FaArrowRight,
  FaYoutube,
  FaLinkedinIn,
  FaWhatsapp,
  FaHeart,
  FaStar,
  FaCheckCircle
} from 'react-icons/fa';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';
import { BiRightArrowAlt } from 'react-icons/bi';
import { MdSecurity, MdSupport, MdVerified } from 'react-icons/md';

const Footer = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscriptionSuccess, setSubscriptionSuccess] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  
  useEffect(() => {
    setIsLoaded(true);
    
    // Update time every minute for prayer times context
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    
    return () => clearInterval(timer);
  }, []);

  const handleNewsletterSubmit = async (e:any) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setEmail('');
    setIsSubmitting(false);
    setSubscriptionSuccess(true);
    
    // Reset success message after 3 seconds
    setTimeout(() => setSubscriptionSuccess(false), 3000);
  };

  const socialLinks = [
    { icon: FaFacebookF, href: '#', label: 'Facebook', color: 'hover:text-blue-400', bg: 'hover:bg-blue-400/10' },
    { icon: FaTwitter, href: '#', label: 'Twitter', color: 'hover:text-blue-300', bg: 'hover:bg-blue-300/10' },
    { icon: FaInstagram, href: '#', label: 'Instagram', color: 'hover:text-pink-400', bg: 'hover:bg-pink-400/10' },
    { icon: FaYoutube, href: '#', label: 'YouTube', color: 'hover:text-red-500', bg: 'hover:bg-red-500/10' },
    { icon: FaLinkedinIn, href: '#', label: 'LinkedIn', color: 'hover:text-blue-500', bg: 'hover:bg-blue-500/10' },
    { icon: FaWhatsapp, href: '#', label: 'WhatsApp', color: 'hover:text-green-400', bg: 'hover:bg-green-400/10' }
  ];

  const quickLinks = [
    { name: 'Home', href: '/', icon: '🏠' },
    { name: 'Our Services', href: '/services', icon: '🕌' },
    { name: 'About Us', href: '/about', icon: '👥' },
    { name: 'Resources', href: '/resources', icon: '📚' },
    { name: 'Contact Us', href: '/contact', icon: '📞' },
    { name: 'Blog', href: '/blog', icon: '✍️' }
  ];

  const legalLinks = [
    { name: 'Terms & Conditions', href: '/Terms-conditions' },
    { name: 'Privacy Policy', href: '/Privacy-Policy' },
    { name: 'Shipping & Delivery', href: '/Shipping-Delivery' },
    { name: 'Cancellation & Refund', href: '/Cancellation-Refund' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Support', href: '/support' }
  ];

  const trustBadges = [
    { icon: MdSecurity, text: 'Secure & Confidential', color: 'text-green-400' },
    { icon: MdSupport, text: '24/7 Support', color: 'text-blue-400' },
    { icon: MdVerified, text: 'Licensed & Certified', color: 'text-purple-400' }
  ];

  return (
    <footer className="relative overflow-x-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23EF8354' fill-opacity='0.8'%3E%3Cpath d='M40 40c13.807 0 25-11.193 25-25S53.807-10 40-10 15 1.193 15 15s11.193 25 25 25zM40 40c13.807 0 25-11.193 25-25S53.807-10 40-10 15 1.193 15 15s11.193 25 25 25z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 animate-pulse bg-gradient-to-t from-amber-500/5 via-transparent to-orange-500/5" style={{ animationDuration: '4s' }}></div>
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute size-1 rounded-full bg-amber-400/20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      </div>
      {/* Enhanced Arabic Quote Banner */}
      <div className="relative border-b border-amber-500/10 py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <div 
            className="inline-block max-w-full w-full"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            <div className="relative rounded-2xl border border-amber-500/20 bg-gradient-to-br from-gray-800/90 to-gray-900/90 px-6 py-8 shadow-2xl backdrop-blur-xl md:px-12 md:py-10">
              {/* Decorative Corner Elements */}
              <div className="absolute left-4 top-4 size-8 border-l-2 border-t-2 border-amber-400/30"></div>
              <div className="absolute right-4 top-4 size-8 border-r-2 border-t-2 border-amber-400/30"></div>
              <div className="absolute bottom-4 left-4 size-8 border-b-2 border-l-2 border-amber-400/30"></div>
              <div className="absolute bottom-4 right-4 size-8 border-b-2 border-r-2 border-amber-400/30"></div>
              {/* Arabic Text with Enhanced Typography */}
              <div className="relative">
                <p className="mb-6 text-xl font-bold leading-relaxed text-amber-400" 
                   style={{ fontFamily: 'serif', direction: 'rtl' }}>
                  إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ
                </p>
                {/* Enhanced Divider */}
                <div className="my-6 flex items-center justify-center">
                  <div className="h-px w-32 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
                  <div className="mx-4 size-2 rounded-full bg-amber-400"></div>
                  <div className="h-px w-32 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
                </div>
                {/* English Translation */}
                <p className="mb-4 text-base font-light italic leading-relaxed text-gray-200 md:text-lg lg:text-xl">
                  "Indeed we belong to Allah, and indeed to Him we will return."
                </p>
                {/* Source with styling */}
                <div className="flex items-center justify-center space-x-2 text-amber-300/80">
                  <FaStar className="size-3" />
                  <p className="text-sm font-medium md:text-base">
                    Surah Al-Baqarah [2:156]
                  </p>
                  <FaStar className="size-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Main Footer Content */}
      <div className="relative py-12 md:py-16">
        <div className="container mx-auto px-4">
          {/* Trust Badges Section */}
          <div className="mb-12 grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6">
            {trustBadges.map((badge, index) => (
              <div 
                key={index}
                className="flex items-center justify-center space-x-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 md:space-x-3 md:p-4"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`
                }}
              >
                <badge.icon className={`size-4 md:size-6 ${badge.color}`} />
                <span className="font-medium text-gray-300">{badge.text}</span>
              </div>
            ))}
          </div>
          {/* Main Footer Grid - Enhanced Responsive Layout */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {/* About Section - Enhanced */}
            <div 
              className="space-y-4 md:space-y-6"
              style={{
                opacity: isLoaded ? 1 : 0, 
                transform: isLoaded ? 'translateY(0)' : 'translateY(30px)', 
                transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.1s'
              }}
            >
              <div className="relative">
                <h3 className="relative mb-4 inline-block text-2xl font-bold text-amber-400">
                  About Us
                  <span className="absolute -bottom-2 left-0 h-1 w-20 rounded-full bg-gradient-to-r from-amber-400 to-orange-400"></span>
                  <span className="absolute -bottom-1 left-0 h-px w-12 rounded-full bg-amber-300"></span>
                </h3>
              </div>
              <div className="space-y-2 md:space-y-3">
                <p className="text-xs leading-relaxed text-gray-300 md:text-base">
                  Providing compassionate Islamic funeral services with dignity and respect, following proper Islamic traditions and practices for our community.
                </p>
                <div className="flex items-center space-x-2 text-amber-400">
                  <FaHeart className="size-4" />
                  <span className="text-sm font-medium">Serving with compassion since 2020</span>
                </div>
              </div>
              {/* Enhanced Social Links */}
              <div className="pt-2 md:pt-3">
                <p className="mb-3 text-xs text-gray-400 md:mb-4">Connect with us:</p>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {socialLinks.map((social, index) => (
                    <Link 
                      key={index}
                      href={social.href} 
                      className={`group relative rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-amber-400/30 ${social.color} ${social.bg}`}
                      aria-label={social.label}
                    >
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-amber-400/0 to-amber-400/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                      <social.icon className="relative z-10 size-5 text-gray-400 transition-colors duration-300 group-hover:text-current" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {/* Quick Links - Enhanced */}
            <div 
              className="space-y-4 md:space-y-6"
              style={{
                opacity: isLoaded ? 1 : 0, 
                transform: isLoaded ? 'translateY(0)' : 'translateY(30px)', 
                transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
              }}
            >
              <div className="relative">
                <h3 className="relative mb-4 inline-block text-2xl font-bold text-amber-400">
                  Quick Links
                  <span className="absolute -bottom-2 left-0 h-1 w-20 rounded-full bg-gradient-to-r from-amber-400 to-orange-400"></span>
                  <span className="absolute -bottom-1 left-0 h-px w-12 rounded-full bg-amber-300"></span>
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-2 md:gap-2 lg:gap-3">
                {quickLinks.map((link, index) => (
                  <Link 
                    key={index}
                    href={link.href} 
                    className="group flex items-center rounded-lg border border-transparent px-4 py-3 text-gray-300 transition-all duration-300 hover:border-amber-400/20 hover:bg-amber-400/5 hover:text-amber-400 md:px-4 md:py-2 md:text-sm"
                  >
                    <span className="mr-3 text-lg">{link.icon}</span>
                    <BiRightArrowAlt className="mr-3 size-4 text-amber-400 transition-transform duration-300 group-hover:translate-x-1" />
                    <span className="text-sm font-medium md:text-base">{link.name}</span>
                  </Link>
                ))}
              </div>
            </div>
            {/* Contact Info - Enhanced */}
            <div 
              className="space-y-4 md:space-y-6"
              style={{
                opacity: isLoaded ? 1 : 0, 
                transform: isLoaded ? 'translateY(0)' : 'translateY(30px)', 
                transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.3s'
              }}
            >
              <div className="relative">
                <h3 className="relative mb-4 inline-block text-2xl font-bold text-amber-400">
                  Contact Us
                  <span className="absolute -bottom-2 left-0 h-1 w-20 rounded-full bg-gradient-to-r from-amber-400 to-orange-400"></span>
                  <span className="absolute -bottom-1 left-0 h-px w-12 rounded-full bg-amber-300"></span>
                </h3>
              </div>
              <div className="space-y-3 md:space-y-4">
                {/* Address */}
                <div className="group flex items-start space-x-2 rounded-xl border border-transparent p-3 transition-all duration-300 hover:border-amber-400/20 hover:bg-amber-400/5 md:space-x-3 lg:space-x-4 md:p-3 lg:p-4">
                  <div className="flex-shrink-0 rounded-xl bg-amber-400/10 p-3 transition-colors duration-300 group-hover:bg-amber-400/20">
                    <HiOutlineLocationMarker className="size-5 text-amber-400" />
                  </div>
                  <div className="text-xs leading-relaxed text-gray-300 md:text-base">
                    <p className="mb-1 font-semibold text-white">Our Location</p>
                    <p>7-13/Plot no120 Alkapur</p>
                    <p>500089, Hyderabad</p>
                    <p>Telangana, India</p>
                  </div>
                </div>
                {/* Phone */}
                <Link 
                  href="tel:+919618316290" 
                  className="group flex items-center space-x-3 rounded-xl border border-transparent p-3 transition-all duration-300 hover:border-amber-400/20 hover:bg-amber-400/5 md:space-x-4 md:p-4"
                >
                  <div className="flex-shrink-0 rounded-xl bg-amber-400/10 p-2.5 transition-colors duration-300 group-hover:bg-amber-400/20 md:p-3">
                    <HiOutlinePhone className="size-4 text-amber-400 md:size-5" />
                  </div>
                  <div>
                    <p className="text-xxs uppercase tracking-wide text-gray-400 md:text-xs">Call Us 24/7</p>
                    <span className="text-xs font-semibold text-gray-300 transition-colors duration-300 group-hover:text-amber-400 md:text-sm">
                      +91 9618316290
                    </span>
                  </div>
                </Link>
                {/* Email */}
                <Link 
                  href="mailto:thelastcompanion1@gmail.com" 
                  className="group flex items-center space-x-3 rounded-xl border border-transparent p-3 transition-all duration-300 hover:border-amber-400/20 hover:bg-amber-400/5 md:space-x-4 md:p-4"
                >
                  <div className="flex-shrink-0 rounded-xl bg-amber-400/10 p-3 transition-colors duration-300 group-hover:bg-amber-400/20">
                    <HiOutlineMail className="size-5 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-gray-400">Email Us</p>
                    <span className="break-all text-sm font-medium text-gray-300 transition-colors duration-300 group-hover:text-amber-400 md:text-base">
                      thelastcompanion1@gmail.com
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            {/* Newsletter & CTA - Enhanced */}
            <div 
              className="space-y-4 md:space-y-6"
              style={{
                opacity: isLoaded ? 1 : 0, 
                transform: isLoaded ? 'translateY(0)' : 'translateY(30px)', 
                transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.4s'
              }}
            >
              <div className="relative">
                <h3 className="relative mb-4 inline-block text-2xl font-bold text-amber-400">
                  Stay Connected
                  <span className="absolute -bottom-2 left-0 h-1 w-20 rounded-full bg-gradient-to-r from-amber-400 to-orange-400"></span>
                  <span className="absolute -bottom-1 left-0 h-px w-12 rounded-full bg-amber-300"></span>
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-300 md:text-base">
                Subscribe to receive updates on our services, Islamic resources, and community support.
              </p>
              {/* Enhanced Newsletter Form */}
              <form onSubmit={handleNewsletterSubmit} className="space-y-2 md:space-y-3 lg:space-y-4">
                <div className="relative">
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address" 
                    className="w-full rounded-xl border border-white/20 bg-white/5 p-2 pr-10 text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300 focus:border-amber-400/50 focus:outline-none focus:ring-2 focus:ring-amber-400/50 md:p-3 md:pr-12 lg:p-4 lg:pr-14"
                    required
                  />
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="absolute right-2 top-1/2 -translate-y-1/2 transform rounded-lg bg-gradient-to-r from-amber-400 to-orange-400 p-2.5 text-white transition-all duration-300 hover:scale-105 hover:from-orange-400 hover:to-amber-400 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <div className="size-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                    ) : (
                      <FaArrowRight className="size-4" />
                    )}
                  </button>
                </div>
                {/* Success Message */}
                {subscriptionSuccess && (
                  <div className="animate-fadeIn flex items-center space-x-2 text-sm text-green-400">
                    <FaCheckCircle className="size-4" />
                    <span>Successfully subscribed! Thank you.</span>
                  </div>
                )}
              </form>
              {/* Enhanced CTA Button */}
              <Link 
                href="/booking" 
                className="group relative block w-full transform-gpu overflow-hidden rounded-xl bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 px-3 py-2 text-center font-bold text-white transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-400/25 md:px-4 md:py-3 lg:px-6 lg:py-4"
              >
                <span className="relative z-10 flex items-center justify-center space-x-3">
                  <span className="text-lg">Book Our Services</span>
                  <FaArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-2" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                <div className="absolute inset-0 origin-left scale-x-0 transform bg-white/20 transition-transform duration-500 group-hover:scale-x-100"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Enhanced Legal Links Section */}
      <div className="border-t border-white/10 bg-black/20 py-3 md:py-4 lg:py-8">
        <div className="container mx-auto px-4">
          <div className="mb-3 flex flex-wrap justify-center gap-2 md:mb-4 md:gap-3 lg:gap-6">
            {legalLinks.map((link, index) => (
              <Link 
                key={index}
                href={link.href} 
                className="rounded-lg border border-transparent px-2 py-1.5 text-xs font-medium text-gray-400 transition-all duration-300 hover:border-amber-400/20 hover:bg-amber-400/5 hover:text-amber-400 md:px-3 md:py-2 lg:px-4 lg:py-2 lg:text-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* Enhanced Copyright Section */}
      <div className="border-t border-white/10 bg-black/40 py-3 md:py-4 lg:py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between space-y-3 md:flex-row md:space-y-0 lg:space-y-0">
            <div className="text-center md:text-left">
              <p className="flex items-center justify-center space-x-1 text-xs text-gray-400 md:justify-start md:space-x-1.5 lg:space-x-2 lg:text-base">
                <span>&copy; {new Date().getFullYear()}</span>
                <span className="mx-2 text-lg font-bold text-amber-400">The Last Companion</span>
                <span>All rights reserved.</span>
              </p>
              <p className="text-xxs mt-1.5 text-xs text-gray-500 md:mt-1.5 lg:mt-2">
                Made with <FaHeart className="mx-1 inline size-3 text-red-400" /> for our community
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex space-x-3">
                {socialLinks.slice(0, 4).map((social, index) => (
                  <Link 
                    key={index}
                    href={social.href} 
                    className={`rounded-xl border border-white/10 bg-white/5 p-3 text-gray-400 transition-all duration-300 hover:scale-110 hover:border-amber-400/30 ${social.color} ${social.bg}`}
                    aria-label={social.label}
                  >
                    <social.icon className="size-4" />
                  </Link>
                ))}
              </div>
              <div className="hidden h-6 w-px bg-gray-600 md:block"></div>
              <div className="text-xs text-gray-500">
                <p>🕐 {currentTime.toLocaleTimeString('en-US', { 
                  hour: '2-digit', 
                  minute: '2-digit',
                  timeZone: 'Asia/Kolkata'
                })} IST</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
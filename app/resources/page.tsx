"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ResourcesPage() {
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
            <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">Islamic Funeral <span className="text-[#EF8354]">Resources</span></h1>
            <p className="mb-8 text-lg text-[#BFC0C0]">
              Educational materials and guidance to help you understand Islamic funeral practices and traditions.
            </p>
          </motion.div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>
      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Educational Guides */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="overflow-hidden rounded-lg bg-white shadow-md"
          >
            <div className="relative h-48 bg-[#4F5D75]">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-20 text-white opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold text-[#2D3142]">Educational Guides</h3>
              <p className="mb-4 text-[#4F5D75]">
                Comprehensive guides explaining Islamic funeral practices, rituals, and traditions.
              </p>
              <div className="space-y-3">
                <a href="#" className="group block">
                  <div className="flex items-center rounded-md p-3 transition-colors duration-200 hover:bg-[#F5F5F7]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-3 size-5 text-[#EF8354]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-medium text-[#2D3142] transition-colors duration-200 group-hover:text-[#EF8354]">Islamic Funeral Guide</p>
                      <p className="text-sm text-[#4F5D75]">PDF • 2.4 MB</p>
                    </div>
                  </div>
                </a>
                <a href="#" className="group block">
                  <div className="flex items-center rounded-md p-3 transition-colors duration-200 hover:bg-[#F5F5F7]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-3 size-5 text-[#EF8354]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-medium text-[#2D3142] transition-colors duration-200 group-hover:text-[#EF8354]">Janazah Prayer Guide</p>
                      <p className="text-sm text-[#4F5D75]">PDF • 1.8 MB</p>
                    </div>
                  </div>
                </a>
                <a href="#" className="group block">
                  <div className="flex items-center rounded-md p-3 transition-colors duration-200 hover:bg-[#F5F5F7]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-3 size-5 text-[#EF8354]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-medium text-[#2D3142] transition-colors duration-200 group-hover:text-[#EF8354]">Preparing the Deceased</p>
                      <p className="text-sm text-[#4F5D75]">PDF • 3.1 MB</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="overflow-hidden rounded-lg bg-white shadow-md"
          >
            <div className="relative h-48 bg-[#2D3142]">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-20 text-white opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold text-[#2D3142]">Frequently Asked Questions</h3>
              <p className="mb-4 text-[#4F5D75]">
                Answers to common questions about Islamic funeral practices and services.
              </p>
              <div className="space-y-4">
                <div className="border-b border-[#BFC0C0]/30 pb-3">
                  <h4 className="mb-1 font-medium text-[#2D3142]">What happens during an Islamic funeral?</h4>
                  <p className="text-sm text-[#4F5D75]">Islamic funerals involve washing and shrouding the body, performing the Janazah prayer, and burial as soon as possible after death.</p>
                </div>
                <div className="border-b border-[#BFC0C0]/30 pb-3">
                  <h4 className="mb-1 font-medium text-[#2D3142]">How quickly should burial take place?</h4>
                  <p className="text-sm text-[#4F5D75]">In Islamic tradition, burial should take place as soon as possible after death, preferably within 24 hours.</p>
                </div>
                <div className="border-b border-[#BFC0C0]/30 pb-3">
                  <h4 className="mb-1 font-medium text-[#2D3142]">Is cremation allowed in Islam?</h4>
                  <p className="text-sm text-[#4F5D75]">No, cremation is not permitted in Islam. Burial is the only approved method for laying the deceased to rest.</p>
                </div>
                <Link href="/resources/faqs" className="inline-flex items-center font-medium text-[#EF8354] transition-colors duration-200 hover:text-[#D64C1B]">
                  View all FAQs
                  <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
          {/* Community Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="overflow-hidden rounded-lg bg-white shadow-md"
          >
            <div className="relative h-48 bg-[#EF8354]">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-20 text-white opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold text-[#2D3142]">Community Resources</h3>
              <p className="mb-4 text-[#4F5D75]">
                Local and online resources to support families during their time of loss.
              </p>
              <div className="space-y-3">
                <div className="rounded-md border border-[#BFC0C0]/30 p-3">
                  <h4 className="font-medium text-[#2D3142]">Local Mosques</h4>
                  <p className="mb-2 text-sm text-[#4F5D75]">Directory of local mosques that can assist with funeral services.</p>
                  <Link href="#" className="text-sm text-[#EF8354] transition-colors duration-200 hover:text-[#D64C1B]">View Directory</Link>
                </div>
                <div className="rounded-md border border-[#BFC0C0]/30 p-3">
                  <h4 className="font-medium text-[#2D3142]">Grief Support</h4>
                  <p className="mb-2 text-sm text-[#4F5D75]">Muslim grief counseling and support groups in your area.</p>
                  <Link href="#" className="text-sm text-[#EF8354] transition-colors duration-200 hover:text-[#D64C1B]">Find Support</Link>
                </div>
                <div className="rounded-md border border-[#BFC0C0]/30 p-3">
                  <h4 className="font-medium text-[#2D3142]">Financial Assistance</h4>
                  <p className="mb-2 text-sm text-[#4F5D75]">Resources for families who need financial help with funeral expenses.</p>
                  <Link href="#" className="text-sm text-[#EF8354] transition-colors duration-200 hover:text-[#D64C1B]">Learn More</Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Quranic Guidance */}
      <section className="relative my-12 overflow-hidden bg-[#2D3142] py-16 text-white">
        <div className="absolute inset-0 bg-[url('/images/pattern-light.png')] opacity-10"></div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="container relative z-10 mx-auto px-4"
        >
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 font-serif text-3xl font-bold">Quranic Guidance</h2>
            <div className="rounded-lg bg-[#4F5D75]/30 p-6 backdrop-blur-sm md:p-8">
              <p className="mb-4 font-arabic text-xl leading-relaxed">
                "كُلُّ نَفْسٍ ذَائِقَةُ الْمَوْتِ ۗ ثُمَّ إِلَيْنَا تُرْجَعُونَ"
              </p>
              <p className="mb-4 text-lg italic">
                "Every soul will taste death. Then to Us will you be returned."
              </p>
              <p className="text-sm text-[#BFC0C0]">Surah Al-Ankabut (29:57)</p>
            </div>
          </div>
        </motion.div>
      </section>
      {/* Video Resources */}
      <section className="container mx-auto mb-16 px-4 py-12">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center"
          >
            <h2 className="mb-4 font-serif text-3xl font-bold text-[#2D3142]">Video Resources</h2>
            <p className="text-[#4F5D75]">
              Educational videos explaining Islamic funeral practices and traditions.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="overflow-hidden rounded-lg bg-white shadow-md"
            >
              <div className="relative aspect-video bg-[#2D3142]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex size-16 cursor-pointer items-center justify-center rounded-full bg-[#EF8354]/90 transition-colors duration-200 hover:bg-[#EF8354]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 size-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-[#2D3142]">Understanding the Janazah Prayer</h3>
                <p className="text-sm text-[#4F5D75]">A step-by-step guide to performing the funeral prayer.</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="overflow-hidden rounded-lg bg-white shadow-md"
            >
              <div className="relative aspect-video bg-[#2D3142]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex size-16 cursor-pointer items-center justify-center rounded-full bg-[#EF8354]/90 transition-colors duration-200 hover:bg-[#EF8354]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 size-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-[#2D3142]">Islamic Burial Practices</h3>
                <p className="text-sm text-[#4F5D75]">Learn about proper Islamic burial procedures and etiquette.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Contact CTA */}
      <section className="bg-gradient-to-r from-[#2D3142] to-[#4F5D75] py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold">Need More Information?</h2>
            <p className="mb-8 text-lg">
              Our team is here to answer any questions you may have about Islamic funeral services.
            </p>
            <Link 
              href="/contact-us" 
              className="inline-block rounded-md bg-[#EF8354] px-8 py-3 font-medium transition-colors duration-300 hover:bg-[#D64C1B]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

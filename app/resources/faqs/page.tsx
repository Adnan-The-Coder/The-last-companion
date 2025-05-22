"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';

export default function FAQsPage() {
  // FAQ data - in a real application, this would likely come from a database or API
  const faqs = [
    {
      question: "What happens during an Islamic funeral?",
      answer: "Islamic funerals involve washing and shrouding the body, performing the Janazah prayer, and burial as soon as possible after death. The process is conducted with dignity and respect, following Islamic traditions that have been practiced for centuries."
    },
    {
      question: "How quickly should burial take place?",
      answer: "In Islamic tradition, burial should take place as soon as possible after death, preferably within 24 hours. This practice is based on religious teachings and shows respect for the deceased."
    },
    {
      question: "Is cremation allowed in Islam?",
      answer: "No, cremation is not permitted in Islam. Burial is the only approved method for laying the deceased to rest, as it preserves the dignity of the human body."
    },
    {
      question: "Who can attend an Islamic funeral?",
      answer: "Islamic funerals are typically open to all Muslims who wish to attend, regardless of their relationship to the deceased. Non-Muslims may also attend to pay their respects, though they may not participate in the religious rituals."
    },
    {
      question: "What is the Janazah prayer?",
      answer: "The Janazah prayer is a special prayer performed for the deceased. It is a communal obligation (fard kifayah) in Islam, meaning that if some members of the community perform it, the obligation is fulfilled for all."
    },
    {
      question: "How should one dress when attending an Islamic funeral?",
      answer: "Attendees should dress modestly and respectfully. Men typically wear simple, clean clothes, often in dark colors. Women should wear loose-fitting clothes that cover the arms, legs, and hair."
    },
    {
      question: "Are flowers and wreaths appropriate at an Islamic funeral?",
      answer: "While not traditionally part of Islamic funeral customs, simple flower arrangements are generally acceptable. Elaborate displays or wreaths are usually discouraged as they may be seen as extravagant."
    },
    {
      question: "What condolences are appropriate to offer?",
      answer: "It is customary to offer condolences by saying 'Inna lillahi wa inna ilayhi raji'un' (To Allah we belong and to Him we shall return). Expressions of sympathy and offers of support are also appropriate."
    },
    {
      question: "Is wailing or excessive mourning allowed?",
      answer: "Islam encourages patience and acceptance of Allah's decree. While natural grief is understood, excessive wailing, screaming, or displays of grief that suggest dissatisfaction with Allah's will are discouraged."
    },
    {
      question: "What happens at the gravesite?",
      answer: "At the gravesite, the body is placed in the grave facing the Qibla (direction of Mecca). Those present may participate in placing soil in the grave, and supplications (du'a) are made for the deceased."
    },
    {
      question: "How long is the mourning period in Islam?",
      answer: "For most family members, there is no specific mourning period, though showing grief for up to three days is considered normal. For a widow, the mourning period (iddah) is four months and ten days."
    },
    {
      question: "Can women attend the burial?",
      answer: "Practices vary by cultural interpretation. In some communities, women do attend burials, while in others, they may not. This is often based on cultural customs rather than explicit religious prohibition."
    },
    {
      question: "What support services do you offer for bereaved families?",
      answer: "We offer comprehensive support services including grief counseling, assistance with funeral arrangements, guidance on Islamic burial practices, and community support networks to help families through their time of loss."
    },
    {
      question: "How can I prepare for my own Islamic funeral?",
      answer: "You can prepare by writing a will (wasiyah), discussing your wishes with family members, setting aside funds for funeral expenses, and learning about Islamic funeral practices to ensure your funeral follows Islamic traditions."
    },
    {
      question: "Are autopsies permitted in Islam?",
      answer: "Autopsies are generally discouraged unless required by law or necessary for medical research that could benefit others. If an autopsy is performed, all body parts should be returned for burial."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#F5F5F7]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#2D3142] text-white">
        <div className="absolute inset-0 bg-[url('/images/pattern-light.png')] opacity-10"></div>
        <div className="container mx-auto px-4 py-12 sm:py-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="mb-4 font-serif text-3xl font-bold md:text-4xl">Frequently Asked <span className="text-[#EF8354]">Questions</span></h1>
            <p className="mb-6 text-lg text-[#BFC0C0]">
              Comprehensive answers to common questions about Islamic funeral practices and services.
            </p>
            <Link 
              href="/resources" 
              className="inline-flex items-center text-[#EF8354] transition-colors duration-300 hover:text-white"
            >
              <FaArrowLeft className="mr-2" />
              Back to Resources
            </Link>
          </motion.div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* FAQs Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-lg bg-white shadow-lg"
          >
            <div className="p-6 md:p-8">
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="border-b border-[#BFC0C0]/30 pb-6 last:border-0 last:pb-0"
                  >
                    <h3 className="mb-2 text-xl font-medium text-[#2D3142]">{faq.question}</h3>
                    <p className="text-[#4F5D75]">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gradient-to-r from-[#2D3142] to-[#4F5D75] py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 font-serif text-2xl font-bold">Still Have Questions?</h2>
            <p className="mb-6 text-lg">
              Our team is here to provide guidance and answer any additional questions you may have.
            </p>
            <Link 
              href="/contact-us" 
              className="inline-block rounded-md bg-[#EF8354] px-6 py-3 font-medium transition-colors duration-300 hover:bg-[#D64C1B]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

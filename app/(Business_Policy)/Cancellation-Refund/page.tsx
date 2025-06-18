 
// cancellation-refund/page.tsx
"use client";
import { motion } from 'framer-motion';
import { NextPage } from 'next';

const CancellationRefund: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-900 py-4 text-white">
      <motion.div
          className="container mx-auto px-4 py-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
        <div className="mb-12 text-center">
          <motion.h1
              className="mb-4 text-4xl font-bold text-green-400"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
            >
            Cancellation and Refund Policy
          </motion.h1>
          <motion.p
              className="mb-6 text-lg text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
            Understanding our policies during difficult times - Please read carefully before engaging our Islamic funeral services.
          </motion.p>
        </div>
        <motion.div
            className="space-y-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
          {/* Emergency Nature Notice */}
          <div className="rounded-lg border border-red-700 bg-red-900/30 p-6 shadow-lg">
            <h2 className="mb-4 flex items-center text-2xl font-semibold text-red-400">
              <span className="mr-2">⚠️</span>
              Important Notice
            </h2>
            <p className="text-md mb-4 leading-relaxed text-gray-200">
              We understand that funeral services are arranged during times of great emotional distress and urgency. Our policies are designed with compassion and understanding while ensuring the dignity of Islamic burial rites is maintained.
            </p>
          </div>
          {/* Cancellation Policy */}
          <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-green-400">1. Cancellation Policy</h2>
            <div className="space-y-4">
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Pre-Service Cancellation</h3>
                <p className="text-md mb-4 leading-relaxed text-gray-300">
                  If you need to cancel our Islamic funeral services before any preparation work has begun, please contact us immediately at <span className="text-green-400">+91-XXXX-XXXXXX</span>. We understand emergencies and changed circumstances can occur.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">After Ghusl or Kafan Preparation</h3>
                <p className="text-md mb-4 leading-relaxed text-gray-300">
                  Once the Islamic washing (ghusl) or shrouding (kafan) process has commenced, cancellation may not be possible due to the sacred nature of these Islamic rites and the irreversible nature of the preparation process.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">24/7 Emergency Cancellation</h3>
                <p className="text-md mb-4 leading-relaxed text-gray-300">
                  Our emergency hotline is available 24/7 for urgent cancellations. We will work with you compassionately to understand your situation and find the best solution while respecting Islamic principles.
                </p>
              </div>
            </div>
          </div>
          {/* Refund Policy */}
          <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-green-400">2. Refund Policy</h2>
            <div className="space-y-4">
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Full Refund Scenarios</h3>
                <ul className="ml-4 list-inside list-disc space-y-2 text-gray-300">
                  <li>Cancellation before any Islamic preparation rituals begin</li>
                  <li>Service cancellation due to unforeseen circumstances beyond family control</li>
                  <li>If we are unable to provide the agreed Islamic funeral services</li>
                  <li>Advance payments for services not yet rendered</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Partial Refund Scenarios</h3>
                <ul className="ml-4 list-inside list-disc space-y-2 text-gray-300">
                  <li>Cancellation after initial consultation but before ghusl preparation</li>
                  <li>Reduction in service scope (e.g., family deciding to handle certain aspects themselves)</li>
                  <li>Changes in burial location or ceremony preferences</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Refund Processing</h3>
                <p className="text-md mb-4 leading-relaxed text-gray-300">
                  Approved refunds will be processed within 5-7 business days. We understand the sensitivity of the situation and prioritize quick resolution during your time of grief.
                </p>
              </div>
            </div>
          </div>
          {/* Non-Refundable Services */}
          <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-green-400">3. Non-Refundable Services</h2>
            <div className="space-y-4">
              <p className="text-md mb-4 leading-relaxed text-gray-300">
                The following services are non-refundable once completed, in accordance with Islamic funeral traditions:
              </p>
              <ul className="ml-4 list-inside list-disc space-y-2 text-gray-300">
                <li><strong>Ghusl (Islamic Washing):</strong> Once the deceased has been ritually washed according to Islamic rites</li>
                <li><strong>Kafan (Shrouding):</strong> After the body has been wrapped in the Islamic burial shroud</li>
                <li><strong>Janazah Prayer Services:</strong> Once the funeral prayer ceremony has been conducted</li>
                <li><strong>Burial Services:</strong> After the burial has taken place in the Islamic cemetery</li>
                <li><strong>Transportation:</strong> Once the deceased has been transported to the funeral location</li>
                <li><strong>Imam Services:</strong> Once religious services have been provided</li>
                <li><strong>Documentation:</strong> Government forms and certificates that have been processed</li>
              </ul>
            </div>
          </div>
          {/* Special Circumstances */}
          <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-green-400">4. Special Circumstances</h2>
            <div className="space-y-4">
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Financial Hardship</h3>
                <p className="text-md mb-4 leading-relaxed text-gray-300">
                  We understand that death can bring unexpected financial burden. We offer payment plans and may consider special arrangements for families facing genuine financial difficulties. Please speak with our compassionate support team.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Insurance Claims</h3>
                <p className="text-md mb-4 leading-relaxed text-gray-300">
                  We will work with insurance providers and provide necessary documentation for claims. Any refunds due to insurance coverage will be processed according to the insurance company's timeline.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Force Majeure</h3>
                <p className="text-md mb-4 leading-relaxed text-gray-300">
                  In cases of natural disasters, government restrictions, or other circumstances beyond our control that prevent service delivery, full refunds will be provided for undelivered services.
                </p>
              </div>
            </div>
          </div>
          {/* Contact Information */}
          <div className="rounded-lg border border-green-700 bg-green-900/30 p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-green-400">5. Contact Us</h2>
            <div className="space-y-4">
              <p className="text-md leading-relaxed text-gray-200">
                If you have any questions about our Cancellation and Refund Policy, or need to discuss your specific situation, please contact us immediately:
              </p>
              <div className="grid gap-4 text-gray-200 md:grid-cols-2">
                <div>
                  <h4 className="mb-2 font-semibold text-white">24/7 Emergency Hotline:</h4>
                  <p className="font-medium text-green-400">+91-XXXX-XXXXXX</p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-white">Email Support:</h4>
                  <p className="font-medium text-green-400">support@thelastcompanion.com</p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-white">WhatsApp Support:</h4>
                  <p className="font-medium text-green-400">+91-XXXX-XXXXXX</p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-white">Office Hours:</h4>
                  <p className="text-gray-300">24/7 Available</p>
                </div>
              </div>
              <div className="mt-6 rounded-lg bg-gray-700 p-4">
                <p className="text-sm italic text-gray-300">
                  "We are here to support you during this difficult time with compassion, understanding, and respect for Islamic traditions. Our goal is to honor your loved one while providing peace of mind to your family."
                </p>
              </div>
            </div>
          </div>
          {/* Policy Updates */}
          <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-green-400">6. Policy Updates</h2>
            <p className="text-md leading-relaxed text-gray-300">
              This policy may be updated periodically to better serve our community while maintaining adherence to Islamic principles. Any changes will be communicated through our website and direct communication with existing clients. The most current version is always available at thelastcompanion.com/cancellation-refund.
            </p>
            <p className="mt-4 text-sm text-gray-400">
              Last updated: January 2025
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CancellationRefund;
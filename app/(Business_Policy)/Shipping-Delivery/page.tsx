// shipping-delivery/page.tsx

"use client";
import { motion } from 'framer-motion';
import { NextPage } from 'next';

const ShippingDeliveryPolicy: NextPage = () => {
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
            Shipping and Delivery Policy
          </motion.h1>
          <motion.p
            className="mb-6 text-lg text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We understand the urgency and sensitivity of funeral services. Our comprehensive delivery and transportation services ensure dignified, timely, and respectful handling of all arrangements in accordance with Islamic traditions.
          </motion.p>
        </div>
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Emergency Response Commitment */}
          <div className="rounded-lg border border-green-700 bg-green-900/30 p-6 shadow-lg">
            <h2 className="mb-4 flex items-center text-2xl font-semibold text-green-400">
              <span className="mr-2">🚨</span>
              24/7 Emergency Response
            </h2>
            <p className="text-md mb-4 leading-relaxed text-gray-200">
              The Last Companion provides immediate response to funeral service requests across Hyderabad and surrounding areas. Our dedicated team is available 24 hours a day, 7 days a week, understanding that death does not wait for convenient hours. We are committed to responding to all calls within 30 minutes and arriving at your location within 2 hours of initial contact.
            </p>
          </div>
          {/* Transportation Services */}
          <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-green-400">1. Transportation and Delivery Services</h2>
            <div className="space-y-4">
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Body Transportation Services</h3>
                <ul className="ml-4 list-inside list-disc space-y-1 text-gray-300">
                  <li>Hospital to funeral home transportation with specialized vehicles</li>
                  <li>Home collection services for natural deaths</li>
                  <li>Mortuary to mosque transportation for Janazah prayers</li>
                  <li>Mosque to cemetery transportation with funeral procession coordination</li>
                  <li>Inter-city transportation within Telangana and Andhra Pradesh</li>
                  <li>International repatriation services for overseas deaths</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Specialized Funeral Vehicles</h3>
                <ul className="ml-4 list-inside list-disc space-y-1 text-gray-300">
                  <li>Climate-controlled hearses with Islamic decorations</li>
                  <li>Ambulance services for emergency transportation</li>
                  <li>Family transport vehicles for mourning relatives</li>
                  <li>Cargo vehicles for funeral supplies and arrangements</li>
                  <li>Wheelchair accessible vehicles for elderly family members</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Delivery of Funeral Supplies</h3>
                <ul className="ml-4 list-inside list-disc space-y-1 text-gray-300">
                  <li>Kafan (shroud) materials and Islamic burial clothing</li>
                  <li>Camphor, rose water, and other preparation materials</li>
                  <li>Prayer carpets and Islamic funeral decorations</li>
                  <li>Flowers and wreaths for service arrangements</li>
                  <li>Tent and seating arrangements for large gatherings</li>
                  <li>Audio-visual equipment for prayer broadcasts</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Service Areas and Coverage */}
          <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-green-400">2. Service Areas and Coverage</h2>
            <div className="space-y-4">
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Primary Service Area (Same-Day Service)</h3>
                <ul className="ml-4 list-inside list-disc space-y-1 text-gray-300">
                  <li><strong>Hyderabad Metropolitan Area:</strong> All districts including Secunderabad, Cyberabad</li>
                  <li><strong>Major Hospitals:</strong> Apollo, Yashoda, NIMS, Osmania, Gandhi, and all government hospitals</li>
                  <li><strong>Islamic Cemeteries:</strong> Pahadi Shareef, Santosh Nagar, Barkas, Chandrayangutta</li>
                  <li><strong>Major Mosques:</strong> Mecca Masjid, Charminar Mosque, Shahi Mosque, and 200+ local mosques</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Extended Service Area (Within 24 Hours)</h3>
                <ul className="ml-4 list-inside list-disc space-y-1 text-gray-300">
                  <li><strong>Telangana State:</strong> Warangal, Karimnagar, Nizamabad, Khammam, Nalgonda</li>
                  <li><strong>Andhra Pradesh:</strong> Vijayawada, Visakhapatnam, Tirupati, Guntur, Kurnool</li>
                  <li><strong>Neighboring States:</strong> Bangalore, Chennai, Mumbai (with advance notice)</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">International Services</h3>
                <p className="text-md mb-3 leading-relaxed text-gray-300">
                  We coordinate with international partners for repatriation services to and from Middle East, Europe, North America, and other regions with significant Muslim populations. Processing time varies by destination and documentation requirements.
                </p>
              </div>
            </div>
          </div>
          {/* Delivery Timeframes */}
          <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-green-400">3. Service Delivery Timeframes</h2>
            <div className="space-y-4">
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Emergency Response Times</h3>
                <ul className="ml-4 list-inside list-disc space-y-1 text-gray-300">
                  <li><strong>Initial Response:</strong> Within 30 minutes of your call</li>
                  <li><strong>Team Arrival:</strong> Within 2 hours in Hyderabad metro area</li>
                  <li><strong>Body Collection:</strong> Within 4 hours of notification</li>
                  <li><strong>Preparation Completion:</strong> 6-8 hours for standard Islamic preparation</li>
                  <li><strong>Funeral Service Coordination:</strong> 12-24 hours depending on family preferences</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Islamic Burial Timeline</h3>
                <div className="rounded-lg bg-gray-700 p-4">
                  <p className="text-md mb-3 font-medium text-green-400">
                    Following Islamic tradition of burial within 24 hours:
                  </p>
                  <ul className="ml-4 list-inside list-disc space-y-1 text-gray-300">
                    <li><strong>Immediate (0-2 hours):</strong> Body collection and initial preparation</li>
                    <li><strong>2-6 hours:</strong> Ghusl (ritual washing) and Kafan (shrouding)</li>
                    <li><strong>6-12 hours:</strong> Family viewing and Janazah prayer arrangement</li>
                    <li><strong>12-24 hours:</strong> Burial ceremony and final rites</li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Special Circumstances</h3>
                <ul className="ml-4 list-inside list-disc space-y-1 text-gray-300">
                  <li><strong>Post-mortem Cases:</strong> Additional 24-48 hours pending autopsy completion</li>
                  <li><strong>Legal Documentation:</strong> 2-5 business days for complex cases</li>
                  <li><strong>International Repatriation:</strong> 5-14 days depending on destination</li>
                  <li><strong>Weekend/Holiday Services:</strong> Same timeline with premium charges</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Delivery Procedures */}
          <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-green-400">4. Delivery Procedures and Protocols</h2>
            <div className="space-y-4">
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Transportation Standards</h3>
                <ul className="ml-4 list-inside list-disc space-y-1 text-gray-300">
                  <li>All vehicles are regularly sanitized and maintained to highest standards</li>
                  <li>Temperature-controlled environment to preserve dignity and respect</li>
                  <li>Trained drivers with Islamic funeral service experience</li>
                  <li>GPS tracking for family peace of mind and service coordination</li>
                  <li>Backup vehicle availability for emergencies</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Handling Protocols</h3>
                <ul className="ml-4 list-inside list-disc space-y-1 text-gray-300">
                  <li>Respectful handling according to Islamic principles</li>
                  <li>Trained staff in Islamic funeral customs and traditions</li>
                  <li>Minimal handling to preserve dignity of the deceased</li>
                  <li>Proper documentation at every transfer point</li>
                  <li>Family escort services available upon request</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Communication and Updates</h3>
                <ul className="ml-4 list-inside list-disc space-y-1 text-gray-300">
                  <li>Real-time SMS and WhatsApp updates to family members</li>
                  <li>Estimated arrival times with 15-minute accuracy</li>
                  <li>Immediate notification of any delays or changes</li>
                  <li>24/7 customer service hotline for status inquiries</li>
                  <li>Photographic confirmation of key milestones (with family consent)</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Charges and Payment */}
          <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-green-400">5. Delivery Charges and Payment Terms</h2>
            <div className="space-y-4">
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Standard Delivery Charges</h3>
                <ul className="ml-4 list-inside list-disc space-y-1 text-gray-300">
                  <li><strong>Within Hyderabad:</strong> No additional charge for distances up to 25 km</li>
                  <li><strong>Extended Metro Area:</strong> ₹5 per km beyond 25 km radius</li>
                  <li><strong>Inter-city Transportation:</strong> ₹15-25 per km depending on distance</li>
                  <li><strong>Emergency Services:</strong> 50% surcharge for immediate response</li>
                  <li><strong>Night Services (10 PM - 6 AM):</strong> 30% surcharge</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Special Service Charges</h3>
                <ul className="ml-4 list-inside list-disc space-y-1 text-gray-300">
                  <li><strong>International Repatriation:</strong> Cost varies by destination (₹2,50,000 - ₹8,00,000)</li>
                  <li><strong>Expedited Services:</strong> Additional 25% for same-day arrangements</li>
                  <li><strong>Weekend/Holiday Services:</strong> 40% surcharge on regular rates</li>
                  <li><strong>Extended Family Transport:</strong> ₹500 per additional vehicle</li>
                  <li><strong>Waiting Time:</strong> ₹200 per hour beyond scheduled time</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Payment Options</h3>
                <div className="rounded-lg bg-gray-700 p-4">
                  <ul className="ml-4 list-inside list-disc space-y-1 text-gray-300">
                    <li><strong>Cash Payment:</strong> Accepted at all times</li>
                    <li><strong>Digital Payments:</strong> UPI, PayTM, Google Pay, PhonePe</li>
                    <li><strong>Bank Transfer:</strong> RTGS/NEFT for larger amounts</li>
                    <li><strong>Insurance Direct Billing:</strong> For covered services</li>
                    <li><strong>Installment Plans:</strong> Available for international services</li>
                    <li><strong>Emergency Credit:</strong> 48-hour payment window for urgent cases</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Weather and External Factors */}
          <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-green-400">6. Weather and External Factors</h2>
            <div className="space-y-4">
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Weather Considerations</h3>
                <p className="text-md mb-3 leading-relaxed text-gray-300">
                  Hyderabad's monsoon season (June-September) may occasionally impact transportation timing. We maintain alternative routes and backup plans to ensure minimal delays. During extreme weather conditions, we prioritize safety while maintaining Islamic burial timelines.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Traffic and Road Conditions</h3>
                <ul className="ml-4 list-inside list-disc space-y-1 text-gray-300">
                  <li>Real-time traffic monitoring and route optimization</li>
                  <li>Coordination with local authorities for funeral processions</li>
                  <li>Alternative route planning for major events or road closures</li>
                  <li>Express lane arrangements for time-sensitive deliveries</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Force Majeure Events</h3>
                <p className="text-md mb-3 leading-relaxed text-gray-300">
                  In case of natural disasters, civil unrest, or government restrictions, we work closely with authorities to ensure essential funeral services continue. Alternative arrangements and extended timelines may be necessary while maintaining Islamic burial requirements.
                </p>
              </div>
            </div>
          </div>
          {/* Quality Assurance */}
          <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-green-400">7. Quality Assurance and Guarantees</h2>
            <div className="space-y-4">
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Service Guarantees</h3>
                <ul className="ml-4 list-inside list-disc space-y-1 text-gray-300">
                  <li><strong>Dignity Guarantee:</strong> Respectful handling according to Islamic principles</li>
                  <li><strong>Timeliness Guarantee:</strong> Adherence to promised delivery times</li>
                  <li><strong>Temperature Control:</strong> Proper preservation during transportation</li>
                  <li><strong>Documentation Accuracy:</strong> Correct handling of all legal papers</li>
                  <li><strong>Family Satisfaction:</strong> 100% commitment to family peace of mind</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Complaint Resolution</h3>
                <p className="text-md mb-3 leading-relaxed text-gray-300">
                  Any concerns about our delivery services will be addressed immediately. We maintain a dedicated complaints hotline and guarantee response within 2 hours. Service credits or refunds may be provided for verified service failures.
                </p>
              </div>
            </div>
          </div>
          {/* Special Requests */}
          <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-green-400">8. Special Requests and Accommodations</h2>
            <div className="space-y-4">
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Customized Services</h3>
                <ul className="ml-4 list-inside list-disc space-y-1 text-gray-300">
                  <li>Specific route requests for religious or family reasons</li>
                  <li>Multi-location stops for family gathering points</li>
                  <li>Coordinated arrivals for large family gatherings</li>
                  <li>Special vehicle decorations for prominent community members</li>
                  <li>VIP services for high-profile funerals</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Accessibility Services</h3>
                <ul className="ml-4 list-inside list-disc space-y-1 text-gray-300">
                  <li>Wheelchair accessible vehicles for elderly family members</li>
                  <li>Ground-level loading for mobility-impaired mourners</li>
                  <li>Sign language interpreters for hearing-impaired families</li>
                  <li>Braille documentation for visually impaired family members</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Islamic Compliance */}
          <div className="rounded-lg border border-green-700 bg-green-900/20 p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-green-400">9. Islamic Compliance and Religious Considerations</h2>
            <div className="space-y-4">
              <p className="text-md mb-4 leading-relaxed text-gray-200">
                All our delivery and transportation services strictly adhere to Islamic principles:
              </p>
              <ul className="ml-4 list-inside list-disc space-y-2 text-gray-300">
                <li><strong>Direction Compliance:</strong> Proper positioning during transportation</li>
                <li><strong>Separation Principles:</strong> Gender-appropriate handling and escort services</li>
                <li><strong>Ritual Timing:</strong> Coordination with prayer times and religious requirements</li>
                <li><strong>Purification Standards:</strong> Clean and sanctified transportation environment</li>
                <li><strong>Respect for Tradition:</strong> Accommodation of specific cultural practices</li>
              </ul>
            </div>
          </div>
          {/* Contact Information */}
          <div className="rounded-lg border border-green-700 bg-green-900/30 p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-green-400">10. Contact Information and Support</h2>
            <div className="space-y-4">
              <p className="text-md leading-relaxed text-gray-200">
                For all delivery and transportation inquiries, emergency services, or special requests:
              </p>
              <div className="grid gap-4 text-gray-200 md:grid-cols-2">
                <div>
                  <h4 className="mb-2 font-semibold text-white">Emergency Hotline:</h4>
                  <p className="font-medium text-green-400">+91-XXXX-XXXXXX</p>
                  <p className="text-sm text-gray-400">(24/7 Available)</p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-white">WhatsApp Support:</h4>
                  <p className="font-medium text-green-400">+91-XXXX-XXXXXX</p>
                  <p className="text-sm text-gray-400">(Real-time Updates)</p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-white">Email:</h4>
                  <p className="font-medium text-green-400">delivery@thelastcompanion.com</p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-white">Operations Manager:</h4>
                  <p className="font-medium text-green-400">Abdul Rahman</p>
                </div>
              </div>
              <div className="mt-6 rounded-lg bg-gray-700 p-4">
                <p className="text-sm text-gray-300">
                  <strong>Service Commitment:</strong> We guarantee acknowledgment of all service requests within 15 minutes and full service initiation within 2 hours of your call, 24 hours a day, 365 days a year.
                </p>
              </div>
              <div className="mt-4 rounded-lg bg-gray-700 p-4">
                <p className="text-sm italic text-gray-300">
                  "In your time of need, we ensure your loved ones are transported with the dignity, respect, and promptness they deserve. Our commitment extends beyond service delivery to providing peace of mind during life's most challenging moments."
                </p>
              </div>
            </div>
          </div>
          {/* Effective Date */}
          <div className="mt-8 rounded-lg bg-gray-800 p-4 text-center text-sm text-gray-400">
            <p><strong>Effective Date:</strong> January 15, 2025</p>
            <p><strong>Last Updated:</strong> January 15, 2025</p>
            <p><strong>Version:</strong> 1.0</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ShippingDeliveryPolicy;
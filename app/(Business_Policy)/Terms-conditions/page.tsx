// terms-and-conditions/page.tsx
"use client";
import { motion } from 'framer-motion';
import { NextPage } from 'next';

const TermsAndConditions: NextPage = () => {
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
            Terms and Conditions
          </motion.h1>
          <motion.p
            className="mb-6 text-lg text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            These terms govern our sacred commitment to serving families during their most difficult times. Please read carefully to understand our mutual responsibilities and the Islamic principles that guide our services.
          </motion.p>
        </div>
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Service Agreement Notice */}
          <div className="rounded-lg border border-green-700 bg-green-900/30 p-6 shadow-lg">
            <h2 className="mb-4 flex items-center text-2xl font-semibold text-green-400">
              <span className="mr-2">📋</span>
              Service Agreement
            </h2>
            <p className="text-md mb-4 leading-relaxed text-gray-200">
              By engaging The Last Companion for funeral services, you enter into a sacred trust. These terms reflect our commitment to Islamic principles of dignity, respect, and service excellence while protecting both your rights and our responsibilities during this sensitive time.
            </p>
          </div>
          {/* Introduction and Acceptance */}
          <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-green-400">1. Introduction and Acceptance</h2>
            <div className="space-y-4">
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Agreement to Terms</h3>
                <p className="text-md mb-4 leading-relaxed text-gray-300">
                  Welcome to The Last Companion. These Terms and Conditions ("Terms") constitute a legally binding agreement between you (the "Client" or "Family") and The Last Companion, a funeral services provider operating in Hyderabad, Telangana, India. By requesting our services, signing service agreements, or using our website, you acknowledge that you have read, understood, and agree to be bound by these Terms.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Service Philosophy</h3>
                <p className="text-md mb-4 leading-relaxed text-gray-300">
                  Our services are founded on Islamic principles of compassion (Rahma), dignity (Karama), and trust (Amanah). We understand that funeral arrangements are made during emotionally challenging times, and we commit to providing clear, fair, and respectful service terms that honor both Islamic traditions and legal requirements.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Capacity and Authority</h3>
                <ul className="ml-4 list-inside list-disc space-y-1 text-gray-300">
                  <li>Services may only be contracted by legally authorized individuals</li>
                  <li>Next of kin or legal representatives have decision-making authority</li>
                  <li>In case of disputes, Islamic inheritance laws will be considered</li>
                  <li>We reserve the right to request legal documentation verifying authority</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Service Scope and Delivery */}
          <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-green-400">2. Service Scope and Delivery</h2>
            <div className="space-y-4">
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Comprehensive Funeral Services</h3>
                <ul className="ml-4 list-inside list-disc space-y-1 text-gray-300">
                  <li><strong>Islamic Preparation:</strong> Ghusl (ritual washing), Kafan (shrouding), and preparation according to Sunnah</li>
                  <li><strong>Transportation:</strong> Dignified transportation from hospital/home to mosque to cemetery</li>
                  <li><strong>Documentation:</strong> Assistance with death certificates, burial permits, and legal requirements</li>
                  <li><strong>Coordination:</strong> Mosque arrangements, Imam services, and cemetery coordination</li>
                  <li><strong>Family Support:</strong> 24/7 guidance, grief counseling, and administrative assistance</li>
                  <li><strong>Repatriation:</strong> International transportation for overseas deaths when requested</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Service Standards</h3>
                <div className="rounded-lg bg-gray-700 p-4">
                  <ul className="ml-4 list-inside list-disc space-y-1 text-gray-300">
                    <li>All services performed according to authentic Islamic practices</li>
                    <li>24-hour burial timeline respected unless legal/medical delays occur</li>
                    <li>Trained staff with Islamic funeral service expertise</li>
                    <li>Transparent pricing with no hidden charges</li>
                    <li>Cultural sensitivity and respect for family traditions</li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Service Limitations</h3>
                <p className="text-md mb-3 leading-relaxed text-gray-300">
                  Our services are limited to Islamic funeral practices and legal requirements in India. We cannot provide services that contradict Islamic principles or violate local laws. Special requests will be accommodated when possible and appropriate.
                </p>
              </div>
            </div>
          </div>
          {/* Payment Terms and Pricing */}
          <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-green-400">3. Payment Terms and Pricing</h2>
            <div className="space-y-4">
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Pricing Structure</h3>
                <ul className="ml-4 list-inside list-disc space-y-1 text-gray-300">
                  <li><strong>Transparent Pricing:</strong> All costs clearly explained before service commencement</li>
                  <li><strong>Package Options:</strong> Basic, Standard, and Premium service packages available</li>
                  <li><strong>Additional Services:</strong> Optional services priced separately with prior consent</li>
                  <li><strong>Emergency Surcharges:</strong> Clearly stated additional charges for urgent services</li>
                  <li><strong>Distance Charges:</strong> Transportation costs based on distance and location</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Payment Methods and Terms</h3>
                <div className="rounded-lg bg-gray-700 p-4">
                  <p className="text-md mb-3 font-medium text-green-400">Accepted Payment Methods:</p>
                  <ul className="ml-4 list-inside list-disc space-y-1 text-gray-300">
                    <li><strong>Cash:</strong> Accepted at all locations</li>
                    <li><strong>Digital Payments:</strong> UPI, PayTM, Google Pay, PhonePe</li>
                    <li><strong>Bank Transfer:</strong> RTGS/NEFT for large amounts</li>
                    <li><strong>Cheque:</strong> Post-dated cheques accepted with verification</li>
                    <li><strong>Insurance:</strong> Direct billing when applicable</li>
                    <li><strong>Installments:</strong> Available for international repatriation services</li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Payment Schedule</h3>
                <ul className="ml-4 list-inside list-disc space-y-1 text-gray-300">
                  <li><strong>Advance Payment:</strong> 50% advance for confirmed bookings</li>
                  <li><strong>Service Completion:</strong> Balance payment before final service delivery</li>
                  <li><strong>Emergency Services:</strong> Payment within 48 hours of service completion</li>
                  <li><strong>International Services:</strong> Full payment before repatriation commencement</li>
                  <li><strong>Late Payment:</strong> 2% monthly interest on overdue amounts after 30 days</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Financial Hardship</h3>
                <p className="text-md mb-3 leading-relaxed text-gray-300">
                  We understand that funeral expenses can create financial burden. We offer payment plans, community assistance coordination, and will work with families to ensure dignified services regardless of financial circumstances, in accordance with Islamic principles of community support.
                </p>
              </div>
            </div>
          </div>
          {/* Client Responsibilities */}
          <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-green-400">4. Client Responsibilities and Obligations</h2>
            <div className="space-y-4">
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Information and Documentation</h3>
                <ul className="ml-4 list-inside list-disc space-y-1 text-gray-300">
                  <li>Provide accurate information about the deceased and family circumstances</li>
                  <li>Submit required legal documents (death certificate, ID proofs, permits)</li>
                  <li>Inform us of any special religious or cultural requirements</li>
                  <li>Notify us immediately of any changes to arrangements</li>
                  <li>Provide emergency contact information for all key family members</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Decision Making and Authorization</h3>
                <ul className="ml-4 list-inside list-disc space-y-1 text-gray-300">
                  <li>Designate authorized decision-makers for service arrangements</li>
                  <li>Provide clear instructions for any special requests or modifications</li>
                  <li>Ensure family consensus on major decisions to avoid conflicts</li>
                  <li>Authorize necessary medical procedures or legal requirements</li>
                  <li>Respect Islamic principles in all decision-making processes</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Cooperation and Communication</h3>
                <ul className="ml-4 list-inside list-disc space-y-1 text-gray-300">
                  <li>Maintain respectful communication with our staff and service providers</li>
                  <li>Cooperate with scheduling and logistical arrangements</li>
                  <li>Provide necessary access to homes, hospitals, or other locations</li>
                  <li>Follow guidance regarding Islamic burial procedures and timing</li>
                  <li>Respect the dignity and privacy of other families we serve</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Cancellation and Modification */}
          <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-green-400">5. Cancellation and Modification Policy</h2>
            <div className="space-y-4">
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Service Modifications</h3>
                <ul className="ml-4 list-inside list-disc space-y-1 text-gray-300">
                  <li>Changes to services must be requested as early as possible</li>
                  <li>Major modifications may incur additional charges</li>
                  <li>We will accommodate reasonable changes within Islamic guidelines</li>
                  <li>Written confirmation required for significant service alterations</li>
                  <li>Emergency changes will be handled with flexibility and understanding</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Cancellation Terms</h3>
                <div className="rounded-lg bg-gray-700 p-4">
                  <ul className="ml-4 list-inside list-disc space-y-1 text-gray-300">
                    <li><strong>Before Service Commencement:</strong> Full refund minus administrative costs</li>
                    <li><strong>After Preparation Begins:</strong> Charges for completed services apply</li>
                    <li><strong>Emergency Cancellations:</strong> Evaluated case-by-case with compassion</li>
                    <li><strong>Legal Delays:</strong> Services held without penalty until resolution</li>
                    <li><strong>Family Disputes:</strong> Services suspended until authorized resolution</li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Force Majeure Events</h3>
                <p className="text-md mb-3 leading-relaxed text-gray-300">
                  In case of natural disasters, government restrictions, civil unrest, or other unforeseeable circumstances, we will work with families to reschedule or modify services. No penalties will be applied for cancellations due to force majeure events.
                </p>
              </div>
            </div>
          </div>
          {/* Liability and Insurance */}
          <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-green-400">6. Liability and Insurance Coverage</h2>
            <div className="space-y-4">
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Our Liability Coverage</h3>
                <ul className="ml-4 list-inside list-disc space-y-1 text-gray-300">
                  <li><strong>Professional Liability:</strong> Comprehensive insurance for service delivery</li>
                  <li><strong>Transportation Coverage:</strong> Full insurance during body transportation</li>
                  <li><strong>Property Damage:</strong> Coverage for any accidental damage during services</li>
                  <li><strong>Staff Liability:</strong> Insurance coverage for all staff members</li>
                  <li><strong>Equipment Coverage:</strong> Insurance for all funeral equipment and vehicles</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Limitation of Liability</h3>
                <div className="rounded-lg bg-gray-700 p-4">
                  <p className="text-md mb-3 leading-relaxed text-gray-300">
                    While we maintain comprehensive insurance and exercise utmost care, our liability is limited to the value of services contracted. We are not liable for:
                  </p>
                  <ul className="ml-4 list-inside list-disc space-y-1 text-gray-300">
                    <li>Delays caused by legal, medical, or government requirements</li>
                    <li>Damages resulting from inaccurate information provided by clients</li>
                    <li>Emotional distress beyond direct service-related issues</li>
                    <li>Consequential damages not directly related to our services</li>
                    <li>Acts of God, natural disasters, or civil unrest</li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Claim Procedures</h3>
                <p className="text-md mb-3 leading-relaxed text-gray-300">
                  Any claims must be reported within 30 days of service completion. We maintain a dedicated claims officer and guarantee thorough investigation of all concerns. Islamic principles of justice and fairness guide our claim resolution process.
                </p>
              </div>
            </div>
          </div>
          {/* Intellectual Property */}
          <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-green-400">7. Intellectual Property and Confidentiality</h2>
            <div className="space-y-4">
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Proprietary Content</h3>
                <ul className="ml-4 list-inside list-disc space-y-1 text-gray-300">
                  <li>All marketing materials, website content, and service procedures are proprietary</li>
                  <li>Client testimonials and case studies require explicit written consent</li>
                  <li>Photography and videography only with family permission</li>
                  <li>Service methodologies and Islamic preparation techniques are proprietary</li>
                  <li>Reproduction of our materials requires prior written authorization</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Confidentiality Commitment</h3>
                <p className="text-md mb-3 leading-relaxed text-gray-300">
                  We maintain strict confidentiality regarding all client information, family circumstances, and service details. This confidentiality extends beyond the completion of services and is considered a sacred trust (Amanah) in Islamic terms.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Photography and Documentation</h3>
                <ul className="ml-4 list-inside list-disc space-y-1 text-gray-300">
                  <li>Service documentation for legal purposes only</li>
                  <li>No photography of the deceased without explicit family consent</li>
                  <li>Ceremony photography only with written permission</li>
                  <li>Family privacy respected at all times</li>
                  <li>Digital records maintained with strict security protocols</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Dispute Resolution */}
          <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-green-400">8. Dispute Resolution and Governing Law</h2>
            <div className="space-y-4">
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Islamic Mediation First</h3>
                <p className="text-md mb-3 leading-relaxed text-gray-300">
                  In keeping with Islamic principles, we encourage resolution of disputes through mediation and mutual understanding. We maintain relationships with respected Islamic scholars and community leaders who can assist in mediation when needed.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Complaint Resolution Process</h3>
                <ul className="ml-4 list-inside list-disc space-y-1 text-gray-300">
                  <li><strong>Immediate Response:</strong> All complaints acknowledged within 24 hours</li>
                  <li><strong>Investigation:</strong> Thorough review of all circumstances</li>
                  <li><strong>Family Meeting:</strong> Face-to-face discussion when appropriate</li>
                  <li><strong>Islamic Counseling:</strong> Spiritual guidance available if requested</li>
                  <li><strong>Resolution:</strong> Fair and just resolution within Islamic principles</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Legal Jurisdiction</h3>
                <div className="rounded-lg bg-gray-700 p-4">
                  <p className="text-md mb-3 leading-relaxed text-gray-300">
                    These Terms are governed by the laws of India and the state of Telangana. Any legal proceedings will be conducted in the courts of Hyderabad, Telangana. We respect both Indian civil law and Islamic principles in all legal matters.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Website and Digital Services */}
          <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-green-400">9. Website and Digital Services</h2>
            <div className="space-y-4">
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Website Usage Terms</h3>
                <ul className="ml-4 list-inside list-disc space-y-1 text-gray-300">
                  <li>Website access is provided free of charge for informational purposes</li>
                  <li>Content may not be reproduced without written permission</li>
                  <li>Users must not attempt to damage or disrupt website functionality</li>
                  <li>Personal information submitted through forms is protected per our Privacy Policy</li>
                  <li>Website availability may be limited during maintenance or technical issues</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Online Service Requests</h3>
                <ul className="ml-4 list-inside list-disc space-y-1 text-gray-300">
                  <li>Online requests are initial inquiries requiring phone confirmation</li>
                  <li>Service agreements must be signed in person or through authorized representatives</li>
                  <li>Digital communications are maintained as service records</li>
                  <li>WhatsApp and email communications are considered part of service delivery</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Data Security</h3>
                <p className="text-md mb-3 leading-relaxed text-gray-300">
                  All digital communications and data storage employ industry-standard security measures. Client information is protected through encryption and secure protocols, maintaining the highest standards of digital privacy and security.
                </p>
              </div>
            </div>
          </div>
          {/* Islamic Principles and Ethics */}
          <div className="rounded-lg border border-green-700 bg-green-900/20 p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-green-400">10. Islamic Principles and Ethical Guidelines</h2>
            <div className="space-y-4">
              <p className="text-md mb-4 leading-relaxed text-gray-200">
                All our services and business practices are guided by Islamic principles:
              </p>
              <ul className="ml-4 list-inside list-disc space-y-2 text-gray-300">
                <li><strong>Amanah (Trust):</strong> Treating every service as a sacred trust</li>
                <li><strong>Ihsan (Excellence):</strong> Providing the highest quality of service</li>
                <li><strong>Adl (Justice):</strong> Fair dealing in all transactions and pricing</li>
                <li><strong>Rahma (Compassion):</strong> Understanding and empathy during difficult times</li>
                <li><strong>Haya (Modesty):</strong> Maintaining dignity and respect in all interactions</li>
                <li><strong>Tawakkul (Trust in Allah):</strong> Acknowledging divine will while providing excellent service</li>
              </ul>
            </div>
          </div>
          {/* Amendments and Updates */}
          <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-green-400">11. Amendments and Updates</h2>
            <div className="space-y-4">
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Terms Modification</h3>
                <p className="text-md mb-3 leading-relaxed text-gray-300">
                  We may update these Terms and Conditions to reflect changes in our services, legal requirements, or industry standards. All modifications will maintain or enhance client protections and continue to align with Islamic principles.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Notification Process</h3>
                <ul className="ml-4 list-inside list-disc space-y-1 text-gray-300">
                  <li>Significant changes will be communicated via email, SMS, and website notices</li>
                  <li>30-day advance notice for major policy changes</li>
                  <li>Existing service contracts remain under original terms unless mutually agreed</li>
                  <li>Clients may request clarification of any changes</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Continued Service Agreement</h3>
                <p className="text-md mb-3 leading-relaxed text-gray-300">
                  Continued use of our services after modification notification constitutes acceptance of updated terms. Clients who disagree with changes may terminate services with reasonable notice.
                </p>
              </div>
            </div>
          </div>
          {/* Contact Information */}
          <div className="rounded-lg border border-green-700 bg-green-900/30 p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-green-400">12. Contact Information</h2>
            <div className="space-y-4">
              <p className="text-md leading-relaxed text-gray-200">
                For questions about these Terms and Conditions, service agreements, or any concerns:
              </p>
              <div className="grid gap-4 text-gray-200 md:grid-cols-2">
                <div>
                  <h4 className="mb-2 font-semibold text-white">Legal and Compliance Officer:</h4>
                  <p className="font-medium text-green-400">Advocate Mohammed Sharif</p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-white">Email:</h4>
                  <p className="font-medium text-green-400">legal@thelastcompanion.com</p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-white">Business Office:</h4>
                  <p className="font-medium text-green-400">+91-XXXX-XXXXXX</p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-white">Service Hotline:</h4>
                  <p className="font-medium text-green-400">+91-XXXX-XXXXXX</p>
                </div>
              </div>
              <div className="mt-6 rounded-lg bg-gray-700 p-4">
                <p className="text-sm text-gray-300">
                  <strong>Response Commitment:</strong> All inquiries regarding Terms and Conditions will be responded to within 24 hours during business hours, and within 2 hours for urgent service-related matters.
                </p>
              </div>
              <div className="mt-4 rounded-lg bg-gray-700 p-4">
                <p className="text-sm italic text-gray-300">
                  "These terms reflect our commitment to serving families with integrity, compassion, and excellence, honoring both our Islamic values and our professional responsibilities during your time of need."
                </p>
              </div>
            </div>
          </div>
          {/* Effective Date */}
          <div className="mt-8 rounded-lg bg-gray-800 p-4 text-center text-sm text-gray-400">
            <p><strong>Effective Date:</strong> January 15, 2025</p>
            <p><strong>Last Updated:</strong> January 15, 2025</p>
            <p><strong>Version:</strong> 2.0</p>
            <p><strong>Supersedes:</strong> All previous versions</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TermsAndConditions;
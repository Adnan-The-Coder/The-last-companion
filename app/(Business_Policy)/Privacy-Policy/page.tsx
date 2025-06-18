// privacy-policy/page.tsx

"use client";
import { motion } from 'framer-motion';
import { NextPage } from 'next';

const PrivacyPolicy: NextPage = () => {
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
            Privacy Policy
          </motion.h1>
          <motion.p
            className="mb-6 text-lg text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We understand the sensitive nature of funeral services and are committed to protecting your privacy and personal information with the utmost care and respect during difficult times.
          </motion.p>
        </div>
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Important Privacy Notice */}
          <div className="rounded-lg border border-green-700 bg-green-900/30 p-6 shadow-lg">
            <h2 className="mb-4 flex items-center text-2xl font-semibold text-green-400">
              <span className="mr-2">🔒</span>
              Confidentiality Commitment
            </h2>
            <p className="text-md mb-4 leading-relaxed text-gray-200">
              The Last Companion understands that funeral arrangements involve highly sensitive and personal information. We are committed to maintaining the highest standards of confidentiality and privacy protection in accordance with Islamic principles of dignity and respect for the deceased and their families.
            </p>
          </div>
          {/* Information We Collect */}
          <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-green-400">1. Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Personal Information of the Deceased</h3>
                <ul className="ml-4 list-inside list-disc space-y-1 text-gray-300">
                  <li>Full name, date of birth, and date of death</li>
                  <li>Religious affiliation and specific Islamic burial requirements</li>
                  <li>Medical information relevant to preparation procedures</li>
                  <li>Identity documents and legal certificates</li>
                  <li>Preferred burial location and cemetery arrangements</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Family and Contact Information</h3>
                <ul className="ml-4 list-inside list-disc space-y-1 text-gray-300">
                  <li>Names and contact details of immediate family members</li>
                  <li>Next of kin and authorized decision-makers</li>
                  <li>Emergency contact information</li>
                  <li>Relationship to the deceased</li>
                  <li>Communication preferences (phone, email, WhatsApp)</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Service-Related Information</h3>
                <ul className="ml-4 list-inside list-disc space-y-1 text-gray-300">
                  <li>Funeral service preferences and Islamic ritual requirements</li>
                  <li>Imam and mosque preferences for Janazah prayers</li>
                  <li>Transportation and logistics requirements</li>
                  <li>Payment information and financial arrangements</li>
                  <li>Insurance details and beneficiary information</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Digital Information</h3>
                <ul className="ml-4 list-inside list-disc space-y-1 text-gray-300">
                  <li>Website usage data and browsing behavior</li>
                  <li>Device information and IP addresses</li>
                  <li>Cookies and tracking technologies</li>
                  <li>Communication logs and service requests</li>
                </ul>
              </div>
            </div>
          </div>
          {/* How We Use Information */}
          <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-green-400">2. How We Use Your Information</h2>
            <div className="space-y-4">
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Funeral Service Delivery</h3>
                <ul className="ml-4 list-inside list-disc space-y-1 text-gray-300">
                  <li>Coordinating Islamic burial preparations (Ghusl, Kafan)</li>
                  <li>Arranging Janazah prayer ceremonies and religious services</li>
                  <li>Managing transportation and cemetery arrangements</li>
                  <li>Facilitating communication with Islamic religious authorities</li>
                  <li>Processing legal documentation and permits</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Family Support Services</h3>
                <ul className="ml-4 list-inside list-disc space-y-1 text-gray-300">
                  <li>Providing 24/7 emergency support and guidance</li>
                  <li>Offering grief counseling and bereavement support</li>
                  <li>Connecting families with Islamic spiritual counselors</li>
                  <li>Assisting with post-funeral administrative tasks</li>
                  <li>Following up on family needs and satisfaction</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Legal and Administrative Purposes</h3>
                <ul className="ml-4 list-inside list-disc space-y-1 text-gray-300">
                  <li>Complying with local and national legal requirements</li>
                  <li>Processing insurance claims and financial transactions</li>
                  <li>Maintaining records for regulatory compliance</li>
                  <li>Responding to government and legal inquiries</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Information Sharing and Disclosure */}
          <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-green-400">3. Information Sharing and Disclosure</h2>
            <div className="space-y-4">
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Authorized Sharing</h3>
                <p className="text-md mb-3 leading-relaxed text-gray-300">
                  We only share your information with your explicit consent or when necessary for service delivery:
                </p>
                <ul className="ml-4 list-inside list-disc space-y-1 text-gray-300">
                  <li><strong>Islamic Religious Authorities:</strong> Imams, mosque officials for prayer arrangements</li>
                  <li><strong>Medical Professionals:</strong> For death certificates and health-related preparations</li>
                  <li><strong>Cemetery Officials:</strong> For burial plot arrangements and Islamic burial requirements</li>
                  <li><strong>Transportation Services:</strong> Trusted partners for dignified transportation</li>
                  <li><strong>Government Agencies:</strong> For legal documentation and permits</li>
                  <li><strong>Insurance Companies:</strong> For claims processing when authorized</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Strict Confidentiality Standards</h3>
                <p className="text-md mb-3 leading-relaxed text-gray-300">
                  All third parties who receive information are bound by strict confidentiality agreements and Islamic ethical guidelines. We never sell, rent, or trade your personal information for commercial purposes.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Legal Disclosures</h3>
                <p className="text-md mb-3 leading-relaxed text-gray-300">
                  We may disclose information when required by law, court order, or to protect the rights and safety of individuals, while always respecting Islamic principles of privacy and dignity.
                </p>
              </div>
            </div>
          </div>
          {/* Data Security */}
          <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-green-400">4. Data Security and Protection</h2>
            <div className="space-y-4">
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Physical Security Measures</h3>
                <ul className="ml-4 list-inside list-disc space-y-1 text-gray-300">
                  <li>Secure storage facilities with restricted access</li>
                  <li>Locked filing systems for physical documents</li>
                  <li>Security cameras and alarm systems</li>
                  <li>Background-checked staff with confidentiality training</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Digital Security Measures</h3>
                <ul className="ml-4 list-inside list-disc space-y-1 text-gray-300">
                  <li>SSL encryption for all data transmission</li>
                  <li>Secure database hosting with regular backups</li>
                  <li>Multi-factor authentication for staff access</li>
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>Encrypted storage for sensitive personal information</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Staff Training and Ethics</h3>
                <p className="text-md mb-3 leading-relaxed text-gray-300">
                  All staff members receive comprehensive training on Islamic ethics, privacy protection, and confidentiality requirements. They sign strict confidentiality agreements and undergo regular refresher training.
                </p>
              </div>
            </div>
          </div>
          {/* Your Rights and Choices */}
          <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-green-400">5. Your Rights and Choices</h2>
            <div className="space-y-4">
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Access and Correction Rights</h3>
                <ul className="ml-4 list-inside list-disc space-y-1 text-gray-300">
                  <li>Request access to personal information we hold about you or your loved one</li>
                  <li>Correct any inaccurate or incomplete information</li>
                  <li>Request updates to contact preferences and communication methods</li>
                  <li>Review service records and documentation</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Consent and Opt-Out Options</h3>
                <ul className="ml-4 list-inside list-disc space-y-1 text-gray-300">
                  <li>Withdraw consent for non-essential communications</li>
                  <li>Opt out of follow-up surveys and feedback requests</li>
                  <li>Request restrictions on information sharing</li>
                  <li>Choose preferred communication channels and frequency</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Data Retention Choices</h3>
                <p className="text-md mb-3 leading-relaxed text-gray-300">
                  You can request information about how long we retain your data and request deletion of non-essential information, while understanding that some records must be maintained for legal and Islamic documentation purposes.
                </p>
              </div>
            </div>
          </div>
          {/* Data Retention */}
          <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-green-400">6. Data Retention Policy</h2>
            <div className="space-y-4">
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Essential Records (Permanent Retention)</h3>
                <ul className="ml-4 list-inside list-disc space-y-1 text-gray-300">
                  <li>Death certificates and legal documentation</li>
                  <li>Islamic burial records and cemetery documentation</li>
                  <li>Religious ceremony records (Janazah prayers)</li>
                  <li>Financial transaction records for legal compliance</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Service Records (7-10 Years)</h3>
                <ul className="ml-4 list-inside list-disc space-y-1 text-gray-300">
                  <li>Service agreements and contracts</li>
                  <li>Communication logs and service delivery records</li>
                  <li>Payment and insurance information</li>
                  <li>Family contact information and preferences</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Marketing and Communication Data (2-3 Years)</h3>
                <ul className="ml-4 list-inside list-disc space-y-1 text-gray-300">
                  <li>Website usage data and analytics</li>
                  <li>Non-essential communication preferences</li>
                  <li>Feedback and survey responses</li>
                  <li>Marketing consent records</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Islamic Privacy Principles */}
          <div className="rounded-lg border border-green-700 bg-green-900/20 p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-green-400">7. Islamic Privacy Principles</h2>
            <div className="space-y-4">
              <p className="text-md mb-4 leading-relaxed text-gray-200">
                Our privacy practices are guided by Islamic principles of dignity, respect, and confidentiality:
              </p>
              <ul className="ml-4 list-inside list-disc space-y-2 text-gray-300">
                <li><strong>Satr (Concealment):</strong> Protecting the dignity and privacy of the deceased and their families</li>
                <li><strong>Amanah (Trust):</strong> Treating all information as a sacred trust requiring utmost care</li>
                <li><strong>Hifz al-Ird (Protection of Honor):</strong> Safeguarding the reputation and honor of families</li>
                <li><strong>Ihsan (Excellence):</strong> Exceeding expectations in privacy protection and service delivery</li>
                <li><strong>Adl (Justice):</strong> Fair and transparent handling of all personal information</li>
              </ul>
            </div>
          </div>
          {/* International Data Transfers */}
          <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-green-400">8. International Data Transfers</h2>
            <p className="text-md mb-4 leading-relaxed text-gray-300">
              Your personal information is primarily stored and processed within India. In rare cases where international transfers are necessary (such as for families repatriating remains to other countries), we ensure adequate protection through appropriate safeguards and obtain explicit consent for such transfers.
            </p>
            <p className="text-md mb-4 leading-relaxed text-gray-300">
              We work with Islamic funeral service providers globally to ensure continuity of Islamic burial traditions while maintaining the same high standards of privacy protection.
            </p>
          </div>
          {/* Children's Privacy */}
          <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-green-400">9. Children's Privacy</h2>
            <p className="text-md mb-4 leading-relaxed text-gray-300">
              We take special care when handling information related to deceased minors or when minors are involved in funeral arrangements. Additional consent requirements and protective measures apply, and we work closely with legal guardians to ensure appropriate handling of sensitive situations involving children.
            </p>
          </div>
          {/* Changes to Privacy Policy */}
          <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-green-400">10. Changes to This Privacy Policy</h2>
            <p className="text-md mb-4 leading-relaxed text-gray-300">
              We may update this Privacy Policy to reflect changes in our practices, technology, or legal requirements. Any significant changes will be communicated to existing clients through direct notification. We encourage families to review this policy periodically to stay informed about how we protect their information.
            </p>
            <p className="text-md mb-4 leading-relaxed text-gray-300">
              Changes will always maintain or enhance privacy protections and will continue to align with Islamic principles of confidentiality and dignity.
            </p>
          </div>
          {/* Contact Information */}
          <div className="rounded-lg border border-green-700 bg-green-900/30 p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-green-400">11. Contact Us</h2>
            <div className="space-y-4">
              <p className="text-md leading-relaxed text-gray-200">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="grid gap-4 text-gray-200 md:grid-cols-2">
                <div>
                  <h4 className="mb-2 font-semibold text-white">Privacy Officer:</h4>
                  <p className="font-medium text-green-400">Ismail</p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-white">Email:</h4>
                  <p className="font-medium text-green-400">privacy@thelastcompanion.com</p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-white">24/7 Privacy Hotline:</h4>
                  <p className="font-medium text-green-400">+91-XXXX-XXXXXX</p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-white">WhatsApp Support:</h4>
                  <p className="font-medium text-green-400">+91-XXXX-XXXXXX</p>
                </div>
              </div>
              <div className="mt-6 rounded-lg bg-gray-700 p-4">
                <p className="text-sm text-gray-300">
                  <strong>Response Commitment:</strong> We will respond to all privacy-related inquiries within 24 hours during regular business hours, and within 2 hours for urgent matters during funeral service delivery.
                </p>
              </div>
              <div className="mt-4 rounded-lg bg-gray-700 p-4">
                <p className="text-sm italic text-gray-300">
                  "Your trust in us during life's most difficult moments is sacred. We honor this trust by protecting your privacy with the same care and respect we provide to your loved ones."
                </p>
              </div>
            </div>
          </div>
          {/* Effective Date */}
          <div className="mt-8 rounded-lg bg-gray-800 p-4 text-center text-sm text-gray-400">
            <p><strong>Effective Date:</strong> January 15, 2025</p>
            <p><strong>Last Updated:</strong> January 15, 2025</p>
            <p><strong>Version:</strong> 2.0</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;
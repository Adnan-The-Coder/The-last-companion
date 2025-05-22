import Link from 'next/link';

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative text-white py-16">
        <div className="absolute inset-0 bg-[url('/images/services-bg.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#2D3142]/95 to-[#4F5D75]/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center" style={{opacity: 1, transform: 'translateY(0)', transition: 'opacity 0.8s ease, transform 0.8s ease'}}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">Our Islamic <span className="text-[#EF8354]">Funeral Services</span></h1>
            <p className="text-xl mb-8 text-[#BFC0C0]">Providing complete Islamic funeral and burial services with respect to Islamic traditions and practices.</p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <div className="bg-[#2D3142]/5 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group" style={{opacity: 1, transform: 'translateY(0)', transition: 'opacity 0.5s ease, transform 0.5s ease'}}>
              <div className="h-48 bg-[#2D3142] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#2D3142]/0 to-[#2D3142]/90 z-10"></div>
                <div className="absolute bottom-4 left-4 z-20">
                  <div className="w-12 h-12 rounded-full bg-[#EF8354]/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-6 text-[#EF8354]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#2D3142] mb-3 font-serif group-hover:text-[#EF8354] transition-colors duration-300">Janazah Preparation</h3>
                <p className="text-[#4F5D75] mb-4">We provide complete Janazah preparation services in accordance with Islamic traditions, including:</p>
                <ul className="list-disc pl-5 mb-4 text-[#4F5D75] space-y-1">
                  <li>Ghusl (ritual washing) performed by trained professionals of the same gender</li>
                  <li>Kafan (shrouding) with high-quality white cloth</li>
                  <li>Preparation for Salat al-Janazah (funeral prayer)</li>
                  <li>Respectful handling throughout the entire process</li>
                </ul>
                <Link href="/services/janazah-preparation" className="text-[#EF8354] font-medium hover:text-[#D64C1B] transition-colors duration-300 inline-flex items-center group">
                  <span>Learn More</span>
                  <span className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-[#2D3142]/5 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group" style={{opacity: 1, transform: 'translateY(0)', transition: 'opacity 0.6s ease, transform 0.6s ease'}}>
              <div className="h-48 bg-[#2D3142] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#2D3142]/0 to-[#2D3142]/90 z-10"></div>
                <div className="absolute bottom-4 left-4 z-20">
                  <div className="w-12 h-12 rounded-full bg-[#EF8354]/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-6 text-[#EF8354]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#2D3142] mb-3 font-serif group-hover:text-[#EF8354] transition-colors duration-300">Janazah Prayer</h3>
                <p className="text-[#4F5D75] mb-4">We coordinate and arrange for Salat al-Janazah (funeral prayer) services, including:</p>
                <ul className="list-disc pl-5 mb-4 text-[#4F5D75] space-y-1">
                  <li>Coordination with local masjid or prayer space</li>
                  <li>Arrangement with local Imam to lead the prayer</li>
                  <li>Transportation to and from prayer location</li>
                  <li>Guidance for family and community members</li>
                </ul>
                <Link href="/services/janazah-prayer" className="text-[#EF8354] font-medium hover:text-[#D64C1B] transition-colors duration-300 inline-flex items-center group">
                  <span>Learn More</span>
                  <span className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-blue-800"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-900 mb-3 font-serif">Burial Services</h3>
                <p className="text-gray-600 mb-4">We provide complete Islamic burial services in accordance with Islamic law, including:</p>
                <ul className="list-disc pl-5 mb-4 text-gray-600 space-y-1">
                  <li>Coordination with Islamic cemeteries</li>
                  <li>Grave preparation according to Islamic requirements</li>
                  <li>Transportation to cemetery</li>
                  <li>Guidance for family during burial process</li>
                  <li>Post-burial support and guidance</li>
                </ul>
                <Link href="/services/burial" className="text-blue-700 font-medium hover:text-blue-900">Learn More →</Link>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-blue-800"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-900 mb-3 font-serif">Transportation Services</h3>
                <p className="text-gray-600 mb-4">We provide respectful transportation services for the deceased, including:</p>
                <ul className="list-disc pl-5 mb-4 text-gray-600 space-y-1">
                  <li>Transportation from place of death to washing facility</li>
                  <li>Transportation to prayer location</li>
                  <li>Transportation to cemetery</li>
                  <li>Long-distance transportation when needed</li>
                  <li>International repatriation services</li>
                </ul>
                <Link href="/services/transportation" className="text-blue-700 font-medium hover:text-blue-900">Learn More →</Link>
              </div>
            </div>

            {/* Service 5 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-blue-800"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-900 mb-3 font-serif">Prayer Hall</h3>
                <p className="text-gray-600 mb-4">We offer a dedicated prayer hall for Janazah prayers and gatherings, featuring:</p>
                <ul className="list-disc pl-5 mb-4 text-gray-600 space-y-1">
                  <li>Spacious and clean prayer area</li>
                  <li>Separate sections for men and women</li>
                  <li>Wudu (ablution) facilities</li>
                  <li>Comfortable seating for elderly and those with special needs</li>
                  <li>Available 24/7 for emergency needs</li>
                </ul>
                <Link href="/services/prayer-hall" className="text-blue-700 font-medium hover:text-blue-900">Learn More →</Link>
              </div>
            </div>

            {/* Service 6 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-blue-800"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-900 mb-3 font-serif">Pre-Planning Services</h3>
                <p className="text-gray-600 mb-4">We offer pre-planning services to help families prepare in advance, including:</p>
                <ul className="list-disc pl-5 mb-4 text-gray-600 space-y-1">
                  <li>Consultation on Islamic funeral requirements</li>
                  <li>Cemetery plot selection and purchase</li>
                  <li>Documentation preparation</li>
                  <li>Financial planning for funeral expenses</li>
                  <li>Recording of personal wishes for funeral arrangements</li>
                </ul>
                <Link href="/services/pre-planning" className="text-blue-700 font-medium hover:text-blue-900">Learn More →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#2D3142] text-white">
        <div className="container mx-auto px-4 text-center" style={{opacity: 1, transform: 'translateY(0)', transition: 'opacity 0.8s ease, transform 0.8s ease'}}>
          <h2 className="text-3xl font-bold mb-6 font-serif">Need Assistance with Funeral Services?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-[#BFC0C0]">Our team is available 24/7 to provide support and guidance during your time of need.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+1234567890" className="group relative overflow-hidden bg-[#EF8354] hover:bg-[#D64C1B] text-white px-6 py-3 rounded-md font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1 inline-block">
              <span className="relative z-10">Call Now: +1-234-567-8900</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#D64C1B] to-[#EF8354] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </a>
            <Link href="/contact" className="relative overflow-hidden border border-[#4F5D75] hover:border-[#EF8354] text-white px-6 py-3 rounded-md font-medium transition-all duration-300 hover:shadow-md inline-block group">
              <span className="relative z-10">Contact Us</span>
              <span className="absolute inset-0 bg-[#4F5D75]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

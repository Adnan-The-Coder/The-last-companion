import Link from 'next/link';

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 text-white">
        <div className="absolute inset-0 bg-[url('/images/services-bg.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#2D3142]/95 to-[#4F5D75]/80"></div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center" style={{opacity: 1, transform: 'translateY(0)', transition: 'opacity 0.8s ease, transform 0.8s ease'}}>
            <h1 className="mb-6 font-serif text-4xl font-bold md:text-5xl">Our Islamic <span className="text-[#EF8354]">Funeral Services</span></h1>
            <p className="mb-8 text-xl text-[#BFC0C0]">Providing complete Islamic funeral and burial services with respect to Islamic traditions and practices.</p>
          </div>
        </div>
      </section>
      {/* Services List */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Service 1 */}
            <div className="group overflow-hidden rounded-lg bg-[#2D3142]/5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" style={{opacity: 1, transform: 'translateY(0)', transition: 'opacity 0.5s ease, transform 0.5s ease'}}>
              <div className="relative h-48 overflow-hidden bg-[#2D3142]">
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#2D3142]/0 to-[#2D3142]/90"></div>
                <div className="absolute bottom-4 left-4 z-20">
                  <div className="flex size-12 items-center justify-center rounded-full bg-[#EF8354]/20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-6 text-[#EF8354]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-3 font-serif text-2xl font-bold text-[#2D3142] transition-colors duration-300 group-hover:text-[#EF8354]">Janazah Preparation</h3>
                <p className="mb-4 text-[#4F5D75]">We provide complete Janazah preparation services in accordance with Islamic traditions, including:</p>
                <ul className="mb-4 list-disc space-y-1 pl-5 text-[#4F5D75]">
                  <li>Ghusl (ritual washing) performed by trained professionals of the same gender</li>
                  <li>Kafan (shrouding) with high-quality white cloth</li>
                  <li>Preparation for Salat al-Janazah (funeral prayer)</li>
                  <li>Respectful handling throughout the entire process</li>
                </ul>
                {/* <Link href="/services/janazah-preparation" className="group inline-flex items-center font-medium text-[#EF8354] transition-colors duration-300 hover:text-[#D64C1B]">
                  <span>Learn More</span>
                  <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link> */}
              </div>
            </div>
            {/* Service 2 */}
            <div className="group overflow-hidden rounded-lg bg-[#2D3142]/5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" style={{opacity: 1, transform: 'translateY(0)', transition: 'opacity 0.6s ease, transform 0.6s ease'}}>
              <div className="relative h-48 overflow-hidden bg-[#2D3142]">
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#2D3142]/0 to-[#2D3142]/90"></div>
                <div className="absolute bottom-4 left-4 z-20">
                  <div className="flex size-12 items-center justify-center rounded-full bg-[#EF8354]/20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-6 text-[#EF8354]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-3 font-serif text-2xl font-bold text-[#2D3142] transition-colors duration-300 group-hover:text-[#EF8354]">Sitting Arrangements</h3>
                <p className="mb-4 text-[#4F5D75]">We provide comfortable arrangements for mourners who come to pay their respects, including:</p>
                <ul className="mb-4 list-disc space-y-1 pl-5 text-[#4F5D75]">
                  <li>Spacious seating arrangements for family and visitors</li>
                  <li>Separate sections for men and women</li>
                  <li>Water and basic refreshments</li>
                  <li>Comfortable facilities for elderly and those with special needs</li>
                  <li>Coordination with local community centers when needed</li>
                </ul>
                {/* <Link href="/services/sitting-arrangements" className="group inline-flex items-center font-medium text-[#EF8354] transition-colors duration-300 hover:text-[#D64C1B]">
                  <span>Learn More</span>
                  <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link> */}
              </div>
            </div>
            {/* Service 3 */}
            <div className="overflow-hidden rounded-lg bg-gray-50 shadow-md">
              <div className="h-48 bg-blue-800"></div>
              <div className="p-6">
                <h3 className="mb-3 font-serif text-2xl font-bold text-blue-900">Burial Services</h3>
                <p className="mb-4 text-gray-600">We provide complete Islamic burial services in accordance with Islamic law, including:</p>
                <ul className="mb-4 list-disc space-y-1 pl-5 text-gray-600">
                  <li>Coordination with Islamic cemeteries</li>
                  <li>Grave preparation according to Islamic requirements</li>
                  <li>Transportation to cemetery</li>
                  <li>Guidance for family during burial process</li>
                  <li>Post-burial support and guidance</li>
                </ul>
                {/* <Link href="/services/burial" className="font-medium text-blue-700 hover:text-blue-900">Learn More →</Link> */}
              </div>
            </div>
            {/* Service 4 */}
            <div className="overflow-hidden rounded-lg bg-gray-50 shadow-md">
              <div className="h-48 bg-blue-800"></div>
              <div className="p-6">
                <h3 className="mb-3 font-serif text-2xl font-bold text-blue-900">Transportation Services</h3>
                <p className="mb-4 text-gray-600">We provide respectful transportation services for the deceased, including:</p>
                <ul className="mb-4 list-disc space-y-1 pl-5 text-gray-600">
                  <li>Transportation from place of death to washing facility</li>
                  <li>Transportation to prayer location</li>
                  <li>Transportation to cemetery</li>
                  <li>Long-distance transportation when needed</li>
                  <li>International repatriation services</li>
                </ul>
                {/* <Link href="/services/transportation" className="font-medium text-blue-700 hover:text-blue-900">Learn More →</Link> */}
              </div>
            </div>
            {/* Service 5 */}
            <div className="group overflow-hidden rounded-lg bg-[#2D3142]/5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" style={{opacity: 1, transform: 'translateY(0)', transition: 'opacity 0.5s ease, transform 0.5s ease'}}>
              <div className="relative h-48 overflow-hidden bg-[#2D3142]">
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#2D3142]/0 to-[#2D3142]/90"></div>
                <div className="absolute bottom-4 left-4 z-20">
                  <div className="flex size-12 items-center justify-center rounded-full bg-[#EF8354]/20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-6 text-[#EF8354]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-3 font-serif text-2xl font-bold text-[#2D3142] transition-colors duration-300 group-hover:text-[#EF8354]">Ghusl Service</h3>
                <p className="mb-4 text-[#4F5D75]">We provide complete Islamic ritual washing and shrouding services, including:</p>
                <ul className="mb-4 list-disc space-y-1 pl-5 text-[#4F5D75]">
                  <li>Ritual washing (Ghusl) performed by trained professionals</li>
                  <li>Same-gender washing as per Islamic tradition</li>
                  <li>High-quality kafan (shrouding) materials</li>
                  <li>Respectful and dignified handling throughout the process</li>
                  <li>Available 24/7 for emergency needs</li>
                </ul>
                {/* <Link href="/services/ghusl-service" className="group inline-flex items-center font-medium text-[#EF8354] transition-colors duration-300 hover:text-[#D64C1B]">
                  <span>Learn More</span>
                  <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link> */}
              </div>
            </div>
            {/* Service 6 */}
            <div className="overflow-hidden rounded-lg bg-gray-50 shadow-md">
              <div className="h-48 bg-blue-800"></div>
              <div className="p-6">
                <h3 className="mb-3 font-serif text-2xl font-bold text-blue-900">Pre-Planning Services</h3>
                <p className="mb-4 text-gray-600">We offer pre-planning services to help families prepare in advance, including:</p>
                <ul className="mb-4 list-disc space-y-1 pl-5 text-gray-600">
                  <li>Consultation on Islamic funeral requirements</li>
                  <li>Cemetery plot selection and purchase</li>
                  <li>Documentation preparation</li>
                  <li>Financial planning for funeral expenses</li>
                  <li>Recording of personal wishes for funeral arrangements</li>
                </ul>
                {/* <Link href="/services/pre-planning" className="font-medium text-blue-700 hover:text-blue-900">Learn More →</Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="bg-[#2D3142] py-16 text-white">
        <div className="container mx-auto px-4 text-center" style={{opacity: 1, transform: 'translateY(0)', transition: 'opacity 0.8s ease, transform 0.8s ease'}}>
          <h2 className="mb-6 font-serif text-3xl font-bold">Need Assistance with Funeral Services?</h2>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-[#BFC0C0]">Our team is available 24/7 to provide support and guidance during your time of need.</p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a href="tel:+919618316290" className="group relative inline-block overflow-hidden rounded-md bg-[#EF8354] px-6 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#D64C1B] hover:shadow-lg">
              <span className="relative z-10">Call Now: +91 9618316290</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#D64C1B] to-[#EF8354] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
            </a>
            <Link href="/contact" className="group relative inline-block overflow-hidden rounded-md border border-[#4F5D75] px-6 py-3 font-medium text-white transition-all duration-300 hover:border-[#EF8354] hover:shadow-md">
              <span className="relative z-10">Contact Us</span>
              <span className="absolute inset-0 bg-[#4F5D75]/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

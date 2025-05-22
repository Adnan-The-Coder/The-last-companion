import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 text-white">
        <div className="absolute inset-0 bg-[url('/images/about-bg.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#2D3142]/95 to-[#4F5D75]/80"></div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center" style={{opacity: 1, transform: 'translateY(0)', transition: 'opacity 0.8s ease, transform 0.8s ease'}}>
            <h1 className="mb-6 font-serif text-4xl font-bold md:text-5xl">About <span className="text-[#EF8354]">The Last Companion</span></h1>
            <p className="mb-8 text-xl text-[#BFC0C0]">Providing dignified Islamic funeral services with compassion and respect.</p>
          </div>
        </div>
      </section>
      {/* Our Story */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="group relative h-96 overflow-hidden rounded-lg shadow-lg">
              <div className="absolute inset-0 z-10 bg-[#2D3142]/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <Image 
                src="/images/about-story.jpg" 
                alt="Our story" 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
            </div>
            <div style={{opacity: 1, transform: 'translateY(0)', transition: 'opacity 0.6s ease, transform 0.6s ease'}}>
              <h2 className="relative mb-6 inline-block font-serif text-3xl font-bold text-[#2D3142]">
                Our Story
                <span className="absolute -bottom-2 left-0 h-0.5 w-1/2 rounded-full bg-[#EF8354]/70"></span>
              </h2>
              <div className="space-y-4 text-[#4F5D75]">
                <p>
                  The Last Companion was founded in 2015 by a group of dedicated Muslims who recognized the need for comprehensive Islamic funeral services in our community. Our founders experienced firsthand the challenges families face during times of loss, especially when trying to ensure proper Islamic burial practices.
                </p>
                <p>
                  What began as a small community service has grown into a full-service Islamic funeral provider, dedicated to supporting Muslim families during their most difficult moments. Our commitment to Islamic traditions, compassionate care, and professional service has made us a trusted resource in the community.
                </p>
                <p>
                  Today, we continue to honor our founding principles while expanding our services to meet the evolving needs of the Muslim community. Our team remains dedicated to providing dignified care that respects Islamic traditions and offers comfort to grieving families.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Values */}
      <section className="bg-[#2D3142]/5 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center" style={{opacity: 1, transform: 'translateY(0)', transition: 'opacity 0.7s ease, transform 0.7s ease'}}>
            <h2 className="relative mb-4 inline-block font-serif text-3xl font-bold text-[#2D3142]">
              Our Values
              <span className="absolute inset-x-1/4 -bottom-2 h-0.5 rounded-full bg-[#EF8354]/70"></span>
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-[#4F5D75]">The principles that guide our service to the community.</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Value 1 */}
            <div className="rounded-lg border border-[#BFC0C0]/10 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" style={{opacity: 1, transform: 'translateY(0)', transition: 'opacity 0.5s ease, transform 0.5s ease'}}>
              <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-[#4F5D75]/10">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-8 text-[#EF8354]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="mb-2 text-center text-xl font-bold text-[#2D3142]">Islamic Integrity</h3>
              <p className="text-center text-[#4F5D75]">We adhere strictly to Islamic principles in all our services, ensuring that every aspect of the funeral process follows proper Islamic traditions.</p>
            </div>
            {/* Value 2 */}
            <div className="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
              <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-blue-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-8 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-center text-xl font-bold text-blue-900">Compassionate Care</h3>
              <p className="text-center text-gray-600">We approach every family with empathy and understanding, providing emotional support alongside our professional services.</p>
            </div>
            {/* Value 3 */}
            <div className="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
              <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-blue-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-8 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-center text-xl font-bold text-blue-900">Responsive Service</h3>
              <p className="text-center text-gray-600">We understand the importance of timely arrangements in Islamic tradition, and we're available 24/7 to provide immediate assistance.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Our Team */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center" style={{opacity: 1, transform: 'translateY(0)', transition: 'opacity 0.7s ease, transform 0.7s ease'}}>
            <h2 className="relative mb-4 inline-block font-serif text-3xl font-bold text-[#2D3142]">
              Our Team
              <span className="absolute inset-x-1/4 -bottom-2 h-0.5 rounded-full bg-[#EF8354]/70"></span>
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-[#4F5D75]">Meet the dedicated professionals who provide compassionate care to our community.</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Team Member 1 */}
            <div className="group overflow-hidden rounded-lg bg-[#2D3142]/5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" style={{opacity: 1, transform: 'translateY(0)', transition: 'opacity 0.5s ease, transform 0.5s ease'}}>
              <div className="relative h-64">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#2D3142]/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <Image 
                  src="/images/team-1.jpg" 
                  alt="Ahmed Khan" 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-1 text-xl font-bold text-[#2D3142] transition-colors duration-300 group-hover:text-[#EF8354]">Ahmed Khan</h3>
                <p className="mb-3 font-medium text-[#EF8354]">Founder & Director</p>
                <p className="mb-4 text-[#4F5D75]">With over 15 years of experience in Islamic funeral services, Ahmed founded The Last Companion to ensure dignified Islamic burials for all community members.</p>
              </div>
            </div>
            {/* Team Member 2 */}
            <div className="overflow-hidden rounded-lg bg-gray-50 shadow-md">
              <div className="relative h-64">
                <Image 
                  src="/images/team-2.jpg" 
                  alt="Fatima Rahman" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-1 text-xl font-bold text-blue-900">Fatima Rahman</h3>
                <p className="mb-3 font-medium text-blue-700">Family Services Coordinator</p>
                <p className="mb-4 text-gray-600">Fatima specializes in guiding families through the funeral process with compassion and expertise, ensuring all needs are met with sensitivity.</p>
              </div>
            </div>
            {/* Team Member 3 */}
            <div className="overflow-hidden rounded-lg bg-gray-50 shadow-md">
              <div className="relative h-64">
                <Image 
                  src="/images/team-3.jpg" 
                  alt="Yusuf Ali" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-1 text-xl font-bold text-blue-900">Yusuf Ali</h3>
                <p className="mb-3 font-medium text-blue-700">Islamic Scholar & Advisor</p>
                <p className="mb-4 text-gray-600">Imam Yusuf ensures all our services adhere to Islamic principles and provides spiritual guidance to families during their time of grief.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="bg-[#2D3142] py-16 text-white">
        <div className="container mx-auto px-4 text-center" style={{opacity: 1, transform: 'translateY(0)', transition: 'opacity 0.8s ease, transform 0.8s ease'}}>
          <h2 className="mb-6 font-serif text-3xl font-bold">Have Questions About Our Services?</h2>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-[#BFC0C0]">Our team is available to provide information and support whenever you need us.</p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="group relative inline-block overflow-hidden rounded-md bg-[#EF8354] px-6 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#D64C1B] hover:shadow-lg">
              <span className="relative z-10">Contact Us</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#D64C1B] to-[#EF8354] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
            </Link>
            <Link href="/services" className="group relative inline-block overflow-hidden rounded-md border border-[#4F5D75] px-6 py-3 font-medium text-white transition-all duration-300 hover:border-[#EF8354] hover:shadow-md">
              <span className="relative z-10">Our Services</span>
              <span className="absolute inset-0 bg-[#4F5D75]/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative text-white py-16">
        <div className="absolute inset-0 bg-[url('/images/about-bg.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#2D3142]/95 to-[#4F5D75]/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center" style={{opacity: 1, transform: 'translateY(0)', transition: 'opacity 0.8s ease, transform 0.8s ease'}}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">About <span className="text-[#EF8354]">The Last Companion</span></h1>
            <p className="text-xl mb-8 text-[#BFC0C0]">Providing dignified Islamic funeral services with compassion and respect.</p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg group">
              <div className="absolute inset-0 bg-[#2D3142]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              <Image 
                src="/images/about-story.jpg" 
                alt="Our story" 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
            </div>
            <div style={{opacity: 1, transform: 'translateY(0)', transition: 'opacity 0.6s ease, transform 0.6s ease'}}>
              <h2 className="text-3xl font-bold text-[#2D3142] mb-6 font-serif relative inline-block">
                Our Story
                <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-[#EF8354]/70 rounded-full"></span>
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
      <section className="py-16 bg-[#2D3142]/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" style={{opacity: 1, transform: 'translateY(0)', transition: 'opacity 0.7s ease, transform 0.7s ease'}}>
            <h2 className="text-3xl font-bold text-[#2D3142] mb-4 font-serif relative inline-block">
              Our Values
              <span className="absolute -bottom-2 left-1/4 right-1/4 h-0.5 bg-[#EF8354]/70 rounded-full"></span>
            </h2>
            <p className="text-[#4F5D75] max-w-3xl mx-auto mt-6">The principles that guide our service to the community.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-[#BFC0C0]/10" style={{opacity: 1, transform: 'translateY(0)', transition: 'opacity 0.5s ease, transform 0.5s ease'}}>
              <div className="bg-[#4F5D75]/10 size-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-8 text-[#EF8354]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-2 text-[#2D3142]">Islamic Integrity</h3>
              <p className="text-[#4F5D75] text-center">We adhere strictly to Islamic principles in all our services, ensuring that every aspect of the funeral process follows proper Islamic traditions.</p>
            </div>
            
            {/* Value 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 size-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-8 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-2 text-blue-900">Compassionate Care</h3>
              <p className="text-gray-600 text-center">We approach every family with empathy and understanding, providing emotional support alongside our professional services.</p>
            </div>
            
            {/* Value 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 size-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-8 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-2 text-blue-900">Responsive Service</h3>
              <p className="text-gray-600 text-center">We understand the importance of timely arrangements in Islamic tradition, and we're available 24/7 to provide immediate assistance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" style={{opacity: 1, transform: 'translateY(0)', transition: 'opacity 0.7s ease, transform 0.7s ease'}}>
            <h2 className="text-3xl font-bold text-[#2D3142] mb-4 font-serif relative inline-block">
              Our Team
              <span className="absolute -bottom-2 left-1/4 right-1/4 h-0.5 bg-[#EF8354]/70 rounded-full"></span>
            </h2>
            <p className="text-[#4F5D75] max-w-3xl mx-auto mt-6">Meet the dedicated professionals who provide compassionate care to our community.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-[#2D3142]/5 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group" style={{opacity: 1, transform: 'translateY(0)', transition: 'opacity 0.5s ease, transform 0.5s ease'}}>
              <div className="h-64 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D3142]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <Image 
                  src="/images/team-1.jpg" 
                  alt="Ahmed Khan" 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#2D3142] mb-1 group-hover:text-[#EF8354] transition-colors duration-300">Ahmed Khan</h3>
                <p className="text-[#EF8354] font-medium mb-3">Founder & Director</p>
                <p className="text-[#4F5D75] mb-4">With over 15 years of experience in Islamic funeral services, Ahmed founded The Last Companion to ensure dignified Islamic burials for all community members.</p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="h-64 relative">
                <Image 
                  src="/images/team-2.jpg" 
                  alt="Fatima Rahman" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-1">Fatima Rahman</h3>
                <p className="text-blue-700 font-medium mb-3">Family Services Coordinator</p>
                <p className="text-gray-600 mb-4">Fatima specializes in guiding families through the funeral process with compassion and expertise, ensuring all needs are met with sensitivity.</p>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="h-64 relative">
                <Image 
                  src="/images/team-3.jpg" 
                  alt="Yusuf Ali" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-1">Yusuf Ali</h3>
                <p className="text-blue-700 font-medium mb-3">Islamic Scholar & Advisor</p>
                <p className="text-gray-600 mb-4">Imam Yusuf ensures all our services adhere to Islamic principles and provides spiritual guidance to families during their time of grief.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#2D3142] text-white">
        <div className="container mx-auto px-4 text-center" style={{opacity: 1, transform: 'translateY(0)', transition: 'opacity 0.8s ease, transform 0.8s ease'}}>
          <h2 className="text-3xl font-bold mb-6 font-serif">Have Questions About Our Services?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-[#BFC0C0]">Our team is available to provide information and support whenever you need us.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="group relative overflow-hidden bg-[#EF8354] hover:bg-[#D64C1B] text-white px-6 py-3 rounded-md font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1 inline-block">
              <span className="relative z-10">Contact Us</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#D64C1B] to-[#EF8354] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </Link>
            <Link href="/services" className="relative overflow-hidden border border-[#4F5D75] hover:border-[#EF8354] text-white px-6 py-3 rounded-md font-medium transition-all duration-300 hover:shadow-md inline-block group">
              <span className="relative z-10">Our Services</span>
              <span className="absolute inset-0 bg-[#4F5D75]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

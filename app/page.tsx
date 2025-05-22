import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative text-white">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#2D3142]/95 to-[#4F5D75]/80"></div>
        <div className="container relative z-10 mx-auto px-4 py-28 md:py-32">
          <div className="max-w-3xl" style={{opacity: 1, transform: 'translateY(0)', transition: 'opacity 0.8s ease, transform 0.8s ease'}}>
            <h1 className="mb-6 font-serif text-4xl font-bold md:text-5xl lg:text-6xl">
              Islamic Funeral Services with <span className="text-[#EF8354]">Dignity</span> and <span className="text-[#EF8354]">Compassion</span>
            </h1>
            <p className="mb-4 text-xl text-[#BFC0C0]">Providing complete Islamic funeral and burial services with respect to Islamic traditions and practices. Available 24/7 to support you in your time of need.</p>
            <div className="mb-8 rounded-lg bg-[#2D3142]/80 p-4 border-l-4 border-[#EF8354] shadow-lg">
              <p className="arabic-quote text-xl text-[#EF8354] mb-2 text-right">
                وَبَشِّرِ الصَّابِرِينَ
              </p>
              <p className="text-[#BFC0C0] italic">"...but give good tidings to the patient."</p>
              <p className="text-sm text-[#4F5D75]">— Surah Al-Baqarah [2:155]</p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link 
                href="/contact" 
                className="group relative overflow-hidden bg-[#EF8354] hover:bg-[#D64C1B] rounded-md px-6 py-3 text-center font-medium text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <span className="relative z-10">Contact Us Now</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#D64C1B] to-[#EF8354] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              </Link>
              <Link 
                href="/services" 
                className="relative overflow-hidden border-[#4F5D75] hover:border-[#EF8354] rounded-md border px-6 py-3 text-center font-medium text-white transition-all duration-300 hover:shadow-md group"
              >
                <span className="relative z-10">Our Services</span>
                <span className="absolute inset-0 bg-[#4F5D75]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-b from-[#2D3142]/5 to-[#2D3142]/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#2D3142] mb-4 font-serif relative inline-block">
              Our Comprehensive Services
              <span className="absolute -bottom-2 left-1/4 right-1/4 h-0.5 bg-[#EF8354]/70 rounded-full"></span>
            </h2>
            <p className="text-lg text-[#4F5D75] max-w-3xl mx-auto mt-6">We provide a complete range of funeral services that adhere to Islamic principles, offering support and guidance during difficult times.</p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Service 1 */}
            <div className="group rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white/80 border border-[#BFC0C0]/20" style={{opacity: 1, transform: 'translateY(0)', transition: 'opacity 0.5s ease, transform 0.5s ease'}}>
              <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-[#4F5D75]/10 text-[#EF8354] group-hover:bg-[#EF8354]/10 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="mb-2 font-serif text-xl font-bold text-[#2D3142] group-hover:text-[#EF8354] transition-colors duration-300">Janazah Preparation</h3>
              <p className="text-[#4F5D75]">Complete preparation of the deceased according to Islamic traditions, including washing (ghusl) and shrouding (kafan).</p>
            </div>
            
            {/* Service 2 */}
            <div className="card card-hover animate-fade-in" style={{animationDelay: '200ms'}}>
              <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="mb-2 font-serif text-xl font-bold text-blue-800">Janazah Prayer</h3>
              <p className="text-gray-600">Arrangement of funeral prayers (Salat al-Janazah) with coordination of prayer times and locations convenient for family and community.</p>
            </div>
            
            {/* Service 3 */}
            <div className="card card-hover animate-fade-in" style={{animationDelay: '300ms'}}>
              <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="mb-2 font-serif text-xl font-bold text-blue-800">Islamic Burial</h3>
              <p className="text-gray-600">Proper Islamic burial services with cemetery arrangements and grave preparation according to Islamic guidelines.</p>
            </div>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-4 animate-fade-in" style={{animationDelay: '400ms'}}>
            <Link href="/services" className="bg-orange-600 hover:bg-orange-700 rounded-md px-6 py-3 text-center font-medium text-white transition-all duration-300 hover:shadow-lg">Our Services</Link>
            <Link href="/contact" className="border-blue-400 hover:bg-blue-50 rounded-md border px-6 py-3 text-center font-medium text-blue-700 transition-all duration-300 hover:shadow-md">Contact Us</Link>
          </div>
        </div>
      </section>
      {/* Quranic Guidance Section */}
      <section className="bg-[#2D3142] py-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2D3142] to-[#1A1D2A] opacity-80"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] bg-repeat opacity-5"></div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="mb-12 text-center" style={{opacity: 1, transform: 'translateY(0)', transition: 'opacity 0.8s ease, transform 0.8s ease'}}>
            <h2 className="mb-4 font-serif text-3xl font-bold text-[#EF8354] relative inline-block">
              Quranic Guidance
              <span className="absolute -bottom-2 left-1/4 right-1/4 h-0.5 bg-[#EF8354]/70 rounded-full"></span>
            </h2>
            <p className="mx-auto max-w-3xl text-[#BFC0C0] mt-6">Verses from the Holy Quran that provide comfort and guidance during times of loss.</p>
          </div>
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 rounded-lg bg-[#1A1D2A] p-8 shadow-lg border-l-4 border-[#EF8354] hover:shadow-xl transition-shadow duration-300">
              <div className="mb-10 text-center" style={{opacity: 1, transform: 'translateY(0)', transition: 'opacity 0.5s ease, transform 0.5s ease'}}>
                <div className="relative inline-block mb-4">
                  <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#EF8354]/20 to-transparent blur-md"></span>
                  <p className="relative font-arabic text-3xl leading-relaxed text-[#EF8354]">كُلُّ نَفْسٍ ذَائِقَةُ الْمَوْتِ ۗ ثُمَّ إِلَيْنَا تُرْجَعُونَ</p>
                </div>
                <p className="italic text-[#BFC0C0] text-xl">"Every soul will taste death. Then to Us will you be returned."</p>
                <p className="mt-2 text-sm text-[#4F5D75]">— Surah Al-Ankabut [29:57]</p>
              </div>
              
              <div className="mb-10 text-center" style={{opacity: 1, transform: 'translateY(0)', transition: 'opacity 0.6s ease, transform 0.6s ease'}}>
                <div className="relative inline-block mb-4">
                  <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#EF8354]/20 to-transparent blur-md"></span>
                  <p className="relative font-arabic text-3xl leading-relaxed text-[#EF8354]">وَلَنَبْلُوَنَّكُم بِشَيْءٍ مِّنَ الْخَوْفِ وَالْجُوعِ وَنَقْصٍ مِّنَ الْأَمْوَالِ وَالْأَنفُسِ وَالثَّمَرَاتِ ۗ وَبَشِّرِ الصَّابِرِينَ</p>
                </div>
                <p className="italic text-[#BFC0C0] text-xl">"And We will surely test you with something of fear and hunger and a loss of wealth and lives and fruits, but give good tidings to the patient."</p>
                <p className="mt-2 text-sm text-[#4F5D75]">— Surah Al-Baqarah [2:155]</p>
              </div>
              
              <div className="text-center" style={{opacity: 1, transform: 'translateY(0)', transition: 'opacity 0.7s ease, transform 0.7s ease'}}>
                <div className="relative inline-block mb-4">
                  <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#EF8354]/20 to-transparent blur-md"></span>
                  <p className="relative font-arabic text-3xl leading-relaxed text-[#EF8354]">إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ</p>
                </div>
                <p className="italic text-[#BFC0C0] text-xl">"Indeed we belong to Allah, and indeed to Him we will return."</p>
                <p className="mt-2 text-sm text-[#4F5D75]">— Surah Al-Baqarah [2:156]</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mb-16 rounded-lg bg-somber-50 p-8 shadow-md">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <h2 className="font-serif text-3xl font-bold text-somber-800">Why Choose The Last Companion?</h2>
                <p className="text-somber-600">We understand the importance of proper Islamic funeral rites and provide comprehensive services to ensure your loved ones are honored with dignity and respect.</p>
              </div>
              
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {/* Feature 1 */}
                <div className="rounded-lg bg-white p-6 shadow-md transition-transform hover:scale-105">
                  <div className="mb-4 flex size-14 items-center justify-center rounded-full bg-somber-100 text-accent-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <h3 className="mb-2 font-serif text-xl font-bold text-somber-800">Transportation</h3>
                  <p className="text-somber-600">Respectful transportation of the deceased from place of death to the washing facility, prayer location, and finally to the cemetery.</p>
                </div>
                
                {/* Feature 2 */}
                <div className="text-center">
                  <div className="mx-auto mb-4 flex size-20 items-center justify-center rounded-full bg-blue-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-gold-600 size-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-blue-900">Islamic Traditions</h3>
                  <p className="text-gray-600">All services are performed according to Islamic law and traditions with the utmost respect.</p>
                </div>
                
                {/* Feature 3 */}
                <div className="rounded-lg bg-white p-6 shadow-md transition-transform hover:scale-105">
                  <div className="mb-4 flex size-14 items-center justify-center rounded-full bg-somber-100 text-accent-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="mb-2 font-serif text-xl font-bold text-somber-800">Janazah Prayer</h3>
                  <p className="text-somber-600">Arrangement of funeral prayers (Salat al-Janazah) with coordination of prayer times and locations convenient for family and community.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="from-kaashi-700 to-kaashi-800 relative overflow-hidden bg-gradient-to-r py-16 text-white">
        <div className="absolute inset-0 bg-[url('/images/mosque-silhouette.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h2 className="mb-8 font-serif text-3xl font-bold md:text-4xl">We're Here For You <span className="text-gold-300">24/7</span></h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl">Contact us anytime, day or night. Our compassionate team is ready to assist you in your time of need.</p>
          <Link href="/contact" className="bg-sage-100 text-gold-800 inline-block rounded-md px-8 py-4 text-lg font-medium transition-colors hover:bg-white">
            Call Now: +1-234-567-8900
          </Link>
          <Link href="/contact" className="inline-block rounded-md border border-white px-6 py-3 font-medium text-white transition-colors hover:bg-blue-800">
            Contact Us
          </Link>
        </div>
      </section>
      {/* Testimonials */}
      <section className="bg-slate-900 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center animate-fade-in">
            <h2 className="mb-4 font-serif text-4xl font-bold text-white md:text-5xl">What Families Say</h2>
            <div className="mx-auto mb-6 h-1 w-24 rounded bg-blue-500"></div>
            <p className="mx-auto max-w-2xl text-lg text-gray-300">Hear from the families we've had the honor of serving during their time of need.</p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="rounded-lg bg-slate-800 p-6 shadow-md border-t-4 border-blue-400 animate-fade-in" style={{animationDelay: '100ms'}}>
              <div className="mb-4 flex items-center">
                <div className="relative mr-4">
                  <Image 
                    src="/images/team-1.jpg" 
                    alt="Ahmed Family" 
                    width={60} 
                    height={60} 
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-white">Ahmed Family</h3>
                  <p className="text-sm text-indigo-300">New York</p>
                </div>
              </div>
              <p className="mb-4 text-gray-300">"The Last Companion provided exceptional service during our difficult time. Their attention to Islamic traditions and compassionate approach was truly comforting."</p>
              <div className="flex text-indigo-300">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="rounded-lg bg-slate-800 p-6 shadow-md border-t-4 border-blue-400 animate-fade-in" style={{animationDelay: '200ms'}}>
              <div className="mb-4 flex items-center">
                <div className="relative mr-4">
                  <Image 
                    src="/images/team-2.jpg" 
                    alt="Rahman Family" 
                    width={60} 
                    height={60} 
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-white">Rahman Family</h3>
                  <p className="text-sm text-indigo-300">Michigan</p>
                </div>
              </div>
              <p className="mb-4 text-gray-300">"We are deeply grateful for the dignified and respectful service provided for our beloved mother. The team's knowledge of Islamic funeral practices gave us peace of mind."</p>
              <div className="flex text-indigo-300">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="rounded-lg bg-slate-800 p-6 shadow-md border-t-4 border-blue-400 animate-fade-in" style={{animationDelay: '300ms'}}>
              <div className="mb-4 flex items-center">
                <div className="relative mr-4">
                  <Image 
                    src="/images/team-3.jpg" 
                    alt="Malik Family" 
                    width={60} 
                    height={60} 
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-white">Malik Family</h3>
                  <p className="text-sm text-indigo-300">Connecticut</p>
                </div>
              </div>
              <p className="mb-4 text-gray-300">"The 24/7 availability and professional service from The Last Companion was a blessing for our family. They handled everything with the utmost respect."</p>
              <div className="flex text-indigo-300">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="relative overflow-hidden bg-[#2D3142]/5 py-16">
        <div className="absolute inset-0 bg-[url('/images/pattern-bg.jpg')] bg-cover bg-center opacity-5"></div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="mb-12 text-center" style={{opacity: 1, transform: 'translateY(0)', transition: 'opacity 0.8s ease, transform 0.8s ease'}}>
            <h2 className="mb-4 font-serif text-3xl font-bold text-[#2D3142] relative inline-block">
              Frequently Asked Questions
              <span className="absolute -bottom-2 left-1/4 right-1/4 h-0.5 bg-[#EF8354]/70 rounded-full"></span>
            </h2>
            <p className="mx-auto max-w-3xl text-[#4F5D75] mt-6">Find answers to common questions about our Islamic funeral services.</p>
          </div>
          
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 rounded-lg bg-white p-6 shadow-md border-l-4 border-[#EF8354] hover:shadow-lg transition-shadow duration-300" style={{opacity: 1, transform: 'translateY(0)', transition: 'opacity 0.5s ease, transform 0.5s ease'}}>
              <h3 className="mb-2 text-xl font-bold text-[#2D3142]">What Islamic funeral services do you provide?</h3>
              <p className="text-[#4F5D75]">We provide complete Islamic funeral services including Ghusl (ritual washing), Kafan (shrouding), Janazah prayer arrangements, transportation, and burial services in accordance with Islamic traditions.</p>
            </div>
            
            <div className="mb-8 rounded-lg bg-white p-6 shadow-md border-l-4 border-[#EF8354] hover:shadow-lg transition-shadow duration-300" style={{opacity: 1, transform: 'translateY(0)', transition: 'opacity 0.6s ease, transform 0.6s ease'}}>
              <h3 className="mb-2 text-xl font-bold text-[#2D3142]">How quickly can you respond to a death?</h3>
              <p className="text-[#4F5D75]">We are available 24/7 and can respond immediately to your call. Islamic tradition encourages prompt burial, and we work efficiently to arrange all necessary services as quickly as possible.</p>
            </div>
            
            <div className="mb-8 rounded-lg bg-white p-6 shadow-md border-l-4 border-[#EF8354] hover:shadow-lg transition-shadow duration-300" style={{opacity: 1, transform: 'translateY(0)', transition: 'opacity 0.7s ease, transform 0.7s ease'}}>
              <h3 className="mb-2 text-xl font-bold text-[#2D3142]">Do you help with cemetery arrangements?</h3>
              <p className="text-[#4F5D75]">Yes, we coordinate with Islamic cemeteries and can help arrange for the purchase of a burial plot, grave preparation, and all aspects of the burial process.</p>
            </div>
            
            <div className="mb-8 rounded-lg bg-white p-6 shadow-md border-l-4 border-[#EF8354] hover:shadow-lg transition-shadow duration-300" style={{opacity: 1, transform: 'translateY(0)', transition: 'opacity 0.8s ease, transform 0.8s ease'}}>
              <h3 className="mb-2 text-xl font-bold text-[#2D3142]">What is the cost of your funeral services?</h3>
              <p className="text-[#4F5D75]">Our service costs vary depending on specific needs. We offer transparent pricing and can provide detailed information during consultation. We also offer assistance for families with financial constraints.</p>
            </div>
            
            <div className="mt-8 text-center" style={{opacity: 1, transform: 'translateY(0)', transition: 'opacity 0.9s ease, transform 0.9s ease'}}>
              <Link href="/faq" className="text-[#EF8354] hover:text-[#D64C1B] font-medium inline-flex items-center transition-colors duration-300 group">
                <span>View All FAQs</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 size-4 transform group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

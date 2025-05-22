import Link from 'next/link';

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative text-white py-16">
        <div className="absolute inset-0 bg-[url('/images/contact-bg.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#2D3142]/95 to-[#4F5D75]/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center" style={{opacity: 1, transform: 'translateY(0)', transition: 'opacity 0.8s ease, transform 0.8s ease'}}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">Contact <span className="text-[#EF8354]">Us</span></h1>
            <p className="text-xl mb-8 text-[#BFC0C0]">We're available 24/7 to provide support and assistance during your time of need.</p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div style={{opacity: 1, transform: 'translateY(0)', transition: 'opacity 0.6s ease, transform 0.6s ease'}}>
              <h2 className="text-3xl font-bold text-[#2D3142] mb-6 font-serif relative inline-block">
                Get in Touch
                <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-[#EF8354]/70 rounded-full"></span>
              </h2>
              <p className="text-[#4F5D75] mb-8">
                We understand that dealing with the loss of a loved one is difficult. Our compassionate team is here to help you through every step of the process.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="bg-[#4F5D75]/10 rounded-full p-3 mr-4 group-hover:bg-[#EF8354]/10 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-6 text-[#EF8354]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#2D3142] mb-1 group-hover:text-[#EF8354] transition-colors duration-300">Phone (24/7)</h3>
                    <p className="text-[#4F5D75]">+1-234-567-8900</p>
                    <p className="text-[#4F5D75]/70 text-sm mt-1">Available 24 hours a day, 7 days a week</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="bg-[#4F5D75]/10 rounded-full p-3 mr-4 group-hover:bg-[#EF8354]/10 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-6 text-[#EF8354]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#2D3142] mb-1 group-hover:text-[#EF8354] transition-colors duration-300">Email</h3>
                    <p className="text-[#4F5D75]">info@thelastcompanion.com</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="bg-[#4F5D75]/10 rounded-full p-3 mr-4 group-hover:bg-[#EF8354]/10 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-6 text-[#EF8354]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#2D3142] mb-1 group-hover:text-[#EF8354] transition-colors duration-300">Location</h3>
                    <p className="text-[#4F5D75]">123 Islamic Center Dr,<br />New York, NY 10001</p>
                    <p className="text-[#4F5D75]/70 text-sm mt-1">Our main office and prayer hall</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Hours of Operation</h3>
                <p className="text-gray-600 mb-2">Our emergency services are available 24/7.</p>
                <p className="text-gray-600 mb-2">Office Hours:</p>
                <ul className="text-gray-600">
                  <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                  <li>Saturday: 10:00 AM - 4:00 PM</li>
                  <li>Sunday: By appointment only</li>
                </ul>
              </div>
            </div>
            
            {/* Contact Form */}
            <div style={{opacity: 1, transform: 'translateY(0)', transition: 'opacity 0.8s ease, transform 0.8s ease'}}>
              <h2 className="text-3xl font-bold text-[#2D3142] mb-6 font-serif relative inline-block">
                Send a Message
                <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-[#EF8354]/70 rounded-full"></span>
              </h2>
              <p className="text-[#4F5D75] mb-8">
                If you have any questions or need assistance, please don't hesitate to reach out. We're here to help.  
              </p>
              
              <form className="bg-[#2D3142]/5 p-6 rounded-lg shadow-md border border-[#BFC0C0]/10">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-[#2D3142] font-medium mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-[#BFC0C0]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EF8354]/50 bg-white/80"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-[#2D3142] font-medium mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-[#BFC0C0]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EF8354]/50 bg-white/80"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-[#2D3142] font-medium mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-2 border border-[#BFC0C0]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EF8354]/50 bg-white/80"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-[#2D3142] font-medium mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-2 border border-[#BFC0C0]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EF8354]/50 bg-white/80"
                    placeholder="Enter subject"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-[#2D3142] font-medium mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full px-4 py-2 border border-[#BFC0C0]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EF8354]/50 bg-white/80"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-[#EF8354] hover:bg-[#D64C1B] text-white py-3 px-4 rounded-md font-medium transition-all duration-300 hover:shadow-lg relative overflow-hidden group"
                >
                  <span className="relative z-10">Send Message</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#D64C1B] to-[#EF8354] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-[#2D3142]/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8" style={{opacity: 1, transform: 'translateY(0)', transition: 'opacity 0.7s ease, transform 0.7s ease'}}>
            <h2 className="text-3xl font-bold text-[#2D3142] mb-4 font-serif relative inline-block">
              Our Location
              <span className="absolute -bottom-2 left-1/4 right-1/4 h-0.5 bg-[#EF8354]/70 rounded-full"></span>
            </h2>
            <p className="text-[#4F5D75] max-w-3xl mx-auto mt-6">Visit our main office and prayer hall located in the heart of New York City.</p>
          </div>
          
          <div className="bg-white/80 h-96 rounded-lg shadow-md border border-[#BFC0C0]/10 overflow-hidden">
            {/* Map would be embedded here in a real implementation */}
            <div className="h-full flex items-center justify-center">
              <p className="text-[#4F5D75]">Map would be displayed here</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Call Section */}
      <section className="py-12 bg-[#2D3142] text-white">
        <div className="container mx-auto px-4 text-center" style={{opacity: 1, transform: 'translateY(0)', transition: 'opacity 0.8s ease, transform 0.8s ease'}}>
          <h2 className="text-3xl font-bold mb-6 font-serif">Need Immediate Assistance?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-[#BFC0C0]">Our team is available 24/7 to provide support and guidance during your time of need.</p>
          <a 
            href="tel:+1234567890" 
            className="group relative overflow-hidden bg-[#EF8354] hover:bg-[#D64C1B] text-white px-8 py-4 rounded-md font-medium transition-all duration-300 hover:shadow-lg inline-block text-xl"
          >
            <span className="relative z-10">Call Now: +1-234-567-8900</span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#D64C1B] to-[#EF8354] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          </a>
        </div>
      </section>
    </>
  );
}

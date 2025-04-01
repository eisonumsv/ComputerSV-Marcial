
import React from 'react';

const Contact = () => {
  return (
    <div>
      <h1 className="page-title">Contact Me</h1>
      
      <div className="space-y-6">
        <div className="bg-white/10 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-bright-yellow mb-4">Get In Touch</h2>
          <p className="mb-6">
            Feel free to reach out to me through any of the following contact methods:
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-bright-yellow rounded-full flex items-center justify-center text-navy">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span>09XX XXX XXXX</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-bright-yellow rounded-full flex items-center justify-center text-navy">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span>isaacjohnmandinmarcial@gmail.com</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-bright-yellow rounded-full flex items-center justify-center text-navy">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <span>San Beda Alabang</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white/10 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-bright-yellow mb-4">Contact Form</h2>
          
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 rounded bg-white/5 border border-white/20 focus:outline-none focus:border-bright-yellow"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 rounded bg-white/5 border border-white/20 focus:outline-none focus:border-bright-yellow"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block mb-1">Subject</label>
              <input
                type="text"
                id="subject"
                className="w-full p-2 rounded bg-white/5 border border-white/20 focus:outline-none focus:border-bright-yellow"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-1">Message</label>
              <textarea
                id="message"
                rows={5}
                className="w-full p-2 rounded bg-white/5 border border-white/20 focus:outline-none focus:border-bright-yellow"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="bg-bright-yellow text-navy px-6 py-2 rounded font-medium hover:bg-yellow-400 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React, { useState } from 'react';
import PhoneInputPkg from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const PhoneInput = PhoneInputPkg.default || PhoneInputPkg;

const Contact = ({
  bgColor = 'bg-white',
  title = 'Contact Us',
  subtitle = '',
}) => {
  const [phone, setPhone] = useState('');

  return (
    <section className={`${bgColor} py-20 lg:py-32 overflow-hidden`}>
      <div className="container mx-auto px-4 md:px-10 lg:px-[100px]">

        {/* Upper Section: Form and Info */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-24">

          {/* Left Side: Contact Form Card */}
          <div className="lg:w-[45%]">
            <div className="bg-white rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.05)] p-6 md:p-10 border border-gray-100">
              <h3 className="font-new-york text-3xl md:text-[40px] text-[#333333] mb-4">
                {title}
              </h3>
              {subtitle && (
                <p className="font-lora text-[#333]/70 text-base mb-6">{subtitle}</p>
              )}
              
              <form className="space-y-6 mt-5">
                {/* Full Name */}
                <div className="relative group">
                  <div className="absolute -top-3 left-4 bg-white px-2 py-0.5 z-10">
                    <label className="block font-lora text-gray-400 text-[10px] uppercase tracking-wider">Full name</label>
                  </div>
                  <input 
                    type="text" 
                    placeholder="Your Full Name"
                    className="w-full px-6 py-3.5 rounded-xl border border-gray-200 focus:border-[#9B251E] focus:ring-0 outline-none transition-all font-lora text-[#333333] placeholder:text-gray-400 "
                  />
                </div>

                {/* Phone Number with Flag Dropdown */}
                <div className="relative group phone-input-container">
                  <div className="absolute -top-3 left-4 bg-white px-2 py-0.5 z-20">
                    <label className="block font-lora text-gray-400 text-[10px] uppercase tracking-wider">Phone Number</label>
                  </div>
                  <PhoneInput
                    country={'us'}
                    value={phone}
                    onChange={setPhone}
                    containerClass="!w-full"
                    inputClass="!w-full !h-auto !py-[15px] !px-6 !pl-[80px] !rounded-xl !border-gray-200 !font-lora !text-[#333333] !font-bold !text-base focus:!border-[#9B251E] focus:!ring-0 outline-none !transition-all"
                    buttonClass="!bg-white !border-gray-200 !border-r-0 !rounded-l-xl !px-4 !w-[70px] hover:!bg-white"
                    dropdownClass="!bg-white !rounded-xl !shadow-2xl !border-gray-100 !font-lora"
                    placeholder="Your Phone Number"
                  />
                  <style>{`
                    .phone-input-container .react-tel-input .form-control:focus {
                      border-color: #9B251E !important;
                      box-shadow: none !important;
                    }
                    .phone-input-container .react-tel-input .selected-flag {
                      width: 70px !important;
                      padding: 0 0 0 16px !important;
                      background: transparent !important;
                    }
                    .phone-input-container .react-tel-input .flag-dropdown {
                      background-color: transparent !important;
                      border-right: none !important;
                    }
                  `}</style>
                </div>

                {/* Email */}
                <div className="relative group">
                  <div className="absolute -top-3 left-4 bg-white px-2 py-0.5">
                    <label className="block font-lora text-gray-400 text-[10px] uppercase tracking-wider">Email</label>
                  </div>
                  <input 
                    type="email" 
                    placeholder="Your Email"
                    className="w-full px-6 py-3.5 rounded-xl border border-gray-200 focus:border-[#9B251E] focus:ring-0 outline-none transition-all font-lora text-[#333333] placeholder:text-gray-400 "
                  />
                </div>

                {/* Special Request */}
                <div className="relative group">
                  <div className="absolute -top-3 left-4 bg-white px-2 py-0.5">
                    <label className="block font-lora text-gray-400 text-[10px] uppercase tracking-wider">Special Request</label>
                  </div>
                  <textarea 
                    placeholder="add text here..."
                    rows="4"
                    className="w-full px-6 py-3.5 rounded-xl border border-gray-200 focus:border-[#9B251E] focus:ring-0 outline-none transition-all font-lora text-[#333333] resize-none placeholder:text-gray-400 "
                  ></textarea>
                </div>

                {/* Terms Checkbox */}
                <div className="flex items-start gap-4 py-1">
                  <div className="relative flex items-center">
                    <input type="checkbox" className="w-7 h-7 rounded-lg border-gray-200 text-[#9B251E] focus:ring-0 cursor-pointer appearance-none border-2 checked:bg-[#9B251E]" />
                  </div>
                  <p className="font-lora text-[14px] text-gray-900 leading-snug">
                    By checking the box you agree to our <a href="#" className="text-[#9B251E] underline underline-offset-4">Terms of Service</a> and <a href="#" className="text-[#9B251E] underline underline-offset-4">Privacy Policy</a>.
                  </p>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit"
                  className="w-full bg-[#9B251E] text-white font-lora font-bold py-3 rounded-[40px] hover:bg-[#7a1d17] transition-all shadow-xl text-lg mt-2"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Right Side: Consultation Info */}
          <div className="lg:w-[55%] pt-10">
            <h2 className="font-new-york text-4xl md:text-5xl lg:text-[58px] text-[#333333] mb-6">
              Book A Consultation
            </h2>
            <p className="font-lora text-gray-500 text-lg md:text-[18px] mb-16">
              Alternatively, dial +1 (212) 555-1212 or complete the form.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-12">
              {/* Our Location */}
              <div>
                <h4 className="font-libre font-bold text-[#1a1a1a] text-2xl mb-4">Our Location</h4>
                <div className="flex items-center gap-4 text-gray-600">
                  <div className="w-6 h-6 text-nfci-red">
                    <svg fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                  </div>
                  <span className="font-lora">NFCI Location</span>
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <h4 className="font-libre font-bold text-[#1a1a1a] text-2xl mb-4">Phone Number</h4>
                <div className="flex items-center gap-4 text-gray-600">
                  <div className="w-6 h-6 text-nfci-red">
                    <svg fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                  </div>
                  <span className="font-lora">+91 9888011222</span>
                </div>
              </div>

              {/* Email Address */}
              <div>
                <h4 className="font-libre font-bold text-[#1a1a1a] text-2xl mb-4">Email Address</h4>
                <div className="flex items-center gap-4 text-gray-600">
                  <div className="w-6 h-6 text-nfci-red">
                    <svg fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                  </div>
                  <span className="font-lora">info@nfcihospitality.com</span>
                </div>
              </div>

              {/* Opening Hours */}
              <div>
                <h4 className="font-libre font-bold text-[#1a1a1a] text-2xl mb-4">Opening Hours</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 text-gray-600">
                    <div className="w-8 h-8 text-nfci-red mt-1">
                      <svg fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>
                    </div>
                    <span className="font-lora leading-relaxed">Monday - Friday: 12:00 PM - 2:30 PM & 7:00 PM - 10:30 PM</span>
                  </div>
                  <div className="flex items-start gap-4 text-gray-600">
                    <div className="w-6 h-6 text-nfci-red mt-1">
                      <svg fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>
                    </div>
                    <span className="font-lora leading-relaxed">Saturday: 7:00 PM - 11:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lower Section: Map Integration */}
        <div className="relative rounded-[20px] overflow-hidden shadow-2xl h-[400px] md:h-[600px] group">
          {/* Real Google Map Embed */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3408.061036065582!2d75.5786483761706!3d31.32831865588321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5a59330932c5%3A0xc3b8433d7d743a1a!2sNFCI%20Global%20-%20Hotel%20Management%20Institute!5e0!3m2!1sen!2sin!4v1709292000000!5m2!1sen!2sin" 
            className="w-full h-full border-0"
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="NFCI Global Location"
          ></iframe>
          
          {/* Map Overlay Card */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[930px] bg-white rounded-[28px] px-8 py-6 shadow-[0_10px_40px_rgba(0,0,0,0.12)] border border-[#E8E8E8] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-10 w-full md:w-auto">
              <div className="space-y-1.5">
                <h4 className="font-new-york text-gray-900 text-xl font-bold">NFCI Hospitality</h4>
                <div className="flex items-center gap-3 text-gray-900">
                  <div className="w-5 h-5 text-red-500">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="font-lora text-sm font-medium">Location</span>
                </div>
                <div className="flex items-center gap-3 text-gray-900">
                  <div className="w-5 h-5">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="font-lora text-sm font-medium">+123 6 12 34 56 78</span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 pt-1 md:pt-0">
                <span className="font-lora font-bold text-gray-900 text-sm">4,6</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-5 h-5 ${i < 4 ? 'text-orange-500' : 'text-gray-300'} fill-current`} viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-400 text-[11px] ml-1">(1.662)</span>
              </div>
            </div>

            <a
              href="#"
              className="inline-flex items-center justify-center gap-3 px-8 py-3.5 border border-gray-200 rounded-full hover:bg-gray-50 transition-all text-gray-900 w-full md:w-auto"
            >
              <span className="font-lora font-bold text-[16px]">Route to school</span>
              <div className="w-5 h-5">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;

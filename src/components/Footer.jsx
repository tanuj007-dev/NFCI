import React from 'react';
import socialIcons from '../assets/Navigation (1).png';
import logoText from '../assets/Logo Text.png';


const Footer = () => {
  const campuses = [
    "Jalandhar", "Amritsar", "Ludhiana", "Chandigarh", "Patiala", "Maqsudan", 
    "Bathinda", "Hoshiarpur", "Barsar", "Solan", "Kangra", "Mandi", "Kangra", "Kangra"
  ];

  const quickLinks = ["Home", "Courses", "Placements", "Franchise", "Location"];

  return (
    <footer className="bg-[#01101D] pt-20 pb-20 overflow-hidden text-white">
      <div className="container mx-auto px-4 md:px-10 lg:px-[100px]">
        
        {/* Our Campuses Section */}
        <div className="mb-20">
          <div className="inline-block mb-8">
            <h4 className="font-new-york text-[24px] mb-2 relative inline-block">
              Our Campuses
              <div className="absolute -bottom-2 left-0 w-full h-[2px] bg-nfci-red"></div>
            </h4>
          </div>
          <div className="flex flex-wrap gap-y-4 gap-x-4 items-center font-lora text-white/80 text-sm md:text-base">
            {campuses.map((city, index) => (
              <React.Fragment key={index}>
                <a href="#" className="hover:text-nfci-red transition-colors whitespace-nowrap">{city}</a>
                {index < campuses.length - 1 && <span className="text-white/20">|</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Middle Footer Content */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 mb-20">
          {/* CTA Column */}
          <div className="col-span-2">
            <h2 className="font-new-york text-4xl md:text-[48px] text-white mb-10 max-w-xl leading-tight">
              Explore Our Culinary Expertise
            </h2>
            <a 
              href="#" 
              className="inline-flex mt-3 items-center gap-3 bg-nfci-red text-white px-8 py-4 rounded-full font-lora font-bold hover:bg-[#7a1d17] transition-all group"
            >
              View Courses
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Quick Links Column */}
          <div className="col-span-1">
            <h4 className="font-libre font-bold text-lg mb-8">Quick Links</h4>
            <ul className="space-y-4 mt-2 font-lora text-white/70">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Connect Column */}
          <div className="col-span-1">
            <h4 className="font-libre font-bold text-lg mb-8">Connect On</h4>
            <div className="flex flex-col gap-2 mt-2">
              <a href="#" className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#1877F2] transition-all duration-300">
                  <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <span className="font-lora text-white/70 group-hover:text-white transition-colors">Facebook</span>
              </a>

              <a href="#" className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#E4405F] transition-all duration-300">
                  <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <span className="font-lora text-white/70 group-hover:text-white transition-colors">Instagram</span>
              </a>

              <a href="#" className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-black transition-all duration-300">
                  <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </div>
                <span className="font-lora text-white/70 group-hover:text-white transition-colors">X (Twitter)</span>
              </a>

              <a href="#" className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#25D366] transition-all duration-300">
                  <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.942-.001-3.841-.484-5.528-1.4l-6.469 1.608zm6.216-3.633c1.554.922 3.19 1.411 4.887 1.412 5.398 0 9.79-4.393 9.793-9.793.002-2.614-1.017-5.072-2.872-6.928-1.856-1.856-4.316-2.873-6.927-2.873-5.398 0-9.791 4.393-9.793 9.793 0 1.727.452 3.414 1.309 4.89l-1.016 3.712 3.805-.945zm11.267-6.83c-.302-.151-1.785-.881-2.061-.982-.276-.1-.476-.151-.676.151-.2.301-.776 1.104-.951 1.304-.175.2-.351.226-.652.076-.301-.151-1.274-.469-2.426-1.496-.897-.8-1.502-1.788-1.677-2.089-.175-.301-.019-.464.131-.614.135-.134.301-.351.451-.527.15-.176.201-.301.301-.502.101-.2.05-.376-.025-.527-.075-.151-.676-1.631-.926-2.235-.243-.587-.49-.508-.676-.518-.174-.01-.375-.012-.576-.012s-.527.076-.802.376c-.276.301-1.053 1.029-1.053 2.51s1.078 2.912 1.228 3.113c.15.201 2.122 3.241 5.14 4.542.718.31 1.279.494 1.716.633.721.23 1.376.198 1.894.121.578-.088 1.785-.73 2.036-1.432.25-.701.25-1.304.175-1.432-.075-.128-.276-.201-.577-.352z"/>
                  </svg>
                </div>
                <span className="font-lora text-white/70 group-hover:text-white transition-colors">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 mb-20">
          <p className="font-lora text-white/40 text-sm">
            ©NFCI 2026. All rights reserved.
          </p>
          <div className="flex gap-8 font-lora text-white/60 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="text-white/20">•</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Services</a>
          </div>
        </div>

        {/* Giant Masked Text Section */}
        <div className="relative flex justify-center w-full items-center pointer-events-none overflow-visible py-10 md:py-15">
          <img 
            src={logoText} 
            alt="NFCI Logo" 
            className="w-full max-w-[1000px] h-auto object-contain opacity-100 select-none"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

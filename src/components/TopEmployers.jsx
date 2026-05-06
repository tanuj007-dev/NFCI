import React from 'react';
import b1 from '../assets/b1.png';
import b2 from '../assets/b2.png';
import b3 from '../assets/b3.png';
import b4 from '../assets/b4.png';

const TopEmployers = () => {
  const logos = [b1, b2, b3, b4];

  return (
    <section className="bg-[#FAF6F1] py-16 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-6 md:px-10 lg:px-[100px]">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Side - Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="font-new-york text-3xl md:text-4xl lg:text-[32px] text-[#333333] leading-tight mb-6">
              Some Esteemed Top Employers that Hire NFCI Students
            </h2>
            <p className="font-lora mt-3 text-[#333333]/70 text-base md:text-[16px] leading-relaxed max-w-xl mx-auto lg:mx-0">
              Top employers look to the NFCI when hiring, and when you grab your NFCI certification, they wish to take you on board. Backed with 36 years of experience, our hotel management institute is a full-service culinary...
            </p>
          </div>

          {/* Right Side - Logos (2x2 Grid on Mobile, Row on Desktop) */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 md:flex md:flex-row md:flex-nowrap items-center justify-items-center lg:justify-end gap-6 md:gap-10 py-4">
            {logos.map((logo, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-full max-w-[120px] md:max-w-[150px] lg:w-[120px] h-auto flex items-center justify-center transition-all duration-300 transform hover:scale-110 bg-white p-4 rounded-lg shadow-sm lg:shadow-none lg:bg-transparent"
              >
                <img 
                  src={logo} 
                  alt={`Employer ${index + 1}`} 
                  className="max-w-full h-auto object-contain transition-all duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopEmployers;

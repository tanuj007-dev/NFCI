import React from 'react';
import exp1 from '../assets/exp1.png';
import exp2 from '../assets/exp2.png';
import chefImg from '../assets/cf9c01ddd8d0a1f2f42c9648b10164e861c6cb3e.jpg';
import foodPlate from '../assets/36a565ceb4374187c1aeb28ab74f90c3e0bbdc15.png';

const Expertise = () => {
  const benefits = [
    "One of the leading Hotel Management & Culinary Institute",
    "Institute is managed by Hospitality Professionals",
    "Our Institutes specialized in Hospitality & Culinary Courses",
    "Our Institute has almost 100% Placement Assistance till date",
    "Best Academic curriculum in the Institution leading to Employment",
    "Entrepreneurship Skill Polishing"
  ];

  return (
    <section className="relative bg-white py-20 lg:py-20 overflow-hidden">
      {/* Background Accents (Garlic/Veg) */}
      <div className="absolute top-56 left-0 w-32 md:w-48 pointer-events-none -translate-x-1/4 opacity-50 md:opacity-100">
        <img src={exp1} alt="" className="w-full" />
      </div>
      <div className="absolute top-32 right-0 w-24 md:w-48 pointer-events-none translate-x-1/4 opacity-50 md:opacity-100">
        <img src={exp2} alt="" className="w-full" />
      </div>

      <div className="container mx-auto px-4 md:px-10 lg:px-[100px] relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Side - Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="font-new-york text-4xl md:text-5xl lg:text-[56.84px] text-[#333333] mb-6">
              Our Expertise
            </h2>
            <p className="font-lora mt-5 text-[#333333] text-base md:text-[18px] leading-relaxed md:leading-[35px] mb-10 max-w-2xl mx-auto lg:mx-0">
              We offer certificate courses and associate programs spanning the core of the food industry. Our food-centric advanced culinary education model helps our students to pitch attractive career options in the food business.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-4 gap-x-8 text-left">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#9B251E] flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="font-lora text-[#000000] text-[14px] md:text-[15px] leading-normal md:leading-[30px]">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Overlapping Images */}
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[480px]">
              {/* Main Chef Image */}
              <div className="rounded-[30px] md:rounded-[60px] overflow-hidden shadow-2xl w-full aspect-[4/5]">
                <img 
                  src={chefImg} 
                  alt="Our Expertise" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overlapping Food Plate */}
              <div className="absolute bottom-[5%] -left-[10%] md:bottom-[10%] md:-left-[18%] w-[60%] md:w-[55%] transform hover:scale-105 transition-transform duration-500 drop-shadow-2xl z-20">
                  <img 
                  src={foodPlate} 
                  alt="Gourmet Dish" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;

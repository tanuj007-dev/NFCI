import React from 'react';
import aboutImg from '../assets/about.jpg';

const About = () => {
  return (
    <section className="bg-[#FFF8F1] py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-20 mb-16">
          {/* Left Side - Image */}
          <div className="w-full lg:w-5/12 flex">
            <div className="relative w-full aspect-square lg:aspect-auto rounded-[30px] overflow-hidden shadow-sm flex-1">
              <img 
                src={aboutImg} 
                alt="Culinary setting" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-full lg:w-7/12 text-left flex flex-col justify-center">
            <div className="inline-block mb-6">
              <div className="relative inline-block">
                <div className="absolute -top-2 left-0 w-full h-[1px] bg-nfci-red/30"></div>
                <p className="font-lora text-nfci-red font-bold text-sm tracking-[0.1em] py-1">
                  ABOUT US
                </p>
                <div className="absolute -bottom-2 left-0 w-full h-[1px] bg-nfci-red/30"></div>
              </div>
            </div>
            
            <h2 className="font-new-york text-3xl md:text-4xl lg:text-[48px] leading-[1.1] text-[#1a1a1a] mb-10">
              Welcome To NFCI – Hotel Management & Culinary Institute In India
            </h2>
            
            <div className="space-y-8">
              <p className="font-lora text-gray-600 text-base md:text-lg leading-relaxed">
                National Finishing and Cookery Institute (NFCI) is both research-intensive and learner-centred where students across India master excellence in the field of food and hospitality. The culinary centre is an amalgamation of opportunities, connections and prominent placements.
              </p>
              
              <p className="font-lora text-gray-600 text-base md:text-lg leading-relaxed">
                Today, the food industry has grown to manifold with abundant opportunities and career plans. We offer degree and associate programs spanning the core of food industry. Our food-centric education model helps our students to pitch attractive career options in the food business. Top employers look to the NFCI when hiring, and when you grab your NFCI degree, they wish to take you on board.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Full-width Text */}
        <div className="w-full">
          <p className="font-lora text-gray-600 text-base md:text-lg leading-relaxed border-t border-gray-200 pt-10">
            Since 1990, with years of experience our culinary institute is a full-service culinary arts and training centre which offers a spectrum of cookery courses. We have proficient panel of educators for the students intending to become professional chefs. The advanced programs are also there to help them upgrade their cooking abilities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

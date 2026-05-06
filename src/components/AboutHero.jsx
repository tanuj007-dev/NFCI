import React from 'react';
import bgImage from '../assets/9efab064d1906bca067b28675acc7f56aa44edd2.webp';

const AboutHero = () => {
  return (
    <section className="relative h-[60vh] md:h-[70vh] lg:h-[50vh] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
        style={{ 
          backgroundImage: `url(${bgImage})`,
        }}
      >
        {/* Complex overlay for better text readability and premium look */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center py-20">
        <h1 className="font-new-york text-4xl sm:text-6xl md:text-8xl lg:text-[59px] text-white mb-6 tracking-tight leading-none drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
          About NFCI
        </h1>
        <p className="font-lora text-base sm:text-lg md:text-xl lg:text-[16px] text-white/90 leading-relaxed max-w-3xl mx-auto drop-shadow-md">
          India's premier institute for Hotel Management & Culinary Arts. Transform your passion into a rewarding career with world-class training.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;

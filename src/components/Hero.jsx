import React from 'react';
import heroBg from '../assets/hero.webp';

const Hero = () => {
  return (
    <section 
      className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${heroBg})` }}
    >
      <div className="container mx-auto px-4 mt-20 flex flex-col items-center justify-center text-center text-[#FDFCFC]">
        <h1 className="font-new-york !text-center flex justify-center text-4xl md:text-6xl lg:text-[76px]  leading-[1.05] max-w-6xl w-full">
          Are You Looking For a Career In The Hospitality Industry
        </h1>
        
        <p className="font-lora text-lg md:text-xl lg:text-2xl mt-10  max-w-5xl mx-auto opacity-90 leading-relaxed text-center">
          India's premier institute for Hotel Management & Culinary Arts. Transform your passion into a rewarding career with world-class training.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center mt-10 justify-center gap-6 w-full">
          <button className="bg-nfci-red hover:bg-nfci-red-hover text-white px-8 py-4 rounded-full font-libre text-[20px] font-bold transition-all duration-300 transform hover:scale-105 shadow-lg">
            EXPLORE COURSES
          </button>
          
          <button className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-full font-libre text-[20px] font-bold transition-all duration-300 transform hover:scale-105 shadow-lg">
            BROWSE LOCATIONS
          </button>
        </div>
      </div>
      
      {/* Subtle bottom fade to black if needed for content below */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;

import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import program1 from '../assets/program1.jpg';
import program2 from '../assets/program2.jpg';
import program3 from '../assets/program3.jpg';

const ProgramsSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const programs = [
    {
      image: program1,
      category: "Executive",
      title: "Customer Service Executive",
      desc: "From Indian cuisine to international flavors, learn professional cooking techniques from expert chefs."
    },
    {
      image: program2,
      category: "Food",
      title: "Certificate In Food Production",
      desc: "From Indian cuisine to international flavors, learn professional cooking techniques from expert chefs."
    },
    {
      image: program3,
      category: "Food",
      title: "Certificate In Cookery",
      desc: "From Indian cuisine to international flavors, learn professional cooking techniques from expert chefs."
    },
    {
      image: program1,
      category: "Management",
      title: "Hotel Management Diploma",
      desc: "From Indian cuisine to international flavors, learn professional cooking techniques from expert chefs."
    },
    {
      image: program2,
      category: "Culinary",
      title: "Bakery & Confectionery",
      desc: "From Indian cuisine to international flavors, learn professional cooking techniques from expert chefs."
    }
  ];

  const totalSlides = programs.length;
  const progress = ((activeIndex + 1) / totalSlides) * 100;

  return (
    <section className="bg-[#01101D] py-20 lg:py-20 overflow-hidden text-white">
      <div className="container mx-auto px-4 md:px-10 lg:px-20">
        {/* Header - Centered */}
        <div className="text-center mb-16 md:mb-24 max-w-4xl mx-auto">
          <div className="inline-block mb-4">
             <p className="font-lora text-[#9B251E] font-bold text-sm tracking-[0.2em] border-b-2 border-t-2 border-[#9B251E] py-1 px-6 uppercase">
               Our Programs
            </p>
          </div>
          <h2 className="font-new-york text-4xl md:text-5xl lg:text-[56px] text-white mb-6 mt-2">
            Explore Our Courses
          </h2>
          <p className="font-lora mt-3 text-[#FDFDFD] text-lg md:text-xl leading-[25px] max-w-3xl mx-auto">
            Best Cooking and hotel management institute with advance courses. Explore our certified career oriented courses programs with world class practical training.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative mb-12">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              }
            }}
            className="programs-swiper !overflow-visible"
          >
            {programs.map((program, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div className="relative h-[480px] rounded-[30px] overflow-hidden group">
                  {/* Background Image */}
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="absolute inset-0 w-full h-full object-cover blur-[1px] group-hover:blur-0 transform group-hover:scale-110 transition-all duration-1000"
                  />
                  
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
                  
                  {/* Content Overlay Card */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-[24px] p-6 transform translate-y-0 group-hover:translate-y-[-10px] transition-transform duration-500 shadow-2xl">
                    <p className="font-lora text-[#9B251E] text-sm font-bold mb-1 uppercase tracking-wider">
                      {program.category}
                    </p>
                    <h3 className="font-new-york text-xl md:text-2xl text-[#1a1a1a] mb-3 leading-tight">
                      {program.title}
                    </h3>
                    <p className="font-lora text-gray-500 text-sm mb-4 leading-relaxed line-clamp-2">
                      {program.desc}
                    </p>
                    <button className="flex items-center gap-2 font-lora text-[#9B251E] font-bold text-sm group/btn cursor-pointer">
                      View Program 
                      <svg className="w-5 h-5 transform group-hover/btn:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Bottom Controls - Progress Bar and Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-12">
          {/* Progress Bar */}
          <div className="w-full md:w-3/4 h-[5px] bg-gray-700/50 rounded-full relative">
            <div 
              className="absolute top-0 left-0 h-full bg-[#9B251E] transition-all duration-700 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex gap-4">
            <button 
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#9B251E] hover:text-white transition-all duration-300 shadow-lg group cursor-pointer"
            >
              <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12H3m0 0l8-8m-8 8l8 8" />
              </svg>
            </button>
            <button 
              onClick={() => swiperRef.current?.slideNext()}
              className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#9B251E] hover:text-white transition-all duration-300 shadow-lg group cursor-pointer"
            >
              <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12h18m0 0l-8-8m8 8l-8 8" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSlider;



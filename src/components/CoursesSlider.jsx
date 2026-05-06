import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import program1 from '../assets/program1.jpg';
import program2 from '../assets/program2.jpg';
import program3 from '../assets/program3.jpg';

const CoursesSlider = () => {
  const swiperRef = useRef(null);

  const courses = [
    {
      image: program1,
      category: "Executive",
      title: "Catering Management",
      desc: "From Indian cuisine to international flavors, learn professional cooking techniques from expert chefs."
    },
    {
      image: program2,
      category: "Food",
      title: "Certificate in Cookery",
      desc: "From Indian cuisine to international flavors, learn professional cooking techniques from expert chefs."
    },
    {
      image: program3,
      category: "Food",
      title: "Certificate in Chinese & Continental",
      desc: "From Indian cuisine to international flavors, learn professional cooking techniques from expert chefs."
    },
    {
      image: program1,
      category: "Baking",
      title: "Certificate in Bakery",
      desc: "From Indian cuisine to international flavors, learn professional cooking techniques from expert chefs."
    }
  ];

  return (
    <section className="bg-[#FFF8F1] py-20 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-15">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
          <div className="text-left max-w-3xl">
            <div className="inline-block mb-6">
              <div className="relative inline-block">
                <div className="absolute -top-2 left-0 w-full h-[1px] bg-nfci-red/30"></div>
                <p className="font-lora text-nfci-red font-bold text-sm tracking-[0.1em] py-1">
                  Courses
                </p>
                <div className="absolute -bottom-2 left-0 w-full h-[1px] bg-nfci-red/30"></div>
              </div>
            </div>
            <h2 className="font-new-york text-4xl md:text-5xl lg:text-[58px] leading-[1.1] text-[#01101D] mb-4">
              Turn Your Passion Into Smart Career With Us!
            </h2>
            <p className="font-lora text-[#01101D] text-lg md:text-[18px] leading-[33.6px]">
              Advanced Professional Courses We Offer at NFCI
            </p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-14 h-14 rounded-full bg-[#A3231D] text-white flex items-center justify-center hover:bg-[#8B1E19] transition-all duration-300 shadow-lg cursor-pointer"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m0 0l7-7m-7 7l7 7" />
              </svg>
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-14 h-14 rounded-full bg-[#A3231D] text-white flex items-center justify-center hover:bg-[#8B1E19] transition-all duration-300 shadow-lg cursor-pointer"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m0 0l-7-7m7 7l-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={15}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1440: { slidesPerView: 4 }
            }}
            className="courses-swiper !overflow-visible"
          >
            {courses.map((course, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-[380px] rounded-[15px] overflow-hidden group">
                  {/* Background Image */}
                  <img
                    src={course.image}
                    alt={course.title}
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Dark Overlay for better contrast */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-700"></div>

                  {/* Bottom Content Card with Blur */}
                  <div className="absolute bottom-6 left-2.5 right-2.5 bg-white/90 backdrop-blur-md rounded-[20px] p-5 shadow-xl border border-white/20">
                    <p className="font-lora text-[#01101D] text-[10px] font-semibold mb-2 uppercase tracking-widest">
                      {course.category}
                    </p>
                    <h3 className="font-new-york text-xl md:text-[16px] text-[#1a1a1a] mb-3 leading-tight font-bold">
                      {course.title}
                    </h3>
                    <p className="font-lora text-gray-600 text-[12px] mb-4 leading-relaxed line-clamp-3">
                      {course.desc}
                    </p>
                    <button className="flex items-center gap-2 font-lora text-nfci-red font-bold text-[12px] group/btn cursor-pointer">
                      Learn More
                      <svg className="w-5 h-5 transform group-hover/btn:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m0 0l-7-7m7 7l-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default CoursesSlider;

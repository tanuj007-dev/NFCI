// File: RelatedEventsSection.jsx

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const events = [
  {
    id: 1,
    category: "Music Festival",
    title: "The Global Rise of Modern Music Festivals",
    date: "Oct 12, 2025",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: 2,
    category: "Music Festival",
    title: "The Global Rise of Modern Music Festivals",
    date: "Oct 12, 2025",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: 3,
    category: "Music Festival",
    title: "The Global Rise of Modern Music Festivals",
    date: "Oct 12, 2025",
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: 4,
    category: "Music Festival",
    title: "The Global Rise of Modern Music Festivals",
    date: "Oct 12, 2025",
    image:
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=1800&auto=format&fit=crop",
  },
];

const RelatedEventsSection = () => {
  const swiperRef = useRef(null);

  const NavButton = ({ direction, onClick }) => (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className={`
        absolute top-1/2 -translate-y-1/2 z-40
        w-10 h-10 md:w-14 md:h-14
        rounded-full bg-[#9B251E]
        flex items-center justify-center
        transition-all duration-300
        shadow-lg hover:bg-[#7F1E18]
        cursor-pointer
        ${direction === "left" ? "-left-5 md:-left-7" : "-right-5 md:-right-7"}
      `}
    >
      {direction === "left" ? (
        <ChevronLeft className="text-white w-5 h-5 md:w-6 md:h-6" />
      ) : (
        <ChevronRight className="text-white w-5 h-5 md:w-6 md:h-6" />
      )}
    </motion.button>
  );

  return (
    <section className="w-full bg-[#F5EFE8] py-[80px] md:py-[100px] px-6 lg:px-0 overflow-hidden">
      <div className="max-w-[1344px] mx-auto flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col items-start gap-3">
          {/* Label */}
          <div className="w-fit border-y border-[#9B251E] py-1">
            <span className="font-[Lora] text-[20px] md:text-[22px] leading-[28.42px] font-medium text-[#9B251E]">
              Events
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-[NewYork] text-[#151515] font-normal tracking-normal leading-[115%] text-[32px] md:text-[42px] lg:text-[58px] max-w-[902px]">
            Related Events
          </h2>

          {/* Description */}
          <p className="font-[Lora] text-[#151515] text-[16px] md:text-[18px] leading-[26px] max-w-[902px]">
            Explore the key sessions, speakers, and experiences waiting for
            you this year.
          </p>
        </div>

        {/* Swiper Slider Wrapper */}
        <div className="relative w-full">
          {/* Navigation Buttons */}
          <NavButton direction="left" onClick={() => swiperRef.current?.slidePrev()} />
          <NavButton direction="right" onClick={() => swiperRef.current?.slideNext()} />

          <Swiper
            modules={[Navigation, Autoplay]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            centeredSlides={false}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 28,
              },
            }}
            className="related-events-swiper !overflow-visible"
          >
            {events.map((event) => (
              <SwiperSlide key={event.id} className="h-auto">
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#FFF7ED] border border-[#FFF7ED] rounded-[20px] p-[10px] flex flex-col gap-[18px] shadow-[0px_1px_1px_rgba(0,0,0,0.02)] hover:shadow-[0px_18px_45px_rgba(0,0,0,0.08)] transition-all duration-300 h-full"
                >
                  {/* Image */}
                  <div className="w-full h-[240px] md:h-[288px] rounded-[10px] overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-[14px] px-[6px] pb-2">
                    <span className="font-[Lora] text-[12px] leading-[17.1px] text-[#9B251E] font-normal">
                      {event.category}
                    </span>

                    <h3
                      className="font-[Cormorant_Garamond] text-[#151515] text-[24px] md:text-[28px] leading-[115%] font-semibold line-clamp-2"
                      style={{
                        textShadow: "0px 1px 1px rgba(0,0,0,0.05)",
                      }}
                    >
                      {event.title}
                    </h3>

                    <span className="font-[Lora] text-[12px] leading-[100%] font-medium text-[#707070]">
                      {event.date}
                    </span>
                  </div>
                </motion.article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default RelatedEventsSection;
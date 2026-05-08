// File: RelatedEventsSection.jsx

import React from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
];

const RelatedEventsSection = () => {
  return (
    <section className="w-full bg-[#F5EFE8] py-[100px] px-5 lg:px-0 overflow-hidden">
      <div className="max-w-[1344px] mx-auto flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
          {/* Left Content */}
          <div className="max-w-[902px] flex flex-col gap-3">
            {/* Label */}
            <div className="w-fit border-y border-[#9B251E] py-1">
              <span className="font-[Lora] text-[22px] leading-[28.42px] font-medium text-[#9B251E]">
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

          {/* Navigation */}
          <div className="flex items-center gap-4 lg:pt-6">
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              className="w-11 h-11 md:w-14 md:h-14 rounded-full bg-[#9B251E] flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              <ChevronLeft className="text-white w-5 h-5 md:w-6 md:h-6" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              className="w-11 h-11 md:w-14 md:h-14 rounded-full bg-[#9B251E] flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              <ChevronRight className="text-white w-5 h-5 md:w-6 md:h-6" />
            </motion.button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          {events.map((event) => (
            <motion.article
              key={event.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="bg-[#FFF7ED] border border-[#FFF7ED] rounded-[20px] p-[10px] flex flex-col gap-[18px] shadow-[0px_1px_1px_rgba(0,0,0,0.02)] hover:shadow-[0px_18px_45px_rgba(0,0,0,0.08)] transition-all duration-300"
            >
              {/* Image */}
              <div className="w-full h-[288px] rounded-[10px] overflow-hidden">
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
                  className="font-[Cormorant_Garamond] text-[#151515] text-[28px] leading-[115%] font-semibold"
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedEventsSection;
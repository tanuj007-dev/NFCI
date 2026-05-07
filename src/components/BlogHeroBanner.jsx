// File: BlogHeroBanner.jsx

import React from "react";
import { ArrowDown } from "lucide-react";
import heroImage from "../assets/blog-hero-banner.png";

const BlogHeroBanner = () => {
  return (
    <section className="relative w-full h-[450px] sm:h-[500px] lg:h-[575px] overflow-hidden">
      {/* Background Image */}
      <img
        src={heroImage}
        alt="Vitamin B12 Rich Foods"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/83 z-[1]" />

      {/* Main Content */}
      <div
        className="
          absolute z-[2]
          left-5 sm:left-10 lg:left-[42px]
          bottom-10 sm:bottom-12 lg:bottom-[52px]
          flex flex-col
          gap-3 sm:gap-[15.59px]
          w-full max-w-[90%] sm:max-w-[85%] lg:w-[964px]"
      >
        {/* Meta Row */}
        <div className="flex items-center gap-[12.26px]">
          <span
            className="
              text-[#B9251E]
              font-normal
              text-[14px] sm:text-[16px] lg:text-[18px]
              leading-none
            "
            style={{ fontFamily: "Lora, serif" }}
          >
            Feb 29, 2024
          </span>

          <span
            className="
              text-[#FDFCFC]
              font-normal
              text-[14px] sm:text-[16px] lg:text-[18px]
              leading-none
            "
            style={{ fontFamily: "Lora, serif" }}
          >
            10 Min
          </span>
        </div>

        {/* Heading */}
        <h1
          className="
            text-[#FDFCFC]
            font-normal
            tracking-normal
            antialiased
            text-balance
            text-[28px] leading-[34px]
            sm:text-[36px] sm:leading-[44px]
            md:text-[44px] md:leading-[52px]
            lg:text-[52px] lg:leading-[60px]
            xl:text-[59.26px] xl:leading-[65.5px]
          "
          style={{ fontFamily: '"New York", serif' }}
        >
          Vitamin B12 Rich Foods Vegetarian | Why B-12 is important!
        </h1>
      </div>

      {/* Scroll Button */}
      <button
        aria-label="Scroll Down"
        className="
          absolute
          z-[3]
          bottom-8 right-5
          md:bottom-12 md:right-10
          lg:bottom-16 lg:right-14

          flex items-center justify-center

          w-[50px] h-[50px]
          sm:w-[64px] sm:h-[64px]
          lg:w-[82px] lg:h-[82px]

          rounded-full
          border-[2px] lg:border-[3px]
          border-[#E33A5C]
          bg-transparent

          transition-all duration-300 ease-out
          hover:scale-105
          hover:shadow-[0_0_25px_rgba(227,58,92,0.45)]
        "
      >
        <ArrowDown
          className="text-white w-6 h-6 sm:w-8 sm:h-8 lg:w-9 lg:h-9"
          strokeWidth={2.2}
        />
      </button>
    </section>
  );
};

export default BlogHeroBanner;
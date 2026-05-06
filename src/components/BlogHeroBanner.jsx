// File: BlogHeroBanner.jsx

import React from "react";
import { ArrowDown } from "lucide-react";
import heroImage from "../assets/blog-hero-banner.png";

const BlogHeroBanner = () => {
  return (
    <section className="relative w-full h-[575px] overflow-hidden">
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
          left-[42px]
          bottom-[52px]
          flex flex-col
          gap-[15.59px]
          w-[964px]
          max-w-[calc(100%-140px)]
          lg:left-[42px]
          md:left-8
          sm:left-5"
      >
        {/* Meta Row */}
        <div className="flex items-center gap-[12.26px]">
          <span
            className="
              text-[#B9251E]
              font-normal
              text-[18px]
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
              text-[18px]
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
            max-w-[964px]
            text-balance
            antialiased

            xl:text-[59.26px]
            xl:leading-[65.5px]

            lg:text-[52px]
            lg:leading-[60px]

            md:text-[44px]
            md:leading-[52px]

            sm:text-[34px]
            sm:leading-[42px]

            text-[32px]
            leading-[40px]
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
          top-1/2
          right-[55px]
          -translate-y-1/2

          flex items-center justify-center

          w-[82px]
          h-[82px]

          rounded-full
          border-[3px]
          border-[#E33A5C]
          bg-transparent

          transition-all duration-300 ease-out
          hover:scale-105
          hover:shadow-[0_0_25px_rgba(227,58,92,0.45)]

          md:w-[72px]
          md:h-[72px]

          sm:w-[58px]
          sm:h-[58px]
          sm:right-5
        "
      >
        <ArrowDown
          className="
            text-white
            w-9
            h-9

            sm:w-7
            sm:h-7
          "
          strokeWidth={2.2}
        />
      </button>
    </section>
  );
};

export default BlogHeroBanner;
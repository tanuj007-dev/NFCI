// BlogCardSection.jsx

import React from "react";
import blogImage from "../assets/blog-card-image.png"; 
import { Link } from "react-router-dom";

const BlogCardSection = () => {
  return (
    <section className="w-full bg-[#FFF7ED] py-[70px] flex justify-center">
      <div
        className="
          w-full max-w-[1322px]
          flex flex-col lg:flex-row
          gap-[14px]
          items-stretch
          px-4 lg:px-0
        "
      >
        {/* Left Image */}
        <div className="w-full lg:w-[593px] flex-shrink-0">
          <img
            src={blogImage}
            alt="Vitamin B12 Rich Foods"
            className="
              w-full
              h-[260px] sm:h-[300px] lg:h-[332.56px]
              object-cover
              rounded-[14.52px]
            "
          />
        </div>

        {/* Right Content */}
        <div
          className="
            flex flex-col justify-center
            gap-[28px]
            w-full lg:w-[714.92px]
            py-2 lg:py-[24.5px]
          "
        >
          {/* Meta Row */}
          <div className="flex items-center gap-[10px]">
            <span className="font-lora text-[16px] md:text-[18px] font-normal text-[#B9251E]">
              Feb 29, 2024
            </span>

            <span className="font-lora text-[16px] md:text-[18px] font-normal text-[#6B6B6B]">
              10 Min
            </span>
          </div>

          {/* Title */}
          <h2
            className="
              font-new-york
              text-[32px]
              sm:text-[40px]
              lg:text-[42px]
              leading-[120%]
              font-normal
              text-[#1F1A17]
              line-clamp-2
            "
          >
            Vitamin B12 Rich Foods Vegetarian |...
          </h2>

          {/* Description */}
          <p
            className="
              font-lora
              text-[18px]
              sm:text-[20px]
              lg:text-[28px]
              leading-[150%]
              font-normal
              text-[#4B403A]
              line-clamp-2
            "
          >
            B12 Rich Foods in vegetarian, is very tough to manage because so
            many of you think that there...
          </p>

          <Link to="/blogdetails">
          <button
            className="
              w-[246.41px]
              h-[52.8px]
              rounded-[24.64px]
              bg-[#9B251E]
              hover:bg-[#821d18]
              transition-all duration-300
              text-white
              font-lora
              text-[18px]
              font-semibold
              flex items-center justify-center
              border-none
              cursor-pointer
            "
          >
            Read More
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogCardSection;
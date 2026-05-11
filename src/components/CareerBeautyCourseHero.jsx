// File: CareerBeautyCourseHero.jsx

import React from "react";
import beautyHeroImage from "../assets/couresheroimage.jpg";

export default function CareerBeautyCourseHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#EEE8EC]">
      <div className="relative mx-auto flex min-h-[676px] w-full max-w-[1443px] flex-col lg:flex-row">
        
        {/* LEFT CONTENT */}
        <div className="relative z-10 flex w-full items-center px-6 py-16 md:px-12 lg:w-[52%] lg:px-[70px]">
          <div className="flex max-w-[715px] flex-col gap-5 text-center lg:text-left">
            
            {/* BADGE */}
            <div className="flex justify-center lg:justify-start">
              <span
                className="
                  rounded-full bg-white
                  px-[22px] py-[10px]
                  text-[16px] font-bold
                  leading-[24px]
                  text-[#9B251E]
                  shadow-sm
                  md:text-[18px]
                "
                style={{ fontFamily: "Lora, serif" }}
              >
                Explore Your Options
              </span>
            </div>

            {/* HEADING */}
            <h1
              className="
                max-w-[715px]
                text-[34px] font-normal leading-[1.25]
                text-[#9B251E]
                sm:text-[42px]
                md:text-[48px]
                lg:text-[52px] lg:leading-[84px]
              "
              style={{ fontFamily: "NewYork, serif" }}
            >
              Excel in Your Career with High-Demand Beauty Courses!
            </h1>

            {/* DIVIDER */}
            <div className="mx-auto h-[2px] w-[84px] bg-[#9B251E] lg:mx-0" />

            {/* DESCRIPTION */}
            <p
              className="
                max-w-[680px]
                text-[16px] leading-[160%]
                text-[#3B3B3B]
                md:text-[18px]
                lg:text-[20px]
              "
              style={{ fontFamily: "Lora, serif" }}
            >
              If you are looking for the{" "}
              <span className="underline underline-offset-2">
                best beauty institute
              </span>
              , you can trust Orane International, a well-known name in the
              beauty and wellness industry that offers popular wellness and
              beauty skill development courses. With{" "}
              <span className="underline underline-offset-2">
                15+ years of experience
              </span>
              , a nationwide presence, and top-notch{" "}
              <span className="underline underline-offset-2">
                facilities/support
              </span>
              , we ensure a successful career journey for you.
            </p>

            {/* BUTTON */}
            <div className="flex justify-center pt-2 lg:justify-start">
              <button
                className="
                  w-full rounded-full bg-[#9B251E]
                  px-8 py-4
                  text-[18px] font-bold
                  leading-[24px]
                  text-white
                  transition-all duration-300
                  hover:scale-[1.03]
                  hover:bg-[#7F1D17]
                  active:scale-[0.98]
                  sm:w-fit
                "
                style={{ fontFamily: "Lora, serif" }}
              >
                View All Programs
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="
            absolute right-0 top-0
            hidden h-full w-[52%]
            overflow-hidden
            lg:block
          "
        >
          <img
            src={beautyHeroImage}
            alt="Beauty Hero"
            className="
              h-full w-full
              object-cover
              object-left
            "
          />
        </div>

        {/* MOBILE IMAGE */}
        <div className="relative block h-[300px] w-full overflow-hidden lg:hidden">
          <img
            src={beautyHeroImage}
            alt="Beauty Hero"
            className="h-full w-full object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}
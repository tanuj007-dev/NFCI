// File: CertificateTandoorSection.jsx

import React from "react";
import indiantand from "../assets/indian-tandoor-banner.png";

export default function CertificateTandoorSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F7F0E8]">
      {/* HERO BANNER */}
      <div className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[427px] overflow-hidden">
        <img
          src={indiantand}
          alt="Indian & Tandoor Course"
          className="w-full h-full object-cover"
        />

        {/* Dark cinematic overlay */}
        <div className="absolute inset-0 bg-black/25" />

        {/* Banner Text */}
        <div className="absolute left-4 sm:left-8 md:left-14 lg:left-20 top-10 sm:top-14 md:top-16 z-10">
          <h2
            className="
              text-white
              font-black
              uppercase
              leading-[0.95]
              tracking-[-0.03em]
              text-[34px]
              sm:text-[46px]
              md:text-[58px]
              lg:text-[72px]
            "
            style={{
              fontFamily: "Arial, sans-serif",
            }}
          >
           
          </h2>

          <h3
            className="
              mt-1
              text-[#F4C400]
              font-black
              uppercase
              leading-[0.95]
              tracking-[-0.03em]
              text-[36px]
              sm:text-[50px]
              md:text-[64px]
              lg:text-[78px]
            "
            style={{
              fontFamily: "Arial, sans-serif",
            }}
          >
          
          </h3>
        </div>
      </div>

      {/* OVERLAY CONTENT CARD */}
      <div className="relative z-20 w-full px-4 sm:px-6 lg:px-0">
        <div
          className="
            relative
            mx-auto
            -mt-12
            sm:-mt-16
            md:-mt-24
            lg:-mt-[110px]
            w-full
            max-w-[1262px]
            rounded-[24px]
            lg:rounded-[40px]
            bg-[#F3F3F3]
            shadow-[0_10px_30px_rgba(0,0,0,0.12)]
          "
        >
          <div
            className="
              flex
              flex-col
              items-center
              text-center
              px-6
              sm:px-10
              md:px-14
              lg:px-[77px]
             pt-8
sm:pt-10
lg:pt-[50px]
pb-8
sm:pb-10
lg:pb-[50px]
gap-6
lg:gap-7
            "
          >
            {/* DESCRIPTION */}
            <p
              className="
                max-w-[1080px]
                text-[#151515]
                font-normal
                leading-[150%]
                text-[16px]
                sm:text-[17px]
                md:text-[18px]
                lg:text-[20px]
              "
              style={{
                fontFamily: "Lora, serif",
              }}
            >
              The demand for expertise and specialization has increased in the
              Culinary world. So, we have formulated a wide array of specialized
              courses to suit the industry needs. Our certificate course in
              Indian cuisine is a specialized course in Indian cooking
              techniques and the preparation of authentic Indian food. It is a
              3-month certificate course that provides a platform to learn and
              master Indian cuisine. The course includes the ancient technique
              of tandoori cooking and the great variety of Indian curries.
            </p>

            {/* ENROLLMENT TITLE */}
            <h3
              className="
                max-w-[570px]
                text-[#151515]
                font-normal
                leading-[115%]
                text-[26px]
                sm:text-[28px]
                md:text-[30px]
                lg:text-[32px]
              "
              style={{
                fontFamily: '"Times New Roman", serif',
              }}
            >
              Enrollment for this program is now open!
            </h3>

            {/* CTA AREA */}
            <div className="relative flex items-center justify-center">
              {/* Decorative Arrow */}
              <div
                className="
                  hidden
                  sm:block
                  absolute
                  -left-[95px]
                  top-[-35px]
                  rotate-[70deg]
                "
              >
                <svg
                  width="92"
                  height="108"
                  viewBox="0 0 92 108"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[72px] lg:w-[92px] h-auto"
                >
                  <path
                    d="M63.7742 4.7207C39.9448 12.1644 20.3073 35.2256 17.9032 60.6818C16.7198 73.2168 20.1004 86.3884 30.4141 94.2084C40.7279 102.028 57.5247 102.238 65.4499 92.0054C73.3751 81.7729 66.0812 65.2188 52.5224 64.3395C40.8632 63.5834 31.3037 74.9766 32.4484 86.6056C33.5931 98.2346 43.1299 107.642 53.5946 107"
                    stroke="#1C1C1B"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M45.2871 95.8252C47.7968 99.2967 50.8025 102.389 54.2047 105"
                    stroke="#1C1C1B"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M45.2871 95.8252C48.8066 94.1267 52.6437 93.1166 56.5662 92.8545"
                    stroke="#1C1C1B"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* APPLY BUTTON */}
              <button
                className="
                  w-full
                  sm:w-[246px]
                  h-[54px]
lg:h-[58px]
                  rounded-full
                  bg-[#9B251E]
                  px-[14px]
                  text-white
                  text-[18px]
                  lg:text-[20px]
                  font-bold
                  transition-all
                  duration-300
                  ease-out
                  hover:scale-[1.03]
                  hover:bg-[#7f1f19]
                  hover:shadow-[0_10px_25px_rgba(155,37,30,0.35)]
                  active:scale-[0.98]
                "
                style={{
                  fontFamily: "Lora, serif",
                }}
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom spacing */}
      <div className="h-14 sm:h-16 lg:h-24" />
    </section>
  );
}
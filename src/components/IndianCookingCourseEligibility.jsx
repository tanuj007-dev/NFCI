// File: IndianCookingCourseEligibility.jsx

import React from "react";

const advancedCourses = [
  {
    title: "Catering Management",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Certificate in Cookery",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "F & B Service - Associate",
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Catering Management",
    image:
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function IndianCookingCourseEligibility() {
  return (
    <section className="w-full overflow-hidden bg-[#F7F0E8] pt-[80px] pb-[100px]">
      <div className="relative mx-auto max-w-[1440px] px-5 xl:px-0">
        {/* TOP FEATURE CARD */}
        <div className="mx-auto flex w-full max-w-[1380px] flex-col justify-between gap-10  bg-transparent p-6 lg:flex-row lg:items-start lg:gap-8">
          {/* LEFT CONTENT */}
          <div className="flex w-full max-w-[670px] flex-col">
            <h2
              className="mb-[18px] text-[34px] font-semibold leading-[115%] text-[#151515] sm:text-[38px] lg:text-[42.02px]"
              style={{
                fontFamily: '"Cormorant Garamond", serif',
              }}
            >
              Our Indian Cooking Certificate Course Is Suitable For:
            </h2>

            <p
              className="mb-[18px] w-full max-w-[670px] text-[16px] leading-[160%] text-[#151515] sm:text-[17px] lg:text-[18px]"
              style={{
                fontFamily: '"Lora", serif',
              }}
            >
              The certificate course in Indian and Tandoori cuisine is specially
              designed for candidates to gain extensive knowledge about Indian
              food preparation techniques. Students learn and gain special
              cooking skills during the practical sessions and industrial
              training. This certificate course is ideal for:-
            </p>

            <ul
              className="flex list-disc flex-col gap-3 pl-5 text-[16px] leading-[160%] text-[#151515] sm:text-[17px] lg:text-[18px]"
              style={{
                fontFamily: '"Lora", serif',
              }}
            >
              <li>
                Professional chefs and cooks who are not well aware of the
                Indian recipes and traditional cooking methods
              </li>

              <li>
                People willing to start their professional kitchen (restaurant
                or hotel)
              </li>

              <li>
                A food enthusiast who always wishes to learn the right way of
                cooking lip-smacking Indian Cuisine.
              </li>

              <li>
                Aspiring chefs who want to gain expertise in the niche of Indian
                cooking and tandoori cuisine.
              </li>
            </ul>

            <p
              className="mt-[14px] text-[16px] leading-[160%] text-[#151515] sm:text-[17px] lg:text-[18px]"
              style={{
                fontFamily: '"Lora", serif',
              }}
            >
              People who aim to work in popular Brands or food chains of
              restaurants popular for Indian and Tandoori cooking.
            </p>

            <h3
              className="mt-[26px] text-[26px] leading-[115%] text-[#151515] sm:text-[28px] lg:text-[32px]"
              style={{
                fontFamily: '"Times New Roman", serif',
                fontWeight: 400,
              }}
            >
              Enrollment for this program is now open!
            </h3>

            {/* CTA + ARROW */}
            <div className="relative mt-3 flex items-end gap-3 sm:gap-5">
              {/* Hand Drawn Arrow */}
              <svg
                width="92"
                height="108"
                viewBox="0 0 92 108"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hidden rotate-[-6deg] sm:block"
              >
                <path
                  d="M68 98C35 100 18 79 19 48C20 23 34 7 45 2"
                  stroke="#1C1C1B"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M36 12L46 2L50 15"
                  stroke="#1C1C1B"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M59 92L69 98L60 106"
                  stroke="#1C1C1B"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              {/* CTA BUTTON */}
              <button
                className="flex h-[65px] w-full items-center justify-center rounded-[100px] bg-[#9B251E] text-[22px] font-bold leading-[24.64px] text-[#FDFCFC] transition-all duration-300 hover:scale-[1.03] hover:bg-[#7d1c17] sm:w-[246.41px] sm:text-[24px]"
                style={{
                  fontFamily: '"Lora", serif',
                }}
              >
                Apply Now
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE CARD */}
          <div className="h-auto w-full flex-shrink-0 overflow-hidden rounded-[20px] border-[6px] border-white lg:h-[484px] lg:w-[605px]">
            <img
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1600&auto=format&fit=crop"
              alt="Indian Tandoor Cooking Course"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* ELIGIBILITY SECTION */}
        <div className="mt-[80px] flex flex-col items-center">
          <h2
            className="mb-10 text-center text-[34px] leading-[115%] text-[#151515] sm:text-[38px] lg:text-[42.02px]"
            style={{
              fontFamily: '"Times New Roman", serif',
              fontWeight: 400,
            }}
          >
            The eligibility of this course is:
          </h2>

          {/* TABLE */}
          <div className="w-full overflow-x-auto">
            <div className="mx-auto min-w-[900px] max-w-[1201px] border border-[#A5A5A5] bg-[#FFF7ED]">
              {/* HEADER */}
              <div className="grid h-[67px] grid-cols-[1.2fr_0.9fr_0.9fr] border-b border-[#A5A5A5]">
                {["Course Name", "Eligibility", "Duration"].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-center border-r border-[#A5A5A5] text-center text-[18px] font-medium text-[#151515] last:border-r-0 lg:text-[20px]"
                    style={{
                      fontFamily: '"Lora", serif',
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>

              {/* BODY */}
              <div className="grid h-[87px] grid-cols-[1.2fr_0.9fr_0.9fr]">
                <div
                  className="flex items-center justify-center border-r border-[#A5A5A5] px-4 text-center text-[18px] leading-[120%] text-[#151515] lg:text-[20px]"
                  style={{
                    fontFamily: '"Lora", serif',
                  }}
                >
                  CERTIFICATE COURSE IN INDIAN &amp; TANDOOR
                </div>

                <div
                  className="flex items-center justify-center border-r border-[#A5A5A5] text-center text-[18px] text-[#151515] lg:text-[20px]"
                  style={{
                    fontFamily: '"Lora", serif',
                  }}
                >
                  10th(Matriculation)
                </div>

                <div
                  className="flex items-center justify-center text-center text-[18px] text-[#151515] lg:text-[20px]"
                  style={{
                    fontFamily: '"Lora", serif',
                  }}
                >
                  6 Months
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ADVANCED COURSES SECTION */}
        <div className="mt-[80px] flex flex-col items-center">
          <div
            className="rounded-[8px] bg-[#9B251E] px-[24px] py-[16px] text-center text-[28px] font-semibold leading-[115%] text-white sm:px-[32px] lg:px-[42px] lg:text-[42.02px]"
            style={{
              fontFamily: '"Cormorant Garamond", serif',
            }}
          >
            Explore Our Advanced Aesthetic Courses
          </div>

          {/* CARDS */}
          <div className="mt-10 flex flex-wrap justify-center gap-[22px]">
            {advancedCourses.map((course, index) => (
              <div
                key={index}
                className="flex w-full max-w-[282px] flex-col gap-4"
              >
                <div className="h-[222px] w-full overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <h3
                  className="text-[18px] leading-[100%] text-[#9B251E] lg:text-[20px]"
                  style={{
                    fontFamily: '"Times New Roman", serif',
                    fontWeight: 400,
                  }}
                >
                  {course.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
// File: ExploreCoursesSection.jsx

import React from "react";
import { ArrowRight } from "lucide-react";

const courses = [
  {
    category: "Executive",
    title: "Certificate in Indi. Tandoor",
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    category: "Food",
    title: "Certificate In Food Production",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1200&auto=format&fit=crop",
  },
  {
    category: "Food",
    title: "Certificate In Cookery",
    image:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    category: "Food",
    title: "Certificate in Bakery",
    image:
      "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    category: "Food",
    title: "Housekeeping Superviso",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    category: "Food",
    title: "Catering Management",
    image:
      "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function ExploreCoursesSection() {
  return (
    <section className="w-full overflow-hidden bg-[#F7F0E8] py-[100px] max-md:py-[70px] max-sm:py-[50px]">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center px-4">
        
        {/* Top Label */}
        <div className="flex flex-col items-center">
          <div className="mb-3 h-[1px] w-[90px] bg-[#9B251E]" />

          <span
            className="
              text-center text-[22px] font-medium leading-[28.42px]
              text-[#9B251E]
            "
            style={{ fontFamily: "Lora, serif" }}
          >
            Our Programs
          </span>
        </div>

        {/* Heading */}
        <h2
          className="
            mt-4 w-full max-w-[535px]
            text-center text-[58px] font-normal leading-[115%]
            text-[#151515]
            max-md:text-[46px]
            max-sm:text-[34px]
          "
          style={{ fontFamily: "NewYork, serif" }}
        >
          Explore Our Courses
        </h2>

        {/* Description */}
        <p
          className="
            mt-4 w-full max-w-[740px]
            text-center text-[18px] font-normal leading-[160%]
            text-[#151515]
            max-sm:text-[16px]
          "
          style={{ fontFamily: "Lora, serif" }}
        >
          Best Cooking and hotel management institute with advance courses.
          Explore our certified career oriented courses programs with world
          class practical training.
        </p>

        {/* Course Grid */}
        <div
          className="
            mt-[60px]
            grid w-full grid-cols-3 gap-6
            max-lg:grid-cols-2
            max-sm:grid-cols-1
          "
        >
          {courses.map((course, index) => (
            <article
              key={index}
              className="
                group relative h-[444px] overflow-hidden rounded-2xl
                cursor-pointer
                transition-all duration-500 ease-out
                hover:-translate-y-[6px]
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]
              "
            >
              {/* Background Image */}
              <img
                src={course.image}
                alt={course.title}
                className="
                  absolute inset-0 h-full w-full object-cover
                  transition-transform duration-700
                  group-hover:scale-[1.04]
                "
              />

              {/* Dark Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />

              {/* Overlay Box */}
              <div
                className="
                  absolute bottom-4 left-4
                  flex flex-col gap-4
                  rounded-[24px]
                  bg-[rgba(253,253,253,0.93)]
                  p-5
                  backdrop-blur-sm
                  w-[calc(100%-32px)]
                  max-w-[365px]
                "
              >
                {/* Category */}
                <span
                  className="
                    text-[12px] font-normal leading-4
                    text-[#9B251E]
                  "
                  style={{ fontFamily: "Lora, serif" }}
                >
                  {course.category}
                </span>

                {/* Title */}
                <h3
                  className="
                    text-[18px] font-semibold leading-[22px]
                    text-[#151515]
                  "
                  style={{ fontFamily: "Lora, serif" }}
                >
                  {course.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    max-w-[325px]
                    text-[14px] font-normal leading-[22px]
                    text-[#717276]
                  "
                  style={{ fontFamily: "Lora, serif" }}
                >
                  From Indian cuisine to international flavors, learn
                  professional cooking techniques from expert chefs.
                </p>

                {/* View Program */}
                <button
                  className="
                    group/link flex w-fit items-center gap-1
                    text-[14px] font-medium text-[#9B251E]
                    transition-all duration-300
                  "
                  style={{ fontFamily: "Lora, serif" }}
                >
                  <span>View Program</span>

                  <ArrowRight
                    size={16}
                    className="
                      transition-transform duration-300
                      group-hover/link:translate-x-1
                    "
                  />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <button
          className="
            mt-10 flex h-[52px] w-[180px] items-center justify-center
            rounded-full border-0
            bg-[#B3261E]
            text-[18px] font-bold text-white
            transition-all duration-300
            hover:scale-[1.03]
            hover:bg-[#982018]
            max-sm:w-full
          "
          style={{ fontFamily: "Lora, serif" }}
        >
          Load More
        </button>
      </div>
    </section>
  );
}
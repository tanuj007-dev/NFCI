// File: IndianCuisineCourseDetails.jsx

import React from "react";
import courseschief from "../assets/coursedetailchief.png";

export default function IndianCuisineCourseDetails() {
  return (
    <section
      className="
        relative overflow-hidden
        bg-[linear-gradient(180deg,#021321_0%,#00101B_100%)]
        py-[60px]
        md:py-[90px]
      "
    >
      {/* Luxury glow effect */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -top-24 left-0 h-[320px] w-[320px] rounded-full bg-white/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[260px] w-[260px] rounded-full bg-[#0C2B42] blur-[120px]" />
      </div>

      <div
        className="
          relative z-10
          mx-auto
          flex max-w-[1440px]
          flex-col
          items-start
          justify-between
          gap-[36px]
          px-6
          md:gap-[50px]
          md:px-12
          xl:flex-row
          xl:gap-[70px]
          xl:px-[98px]
        "
      >
        {/* LEFT CONTENT */}
        <div
          className="
            flex w-full flex-col
            xl:w-[645px]
          "
        >
          {/* HEADING */}
          <h2
            className="
              mb-[28px]
              text-[34px]
              leading-[100%]
              text-[#FDFDFD]
              md:mb-[36px]
              md:text-[42px]
              xl:mb-[42px]
              xl:text-[49.08px]
            "
            style={{
              fontFamily: "NewYork",
              fontWeight: 400,
              letterSpacing: "0%",
            }}
          >
            Indian Cuisine Course Details :
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              mb-[26px]
              max-w-full
              text-[16px]
              leading-[165%]
              text-white
              md:mb-[30px]
              md:text-[18px]
              xl:mb-[34px]
              xl:w-[612px]
              xl:text-[20px]
              xl:leading-[160%]
            "
            style={{
              fontFamily: "Lora",
              fontWeight: 400,
              letterSpacing: "0%",
            }}
          >
            The true value of a certificate course in Indian cooking lies in
            various unique skills taught throughout the certificate program. The
            skills gained by culinary course give the way to success and
            prosperity in a career. Candidates get to learn:-
          </p>

          {/* FEATURE LIST */}
          <ul
            className="
              flex list-disc flex-col
              gap-[16px]
              pl-6
              text-[16px]
              leading-[165%]
              text-white
              marker:text-white
              md:gap-[18px]
              md:text-[18px]
              xl:w-[612px]
              xl:text-[20px]
              xl:leading-[160%]
            "
            style={{
              fontFamily: "Lora",
              fontWeight: 400,
              letterSpacing: "0%",
            }}
          >
            <li>
              <span className="uppercase">
                Knife Skill:
              </span>{" "}
              Students learn about using different kinds of knives and
              accurately perform different types of chopping and cutting
              activities for cooking.
            </li>

            <li>
              <span className="uppercase">
                Marinades &amp; Preparations:
              </span>{" "}
              We teach aspirants about the various types of Basic Marinades and
              Preparations used in the Tandoor like Tandoori Masala, Shashlik,
              Malai etc.
            </li>

            <li>
              <span className="uppercase">
                Preparation of Dough:
              </span>{" "}
              Candidates get to know about the preparation of different kinds of
              dough that are a part of Indian cuisine like Atta-based,
              Maida-based dough.
            </li>

            <li>
              <span className="uppercase">
                Use of Flavors:
              </span>{" "}
              There are specialized classes on the use of a wide range of
              authentic Indian flavors and aromatic Indian spices as
              ingredients.
            </li>
          </ul>
        </div>

        {/* RIGHT IMAGE AREA */}
        <div
          className="
            group relative
            h-[420px]
            w-full
            overflow-hidden
            rounded-[16px]
            border-[4px]
            border-white
            shadow-[0_20px_60px_rgba(0,0,0,0.45)]
            md:max-w-[520px]
            xl:h-[663px]
            xl:w-[557px]
            xl:max-w-none
            xl:rounded-[20px]
            xl:border-[6px]
          "
        >
          <img
            src={courseschief}
            alt="Indian cuisine culinary training"
            className="
              h-full w-full
              object-cover
              transition-transform duration-500 ease-out
              group-hover:scale-[1.05]
            "
          />

          {/* Cinematic overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/5 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
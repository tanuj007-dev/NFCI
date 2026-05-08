// File: ReasonsSection.jsx

import React from "react";
import reasonssectionimage from "../assets/reasonssectionimage.png";

const features = [
  "KNIFE SKILL: Students learn about using different kinds of knives and accurately perform different types of chopping and cutting activities for cooking.",

  "MARINADES & PREPARATIONS: We teach aspirants about the various types of Basic Marinades and Preparations used in the Tandoor like Tandoori Masala, Shashlik, Malai etc.",

  "PREPARATION OF DOUGH: Candidates get to know about the preparation of different kinds of dough that are a part of Indian cuisine like Atta-based, Maida-based dough.",

  "USE OF FLAVORS: There are specialized classes on the use of a wide range of authentic Indian flavors and aromatic Indian species as ingredients.",
];

export default function ReasonsSection() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#021321]
        bg-gradient-to-b
        from-[#021321]
        via-[#031a2b]
        to-[#021321]
        py-[80px]
        md:py-[90px]
        lg:py-[100px]
      "
    >
      <div
        className="
          mx-auto
          flex
          w-[90%]
          max-w-[1287px]
          flex-col
          gap-12
        "
      >
        {/* TOP CONTENT */}
        <div className="flex flex-col gap-8">
          {/* HEADING */}
          <h2
            className="
              max-w-[645px]
              text-[#FDFDFD]
              font-normal
              leading-[100%]
              tracking-normal
              text-[32px]
              md:text-[40px]
              lg:text-[49.08px]
            "
            style={{
              fontFamily: "NewYork, serif",
            }}
          >
            10 Reasons NFCI Stands Out!
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              w-full
              max-w-[1152px]
              text-white
              font-normal
              leading-[160%]
              text-[16px]
              md:text-[18px]
              lg:text-[20px]
            "
            style={{
              fontFamily: "Lora, serif",
            }}
          >
            The true value of a certificate course in Indian cooking lies in
            various unique skills taught throughout the certificate program. The
            skills gained by culinary course give the way to success and
            prosperity in a career. Candidates get to learn:-
          </p>

          {/* FEATURES GRID */}
          <div
            className="
              mt-5
              grid
              grid-cols-1
              gap-y-6
              md:grid-cols-1
              lg:grid-cols-2
              lg:gap-x-12
            "
          >
            {/* LEFT COLUMN */}
            <div className="flex flex-col gap-4 max-w-[612px]">
              <ul
                className="
                  list-disc
                  space-y-4
                  pl-6
                  text-white
                "
                style={{
                  fontFamily: "Lora, serif",
                }}
              >
                {features.map((item, index) => (
                  <li
                    key={index}
                    className="
                      text-[16px]
                      leading-[160%]
                      md:text-[18px]
                      lg:text-[20px]
                    "
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT COLUMN */}
            <div className="flex flex-col gap-4 max-w-[612px]">
              <ul
                className="
                  list-disc
                  space-y-4
                  pl-6
                  text-white
                "
                style={{
                  fontFamily: "Lora, serif",
                }}
              >
                {features.map((item, index) => (
                  <li
                    key={index}
                    className="
                      text-[16px]
                      leading-[160%]
                      md:text-[18px]
                      lg:text-[20px]
                    "
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* FEATURE IMAGE */}
        <div className="group relative overflow-hidden">
          <img
            src={reasonssectionimage}
            alt="NFCI Culinary Team"
            className="
              h-auto
              w-full
              object-cover
              transition-transform
              duration-700
              ease-out
              group-hover:scale-[1.03]
              lg:h-[663px]
            "
          />
        </div>
      </div>
    </section>
  );
}
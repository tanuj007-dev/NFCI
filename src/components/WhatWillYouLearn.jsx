// WhatWillYouLearn.jsx

import React from "react";

const cards = [
  {
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1200&auto=format&fit=crop",
    title: "Join Online Indian Cuisine Course",
  },
  {
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=1200&auto=format&fit=crop",
    title: "Join Online Indian Cuisine Course",
  },
];

export default function WhatWillYouLearn() {
  return (
    <section
      className="relative overflow-hidden py-[55px] md:py-[65px]"
      style={{
        background:
          "radial-gradient(circle at bottom left, rgba(16,60,92,0.55) 0%, rgba(1,16,27,1) 35%, rgba(0,7,15,1) 100%)",
        backgroundColor: "#000F1B",
      }}
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        {/* TOP SECTION */}
        <div className="flex flex-col xl:flex-row items-start gap-[45px]">
          {/* LEFT TITLE */}
          <div className="w-full xl:w-[399px] shrink-0">
            <h2
              className="
                text-[#FDFDFD]
                text-[36px]
                sm:text-[42px]
                xl:text-[49.08px]
                leading-[100%]
                font-normal
                text-center
                xl:text-left
              "
              style={{
                fontFamily: "NewYork, serif",
              }}
            >
              What Will You Learn?
            </h2>
          </div>

          {/* RIGHT DESCRIPTION */}
          <div className="flex flex-col gap-[28px] w-full max-w-[848.74px] text-center xl:text-left">
            <p
              className="
                text-white
                text-[16px]
                md:text-[18px]
                leading-[28px]
                md:leading-[30px]
                font-medium
              "
              style={{
                fontFamily: "Lora, serif",
              }}
            >
              On successful completion of the CERTIFICATE COURSE IN INDIAN AND
              TANDOORI CUISINE, you get a recognized certificate in Indian and
              Tandoori cuisine. It is universally accepted by our certified
              institute. After the successful completion of the Indian cooking
              certificate course, you will gain expertise in:-
            </p>

            <p
              className="
                text-white
                text-[16px]
                md:text-[18px]
                leading-[26px]
                md:leading-[28px]
                font-normal
              "
              style={{
                fontFamily: "Lora, serif",
              }}
            >
              A qualification in this course shall bring an opportunity to work
              as an Indian cuisine or Tandoori cooking expert in restaurants and
              hotels. Get an opportunity to work as a professionally Part-time
              expert chef, Full-time chef, or a Tandoori food specialist. An
              added benefit of Certificate in Tandoori cuisine is the
              opportunity to work on flavors. Popular food brands occasionally
              introduce a new flavor in their dishes and Tandoori flavors is one
              of the most popular flavors in the world.
            </p>
          </div>
        </div>

        {/* SECOND ROW */}
        <div className="mt-[55px] flex flex-col xl:flex-row items-start justify-between gap-10">
          {/* CTA CONTENT */}
          <div className="w-full xl:w-[399px] flex flex-col gap-[16px] text-center xl:text-left">
            <h3
              className="
                text-[#FDFDFD]
                text-[26px]
                md:text-[30px]
                xl:text-[32px]
                leading-[110%]
                font-normal
              "
              style={{
                fontFamily: "NewYork, serif",
              }}
            >
              Train Your Hands On Indian & Tandoori Food like Nowhere
            </h3>

            <p
              className="
                text-[#FDFDFD]
                text-[16px]
                md:text-[18px]
                leading-[140%]
                font-normal
              "
              style={{
                fontFamily: "Lora, serif",
              }}
            >
              Enroll for Certificate Course in Indian & Tandoori Cuisine
            </p>
          </div>

          {/* COURSE CARDS */}
          <div className="flex-1 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cards.map((card, index) => (
                <article
                  key={index}
                  className="
                    group
                    bg-white
                    rounded-[16px]
                    border border-[rgba(51,51,51,0.5)]
                    p-5
                    flex flex-col gap-[10px]
                    overflow-hidden
                    transition-all duration-500
                    hover:-translate-y-2
                    hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]
                  "
                >
                  {/* IMAGE */}
                  <div className="overflow-hidden rounded-[6px]">
                    <img
                      src={card.image}
                      alt="Indian cuisine course"
                      className="
                        w-full
                        h-[220px]
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-105
                      "
                    />
                  </div>

                  {/* BUTTON */}
                  <button
                    className="
                      w-full
                      min-h-[50px]
                      bg-[#9B251E]
                      rounded-full
                      flex
                      items-center
                      justify-center
                      px-5
                      py-3
                      transition-all
                      duration-300
                      hover:bg-[#7F1C16]
                      hover:scale-[1.02]
                    "
                  >
                    <span
                      className="
                        text-[#FDFCFC]
                        text-[15px]
                        md:text-[17px]
                        leading-[24px]
                        font-bold
                        text-center
                      "
                      style={{
                        fontFamily: "Lora, serif",
                      }}
                    >
                      {card.title}
                    </span>
                  </button>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* QUOTE SECTION */}
        <div className="mt-[60px] flex items-center justify-center text-center">
          <p
            className="
              w-full
              max-w-[1100px]
              text-[#FF594D]
              text-[24px]
              md:text-[30px]
              xl:text-[36px]
              leading-[110%]
              font-semibold
            "
            style={{
              fontFamily: "Cormorant Garamond, serif",
            }}
          >
            "Sharpen Your Knives And Become An Indian Cuisine Expert With Our
            Certificate Course in Indian and Tandoori Cuisine."
          </p>
        </div>
      </div>
    </section>
  );
}
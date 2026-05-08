// File: FeaturedMusicFestivalSection.jsx

import React from "react";

const eventDetails = [
  {
    label: "Location:",
    value: "Parise, France",
  },
  {
    label: "Creative Direction:",
    value: "Skyframe Studio",
  },
  {
    label: "Ticket Price:",
    value: "$39",
  },
  {
    label: "Date:",
    value: "Aug 5, 2024",
  },
  {
    label: "Time:",
    value: "8:00 PM – 8:00 PM",
  },
];

export default function FeaturedMusicFestivalSection() {
  return (
    <section className="w-full bg-[#F5EFE8] py-[100px] pb-[80px]">
      <div className="mx-auto flex w-full max-w-[1351px] flex-col gap-12 px-4 xl:px-0">
        
        {/* Top Content */}
        <div className="flex flex-col items-start gap-7">

          {/* Category */}
          <div className="flex flex-col items-start gap-[6px]">
            <span className="h-[1px] w-[64px] bg-[#9B251E]" />

            <p className="font-lora text-[22px] font-medium leading-[28.42px] text-[#9B251E]">
              Marketing
            </p>

            <span className="h-[1px] w-[64px] bg-[#9B251E]" />
          </div>

          {/* Title */}
          <h2
            className="
              max-w-[902px]
              font-[NewYork]
              text-[42px]
              font-normal
              leading-[115%]
              tracking-[0]
              text-[#151515]
              sm:text-[54px]
              lg:text-[72px]
              xl:text-[94px]
            "
          >
            Rhythm Blast Music Festival
          </h2>

          {/* Description */}
          <p className="max-w-[902px] font-lora text-[18px] leading-[26px] text-[#151515]">
            The main attraction of the evening — an electrifying live
            performance at the “Rhythm Blast Festival.
          </p>

          {/* Button */}
          <button
            className="
              flex h-[60px] w-full items-center justify-center
              rounded-full bg-[#9B251E]
              px-4
              font-lora text-[18px] font-semibold text-white
              transition-all duration-300 hover:opacity-90
              sm:w-[280px]
            "
          >
            Book Event
          </button>

          {/* Event Details */}
          <div
            className="
              mt-3 flex w-full flex-col gap-6
              sm:flex-row sm:flex-wrap
              xl:flex-nowrap xl:gap-[148px]
            "
          >
            {eventDetails.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 min-w-[140px]"
              >
                <p className="font-lora text-[16px] md:text-[20px] leading-[140%] md:leading-[100%] text-[#151515] opacity-70">
                  {item.label}
                </p>

                <p className="font-lora text-[18px] md:text-[20px] leading-[140%] md:leading-[100%] text-[#151515] font-medium">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Feature Image */}
        <div className="overflow-hidden rounded-[10px]">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2000&auto=format&fit=crop"
            alt="Rhythm Blast Music Festival"
            className="
              h-[260px] w-full object-cover
              md:h-[380px]
              xl:h-[500px]
            "
          />
        </div>

        {/* Bottom Divider */}
        <div className="mt-8 w-full border-t border-[#717276]" />

      </div>
    </section>
  );
}
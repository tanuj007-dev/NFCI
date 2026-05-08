// RecentEventsSection.jsx

import React, { useState } from "react";

const events = [
  {
    id: 1,
    title: "The Global Rise of Modern Music Festivals",
    date: "Oct 12, 2025",
    description:
      "Join global experts as they discuss the latest breakthroughs in AI, product design, and digital transformation.",
    image:
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=1800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Luxury Night Experience & Creative Networking",
    date: "Nov 03, 2025",
    description:
      "An immersive gathering where innovators and creatives connect through premium experiences.",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Future of Design & Modern Collaboration",
    date: "Dec 18, 2025",
    description:
      "Exploring how modern brands are redefining collaboration, creativity, and event experiences.",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Creative Dining & Editorial Event Culture",
    date: "Jan 22, 2026",
    description:
      "A sophisticated evening celebrating visual storytelling, culinary artistry, and modern networking.",
    image:
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1800&auto=format&fit=crop",
  },
];

export default function RecentEventsSection() {
  const [activeEvent, setActiveEvent] = useState(events[0]);

  return (
    <section className="w-full bg-[#F5EFE8] py-[45px] md:py-[100px] overflow-hidden">
      <div className="max-w-[1334px] mx-auto px-4 xl:px-0 flex flex-col gap-6 md:gap-12">
        {/* TOP CONTENT */}
        <div className="flex flex-col items-start gap-3 md:gap-4">
          {/* LABEL */}
          <div className="flex flex-col gap-[5px]">
            <div className="w-[98px] h-[1px] bg-[#9B251E]/50" />

            <p className="font-[Lora] text-[22px] leading-[28px] font-medium text-[#9B251E]">
              Recent Event
            </p>

            <div className="w-[98px] h-[1px] bg-[#9B251E]/50" />
          </div>

          {/* HEADING */}
          <h2
            className="
              text-[#151515]
              text-[36px]
              md:text-[58px]
              xl:text-[58px]
              leading-[100%]
              font-normal
            "
            style={{
              fontFamily: "NewYork, serif",
            }}
          >
            Recent EventS
          </h2>

          {/* DESCRIPTION */}
          <p className="font-[Lora] text-[17px] md:text-[18px] leading-[26px] text-[#151515]">
            Our recent event brought together creative minds to share ideas.
          </p>
        </div>

        {/* SHOWCASE */}
        <div
          className="
            relative
            w-full
            h-[500px]
            md:h-[720px]
            xl:h-[848px]
            rounded-[10px]
            overflow-hidden
          "
        >
          {/* BACKGROUND IMAGE */}
          <img
            src={activeEvent.image}
            alt={activeEvent.title}
            className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
              transition-all
              duration-1000
              ease-in-out
            "
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/35 z-10" />

          {/* CONTENT CARD */}
          <div
            className="
              absolute
              left-1/2
              -translate-x-1/2
              bottom-[140px]
              md:bottom-[188px]
              z-20
              w-[92%]
              xl:w-[1252px]
              bg-[#FFF7ED]
              rounded-[10px]
              px-6
              md:px-8
              pt-6
              md:pt-8
              pb-[100px]
              md:pb-[145px]
              xl:pb-[155px]
              flex
              flex-col
              gap-3
              transition-all
              duration-700
              ease-in-out
            "
          >
            {/* TITLE */}
            <h3
              className="
                text-[#151515]
                text-[24px]
                xl:text-[28px]
                leading-[115%]
                font-semibold
              "
              style={{
                fontFamily: "Cormorant Garamond, serif",
              }}
            >
              {activeEvent.title}
            </h3>

            {/* DATE */}
            <p className="font-[Lora] text-[17px] md:text-[18px] leading-[100%] text-[#707070] font-medium">
              {activeEvent.date}
            </p>

            {/* DESCRIPTION */}
            <p className="font-[Lora] text-[17px] md:text-[18px] leading-[150%] text-black max-w-[900px]">
              {activeEvent.description}
            </p>
          </div>

          {/* THUMBNAIL GALLERY */}
          <div
            className="
              absolute
              left-1/2
              -translate-x-1/2
              bottom-[18px]
              md:bottom-[26px]
              z-30
              w-[92%]
              xl:w-[1252px]
              overflow-x-auto
              scrollbar-hide
            "
          >
            <div className="flex min-w-max xl:min-w-full gap-2">
              {events.map((event) => {
                const isActive = activeEvent.id === event.id;

                return (
                  <button
                    key={event.id}
                    onMouseEnter={() => setActiveEvent(event)}
                    onClick={() => setActiveEvent(event)}
                    className={`
                      relative
                      w-[200px]
                      md:w-[260px]
                      xl:w-[313px]
                      h-[100px]
                      md:h-[180px]
                      xl:h-[213px]
                      overflow-hidden
                      rounded-[10px]
                      border
                      flex-shrink-0
                      transition-all
                      duration-700
                      ease-in-out
                      ${
                        isActive
                          ? "border-white shadow-[0_0_25px_rgba(255,255,255,0.35)] z-10 scale-[1.02]"
                          : "border-white/80"
                      }
                    `}
                  >
                    {/* IMAGE */}
                    <img
                      src={event.image}
                      alt={event.title}
                      className="
                        w-full
                        h-full
                        object-cover
                        transition-transform
                        duration-1000
                        ease-in-out
                        hover:scale-105
                      "
                    />

                    {/* OVERLAY */}
                    <div
                      className={`
                        absolute
                        inset-0
                        transition-all
                        duration-700
                        ease-in-out
                        ${
                          isActive
                            ? "bg-black/5"
                            : "bg-black/20 hover:bg-black/5"
                        }
                      `}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
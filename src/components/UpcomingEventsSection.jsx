// File: UpcomingEventsSection.jsx

import React, { useState } from "react";

const eventsData = [
  {
    id: 1,
    category: "Music Festival",
    title: "Women’s Day Celebration 2026 at NFCI",
    date: "08 March, 2026",
    time: "12:00 am - 12:01 am",
    status: "upcoming",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    category: "Music Festival",
    title: "Women’s Day Celebration 2026 at NFCI",
    date: "08 March, 2026",
    time: "12:00 am - 12:01 am",
    status: "upcoming",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    category: "Music Festival",
    title: "The Global Rise of Modern Music Festivals",
    date: "Oct 12, 2025",
    status: "archived",
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    category: "Music Festival",
    title: "The Global Rise of Modern Music Festivals",
    date: "Oct 12, 2025",
    status: "archived",
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    category: "Music Festival",
    title: "The Global Rise of Modern Music Festivals",
    date: "Oct 12, 2025",
    status: "upcoming",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 6,
    category: "Music Festival",
    title: "The Global Rise of Modern Music Festivals",
    date: "Oct 12, 2025",
    status: "archived",
    image:
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1200&auto=format&fit=crop",
  },
];

const filters = ["All", "Upcoming", "Archived"];

const EventCard = ({ event }) => {
  return (
    <article
      className="
        group
        flex
        flex-col
        overflow-hidden
        rounded-[20px]
        border
        border-[#FFF7ED]
        bg-[#FFF7ED]

        p-[10px]
        transition-all
        duration-300
        ease-out
        hover:-translate-y-2
        hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]
        cursor-pointer
      "
    >
      <div className="overflow-hidden rounded-[10px]">
        <img
          src={event.image}
          alt={event.title}
          className="
            h-[288px]
            w-full
            rounded-[10px]
            object-cover
            transition-transform
            duration-500
            group-hover:scale-[1.03]
          "
        />
      </div>

      <div className="flex flex-col gap-4 px-[14px] py-[16px]">
        <span
          className="
            font-serif
            text-[12px]
            font-normal
            leading-[17.1px]
            text-[#9B251E]
          "
          style={{ fontFamily: "Lora, serif" }}
        >
          {event.category}
        </span>

        <h3
          className="
            line-clamp-2
            text-[28px]
            
            leading-[115%]
            tracking-normal
            text-[#151515]
          "
          style={{ fontFamily: '"Cormorant Garamond"', }}
        >
          {event.title}
        </h3>

        <div
          className="
            flex
            flex-wrap
            items-center
            gap-3
            text-[14px]
            font-normal
            text-[#6B6B6B]
          "
          style={{ fontFamily: "Lora, serif" }}
        >
          <span className="text-[#9B251E]">{event.date}</span>

          {event.time && (
            <>
              <span className="h-[4px] w-[4px] rounded-full bg-[#B0B0B0]" />
              <span>{event.time}</span>
            </>
          )}
        </div>
      </div>
    </article>
  );
};

export default function UpcomingEventsSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredEvents =
    activeFilter === "All"
      ? eventsData
      : eventsData.filter(
          (event) =>
            event.status.toLowerCase() === activeFilter.toLowerCase()
        );

  return (
    <section className="w-full bg-[#FFF7ED] py-[100px] lg:px-8 px-5 overflow-hidden">
      <div
        className="
          mx-auto
          flex
          max-w-[1344px]
          flex-col
          items-center
          gap-14
        "
      >
        {/* Header */}
        <div
          className="
            flex
            w-full
            max-w-[902px]
            flex-col
            items-center
            gap-5
            text-center
          "
        >
          {/* Label */}
          <div
            className="
              inline-flex
              items-center
              justify-center
              border-y
              border-[#9B251E]
              px-0
              py-2
            "
          >
            <span
              className="
                text-[18px]
                font-medium
                text-[#9B251E]
              "
              style={{ fontFamily: "Lora, serif" }}
            >
              Events
            </span>
          </div>

          {/* Heading */}
          <h2
            className="
              max-w-[443px]
              text-[58px]
              font-normal
              leading-[115%]
              tracking-normal
              text-[#151515]
              lg:text-[58px]
              md:text-[48px]
              text-[36px]
            "
            style={{ fontFamily: '"Times New Roman", serif' }}
          >
            Upcoming Events
          </h2>

          {/* Filters */}
          <div
            className="
              flex
              w-full
              items-center
              justify-center
              gap-2
              overflow-x-auto
              pb-1
              scrollbar-hide
            "
          >
            {filters.map((filter) => {
              const isActive = activeFilter === filter;

              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`
                    whitespace-nowrap
                    rounded-full
                    border
                    px-5
                    py-[10px]
                    text-[18px]
                    leading-[24.64px]
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "border-[#9B251E] bg-[#9B251E] text-[#FDFCFC] font-semibold"
                        : "border-[#9B251E] bg-transparent text-[#9B251E] font-semibold hover:bg-[#9B251E] hover:text-white"
                    }
                  `}
                  style={{ fontFamily: "Lora, serif" }}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        {/* Events Grid */}
        <div
          className="
            grid
            w-full
            grid-cols-1
            gap-6
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}
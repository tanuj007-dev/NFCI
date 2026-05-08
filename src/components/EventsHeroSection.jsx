// EventsHeroSection.jsx

import React from "react";
import { Ticket } from "lucide-react";
import eventBanner from "../assets/event-banner.jpg";

export default function EventsHeroSection() {
  return (
    <section className="relative w-full overflow-hidden min-h-[600px] lg:h-[700px]">
      {/* Background Image */}
      <img
        src={eventBanner}
        alt="Luxury event banner"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55 z-[1]" />

      {/* Main Content */}
      <div className="relative z-[2] flex min-h-[600px] lg:min-h-[700px] w-full items-end justify-between px-5 pb-12 pt-32 md:px-10 md:pb-[70px] lg:px-[42px]">
        <div className="flex w-full flex-col gap-10 lg:gap-14 lg:flex-row lg:items-end lg:justify-between">
          {/* LEFT CONTENT */}
          <div className="flex flex-col gap-7">
            {/* Heading */}
            <h1
              className="
                text-[48px]
                font-normal
                leading-[54px]
                text-[#FDFCFC]
                md:text-[48px]
                md:leading-[54px]
                lg:text-[59.26px]
                lg:leading-[65.5px]
              "
              style={{
                fontFamily: "NewYork, serif",
              }}
            >
              Events
            </h1>

            {/* Meta Row */}
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-10 lg:gap-[72px]">
              {/* Meta Item */}
              <div className="flex flex-col gap-2">
                <span
                  className="uppercase text-[#FDFCFC] tracking-wider"
                  style={{
                    fontFamily: "Lora, serif",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "140%",
                  }}
                >
                  LOS ANGELES, CALIFORNIA
                </span>
              </div>

              {/* Meta Item */}
              <div className="flex flex-col gap-2">
                <span
                  className="uppercase text-[#FDFCFC] tracking-wider"
                  style={{
                    fontFamily: "Lora, serif",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "140%",
                  }}
                >
                  MAY 12, 2026 EMERALD EVENT ARENA
                </span>
              </div>

              {/* Meta Item */}
              <div className="flex flex-col gap-2">
                <span
                  className="uppercase text-[#FDFCFC] tracking-wider"
                  style={{
                    fontFamily: "Lora, serif",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "140%",
                  }}
                >
                  GENERAL TICKET: $249
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex w-full flex-col items-start gap-7 lg:w-[547px] lg:items-end">
            {/* Description */}
            <p
              className="
                w-full
                text-left
                text-[#FDFCFC]
                lg:w-[547px]
                lg:text-right
              "
              style={{
                fontFamily: "Lora, serif",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "160%",
              }}
            >
              India's premier institute for Hotel Management & Culinary Arts.
              Transform your passion into a rewarding career with world-class
              training.
            </p>

            {/* CTA Button */}
            <button
              className="
                group
                flex
                h-[71px]
                w-full
                overflow-hidden
                rounded-[10px]
                bg-[#9B251E]
                transition-all
                duration-300
                hover:scale-[1.02]
                hover:bg-[#7F1E18]
                md:w-[300px]
                lg:w-[330px]
              "
            >
              {/* Left Icon Area */}
              <div className="flex h-[71px] w-[82px] items-center justify-center bg-white shrink-0">
                <Ticket
                  size={30}
                  strokeWidth={1.8}
                  className="text-black"
                />
              </div>

              {/* Button Text */}
              <div className="flex flex-1 items-center justify-center px-5">
                <span
                  className="text-center md:text-right text-white"
                  style={{
                    fontFamily: "Lora, serif",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "120%",
                  }}
                >
                  Get your ticket now for 50% off
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
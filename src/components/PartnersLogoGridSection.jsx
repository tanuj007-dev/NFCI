// PartnersLogoGridSection.jsx

import React from "react";

const logos = [
  {
    id: 1,
    text: "Logoipsum",
    color: "#0E1534",
    iconBg: "#0E1534",
  },
  {
    id: 2,
    text: "LOCO",
    color: "#2E3D49",
    iconBg: "#2E3D49",
  },
  {
    id: 3,
    text: "Logoipsum",
    color: "#1D7AF7",
    iconBg: "#1D7AF7",
  },
  {
    id: 4,
    text: "logo ipsum",
    color: "#6DAA14",
    iconBg: "#6DAA14",
  },
  {
    id: 5,
    text: "Logoipsum",
    color: "#111111",
    iconBg: "#111111",
  },
  {
    id: 6,
    text: "Logoipsum",
    color: "#8B5CF6",
    iconBg: "#8B5CF6",
  },
];

const LogoCard = ({ logo }) => {
  return (
    <div
      className="
        group
        bg-white
        h-auto
        min-h-[160px]
        md:h-[204px]
        flex
        items-center
        justify-center
        px-8
        md:px-[112px]
        py-12
        md:py-[82px]
        cursor-pointer
        transition-all
        duration-300
        ease-out
        hover:-translate-y-2
        hover:shadow-[0_18px_50px_rgba(0,0,0,0.08)]
      "
    >
      <div className="flex items-center gap-3">
        <div
          className="w-7 h-7 md:w-9 md:h-9 rounded-full flex items-center justify-center shrink-0"
          style={{ backgroundColor: logo.iconBg }}
        >
          <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-white opacity-90" />
        </div>

        <span
          className="
            text-[28px]
            md:text-[36px]
            leading-none
            font-bold
            tracking-[-0.02em]
          "
          style={{ color: logo.color }}
        >
          {logo.text}
        </span>
      </div>
    </div>
  );
};

export default function PartnersLogoGridSection() {
  return (
    <section className="w-full bg-[#FFF7ED] py-[100px] px-5 md:px-8 overflow-hidden">
      <div
        className="
          max-w-[1358px]
          mx-auto
          flex
          flex-col
          items-center
          gap-14
        "
      >
        {/* Heading */}
        <h2
          className="
            max-w-[1146px]
            text-center
            uppercase
            text-black
            font-bold
            leading-[160%]
            tracking-[0]
            text-[20px]
            md:text-[24px]
            xl:text-[28px]
          "
          style={{
            fontFamily: "Lora, serif",
          }}
        >
          WE ARE A MODERN EVENT EXPERIENCE PLATFORM BUILT TO BRING
          PEOPLE TOGETHER. FROM WORLDCLASS CONFERENCES TO CREATIVE
          FESTIVALS, OUR MISSION IS TO CREATE MEANINGFUL MOMENTS THAT
          SPARK INNOVATION, COLLABORATION, AND LIFELONG CONNECTIONS.
        </h2>

        {/* Logo Grid */}
        <div
          className="
            w-full
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-[13px]
          "
        >
          {logos.map((logo) => (
            <LogoCard key={logo.id} logo={logo} />
          ))}
        </div>
      </div>
    </section>
  );
}
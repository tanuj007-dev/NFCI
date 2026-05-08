// FeaturedEventBanner.jsx

import featuredEventImage from "../assets/featured-event.png";

export default function FeaturedEventBanner() {
  return (
    <section className="w-full bg-[#FFF7ED] py-[100px] px-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-[1334px] flex-col gap-[34px]">
        {/* Featured Image Banner */}
        <div className="group flex flex-col">
          <div className="relative h-[320px] w-full cursor-pointer overflow-hidden rounded-[10px] md:h-[520px] xl:h-[660px]">
            {/* Background Image */}
            <img
              src={featuredEventImage}
              alt="Christmas Cake Mixing Ceremony"
              className="h-full w-full rounded-[10px] object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 z-[1] rounded-[10px] bg-[rgba(21,21,21,0.53)]" />

            {/* Center Title */}
            <div className="absolute inset-0 z-[2] flex items-center justify-center px-4">
              <h2
                className="
                  max-w-[597px]
                  text-center
                  font-[Cormorant_Garamond]
                  text-[34px]
                  font-semibold
                  leading-[115%]
                  text-white
                  mix-blend-difference
                  transition-opacity
                  duration-300
                  group-hover:opacity-85
                  sm:text-[44px]
                  md:text-[56px]
                  xl:text-[80px]
                "
              >
                View Event Details
              </h2>
            </div>
          </div>

          {/* Divider */}
          <div className="mx-auto mt-[28px] h-px w-full bg-[#717276]" />
        </div>

        {/* Event Details */}
        <div className="flex w-full max-w-[754px] flex-col gap-4">
          {/* Event Title */}
          <h3
            className="
              font-[Cormorant_Garamond]
              text-[28px]
            
              leading-[115%]
              text-[#151515]
              sm:text-[34px]
              md:text-[40px]
              xl:text-[44px]
            "
          >
            Christmas Cake Mixing Ceremony in NFCI
          </h3>

          {/* Event Date */}
          <p
            className="
              font-[Lora]
              text-[18px]
              font-medium
              leading-[100%]
              text-[#707070]
              md:text-[20px]
              xl:text-[24px]
            "
          >
            23 April, 2026
          </p>
        </div>
      </div>
    </section>
  );
}
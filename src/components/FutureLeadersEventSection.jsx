// FutureLeadersEventSection.jsx

import eventImage from "../assets/future-leaders-event.jpg";

export default function FutureLeadersEventSection() {
  return (
    <section className="w-full overflow-hidden bg-[#01101D]">
      <div
        className="
          mx-auto
          grid
          min-h-[851px]
          w-full
          max-w-[1440px]
          grid-cols-1
          lg:grid-cols-[1fr_716px]
        "
      >
        {/* LEFT CONTENT */}
        <div
          className="
            relative
            flex
            flex-col
            justify-between
            bg-[#01101D]
            px-6
            py-12
            sm:px-10
            md:px-14
            md:py-16
            lg:pl-[98px]
            lg:pr-10
            lg:pt-[100px]
            lg:pb-[98px]
          "
        >
          {/* Heading */}
          <div>
            <h2
              className="
                max-w-[399px]
                font-serif
                text-[34px]
                font-normal
                leading-[100%]
                tracking-normal
                text-[#FDFDFD]
                sm:text-[40px]
                md:text-[44px]
                lg:text-[49.08px]
              "
              style={{
                fontFamily: "NewYork, serif",
              }}
            >
              Future Leaders
              <br />
              Global Event
            </h2>
          </div>

          {/* Description */}
          <div className="mt-16 lg:mt-0">
            <p
              className="
                max-w-[478px]
                font-serif
                text-[16px]
                font-normal
                leading-[26px]
                tracking-normal
                text-white
                sm:text-[18px]
                lg:text-[20px]
                lg:leading-[26.59px]
              "
              style={{
                fontFamily: "Lora, serif",
              }}
            >
              Each workshop focuses on actionable insights—from leadership to
              product design—so you can apply instantly.
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="
            relative
            h-[420px]
            overflow-hidden
            sm:h-[520px]
            lg:h-[851px]
          "
        >
          <img
            src={eventImage}
            alt="Future Leaders Global Event"
            className="h-full w-full object-cover object-center"
          />

          {/* Subtle editorial overlay */}
          <div
            className="
              absolute
              inset-y-0
              left-0
              w-32
              bg-gradient-to-r
              from-[#01101D]/70
              via-[#01101D]/25
              to-transparent
              pointer-events-none
            "
          />
        </div>
      </div>
    </section>
  );
}
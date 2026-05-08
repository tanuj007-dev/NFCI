// File: EventStatsSection.jsx

import React from "react";
import { motion } from "framer-motion";

const stats = [
  {
    number: "60+",
    title: "Expert Speakers",
    description:
      "Industry leaders from top global brands shared insights.",
  },
  {
    number: "95%",
    title: "Satisfaction Rate",
    description:
      "Professionals from around the world joined last year’s event.",
  },
  {
    number: "5,000+",
    title: "Attendees",
    description:
      "Professionals from around the world joined last year’s event.",
  },
];

export default function EventStatsSection() {
  return (
    <section className="w-full bg-[#00111D] py-[60px] md:py-[80px] overflow-hidden">
      <div className="max-w-[1293px] mx-auto flex flex-wrap lg:flex-nowrap justify-between items-start gap-y-10 md:gap-y-12 gap-x-10 px-6 xl:px-0">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: index * 0.12,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="w-full sm:w-[calc(50%-20px)] lg:w-auto flex-1 flex flex-col items-center text-center gap-[12px] md:gap-[18px]"
          >
            <h2
              className="
                text-[#E2425C]
                font-normal
                leading-[110%]
                tracking-normal
                text-[42px]
                md:text-[52px]
                lg:text-[64px]
              "
              style={{
                fontFamily: "NewYork, serif",
              }}
            >
              {item.number}
            </h2>

            <h3
              className="
                text-white
                font-normal
                leading-none
                tracking-normal
                text-[28px]
                md:text-[36px]
                lg:text-[44px]
              "
              style={{
                fontFamily: "NewYork, serif",
              }}
            >
              {item.title}
            </h3>

            <p
              className="
                w-full
                max-w-[330px]
                text-white
                font-normal
                leading-[150%]
                tracking-normal
                text-[14px]
                md:text-[16px]
                lg:text-[18px]
              "
              style={{
                fontFamily: "Lora, serif",
              }}
            >
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
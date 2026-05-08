// File: AboutEventGallerySection.jsx

import React, { useState } from "react";
import { motion } from "framer-motion";

const galleryImages = [
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop",
];

const paragraph =
  "National Finishing and Cookery Institute (NFCI) is both research-intensive and learner-centred where students across India master excellence in the field of food and hospitality. The culinary centre is an amalgamation of opportunities, connections and prominent placements.";

export default function AboutEventGallerySection() {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <section className="w-full bg-[#F5EFE8] py-[80px] overflow-hidden">
      <div className="max-w-[1351px] mx-auto flex flex-col gap-12 px-5 xl:px-0">
        
        {/* Top Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[250px_833px] justify-between items-start gap-10 lg:gap-0">
          
          {/* Left Heading */}
          <div>
            <h2 className="text-[#151515] leading-[115%] tracking-[0] text-[28px] md:text-[34px] lg:text-[40px] font-[Cormorant_Garamond]">
              (About Event)
            </h2>
          </div>

          {/* Right Text */}
          <div className="flex flex-col gap-[42px] max-w-full lg:max-w-[833px]">
            <p className="text-[#5F5E5E] font-normal leading-[160%] tracking-[0] text-[16px] md:text-[20px] lg:text-[24px] font-[Lora]">
              {paragraph}
            </p>

            <p className="text-[#5F5E5E] font-normal leading-[160%] tracking-[0] text-[16px] md:text-[20px] lg:text-[24px] font-[Lora]">
              {paragraph}
            </p>
          </div>
        </div>

        {/* Main Feature Image */}
        <motion.div
          key={activeImage}
          initial={{ opacity: 0.85, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45 }}
          className="w-full h-[300px] md:h-[460px] lg:h-[595px] rounded-[10px] overflow-hidden"
        >
          <img
            src={galleryImages[activeImage]}
            alt="Event Showcase"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Thumbnail Gallery */}
        <div className="flex md:grid md:grid-cols-2 lg:flex gap-3 overflow-x-auto lg:overflow-visible scrollbar-hide pb-1">
          {galleryImages.slice(1).map((image, index) => {
            const actualIndex = index + 1;
            const isActive = activeImage === actualIndex;

            return (
              <motion.button
                key={actualIndex}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.25 }}
                onClick={() => setActiveImage(actualIndex)}
                className={`relative min-w-[240px] md:min-w-0 w-[240px] md:w-full lg:w-[327px] h-[220px] md:h-[250px] lg:h-[283px] rounded-[10px] overflow-hidden border transition-all duration-300 ${
                  isActive
                    ? "border-[2px] border-[#9B251E]"
                    : "border-transparent"
                }`}
              >
                <img
                  src={image}
                  alt={`Gallery Thumbnail ${actualIndex}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
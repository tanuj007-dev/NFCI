import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import nfci1 from '../assets/nfci1.png';
import nfci2 from '../assets/nfci2.png';
import nfci3 from '../assets/nfci3.png';
import nfci4 from '../assets/nfci4.png';

const Affiliations = () => {
  const cards = [
    {
      image: nfci1,
      title: "NFCI",
      subtitle: "Estd. 1990",
      desc: "Wake up to the sound of waves lapping lazily at the shore. Uncover serenity and marvel at the wealth of beauty within the glittering blue seas. Give in to the siren song of the sun, sand and surf with Beach Retreats."
    },
    {
      image: nfci2,
      title: "NSDC",
      subtitle: "",
      desc: "Wander through the storied halls of a fairy tale palace, where dreams come to life. Retreat into your majestic suite, inspired by elegance."
    },
    {
      image: nfci3,
      title: "AHLEI",
      subtitle: "",
      desc: "There is magic to be found in the energy of a bustling city. Where vibrant markets offer you everything you could imagine and centuries of history hide in the most unassuming places. Discover the world's most spectacular urban hubs."
    },
    {
      image: nfci4,
      title: "NIOS",
      subtitle: "",
      desc: "Gaze at the mist rolling in over the hill-tops from your luxurious villa. Marvel at glorious sunsets that will take your breath away from a private deck."
    }
  ];

  return (
    <section className="bg-white py-20 lg:py-20 overflow-hidden">
      <style>
        {`
          .affiliation-swiper {
            padding-bottom: 60px !important;
          }
          .affiliation-swiper .swiper-pagination-bullet {
            background: #D1D5DB;
            opacity: 1;
          }
          .affiliation-swiper .swiper-pagination-bullet-active {
            background: #9B251E;
          }
        `}
      </style>
      <div className="container mx-auto px-4 md:px-10 lg:px-20 text-center">
        {/* Header */}
        <div className="mb-12 md:mb-16 max-w-4xl mx-auto px-2">
          <div className="inline-block mb-4">
            <p className="font-lora text-[#9B251E] font-bold text-[10px] md:text-sm tracking-[0.2em] border-b-2 border-t-2 border-[#9B251E] py-1 px-4 md:px-6 uppercase">
              Affiliate program
            </p>
          </div>
          <h2 className="font-new-york text-3xl md:text-5xl lg:text-[56.84px] text-[#333333] mb-6 md:mb-8 mt-2">
            Our Affiliations
          </h2>
          <p className="font-lora mt-3 text-[#333333] text-base md:text-[18px] leading-relaxed md:leading-[25px]">
            The food industry has grown to manifold with abundant opportunities and career plans. We offer certificate courses and associate programs spanning the core of food industry.
          </p>
        </div>

        {/* Affiliation Slider */}
        <div className="mb-16">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              }
            }}
            className="affiliation-swiper"
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center">
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="max-w-full h-auto object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Footer Text */}
        <div className="max-w-5xl mx-auto space-y-4">
          <p className="font-lora text-gray-600 text-base md:text-[18px] leading-relaxed">
            Our food-centric education model helps our students to pitch attractive career options in the food business.
          </p>
          <p className="font-lora text-gray-600 text-base md:text-[18px] leading-relaxed">
            Top employers look to the NFCI when hiring, and when you grab your NFCI certification, they wish to take you on board
          </p>
        </div>
      </div>
    </section>
  );
};

export default Affiliations;


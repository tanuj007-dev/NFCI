import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Import Assets - Team
import team1 from '../assets/teanpl/0fd2d5b91bdcf29fde43522bc413bdd5b86d9f98.png';
import team2 from '../assets/teanpl/67a82c4e8f8ee9648f966db4b058f8bdb99e3118.png';
import team3 from '../assets/teanpl/609a2bc545a07fb05849b1bcd9520d5566b3ae9e.png';
import team4 from '../assets/teanpl/436752596581797a41a3fe7ddf4e25fe6b192277.png';
import team5 from '../assets/teanpl/a29c2bdad2cae278f9313ccbe37a8fb98a342961.png';
import team6 from '../assets/teanpl/c92da659e9a1b36ea7198e05217d89a24caadb10.png';
import team7 from '../assets/teanpl/efb682fd7c46dc4ec005fbf00e7bf49d0ca87f6b.png';
import team8 from '../assets/teanpl/efe2ce0e5b2f3c1bb35279ddaaf91d4db2a1b269.png';

const EventPageTeam = () => {
  const teamSwiperRef = useRef(null);

  const team = [
    { name: "P. S Nagpal", title: "Founder of Financ", image: team1 },
    { name: "P. S Nagpal", title: "Founder of Financ", image: team2 },
    { name: "Sanjeev Kumar", title: "Founder of Financ", image: team3 },
    { name: "Ravinder Kaur Nagpal", title: "Founder of Financ", image: team4 },
    { name: "Brijinder Kaur Nagpal", title: "Founder of Financ", image: team5 },
    { name: "Jasdeep Singh Nagpal", title: "Founder of Financ", image: team6 },
    { name: "Navneet Nagpal", title: "Founder of Financ", image: team7 },
    { name: "Anjna Joshi", title: "Founder of Financ", image: team8 },
  ];

  const NavButton = ({ direction, onClick }) => (
    <button 
      onClick={onClick}
      className={`absolute top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#A3231D] text-white flex items-center justify-center hover:bg-[#8B1E19] transition-all duration-300 shadow-lg cursor-pointer ${
        direction === 'left'
          ? '-left-4 md:-left-8'
          : '-right-4 md:-right-8'
      }`}
    >
      <svg
        className="w-4 h-4 md:w-6 md:h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        {direction === 'left' ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 12H5m0 0l7-7m-7 7l7 7"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 12h14m0 0l-7-7m7 7l-7 7"
          />
        )}
      </svg>
    </button>
  );

  return (
    <section className="bg-[#FFF7ED] py-16 md:py-20 overflow-hidden">
      <div className="container mx-auto px-6 md:px-20">

        {/* Team of Experts */}
        <div>
          <h2 className="font-new-york text-4xl md:text-5xl text-[#1a1a1a] text-center mb-10 md:mb-16">
            Team of Experts
          </h2>

          <div className="relative mt-10 md:mt-20">
            <NavButton
              direction="left"
              onClick={() => teamSwiperRef.current?.slidePrev()}
            />

            <NavButton
              direction="right"
              onClick={() => teamSwiperRef.current?.slideNext()}
            />

            <Swiper
              modules={[Navigation, Autoplay]}
              onBeforeInit={(swiper) => {
                teamSwiperRef.current = swiper;
              }}
              spaceBetween={20}
              slidesPerView={2}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                480: { slidesPerView: 3, spaceBetween: 20 },
                768: { slidesPerView: 4, spaceBetween: 25 },
                1024: { slidesPerView: 5, spaceBetween: 30 },
                1280: { slidesPerView: 7, spaceBetween: 30 },
              }}
              className="team-swiper"
            >
              {team.map((member, i) => (
                <SwiperSlide key={i}>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-full aspect-[3/4] mb-4 md:mb-6 overflow-hidden rounded-lg">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover scale-[1.1]"
                      />
                    </div>

                    <h3 className="font-lora text-[#9B251E] font-bold text-sm md:text-base mb-1">
                      {member.name}
                    </h3>

                    <p className="font-lora text-gray-500 text-xs md:text-sm italic">
                      {member.title}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EventPageTeam;
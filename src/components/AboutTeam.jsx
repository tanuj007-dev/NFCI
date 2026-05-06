import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Import Assets - Affiliations (User said team folder)
import aff1 from '../assets/team/7e9035e8b160788a9439905085b09eab0c92a163.png';
import aff2 from '../assets/team/25a3c1a89a95fb5013725dbe677b9c2d03334182.png';
import aff3 from '../assets/team/234322e7f333d5184fb8ec46c3a6e1f97252d852.png';
import aff4 from '../assets/team/257318b293e98268d98bef5a2e96a912cba6160b.png';
import aff5 from '../assets/team/999392ffa2a7096f95ce534870cca38f3a377a59.png';

// Import Assets - Team (User said teanpl folder)
import team1 from '../assets/teanpl/0fd2d5b91bdcf29fde43522bc413bdd5b86d9f98.png';
import team2 from '../assets/teanpl/67a82c4e8f8ee9648f966db4b058f8bdb99e3118.png';
import team3 from '../assets/teanpl/609a2bc545a07fb05849b1bcd9520d5566b3ae9e.png';
import team4 from '../assets/teanpl/436752596581797a41a3fe7ddf4e25fe6b192277.png';
import team5 from '../assets/teanpl/a29c2bdad2cae278f9313ccbe37a8fb98a342961.png';
import team6 from '../assets/teanpl/c92da659e9a1b36ea7198e05217d89a24caadb10.png';
import team7 from '../assets/teanpl/efb682fd7c46dc4ec005fbf00e7bf49d0ca87f6b.png';
import team8 from '../assets/teanpl/efe2ce0e5b2f3c1bb35279ddaaf91d4db2a1b269.png';

// Import Assets - Trailblazers
import tb1 from '../assets/Trailblazers/00a7d67c8b421072fa4d7f80cb86cb3d37ce815d.png';
import tb2 from '../assets/Trailblazers/0d5c103ef645c8eca69c9627e7980011672eab90.png';
import tb3 from '../assets/Trailblazers/6ca93e6b747ca0c997289a51b7342eab32da83f3.png';
import tb4 from '../assets/Trailblazers/91baaf6fff90a407bbdfea840757d67b86e8c966.png';
import tb5 from '../assets/Trailblazers/7334fb3d95e2cfef608cae908a3a3366c452daac.png';
import tb6 from '../assets/Trailblazers/acdc6ab7a05e0aac508a5d9241b0001c5747e7d2.png';
import tb7 from '../assets/Trailblazers/ba5932c60d17d892bcb864334392fcc4945ecf1b.png';
import tb8 from '../assets/Trailblazers/f6f301b524175b24c0cb510d7aa08e9fcdbe1a24.png';

const AboutTeam = () => {
  const teamSwiperRef = useRef(null);
  const trailblazersSwiperRef = useRef(null);

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

  const trailblazers = [
    { name: "Ayushmaan Dass", title: "Tr. & Placement", image: tb1 },
    { name: "Pawan Ahlawat", title: "HOD Academics", image: tb2 },
    { name: "Aman Chawla", title: "Project Head", image: tb3 },
    { name: "Rajeev Wadhawan", title: "HR Manager", image: tb4 },
    { name: "Shikha Narwaha", title: "Natl. Sales Head", image: tb5 },
    { name: "Akshay Chaudhary", title: "Territory Mgr", image: tb6 },
    { name: "Ram Banger", title: "Head Chef", image: tb7 },
    { name: "Ajay Chandel", title: "Exam. Controller", image: tb8 },
  ];

  const NavButton = ({ direction, onClick }) => (
    <button 
      onClick={onClick}
      className={`absolute top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#A3231D] text-white flex items-center justify-center hover:bg-[#8B1E19] transition-all duration-300 shadow-lg cursor-pointer ${direction === 'left' ? '-left-6 md:-left-8' : '-right-6 md:-right-8'}`}
    >
      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {direction === 'left' ? (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m0 0l7-7m-7 7l7 7" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m0 0l-7-7m7 7l-7 7" />
        )}
      </svg>
    </button>
  );

  return (
    <section className="bg-white py-20 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-10 md:px-20 lg:px-20">
        
        {/* Our Affiliations */}
        <div className="mb-24 lg:mb-32">
          <h2 className="font-new-york text-4xl md:text-[32px] text-[#1a1a1a] text-center mb-16">
            Our Affiliations
          </h2>
          <div className="flex flex-wrap mt-10 justify-center items-center gap-8 md:gap-16 lg:gap-12">
            {[aff1, aff2, aff3, aff4, aff5].map((aff, i) => (
              <div key={i} className="w-24 md:w-32 lg:w-40 flex items-center justify-center transition-all duration-500">
                <img src={aff} alt="Affiliation" className="max-w-full h-auto object-contain" />
              </div>
            ))}
          </div>
        </div>

        {/* Team of Experts */}
        <div className="mb-24 lg:mb-32">
          <h2 className="font-new-york text-4xl md:text-5xl text-[#1a1a1a] text-center mb-16">
            Team of Experts
          </h2>
          <div className="relative">
            <NavButton direction="left" onClick={() => teamSwiperRef.current?.slidePrev()} />
            <NavButton direction="right" onClick={() => teamSwiperRef.current?.slideNext()} />
            
            <Swiper
              modules={[Navigation, Autoplay]}
              onBeforeInit={(swiper) => {
                teamSwiperRef.current = swiper;
              }}
              spaceBetween={15}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              breakpoints={{
                640: { slidesPerView: 3 },
                1024: { slidesPerView: 7 },
                1440: { slidesPerView: 7 }
              }}
              className="team-swiper"
            >
              {team.map((member, i) => (
                <SwiperSlide key={i}>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-full aspect-[3/4] mb-6 overflow-hidden">
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="font-lora text-nfci-red font-bold text-sm md:text-base mb-1">
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

        {/* Our Trailblazers */}
        <div>
          <h2 className="font-new-york text-4xl md:text-5xl text-[#1a1a1a] text-center mb-16">
            Our Trailblazers
          </h2>
          <div className="relative">
            <NavButton direction="left" onClick={() => trailblazersSwiperRef.current?.slidePrev()} />
            <NavButton direction="right" onClick={() => trailblazersSwiperRef.current?.slideNext()} />
            
            <Swiper
              modules={[Navigation, Autoplay]}
              onBeforeInit={(swiper) => {
                trailblazersSwiperRef.current = swiper;
              }}
              spaceBetween={15}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              breakpoints={{
                640: { slidesPerView: 3 },
                1024: { slidesPerView: 7 },
                1440: { slidesPerView: 7 }
              }}
              className="trailblazers-swiper"
            >
              {trailblazers.map((member, i) => (
                <SwiperSlide key={i}>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-full aspect-[3/4] mb-6 overflow-hidden">
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="font-lora text-nfci-red font-bold text-sm md:text-base mb-1">
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

export default AboutTeam;

import React from 'react';
import icon1 from '../assets/1.png';
import icon2 from '../assets/2.png';
import icon3 from '../assets/3.png';
import icon4 from '../assets/4.png';
import icon5 from '../assets/5.png';
import icon6 from '../assets/6.png';

const WhyChooseUs = () => {
  const cards = [
    {
      icon: icon1,
      title: "Quality Education",
      desc: "We offer a complete spectrum of culinary, grooming and finishing programs."
    },
    {
      icon: icon2,
      title: "High Success Rate",
      desc: "On-the-job training schedules with 100% placement with esteemed hospitality establishments."
    },
    {
      icon: icon3,
      title: "Holistic Environment",
      desc: "Imparting social and life skills in every program for a holistic professional training tenure."
    },
    {
      icon: icon4,
      title: "Affiliations",
      desc: "Curriculum fortified with National (NSDC) and International (AHLEI) Accreditation."
    },
    {
      icon: icon5,
      title: "Best Learning Experience",
      desc: "Small-sized batches for best hands-on learning experience."
    },
    {
      icon: icon6,
      title: "Mega Workshops",
      desc: "Participation and representation in all key food festivals and contests."
    }
  ];

  return (
    <section className="bg-white py-20 md:py-20">
      <div className="container mx-auto px-4 md:px-10 lg:px-22   text-center">
        {/* Header */}
        <div className="mb-16 md:mb-24 max-w-4xl mx-auto">
          <div className="inline-block mb-4">
            <p className="font-lora text-nfci-red font-bold text-sm tracking-[0.2em] border-b-2 border-t-2 border-nfci-red py-1 px-6 uppercase">
              Why Choose Us?
            </p>
          </div>
          <h2 className="font-new-york text-4xl md:text-5xl lg:text-[56.84px] text-[#333333] mt-5">
            Why We are Unique
          </h2>
          <p className="font-lora mt-5 text-[#333333] text-lg md:text-[18px] leading-[25px]">
            At NFCI Hospitality, we go beyond traditional culinary education. We are a melting pot of innovation and tradition, where cutting-edge techniques meet time-honored recipes, and creativity knows no bounds
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 rounded-[30px] p-6 md:p-8 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all duration-300 transform hover:translate-y-[-10px] group"
            >
              <div className="mb-4 w-16 h-16 flex items-center justify-center transition-all duration-300">
                <img 
                  src={card.icon} 
                  alt={card.title} 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <h3 className="font-new-york text-2xl md:text-[28px] font-bold text-[#1D2026] mb-2">
                {card.title}
              </h3>
              <p className="font-lora text-gray-500 text-base leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

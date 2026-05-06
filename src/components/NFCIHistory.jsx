import React from 'react';
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';

const NFCIHistory = () => {
  const cards = [
    {
      title: "Our Mission",
      desc: "Mentoring towards empowerment",
      image: img1
    },
    {
      title: "Our Vision",
      desc: "To enlighten the path of learner towards employability, sustainability and entrepreneurship by providing essential skillset.",
      image: img2
    },
    {
      title: "Core Values",
      desc: "Respect, honesty, commitment growth.",
      image: img3
    }
  ];

  return (
    <section className="bg-[#01101D] py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 mb-20 lg:mb-32">
          <div className="lg:w-1/3">
            <h2 className="font-new-york text-4xl md:text-5xl lg:text-[49px] leading-tight text-white">
              A glance into NFCI History
            </h2>
          </div>
          <div className="lg:w-2/3 space-y-8">
            <p className="font-lora text-white/80 text-[18px] leading-[29px]">
              The institute came into existence in 1990 as Nikhar hobby center. Since the time is always been a powerful factor in defining the success of an individual or an institute, by 1999 it surfaced its nomenclature, named as NFCI – National Finishing and Cookery Institution. The inference of the name is the right testimony of the progress attained during 1990 till date.
            </p>
            <p className="font-lora text-white/80 text-[18px] leading-[29px]">
              The central institute is located in Model Town, Jalandhar. To meet the rising need more campuses have been inaugurated at Amritsar (Punjab), Ludhiana (Punjab), Mohali (Punjab), Patiala (Punjab), Maqsudan (Punjab), Barsar (Himachal Pradesh), Solan (Himachal Pradesh), Kangra (Himachal Pradesh), Mandi (Himachal Pradesh), Chamba (Himachal Pradesh), Belgaum (Karnataka), Lucknow (Uttar Pradesh), Varanasi (Uttar Pradesh), Karnal (Haryana), Hamirpur (Himachal Pradesh), Dehradun (Uttarakhand), Bathinda (Punjab), Una (Himachal Pradesh).
            </p>
          </div>
        </div>

        {/* Cards Section */} 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="bg-white rounded-[20px] p-6 md:p-8 flex flex-col items-center text-center shadow-xl transform hover:translate-y-[-5px] transition-all duration-300 min-h-[280px] justify-center"
            >
              <div className="mb-4">
                <img src={card.image} alt={card.title} className="w-16 h-16 object-contain" />
              </div>
              <h3 className="font-new-york text-lg md:text-xl text-[#1a1a1a] mb-2">
                {card.title}
              </h3>
              <p className="font-lora text-gray-500 text-sm md:text-base leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NFCIHistory;

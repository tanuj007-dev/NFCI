import React from 'react';

const NFCIHistory = () => {
  const cards = [
    {
      title: "Our Mission",
      desc: "Mentoring towards empowerment",
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#a12c20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          <path d="M12 7l1.5 3 3.5.5-2.5 2.5.5 3.5L12 15l-3 1.5.5-3.5-2.5-2.5 3.5-.5L12 7z" />
        </svg>
      )
    },
    {
      title: "Our Vision",
      desc: "To enlighten the path of learner towards employability, sustainability and entrepreneurship by providing essential skillset.",
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#a12c20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )
    },
    {
      title: "Core Values",
      desc: "Respect, honesty, commitment growth.",
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#a12c20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.72-8.72 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      )
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="bg-white rounded-[20px] p-8 md:p-10 flex flex-col items-center text-center shadow-xl transform hover:translate-y-[-10px] transition-all duration-300 min-h-[320px] justify-center"
            >
              <div className="mb-4">
                {card.icon}
              </div>
              <h3 className="font-new-york text-xl md:text-2xl text-[#1a1a1a] mb-2">
                {card.title}
              </h3>
              <p className="font-lora text-gray-500 text-base md:text-[16px] leading-relaxed">
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

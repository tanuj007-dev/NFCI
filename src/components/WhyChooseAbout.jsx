import React from 'react';

const WhyChooseAbout = () => {
  const cards = [
    {
      title: "Labs of Excellence",
      desc: "Advanced labs and centres of excellence to give them the opportunity to work on real-life projects and cutting edge over others."
    },
    {
      title: "Experiential Training",
      desc: "Classes are designed to engage students in hands-on experience that are linked to live case handling and situation."
    },
    {
      title: "Practical School",
      desc: "Initiatives help students to undergo meaningful work experience over a period spent at NFCI."
    },
    {
      title: "Industry Exposure",
      desc: "Regular interactions with industry leaders and visits to top hospitality establishments to bridge the gap."
    }
  ];

  return (
    <section className="bg-[#01101D] py-20 lg:py-20 overflow-hidden relative">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-blue-900/10 blur-[100px] rounded-full"></div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-blue-900/10 blur-[100px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 md:px-10 lg:px-20 relative z-10">
        <h2 className="font-new-york text-3xl md:text-5xl text-white text-center mb-16 md:mb-20">
          Why Choose NFCI Institute
        </h2>

        <div className="grid grid-cols-1 mt-12 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-xl border border-white rounded-[15px] p-6 md:p-8 flex flex-col items-center text-center transition-all duration-300 hover:bg-white/10 hover:border-white/20 h-full justify-center"
            >
              <h3 className="font-new-york text-[18px] md:text-[20px] text-white mb-4 leading-tight">
                {card.title}
              </h3>
              <p className="font-lora text-white/70 text-[13px] md:text-[14px] leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseAbout;

import React from 'react';

// Import logos
import logo1 from '../assets/tariningpartners/04b4a259e9d9b6de6bb91ef3f53c3048ed96062f.png';
import logo2 from '../assets/tariningpartners/6b3e895a0c290270441a2bf4583ad0df6e1b0195 (1).png';
import logo3 from '../assets/tariningpartners/6f699572c0fbb60c74e8b65cfe25032af64c19be.png';
import logo4 from '../assets/tariningpartners/11d0decd3bb035b2218baaebecf2b21f2cb19aee.png';
import logo5 from '../assets/tariningpartners/88d33f43e6890413904c6a248f12f6c70342b0d9.png';
import logo6 from '../assets/tariningpartners/834d1d5a6adff42c6be62506a72a1afecff383e5.png';
import logo7 from '../assets/tariningpartners/8873bef83b3b6a02185f76bbfc398fc8df68334e.png';
import logo8 from '../assets/tariningpartners/75993c0e1a0e5b97034025d00c8dd621097c28e6 (1).png';
import logo9 from '../assets/tariningpartners/50357657e04734fd5eb4f02fc498e7576af076af.png';
import logo10 from '../assets/tariningpartners/ab78d8a7a19da83f206231a1629a33083fa84e7f.png';
import logo11 from '../assets/tariningpartners/d3a25678344bd03f5a87ff47eeb8d1a9c6cdde80.png';
import logo12 from '../assets/tariningpartners/30269268d954fc7ac6341f81ce38a71280c81a76 (1).png';

const TrainingPartners = () => {
  const logos = [
    logo1, logo2, logo3, logo4, logo5, logo6,
    logo7, logo8, logo9, logo10, logo11, logo12
  ];

  return (
    <section className="bg-[#FEF9F3] py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left Column - Title */}
          <div className="lg:w-1/4">
            <h2 className="font-new-york text-3xl md:text-4xl text-[#1a1a1a] leading-tight uppercase tracking-wider text-center lg:text-left">
              OUR TRAINING <br className="hidden lg:block" /> PARTNERS
            </h2>
          </div>

          {/* Right Column - Logo Grid */}
          <div className="lg:w-3/4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-0">
              {logos.map((logo, index) => (
                <div 
                  key={index} 
                  className="bg-white border-[0.5px] border-gray-100 p-4 aspect-video flex items-center justify-center transition-all duration-300 hover:shadow-md"
                >
                  <img 
                    src={logo} 
                    alt={`Training Partner ${index + 1}`} 
                    className="max-w-full max-h-full object-contain   transition-all duration-300"
                  />
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingPartners;

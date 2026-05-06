import { Counter } from './Stats';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';

const OurCompany = () => {
  return (
    <section className="relative bg-[#01101D] py-20 lg:py-32 overflow-hidden text-white">
      {/* Background Gradients */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[60%] rounded-full bg-blue-900/20 blur-[120px] pointer-events-none"></div>
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[60%] rounded-full bg-blue-900/20 blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-10 lg:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Side - Heading */}
          <div className="lg:w-1/4">
            <h2 className="font-new-york text-5xl md:text-6xl lg:text-[46.08px] leading-tight text-white sticky ">
              Our Company
            </h2>
          </div>

          {/* Right Side - Content */}
          <div className="lg:w-3/4">
            <div className="space-y-8 max-w-4xl text-left">
              <p className="font-lora text-gray-300 text-[18px] leading-[25px]">
                At NFCI Hospitality, we go beyond traditional culinary education. We are a melting pot of innovation and tradition, where cutting-edge techniques meet time-honored recipes, and creativity knows no bounds. Our expert faculty, comprising renowned chefs and seasoned industry professionals, bring a wealth of knowledge and experience to the classrooms and kitchens.
              </p>
              <p className="font-lora text-gray-300 text-[18px] leading-[25px]">
                We boast state-of-the-art facilities, meticulously designed to replicate real-world culinary environments, ensuring our students are equipped with hands-on skills that meet industry standards. What truly sets us apart is our unwavering commitment to holistic development. We not only focus on imparting culinary expertise but also emphasize soft skills, entrepreneurial spirit, and leadership qualities.
              </p>
            </div>

            {/* Stats Row - Single Row */}
            <div className="flex flex-row flex-nowrap items-center gap-6 md:gap-16 py-16 border-b border-white/10 mb-16 overflow-x-auto no-scrollbar">
              <div className="flex flex-col min-w-fit">
                <div className="flex items-baseline gap-2">
                  <span className="font-new-york text-[36px] md:text-[49.08px] text-[#FF594D]">
                    <Counter end={36} duration={2000} suffix="+" />
                  </span>
                  <span className="font-new-york text-[24px] md:text-[49.08px] text-[#FF594D]">years</span>
                </div>
                <p className="font-lora text-[12px] md:text-[16px] text-[#EDEDED] mt-2 uppercase tracking-wider whitespace-nowrap text-left">of Culinary Excellence</p>
              </div>

              <div className="h-16 w-px bg-white/10 shrink-0"></div>

              <div className="flex flex-col min-w-fit">
                <div className="flex items-baseline gap-2">
                  <span className="font-new-york text-[36px] md:text-[49.08px] text-[#FF594D]">
                    <Counter end={5} duration={2000} />
                  </span>
                  <span className="font-new-york text-[24px] md:text-[49.08px] text-[#FF594D]">awards</span>
                </div>
                <p className="font-lora text-[12px] md:text-[16px] text-[#EDEDED] mt-2 uppercase tracking-wider whitespace-nowrap text-left">Our Awards</p>
              </div>

              <div className="h-16 w-px bg-white/10 shrink-0"></div>

              <div className="flex flex-col min-w-fit">
                <div className="flex items-baseline gap-2">
                  <span className="font-new-york text-[36px] md:text-[49.08px] text-[#FF594D]">
                    <Counter end="3,6549" duration={2000} />
                  </span>
                </div>
                <p className="font-lora text-[12px] md:text-[16px] text-[#EDEDED] mt-2 uppercase tracking-wider whitespace-nowrap text-left">Customer Rating on Average</p>
              </div>
            </div>

            {/* Images Grid - Asymmetric Alignment */}
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="w-full md:w-1/2 rounded-[15px] overflow-hidden shadow-2xl h-[450px]">
                <img 
                  src={img1} 
                  alt="Culinary Preparation" 
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="w-full md:w-1/2 rounded-[15px] overflow-hidden shadow-2xl h-[300px] ">
                <img 
                  src={img2} 
                  alt="Students Cooking" 
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCompany;

import React from 'react';
import ytThumb from '../assets/yt.jpg';

const VideoSection = () => {
  return (
    <section className="bg-[#FFFFFF] py-20 lg:py-20 overflow-hidden text-white">
      <div className="container mx-auto px-6 md:px-10 lg:px-[100px]">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Left Side - Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="inline-block mb-6">
              <p className="font-lora text-[#9B251E] font-bold text-[10px] md:text-sm tracking-[0.2em] border-b-2 border-t-2 border-[#9B251E] py-1 px-4 md:px-6 uppercase">
               Watch & Learn
              </p>
            </div>
            <h2 className="font-new-york text-3xl md:text-5xl lg:text-[56.84px] text-[#333333] leading-tight mb-8">
             Take A Virtual Tour
            </h2>
            <p className="font-lora mt-3 text-[#333333] text-base md:text-[18px] leading-relaxed mb-12 max-w-xl mx-auto lg:mx-0">
           Experience our world-class facilities, expert faculty, and vibrant campus life through our virtual tour.
            </p>
          </div>

          {/* Right Side - Video Thumbnail */}
          <div className="w-full lg:w-1/2 relative group cursor-pointer">
            <div className="relative rounded-[20px] md:rounded-[30px] overflow-hidden shadow-2xl aspect-video">
              <img 
                src={ytThumb} 
                alt="NFCI Video Thumbnail" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
              />
              
              {/* YouTube Play Button Icon */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-16 h-16 md:w-24 md:h-24 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                  <svg viewBox="0 0 68 48" className="w-full h-full drop-shadow-2xl">
                    <path d="M66.52,7.74c-0.78-2.93-3.09-5.24-6.02-6.02C55.21,0.34,34,0.34,34,0.34s-21.21,0-26.5,1.38c-2.93,0.78-5.24,3.09-6.02,6.02C0.1,13.03,0.1,24,0.1,24s0,10.97,1.38,16.26c0.78,2.93,3.09,5.24,6.02,6.02C12.79,47.66,34,47.66,34,47.66s21.21,0,26.5-1.38c2.93-0.78,5.24-3.09,6.02-6.02C67.9,34.97,67.9,24,67.9,24S67.9,13.03,66.52,7.74z" fill="#FF0000" />
                    <path d="M27.41,34.4l17.59-10.4L27.41,13.6V34.4z" fill="#FFFFFF" />
                  </svg>
                </div>
              </div>
              {/* Decorative Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

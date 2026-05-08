import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const testimonials = [
    {
      name: "Devin Bartoletti",
      role: "NFCI ALUMNI",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=devin",
      text: "Nullam donec dolor justo elit pharetra accumsan eget neque. Et fusce maecenas sagittis enim. Non mattis nec purus mi facilisi aenean comon. Fermentum sit ultricies vel ipsum tellus aliquet vitae velit, urna..."
    },
    {
      name: "David Jenkins",
      role: "CULINARY STUDENT",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=david",
      text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed efficitur, leo non efficitur finibus, tellus nisl elementum elit, vel efficitur tellus nisl elementum elit."
    },
    {
      name: "Michael Chen",
      role: "HOSPITALITY EXEC",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=michael",
      text: "Maecenas sed diam eget risus varius blandit sit amet non magna. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla."
    },
    {
      name: "Robert Wilson",
      role: "PASTRY CHEF",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=robert",
      text: "Curabitur blandit tempus porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Etiam porta sem malesuada magna mollis euismod."
    }
  ];

  const totalSlides = testimonials.length;

  return (
    <section className="bg-[#01101D] py-20 lg:py-20 overflow-hidden relative">

      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-[#9B251E]/10 blur-[150px] -translate-x-1/2 -translate-y-1/2"></div>

      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[#9B251E]/10 blur-[150px] translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 md:px-10 lg:px-[100px] relative z-10">

        {/* Header */}
        <div className="text-center mb-16">

          <div className="inline-block mb-4">
            <p className="font-lora text-[#FF594D] font-bold text-sm tracking-[0.2em] border-b-2 border-t-2 border-[#FF594D] py-1 px-6 uppercase">
              Testimonials
            </p>
          </div>

          <h2 className="font-new-york text-4xl md:text-5xl lg:text-[56.84px] text-white mb-4">
            What our clients say
          </h2>

          <p className="font-lora mt-3 text-white text-lg md:text-[18px] leading-[33.6px]">
            Hear it from our clients and alumni
          </p>

        </div>

        {/* Slider Container */}
        <div className="relative mb-16 overflow-hidden">

          {/* LEFT SHADE */}
          <div className="absolute left-0 top-0 z-30 h-full w-[90px] bg-gradient-to-r from-[#01101D] via-[#01101D]/60 to-transparent pointer-events-none" />

          {/* RIGHT SHADE */}
          <div className="absolute right-0 top-0 z-30 h-full w-[90px] bg-gradient-to-l from-[#01101D] via-[#01101D]/60 to-transparent pointer-events-none" />

          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            spaceBetween={24}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3.2,
              }
            }}
            className="testimonials-swiper"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index} className="h-auto">

                <div className="bg-white rounded-[30px] p-8 md:p-10 h-full shadow-2xl flex flex-col justify-between transform transition-all duration-300 hover:translate-y-[-5px]">

                  <div>

                    {/* Card Header */}
                    <div className="flex items-center justify-between mb-8">

                      <div className="flex items-center gap-4">

                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-16 h-16 rounded-full object-cover border-2 border-gray-100 shadow-md"
                        />

                        <div>

                          <h4 className="font-libre font-bold text-[#1a1a1a] text-lg leading-tight">
                            {item.name}
                          </h4>

                          <p className="font-lora text-gray-500 text-xs tracking-widest uppercase mt-1">
                            {item.role}
                          </p>

                        </div>

                      </div>

                      {/* Rating Stars */}
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <svg 
                            key={i}
                            className={`w-4 h-4 ${
                              i < item.rating
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-200'
                            }`}
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                    </div>

                    {/* Testimonial Text */}
                    <p className="font-lora text-gray-600 text-sm md:text-base leading-relaxed italic">
                      "{item.text}"
                    </p>

                  </div>

                </div>

              </SwiperSlide>
            ))}
          </Swiper>

        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-8">

          <button 
            onClick={() => swiperRef.current?.slidePrev()}
            className="w-14 h-14 rounded-full bg-[#9B251E] text-white flex items-center justify-center hover:bg-white hover:text-[#9B251E] transition-all duration-300 shadow-lg group cursor-pointer"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12H3m0 0l8-8m-8 8l8 8" />
            </svg>
          </button>

          <div className="text-white font-lora text-xl tracking-widest flex items-center gap-2">
            <span className="font-bold">{activeIndex + 1}</span>

            <span className="text-white/30">/</span>

            <span>{totalSlides}</span>
          </div>

          <button 
            onClick={() => swiperRef.current?.slideNext()}
            className="w-14 h-14 rounded-full bg-[#9B251E] text-white flex items-center justify-center hover:bg-white hover:text-[#9B251E] transition-all duration-300 shadow-lg group cursor-pointer"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12h18m0 0l-8-8m8 8l-8 8" />
            </svg>
          </button>

        </div>

      </div>

    </section>
  );
};

export default Testimonials;
import React, { useState, useEffect, useRef } from 'react';

export const Counter = ({ end, duration, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    // Remove commas for calculation if it's a string like "3,6549"
    const endValue = typeof end === 'string' ? parseInt(end.replace(/,/g, '')) : end;
    const increment = endValue / (duration / 16); // 60fps approx

    const timer = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        setCount(endValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  // Format with commas if needed for display
  const formatNumber = (num) => {
    if (typeof end === 'string' && end.includes(',')) {
      // Custom formatting for the specific case in image "3,6549"
      if (end === "3,6549") {
        const str = num.toString();
        if (str.length > 4) {
          return str.slice(0, 1) + "," + str.slice(1);
        }
        return str;
      }
      return num.toLocaleString();
    }
    return num.toLocaleString();
  };

  return <span ref={countRef}>{formatNumber(count)}{suffix}</span>;
};

const Stats = () => {
  return (
    <section className="bg-[#FFF8F1] py-16 md:py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12">
        {/* Left Side */}
        <div className="w-full lg:w-1/3 text-center lg:text-left">
          <h2 className="font-new-york text-3xl md:text-4xl lg:text-[24px] leading-tight text-[#000000] mb-4">
            Leading Culinary Institute in India With Excellence in Education
          </h2>
          <p className="font-lora text-sm mt-2 md:text-[14px] text-gray-600 uppercase tracking-widest">
            Our Achievements Till Now
          </p>
        </div>

        {/* Right Side - Counters */}
        <div className="w-full lg:w-2/3 flex flex-wrap justify-center lg:justify-end gap-10 md:gap-16 lg:gap-20">
          <div className="text-center min-w-[120px]">
            <h3 className="font-new-york text-4xl md:text-5xl lg:text-[44px] text-nfci-red ">
              <Counter end={35} duration={2000} suffix="+" />
            </h3>
            <p className="font-lora mt-3 text-base md:text-[18px] text-gray-800">Campuses</p>
          </div>

          <div className="text-center min-w-[120px]">
            <h3 className="font-new-york text-4xl md:text-5xl lg:text-[44px] text-nfci-red ">
              <Counter end={36} duration={2000} />
            </h3>
            <p className="font-lora mt-3 text-base md:text-[18px] text-gray-800">Years of excellence</p>
          </div>

          <div className="text-center min-w-[120px]">
            <h3 className="font-new-york text-4xl md:text-5xl lg:text-[44px] text-nfci-red ">
              <Counter end="3,6549" duration={2000} />
            </h3>
            <p className="font-lora mt-3 text-base md:text-[18px] text-gray-800">Students Success Story</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;

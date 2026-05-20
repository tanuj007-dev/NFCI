import React, { useState } from 'react';

const FAQ = ({
  title = "What's On Your Mind",
  subtitle = "We've answered the questions you didn't know you had.",
}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What are the Institution's hours of operation?",
      answer: "We are open every day from 10:00 AM to 10:00 PM."
    },
    {
      question: "How much is the fee?",
      answer: "The fee structure varies depending on the specific program and duration. Please contact our admissions office or visit the programs page for detailed pricing."
    },
    {
      question: "Does NFCI offer scholarship programs?",
      answer: "Yes, NFCI offers merit-based and need-based scholarships to eligible students. We believe in making quality culinary education accessible to everyone."
    },
    {
      question: "What's the difference between a Certificate and Diploma?",
      answer: "Certificate programs are shorter, focused courses for specific skills, while Diploma programs offer comprehensive, long-term training covering all aspects of the industry."
    },
    {
      question: "Do I need to have specific prerequisites ?",
      answer: "Prerequisites vary by course. Most basic courses require a high school diploma, while advanced programs may require previous culinary experience."
    },
    {
      question: "Is parking available?",
      answer: "Yes, we provide ample parking space for our students and visitors at all our campus locations."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#01101D] py-20 lg:py-20 overflow-hidden relative">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-white/5 blur-[150px] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-white/5 blur-[120px] translate-x-1/4 translate-y-1/4"></div>

      <div className="container mx-auto px-4 md:px-10 lg:px-[100px] relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <p className="font-lora text-[#FF594D] font-bold text-sm tracking-[0.2em] border-b-2 border-t-2 border-[#FF594D] py-1 px-6 ">
              Frequently Asked Questions
            </p>
          </div>
          <h2 className="font-new-york text-4xl md:text-5xl lg:text-[56.84px] text-white mb-6">
            {title}
          </h2>
          <p className="font-lora mt-3 text-white text-lg md:text-[18px]">
            {subtitle}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border-b border-white/10 last:border-0"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full py-8 flex items-center justify-between text-left group"
              >
                <span className={`font-libre text-xl md:text-[20px] transition-colors duration-300 ${activeIndex === index ? 'text-white' : 'text-white/80 group-hover:text-white'}`}>
                  {faq.question}
                </span>
                <span className="flex-shrink-0 ml-4">
                  {activeIndex === index ? (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 text-white/60 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>
                  )}
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? 'max-h-40 pb-8 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="font-lora text-white/60 text-base md:text-lg leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

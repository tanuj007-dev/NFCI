import React from 'react'
import aboutImg from '../assets/about.jpg'

const About = ({
  eyebrow = 'ABOUT US',
  title = 'Welcome To NFCI – Hotel Management & Culinary Institute In India',
  description = 'National Finishing and Cookery Institute (NFCI) is both research-intensive and learner-centred where students across India master excellence in the field of food and hospitality. The culinary centre is an amalgamation of opportunities, connections and prominent placements.',
  body2 = 'Today, the food industry has grown to manifold with abundant opportunities and career plans. We offer degree and associate programs spanning the core of food industry. Our food-centric education model helps our students to pitch attractive career options in the food business. Top employers look to the NFCI when hiring, and when you grab your NFCI degree, they wish to take you on board.',
  image = aboutImg,
}) => {
  const imgSrc = image || aboutImg

  return (
    <section className="bg-[#FFF8F1] py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="mb-16 flex flex-col items-stretch gap-12 lg:flex-row lg:gap-20">
          <div className="flex w-full lg:w-5/12">
            <div className="relative aspect-square w-full flex-1 overflow-hidden rounded-[30px] shadow-sm lg:aspect-auto">
              <img
                src={imgSrc}
                alt="Culinary setting"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="flex w-full flex-col justify-center text-left lg:w-7/12">
            {eyebrow && (
              <div className="mb-6 inline-block">
                <div className="relative inline-block">
                  <div className="absolute -top-2 left-0 h-[1px] w-full bg-nfci-red/30" />
                  <p className="font-lora py-1 text-sm font-bold tracking-[0.1em] text-nfci-red">
                    {eyebrow}
                  </p>
                  <div className="absolute -bottom-2 left-0 h-[1px] w-full bg-nfci-red/30" />
                </div>
              </div>
            )}

            <h2 className="font-new-york mb-10 text-3xl leading-[1.1] text-[#1a1a1a] md:text-4xl lg:text-[48px]">
              {title}
            </h2>

            <div className="space-y-8">
              {description && (
                <p className="font-lora text-base leading-relaxed text-gray-600 md:text-lg">
                  {description}
                </p>
              )}
              {body2 && (
                <p className="font-lora text-base leading-relaxed text-gray-600 md:text-lg">
                  {body2}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

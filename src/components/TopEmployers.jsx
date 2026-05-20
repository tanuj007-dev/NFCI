import React from 'react'
import b1 from '../assets/b1.png'
import b2 from '../assets/b2.png'
import b3 from '../assets/b3.png'
import b4 from '../assets/b4.png'

const defaultLogos = [b1, b2, b3, b4]

const TopEmployers = ({
  title = 'Some Esteemed Top Employers that Hire NFCI Students',
  description = 'Top employers look to the NFCI when hiring, and when you grab your NFCI certification, they wish to take you on board. Backed with 36 years of experience, our hotel management institute is a full-service culinary institute.',
  logos,
}) => {
  const logoList =
    Array.isArray(logos) && logos.length > 0 ? logos.filter(Boolean) : defaultLogos

  return (
    <section className="overflow-hidden bg-[#FAF6F1] py-16 lg:py-20">
      <div className="container mx-auto px-6 md:px-10 lg:px-[100px]">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
          <div className="w-full text-center lg:w-1/2 lg:text-left">
            <h2 className="font-new-york mb-6 text-3xl leading-tight text-[#333333] md:text-4xl lg:text-[32px]">
              {title}
            </h2>
            <p className="font-lora mx-auto mt-3 max-w-xl text-base leading-relaxed text-[#333333]/70 md:text-[16px] lg:mx-0">
              {description}
            </p>
          </div>

          <div className="grid w-full grid-cols-2 items-center justify-items-center gap-6 py-4 md:flex md:flex-row md:flex-nowrap md:justify-end md:gap-10 lg:w-1/2">
            {logoList.map((logo, index) => (
              <div
                key={index}
                className="flex h-auto w-full max-w-[120px] flex-shrink-0 items-center justify-center rounded-lg bg-white p-4 shadow-sm transition-all duration-300 hover:scale-110 md:max-w-[150px] lg:w-[120px] lg:bg-transparent lg:shadow-none"
              >
                <img
                  src={logo}
                  alt={`Employer ${index + 1}`}
                  className="h-auto max-w-full object-contain transition-all duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TopEmployers

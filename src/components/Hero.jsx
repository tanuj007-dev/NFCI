import React from 'react'
import heroBg from '../assets/hero.webp'

const Hero = ({
  title = 'Are You Looking For a Career In The Hospitality Industry',
  subtitle = "India's premier institute for Hotel Management & Culinary Arts. Transform your passion into a rewarding career with world-class training.",
  backgroundImage = heroBg,
  primaryButtonText = 'EXPLORE COURSES',
  secondaryButtonText = 'BROWSE LOCATIONS',
}) => {
  const bg = backgroundImage || heroBg

  return (
    <section
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${bg})`,
      }}
    >
      <div className="container mx-auto mt-20 flex flex-col items-center justify-center px-4 text-center text-[#FDFCFC]">
        <h1 className="font-new-york !text-center flex w-full max-w-6xl justify-center text-4xl leading-[1.05] md:text-6xl lg:text-[76px]">
          {title}
        </h1>

        <p className="font-lora mx-auto mt-10 max-w-5xl text-center text-lg leading-relaxed opacity-90 md:text-xl lg:text-2xl">
          {subtitle}
        </p>

        <div className="mt-10 flex w-full flex-col items-center justify-center gap-6 sm:flex-row">
          <button
            type="button"
            className="rounded-full bg-nfci-red px-7 py-3.5 font-libre text-base font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-nfci-red-hover"
          >
            {primaryButtonText}
          </button>

          <button
            type="button"
            className="rounded-full border-2 border-white bg-transparent px-7 py-3.5 font-libre text-base font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-white/10"
          >
            {secondaryButtonText}
          </button>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-black/50 to-transparent" />
    </section>
  )
}

export default Hero

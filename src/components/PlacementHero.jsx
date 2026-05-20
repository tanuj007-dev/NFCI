import React from 'react'
import bgImage from '../assets/9efab064d1906bca067b28675acc7f56aa44edd2.webp'

const PlacementHero = ({
  title = 'Placements at NFCI',
  subtitle = '100% placement assistance with esteemed hospitality establishments across India and abroad. Launch your culinary career with NFCI.',
  backgroundImage = bgImage,
}) => {
  const bg = backgroundImage || bgImage

  return (
    <section className="relative flex h-[60vh] w-full items-center justify-center overflow-hidden md:h-[70vh] lg:h-[50vh]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <h1 className="font-new-york mb-6 text-4xl leading-none tracking-tight text-white drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)] sm:text-6xl md:text-8xl lg:text-[59px]">
          {title}
        </h1>
        <p className="font-lora mx-auto max-w-3xl text-base leading-relaxed text-white/90 drop-shadow-md sm:text-lg md:text-xl lg:text-[16px]">
          {subtitle}
        </p>
      </div>
    </section>
  )
}

export default PlacementHero

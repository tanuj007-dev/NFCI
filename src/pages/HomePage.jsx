import React from 'react';
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import About from '../components/About'
import OurCompany from '../components/OurCompany'
import WhyChooseUs from '../components/WhyChooseUs'
import ProgramsSlider from '../components/ProgramsSlider'
import Affiliations from '../components/Affiliations'
import Expertise from '../components/Expertise'
import TopEmployers from '../components/TopEmployers'
import VideoSection from '../components/VideoSection'
import Testimonials from '../components/Testimonials'
import Articles from '../components/Articles'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import Navbar from '../components/Navbar'

const HomePage = () => {
  return (
    <div className="relative">
      <div className="absolute top-2 left-0 w-full z-50">
        <Navbar />
      </div>
      <main>
        <Hero />
        <Stats />
        <About />
        <OurCompany />
        <WhyChooseUs />
        <ProgramsSlider />
        <Affiliations />
        <Expertise />
        <TopEmployers />
        <VideoSection />
        <Testimonials />
        <Articles />
        <FAQ />
        <Contact />
      </main>
    </div>
  );
};

export default HomePage;

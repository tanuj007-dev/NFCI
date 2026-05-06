import React from 'react';
import AboutNavbar from '../components/AboutNavbar';
import About from '../components/About';
 
import Stats from '../components/Stats';

import AboutHero from '../components/AboutHero';

import NFCIHistory from '../components/NFCIHistory';

import CoursesSlider from '../components/CoursesSlider';

import WhyChooseAbout from '../components/WhyChooseAbout';
import AboutTeam from '../components/AboutTeam';
import TrainingPartners from '../components/TrainingPartners';

const AboutPage = () => {
  return (
    <div className="relative">
      <AboutNavbar />
      <main>
        <AboutHero />
        <Stats />
        <About />
        <NFCIHistory />
         <CoursesSlider />  
        <WhyChooseAbout />
        <AboutTeam />
        <TrainingPartners />
      </main>
    </div>
  );
};

export default AboutPage;

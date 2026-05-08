import React from "react";
import AboutNavbar from "../components/AboutNavbar";
import FeaturedMusicFestivalSection from "../components/FeaturedMusicFestivalSection";
import AboutEventGallerySection from "../components/AboutEventGallerySection";
import RelatedEventsSection from "../components/RelatedEventsSection";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";










const EventDetailPage = () => {
  return (
    <>
    <AboutNavbar />
    <FeaturedMusicFestivalSection />
    <AboutEventGallerySection />
    <RelatedEventsSection />
    <FAQ />
    <Contact />
     
    </>
  );
};

export default EventDetailPage;
import React from "react";
import EventsHeroSection from "../components/EventsHeroSection";
import AboutNavbar from "../components/AboutNavbar";
import PartnersLogoGridSection from "../components/PartnersLogoGridSection";
import FutureLeadersEventSection from "../components/FutureLeadersEventSection";
import UpcomingEventsSection from "../components/UpcomingEventsSection";
import FeaturedEventBanner from "../components/FeaturedEventBanner";
import EventPageTeam from "../components/EventPageTeam";
import EventStatsSection from "../components/EventStatsSection";
import RecentEventsSection from "../components/RecentEventsSection";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";

const EventPage = () => {
  return (
    <>
    <AboutNavbar />
      <EventsHeroSection />
      <PartnersLogoGridSection />
      <FutureLeadersEventSection />
      <UpcomingEventsSection />
      <FeaturedEventBanner />
      <EventPageTeam />
      <EventStatsSection />
      <RecentEventsSection />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
};

export default EventPage;


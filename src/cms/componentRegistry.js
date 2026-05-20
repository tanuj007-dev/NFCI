/**
 * CMS component registry — maps componentId → React section component.
 * IDs are defined in componentIds.js (single source of truth).
 */
import { COMPONENT_IDS, COMPONENT_CATALOG } from './componentIds'

import Navbar from '../components/Navbar'
import AboutNavbar from '../components/AboutNavbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import AboutHero from '../components/AboutHero'
import PlacementHero from '../components/PlacementHero'
import CareerBeautyCourseHero from '../components/CareerBeautyCourseHero'
import EventsHeroSection from '../components/EventsHeroSection'
import BlogHero from '../components/BlogHero'
import BlogHeroBanner from '../components/BlogHeroBanner'
import Stats from '../components/Stats'
import About from '../components/About'
import OurCompany from '../components/OurCompany'
import WhyChooseUs from '../components/WhyChooseUs'
import WhyChooseAbout from '../components/WhyChooseAbout'
import ProgramsSlider from '../components/ProgramsSlider'
import CoursesSlider from '../components/CoursesSlider'
import Affiliations from '../components/Affiliations'
import Expertise from '../components/Expertise'
import TopEmployers from '../components/TopEmployers'
import VideoSection from '../components/VideoSection'
import Testimonials from '../components/Testimonials'
import Articles from '../components/Articles'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import NFCIHistory from '../components/NFCIHistory'
import AboutTeam from '../components/AboutTeam'
import TrainingPartners from '../components/TrainingPartners'
import PartnersLogoGridSection from '../components/PartnersLogoGridSection'
import FutureLeadersEventSection from '../components/FutureLeadersEventSection'
import UpcomingEventsSection from '../components/UpcomingEventsSection'
import FeaturedEventBanner from '../components/FeaturedEventBanner'
import EventPageTeam from '../components/EventPageTeam'
import EventStatsSection from '../components/EventStatsSection'
import RecentEventsSection from '../components/RecentEventsSection'
import RelatedEventsSection from '../components/RelatedEventsSection'
import AboutEventGallerySection from '../components/AboutEventGallerySection'
import FeaturedMusicFestivalSection from '../components/FeaturedMusicFestivalSection'
import BlogCardSection from '../components/BlogCardSection'
import RecentPostsSection from '../components/RecentPostsSection'
import RelatedPosts from '../components/RelatedPosts'
import BlogDetailContent from '../components/BlogDetailscontent'
import ExploreCoursesSection from '../components/ExploreCoursesSection'
import ReasonsSection from '../components/ReasonsSection'
import WhatWillYouLearnSection from '../components/WhatWillYouLearnSection'
import IndianTandooriGallerySection from '../components/IndianTandooriGallerySection'
import CertificateTandoorSection from '../components/CertificateTandoorSection'
import IndianCookingCourseEligibility from '../components/IndianCookingCourseEligibility'
import IndianCuisineCourseDetails from '../components/IndianCuisineCourseDetails'

export { COMPONENT_IDS, COMPONENT_CATALOG, ALL_COMPONENT_IDS } from './componentIds'
export { getComponentMeta, isRegisteredComponentId } from './componentIds'

/** componentId → React component */
export const COMPONENT_REGISTRY = {
  [COMPONENT_IDS.NAVBAR]: Navbar,
  [COMPONENT_IDS.ABOUT_NAVBAR]: AboutNavbar,
  [COMPONENT_IDS.FOOTER]: Footer,

  [COMPONENT_IDS.HERO]: Hero,
  [COMPONENT_IDS.ABOUT_HERO]: AboutHero,
  [COMPONENT_IDS.PLACEMENT_HERO]: PlacementHero,
  [COMPONENT_IDS.CAREER_BEAUTY_HERO]: CareerBeautyCourseHero,
  [COMPONENT_IDS.EVENTS_HERO]: EventsHeroSection,
  [COMPONENT_IDS.BLOG_HERO]: BlogHero,
  [COMPONENT_IDS.BLOG_HERO_BANNER]: BlogHeroBanner,

  [COMPONENT_IDS.STATS]: Stats,
  [COMPONENT_IDS.ABOUT]: About,
  [COMPONENT_IDS.OUR_COMPANY]: OurCompany,
  [COMPONENT_IDS.WHY_CHOOSE_US]: WhyChooseUs,
  [COMPONENT_IDS.WHY_CHOOSE_ABOUT]: WhyChooseAbout,
  [COMPONENT_IDS.PROGRAMS_SLIDER]: ProgramsSlider,
  [COMPONENT_IDS.COURSES_SLIDER]: CoursesSlider,
  [COMPONENT_IDS.AFFILIATIONS]: Affiliations,
  [COMPONENT_IDS.EXPERTISE]: Expertise,
  [COMPONENT_IDS.TOP_EMPLOYERS]: TopEmployers,
  [COMPONENT_IDS.VIDEO_SECTION]: VideoSection,
  [COMPONENT_IDS.TESTIMONIALS]: Testimonials,
  [COMPONENT_IDS.ARTICLES]: Articles,
  [COMPONENT_IDS.FAQ]: FAQ,
  [COMPONENT_IDS.CONTACT]: Contact,
  [COMPONENT_IDS.NFCI_HISTORY]: NFCIHistory,
  [COMPONENT_IDS.ABOUT_TEAM]: AboutTeam,
  [COMPONENT_IDS.TRAINING_PARTNERS]: TrainingPartners,

  [COMPONENT_IDS.PARTNERS_LOGO_GRID]: PartnersLogoGridSection,
  [COMPONENT_IDS.FUTURE_LEADERS_EVENT]: FutureLeadersEventSection,
  [COMPONENT_IDS.UPCOMING_EVENTS]: UpcomingEventsSection,
  [COMPONENT_IDS.FEATURED_EVENT_BANNER]: FeaturedEventBanner,
  [COMPONENT_IDS.EVENT_PAGE_TEAM]: EventPageTeam,
  [COMPONENT_IDS.EVENT_STATS]: EventStatsSection,
  [COMPONENT_IDS.RECENT_EVENTS]: RecentEventsSection,
  [COMPONENT_IDS.RELATED_EVENTS]: RelatedEventsSection,
  [COMPONENT_IDS.ABOUT_EVENT_GALLERY]: AboutEventGallerySection,
  [COMPONENT_IDS.FEATURED_MUSIC_FESTIVAL]: FeaturedMusicFestivalSection,

  [COMPONENT_IDS.BLOG_CARD_SECTION]: BlogCardSection,
  [COMPONENT_IDS.RECENT_POSTS]: RecentPostsSection,
  [COMPONENT_IDS.RELATED_POSTS]: RelatedPosts,
  [COMPONENT_IDS.BLOG_DETAIL_CONTENT]: BlogDetailContent,

  [COMPONENT_IDS.EXPLORE_COURSES]: ExploreCoursesSection,
  [COMPONENT_IDS.REASONS_SECTION]: ReasonsSection,
  [COMPONENT_IDS.WHAT_WILL_YOU_LEARN]: WhatWillYouLearnSection,
  [COMPONENT_IDS.INDIAN_TANDOORI_GALLERY]: IndianTandooriGallerySection,
  [COMPONENT_IDS.CERTIFICATE_TANDOOR]: CertificateTandoorSection,
  [COMPONENT_IDS.INDIAN_COOKING_ELIGIBILITY]: IndianCookingCourseEligibility,
  [COMPONENT_IDS.INDIAN_CUISINE_COURSE_DETAILS]: IndianCuisineCourseDetails,
}

/** Label + file lookup by componentId (for CMS admin) */
export const COMPONENT_META = Object.fromEntries(
  COMPONENT_CATALOG.map(({ id, label, file }) => [id, { label, file }]),
)

export function resolveComponent(componentId) {
  return COMPONENT_REGISTRY[componentId] ?? null
}

export function getRegistryComponentIds() {
  return Object.keys(COMPONENT_REGISTRY)
}

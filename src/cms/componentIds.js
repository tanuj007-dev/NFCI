/**
 * Stable CMS component IDs — do not rename once used in page JSON or the admin.
 * Use these constants when building pages: COMPONENT_IDS.HERO
 */
export const COMPONENT_IDS = {
  // Navigation & layout
  NAVBAR: 'navbar',
  ABOUT_NAVBAR: 'about-navbar',
  FOOTER: 'footer',

  // Heroes & banners
  HERO: 'hero',
  ABOUT_HERO: 'about-hero',
  PLACEMENT_HERO: 'placement-hero',
  CAREER_BEAUTY_HERO: 'career-beauty-hero',
  EVENTS_HERO: 'events-hero',
  BLOG_HERO: 'blog-hero',
  BLOG_HERO_BANNER: 'blog-hero-banner',

  // Home & general content
  STATS: 'stats',
  ABOUT: 'about',
  OUR_COMPANY: 'our-company',
  WHY_CHOOSE_US: 'why-choose-us',
  WHY_CHOOSE_ABOUT: 'why-choose-about',
  PROGRAMS_SLIDER: 'programs-slider',
  COURSES_SLIDER: 'courses-slider',
  AFFILIATIONS: 'affiliations',
  EXPERTISE: 'expertise',
  TOP_EMPLOYERS: 'top-employers',
  VIDEO_SECTION: 'video-section',
  TESTIMONIALS: 'testimonials',
  ARTICLES: 'articles',
  FAQ: 'faq',
  CONTACT: 'contact',
  NFCI_HISTORY: 'nfci-history',
  ABOUT_TEAM: 'about-team',
  TRAINING_PARTNERS: 'training-partners',

  // Events
  PARTNERS_LOGO_GRID: 'partners-logo-grid',
  FUTURE_LEADERS_EVENT: 'future-leaders-event',
  UPCOMING_EVENTS: 'upcoming-events',
  FEATURED_EVENT_BANNER: 'featured-event-banner',
  EVENT_PAGE_TEAM: 'event-page-team',
  EVENT_STATS: 'event-stats',
  RECENT_EVENTS: 'recent-events',
  RELATED_EVENTS: 'related-events',
  ABOUT_EVENT_GALLERY: 'about-event-gallery',
  FEATURED_MUSIC_FESTIVAL: 'featured-music-festival',

  // Blog
  BLOG_CARD_SECTION: 'blog-card-section',
  RECENT_POSTS: 'recent-posts',
  RELATED_POSTS: 'related-posts',
  BLOG_DETAIL_CONTENT: 'blog-detail-content',

  // Courses & culinary
  EXPLORE_COURSES: 'explore-courses',
  REASONS_SECTION: 'reasons-section',
  WHAT_WILL_YOU_LEARN: 'what-will-you-learn',
  INDIAN_TANDOORI_GALLERY: 'indian-tandoori-gallery',
  CERTIFICATE_TANDOOR: 'certificate-tandoor',
  INDIAN_COOKING_ELIGIBILITY: 'indian-cooking-eligibility',
  INDIAN_CUISINE_COURSE_DETAILS: 'indian-cuisine-course-details',
}

/** All registered IDs (for CMS pickers & validation) */
export const ALL_COMPONENT_IDS = Object.values(COMPONENT_IDS)

/**
 * Full catalog: id, label, file, category
 * category helps group blocks in a future CMS admin UI
 */
export const COMPONENT_CATALOG = [
  { id: COMPONENT_IDS.NAVBAR, label: 'Navbar', file: 'Navbar.jsx', category: 'navigation' },
  { id: COMPONENT_IDS.ABOUT_NAVBAR, label: 'About Navbar', file: 'AboutNavbar.jsx', category: 'navigation' },
  { id: COMPONENT_IDS.FOOTER, label: 'Footer', file: 'Footer.jsx', category: 'navigation' },

  { id: COMPONENT_IDS.HERO, label: 'Hero', file: 'Hero.jsx', category: 'hero' },
  { id: COMPONENT_IDS.ABOUT_HERO, label: 'About Hero', file: 'AboutHero.jsx', category: 'hero' },
  { id: COMPONENT_IDS.PLACEMENT_HERO, label: 'Placement Hero', file: 'PlacementHero.jsx', category: 'hero' },
  { id: COMPONENT_IDS.CAREER_BEAUTY_HERO, label: 'Career Beauty Course Hero', file: 'CareerBeautyCourseHero.jsx', category: 'hero' },
  { id: COMPONENT_IDS.EVENTS_HERO, label: 'Events Hero', file: 'EventsHeroSection.jsx', category: 'hero' },
  { id: COMPONENT_IDS.BLOG_HERO, label: 'Blog Hero', file: 'BlogHero.jsx', category: 'hero' },
  { id: COMPONENT_IDS.BLOG_HERO_BANNER, label: 'Blog Hero Banner', file: 'BlogHeroBanner.jsx', category: 'hero' },

  { id: COMPONENT_IDS.STATS, label: 'Stats', file: 'Stats.jsx', category: 'content' },
  { id: COMPONENT_IDS.ABOUT, label: 'About', file: 'About.jsx', category: 'content' },
  { id: COMPONENT_IDS.OUR_COMPANY, label: 'Our Company', file: 'OurCompany.jsx', category: 'content' },
  { id: COMPONENT_IDS.WHY_CHOOSE_US, label: 'Why Choose Us', file: 'WhyChooseUs.jsx', category: 'content' },
  { id: COMPONENT_IDS.WHY_CHOOSE_ABOUT, label: 'Why Choose About', file: 'WhyChooseAbout.jsx', category: 'content' },
  { id: COMPONENT_IDS.PROGRAMS_SLIDER, label: 'Programs Slider', file: 'ProgramsSlider.jsx', category: 'content' },
  { id: COMPONENT_IDS.COURSES_SLIDER, label: 'Courses Slider', file: 'CoursesSlider.jsx', category: 'content' },
  { id: COMPONENT_IDS.AFFILIATIONS, label: 'Affiliations', file: 'Affiliations.jsx', category: 'content' },
  { id: COMPONENT_IDS.EXPERTISE, label: 'Expertise', file: 'Expertise.jsx', category: 'content' },
  { id: COMPONENT_IDS.TOP_EMPLOYERS, label: 'Top Employers', file: 'TopEmployers.jsx', category: 'content' },
  { id: COMPONENT_IDS.VIDEO_SECTION, label: 'Video Section', file: 'VideoSection.jsx', category: 'content' },
  { id: COMPONENT_IDS.TESTIMONIALS, label: 'Testimonials', file: 'Testimonials.jsx', category: 'content' },
  { id: COMPONENT_IDS.ARTICLES, label: 'Articles', file: 'Articles.jsx', category: 'content' },
  { id: COMPONENT_IDS.FAQ, label: 'FAQ', file: 'FAQ.jsx', category: 'content' },
  { id: COMPONENT_IDS.CONTACT, label: 'Contact', file: 'Contact.jsx', category: 'content' },
  { id: COMPONENT_IDS.NFCI_HISTORY, label: 'NFCI History', file: 'NFCIHistory.jsx', category: 'content' },
  { id: COMPONENT_IDS.ABOUT_TEAM, label: 'About Team', file: 'AboutTeam.jsx', category: 'content' },
  { id: COMPONENT_IDS.TRAINING_PARTNERS, label: 'Training Partners', file: 'TrainingPartners.jsx', category: 'content' },

  { id: COMPONENT_IDS.PARTNERS_LOGO_GRID, label: 'Partners Logo Grid', file: 'PartnersLogoGridSection.jsx', category: 'events' },
  { id: COMPONENT_IDS.FUTURE_LEADERS_EVENT, label: 'Future Leaders Event', file: 'FutureLeadersEventSection.jsx', category: 'events' },
  { id: COMPONENT_IDS.UPCOMING_EVENTS, label: 'Upcoming Events', file: 'UpcomingEventsSection.jsx', category: 'events' },
  { id: COMPONENT_IDS.FEATURED_EVENT_BANNER, label: 'Featured Event Banner', file: 'FeaturedEventBanner.jsx', category: 'events' },
  { id: COMPONENT_IDS.EVENT_PAGE_TEAM, label: 'Event Page Team', file: 'EventPageTeam.jsx', category: 'events' },
  { id: COMPONENT_IDS.EVENT_STATS, label: 'Event Stats', file: 'EventStatsSection.jsx', category: 'events' },
  { id: COMPONENT_IDS.RECENT_EVENTS, label: 'Recent Events', file: 'RecentEventsSection.jsx', category: 'events' },
  { id: COMPONENT_IDS.RELATED_EVENTS, label: 'Related Events', file: 'RelatedEventsSection.jsx', category: 'events' },
  { id: COMPONENT_IDS.ABOUT_EVENT_GALLERY, label: 'About Event Gallery', file: 'AboutEventGallerySection.jsx', category: 'events' },
  { id: COMPONENT_IDS.FEATURED_MUSIC_FESTIVAL, label: 'Featured Music Festival', file: 'FeaturedMusicFestivalSection.jsx', category: 'events' },

  { id: COMPONENT_IDS.BLOG_CARD_SECTION, label: 'Blog Card Section', file: 'BlogCardSection.jsx', category: 'blog' },
  { id: COMPONENT_IDS.RECENT_POSTS, label: 'Recent Posts', file: 'RecentPostsSection.jsx', category: 'blog' },
  { id: COMPONENT_IDS.RELATED_POSTS, label: 'Related Posts', file: 'RelatedPosts.jsx', category: 'blog' },
  { id: COMPONENT_IDS.BLOG_DETAIL_CONTENT, label: 'Blog Detail Content', file: 'BlogDetailscontent.jsx', category: 'blog' },

  { id: COMPONENT_IDS.EXPLORE_COURSES, label: 'Explore Courses', file: 'ExploreCoursesSection.jsx', category: 'courses' },
  { id: COMPONENT_IDS.REASONS_SECTION, label: 'Reasons Section', file: 'ReasonsSection.jsx', category: 'courses' },
  { id: COMPONENT_IDS.WHAT_WILL_YOU_LEARN, label: 'What Will You Learn', file: 'WhatWillYouLearnSection.jsx', category: 'courses' },
  { id: COMPONENT_IDS.INDIAN_TANDOORI_GALLERY, label: 'Indian Tandoori Gallery', file: 'IndianTandooriGallerySection.jsx', category: 'courses' },
  { id: COMPONENT_IDS.CERTIFICATE_TANDOOR, label: 'Certificate Tandoor', file: 'CertificateTandoorSection.jsx', category: 'courses' },
  { id: COMPONENT_IDS.INDIAN_COOKING_ELIGIBILITY, label: 'Indian Cooking Eligibility', file: 'IndianCookingCourseEligibility.jsx', category: 'courses' },
  { id: COMPONENT_IDS.INDIAN_CUISINE_COURSE_DETAILS, label: 'Indian Cuisine Course Details', file: 'IndianCuisineCourseDetails.jsx', category: 'courses' },
]

export function getComponentMeta(componentId) {
  return COMPONENT_CATALOG.find((item) => item.id === componentId) ?? null
}

export function isRegisteredComponentId(componentId) {
  return ALL_COMPONENT_IDS.includes(componentId)
}

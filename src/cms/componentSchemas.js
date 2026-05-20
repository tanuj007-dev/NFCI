import heroBg from '../assets/hero.webp'
import aboutHeroBg from '../assets/9efab064d1906bca067b28675acc7f56aa44edd2.webp'
import aboutImg from '../assets/about.jpg'
import b1 from '../assets/b1.png'
import b2 from '../assets/b2.png'
import b3 from '../assets/b3.png'
import b4 from '../assets/b4.png'

const F = {
  eyebrow: { key: 'eyebrow', type: 'text', label: 'Eyebrow / tag' },
  title: { key: 'title', type: 'text', label: 'Heading' },
  subtitle: { key: 'subtitle', type: 'textarea', label: 'Subtitle / description' },
  description: { key: 'description', type: 'textarea', label: 'Body text' },
  body2: { key: 'body2', type: 'textarea', label: 'Second paragraph' },
  image: { key: 'image', type: 'image', label: 'Main image' },
  backgroundImage: { key: 'backgroundImage', type: 'image', label: 'Background image' },
  primaryButton: { key: 'primaryButtonText', type: 'text', label: 'Primary button text' },
  secondaryButton: { key: 'secondaryButtonText', type: 'text', label: 'Secondary button text' },
  bgClass: { key: 'bgColor', type: 'text', label: 'Background class (Tailwind)' },
  logos: { key: 'logos', type: 'image-list', label: 'Logo images', max: 6 },
}

function schema(fields, defaults = {}, note = '') {
  return { fields, defaults, note }
}

const heroDefaults = {
  title: "Are You Looking For a Career In The Hospitality Industry",
  subtitle: "India's premier institute for Hotel Management & Culinary Arts. Transform your passion into a rewarding career with world-class training.",
  backgroundImage: heroBg,
  primaryButtonText: 'EXPLORE COURSES',
  secondaryButtonText: 'BROWSE LOCATIONS',
}

const aboutHeroDefaults = {
  title: 'About NFCI',
  subtitle: "India's premier institute for Hotel Management & Culinary Arts. Transform your passion into a rewarding career with world-class training.",
  backgroundImage: aboutHeroBg,
}

const placementHeroDefaults = {
  title: 'Placements at NFCI',
  subtitle: '100% placement assistance with esteemed hospitality establishments across India and abroad. Launch your culinary career with NFCI.',
  backgroundImage: aboutHeroBg,
}

const aboutDefaults = {
  eyebrow: 'ABOUT US',
  title: 'Welcome To NFCI – Hotel Management & Culinary Institute In India',
  description: 'National Finishing and Cookery Institute (NFCI) is both research-intensive and learner-centred where students across India master excellence in the field of food and hospitality. The culinary centre is an amalgamation of opportunities, connections and prominent placements.',
  body2: 'Today, the food industry has grown to manifold with abundant opportunities and career plans. We offer degree and associate programs spanning the core of food industry.',
  image: aboutImg,
}

const topEmployersDefaults = {
  title: 'Some Esteemed Top Employers that Hire NFCI Students',
  description: 'Top employers look to the NFCI when hiring, and when you grab your NFCI certification, they wish to take you on board. Backed with 36 years of experience, our hotel management institute is a full-service culinary institute.',
  logos: [b1, b2, b3, b4],
}

const section = (defaults, extra = []) =>
  schema(
    [F.eyebrow, F.title, F.subtitle, F.description, F.image, F.backgroundImage, ...extra],
    defaults,
  )

/** @type {Record<string, { fields: object[], defaults: object, note?: string }>} */
export const COMPONENT_SCHEMAS = {
  navbar: schema([], {}, 'Navbar links are defined in Navbar.jsx'),
  'about-navbar': schema([], {}, 'About navbar links are defined in AboutNavbar.jsx'),
  footer: schema([], {}, 'Footer content is defined in Footer.jsx'),

  hero: schema(
    [F.title, F.subtitle, F.backgroundImage, F.primaryButton, F.secondaryButton],
    heroDefaults,
  ),
  'about-hero': schema([F.title, F.subtitle, F.backgroundImage], aboutHeroDefaults),
  'placement-hero': schema([F.title, F.subtitle, F.backgroundImage], placementHeroDefaults),
  'career-beauty-hero': section(
    { title: 'Career in Beauty & Wellness', subtitle: 'Explore certificate and diploma programs.' },
    [F.backgroundImage],
  ),
  'events-hero': section({ title: 'Events at NFCI', subtitle: 'Workshops, festivals, and industry connect.' }, [F.backgroundImage]),
  'blog-hero': section({ title: 'NFCI Blog', subtitle: 'News, tips, and culinary insights.' }, [F.backgroundImage]),
  'blog-hero-banner': section({ title: 'Latest from NFCI', subtitle: '' }, [F.image]),

  stats: schema([], {}, 'Stats counters are defined in Stats.jsx'),
  about: schema([F.eyebrow, F.title, F.description, F.body2, F.image], aboutDefaults),
  'our-company': section({ eyebrow: 'OUR COMPANY', title: 'Our Company', description: '' }),
  'why-choose-us': section({ title: 'Why Choose Us', description: '' }),
  'why-choose-about': section({ title: 'Why Choose NFCI', description: '' }),
  'programs-slider': section({ title: 'Our Programs', description: '' }),
  'courses-slider': section({ title: 'Our Courses', description: '' }),
  affiliations: section({ title: 'Affiliations', description: '' }),
  expertise: section({
    title: 'Our Expertise',
    description: 'We offer certificate courses and associate programs spanning the core of the food industry.',
  }),
  'top-employers': schema([F.title, F.description, F.logos], topEmployersDefaults),
  'video-section': section({ title: 'Video', description: '' }, [{ key: 'videoUrl', type: 'text', label: 'Video URL' }]),
  testimonials: section({ title: 'Testimonials', description: '' }),
  articles: section({ title: 'Articles', description: '' }),
  faq: schema(
    [F.title, F.subtitle],
    { title: 'Frequently Asked Questions', subtitle: 'Find answers to common questions about NFCI.' },
  ),
  contact: schema(
    [F.title, F.subtitle, F.bgClass],
    { title: 'Contact Us', subtitle: 'Get in touch with our admissions team.', bgColor: 'bg-white' },
  ),
  'nfci-history': section({ title: 'NFCI History', description: '' }),
  'about-team': section({ title: 'Our Team', description: '' }),
  'training-partners': section({ title: 'Training Partners', description: '' }),

  'partners-logo-grid': section({ title: 'Partners', description: '' }, [F.logos]),
  'future-leaders-event': section({ title: 'Future Leaders', description: '' }, [F.image]),
  'upcoming-events': section({ title: 'Upcoming Events', description: '' }),
  'featured-event-banner': section({ title: 'Featured Event', description: '' }, [F.image]),
  'event-page-team': section({ title: 'Event Team', description: '' }),
  'event-stats': schema([], {}, 'Event stats are defined in EventStatsSection.jsx'),
  'recent-events': section({ title: 'Recent Events', description: '' }),
  'related-events': section({ title: 'Related Events', description: '' }),
  'about-event-gallery': section({ title: 'Event Gallery', description: '' }, [F.image]),
  'featured-music-festival': section({ title: 'Featured Music Festival', description: '' }, [F.image]),

  'blog-card-section': section({ title: 'Blog', description: '' }),
  'recent-posts': section({ title: 'Recent Posts', description: '' }),
  'related-posts': section({ title: 'Related Posts', description: '' }),
  'blog-detail-content': section({ title: 'Blog Article', description: '' }, [F.image]),

  'explore-courses': section({ title: 'Explore Courses', description: '' }),
  'reasons-section': section({ title: 'Reasons to Join', description: '' }, [F.image]),
  'what-will-you-learn': section({ title: 'What Will You Learn', description: '' }),
  'indian-tandoori-gallery': section({ title: 'Indian Tandoori', description: '' }, [F.image]),
  'certificate-tandoor': section({ title: 'Certificate Tandoor', description: '' }, [F.image]),
  'indian-cooking-eligibility': section({ title: 'Eligibility', description: '' }),
  'indian-cuisine-course-details': section({ title: 'Course Details', description: '' }, [F.image]),
}

export function getComponentSchema(componentId) {
  return COMPONENT_SCHEMAS[componentId] ?? schema([], {}, 'No schema defined')
}

export function getDefaultProps(componentId) {
  const { defaults } = getComponentSchema(componentId)
  return structuredClone(defaults ?? {})
}

export function mergeWithDefaults(componentId, props = {}) {
  return { ...getDefaultProps(componentId), ...props }
}

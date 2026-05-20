/**
 * Sample page render flow for CMS-driven pages.
 * Each step is what the runtime does for one block on the home page.
 *
 * Preview route (when wired): /preview/home
 */
export const HOME_PAGE_FLOW = {
  pageId: 'home',
  slug: '/',
  steps: [
    {
      step: 0,
      action: 'LOAD_PAGE_CONFIG',
      input: 'pages/home.json',
      output: 'page object with blocks[]',
    },
    {
      step: 1,
      action: 'SORT_BLOCKS',
      input: 'blocks ordered by `order` field',
      output: 'sorted blocks array',
    },
    {
      step: 2,
      action: 'RENDER_PAGE_SHELL',
      input: 'pageLayout.navbarWrapper',
      output: 'wrapper div (e.g. absolute-top for navbar)',
    },
    {
      step: 3,
      action: 'LOOP_BLOCKS',
      input: 'each block: { instanceId, componentId, props }',
      output: 'one React section per block',
    },
    {
      step: 4,
      action: 'RESOLVE_COMPONENT',
      input: 'block.componentId → componentRegistry[componentId]',
      output: 'React component (Hero, Stats, …)',
    },
    {
      step: 5,
      action: 'RENDER_BLOCK',
      input: '<Component key={instanceId} {...props} />',
      output: 'DOM section on page',
    },
    {
      step: 6,
      action: 'ATTACH_FOOTER',
      input: 'App.jsx global Footer',
      output: 'Footer below main content',
    },
  ],
  blockPipeline: [
    { order: 1, instanceId: 'home-navbar', componentId: 'navbar', component: 'Navbar' },
    { order: 2, instanceId: 'home-hero', componentId: 'hero', component: 'Hero' },
    { order: 3, instanceId: 'home-stats', componentId: 'stats', component: 'Stats' },
    { order: 4, instanceId: 'home-about', componentId: 'about', component: 'About' },
    { order: 5, instanceId: 'home-our-company', componentId: 'our-company', component: 'OurCompany' },
    { order: 6, instanceId: 'home-why-choose-us', componentId: 'why-choose-us', component: 'WhyChooseUs' },
    { order: 7, instanceId: 'home-programs-slider', componentId: 'programs-slider', component: 'ProgramsSlider' },
    { order: 8, instanceId: 'home-affiliations', componentId: 'affiliations', component: 'Affiliations' },
    { order: 9, instanceId: 'home-expertise', componentId: 'expertise', component: 'Expertise' },
    { order: 10, instanceId: 'home-top-employers', componentId: 'top-employers', component: 'TopEmployers' },
    { order: 11, instanceId: 'home-video-section', componentId: 'video-section', component: 'VideoSection' },
    { order: 12, instanceId: 'home-testimonials', componentId: 'testimonials', component: 'Testimonials' },
    { order: 13, instanceId: 'home-articles', componentId: 'articles', component: 'Articles' },
    { order: 14, instanceId: 'home-faq', componentId: 'faq', component: 'FAQ' },
    { order: 15, instanceId: 'home-contact', componentId: 'contact', component: 'Contact' },
  ],
}

export const PLACEMENT_PAGE_FLOW = {
  pageId: 'placement',
  slug: '/placements',
  steps: HOME_PAGE_FLOW.steps,
  blockPipeline: [
    { order: 1, instanceId: 'placement-navbar', componentId: 'about-navbar', component: 'AboutNavbar' },
    { order: 2, instanceId: 'placement-hero', componentId: 'placement-hero', component: 'PlacementHero' },
    { order: 3, instanceId: 'placement-stats', componentId: 'stats', component: 'Stats' },
    { order: 4, instanceId: 'placement-top-employers', componentId: 'top-employers', component: 'TopEmployers' },
    { order: 5, instanceId: 'placement-expertise', componentId: 'expertise', component: 'Expertise' },
    { order: 6, instanceId: 'placement-why-choose-us', componentId: 'why-choose-us', component: 'WhyChooseUs' },
    { order: 7, instanceId: 'placement-training-partners', componentId: 'training-partners', component: 'TrainingPartners' },
    { order: 8, instanceId: 'placement-testimonials', componentId: 'testimonials', component: 'Testimonials' },
    { order: 9, instanceId: 'placement-faq', componentId: 'faq', component: 'FAQ' },
    { order: 10, instanceId: 'placement-contact', componentId: 'contact', component: 'Contact' },
  ],
}

export default HOME_PAGE_FLOW

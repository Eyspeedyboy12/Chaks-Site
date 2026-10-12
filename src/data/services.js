export const services = [
  {
    id: 'frontend-dev',
    number: '01',
    title: 'Frontend Engineering & Web Applications',
    subtitle: 'From pixel-perfect designs to resilient, scalable React architecture.',
    description: 'I build modern web experiences prioritizing blazing performance, pristine component structure, and accessible interactions. No bloated bundles or brittle hacks—just bulletproof code.',
    deliverables: [
      'Modern React & Next-ready Architecture',
      'Interactive State Machines & Custom Hooks',
      'Full Responsive Breakpoint Tuning',
      'WCAG 2.1 AA Accessibility Compliance',
      'API, Headless CMS, & Stripe Integrations'
    ],
    highlight: '60fps UI animations, sub-second initial load, zero technical debt.'
  },
  {
    id: 'creative-direction',
    number: '02',
    title: 'Creative Direction & Design Systems',
    subtitle: 'Visual languages that stick in minds and elevate market perception.',
    description: 'Great digital products require cohesive aesthetic foundations. I engineer comprehensive design systems that bridge Figma files and production code seamlessly.',
    deliverables: [
      'Bespoke Brand Identity & Typography Rules',
      'Figma Token Systems & UI Component Libraries',
      'Interactive Prototyping & User Flows',
      'Grid, Color, & Spacing Scales',
      'Comprehensive Developer Documentation'
    ],
    highlight: 'Unified design tokens directly synced between Figma and React.'
  },
  {
    id: 'motion-interaction',
    number: '03',
    title: 'Creative Code & Tactile Micro-Interactions',
    subtitle: 'Giving personality and soul to digital touchpoints.',
    description: 'Subtle physics, meaningful cursor responses, and fluid transitions make the difference between an average website and an unforgettable digital experience.',
    deliverables: [
      'Custom SVG & Canvas Vector Animations',
      'Smooth Page Transitions & Scroll Drivers',
      'Sound Design & Web Audio Feedback',
      'Interactive Micro-States & Hover Effects',
      'Performance Guardrails for Low-Power Devices'
    ],
    highlight: 'Delightful motion that respects reduced-motion preferences.'
  },
  {
    id: 'performance-seo',
    number: '04',
    title: 'Speed Audits, SEO & Technical Growth',
    subtitle: 'Ensuring your digital home gets discovered and loads instantly everywhere.',
    description: 'A beautiful site that takes 5 seconds to load loses half its audience. I optimize core web vitals, bundle weights, dynamic assets, and technical SEO structure.',
    deliverables: [
      'Core Web Vitals Optimization (LCP, FID, CLS)',
      'Structured Schema Markup & Dynamic OpenGraph',
      'Asset Compression & Modern Image Pipelines',
      'Clean Semantic HTML Hierarchy',
      'Analytics & Privacy-Friendly Telemetry Setup'
    ],
    highlight: 'Consistent 95+ scores on Google PageSpeed Insights.'
  }
];

export const processSteps = [
  {
    step: '01',
    name: 'Discovery & Vision',
    duration: 'Week 1',
    details: 'We dive deep into your brand ethos, target audience, competitive landscape, and specific business goals. We establish strict project constraints and aesthetic guardrails.'
  },
  {
    step: '02',
    name: 'Prototype & Design',
    duration: 'Weeks 2-3',
    details: 'Translating concepts into interactive Figma wireframes and high-fidelity prototypes. You experience the typography, colors, and layouts before writing any code.'
  },
  {
    step: '03',
    name: 'Build & Polish',
    duration: 'Weeks 3-5',
    details: 'Crafting clean, modular React components with thoughtful micro-interactions. Thorough cross-browser testing across mobile, tablet, and desktop viewports.'
  },
  {
    step: '04',
    name: 'Launch & Handoff',
    duration: 'Week 6',
    details: 'Deploying to high-availability CDNs, configuring custom domains, running final Lighthouse audits, and providing training or handover documentation.'
  }
];

export const projectScopes = [
  { id: 'landing', label: 'Bespoke Brand Landing Page', baseCost: 1500, timeWeeks: '2-3 weeks' },
  { id: 'multipage', label: 'Full Multi-Page Company Website', baseCost: 3200, timeWeeks: '4-5 weeks' },
  { id: 'webapp', label: 'Interactive Web App / Dashboard', baseCost: 4800, timeWeeks: '6-8 weeks' },
  { id: 'design-system', label: 'Comprehensive Design System', baseCost: 2400, timeWeeks: '3-4 weeks' },
  { id: 'audit', label: 'Performance Audit & Refactor', baseCost: 1200, timeWeeks: '1-2 weeks' }
];

export const faqs = [
  {
    question: 'How do you handle project timelines and communication?',
    answer: 'I work with select clients at a time to ensure 100% focused attention. You receive weekly video milestones, direct Slack/email access, and live staging previews at every step.'
  },
  {
    question: 'Can you work with our existing backend or CMS?',
    answer: 'Absolutely. Whether you use Headless WordPress, Strapi, Sanity, Supabase, Node/Express, or custom REST/GraphQL APIs, I integrate frontend interfaces cleanly and type-safely.'
  },
  {
    question: 'What happens after the website is launched?',
    answer: 'Every project includes 30 days of post-launch warranty and bug fixes. I also offer monthly retainer packages for continuous feature development and maintenance.'
  },
  {
    question: 'Do you design in Figma or directly in code?',
    answer: 'Both! I often create foundational visual designs and wireframes in Figma for fast feedback, and then bring complex interactive states to life directly in responsive code.'
  }
];


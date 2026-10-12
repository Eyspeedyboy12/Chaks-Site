export const projects = [
  {
    id: 'saffron-studio',
    title: 'Saffron Studio',
    subtitle: 'Identity · Digital experience',
    category: 'Branding',
    featured: true,
    year: '2026',
    artClass: 'saffron-art',
    badge: '01 / Brand world',
    tagline: 'fresh thinking',
    description: 'A sun-drenched visual identity, dynamic design system, and high-performance headless web experience created for an artisanal specialty roastery based in Melbourne.',
    longDescription: 'Saffron Studio needed a complete transformation from a local café into a recognized lifestyle brand. We developed an expressive typography palette paired with rich ochre and saffron tones, translated into an ultra-fast web store with custom coffee subscription configurators and micro-interactions.',
    deliverables: ['Brand Architecture', 'Custom Typography System', 'Headless React Frontend', 'Motion Design Guidelines'],
    techStack: ['React', 'CSS Custom Properties', 'Vite', 'Figma', 'Shopify Storefront API'],
    metrics: [
      { label: 'Conversion Lift', value: '+142%' },
      { label: 'Avg Page Load', value: '0.4s' },
      { label: 'Mobile Sales Share', value: '78%' }
    ],
    testimonial: {
      quote: "Chaks understood our aesthetic vision from the very first sketch. The site feels like a natural extension of our physical café space.",
      author: "Elena Rostova",
      role: "Creative Director, Saffron Studio"
    }
  },
  {
    id: 'after-hours',
    title: 'After Hours',
    subtitle: 'Product design · Development',
    category: 'Product Design',
    featured: true,
    year: '2025',
    artClass: 'night-art',
    badge: '02 / Digital product',
    tagline: 'after hours',
    hasStar: true,
    description: 'A minimalist ambient sound generator and focused writing sanctuary engineered for creative developers and night-owl authors.',
    longDescription: 'Built out of a personal frustration with cluttered productivity tools, After Hours strips away notifications, gamification, and clutter. It combines Web Audio API procedural sound synthesis (rain, vinyl dust, café murmur) with a distraction-free markdown canvas and local-first encryption.',
    deliverables: ['Product Strategy', 'UI/UX Prototyping', 'Web Audio Architecture', 'State Persistence Engine'],
    techStack: ['React', 'Web Audio API', 'IndexedDB', 'Tailored CSS', 'Vite'],
    metrics: [
      { label: 'Monthly Active Users', value: '45k+' },
      { label: 'Avg Session Length', value: '48 min' },
      { label: 'App Store Rating', value: '4.9 / 5' }
    ],
    testimonial: {
      quote: "My daily writing ritual lives inside After Hours. The craft, typographic rhythm, and audio textures are masterclass.",
      author: "Julian Vance",
      role: "Novelist & Tech Essayist"
    }
  },
  {
    id: 'kinetic-type-lab',
    title: 'Kinetic Type Lab',
    subtitle: 'Creative tech · Experimental web',
    category: 'Creative Tech',
    featured: true,
    year: '2026',
    artClass: 'kinetic-art',
    badge: '03 / Creative code',
    tagline: 'motion in type',
    description: 'An interactive typographic physics playground exploring fluid simulation, variable fonts, and real-time SVG deformation in the browser.',
    longDescription: 'Kinetic Type Lab was engineered to push the boundaries of variable typography in modern browsers. Users manipulate tensile strength, gravity vectors, and mouse velocities to generate expressive typographic animations that export directly to SVG or WebM format.',
    deliverables: ['WebGL Shaders', 'Variable Font Parser', 'Interactive Canvas Engine', 'Video Export Pipeline'],
    techStack: ['Canvas API', 'WebGL / GLSL', 'React', 'Variable Fonts', 'Web Workers'],
    metrics: [
      { label: 'GitHub Stars', value: '3.4k' },
      { label: 'Frame Rate', value: '60 FPS' },
      { label: 'Awwwards Recognition', value: 'Honorable Mention' }
    ],
    testimonial: {
      quote: "One of the most inspiring demonstrations of creative web development we have tested all year.",
      author: "Kaito Tanaka",
      role: "Judge, Creative Web Collective"
    }
  },
  {
    id: 'verdant-living',
    title: 'Verdant Modular',
    subtitle: 'Architecture · Web experience',
    category: 'Web Experience',
    featured: false,
    year: '2025',
    artClass: 'verdant-art',
    badge: '04 / Spatial portfolio',
    tagline: 'earth & form',
    description: 'An immersive digital portfolio and interactive cost configurator for sustainable, carbon-neutral prefabricated architectural dwellings.',
    longDescription: 'Verdant designs architect-crafted homes that tread lightly on the land. We designed an interactive spatial walkthrough allowing prospective buyers to explore floorplans, calculate carbon savings, and configure natural materials in real time.',
    deliverables: ['Interactive Configurator', 'Spatial 3D Model Viewer', 'Carbon Savings Calculator', 'Bespoke CMS Integration'],
    techStack: ['React', 'CSS Grid', 'Three.js Lite', 'Headless CMS'],
    metrics: [
      { label: 'Client Inquiries', value: '+210%' },
      { label: 'Lighthouse Score', value: '98/100' },
      { label: 'Engagement Rate', value: '6.2x' }
    ],
    testimonial: {
      quote: "Our architectural clients are blown away by the clarity and tactile feel of the configurator.",
      author: "Marcus Lindqvist",
      role: "Founder, Verdant Studios"
    }
  },
  {
    id: 'aura-soundworks',
    title: 'Aura Soundworks',
    subtitle: 'Branding · Audio licensing',
    category: 'Branding',
    featured: false,
    year: '2025',
    artClass: 'aura-art',
    badge: '05 / Audio identity',
    tagline: 'sound & vision',
    description: 'A bespoke audio licensing platform and visual identity for cinematic film composers and independent game creators.',
    longDescription: 'Aura bridges the gap between orchestral composers and game developers. We created an intuitive waveform search experience that lets directors filter tracks by emotional tone, tempo, and stem instrumentation without friction.',
    deliverables: ['Waveform Visualizer UI', 'Audio Search Algorithm', 'Checkout Flow Optimization', 'Brand Identity Kit'],
    techStack: ['React', 'HTML5 Audio', 'SVG Filters', 'Stripe Integration'],
    metrics: [
      { label: 'Catalog Licenses Sold', value: '1,200+' },
      { label: 'Checkout Drop-off', value: '-34%' },
      { label: 'Audio Playback Latency', value: '< 20ms' }
    ],
    testimonial: {
      quote: "Licensing music for our indie game took 5 minutes instead of 3 weeks of email back-and-forths.",
      author: "Sofia Mendez",
      role: "Lead Producer, Echo Games"
    }
  },
  {
    id: 'monolith-ledger',
    title: 'Monolith Ledger',
    subtitle: 'Fintech · Enterprise dashboard',
    category: 'Product Design',
    featured: false,
    year: '2024',
    artClass: 'monolith-art',
    badge: '06 / Data visualization',
    tagline: 'sharp data',
    description: 'A high-density real-time financial clearing console crafted for treasury officers handling multi-currency cross-border transactions.',
    longDescription: 'Replacing cluttered spreadsheet views with a clean, high-contrast command center. Monolith Ledger enables corporate treasury teams to visualize liquidity pools, simulate foreign exchange hedging, and execute batch transfers with confidence.',
    deliverables: ['High-Density Data Grid', 'Real-time Charting Suite', 'Keyboard Shortcut Engine', 'Design System Library'],
    techStack: ['React', 'Canvas Charting', 'WebSockets', 'WCAG AAA Accessibility'],
    metrics: [
      { label: 'Daily Processed Vol', value: '$45M+' },
      { label: 'Task Completion Speed', value: '3x Faster' },
      { label: 'Error Margin', value: '0.00%' }
    ],
    testimonial: {
      quote: "The interface makes complex treasury analytics instantly comprehensible for our global team.",
      author: "David Chen",
      role: "VP Treasury, Horizon Global"
    }
  }
];


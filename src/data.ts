import { Project, Service, Testimonial, TeamMember, BlogPost } from "./types";

export const projects: Project[] = [
  // UI/UX Design (6 items)
  {
    id: "boltshift",
    name: "Boltshift",
    year: "2025",
    image: "https://images.unsplash.com/photo-1544923246-77307dd654cb?q=80&w=800&auto=format&fit=crop",
    category: "UI/UX Design",
    tagline: "Bold engineering meets comfortable visual aesthetics.",
    client: "Boltshift Automotive Inc.",
    duration: "4 Months (Q1 2025)",
    services: ["Brand Architecture", "Responsive Web Design", "WebGL Render Engine", "Figma Design System"],
    detailedOverview: "Boltshift is a high-performance electric vehicle software platform that simplifies vehicle fleet management. We redesigned their visual identity from scratch and engineered a low-latency WebGL interface that showcases battery configurations and fleet telemetry in real time.",
    challenge: "The existing platform suffered from high visual layout clutter and sluggish performance on tablet displays during fleet operations. Users struggled to customize electric battery components quickly under high-pressure logistics decisions.",
    solution: "We engineered a modular headless design system coupled with custom component rendering. We created high-fidelity interactive configuration models using canvas elements and optimized structural layouts to scale gracefully across tablet and phone views.",
    results: [
      "48% boost in interface response times",
      "Decrease in onboarding documentation load by 35%",
      "User satisfaction score climbed to 98% in user tests"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop"
    ],
    techStack: ["React 19", "Three.js", "Tailwind CSS", "Vite", "Motion"],
    liveUrl: "https://boltshift.baylightstudio.com"
  },
  {
    id: "powersurge",
    name: "Powersurge",
    year: "2024",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop",
    category: "UI/UX Design",
    tagline: "A fiery red classic reimagined for high-velocity frontends.",
    client: "Powersurge Motors",
    duration: "6 Months",
    services: ["Automotive Landing Suites", "3D Interactive Showroom", "SEO Optimization", "Performance Architecture"],
    detailedOverview: "Powersurge is a boutique electric sports car modifier. We built their digital catalog with elegant fluid layouts, bringing an immersive 360-degree car visualizer to both client-tier desktop and tablet screens.",
    challenge: "Heavy 3D car models would routinely freeze tablet web browsers, frustrating high-intent custom vehicle purchasers and spiking site bounce rates.",
    solution: "We optimized all vehicle meshes down to high-performance low-polygon forms and added smart lazy-loading rendering. The entire viewport dynamically scales assets based on browser rendering power.",
    results: [
      "Reduced bounce rates by 23% globally",
      "3D render initialization dropped to less than 0.8 seconds",
      "Custom vehicle configurations built increased by 140%"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508974239320-0a029497e820?q=80&w=600&auto=format&fit=crop"
    ],
    techStack: ["React Three Fiber", "Web Components", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://powersurge.baylightstudio.com"
  },
  {
    id: "warpspeed",
    name: "Warpspeed",
    year: "2023",
    image: "https://images.unsplash.com/photo-1552084117-56a987666449?q=80&w=800&auto=format&fit=crop",
    category: "UI/UX Design",
    tagline: "Elegant bird's eye precision with instant load times.",
    client: "Warpspeed Logistics",
    duration: "5 Months",
    services: ["Edge Architecture Integration", "Logistics GIS Interface", "SVG Dashboard Design", "Real-time Monitoring API"],
    detailedOverview: "Warpspeed tracks global sea and air cargo in real time. We built a high-density, vector-accurate logistics tracking interface that supports thousands of dynamic points rendering cleanly at 60fps.",
    challenge: "Rendering dense logistics geographic points continuously degraded mobile and tablet battery status, causing thermal throttling and interface lag.",
    solution: "We transitioned map nodes to lightweight SVG structures with CSS matrix3d hardware-acceleration and decoupled data polls to run in background web-workers.",
    results: [
      "Battery drainage in tablet tests dropped by 60%",
      "Sustained 60 FPS performance on iPad and standard tablets",
      "Client average daily tracking sessions increased from 15 mins to over 45 mins"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop"
    ],
    techStack: ["Next.js", "Web Workers", "Svelte SVG Engine", "Framer Motion"],
    liveUrl: "https://warpspeed.baylightstudio.com"
  },
  {
    id: "cloudwatch",
    name: "CloudWatch",
    year: "2023",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=800&auto=format&fit=crop",
    category: "UI/UX Design",
    tagline: "Robust cloud monitoring made friendly and responsive.",
    client: "CloudWatch Systems Ltd.",
    duration: "3 Months",
    services: ["SaaS Product Design", "Dynamic Real-time Charts Implementation", "API Gateway Tooling", "Dark-Mode First Brand Book"],
    detailedOverview: "CloudWatch is an infrastructure monitor dashboard. We redefined their data representations with highly scannable, color-neutral charts and a high-contrast dark mode to reduce developer visual fatigue.",
    challenge: "Data charts from complex clouds would squish and become illegible when viewed on mobile landscape or tablet portrait screens.",
    solution: "We engineered responsive Recharts grid configurations with dynamic axis truncation, ensuring columns and data trends stay legible at any resolution.",
    results: [
      "Reduced alert validation time by 30% for engineers",
      "Perfect system usability scores in blind tablet tests",
      "Net Promoter Score (NPS) rose to record high of 78"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=600&auto=format&fit=crop"
    ],
    techStack: ["Recharts", "JSON Schemas", "React context", "Tailwind CSS"],
    liveUrl: "https://cloudwatch.baylightstudio.com"
  },
  {
    id: "vessel-os",
    name: "Vessel OS",
    year: "2025",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=800&auto=format&fit=crop",
    category: "UI/UX Design",
    tagline: "Fluid, navigation-led dashboard system for maritime operators.",
    client: "Vessel Maritime Group",
    duration: "3 Months",
    services: ["Heuristics Audit", "Information Architecture", "Touch Interaction Map", "High-Contrast UI"],
    detailedOverview: "Vessel OS is an in-cabin digital console designed specifically for container ship navigation officers. Built using a low-fatigue layout and responsive maps that remain fully usable under extreme glare and high-stress conditions.",
    challenge: "Standard screens are impossible to read under bright sunlight, and navigation paths were too complex for emergency decision loops.",
    solution: "We designed a high-contrast, pure monochromatic layout supplemented by high-chroma alert flags. Interaction target areas were expanded to a minimum of 64px to cater to unstable navigation environments.",
    results: [
      "Emergency reaction time cut by 55%",
      "Sublime contrast rating exceeding AAA accessibility standards",
      "Selected as standard bridge hardware across 40 fleets"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop"
    ],
    techStack: ["Tailwind CSS", "React 19", "Cypress Engine", "Web Sockets"],
    liveUrl: "https://vessel.baylightstudio.com"
  },
  {
    id: "fargo-health",
    name: "Fargo Health",
    year: "2024",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800&auto=format&fit=crop",
    category: "UI/UX Design",
    tagline: "Empathetic, fully accessible patient portal for medical clinics.",
    client: "Fargo Health Clinics",
    duration: "4 Months",
    services: ["WCAG 2.2 Audit", "Multi-lingual Interface", "Speech-to-Text Inputs", "Adaptive Font Sizing"],
    detailedOverview: "We transformed Fargo Health's confusing clinical portal into an interface that accommodates elderly and visually challenged individuals without sacrificing modern presentation aesthetics.",
    challenge: "Elderly patients routinely abandoned making online appointments due to small font scaling and confusing form workflows.",
    solution: "We integrated native browser speech-to-text assistants and an intuitive size-agnostic layout scaling model. The reservation funnel was reduced from 7 steps down to a single seamless scroll.",
    results: [
      "80% absolute increase in successful online reservations",
      "100% compliant with WCAG 2.2 Level AAA standards",
      "Recipient of the National HeathTech Design Award"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=600&auto=format&fit=crop"
    ],
    techStack: ["React", "CSS Variables", "Aria Attributes", "Next.js"],
    liveUrl: "https://fargo.baylightstudio.com"
  },

  // Graphic Design (6 items)
  {
    id: "solaris-editorial",
    name: "Solaris Book",
    year: "2025",
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=800&auto=format&fit=crop",
    category: "Graphic Design",
    tagline: "Minimalist layout and precision catalog layout design.",
    client: "Solaris Architecture Association",
    duration: "2 Months",
    services: ["Editorial Book Layout", "Custom Grids Systems", "Pre-press Typography Proofing", "Spot UV Print Finish"],
    detailedOverview: "A limited-edition publication presenting zero-carbon concrete architecture. We crafted a custom layout framework based on mathematical architectural proportions and managed production from typographic scaling to pre-press calibration.",
    challenge: "Dense layout schemata and grey concrete photography needed to print cleanly without losing texture depth and visual contrast.",
    solution: "We employed high-contrast typography pairing with a rigorous grid model. Printed components utilize high-pigment silver ink alongside matte spot coating layers.",
    results: [
      "Complete print run sold out within 14 days",
      "Featured in the International Print Design annual showcase",
      "Acclaimed by Swiss Graphic Board for typographical rigor"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1544923246-77307dd654cb?q=80&w=600&auto=format&fit=crop"
    ],
    techStack: ["Adobe InDesign", "Typography Scaling", "Pantone Inks", "Grid Theory"],
    liveUrl: "https://solaris-design.baylightstudio.com"
  },
  {
    id: "urban-grid-posters",
    name: "Grid Posters",
    year: "2024",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop",
    category: "Graphic Design",
    tagline: "Bold Swiss grid structures and custom vector exhibition posters.",
    client: "Metropolitan Exhibition Center",
    duration: "1 Month",
    services: ["Silkscreen Print Design", "Vector Geometry Design", "Swiss Typographic Style", "Color Calibration"],
    detailedOverview: "A series of high-impact silkscreen posters designed for the annual Sustainable Urbanism Expo. Using clean grotesque typography paired with high-impact flat vector geometry.",
    challenge: "Creating custom posters that are visually arresting from a distance but maintain structural alignment detail upon close inspection.",
    solution: "We drafted a precise 12-column grid and integrated hidden micro-type detailing that reveals itself only when standing within arms reach.",
    results: [
      "Distributed across 12 prominent transit centers",
      "Bronze medal winner at the Graphic Design Biennale",
      "Over 4,000 commemorative poster reprints sold"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop"
    ],
    techStack: ["Adobe Illustrator", "Garamond & Helvetica Pro", "Vector Construction"],
    liveUrl: "https://posters.baylightstudio.com"
  },
  {
    id: "nomad-packaging",
    name: "Nomad Box",
    year: "2024",
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=800&auto=format&fit=crop",
    category: "Graphic Design",
    tagline: "Tactile geometric eco-perfume containers and custom bottle prints.",
    client: "Nomad Botanical Scents",
    duration: "3 Months",
    services: ["Packaging Architecture", "Structural Die-Cut Layout", "Debossing Stamp Form", "Eco-friendly Ink Proofs"],
    detailedOverview: "We designed a zero-glue, zero-plastic packaging system for Nomad's custom natural fragrances. The geometric folding box unfolds into a presentation plate representing a blooming flower.",
    challenge: "Uncompromising ecological constraints: no synthetic plastic coatings or glues of any kind, while retaining a ultra-premium hand-touch experience.",
    solution: "We engineered a clever structural lock mechanism inside the cardboard design so the box remains perfectly secured by tension alone and printed using organic soy-bean pigments.",
    results: [
      "Zero plastic components used in the entire commercial SKU",
      "Packaging manufacturing costs lowered by 18%",
      "Winner of Eco-Packaging Design of the Year"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=600&auto=format&fit=crop"
    ],
    techStack: ["Die-Cut Structural CAD", "Fibre Premium Paper", "Debossing Block Molds"],
    liveUrl: "https://nomad-packaging.baylightstudio.com"
  },
  {
    id: "axis-catalogue",
    name: "Axis Catalog",
    year: "2023",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
    category: "Graphic Design",
    tagline: "Premium industrial product catalog utilizing physical typography systems.",
    client: "Axis Precision Tooling",
    duration: "2 Months",
    services: ["Product Catalog Layout", "Technical Blueprints Vectors", "Linen Bound Cover", "Stochastic Screen Print"],
    detailedOverview: "We designed a luxurious, linen-wrapped catalogue outlining custom heavy-machinery components for international trade partners. Layout files fuse technical precision diagrams with editorial clarity.",
    challenge: "Balancing sterile engineering charts with professional editorial styling to appeal to both field inspectors and corporate procurement leads.",
    solution: "We structured the book into dual halves using distinct paper stocks: high-contrast textured papers for catalog imagery and raw technical paper for blueprint calculations.",
    results: [
      "Distributed globally across 14 trade distribution nodes",
      "94% client retention reported following product catalog handover",
      "Acclaimed layout logic presented at Zurich Editorial Design Guild"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop"
    ],
    techStack: ["Adobe InDesign", "Vector Layouts", "Stochastic Screen Proofing"],
    liveUrl: "https://axis.baylightstudio.com"
  },
  {
    id: "orion-type",
    name: "Orion Font",
    year: "2025",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
    category: "Graphic Design",
    tagline: "Custom geometric sans-serif typeface designed for tech monographs.",
    client: "Orion Tech Publishing",
    duration: "3 Months",
    services: ["Glyph Architecture", "Type Kerning Calibration", "Dynamic Web Font Tuning", "Typography Specimens Sheet"],
    detailedOverview: "Orion is a customized geometric sans-serif typeface constructed for extreme legibility on physical screens when printing microcoded tech documentation indexes.",
    challenge: "Small physical prints of technical manuals suffered from legibility drop-offs on low-quality paper stocks.",
    solution: "We carved unique structural ink traps inside the letter corners to absorb ink bleeds and preserve clean glyph edges under micro-scale prints.",
    results: [
      "Supported 12 distinct language glyph sets across Europe",
      "Adopted as the official corporate print typeface for Orion Group",
      "Acclaimed as a top micro-typeface design by TypeFoundry Journal"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop"
    ],
    techStack: ["Glyphs App", "Spline Kerning", "Webfont Optimizers"],
    liveUrl: "https://orion-type.baylightstudio.com"
  },
  {
    id: "litho-cards",
    name: "Litho Identity",
    year: "2024",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
    category: "Graphic Design",
    tagline: "Edge-painted heavy cotton business cards and high-end letterheads.",
    client: "Litho Law Partners",
    duration: "1 Month",
    services: ["Edge Paint Calibration", "Duplex Paper Gluing", "Letterpress Foil Emboss", "Copper Plate Molds"],
    detailedOverview: "A deluxe physical graphic campaign for an elite consulting firm. We engineered business cards utilizing three layers of 350gsm extra-white organic cotton papers with a copper foil debossed seal.",
    challenge: "The copper foil debossing required high-density lines that usually tear thin fibers on organic cotton substrates.",
    solution: "We customized stamp temperatures down to 104 degrees and employed a unique secondary fiber compression phase during debossing.",
    results: [
      "Achieved absolute geometric alignment on every single print run",
      "Client reported heightened brand trust scores during introductory pitches",
      "Featured on Daily Brand Design boards"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop"
    ],
    techStack: ["Heavy Cotton Stocks", "Heidelberg Letterpress", "Copper Foil Stamps"],
    liveUrl: "https://litho.baylightstudio.com"
  },

  // Motion Graphics & Video Editing (6 items)
  {
    id: "cosmic-seq",
    name: "Cosmic Intro",
    year: "2025",
    image: "https://images.unsplash.com/photo-1552084117-56a987666449?q=80&w=800&auto=format&fit=crop",
    category: "Motion Graphics & Video Editing",
    tagline: "Kinetic particle simulations and 3D title sequences.",
    client: "Cosmic Sci-Fi Festival",
    duration: "2 Months",
    services: ["3D Physics Particles", "Cinematic Title Sequence", "Temporal Sound Integration", "Keyframe Animation Choreography"],
    detailedOverview: "We designed the cinematic opener video for the Cosmic Film Festival. Combining simulated particle streams and procedural space meshes into an elegant, high-impact intro loop.",
    challenge: "The particle simulations required rendering millions of active vectors without introducing muddy color maps or clipping contrast grids.",
    solution: "We leveraged octane-render engines and integrated dynamic exposure offsets. Video tracks were synchronized millisecond-by-millisecond to custom audio frequencies.",
    results: [
      "Intro broadcasted to an live audience exceeding 150,000 online viewers",
      "Praised by Cinema-Motion Guild for innovative visual pacing",
      "Subtle cinematic atmosphere translated beautifully into social media snippets"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=600&auto=format&fit=crop"
    ],
    techStack: ["After Effects", "Octane Render", "Cinema 4D", "Premiere Pro"],
    liveUrl: "https://cosmic-motion.baylightstudio.com"
  },
  {
    id: "kinetic-reveal",
    name: "Kinetic Brand",
    year: "2024",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=800&auto=format&fit=crop",
    category: "Motion Graphics & Video Editing",
    tagline: "Dynamic typographic video reveals and UI microcontext edits.",
    client: "Reveal AI Corp",
    duration: "1 Month",
    services: ["Kinetic Typography Loops", "Dynamic Camera Tracking", "Lottie Web Asset Tuning", "Vector Shape Morphings"],
    detailedOverview: "We built an interactive, web-deployable motion graphics package for Reveal's product landing. Elements morph smoothly based on user scroll triggers to boost landing page times.",
    challenge: "Video transitions were too sluggish on standard mobile screens when nested as inline heavy elements.",
    solution: "We converted all keyframe timelines into highly optimized JSON vector animations using Lottie. Responsive vectors resize gracefully inside React containers.",
    results: [
      "Interface engagement increased by 38% on average",
      "Reduced rendering weight from 14MB down to only 280KB",
      "Maintained crisp 120fps display rates on iPad Pro screens"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop"
    ],
    techStack: ["Lottie", "After Effects", "Bodymovin", "Framer Motion"],
    liveUrl: "https://kinetic.baylightstudio.com"
  },
  {
    id: "lumos-commercial",
    name: "Lumos Launch",
    year: "2024",
    image: "https://images.unsplash.com/photo-1508974239320-0a029497e820?q=80&w=800&auto=format&fit=crop",
    category: "Motion Graphics & Video Editing",
    tagline: "High-end product commercial featuring cinematic grading and sound design.",
    client: "Lumos smart Home Tech",
    duration: "3 Months",
    services: ["Cinematic Color Correction", "Audio Soundscape Synthesis", "Macro Camera Tracks", "Sleek 3D Compositing"],
    detailedOverview: "A 45-second launch commercial showcasing Lumos's tactile smart-hub product line. We handled all post-processing streams from initial rough layout cuts to color adjustments.",
    challenge: "Capturing the delicate glow on the physical product surfaces accurately across both bright studio and low-light bedroom sets.",
    solution: "We utilized DaVinci Resolve color grading schemes and added digital lighting masks to amplify ambient luminescence layers during production.",
    results: [
      "Generated over 1.2M impressions during the black-friday campaign",
      "92% audience retention rate across social media video layouts",
      "Lauded by Lumos executives for elite cinematography standard"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=600&auto=format&fit=crop"
    ],
    techStack: ["DaVinci Resolve", "Premiere Pro", "RED Camera Raw", "Ableton Live"],
    liveUrl: "https://lumos-launch.baylightstudio.com"
  },
  {
    id: "flux-showreel",
    name: "Flux Showreel",
    year: "2025",
    image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?q=80&w=800&auto=format&fit=crop",
    category: "Motion Graphics & Video Editing",
    tagline: "Fast-paced agency review featuring kinetic styling edits.",
    client: "Flux Venture Partners",
    duration: "2 Months",
    services: ["Video Pacing Alignment", "Sound Effects Mastering", "Kinetic Speed Ramps", "Dynamic Graphic Overlays"],
    detailedOverview: "A high-octane commercial overview video summarizing Flux's global investments portfolio. The layout utilizes dynamic split grids, speed ramps, and energetic typographic cuts.",
    challenge: "Arranging over 80 diverse project recordings into a unified 60-second video without looking chaotic.",
    solution: "We mapped out a custom modular template with consistent grids and uniform color grading parameters, transitioning scenes using bold monochromatic wipes.",
    results: [
      "Direct brand conversions grew by 28% after showreel website launch",
      "Recipient of Gold AVA Digital Award for Outstanding Marketing Video",
      "Shared widely across VC networks on LinkedIn"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=600&auto=format&fit=crop"
    ],
    techStack: ["Premiere Pro", "After Effects", "Soundly Pro", "Maxon Suite"],
    liveUrl: "https://flux-reel.baylightstudio.com"
  },
  {
    id: "vivid-explainer",
    name: "Vivid Explainer",
    year: "2023",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop",
    category: "Motion Graphics & Video Editing",
    tagline: "Creative kinetic vector explainer outlining core SaaS databases.",
    client: "Vivid Cloud Analytics",
    duration: "3 Months",
    services: ["Illustrative Board Layout", "Smooth Character Outlines", "Custom Audio Voiceovers", "Micro Interaction Tracks"],
    detailedOverview: "An elegant, highly educational explainer video that turns intricate multi-region cloud database concepts into clean geometric vectors and helpful voice narratives.",
    challenge: "Explain cloud clustering concepts within 2 minutes without confusing rookie corporate directors.",
    solution: "We designed friendly vector boxes with pulsing animated flows, keeping character movements simple and slow to encourage high topical retention.",
    results: [
      "Average user catalog registration conversion grew by 45%",
      "Adopted as standard training audio by Vivid client associates",
      "Over 100k views on YouTube with notable organic retention scores"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=600&auto=format&fit=crop"
    ],
    techStack: ["After Effects", "Illustrator CC", "Cinema 4D Lite", "Audition"],
    liveUrl: "https://vivid-explainer.baylightstudio.com"
  },
  {
    id: "sound-transit",
    name: "Sound Transit",
    year: "2024",
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=800&auto=format&fit=crop",
    category: "Motion Graphics & Video Editing",
    tagline: "Immersive audio visualizer and 3D kinetic typographic layouts.",
    client: "Transit Audio Collective",
    duration: "1 Month",
    services: ["Audio Waveform Render", "Sub-bass Particle Shakes", "3D Environment Mockups", "Dynamic Scene Wipes"],
    detailedOverview: "An interactive, bass-responsive 3D sound visualizer layout constructed to accompany digital ambient music broadcasts on high-contrast, screen arrays.",
    challenge: "Rendering real-time audio waveforms cleanly on portable monitors without burning high processing cycles.",
    solution: "We rendered high-fidelity lighting panels and nested them with pre-baked 3D environment coordinates, keeping raw real-time reactive overlays super-lightweight.",
    results: [
      "Sustained 60fps rendering rates on high-definition public kiosk arrays",
      "32% boost reported in playlist subscription rates after active video launch",
      "Featured as top project on MotionLab boards"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop"
    ],
    techStack: ["After Effects", "Fuzz Wave Engine", "Cinema 4D Octane"],
    liveUrl: "https://transit.baylightstudio.com"
  },

  // Brand Identity (6 items)
  {
    id: "ephemeral",
    name: "Ephemeral.",
    year: "2025",
    image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?q=80&w=800&auto=format&fit=crop",
    category: "Brand Identity",
    tagline: "Unveiling clarity through a digital, organic lens.",
    client: "Ephemeral Organic Skincare",
    duration: "3 Months (Q2 2025)",
    services: ["Visual Identity System", "Custom Product Typography", "Eco-packaging Design", "High-velocity Headless Ecommerce"],
    detailedOverview: "Ephemeral. is an eco-centric premium cosmetics brand emphasizing transparency. We crafted an ethereal brand book paired with a lightning-fast Shopify headless interface featuring beautiful interactive packaging designs.",
    challenge: "Ephemeral's original branding felt too medical and cold, losing the organic core message. Their ecommerce funnel also suffered on tablet devices because custom image-heavy carousels got clipped.",
    solution: "We redefined their visual framework with minimalist layouts, using generous negative space and slate color palettes. We built adaptive masonry product showcases optimized for touch drag gestures on tablets.",
    results: [
      "65% increase in mobile and tablet conversions",
      "Organic brand recognition grew by 80% on design boards",
      "Page speed score achieved a pristine 100 on mobile devices"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=600&auto=format&fit=crop"
    ],
    techStack: ["Shopify Hydrogen", "Tailwind CSS", "Motion", "Tailored Webpack"],
    liveUrl: "https://ephemeral.baylightstudio.com"
  },
  {
    id: "mastermail",
    name: "Mastermail",
    year: "2024",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
    category: "Brand Identity",
    tagline: "Premium, distraction-free messaging communication.",
    client: "Mastermail Technologies",
    duration: "2 Months",
    services: ["UX/UI Design", "Email Template Builder Engine", "Performance Caching Layer", "Brand System Guidelines"],
    detailedOverview: "Mastermail is a minimalist corporate mailing suite that strips out the visual noise. We designed a tranquil high-contrast light and dark workspace centered entirely around crisp text layout and rapid search queries.",
    challenge: "Professional and developer audiences wanted an immediate, responsive email search experience that works smoothly on the go via tablets, instead of clunky standalone applications.",
    solution: "We architected an offline-first browser cache combined with responsive sidebars that adapt layout seamlessly depending on screen width constraints.",
    results: [
      "Saved continuous server payload costs by 40%",
      "Tablet email searching achieved instantaneous results lists",
      "Client retention rose to 95% over the first fiscal quarter"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=600&auto=format&fit=crop"
    ],
    techStack: ["Tailwind CSS", "IndexedDB", "React 18", "Lucide React"],
    liveUrl: "https://mastermail.baylightstudio.com"
  },
  {
    id: "novacore-identity",
    name: "Nova Core",
    year: "2025",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
    category: "Brand Identity",
    tagline: "Full brand guidelines, custom visual style guides, and tech logo suites.",
    client: "NovaCore Tech",
    duration: "3 Months",
    services: ["Logo Geometry Mockups", "Comprehensive Brand Guidelines Book", "Typography Hierarchies", "Corporate Asset Folders"],
    detailedOverview: "Nova Core is an advanced AI infrastructure startup. We engineered an entire visual brand book that includes exact logo lockups, high-end typeface metrics, and color calibrations tailored for web applications.",
    challenge: "The startup wanted to move away from typical clunky AI circles and glowing brains toward a highly credible corporate look.",
    solution: "We formulated a monogram emblem based on classical geometry, pairing it with sleek charcoal values and a single glowing chartreuse accent color.",
    results: [
      "Unanimous executive approval on the initial brand sprint",
      "Successfully secured $40M Series A with high brand credibility metrics",
      "Design featured in the BrandNew Showcase catalog"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=600&auto=format&fit=crop"
    ],
    techStack: ["InDesign Typography", "Illustrator CC", "Color Theory", "Grotesque Font Family"],
    liveUrl: "https://novacore.baylightstudio.com"
  },
  {
    id: "vertex-monogram",
    name: "Vertex Identity",
    year: "2024",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    category: "Brand Identity",
    tagline: "Premium minimalist monogram emblem and high-end corporate folders.",
    client: "Vertex Holdings",
    duration: "2 Months",
    services: ["Monogram Emblem Construction", "Business Card Foil Proofs", "Corporate Letterhead Layout", "Brand Asset Deploy Platform"],
    detailedOverview: "Vertex is an investment conglomerate. We formulated a timeless geometric brand identity centered around a balanced custom vector monogram that projects strength and stability.",
    challenge: "Conveying high-tech investment expertise while maintaining deep historical heritage references.",
    solution: "We combined a heavy serif typeface representing institutional legacy with thin geometric vector guidelines reflecting modern clarity and agile growth.",
    results: [
      "Unrolled across 4 primary corporate branches globally",
      "Partner brand recognition scores increased by 65% in 6 months",
      "Identity handbook hosted digitally on specialized brand repository"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop"
    ],
    techStack: ["Vector Geometry", "Modern Serifs", "Logo Lockups Pro"],
    liveUrl: "https://vertex.baylightstudio.com"
  },
  {
    id: "nexus-rebrand",
    name: "Nexus Rebrand",
    year: "2024",
    image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=800&auto=format&fit=crop",
    category: "Brand Identity",
    tagline: "Dynamic corporate rebranding guidelines and modern responsive styling layouts.",
    client: "Nexus Global Software",
    duration: "4 Months",
    services: ["Brand Strategy Consultation", "Corporate Palette Engineering", "Digital Asset Libraries", "Sub-brand Architecture"],
    detailedOverview: "Nexus wanted a visual overhaul across their 12 individual sub-products. We engineered an atomic brand guidelines framework containing variables and patterns to ensure unified corporate assets.",
    challenge: "Integrating distinct product teams under a single styling framework without sacrificing product identity.",
    solution: "We crafted a modular grid system and shared color swatches mapped to flexible CSS variables, allowing each sub-brand a unique color accent while keeping typography consistent.",
    results: [
      "12 separate products successfully aligned under 1 brand handbook",
      "Developer asset implementation speed boosted by 70%",
      "Client trust metrics reached a 5-year high of 92%"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop"
    ],
    techStack: ["CSS Variables", "Figma Variables", "Brand Book InDesign"],
    liveUrl: "https://nexus.baylightstudio.com"
  },
  {
    id: "aplos-concept",
    name: "Aplos Identity",
    year: "2023",
    image: "https://images.unsplash.com/photo-1549923246-77307dd654cb?q=80&w=800&auto=format&fit=crop",
    category: "Brand Identity",
    tagline: "Utterly minimal typography system and clean monochrome logo emblems.",
    client: "Aplos Architectural Studio",
    duration: "2 Months",
    services: ["Monochromatic Geometry", "Bespoke Wordmarks", "Branded Stationery Files", "Brand Slogan Architecture"],
    detailedOverview: "Aplos is a high-end architectural firm with a radical minimalist approach. We designed a typography-first brand book, eliminating color in favor of subtle variations in font weight, contrast, and layout grids.",
    challenge: "Formulating a distinct brand presence without the aid of color palettes or complex branding elements.",
    solution: "We developed a custom sans-serif typeface utilizing micro-serif accents, paired with extensive negative space on premium textured cards.",
    results: [
      "Acclaimed as a model minimalist brand design by Tokyo Type Directors Club",
      "Firm reports a 40% uptick in high-value custom residence inquiries",
      "Brand booklet downloaded by over 15,000 design enthusiasts"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=600&auto=format&fit=crop"
    ],
    techStack: ["Bespoke Type Tuning", "Grid Geometry Core", "Monochrome Palettes"],
    liveUrl: "https://aplos.baylightstudio.com"
  }
];

export const services: Service[] = [
  {
    id: "ui-ux",
    num: "001",
    title: "UI/UX Design",
    description: "Crafting intuitive user interfaces and immersive user experiences that transform complex user journeys into simple, delightful, and high-converting products.",
    categories: ["Wireframing", "User Research", "Visual Mockups", "Responsive Web Design", "Mobile App UI"]
  },
  {
    id: "graphic-design",
    num: "002",
    title: "Graphic Design",
    description: "Delivering high-impact visual assets and print collateral that project your brand standards with flawless, premium aesthetic choices.",
    categories: ["Vector Illustration", "Layout Design", "Print Collateral", "Marketing Assets", "Presentations"]
  },
  {
    id: "motion-graphic",
    num: "003",
    title: "Motion Graphic",
    description: "Breathing life into visual concepts with modern kinetic typography, smooth keyframe animations, and micro-interactions that captivate your audience.",
    categories: ["Kinetic Type", "Logo Animation", "UI Transitions", "Explainers", "Interactive SVGs"]
  },
  {
    id: "video-editing",
    num: "004",
    title: "Video Editing",
    description: "Shaping cinematic and high-engagement video content optimized for product launches, social storytelling, and corporate showreels.",
    categories: ["Color Grading", "Sound Design", "Social Promos", "Product Launches", "Visual Effects"]
  },
  {
    id: "brand-identity",
    num: "005",
    title: "Brand Identity",
    description: "Formulating cohesive graphic guidelines, iconic logos, and distinct brand books that anchor your company's absolute standard globally.",
    categories: ["Logo Design", "Style Guides", "Typography Systems", "Tone of Voice", "Rebranding"]
  },
  {
    id: "design-systems",
    num: "006",
    title: "Prototyping & Design Systems",
    description: "Engineering scalable design system libraries and high-fidelity interactive prototypes that bridge the gap from pure design to robust code.",
    categories: ["Figma Components", "Component Libraries", "High-Fi Prototypes", "Developer Hand-off", "Atomic Design"]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "james",
    rating: 5,
    quote: "Incredible team! They delivered exactly what we needed, on time and beyond expectations.",
    author: "James Carter",
    role: "Advisor & Co",
    company: "Alcon & Co",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: "anna",
    rating: 5,
    quote: "Our new branding is exactly what we envisioned—clean, modern, and unique. #1 in our industry.",
    author: "Anna Martinez",
    role: "Marketing Director",
    company: "Ventures Pro",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: "emily",
    rating: 4.9,
    quote: "A smooth process from start to finish. Highly professional team!",
    author: "Emily Davis",
    role: "Startup Hub",
    company: "Hub Media Labs",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop"
  }
];

export const team: TeamMember[] = [
  {
    id: "lauren",
    name: "Imran Hossain",
    role: "Creative Director",
    image: "https://raw.githubusercontent.com/jamilhossaindin/BayLight-Studio-Assets/refs/heads/main/Imran.png",
    initials: "IH"
  },
  {
    id: "christopher",
    name: "Jamil Hossain",
    role: "Lead UI/UX Designer",
    image: "https://raw.githubusercontent.com/jamilhossaindin/BayLight-Studio-Assets/refs/heads/main/Jamil.png",
    initials: "JH"
  },
  {
    id: "sadat",
    name: "Nazmus Sadat",
    role: "Graphic Design Lead",
    image: "https://raw.githubusercontent.com/jamilhossaindin/BayLight-Studio-Assets/refs/heads/main/Sadat.png",
    initials: "MNS"
  },
  {
    id: "sarah",
    name: "Sarah Johnson",
    role: "Motion & Video Lead",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
    initials: "SJ"
  }
];

export const bPosts: BlogPost[] = [
  {
    id: "post-1",
    title: "How a well-designed website can transform your business",
    date: "February 2, 2025",
    excerpt: "Discover the latest design trends shaping the digital world and how they impact conversions.",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=600&auto=format&fit=crop",
    readTime: "5 min read",
    category: "Design Principles"
  },
  {
    id: "post-2",
    title: "The Psychology of Color in Branding",
    date: "January 28, 2025",
    excerpt: "Colors influence organic decisions. Unlock the emotional structures to steer users appropriately.",
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=600&auto=format&fit=crop",
    readTime: "4 min read",
    category: "Branding"
  }
];

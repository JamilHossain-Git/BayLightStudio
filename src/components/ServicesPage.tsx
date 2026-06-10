import { useEffect, useRef } from "react";
import { ArrowUpRight, Check, Sparkles, Layout, PenTool, Video, Info, RefreshCw } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ServicesPageProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  onBackToHome: () => void;
  onNavigateToContact: () => void;
}

export default function ServicesPage({ activeCategory, onCategoryChange, onBackToHome, onNavigateToContact }: ServicesPageProps) {
  const submenuAnchorRef = useRef<HTMLDivElement>(null);

  const serviceCategoriesData = [
    {
      id: "ui-ux",
      title: "UI/UX Design",
      overview: "Converting complicated layout architectures and user flows into highly tactile, beautiful, and fluid digital screens. We isolate the absolute core action of each user journey to build interfaces that maximize attention span and drive conversions.",
      services: [
        "Wireframing & Modular Flow Architecture",
        "Comprehensive User Research & Persona Creation",
        "Visual Mockups (Proportion & Typography Pairings)",
        "Responsive Web Layout Design (Desktop to Mobile)",
        "Mobile App UI/UX Interfaces",
        "Atomic Design System Libraries & Components"
      ],
      deliverables: [
        "Interactive Figma Source Files (Prototyped)",
        "Dynamic Layout Blueprint Design token files",
        "Comprehensive Typography Spec Sheet",
        "Responsive Grid Specs & Developer Hand-off files"
      ],
      process: [
        { title: "User Flow Mapping", desc: "Formulating abstract steps into a clean wireframe scheme." },
        { title: "Visual Formulation", desc: "Setting typographic hierarchy, tracking, and custom dark/light swatches." },
        { title: "Prototyping & Feedback", desc: "Constructing clickable flows to test layouts before writing a single line of code." }
      ],
      ctaText: "Estimate UI/UX Budget"
    },
    {
      id: "graphic",
      title: "Graphic Design",
      overview: "Crafting premium vector illustrations, packaging mockups, and corporate marketing collateral. Our designs emphasize extreme negative space, flawless grids, and custom display typography.",
      services: [
        "Vector Illustration & Custom Emblems",
        "High-Contrast Layout Design",
        "Print Collateral & Foil business cards",
        "Corporate presentation slides",
        "Social Media Layout Templates",
        "Packaging Design & Structural Guides"
      ],
      deliverables: [
        "High-Resolution Print PDF files",
        "Scalable Vector Graphics (SVG, AI, EPS)",
        "Custom InDesign Books for Corporate Standards",
        "Social asset grid templates (Figma Layouts)"
      ],
      process: [
        { title: "Moodboard Curation", desc: "Aligning on the design mood, typography matches, and visual boundaries." },
        { title: "Vector Construction", desc: "Meticulously composing files under exact geometry guidelines in Adobe Illustrator." },
        { title: "Pre-Flight Validation", desc: "Compiling colors, proof sheets, and sizing matrices to prepare assets for distribution." }
      ],
      ctaText: "Request Design Package"
    },
    {
      id: "motion-video",
      title: "Motion Graphics & Video Editing",
      overview: "Breathing dimensional life into static brand components through kinetic typography, timing-optimized logo animations, and cinematic social promos designed to capture high levels of organic engagement.",
      services: [
        "Kinetic Type & Screen Transitions",
        "Logo Animating (SVG / Lottie Animation)",
        "High-Engagement Explainer Videos",
        "Cinematic Color Grading & Balancing",
        "Corporate & Product Launch Showreels",
        "Visual Effects Composite Layers",
        "Dynamic UI Micro-interactions"
      ],
      deliverables: [
        "Custom MP4/WebM files (Full HD & 4K)",
        "Modular Lottie JSON Files for Web implementation",
        "After Effects (Composition Projects) files",
        "Optimized Audio & Sound FX tracks"
      ],
      process: [
        { title: "Timeline Scripting", desc: "Formulating raw concepts into tight frames, timings, and script books." },
        { title: "Action Animation", desc: "Animating layers utilizing custom easing equations for natural movement cycles." },
        { title: "Composite Rendering", desc: "Injecting color balance, sound layers, and render settings optimized for multi-device feeds." }
      ],
      ctaText: "Scope Out Video Sprints"
    },
    {
      id: "brand",
      title: "Brand Identity",
      overview: "Shaping cohesive visual systems and detailed brand guidelines that cement your group's authority. We design monograms and wordmark systems that project confidence, credibility, and modern design standards.",
      services: [
        "Minimalist Monogram Emblem Construction",
        "Style Guidelines books & Brand guidelines packs",
        "Atomic Color calibrations & Typographic Specs",
        "Company Stationery lockups",
        "Rebranding Strategy & System Migrations",
        "Sub-Brand Architecture blueprints"
      ],
      deliverables: [
        "All-Inclusive Brand Book PDF (100+ pages)",
        "Custom Geometric Logo suit (Primary, Secondary, Icon)",
        "CSS & Design Tokens for digital channels",
        "Foil paper asset specifications"
      ],
      process: [
        { title: "Strategic Discovery", desc: "Excavating company core objectives, user profiles, and market positions." },
        { title: "Geometric blue-printing", desc: "Constructing logo metrics on grid systems for infinite, high-fidelity scaling." },
        { title: "Ecosystem Package", desc: "Compiling final vectors, typeface bundles, and usage handbooks into accessible folders." }
      ],
      ctaText: "Launch Rebranding Sprints"
    }
  ];

  const categoryIdMap: { [key: string]: string } = {
    "UI/UX Design": "ui-ux",
    "Graphic Design": "graphic",
    "Motion Graphics & Video Editing": "motion-video",
    "Brand Identity": "brand"
  };

  const isScrollingRef = useRef<boolean>(false);
  const lastObservedCategoryRef = useRef<string | null>(null);

  // Smooth scroll to selected category section when activeCategory prop changes
  useEffect(() => {
    const targetId = categoryIdMap[activeCategory];
    if (!targetId) return;

    if (lastObservedCategoryRef.current === activeCategory) {
      // The state change was triggered by the scroll observer, do NOT animate/scroll
      lastObservedCategoryRef.current = null;
      return;
    }

    // Scroll to absolute top if selecting the first section
    if (targetId === "ui-ux") {
      isScrollingRef.current = true;
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      const timer = setTimeout(() => {
        isScrollingRef.current = false;
      }, 700);
      return () => clearTimeout(timer);
    }

    const element = document.getElementById(`service-section-${targetId}`);
    if (element) {
      isScrollingRef.current = true;
      const headerOffset = 180; // Distance calibration for sticky header and extra margin
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      const timer = setTimeout(() => {
        isScrollingRef.current = false;
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [activeCategory]);

  // Synchronize dynamic scrolling position back to the header submenu based on CTA buttons crossing or going under the sticky header
  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingRef.current) return;

      // Dynamically detect sticky header height. Fallback to 140px if not found
      const header = document.querySelector("header");
      const headerHeight = header ? header.getBoundingClientRect().height : 140;

      // Point of contact is when the button goes under or touches the bottom edge of the sticky submenu header
      const threshold = headerHeight + 5;

      const btn1 = document.querySelector('[data-service-cta="ui-ux"]');
      const btn2 = document.querySelector('[data-service-cta="graphic"]');
      const btn3 = document.querySelector('[data-service-cta="motion-video"]');

      let determinedCategory = "UI/UX Design";

      if (btn1) {
        const rect1 = btn1.getBoundingClientRect();
        if (rect1.bottom <= threshold) {
          determinedCategory = "Graphic Design";
        }
      }

      if (btn2) {
        const rect2 = btn2.getBoundingClientRect();
        if (rect2.bottom <= threshold) {
          determinedCategory = "Motion Graphics & Video Editing";
        }
      }

      if (btn3) {
        const rect3 = btn3.getBoundingClientRect();
        if (rect3.bottom <= threshold) {
          determinedCategory = "Brand Identity";
        }
      }

      if (determinedCategory !== activeCategory) {
        lastObservedCategoryRef.current = determinedCategory;
        onCategoryChange(determinedCategory);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on load/mount to synchronize initial state
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [onCategoryChange, activeCategory]);

  return (
    <section 
      className="bg-theme-bg min-h-screen pt-4 pb-16 border-b border-theme-border"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-[1600px] mx-auto px-[clamp(24px,4vw,48px)] w-full"
      >

        {/* Scroll anchor to track static position of the submenu in the document flow */}
        <div ref={submenuAnchorRef} className="h-0 w-0 pointer-events-none opacity-0 select-none" />

        {/* Main Content Area: Render all categories in sequence on the same page */}
        <div className="mt-8 space-y-28">
          {serviceCategoriesData.map((category) => {
            const isSelected = activeCategory === category.title;
            return (
              <div
                key={category.id}
                id={`service-section-${category.id}`}
                data-category-title={category.title}
                className="service-section-block scroll-mt-36 border-t border-theme-border/20 pt-16 first:border-none first:pt-4 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  
                  {/* Visual Label Column */}
                  <div className="lg:col-span-4 space-y-4 select-none text-left">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[14px] text-theme-accent border border-theme-accent/35 bg-theme-accent/5 px-2.5 py-0.5 rounded-[4px] font-bold">
                        CONFIG • 0{category.id === "ui-ux" ? "1" : category.id === "graphic" ? "2" : category.id === "motion-video" ? "3" : "4"}
                      </span>
                    </div>
                    
                    <h2 className="text-h2-fluid text-theme-text uppercase leading-tight tracking-tight">
                      {category.title}
                    </h2>
                    <p className="text-body-standard-fluid text-theme-muted/90 leading-relaxed max-w-sm">
                      Dedicated category sprints designed for maximum clarity, visual cohesion, and lightning-fast handoff speeds.
                    </p>
                  </div>

                  {/* Main description, lists, details */}
                  <div className="lg:col-span-8 space-y-6">
                    {/* Overview */}
                    <div className="space-y-1.5 text-left">
                      <h4 className="font-sans font-bold text-[14px] text-theme-text uppercase tracking-tight flex items-center gap-1.5 select-none">
                        <Info className="w-3.5 h-3.5 text-theme-accent" /> OVERVIEW & CAPABILITY
                      </h4>
                      <p className="text-theme-muted text-body-standard-fluid leading-relaxed">
                        {category.overview}
                      </p>
                    </div>

                    {/* Split Lists of Services & Deliverables */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-theme-border/50">
                      {/* Detailed Service List */}
                      <div className="space-y-2.5 text-left">
                        <h5 className="font-mono text-[14px] text-theme-text uppercase font-bold tracking-wider opacity-90 select-none">
                          // CORE SERVICES INSTALLED
                        </h5>
                        <ul className="space-y-2">
                          {category.services.map((svc, i) => (
                            <motion.li 
                              initial={{ opacity: 0, x: -5 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.05 }}
                              key={i} 
                              className="flex items-start gap-2.5 text-body-standard-fluid text-theme-muted"
                            >
                              <span className="w-1.5 h-1.5 rounded-[4px] bg-theme-accent mt-2 flex-shrink-0"></span>
                              <span className="leading-relaxed">{svc}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Deliverables */}
                      <div className="space-y-2.5 bg-theme-card/35 border border-theme-border rounded-[4px] p-5 text-left">
                        <h5 className="font-mono text-[14px] text-theme-text uppercase font-bold tracking-wider opacity-90 select-none">
                          // SPECIFIC DELIVERABLES
                        </h5>
                        <ul className="space-y-2">
                          {category.deliverables.map((dlv, i) => (
                            <motion.li 
                              initial={{ opacity: 0, x: 5 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.05 }}
                              key={i} 
                              className="flex items-start gap-2.5 text-body-standard-fluid text-theme-muted"
                            >
                              <Check className="w-4 h-4 text-theme-accent mt-1 flex-shrink-0" />
                              <span className="leading-relaxed">{dlv}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Processes Timelines */}
                    <div className="space-y-2.5 pt-4 border-t border-theme-border/50 text-left">
                      <h5 className="font-mono text-[14px] text-theme-text uppercase font-bold tracking-wider flex items-center gap-1.5 opacity-90 select-none">
                        <RefreshCw className="w-3 h-3 text-theme-accent" /> SPRINT DEVELOPMENT MAP
                      </h5>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {category.process.map((prc, i) => (
                          <motion.div 
                            whileHover={{ y: -2, borderColor: "var(--theme-accent)" }}
                            key={i} 
                            className="bg-theme-surf/30 dark:bg-theme-surf/15 light:bg-[#ffffffe0]/90 backdrop-blur-md border border-theme-border/20 p-3.5 rounded-[4px] transition-all duration-300 cursor-pointer shadow-sm"
                          >
                            <span className="font-mono text-[14px] text-theme-accent font-bold uppercase block mb-0.5 select-none">
                              PHASE 0{i+1} • {prc.title}
                            </span>
                            <p className="text-[14px] text-theme-muted leading-relaxed">
                              {prc.desc}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Local Action Button */}
                    <div className="pt-2 text-left">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={onNavigateToContact}
                        data-service-cta={category.id}
                        className="h-[40px] px-6 sm:px-8 inline-flex items-center justify-center btn-glass-secondary font-bold tracking-wider uppercase text-[11px] sm:text-xs rounded transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer font-display text-center group"
                      >
                        <span>{category.ctaText}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 ml-2 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </motion.button>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </motion.div>
    </section>
  );
}

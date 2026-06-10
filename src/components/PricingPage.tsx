import { useState, useEffect, useRef } from "react";
import { Check, ArrowRight, ArrowUpRight, Layout, PenTool, Video, Sparkles, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import SpotlightCard from "./SpotlightCard";

interface PricingPageProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  onBackToHome: () => void;
  onNavigateToContact: () => void;
  isBD: boolean;
  regionSelected: boolean;
  onChangeRegion: () => void;
}

export default function PricingPage({ 
  activeCategory, 
  onCategoryChange, 
  onBackToHome, 
  onNavigateToContact,
  isBD,
  regionSelected,
  onChangeRegion
}: PricingPageProps) {
  const [isMonthly, setIsMonthly] = useState<boolean>(false);
  const submenuAnchorRef = useRef<HTMLDivElement>(null);

  // Smooth scroll to top when activeCategory changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeCategory]);


  // Specific lists of pricing cards with dynamic ranges (Starting from ... up to ...)
  const pricingData: { [key: string]: any[] } = {
    "UI/UX Design": [
      {
        name: "Bespoke UI Sprint",
        price: isBD 
          ? (isMonthly ? "৳45,000 – ৳150,000" : "৳25,000 – ৳120,000") 
          : (isMonthly ? "$600 – $2,000" : "$399 – $1,500"),
        currencySymbol: isBD ? "৳" : "$",
        rangePrefix: "Starts from",
        period: isMonthly ? "mo" : "project",
        desc: "Best for startups requiring modular screen assets or initial proof-of-concepts.",
        features: [
          "Primary App/Web Landing + up to 4 Sprints Screens",
          "Comprehensive Typographic & Grid System",
          "High-contrast color swatches (Dark & Light calibration)",
          "Interactive Figma Clickable Prototypes",
          "Interactive desktop & tablet responsive checks",
          "4 Weeks post-launch engineering handoff support"
        ],
        tag: "MOST POPULAR",
        actionText: "Request UI Sprint"
      },
      {
        name: "Enterprise Design System",
        price: isBD 
          ? (isMonthly ? "৳300,000 – ৳500,000" : "৳200,000 – ৳400,000") 
          : (isMonthly ? "$2,500 – $5,000" : "$1,600 – $4,000"),
        currencySymbol: isBD ? "৳" : "$",
        rangePrefix: "Starts from",
        period: isMonthly ? "mo" : "project",
        desc: "Complete visual ecosystem with atomic components, continuous sync, and VIP priority.",
        features: [
          "End-to-End Responsive Web or Mobile Platform",
          "Unified Custom Atomic Design System libraries",
          "Dynamic state components & interactive prototypes",
          "Continuous developer sync layer & JSON export rules",
          "Exhaustive UX Research & User Journey Maps",
          "12 Months VIP Priority support & structural adjustments"
        ],
        tag: "ENTERPRISE SPEC",
        actionText: "Launch Enterprise"
      }
    ],
    "Motion Graphics & Video Editing": [
      {
        name: "Promotional Kinetic Sprints",
        price: isBD 
          ? (isMonthly ? "৳30,000 – ৳120,000" : "৳15,000 – ৳80,000") 
          : (isMonthly ? "$400 – $1,500" : "$250 – $1,200"),
        currencySymbol: isBD ? "৳" : "$",
        rangePrefix: "Starts from",
        period: isMonthly ? "mo" : "project",
        desc: "Engineered for high-impact social edits, promo segments, or app transitions.",
        features: [
          "Up to 30 Seconds running play-time kinetic layouts",
          "Professional Sound FX layering & custom timing sync",
          "Export configurations (Full HD, MP4, WebM formats)",
          "Timed CSS/Lottie interactive vector previews",
          "Custom color-grades supporting your brand swatch",
          "2 Iterative review stages before final render"
        ],
        tag: "FAST DELIVERY",
        actionText: "Launch Clip Project"
      },
      {
        name: "Complete Campaign Showreel",
        price: isBD 
          ? (isMonthly ? "৳200,000 – ৳400,000" : "৳150,000 – ৳300,000") 
          : (isMonthly ? "$2,000 – $4,000" : "$1,500 – $3,500"),
        currencySymbol: isBD ? "৳" : "$",
        rangePrefix: "Starts from",
        period: isMonthly ? "mo" : "project",
        desc: "Full-scale corporate explaining videos, product animations, and launch promos.",
        features: [
          "Up to 120 Seconds timing-optimized showreels",
          "Bespoke storyboard curation & timeline specs",
          "Licensed audio integration & premium voiceovers",
          "After Effects raw project source layers delivery",
          "Lottie JSON elements for direct web DOM implementation",
          "Infinite scaling vector exports for digital billboard signs"
        ],
        tag: "FULL CAMPAIGN",
        actionText: "Request Showreel"
      }
    ],
    "Brand Identity": [
      {
        name: "Core wordmark pack",
        price: isBD 
          ? (isMonthly ? "৳35,000 – ৳130,000" : "৳20,000 – ৳100,000") 
          : (isMonthly ? "$500 – $1,800" : "$300 – $1,500"),
        currencySymbol: isBD ? "৳" : "$",
        rangePrefix: "Starts from",
        period: isMonthly ? "mo" : "project",
        desc: "High-end corporate logo suites, typographical lockups, and digital asset sheets.",
        features: [
          "3 Initial Geometric wordmark concepts",
          "Primary, Secondary, and Monochromatic configurations",
          "Inter/Space Grotesk typography rules",
          "Style guides & swatches mapped to CSS Variables",
          "Branded digital letterheads & mail layouts",
          "All-inclusive vector directories (SVG, PNG, EPS)"
        ],
        tag: "FOUNDATION",
        actionText: "Establish Identity"
      },
      {
        name: "Comprehensive Rebrand Suite",
        price: isBD 
          ? (isMonthly ? "৳250,000 – ৳450,000" : "৳180,000 – ৳380,000") 
          : (isMonthly ? "$2,500 – $4,500" : "$1,800 – $3,800"),
        currencySymbol: isBD ? "৳" : "$",
        rangePrefix: "Starts from",
        period: isMonthly ? "mo" : "project",
        desc: "Deep visual guidelines covering tone-of-voice, sub-brand architectures, and stationeries.",
        features: [
          "Bespoke Monogram & Logo construction on grid systems",
          "100+ Page Comprehensive Corporate Brand Guidelines Handbook",
          "Complete Corporate Stationery set (Card, Letter, Folder blueprints)",
          "Typography families config with custom sizing specs",
          "Digital asset deploy platform (Shared Figma libraries)",
          "Continuous review sprints for absolute visual fidelity"
        ],
        tag: "COMPLETE DEPLOY",
        actionText: "Request Full Rebrand"
      }
    ]
  };

  // Graphic Design has a custom granular catalog format as requested
  const graphicDesignCatalog = [
    { name: "Social Media Design", price: isBD ? "3,000" : "250", speed: "2-3 business days", detail: "Custom visual posts, grid layouts, and profile banners calibrated for performance feeds." },
    { name: "Banner Design", price: isBD ? "2,000" : "180", speed: "1-2 business days", detail: "Standard high-contrast banner graphics for digital ads, landing headers, or Google Ads grids." },
    { name: "Presentation Design", price: isBD ? "4,800" : "400", speed: "4-5 business days", detail: "Bespoke PowerPoint/Keynote pitch decks, up to 15 fully configured typographic layouts." },
    { name: "Packaging Design", price: isBD ? "6,000" : "500", speed: "5-7 business days", detail: "Premium dimensional product package blueprints, absolute typography calibration, and print guides." },
    { name: "Brochure Design", price: isBD ? "4,200" : "350", speed: "3-4 business days", detail: "Multi-page corporate folder catalog layouts, typographic rules, and grid allocations." },
    { name: "Poster Design", price: isBD ? "2,400" : "200", speed: "2-3 business days", detail: "Large showcase vector posters, typography-forward display layouts, and print setups." },
    { name: "Flyer Design", price: isBD ? "1,800" : "150", speed: "1-2 business days", detail: "Single-sheet vector flyers, high contrast spacing, call to action grids." }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section 
      id="pricing-section-container"
      className="bg-theme-bg min-h-screen pt-12 pb-32 border-b border-theme-border"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-[1600px] mx-auto px-[clamp(24px,4vw,48px)] w-full"
      >

        {/* Scroll anchor to track static position of the submenu in the document flow */}
        <div ref={submenuAnchorRef} className="h-0 w-0 pointer-events-none opacity-0 select-none" />

        {/* Universal Billing Toggle Container (Clean and centered) */}
        <div className="flex flex-col items-center justify-center gap-6 mb-12 select-none relative z-5">
          {/* Billing Cycle Toggle */}
          {activeCategory !== "Graphic Design" ? (
            <div className="inline-flex items-center gap-2 bg-theme-surf/30 dark:bg-theme-surf/15 light:bg-[#ffffffe0]/90 backdrop-blur-md border border-theme-border/20 p-1 rounded-[4px] shadow-lg">
              <button
                onClick={() => setIsMonthly(false)}
                className={`px-5 py-2 rounded-[4px] text-small-fluid font-bold tracking-wider uppercase transition-all cursor-pointer relative ${
                  !isMonthly ? "text-theme-bg" : "text-theme-muted hover:text-theme-text"
                }`}
              >
                {!isMonthly && (
                  <motion.span 
                    layoutId="pricingPeriodHighlightUniversal"
                    className="absolute inset-0 bg-theme-accent rounded-[4px] -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 28 }}
                  />
                )}
                <span className="relative z-10 select-none">Per Project</span>
              </button>
              <button
                onClick={() => setIsMonthly(true)}
                className={`px-5 py-2 rounded-[4px] text-small-fluid font-bold tracking-wider uppercase transition-all cursor-pointer relative ${
                  isMonthly ? "text-theme-bg" : "text-theme-muted hover:text-theme-text"
                }`}
              >
                {isMonthly && (
                  <motion.span 
                    layoutId="pricingPeriodHighlightUniversal"
                    className="absolute inset-0 bg-theme-accent rounded-[4px] -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 28 }}
                  />
                )}
                <span className="relative z-10 select-none">Monthly Retainer</span>
              </button>
            </div>
          ) : (
            <span className="inline-block font-mono text-small-fluid text-theme-accent border border-theme-accent/25 bg-theme-accent/5 px-4 py-2 rounded-[4px] uppercase tracking-wider font-bold">
              Granular Catalog Rates
            </span>
          )}
        </div>

        {/* Discreet Region Tracker Indicator hidden - now handled by Navbar dropdown switcher beautifully */}

        {/* Dynamic Display Area */}
        <AnimatePresence mode="wait">
          {activeCategory !== "Graphic Design" ? (
            <motion.div 
              key={activeCategory + isMonthly + isBD}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            >
              {pricingData[activeCategory]?.map((plan, idx) => (
                <motion.div
                  variants={cardVariants}
                  whileHover={{ y: -6 }}
                  key={idx}
                  className="cursor-pointer"
                >
                  <SpotlightCard
                    className="h-full rounded-[4px] p-6 relative flex flex-col justify-between hover:border-theme-accent transition-all duration-300 group shadow-lg"
                    spotlightColor="rgba(225, 255, 0, 0.15)"
                  >
                    {/* Accent Tag: 14px as per metadata tags spec */}
                    <span className="absolute top-4 right-4 font-mono text-[14px] font-extrabold tracking-wider text-theme-bg bg-theme-accent px-2.5 py-0.5 rounded-[4px] border border-theme-border uppercase select-none">
                      {plan.tag}
                    </span>

                    <div>
                      <h3 className="text-[18px] font-bold text-theme-text text-left uppercase leading-tight">
                        {plan.name}
                      </h3>
                      <p className="text-[14px] text-theme-muted mt-2 leading-relaxed min-h-[2.5rem] text-left">
                        {plan.desc}
                      </p>

                      {/* Price Indicator with starting from / up to ranges */}
                      <div className="my-6 select-none text-left">
                        <span className="block font-mono text-[11px] text-theme-accent uppercase font-bold tracking-widest mb-1 select-none">
                          {plan.rangePrefix}
                        </span>
                        <div className="flex items-baseline select-none">
                          <span className="font-display text-price-fluid font-extrabold text-theme-text">
                            {plan.price}
                          </span>
                          <span className="text-theme-muted font-mono text-[14px] ml-1.5 uppercase font-bold">
                            /{plan.period}
                          </span>
                        </div>
                      </div>

                      {/* Bullet features list: 14px as requested */}
                      <div className="border-t border-theme-border/50 pt-4 pb-1 text-left">
                        <ul className="space-y-2">
                          {plan.features.map((feat: string, i: number) => (
                            <li key={i} className="flex items-start gap-2 text-[14px] leading-relaxed text-theme-muted">
                              <Check className="w-3.5 h-3.5 text-theme-accent flex-shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Redirect click button */}
                    <div className="mt-5">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={onNavigateToContact}
                        className="h-[40px] px-6 sm:px-8 inline-flex items-center justify-center btn-glass-secondary font-bold tracking-wider uppercase text-[11px] sm:text-xs rounded transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer font-display text-center w-full group"
                      >
                        <span>{plan.actionText}</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-2 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </motion.button>
                    </div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            /* Custom Graphic Design Catalog list as requested */
            <motion.div 
              key={"graphic-design-catalog-" + isBD}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-6 max-w-5xl mx-auto text-left"
            >
              <div className="alert-box flex items-start gap-3 bg-theme-card border border-theme-border p-4 rounded-[4px]">
                <AlertCircle className="w-4 h-4 text-theme-accent flex-shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <h4 className="font-sans font-bold text-body-standard-fluid text-theme-text uppercase tracking-tight">Granular Assets Pricing Matrix</h4>
                  <p className="text-[14px] text-theme-muted leading-relaxed">
                    Graphic Design involves particular specifications. That's why we list clear per-unit rates so you can easily estimate your precise marketing collateral requirements.
                  </p>
                </div>
              </div>

              {/* Graphic Catalog listing list */}
              <div className="bg-theme-card border border-theme-border rounded-[4px] divide-y divide-theme-border/50 overflow-hidden shadow-2xl">
                <div className="hidden sm:grid grid-cols-12 gap-3 px-4 py-2 bg-theme-surf select-none border-b border-theme-border/50 text-[14px] font-mono uppercase text-theme-muted font-extrabold tracking-wider">
                  <div className="col-span-6">// SPECIFIC GRAPHIC ASSETS</div>
                  <div className="col-span-3 text-center">EST SPRINT SPEED</div>
                  <div className="col-span-3 text-right">STARTING PRICE</div>
                </div>

                {graphicDesignCatalog.map((item, id) => (
                  <motion.div
                    whileHover={{ backgroundColor: "rgba(var(--theme-accent-rgb), 0.02)" }}
                    key={id}
                    className="flex flex-col sm:grid sm:grid-cols-12 gap-3.5 sm:gap-3 px-4 py-4 sm:py-3 items-start sm:items-center hover:bg-theme-surf/35 transition-colors duration-200"
                  >
                    <div className="col-span-12 sm:col-span-6 space-y-1 w-full text-left">
                      <div className="flex justify-between items-baseline">
                        <h4 className="text-[14px] font-bold text-theme-text uppercase">
                          {item.name}
                        </h4>
                        <span className="sm:hidden text-[16px] text-theme-accent font-bold">
                          {isBD ? "৳" : "$"}{item.price}
                        </span>
                      </div>
                      <p className="text-[14px] text-theme-muted leading-relaxed pr-0 sm:pr-8">
                        {item.detail}
                      </p>
                    </div>
                    
                    <div className="col-span-12 sm:col-span-3 flex sm:justify-center items-center justify-between w-full sm:text-center text-[13px] text-theme-muted uppercase font-semibold">
                      <span className="sm:hidden font-mono text-[11px] text-theme-muted uppercase font-bold tracking-wider">// Est Sprint Speed:</span>
                      <span className="font-mono text-[14px] text-theme-muted uppercase font-bold">
                        {item.speed}
                      </span>
                    </div>

                    <div className="hidden sm:block col-span-3 text-right">
                      <span className={`text-[16px] text-theme-accent font-bold transition-all duration-500 block ${!regionSelected ? "blur-sm select-none opacity-30" : ""}`}>
                        {isBD ? "৳" : "$"}{item.price}
                      </span>
                      <span className="text-[12px] font-mono text-theme-muted block font-medium">{isBD ? "" : "USD "} / UNIT</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="pt-4 text-center select-none">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onNavigateToContact}
                  className="h-[40px] px-6 sm:px-8 inline-flex items-center justify-center btn-glass-secondary font-bold tracking-wider uppercase text-[11px] sm:text-xs rounded transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer font-display text-center group"
                >
                  <span>Order Custom Graphic Assets Bundle</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-2 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </motion.div>
    </section>
  );
}

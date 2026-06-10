import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import Orb from "./Orb";

interface HeroProps {
  onChooseCategory: (category: string) => void;
}

export default function Hero({ onChooseCategory }: HeroProps) {

  // Color parameters for Orb (strict dark mode)
  const config = {
    hue: 125,
    backgroundColor: "#0A0A0A",
    opacity: "opacity-[0.55]"
  };

  const capabilities = [
    { title: "UI/UX Design", category: "UI/UX Design", delay: 0 },
    { title: "Graphic Design", category: "Graphic Design", delay: 1 },
    { title: "Motion Graphics & Video Editing", category: "Motion Graphics & Video Editing", delay: 2 },
    { title: "Brand Identity", category: "Brand Identity", delay: 3 }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section className="relative pt-[24px] pb-[32px] sm:py-12 lg:py-14 bg-theme-bg text-theme-text min-h-[calc(100vh-68px)] lg:min-h-[calc(100vh-80px)] flex flex-col justify-center items-center overflow-hidden theme-transition">
      {/* Absolute Centered Dynamic Orb Ambient Background Component (WebGL Canvas Shader) */}
      <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[138vw] md:w-[116vw] lg:w-[94vw] max-w-[1088px] aspect-square transition-all duration-500 z-0 ${config.opacity}`}>
        <Orb
          hoverIntensity={1.2}
          rotateOnHover={true}
          hue={config.hue}
          forceHoverState={false}
          backgroundColor={config.backgroundColor}
        />
      </div>

      {/* Decorative Subtle Grid Lines for Swiss Minimalist Vibe */}
      <div className="absolute inset-0 pointer-events-none opacity-20 col-span-full z-10">
        <div className="h-full w-full grid grid-cols-4 border-l border-r border-theme-border">
          <div className="border-r border-theme-border"></div>
          <div className="border-r border-theme-border"></div>
          <div className="border-r border-theme-border"></div>
          <div></div>
        </div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-[1600px] mx-auto px-[clamp(24px,4vw,48px)] w-full flex-grow flex flex-col justify-center items-center relative z-10 pointer-events-none"
      >
        {/* Centered Main Branding Stack */}
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto pt-[12px] sm:pt-[16px] pb-2 relative z-10">
          {/* Refined Small Pulse Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3 py-1 text-[10px] sm:text-xs uppercase tracking-[0.16em] sm:tracking-[0.18em] text-theme-accent bg-theme-surf/40 border border-theme-border rounded-[4px] pointer-events-auto font-display mb-[16px] backdrop-blur-sm shadow-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-theme-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-theme-accent"></span>
            </span>
            <span>Serving Bangladesh & Beyond • Creative Studio</span>
          </motion.div>

          {/* Colossal Central Display Title (Stacked Brutalist Layout) */}
          <motion.h1 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(34px,7.5vw,91px)] font-display font-bold leading-[0.95] tracking-[0.02em] select-none text-theme-text uppercase flex flex-col items-center justify-center mb-[16px]"
          >
            <span>baylight</span>
            <span className="text-theme-accent lowercase font-display font-light italic mt-0">
              studio
            </span>
          </motion.h1>

          {/* Elegant Center Paragraph Description */}
          <motion.p 
            variants={itemVariants}
            className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-[18px] text-theme-muted leading-relaxed max-w-[290px] xs:max-w-md sm:max-w-xl md:max-w-2xl mx-auto mt-1 mb-[20px] font-normal font-display"
          >
            No generic templates. No empty promises. We architect tailormade digital experiences, identity lines, and strategies that amplify your brand core.
          </motion.p>

          {/* Active Creative Capability Badges */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-2.5 max-w-3xl mb-[20px] pointer-events-auto"
          >
            {capabilities.map((cap, idx) => (
              <motion.button
                whileHover={{ y: -3, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                key={cap.title}
                onClick={() => onChooseCategory(cap.category)}
                className="h-[40px] px-4 inline-flex items-center gap-2 rounded text-[11px] sm:text-xs uppercase tracking-wider text-theme-text font-semibold btn-glass-secondary select-none font-display text-center"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-theme-accent"></span>
                <span>{cap.title}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Main Direct CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pointer-events-auto w-full sm:w-auto px-4 sm:px-0 mt-[4px]"
          >
            <a 
              href="#contact"
              className="h-[40px] px-6 sm:px-8 inline-flex items-center justify-center btn-glass-primary font-bold tracking-wider uppercase text-[11px] sm:text-xs rounded shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer font-display text-center w-full sm:w-auto"
            >
              Start Collaboration
            </a>
            <a 
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("featured-projects-section") || document.getElementById("projects");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="h-[40px] px-6 sm:px-8 inline-flex items-center justify-center btn-glass-secondary font-bold tracking-wider uppercase text-[11px] sm:text-xs rounded transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer font-display text-center w-full sm:w-auto"
            >
              Our Work
            </a>
          </motion.div>
        </div>

        {/* Mobile/Tablet simple subtle copyright line */}
        <div className="block lg:hidden text-center mt-2 pb-[32px] sm:pb-0 z-10 pointer-events-auto">
          <span className="text-theme-muted font-display text-[9px] tracking-widest uppercase">
            © 2026 baylight studio
          </span>
        </div>

        {/* Bottom Metadata with Grid Separator (Hidden on Mobile/Tablet to avoid pushing content, visible on Desktop) */}
        <div className="hidden lg:flex justify-between items-end pt-8 pb-4 border-t border-theme-border/30 pointer-events-auto absolute bottom-6 left-[clamp(24px,4vw,48px)] right-[clamp(24px,4vw,48px)]">
          <motion.div variants={itemVariants} className="max-w-md text-left">
            <p className="text-body-standard-fluid text-theme-muted leading-relaxed text-xs font-display">
              Tailored high-performance development, Swiss-regulated layout aesthetics, and bespoke digital scaling assets.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col items-end text-right gap-1.5">
            <div className="flex items-center gap-2 text-theme-accent font-display text-[11px] tracking-widest uppercase">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-theme-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-theme-accent"></span>
              </span>
              <span>Available for collaborations</span>
            </div>
            <p className="text-theme-muted font-display text-[11px] tracking-widest uppercase">
              © 2026 baylight studio
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

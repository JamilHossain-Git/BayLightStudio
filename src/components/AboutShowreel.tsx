import { useState } from "react";
import { Play, X, Compass, Activity, ShieldCheck, Zap } from "lucide-react";
import { motion } from "motion/react";
import SpotlightCard from "./SpotlightCard";

export default function AboutShowreel() {
  const [isPlaying, setIsPlaying] = useState(false);

  const pillars = [
    {
      icon: <Zap className="w-5 h-5 text-theme-accent group-hover:text-theme-bg transition-colors" />,
      title: "The team that communicates every step",
      desc: "No black holes. We run live Slack layers, daily builds, and design boards so you're always aligned with our velocity."
    },
    {
      icon: <Compass className="w-5 h-5 text-theme-accent group-hover:text-theme-bg transition-colors" />,
      title: "Customized solutions for your unique needs",
      desc: "No templated layouts. We code tailored, modular components optimized specifically for your products and customers."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-theme-accent group-hover:text-theme-bg transition-colors" />,
      title: "Transparent pricing with no hidden fees",
      desc: "Honest structures. Every feature, sprint, and module has fixed estimates. No sudden bills or billing surprises."
    },
    {
      icon: <Activity className="w-5 h-5 text-theme-accent group-hover:text-theme-bg transition-colors" />,
      title: "Proven track record with measurable results",
      desc: "Speed indexes below 1 sec, SEO score of 100%, and multi-million dollar conversion scaling logs verify our performance."
    }
  ];

  return (
    <section className="bg-theme-bg py-24 border-b border-theme-border theme-transition" id="studio">
      <div className="max-w-[1600px] mx-auto px-[clamp(24px,4vw,48px)] w-full">
        {/* Sub-Header text */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 items-start">
          <div className="md:col-span-3 font-mono text-[14px] text-theme-muted uppercase tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-theme-accent rounded-full"></span>
            About baylight studio
          </div>
          <div className="md:col-span-9 space-y-4">
            <h2 className="text-h2-fluid text-theme-text uppercase max-w-4xl">
              How we launch websites and marketing campaigns.
            </h2>
            <p className="text-body-standard-fluid text-theme-muted max-w-2xl leading-relaxed">
              We design and construct digital products with pristine performance, meticulous brand detailing, and organic reach structures.
            </p>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              className="cursor-pointer"
            >
              <SpotlightCard
                className="p-6 h-full rounded-2xl hover:border-theme-accent transition-all duration-300 group"
                spotlightColor="rgba(225, 255, 0, 0.15)"
              >
                <div className="w-10 h-10 bg-theme-surf rounded-xl flex items-center justify-center border border-theme-border mb-4 group-hover:bg-theme-accent group-hover:border-theme-accent transition-colors">
                  {pillar.icon}
                </div>
                <h3 className="font-sans font-bold text-[20px] text-theme-text leading-snug mb-2 flex items-center gap-1.5">
                  {pillar.title}
                </h3>
                <p className="text-body-standard-fluid text-theme-muted leading-relaxed">
                  {pillar.desc}
                </p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Video / Cinema Wrapper Card */}
        <div className="relative group rounded-3xl overflow-hidden border border-theme-border shadow-xl aspect-[16/9] bg-neutral-900 cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop"
            alt="Watch showreel background"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover grayscale transition-transform duration-1000 ease-out group-hover:scale-102"
          />

          {/* Centered Glassmorphic Play Plate */}
          <div className="absolute inset-0 bg-theme-bg/30 group-hover:bg-theme-bg/20 transition-colors flex flex-col items-center justify-center">
            <button
              onClick={() => setIsPlaying(true)}
              className="flex items-center gap-4 btn-glass-secondary text-theme-text pl-5 pr-6 py-4 rounded-[4px]"
              aria-label="Open showreel video"
            >
              <div className="p-2.5 bg-theme-accent text-theme-bg rounded-[4px]">
                <Play className="w-5 h-5 fill-theme-bg text-theme-bg" />
              </div>
              <div className="text-left">
                <p className="font-display font-bold text-small-fluid tracking-tight">Watch showreel</p>
                <p className="font-mono text-xs text-theme-muted leading-none mt-0.5">(2016-258)</p>
              </div>
            </button>
          </div>

          <div className="absolute bottom-6 right-6 bg-theme-bg/85 backdrop-blur-sm px-3 py-1.5 rounded-[4px] border border-theme-border/20 text-theme-text font-mono text-xs tracking-wider uppercase">
            PLAYTIME — 01:24 SEC
          </div>
        </div>
      </div>

      {/* Showreel Cinematic Modal */}
      {isPlaying && (
        <div className="fixed inset-0 bg-theme-bg/95 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="absolute top-6 right-6">
            <button
              onClick={() => setIsPlaying(false)}
              className="p-3 btn-glass-secondary text-theme-text rounded-[4px]"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="w-full max-w-5xl aspect-video bg-theme-card border border-theme-border rounded-[4px] overflow-hidden shadow-2xl relative flex flex-col items-center justify-center p-8">
            {/* Embedded video mock playing screen */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
              {/* Scanlines element */}
              <div className="w-full h-full bg-[linear-gradient(rgba(18,16,16,0)_50%,_rgba(0,0,0,0.25)_50%),_linear-gradient(90deg,_rgba(255,0,0,0.06),_rgba(0,255,0,0.02),_rgba(0,0,255,0.06))] bg-[size:100%_4px,_6px_100%]"></div>
            </div>

            <div className="text-center space-y-4">
              <span className="bg-theme-accent/20 text-theme-accent font-mono text-[14px] px-3 py-1 border border-theme-accent/30 rounded animate-pulse uppercase">
                Streaming Feed • High Fidelity
              </span>
              <h3 className="text-h3-fluid text-theme-text uppercase">
                baylight studio Corporate Showreel 2025/2026
              </h3>
              <p className="font-mono text-body-standard-fluid text-theme-muted max-w-md mx-auto">
                Demonstrating headless micro-framework integrations, custom CAD rendering, and organic search conversions.
              </p>
              <div className="pt-6">
                <button
                   onClick={() => setIsPlaying(false)}
                   className="h-[40px] px-6 sm:px-8 inline-flex items-center justify-center btn-glass-secondary font-bold tracking-wider uppercase text-[11px] sm:text-xs rounded transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer font-display text-center group"
                >
                  Return to Exploration
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

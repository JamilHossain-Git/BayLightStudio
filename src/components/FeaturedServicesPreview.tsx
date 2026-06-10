import { ArrowRight, Layout, PenTool, Video, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import SpotlightCard from "./SpotlightCard";

interface FeaturedServicesPreviewProps {
  onExploreServices: () => void;
}

export default function FeaturedServicesPreview({ onExploreServices }: FeaturedServicesPreviewProps) {
  const previews = [
    {
      icon: <Layout className="w-5 h-5 text-theme-accent group-hover:text-theme-bg transition-colors" />,
      title: "UI/UX Design Sprints",
      desc: "Tailored component state architecture, wireframing, and interactive clickable prototypes."
    },
    {
      icon: <PenTool className="w-5 h-5 text-theme-accent group-hover:text-theme-bg transition-colors" />,
      title: "Graphic Design catalog",
      desc: "High-contrast banners, presentation slide decks, and print specifications."
    },
    {
      icon: <Video className="w-5 h-5 text-theme-accent group-hover:text-theme-bg transition-colors" />,
      title: "Motion Graphics",
      desc: "Kinetic timing transitions, custom Lottie animations, and product explainer showreels."
    },
    {
      icon: <Sparkles className="w-5 h-5 text-theme-accent group-hover:text-theme-bg transition-colors" />,
      title: "Brand Identity Systems",
      desc: "Bespoke monogram designs, atomic CSS variables, and cohesive typography guidelines."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 85, damping: 14 }
    }
  };

  return (
    <section className="bg-theme-bg py-24 border-b border-theme-border theme-transition" id="featured-services">
      <div className="max-w-[1600px] mx-auto px-[clamp(24px,4vw,48px)] w-full">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16 select-none"
        >
          <div className="lg:col-span-3 font-mono text-small-fluid text-theme-muted uppercase tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-theme-accent rounded-full animate-pulse"></span>
            Featured Services Teaser
          </div>
          <div className="lg:col-span-9">
            <h2 className="text-h2-fluid text-theme-text uppercase">
              Bespoke digital capability.
            </h2>
          </div>
        </motion.div>

        {/* 4 Cards Grid preview */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-16 text-left"
        >
          {previews.map((item, idx) => (
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -6 }}
              key={idx}
              className="cursor-pointer"
            >
              <SpotlightCard
                className="p-6 hover:border-theme-accent transition-all duration-300 min-h-[260px] flex flex-col justify-between group"
                spotlightColor="rgba(225, 255, 0, 0.15)"
              >
                <div>
                  <div className="w-10 h-10 bg-theme-surf border border-theme-border rounded flex items-center justify-center mb-4 group-hover:bg-theme-accent group-hover:border-theme-accent transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-card-h4-fluid text-theme-text uppercase mb-2">
                    {item.title}
                  </h3>
                </div>
                <p className="text-body-large-fluid text-theme-muted leading-relaxed mt-4">
                  {item.desc}
                </p>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Action redirect button */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center select-none"
        >
          <button
            onClick={onExploreServices}
            className="h-[40px] px-6 sm:px-8 inline-flex items-center justify-center btn-glass-primary font-bold tracking-wider uppercase text-[11px] sm:text-xs rounded shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer font-display text-center w-full sm:w-auto"
          >
            Explore Full Capabilities
          </button>
        </motion.div>

      </div>
    </section>
  );
}

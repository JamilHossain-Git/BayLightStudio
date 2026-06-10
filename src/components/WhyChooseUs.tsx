import { BarChart3, Star } from "lucide-react";
import { motion } from "motion/react";
import SpotlightCard from "./SpotlightCard";

export default function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.05
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section className="bg-theme-bg py-24 border-b border-theme-border theme-transition">
      <div className="max-w-[1600px] mx-auto px-[clamp(24px,4vw,48px)] w-full">
        {/* Main Section Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 items-start"
        >
          <div className="md:col-span-3 font-mono text-small-fluid text-theme-muted uppercase tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-theme-accent rounded-full"></span>
            Why choose us
          </div>
          <div className="md:col-span-9">
            <h2 className="text-h2-fluid text-theme-text">
              Proven results for every project, with a focus on design and functionality.
            </h2>
          </div>
        </motion.div>
 
        {/* Bento/Split Grid block */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Left: Beautiful Hooded Portrait Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="md:col-span-5 relative group"
          >
            <div className="absolute inset-0 bg-theme-bg/10 rounded-2xl group-hover:bg-transparent transition-colors duration-300"></div>
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop"
              alt="High fashion portrait"
              referrerPolicy="no-referrer"
              className="w-full h-[500px] object-cover rounded-2xl border border-theme-border shadow-md grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute bottom-4 left-4 bg-theme-bg/90 backdrop-blur-sm p-4 rounded-xl text-theme-text font-mono text-small-fluid tracking-wider uppercase border border-theme-border">
              [ REF: STUDIO_VISUAL_GRID ]
            </div>
          </motion.div>
 
          {/* Right: Descriptive paragraph + metrics cards */}
          <div className="md:col-span-7 space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-xl"
            >
              <p className="text-body-standard-fluid text-theme-muted leading-relaxed">
                <strong className="text-theme-text font-semibold">No fluff, just results.</strong> Thoughtful design and bespoken engineering that simplify operations. We maintain absolute focus on smart systems and robust features, project after project.
              </p>
            </motion.div>
 
            {/* Metrics cards row */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {/* Card 1 */}
              <motion.div 
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="cursor-pointer"
              >
                <SpotlightCard 
                  className="p-6 hover:border-theme-accent transition-all duration-300 min-h-[220px] flex flex-col justify-between group"
                  spotlightColor="rgba(225, 255, 0, 0.15)"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2.5 bg-theme-surf rounded border border-theme-border group-hover:bg-theme-accent group-hover:border-theme-accent transition-colors">
                        <BarChart3 className="w-5 h-5 text-theme-accent group-hover:text-theme-bg transition-colors" />
                      </div>
                      <span className="font-mono text-small-fluid text-theme-muted bg-theme-surf px-2 py-0.5 rounded border border-theme-border">
                        ACTIVE STATS
                      </span>
                    </div>
                    <h3 className="text-h2-fluid text-theme-text">50+</h3>
                    <p className="font-mono text-metadata-fluid text-theme-text font-semibold uppercase tracking-wider mt-1.5">
                      Projects Completed
                    </p>
                  </div>
                  <p className="text-body-large-fluid text-theme-muted mt-4 leading-relaxed">
                    We've built and delivered 50+ custom applications assisting global brands in scaling digital channels.
                  </p>
                </SpotlightCard>
              </motion.div>
 
              {/* Card 2 */}
              <motion.div 
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="cursor-pointer"
              >
                <SpotlightCard 
                  className="p-6 hover:border-theme-accent transition-all duration-300 min-h-[220px] flex flex-col justify-between group"
                  spotlightColor="rgba(225, 255, 0, 0.15)"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2.5 bg-theme-surf rounded border border-theme-border group-hover:bg-theme-accent group-hover:border-theme-accent transition-colors">
                        <Star className="w-5 h-5 text-theme-accent group-hover:text-theme-bg transition-colors" />
                      </div>
                      <span className="font-mono text-small-fluid text-theme-muted bg-theme-surf px-2 py-0.5 rounded border border-theme-border">
                        VERIFIED FEEDBACK
                      </span>
                    </div>
                    <h3 className="text-h2-fluid text-theme-text">83%</h3>
                    <p className="font-mono text-metadata-fluid text-theme-text font-semibold uppercase tracking-wider mt-1.5">
                      Client Satisfaction
                    </p>
                  </div>
                  <p className="text-body-large-fluid text-theme-muted mt-4 leading-relaxed">
                    Highly satisfied client base operating with our headless codebases and branding kits across 14 nations.
                  </p>
                </SpotlightCard>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

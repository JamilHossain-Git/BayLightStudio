import { useState, useEffect, useRef } from "react";
import { Star } from "lucide-react";
import { motion } from "motion/react";
import { testimonials } from "../data";
import SpotlightCard from "./SpotlightCard";

interface CountUpProps {
  end: number;
  suffix: string;
  duration?: number;
}

function CountUp({ end, suffix, duration = 1500 }: CountUpProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          startAnimation();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [end]);

  const startAnimation = () => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = timestamp - startTimestamp;
      const progressRatio = Math.min(progress / duration, 1);
      
      // Easing: easeOutExpo (highly satisfying premium deceleration)
      const eased = progressRatio === 1 ? 1 : 1 - Math.pow(2, -10 * progressRatio);
      
      setCount(Math.round(eased * end));

      if (progressRatio < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    window.requestAnimationFrame(step);
  };

  return (
    <span ref={elementRef} className="inline-flex items-center tracking-tight tabular-nums select-none">
      <span>{count.toLocaleString()}</span>
      {suffix && (
        <span className="text-theme-accent ml-0.5">
          {suffix}
        </span>
      )}
    </span>
  );
}

export default function Experiences() {
  const aggregateMetrics = [
    { target: 120, suffix: "+", label: "Clients" },
    { target: 27, suffix: "+", label: "Successful project launches" },
    { target: 89, suffix: "%", label: "Client satisfaction rate" },
    { target: 2022, suffix: "+", label: "Monthly search clients" }
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

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 90, damping: 15 }
    }
  };

  return (
    <section className="bg-theme-bg py-24 border-b border-theme-border theme-transition" id="testimonials">
      <div className="max-w-[1600px] mx-auto px-[clamp(24px,4vw,48px)] w-full">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 select-none text-left"
        >
          <h2 className="text-h2-fluid text-theme-text uppercase">
            Experiences<span className="text-theme-accent">.</span>
          </h2>
        </motion.div>

        {/* Testimonials Layout Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-20"
        >
          {/* Card 1: Aggregate Rating */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -6 }}
            className="h-full cursor-pointer"
          >
            <SpotlightCard
              className="h-full p-6 transition-all duration-300 flex flex-col justify-between group"
              spotlightColor="rgba(225, 255, 0, 0.15)"
            >
              <div>
                <div className="flex items-center gap-1.5 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5.5 h-5.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <h3 className="text-h2-fluid text-theme-text mb-1 cursor-pointer">4.9</h3>
                <p className="font-mono text-small-fluid text-theme-muted uppercase tracking-widest leading-normal mb-6">
                  Cumulative Rating
                </p>
                <p className="text-body-large-fluid text-theme-muted leading-relaxed mb-6">
                  Trusted by high-growth startups and seasoned enterprises worldwide. Over 50 successful deployments validated.
                </p>
              </div>

              {/* Avatar Stack */}
              <div className="flex items-center gap-3 border-t border-theme-border pt-4">
                <div className="flex -space-x-3.5 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop"
                    alt="Reviewer 1"
                    referrerPolicy="no-referrer"
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-theme-card object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop"
                    alt="Reviewer 2"
                    referrerPolicy="no-referrer"
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-theme-card object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop"
                    alt="Reviewer 3"
                    referrerPolicy="no-referrer"
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-theme-card object-cover"
                  />
                </div>
                <span className="font-mono text-small-fluid text-theme-text font-semibold uppercase tracking-wider">
                  50+ Clients
                </span>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Individual Testimonial Cards */}
          {testimonials.map((test) => (
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -6 }}
              key={test.id}
              className="h-full cursor-pointer"
            >
              <SpotlightCard
                className="h-full p-6 transition-all duration-300 flex flex-col justify-between group"
                spotlightColor="rgba(225, 255, 0, 0.15)"
              >
                <blockquote>
                  <div className="flex items-center gap-1 mb-4 text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-theme-text text-body-large-fluid leading-relaxed font-sans font-medium mb-6">
                    "{test.quote}"
                  </p>
                </blockquote>

                <div className="flex items-center gap-3.5 border-t border-theme-border pt-4">
                  <img
                    src={test.avatar}
                    alt={test.author}
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full object-cover border border-theme-border"
                  />
                  <div className="text-left font-sans">
                    <p className="font-bold text-body-standard-fluid text-theme-text">{test.author}</p>
                    <p className="text-small-fluid font-mono text-theme-muted leading-normal mt-0.5">
                      {test.role} • {test.company}
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Giant Metrics Row */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 xl:grid-cols-4 gap-px bg-theme-border border border-theme-border rounded overflow-hidden shadow-sm"
        >
          {aggregateMetrics.map((met, index) => (
            <SpotlightCard
              key={index}
              className="!bg-theme-surf hover:!bg-theme-card !border-none rounded-none p-8 text-center flex flex-col justify-center items-center transition-all duration-300 cursor-pointer"
              spotlightColor="rgba(225, 255, 0, 0.15)"
            >
              <span className="font-display font-extrabold text-h2-fluid text-theme-text leading-none select-none">
                <CountUp end={met.target} suffix={met.suffix} />
              </span>
              <span className="font-mono text-small-fluid text-theme-muted uppercase tracking-widest mt-2 select-none">
                {met.label}
              </span>
            </SpotlightCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

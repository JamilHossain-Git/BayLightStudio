import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import SpotlightCard from "./SpotlightCard";

export default function Pricing() {
  const [isMonthly, setIsMonthly] = useState(false);

  const plans = [
    {
      id: "essential",
      name: "Essential Design",
      price: isMonthly ? "1,890" : "2,490",
      period: isMonthly ? "mo" : "project",
      features: [
        "Primary Landing + up to 4 Custom Screens",
        "Bespoke Typographic Framework",
        "Fully Mobile-Optimized Design",
        "Integrated Basic Search Engine Index",
        "Standard Speed caching setup",
        "4 Weeks Post-Launch Support"
      ],
      cta: "Plan Consultation",
      tag: "MOST POPULAR"
    },
    {
      id: "enterprise",
      name: "Enterprise Studio",
      price: isMonthly ? "3,490" : "4,990",
      period: isMonthly ? "mo" : "project",
      features: [
        "End-to-End Headless Application",
        "Custom Database & App-level Logic",
        "Full Brand Guideline & Style kit",
        "Advanced SEO & Keyword Clustering",
        "Automated continuous workflow pipeline",
        "12 Months VIP Priority Support"
      ],
      cta: "Build Bespoke Custom",
      tag: "FULL ENTERPRISE"
    }
  ];

  return (
    <section className="bg-theme-bg text-theme-text py-24 border-b border-theme-border theme-transition" id="pricing">
      <div className="max-w-[1600px] mx-auto px-[clamp(24px,4vw,48px)] w-full">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-3 font-mono text-[11px] text-theme-muted uppercase tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-theme-accent rounded-full animate-pulse"></span>
            Pricing Structure
          </div>
          <div className="lg:col-span-9 flex flex-col md:flex-row md:items-center justify-between gap-8 animate-none">
            <h2 className="font-display text-5xl md:text-8xl font-bold tracking-tight text-theme-text select-none">
              Pricing.
            </h2>

            {/* Toggle Switch */}
            <div className="flex items-center gap-4 bg-theme-surf/30 dark:bg-theme-surf/15 light:bg-[#ffffffe0]/90 backdrop-blur-md border border-theme-border/20 p-1.5 rounded-[4px] select-none">
              <button
                onClick={() => setIsMonthly(false)}
                className={`px-5 py-2.5 rounded-[4px] text-xs font-semibold tracking-wide uppercase transition-all duration-200 cursor-pointer ${
                  !isMonthly
                    ? "bg-theme-accent text-theme-bg"
                    : "text-theme-muted hover:text-theme-text"
                }`}
              >
                Per project
              </button>
              <button
                onClick={() => setIsMonthly(true)}
                className={`px-5 py-2.5 rounded-[4px] text-xs font-semibold tracking-wide uppercase transition-all duration-200 cursor-pointer ${
                  isMonthly
                    ? "bg-theme-accent text-theme-bg"
                    : "text-theme-muted hover:text-theme-text"
                }`}
              >
                Monthly Retainer
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20 animate-none">
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              whileHover={{ y: -6 }}
              className="cursor-pointer"
            >
              <SpotlightCard
                className="h-full rounded-[4px] p-8 relative flex flex-col justify-between hover:border-theme-accent transition-all duration-300 group shadow-lg"
                spotlightColor="rgba(225, 255, 0, 0.15)"
              >
                {/* Highlight Tag: exact 14px */}
                <div className="absolute top-6 right-6 font-mono text-[14px] font-bold tracking-wider text-theme-bg bg-theme-accent px-3.5 py-1 rounded-[4px] border border-theme-border uppercase shadow">
                  {plan.tag}
                </div>

                <div>
                  <p className="font-mono text-[14px] text-theme-muted tracking-widest uppercase mb-1">
                    baylight studio co. blueprints
                  </p>
                  <h3 className="text-price-pkg-fluid font-semibold text-theme-text uppercase leading-tight">
                    {plan.name}
                  </h3>

                  <div className="my-8 flex items-baseline">
                    <span className="font-display text-price-fluid font-extrabold text-theme-text">
                      ${plan.price}
                    </span>
                    <span className="text-theme-muted font-mono text-[14px] ml-2">
                      /{plan.period}
                    </span>
                  </div>

                  <div className="border-t border-theme-border pt-6 pb-2">
                    <ul className="space-y-4">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="p-0.5 bg-theme-accent/10 border border-theme-accent/30 rounded-[4px] text-theme-accent mt-0.5">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-price-feat-fluid text-theme-muted font-medium">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <a
                    href="#contact"
                    className="h-[40px] px-6 sm:px-8 inline-flex items-center justify-center btn-glass-secondary font-bold tracking-wider uppercase text-[11px] sm:text-xs rounded transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer font-display text-center w-full group"
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-2 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Client Success Manager Quote Widget */}
        <div className="max-w-3xl mx-auto bg-theme-card border border-theme-border p-6 md:p-8 rounded-[4px] flex flex-col sm:flex-row items-center gap-6 shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
            alt="George Stern Client Success Manager"
            referrerPolicy="no-referrer"
            className="w-14 h-14 rounded-full object-cover border-2 border-theme-border flex-shrink-0 grayscale"
          />
          <div className="text-center sm:text-left space-y-2">
            <p className="text-theme-muted text-body-standard-fluid italic">
              "Add marketing orchestration, specific SEO campaigns, or bespoke copy creation. We provide flexible resources to customize your package structure and shape solutions perfectly fitting your current business size."
            </p>
            <p className="font-mono text-small-fluid text-theme-muted uppercase tracking-widest leading-none">
              George Stern • Client Success Manager, baylight studio
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

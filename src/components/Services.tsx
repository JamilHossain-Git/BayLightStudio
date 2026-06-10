import { useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { services } from "../data";
import { Service } from "../types";

export default function Services() {
  const [expandedId, setExpandedId] = useState<string>("ui-ux");

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? "" : id);
  };

  return (
    <section className="bg-theme-bg text-theme-text py-24 border-b border-theme-border theme-transition" id="services">
      <div className="max-w-[1600px] mx-auto px-[clamp(24px,4vw,48px)] w-full">
        {/* Header Section */}
        <div className="flex items-start gap-2 mb-16 select-none">
          <span className="font-mono text-[14px] text-theme-muted mt-2">({services.length})</span>
          <h2 className="text-h2-fluid font-bold tracking-tight text-theme-text uppercase">
            Services<span className="text-theme-accent">.</span>
          </h2>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-theme-border border-t border-b border-theme-border mb-16 user-select-none">
          {services.map((service: Service) => {
            const isExpanded = expandedId === service.id;
            return (
              <div
                key={service.id}
                className={`transition-colors duration-300 ${
                  isExpanded ? "bg-theme-surf" : "hover:bg-theme-surf/30"
                }`}
              >
                {/* Accordion Row Header */}
                <button
                  onClick={() => toggleExpand(service.id)}
                  className="w-full py-8 px-4 flex items-center justify-between text-left group transition-colors focus:outline-none"
                >
                  <div className="flex items-center gap-6 md:gap-12 flex-1">
                    <span className="font-mono text-[14px] text-theme-muted group-hover:text-theme-accent transition-colors">
                      ({service.num})
                    </span>
                    <h3 className="font-display font-bold text-h3-fluid text-theme-text group-hover:text-theme-accent transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-4">
                    {/* Visual state indicators */}
                    <div className="p-2 bg-theme-surf/30 dark:bg-theme-surf/15 light:bg-[#ffffffe0]/90 backdrop-blur-md border border-theme-border/20 rounded-[4px] group-hover:border-theme-accent transition-all text-theme-text group-hover:text-theme-accent shadow-sm">
                      {isExpanded ? (
                        <Minus className="w-5 h-5" />
                      ) : (
                        <Plus className="w-5 h-5" />
                      )}
                    </div>
                  </div>
                </button>

                {/* Expanded Content with animations */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isExpanded ? "max-h-[500px] opacity-100 pb-12 px-4 md:px-20" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Brief description column */}
        <div className="lg:col-span-4 space-y-4">
          {/* Graphics Mockup plate inside expanded area */}
          <div className="aspect-[16/10] bg-theme-card border border-theme-border rounded-xl collapse-none p-4 flex flex-col justify-between hover:border-theme-accent transition-colors">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[12px] text-theme-muted uppercase">MODULE COMPONENT</span>
              <span className="w-1.5 h-1.5 rounded bg-theme-accent animate-none"></span>
            </div>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-theme-accent/20"></div>
              <div className="w-12 h-2 rounded bg-theme-border"></div>
            </div>
            <div className="space-y-1.5 text-left">
              <p className="font-display font-medium text-[14px] leading-none text-theme-text">Standard Interface</p>
              <p className="font-mono text-[12px] text-theme-muted">src/components/ux_kit.ts</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-6">
          <p className="text-theme-muted text-body-standard-fluid leading-relaxed max-w-xl">
            {service.description}
          </p>

          {/* Pill tags: exact 14px */}
          <div className="flex flex-wrap gap-2 pt-2">
            {service.categories.map((category, index) => (
              <span
                key={index}
                className="font-mono text-[14px] uppercase font-semibold bg-theme-surf/30 dark:bg-theme-surf/15 light:bg-[#ffffffe0]/90 backdrop-blur-md border border-theme-border/20 rounded-[4px] px-3.5 py-1 text-theme-text hover:bg-theme-accent hover:text-theme-bg transition-colors duration-200 cursor-pointer"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer actions inside Dark Section - exact 12px */}
        <div className="flex justify-center">
          <a
            href="#contact"
            className="group flex items-center justify-center gap-3 btn-glass-secondary text-theme-text font-bold text-small-fluid px-8 py-4 rounded-[4px] uppercase tracking-wider"
          >
            Get started today
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}

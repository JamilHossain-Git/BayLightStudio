import { ReactNode, useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

export interface SubmenuTab {
  id: string; // The programmatic ID or lowercase string used for logic
  name: string; // The display label
  icon?: ReactNode; // Optional icon element
}

interface SubmenuProps {
  tabs: SubmenuTab[];
  activeTabId: string;
  onTabChange: (id: string) => void;
  rightElement?: ReactNode;
  sticky?: boolean;
  layoutId?: string;
  className?: string;
}

export default function Submenu({
  tabs,
  activeTabId,
  onTabChange,
  rightElement,
  sticky = true,
  layoutId = "activeSubmenuTabGlow",
  className = "",
}: SubmenuProps) {
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const activeEl = containerRef.current.querySelector('[data-active="true"]') as HTMLElement;
    if (activeEl) {
      const container = containerRef.current;
      const containerWidth = container.clientWidth;
      const scrollLeft = activeEl.offsetLeft - (containerWidth / 2) + (activeEl.clientWidth / 2);
      container.scrollTo({
        left: scrollLeft,
        behavior: "smooth"
      });
    }
  }, [activeTabId]);

  const hasBgClass = className.includes("bg-") || className.includes("bg-transparent");
  const hasBorderClass = className.includes("border-none") || className.includes("border-0");
  const hasPxClass = className.includes("px-") || className.includes("px-0");

  return (
    <div
      ref={containerRef}
      className={`${hasBgClass ? "" : "bg-[rgba(17,17,17,0.3)]"} ${
        hasBorderClass ? "" : "border border-[rgba(225,255,0,0.15)] hover:border-[rgba(225,255,0,0.3)]"
      } rounded-[4px] h-[46px] ${hasPxClass ? "" : "px-2.5"} flex items-center justify-start shadow-none select-none overflow-x-auto no-scrollbar transition-all duration-300 ${className}`}
    >
      <div className="flex items-center gap-1.5 sm:gap-2 min-w-max">
        {tabs.map((tab) => {
          const isActive = activeTabId.toLowerCase() === tab.id.toLowerCase();
          return (
            <div
              key={tab.id}
              className="relative"
              data-active={isActive}
              onMouseEnter={() => setHoveredTab(tab.id)}
              onMouseLeave={() => setHoveredTab(null)}
            >
              {/* Soft hover background highlight matching main navbar link style */}
              <AnimatePresence>
                {hoveredTab === tab.id && (
                  <motion.div
                    className="absolute inset-0 bg-[rgba(225,255,0,0.12)] rounded-[4px] z-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  />
                )}
              </AnimatePresence>
 
              <button
                onClick={() => onTabChange(tab.id)}
                className={`relative z-10 px-4 xl:px-5 h-[34px] rounded-[4px] text-[10px] xl:text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 xl:gap-2 transition-all cursor-pointer select-none focus:outline-none border ${
                  isActive
                     ? "text-theme-text border-[rgba(225,255,0,0.6)] bg-[rgba(225,255,0,0.12)] shadow-[0_0_8px_rgba(225,255,0,0.15)]"
                     : "text-theme-muted hover:text-theme-text border-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.15)] bg-[rgba(17,17,17,0.12)] hover:bg-[rgba(17,17,17,0.3)]"
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full shrink-0 transition-all duration-300 ${isActive ? "bg-theme-accent scale-110 shadow-[0_0_4px_var(--theme-accent)]" : "bg-[rgba(225,255,0,0.4)]"}`} />
                {tab.icon && (
                  <span className={`${isActive ? "text-theme-accent" : "text-theme-muted"}`}>
                    {tab.icon}
                  </span>
                )}
                <span className="relative z-10 font-display font-medium tracking-wider">{tab.name}</span>
              </button>
            </div>
          );
        })}
      </div>

      {rightElement && (
        <div className="hidden md:flex flex-shrink-0 items-center pr-0 pl-4">
          {rightElement}
        </div>
      )}
    </div>
  );
}

import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowRight, ArrowLeft, Globe, Check, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

type ViewType = "home" | "studio" | "projects" | "services" | "pricing" | "contact";

interface NavbarProps {
  currentView: ViewType;
  onNavigate: (view: ViewType) => void;
  isSubmenuActive?: boolean;
  submenuTabs?: { name: string; id: string; icon?: React.ReactNode }[];
  activeSubmenuTabId?: string;
  onSubmenuTabChange?: (id: string) => void;
  isBD?: boolean;
  onSelectRegion?: (isBD: boolean) => void;
}

export default function Navbar({ 
  currentView, 
  onNavigate,
  isSubmenuActive = false,
  submenuTabs = [],
  activeSubmenuTabId = "",
  onSubmenuTabChange,
  isBD = true,
  onSelectRegion
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  const [isSubmenuDropdownOpen, setIsSubmenuDropdownOpen] = useState(false);
  const submenuDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: TouchEvent | MouseEvent) {
      const target = event.target as Node;
      if (submenuDropdownRef.current && !submenuDropdownRef.current.contains(target)) {
        setIsSubmenuDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);


  const navLinks = [
    { name: "Home", view: "home" as ViewType },
    { name: "Studio", view: "studio" as ViewType },
    { name: "Projects", view: "projects" as ViewType },
    { name: "Services", view: "services" as ViewType },
    { name: "Pricing", view: "pricing" as ViewType },
    { name: "Contact", view: "contact" as ViewType }
  ];

  const handleLinkClick = (e: React.MouseEvent, view: ViewType) => {
    e.preventDefault();
    onNavigate(view);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="main-navigation-layer"
      className="w-full h-[64px] relative z-50 text-theme-text text-center flex items-center justify-between"
    >
      <AnimatePresence mode="wait">
        {!isSubmenuActive ? (
          <motion.div
            key="standard-navbar"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="w-full h-full flex items-center justify-between"
          >
            {/* Brand Group (Logo) - Aligned to Left */}
            <div className="flex items-center space-x-4 flex-1 justify-start">
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate("home");
                }}
                className="flex items-center space-x-2 group"
              >
                <span className="font-display font-bold text-base lg:text-lg tracking-tight text-theme-text transition-opacity group-hover:opacity-80">
                  baylight <span className="text-theme-accent">studio</span>
                </span>
              </a>
            </div>

            {/* Desktop Links (Visually Centered Horizontally) */}
            <div className="hidden lg:flex items-center justify-center space-x-0.5 xl:space-x-1 p-1 select-none flex-shrink-0 mx-auto">
              {navLinks.map((link) => {
                const isActive = currentView === link.view;
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setHoveredLink(link.name)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <AnimatePresence>
                      {hoveredLink === link.name && (
                        <motion.div
                          className="absolute inset-0 bg-[rgba(225,255,0,0.12)] rounded-[4px] z-0 pointer-events-none"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.15 }}
                        />
                      )}
                    </AnimatePresence>
                    <a
                      href="#"
                      onClick={(e) => handleLinkClick(e, link.view)}
                      className={`relative z-10 block px-2.5 xl:px-3.5 py-1.5 font-sans text-[10px] xl:text-xs font-semibold uppercase tracking-wider transition-colors duration-200 cursor-pointer ${
                        isActive
                          ? "text-theme-accent"
                          : "text-theme-muted hover:text-theme-text"
                      }`}
                    >
                      {link.name}
                    </a>
                  </div>
                );
              })}
            </div>

            {/* Controls Column (CTA) - Aligned to Right */}
            <div className="flex items-center space-x-2 xl:space-x-4 flex-1 justify-end">
              {/* Action Button & Contact CTA */}
              <div className="hidden lg:flex flex-shrink-0">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate("contact");
                  }}
                  className="h-[40px] px-5 xl:px-6 inline-flex items-center justify-center btn-glass-primary font-bold tracking-wider uppercase text-[10px] xl:text-xs rounded shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer font-display text-center"
                >
                  Start Project
                </a>
              </div>

              {/* Mobile Menu Icon */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-[4px] text-theme-text hover:text-theme-accent transition-all bg-theme-surf/35 backdrop-blur-md hover:bg-theme-accent/10 border border-theme-border/20 shadow-sm"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>

            {/* Mobile Dropdown Portal */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="lg:hidden absolute left-0 right-0 top-full mt-2 mx-0 bg-theme-surf/95 backdrop-blur-xl border border-theme-border p-6 rounded-[4px] flex flex-col space-y-4 shadow-2xl"
                >
                  <div className="flex flex-col space-y-2">
                    {navLinks.map((link, idx) => {
                      const isActive = currentView === link.view;
                      return (
                        <motion.a
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.04 }}
                          key={link.name}
                          href="#"
                          onClick={(e) => {
                            setIsOpen(false);
                            handleLinkClick(e, link.view);
                          }}
                          className={`font-display text-base font-semibold py-2 transition-colors uppercase tracking-wider flex items-center justify-between group ${
                            isActive
                              ? "text-theme-accent"
                              : "text-theme-muted hover:text-theme-text"
                          }`}
                        >
                          <span>{link.name}</span>
                          <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200 text-theme-accent" />
                        </motion.a>
                      );
                    })}
                  </div>

                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsOpen(false);
                      onNavigate("contact");
                    }}
                    className="h-[40px] px-6 inline-flex items-center justify-center btn-glass-primary font-bold tracking-wider uppercase text-xs rounded shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer font-display text-center w-full mt-4"
                  >
                    Start Project
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            key="submenu-navbar"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="w-full h-full flex items-center justify-between"
          >
            {/* Left Part: Return to Home Button */}
            <div className="flex items-center justify-start flex-shrink-0">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate("home");
                }}
                className="h-[38px] px-3 sm:px-4.5 inline-flex items-center justify-center gap-2 rounded-[4px] border border-[rgba(225,255,0,0.15)] bg-[#111111]/70 hover:bg-[rgba(225,255,0,0.12)] hover:border-[#e1ff00] text-theme-text shadow-[0_0_12px_rgba(225,255,0,0.04)] hover:shadow-[0_0_15px_rgba(225,255,0,0.1)] transition-all duration-300 text-[10px] xl:text-xs font-semibold uppercase tracking-wider group cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5 transform group-hover:-translate-x-0.8 transition-transform text-[#e1ff00]" />
                <span className="hidden sm:inline font-sans">Return to Home</span>
                <span className="inline sm:hidden font-sans">Home</span>
              </button>
            </div>

            {/* Center Part: Submenu Options (scrollable on mobile) */}
            <div className="flex-1 flex items-center justify-center overflow-x-auto no-scrollbar mx-2 sm:mx-6 select-none h-full py-1">
              <div className="flex items-center gap-1.5 sm:gap-2 min-w-max">
                {submenuTabs.map((tab) => {
                  const isActive = activeSubmenuTabId.toLowerCase() === tab.id.toLowerCase();
                  return (
                    <div
                      key={tab.id}
                      className="relative"
                      onMouseEnter={() => setHoveredTab(tab.id)}
                      onMouseLeave={() => setHoveredTab(null)}
                    >
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
                        onClick={() => onSubmenuTabChange?.(tab.id)}
                        className={`relative z-10 px-3 sm:px-4 h-[32px] rounded-[4px] text-[10px] sm:text-[11px] xl:text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1 sm:gap-1.5 transition-all cursor-pointer select-none focus:outline-none border ${
                          isActive
                            ? "text-theme-text border-[rgba(225,255,0,0.6)] bg-[rgba(225,255,0,0.12)] shadow-[0_0_8px_rgba(225,255,0,0.15)]"
                            : "text-theme-muted hover:text-theme-text border-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.15)] bg-[rgba(17,17,17,0.12)] hover:bg-[rgba(17,17,17,0.3)]"
                        }`}
                      >
                        <span className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full shrink-0 transition-all duration-300 ${isActive ? "bg-[#e1ff00] scale-110 shadow-[0_0_4px_#e1ff00]" : "bg-[rgba(225,255,0,0.3)]"}`} />
                        {tab.icon && (
                          <span className={`shrink-0 ${isActive ? "text-[#e1ff00]" : "text-theme-muted"}`}>
                            {tab.icon}
                          </span>
                        )}
                        <span className="relative z-10 font-display font-medium tracking-wider">{tab.name}</span>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Part: Start Project button OR Region Switcher */}
            <div className="flex items-center justify-end shrink-0 pl-2">
              {currentView === "pricing" ? (
                /* Region Switcher Dropdown inside Submenu */
                <div className="relative inline-block text-left" ref={submenuDropdownRef}>
                  <button
                    onClick={() => setIsSubmenuDropdownOpen(!isSubmenuDropdownOpen)}
                    className="h-[36px] px-2.5 sm:px-3.5 inline-flex items-center justify-center gap-1.5 rounded-[4px] border border-[rgba(225,255,0,0.18)] hover:border-[#e1ff00] bg-[#111111]/80 hover:bg-[#18191a] text-theme-text shadow-[0_0_15px_rgba(225,255,0,0.02)] hover:shadow-[0_0_20px_rgba(225,255,0,0.08)] transition-all duration-300 text-xs font-semibold tracking-wider cursor-pointer select-none group"
                  >
                    {isBD ? (
                      <div className="w-[15px] h-[15px] rounded-full overflow-hidden relative border border-white/10 shrink-0">
                        <div className="absolute inset-0 bg-[#006a4e]" />
                        <div className="absolute w-[8.5px] h-[8.5px] bg-[#f42a41] rounded-full top-[3.25px] left-[3.25px]" />
                      </div>
                    ) : (
                      <Globe className="w-3.5 h-3.5 text-[#e1ff00] shrink-0" />
                    )}
                    <span className="font-mono text-[9px] sm:text-[10px] text-theme-muted group-hover:text-theme-text select-none uppercase font-bold">
                      {isBD ? "BDT ৳" : "USD $"}
                    </span>
                    <ChevronDown className={`w-3 h-3 text-theme-muted transition-transform duration-300 ${isSubmenuDropdownOpen ? "rotate-180 text-[#e1ff00]" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {isSubmenuDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className="absolute right-0 mt-2 w-[185px] sm:w-[210px] origin-top-right border border-theme-border/60 bg-[#0c0d0e]/95 backdrop-blur-xl rounded-[4px] p-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.6)] z-[9999]"
                      >
                        {/* Option: Bangladesh */}
                        <button
                          onClick={() => {
                            onSelectRegion?.(true);
                            setIsSubmenuDropdownOpen(false);
                          }}
                          className={`w-full flex items-center justify-between px-2.5 py-2 rounded-[3px] text-left text-[11px] sm:text-xs font-semibold cursor-pointer transition-all duration-200 ${
                            isBD
                              ? "bg-[rgba(225,255,0,0.08)] text-[#e1ff00] border border-[rgba(225,255,0,0.15)]"
                              : "hover:bg-white/5 text-theme-muted hover:text-theme-text border border-transparent"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <div className="w-[14px] h-[14px] rounded-full overflow-hidden relative border border-white/10 shrink-0">
                              <div className="absolute inset-0 bg-[#006a4e]" />
                              <div className="absolute w-[8px] h-[8px] bg-[#f42a41] rounded-full top-[3px] left-[3px]" />
                            </div>
                            <span className="font-sans">Bangladesh (BDT ৳)</span>
                          </div>
                          {isBD && <Check className="w-3.5 h-3.5 text-[#e1ff00]" />}
                        </button>

                        {/* Option: International */}
                        <button
                          onClick={() => {
                            onSelectRegion?.(false);
                            setIsSubmenuDropdownOpen(false);
                          }}
                          className={`w-full flex items-center justify-between px-2.5 py-2 rounded-[3px] text-left text-[11px] sm:text-xs font-semibold cursor-pointer transition-all duration-200 mt-1 ${
                            !isBD
                              ? "bg-[rgba(225,255,0,0.08)] text-[#e1ff00] border border-[rgba(225,255,0,0.15)]"
                              : "hover:bg-white/5 text-theme-muted hover:text-theme-text border border-transparent"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <Globe className="w-[14px] h-[14px] text-theme-muted shrink-0" />
                            <span className="font-sans">International (USD $)</span>
                          </div>
                          {!isBD && <Check className="w-3.5 h-3.5 text-[#e1ff00]" />}
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                /* Start Project button for other submenu pages */
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate("contact");
                  }}
                  className="h-[38px] px-4.5 inline-flex items-center justify-center btn-glass-primary font-bold tracking-wider uppercase text-[10px] sm:text-xs rounded shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer font-display text-center animate-in fade-in duration-300"
                >
                  Start Project
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

import { useState } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight, 
  Twitter, 
  Instagram, 
  Dribbble, 
  Github,
  Facebook
} from "lucide-react";

interface FooterProps {
  onNavigate?: (view: any) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0A] py-16 lg:py-24 border-t border-theme-border/20 text-theme-text theme-transition relative overflow-hidden">
      {/* Background glow effects to keep it feeling premium */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-radial from-theme-accent/5 to-transparent blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-radial from-theme-accent/3 to-transparent blur-3xl pointer-events-none"></div>

      <div className="max-w-[1600px] mx-auto px-[clamp(24px,4vw,64px)] w-full">
        {/* Main 4-Column Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 lg:gap-0 items-start">
          
          {/* Column 1: Get in Touch */}
          <div className="col-span-1 pr-0 lg:pr-8 lg:border-r border-theme-border/15">
            <div className="space-y-4">
              <h4 className="font-display text-[13px] font-black tracking-widest text-[#FFFFFF] uppercase">
                GET IN TOUCH
              </h4>
              <div className="w-12 h-[2px] bg-theme-accent"></div>
            </div>

            <div className="space-y-5 mt-6">
              {/* Phone item */}
              <a 
                href="tel:+8801400967005"
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-11 h-11 rounded-full border border-theme-border/20 flex items-center justify-center text-theme-accent bg-theme-surf/35 flex-shrink-0 group-hover:border-theme-accent/50 group-hover:bg-theme-surf/60 transition-all duration-300">
                  <Phone className="w-4.5 h-4.5 text-theme-accent" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white group-hover:text-theme-accent transition-colors duration-200">
                    +880 1400-967005
                  </p>
                  <p className="text-xs text-theme-muted font-medium mt-0.5">
                    Call or WhatsApp
                  </p>
                </div>
              </a>

              {/* Email item */}
              <a 
                href="mailto:inboxwithjami@gmail.com"
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-11 h-11 rounded-full border border-theme-border/20 flex items-center justify-center text-theme-accent bg-theme-surf/35 flex-shrink-0 group-hover:border-theme-accent/50 group-hover:bg-theme-surf/60 transition-all duration-300">
                  <Mail className="w-4.5 h-4.5 text-theme-accent" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white group-hover:text-theme-accent transition-colors duration-200">
                    inboxwithjami@gmail.com
                  </p>
                  <p className="text-xs text-theme-muted font-medium mt-0.5">
                    Send us an email
                  </p>
                </div>
              </a>

              {/* Location item */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full border border-theme-border/20 flex items-center justify-center text-theme-accent bg-theme-surf/35 flex-shrink-0">
                  <MapPin className="w-4.5 h-4.5 text-theme-accent" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">
                    Bangladesh
                  </p>
                  <p className="text-xs text-theme-muted font-medium mt-0.5">
                    Available Worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="col-span-1 px-0 lg:px-8 lg:border-r border-theme-border/15">
            <div className="space-y-4">
              <h4 className="font-display text-[13px] font-black tracking-widest text-[#FFFFFF] uppercase">
                SERVICES
              </h4>
              <div className="w-12 h-[2px] bg-theme-accent"></div>
            </div>

            <ul className="space-y-1.5 mt-6">
              {[
                { name: "UI/UX Design", view: "services" },
                { name: "Graphic Design", view: "services" },
                { name: "Motion Graphics & Video Editing", view: "services" },
                { name: "Brand Alignment", view: "services" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate?.(item.view);
                    }}
                    className="flex items-center justify-between py-2 border-b border-theme-border/10 hover:border-theme-accent/30 text-white hover:text-theme-accent text-sm font-bold transition-all duration-300 group"
                  >
                    <span>{item.name}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-theme-muted/40 group-hover:text-theme-accent group-hover:translate-x-1 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Industry */}
          <div className="col-span-1 px-0 lg:px-8 lg:border-r border-theme-border/15">
            <div className="space-y-4">
              <h4 className="font-display text-[13px] font-black tracking-widest text-[#FFFFFF] uppercase">
                INDUSTRY
              </h4>
              <div className="w-12 h-[2px] bg-theme-accent"></div>
            </div>

            <ul className="space-y-1.5 mt-6">
              {[
                "E-Commerce & Retail",
                "SaaS & Tech Startups",
                "Real Estate & Architecture",
                "Fintech & Finance",
                "Fashion & Luxury Brands"
              ].map((ind) => (
                <li key={ind}>
                  <div className="flex items-center justify-between py-2 border-b border-theme-border/10 text-white hover:text-theme-accent text-sm font-bold transition-all duration-300 group">
                    <span>{ind}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-theme-accent/30 group-hover:bg-theme-accent transition-colors duration-300" />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Social Channels */}
          <div className="col-span-1 pl-0 lg:pl-8">
            <div className="space-y-4">
              <h4 className="font-display text-[13px] font-black tracking-widest text-[#FFFFFF] uppercase">
                SOCIAL CHANNELS
              </h4>
              <div className="w-12 h-[2px] bg-theme-accent"></div>
            </div>

            <ul className="space-y-1 mt-6">
              <li>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-3.5 py-2 text-sm font-bold text-white hover:text-theme-accent transition-colors duration-300 group"
                >
                  <Facebook className="w-4.5 h-4.5 text-white/50 group-hover:text-theme-accent transition-colors duration-300" />
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-3.5 py-2 text-sm font-bold text-white hover:text-theme-accent transition-colors duration-300 group"
                >
                  <Instagram className="w-4.5 h-4.5 text-white/50 group-hover:text-theme-accent transition-colors duration-300" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-3.5 py-2 text-sm font-bold text-white hover:text-theme-accent transition-colors duration-300 group"
                >
                  <Twitter className="w-4.5 h-4.5 text-white/50 group-hover:text-theme-accent transition-colors duration-300" />
                  <span>Twitter / X</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://dribbble.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-3.5 py-2 text-sm font-bold text-white hover:text-theme-accent transition-colors duration-300 group"
                >
                  <Dribbble className="w-4.5 h-4.5 text-white/50 group-hover:text-theme-accent transition-colors duration-300" />
                  <span>Dribbble</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-3.5 py-2 text-sm font-bold text-white hover:text-theme-accent transition-colors duration-300 group"
                >
                  <Github className="w-4.5 h-4.5 text-white/50 group-hover:text-theme-accent transition-colors duration-300" />
                  <span>GitHub Codebase</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Giant footer Typography */}
        <div className="pt-16 pb-6 select-none border-t border-theme-border/15 mt-16">
          <h1 className="font-display font-black text-theme-text opacity-[0.04] text-center tracking-tighter leading-none text-[8vw] select-none pointer-events-none">
            baylight studio
          </h1>
        </div>

        {/* Bottom copyright/credits row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-theme-border/15 pt-8 text-xs font-semibold text-theme-muted">
          <div>
            © {currentYear} baylight studio. Built in partnership with AI Studio. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); }} 
              className="hover:text-theme-accent hover:underline transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); }} 
              className="hover:text-theme-accent hover:underline transition-colors duration-200"
            >
              Terms of Service
            </a>
            <span className="text-theme-border/30">|</span>
            <span className="flex items-center gap-1.5 select-none font-mono text-[10px] uppercase tracking-wider text-theme-muted/60">
              <span className="w-1.5 h-1.5 rounded-full bg-theme-accent animate-pulse"></span>
              Built Framework Compliant
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}

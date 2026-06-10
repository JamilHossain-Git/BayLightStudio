import { useState, ReactNode, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import Projects from "./components/Projects";
import WhyChooseUs from "./components/WhyChooseUs";
import FeaturedServicesPreview from "./components/FeaturedServicesPreview";
import AboutShowreel from "./components/AboutShowreel";
import Experiences from "./components/Experiences";
import LetTalk from "./components/LetTalk";
import Footer from "./components/Footer";
import ProjectDetail from "./components/ProjectDetail";
import ProjectsPage from "./components/ProjectsPage";

// Dedicated Pages Imported
import StudioPage from "./components/StudioPage";
import ServicesPage from "./components/ServicesPage";
import PricingPage from "./components/PricingPage";
import ContactPage from "./components/ContactPage";

// Icons for header unification
import { Compass, Layout, PenTool, Video, Sparkles } from "lucide-react";

type ViewType = "home" | "studio" | "projects" | "services" | "pricing" | "contact";

export default function App() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get("project") || null;
  });
  const [currentView, setCurrentView] = useState<ViewType>(() => {
    const params = new URLSearchParams(window.location.search);
    return (params.get("view") || "home") as ViewType;
  });
  const [selectedCategory, setSelectedCategory] = useState<string>(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get("pcat") || "All";
  });
  const [servicesCategory, setServicesCategory] = useState<string>(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get("scat") || "UI/UX Design";
  });
  const [pricingCategory, setPricingCategory] = useState<string>(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get("prcat") || "UI/UX Design";
  });
  const [prefillContactMessage, setPrefillContactMessage] = useState<string | null>(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get("prefill") || null;
  });

  const [isBD, setIsBD] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem("baylight_studio_region");
      if (saved !== null) {
        return saved === "BD";
      }
      return true; // Default to true if not selected yet
    } catch (e) {
      return true;
    }
  });
  const [regionSelected, setRegionSelected] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem("baylight_studio_region");
      return saved !== null;
    } catch (e) {
      return false;
    }
  });
  const [showPopup, setShowPopup] = useState<boolean>(false);

  // Trigger delayed popup on page load if region not selected and user is on home/landing page
  useEffect(() => {
    if (!regionSelected && currentView === "home") {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [regionSelected, currentView]);

  // Prevent page scroll when the modal is active and visible on home page
  useEffect(() => {
    if (!regionSelected && showPopup && currentView === "home") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [regionSelected, showPopup, currentView]);

  const handleSelectRegion = (bd: boolean) => {
    setIsBD(bd);
    setRegionSelected(true);
    setShowPopup(false);
    try {
      localStorage.setItem("baylight_studio_region", bd ? "BD" : "International");
    } catch (e) {
      // Ignored
    }
  };

  const handleChangeRegion = () => {
    setRegionSelected(false);
    setShowPopup(true);
  };

  // Modern browser history state manager
  const navigateWithParams = (updates: {
    view?: ViewType;
    project?: string | null;
    pcat?: string;
    scat?: string;
    prcat?: string;
    prefill?: string | null;
  }) => {
    const params = new URLSearchParams(window.location.search);
    
    const currentV = updates.view !== undefined ? updates.view : ((params.get("view") || "home") as ViewType);
    const currentP = updates.project !== undefined ? updates.project : (params.get("project") || null);
    const currentPcat = updates.pcat !== undefined ? updates.pcat : (params.get("pcat") || "All");
    const currentScat = updates.scat !== undefined ? updates.scat : (params.get("scat") || "UI/UX Design");
    const currentPrcat = updates.prcat !== undefined ? updates.prcat : (params.get("prcat") || "UI/UX Design");
    const currentPrefill = updates.prefill !== undefined ? updates.prefill : (params.get("prefill") || null);

    const newParams = new URLSearchParams();
    if (currentV && currentV !== "home") newParams.set("view", currentV);
    if (currentP) newParams.set("project", currentP);
    if (currentPcat && currentPcat !== "All") newParams.set("pcat", currentPcat);
    if (currentScat && currentScat !== "UI/UX Design") newParams.set("scat", currentScat);
    if (currentPrcat && currentPrcat !== "UI/UX Design") newParams.set("prcat", currentPrcat);
    if (currentPrefill) newParams.set("prefill", currentPrefill);

    const search = newParams.toString();
    const newUrl = search ? `${window.location.pathname}?${search}` : window.location.pathname;

    window.history.pushState(null, "", newUrl);

    // Apply states to React state
    setCurrentView(currentV);
    setSelectedProjectId(currentP);
    setSelectedCategory(currentPcat);
    setServicesCategory(currentScat);
    setPricingCategory(currentPrcat);
    setPrefillContactMessage(currentPrefill);

    // If major view, project change, scroll to top nicely
    if (updates.view !== undefined || updates.project !== undefined) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const view = (params.get("view") || "home") as ViewType;
      const project = params.get("project") || null;
      const pcat = params.get("pcat") || "All";
      const scat = params.get("scat") || "UI/UX Design";
      const prcat = params.get("prcat") || "UI/UX Design";
      const prefill = params.get("prefill") || null;

      setCurrentView(view);
      setSelectedProjectId(project);
      setSelectedCategory(pcat);
      setServicesCategory(scat);
      setPricingCategory(prcat);
      setPrefillContactMessage(prefill);
    };

    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const handleNavigation = (view: ViewType) => {
    navigateWithParams({ 
      view, 
      project: null, 
      prefill: null,
      pcat: "All",
      scat: "UI/UX Design",
      prcat: "UI/UX Design"
    });
  };

  const handleNavigateToProjectsWithCategory = (category: string) => {
    navigateWithParams({ view: "projects", project: null, pcat: category });
  };

  const handleNavigateToContactWithPrefill = (message: string) => {
    navigateWithParams({ view: "contact", project: null, prefill: message });
  };

  const categoriesMap: { [key: string]: { name: string; id: string; icon: ReactNode }[] } = {
    projects: [
      { name: "All", id: "All", icon: <Compass className="w-3.5 h-3.5" /> },
      { name: "UI/UX Design", id: "UI/UX Design", icon: <Layout className="w-3.5 h-3.5" /> },
      { name: "Graphic Design", id: "Graphic Design", icon: <PenTool className="w-3.5 h-3.5" /> },
      { name: "Motion Graphics & Video Editing", id: "Motion Graphics & Video Editing", icon: <Video className="w-3.5 h-3.5" /> },
      { name: "Brand Identity", id: "Brand Identity", icon: <Sparkles className="w-3.5 h-3.5" /> }
    ],
    services: [
      { name: "UI/UX Design", id: "UI/UX Design", icon: <Layout className="w-3.5 h-3.5" /> },
      { name: "Graphic Design", id: "Graphic Design", icon: <PenTool className="w-3.5 h-3.5" /> },
      { name: "Motion Graphics & Video Editing", id: "Motion Graphics & Video Editing", icon: <Video className="w-3.5 h-3.5" /> },
      { name: "Brand Identity", id: "Brand Identity", icon: <Sparkles className="w-3.5 h-3.5" /> }
    ],
    pricing: [
      { name: "UI/UX Design", id: "UI/UX Design", icon: <Layout className="w-3.5 h-3.5" /> },
      { name: "Graphic Design", id: "Graphic Design", icon: <PenTool className="w-3.5 h-3.5" /> },
      { name: "Motion Graphics & Video Editing", id: "Motion Graphics & Video Editing", icon: <Video className="w-3.5 h-3.5" /> },
      { name: "Brand Identity", id: "Brand Identity", icon: <Sparkles className="w-3.5 h-3.5" /> }
    ]
  };

  const hasSubmenu = !selectedProjectId && (currentView === "projects" || currentView === "services" || currentView === "pricing");
  const currentSubmenuTabs = hasSubmenu ? categoriesMap[currentView] || [] : [];
  
  const currentActiveCategory = 
    currentView === "projects" ? selectedCategory :
    currentView === "services" ? servicesCategory :
    currentView === "pricing" ? pricingCategory : "";

  const handleSubmenuTabChange = (id: string) => {
    if (currentView === "projects") {
      navigateWithParams({ pcat: id });
    } else if (currentView === "services") {
      navigateWithParams({ scat: id });
    } else if (currentView === "pricing") {
      navigateWithParams({ prcat: id });
    }
  };

  // Render individual page components or sub-details
  const renderMainContent = () => {
    if (selectedProjectId) {
      return (
        <ProjectDetail 
          projectId={selectedProjectId} 
          onBack={() => navigateWithParams({ project: null })} 
          onSelectProject={(id) => navigateWithParams({ project: id })}
        />
      );
    }

    switch (currentView) {
      case "home":
        return (
          <>
            {/* 1. Hero Section */}
            <Hero onChooseCategory={(cat) => handleNavigateToProjectsWithCategory(cat)} />

            {/* 2. Short Introduction & Success Metrics combined */}
            <WhyChooseUs />

            {/* 3. Featured Services Preview Teaser */}
            <FeaturedServicesPreview onExploreServices={() => handleNavigation("services")} />

            {/* 4. Featured Projects Preview (6 Projects Maximum) */}
            <Projects 
              onSelectProject={(id) => navigateWithParams({ project: id })} 
              onViewAllProjects={() => handleNavigation("projects")}
            />

            {/* 5. Client Logos */}
            <Clients />

            {/* 6. Testimonials & Rating Preview */}
            <Experiences />

            {/* 7. Call To Action (Pillars & Showreel) */}
            <AboutShowreel />

            {/* 8. Contact Preview Form */}
            <LetTalk />
          </>
        );

      case "studio":
        return (
          <StudioPage 
            onBackToHome={() => handleNavigation("home")}
            onNavigateToContact={() => handleNavigation("contact")}
          />
        );

      case "projects":
        return (
          <ProjectsPage 
            onSelectProject={(id) => navigateWithParams({ project: id })}
            activeCategory={selectedCategory}
            onCategoryChange={(cat) => navigateWithParams({ pcat: cat })}
            onBackToHome={() => handleNavigation("home")}
            onNavigateToContact={() => handleNavigation("contact")}
          />
        );

      case "services":
        return (
          <ServicesPage 
            activeCategory={servicesCategory}
            onCategoryChange={(cat) => navigateWithParams({ scat: cat })}
            onBackToHome={() => handleNavigation("home")}
            onNavigateToContact={() => handleNavigation("contact")}
          />
        );

      case "pricing":
        return (
          <PricingPage 
            activeCategory={pricingCategory}
            onCategoryChange={(cat) => navigateWithParams({ prcat: cat })}
            onBackToHome={() => handleNavigation("home")}
            onNavigateToContact={() => handleNavigation("contact")}
            isBD={isBD}
            regionSelected={regionSelected}
            onChangeRegion={handleChangeRegion}
          />
        );

      case "contact":
        return (
          <ContactPage 
            onBackToHome={() => handleNavigation("home")}
            prefillMessage={prefillContactMessage}
          />
        );

      default:
        return (
          <div className="py-32 text-center text-theme-muted font-mono text-sm">
            404 // Screen configuration mapping missing.
          </div>
        );
    }
  };

  return (
    <div className="bg-theme-bg min-h-screen text-theme-text antialiased selection:bg-theme-accent selection:text-theme-bg theme-transition animate-in fade-in duration-300">
      {/* Permanent Header navigation layer (Unified sticky attached to top) */}
      <header className={`sticky top-0 z-50 w-full border-b border-theme-border/10 transition-all duration-300 shadow-[0_10px_35px_rgba(0,0,0,0.4)] ${
        hasSubmenu 
          ? "bg-[#0A0A0A]" 
          : "bg-[rgba(10,10,10,0.45)] backdrop-blur-[28px] [backdrop-filter:blur(28px)_saturate(220%)]"
      }`}>
        <div className="max-w-[1600px] mx-auto px-[clamp(24px,4vw,48px)] w-full">
          <Navbar 
            currentView={currentView} 
            onNavigate={handleNavigation} 
            isSubmenuActive={hasSubmenu}
            submenuTabs={currentSubmenuTabs}
            activeSubmenuTabId={currentActiveCategory}
            onSubmenuTabChange={handleSubmenuTabChange}
            isBD={isBD}
            onSelectRegion={handleSelectRegion}
          />
        </div>
      </header>

      {/* Render Current Page Screen or Workspace detail */}
      <main className="relative z-10 transition-opacity duration-300">
        {renderMainContent()}
      </main>

      {/* Permanent branded footer block */}
      <Footer onNavigate={handleNavigation} />

      {/* Glassmorphic bottom sandwich gradient blur overlay */}
      <div 
        id="bottom-glass-sandwich-overlay"
        className="fixed bottom-0 left-0 right-0 h-28 sm:h-96 pointer-events-none z-30 theme-transition"
        style={{
          background: "linear-gradient(to top, var(--color-theme-bg) 0%, transparent 100%)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          WebkitMaskImage: "linear-gradient(to top, rgba(0, 0, 0, 1.0) 0%, rgba(0, 0, 0, 0.45) 30%, rgba(0, 0, 0, 0.1) 70%, rgba(0, 0, 0, 0.0) 100%)",
          maskImage: "linear-gradient(to top, rgba(0, 0, 0, 1.0) 0%, rgba(0, 0, 0, 0.45) 30%, rgba(0, 0, 0, 0.1) 70%, rgba(0, 0, 0, 0.0) 100%)"
        }}
      />

      {/* Immersive Region Selector Modal */}
      <AnimatePresence>
        {!regionSelected && showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-xl p-4 select-none"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="max-w-xl w-full border border-theme-border/60 bg-[#0c0d0e]/95 p-8 md:p-10 rounded-[4px] relative shadow-[0_0_50px_rgba(225,255,0,0.08)] text-center overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-[100px] bg-gradient-to-b from-[#e1ff00]/5 to-transparent pointer-events-none" />
              
              <div className="relative z-10">
                <span className="inline-block font-mono text-[11px] text-theme-accent uppercase tracking-widest border border-theme-accent/20 bg-[#e1ff00]/5 px-3 py-1 rounded-[4px] mb-6 font-bold">
                  Select Location // pricing
                </span>
                
                <h2 className="font-sans text-[24px] md:text-[28px] font-extrabold text-[#e1ff00] uppercase tracking-tight leading-tight mb-6">
                  Are you a Bangladeshi client or an International client?
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Bangladesh Option Card */}
                  <motion.button
                    whileHover={{ scale: 1.02, borderColor: "#e1ff00", backgroundColor: "rgba(225,255,0,0.02)" }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleSelectRegion(true)}
                    className="flex flex-col items-center justify-center p-6 bg-theme-bg/60 border border-theme-border hover:border-theme-accent rounded-[4px] cursor-pointer text-center group transition-colors duration-300"
                  >
                    <span className="font-display text-[26px] font-extrabold text-[#e1ff00] mb-2 group-hover:scale-105 transition-transform duration-300">
                      ৳ BDT
                    </span>
                    <span className="font-sans text-[15px] font-bold text-theme-text uppercase tracking-wide">
                      Bangladeshi
                    </span>
                    <span className="text-[12px] text-theme-muted mt-1.5 leading-normal max-w-[160px]">
                      Localized rates in BDT for local clients
                    </span>
                  </motion.button>

                  {/* International Option Card */}
                  <motion.button
                    whileHover={{ scale: 1.02, borderColor: "#e1ff00", backgroundColor: "rgba(225,255,0,0.02)" }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleSelectRegion(false)}
                    className="flex flex-col items-center justify-center p-6 bg-theme-bg/60 border border-theme-border hover:border-theme-accent rounded-[4px] cursor-pointer text-center group transition-colors duration-300"
                  >
                    <span className="font-display text-[26px] font-extrabold text-[#e1ff00] mb-2 group-hover:scale-105 transition-transform duration-300">
                      $ USD
                    </span>
                    <span className="font-sans text-[15px] font-bold text-theme-text uppercase tracking-wide">
                      International
                    </span>
                    <span className="text-[12px] text-theme-muted mt-1.5 leading-normal max-w-[160px]">
                      Global billing in USD for worldwide standards
                    </span>
                  </motion.button>
                </div>

                <p className="text-[11px] font-mono text-theme-muted select-none mt-8 tracking-widest uppercase font-bold">
                  baylight studio // premium design ecosystem
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

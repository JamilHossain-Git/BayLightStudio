import { useState, useEffect, useRef } from "react";
import { ArrowUpRight, ArrowLeft, ArrowRight, Sparkles, Search, TrendingUp, Star, Compass, Layout, PenTool, Video } from "lucide-react";
import { projects } from "../data";
import { Project } from "../types";
import { motion, AnimatePresence } from "motion/react";

interface ProjectsPageProps {
  onSelectProject: (id: string) => void;
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  onBackToHome: () => void;
  onNavigateToContact?: () => void;
}

export default function ProjectsPage({ onSelectProject, activeCategory, onCategoryChange, onBackToHome, onNavigateToContact }: ProjectsPageProps) {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 8;
  const pageHeaderRef = useRef<HTMLDivElement>(null);
  const submenuAnchorRef = useRef<HTMLDivElement>(null);

  // Reset page and query on category change and scroll to top
  useEffect(() => {
    setCurrentPage(1);
    setSearchQuery("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeCategory]);

  // Combined Filtering Logic: both category selection AND text search
  const filteredProjects = projects.filter((project: Project) => {
    const matchesCategory =
      activeCategory === "All" ||
      project.category.toLowerCase() === activeCategory.toLowerCase();

    const matchesSearch =
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (project.techStack && project.techStack.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase())));

    return matchesCategory && matchesSearch;
  });

  // Pagination Logic
  const totalProjects = filteredProjects.length;
  const totalPages = Math.ceil(totalProjects / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProjects = filteredProjects.slice(startIndex, endIndex);

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    
    // Smooth scroll back to top of project listing
    setTimeout(() => {
      pageHeaderRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  // Metric chart data
  const chartData = [
    { month: "Jan", visits: 50, active: false },
    { month: "Feb", visits: 64, active: false },
    { month: "Mar", visits: 78, active: false },
    { month: "Apr", visits: 92, active: true },
    { month: "May", visits: 120, active: true }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section 
      ref={pageHeaderRef}
      id="projects-header" 
      className="bg-theme-bg min-h-screen pt-12 pb-32 border-b border-theme-border"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-[1600px] mx-auto px-[clamp(24px,4vw,48px)] w-full"
      >

        {/* Scroll anchor to track static position of the submenu in the document flow */}
        <div ref={submenuAnchorRef} className="h-0 w-0 pointer-events-none opacity-0 select-none pb-4" />

        {/* Universal Search Bar (Visible on all viewports, clean and spacious) */}
        <div className="mb-12 select-none max-w-md">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-theme-muted pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Search works by name, tags, tech..."
              className="w-full bg-theme-surf border border-theme-border rounded-[4px] pl-10 pr-5 py-2.5 text-xs text-theme-text placeholder-theme-muted/50 focus:outline-none focus:border-theme-accent transition-colors"
            />
          </div>
        </div>

        {/* Responsive Grid display */}
        <AnimatePresence mode="wait">
          {paginatedProjects.length > 0 ? (
            <motion.div 
              key={activeCategory + searchQuery + currentPage}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
            >
              {paginatedProjects.map((project: Project) => {
                return (
                  <motion.div
                    variants={itemVariants}
                    key={project.id}
                    onClick={() => onSelectProject(project.id)}
                    className="group flex flex-col bg-theme-card border border-theme-border rounded p-4 md:p-5 hover:border-theme-accent hover:shadow-2xl transition-all duration-300 cursor-pointer theme-transition"
                  >
                    {/* Proportional Image aspect ratio */}
                    <div className="relative aspect-[16/10] rounded overflow-hidden bg-theme-surf border border-theme-border/50 mb-4 group/image">
                      <img
                        src={project.image}
                        alt={project.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />

                      {/* Year Tag on top right */}
                      <div className="absolute top-3 right-3 bg-theme-bg/85 backdrop-blur-sm px-2.5 py-1 rounded-sm text-small-fluid font-mono font-medium text-theme-text border border-theme-border select-none">
                        {project.year}
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="flex-grow flex flex-col justify-between">
                       <div>
                        {/* Monospaced Category */}
                        <span className="font-mono text-small-fluid text-theme-accent uppercase tracking-widest font-bold flex items-center gap-1.5 focus:outline-none">
                          <Sparkles className="w-2.5 h-2.5" /> {project.category}
                        </span>

                        {/* Display Typography Heading */}
                        <h3 className="text-card-h4-fluid text-theme-text mt-2 group-hover:text-theme-accent transition-colors line-clamp-1 uppercase">
                          {project.name}
                        </h3>

                        {/* Short Description */}
                        <p className="text-body-large-fluid text-theme-muted mt-2 leading-relaxed line-clamp-2 min-h-[3rem]">
                          {project.tagline}
                        </p>

                        {/* Mini tech stack chips */}
                        {project.techStack && (
                          <div className="flex flex-wrap gap-1.5 mt-3 select-none">
                            {project.techStack.slice(0, 3).map((tech, idx) => (
                              <span 
                                key={idx} 
                                className="font-mono text-small-fluid uppercase px-1.5 py-0.5 bg-theme-surf border border-theme-border/70 rounded text-theme-muted"
                              >
                                {tech}
                              </span>
                            ))}
                            {project.techStack.length > 3 && (
                              <span className="font-mono text-small-fluid px-1 bg-theme-surf border border-theme-border/70 rounded text-theme-muted">
                                +{project.techStack.length - 3}
                              </span>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Action trigger button */}
                      <div className="mt-5 pt-4 border-t border-theme-border/50 flex items-center justify-between">
                        <span className="text-small-fluid font-bold text-theme-text group-hover:text-theme-accent transition-colors inline-flex items-center gap-1.5 cursor-pointer">
                          View Details
                          <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            <motion.div 
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="border border-dashed border-theme-border py-20 text-center rounded-lg bg-theme-card"
            >
              <p className="font-mono text-sm text-theme-muted">No works found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  onCategoryChange("All");
                }}
                className="mt-3 text-xs font-mono text-theme-accent underline bg-transparent cursor-pointer"
              >
                Reset Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pagination Section */}
        {totalPages > 1 && (
          <div className="mt-16 pt-8 border-t border-theme-border/50 flex flex-col sm:flex-row items-center justify-between gap-4 select-none">
            
            {/* Status counter line */}
            <span className="font-mono text-small-fluid text-theme-muted">
              Showing <span className="text-theme-text font-bold">{startIndex + 1}</span> to{" "}
              <span className="text-theme-text font-bold">
                {Math.min(endIndex, totalProjects)}
              </span>{" "}
              of <span className="text-theme-text font-bold">{totalProjects}</span> works
            </span>

            {/* Pagination Controls */}
            <div className="flex items-center gap-1 bg-theme-surf border border-theme-border rounded-[4px] p-1 h-[38px]">
              {/* Previous page button */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-3 h-[30px] rounded-[4px] text-small-fluid font-mono font-semibold uppercase tracking-wider flex items-center gap-1 ${
                  currentPage === 1
                    ? "opacity-45 cursor-not-allowed text-theme-muted"
                    : "btn-glass-secondary text-theme-text"
                }`}
                aria-label="Previous Page"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Prev</span>
              </button>

              {/* Page numbers list */}
              {Array.from({ length: totalPages }, (_, index) => {
                const pageNumber = index + 1;
                const isSelected = currentPage === pageNumber;
                return (
                  <button
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    className={`w-[30px] h-[30px] rounded-[4px] text-small-fluid font-mono font-bold flex items-center justify-center cursor-pointer ${
                      isSelected
                        ? "bg-theme-accent text-theme-bg"
                        : "btn-glass-secondary text-theme-muted"
                    }`}
                  >
                    {pageNumber}
                  </button>
                );
              })}

              {/* Next page button */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-3 h-[30px] rounded-[4px] text-small-fluid font-mono font-semibold uppercase tracking-wider flex items-center gap-1 ${
                  currentPage === totalPages
                    ? "opacity-45 cursor-not-allowed text-theme-muted"
                    : "btn-glass-secondary text-theme-text"
                }`}
                aria-label="Next Page"
              >
                <span className="hidden sm:inline">Next</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Dedicated CASE STUDIES section at the bottom of the Projects page! */}
        <div className="mt-32 pt-20 border-t border-theme-border">
          <div className="flex justify-between items-center mb-12 font-mono text-caption text-theme-muted uppercase tracking-widest select-none">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-theme-accent rounded-full animate-ping"></span>
              Featured Case Study Blueprint
            </div>
            <div>VERIFIED METRICS PERFORMANCE CASE</div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            {/* Left Case Study Card */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 bg-theme-card text-theme-text p-5 sm:p-8 md:p-12 rounded flex flex-col justify-between relative overflow-hidden shadow-2xl border border-theme-border"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-radial from-theme-accent/5 to-transparent blur-3xl pointer-events-none"></div>

              <div className="space-y-6 relative z-10 text-left">
                <span className="bg-theme-surf border border-theme-border text-theme-text font-mono text-small-fluid px-3 py-1 rounded uppercase tracking-wider font-semibold">
                  Performance Rebrand
                </span>
                <h3 className="text-h3-fluid tracking-tight leading-tight text-theme-text uppercase">
                  Corporate Core Headless optimization Sprints
                </h3>
                <p className="text-theme-muted text-body-large-fluid leading-relaxed max-w-md">
                  Converting legacy layouts into lightweight client-side cached systems. This case outlines re-architecting full brand guide vectors alongside responsive atomic page delivery.
                </p>
              </div>

              <div className="mt-10 relative z-10 text-left">
                <div className="relative rounded overflow-hidden border border-theme-border aspect-[16/9] mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop"
                    alt="Corporate engineering setup"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale"
                  />
                  <div className="absolute top-3 left-3 bg-theme-bg/90 px-2.5 py-1 rounded font-mono text-small-fluid text-theme-text border border-theme-border select-none">
                    REF: ATHENA_CORE_11
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-theme-border pt-4">
                  <span className="font-mono text-small-fluid text-theme-muted tracking-widest uppercase">
                    LIVE SYSTEM ACTIVE
                  </span>
                  <span className="flex items-center gap-1.5 font-sans font-bold text-body-standard-fluid text-theme-text hover:text-theme-accent transition-colors cursor-pointer">
                    baylightstudio.com/live_system <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right Case Study Performance Statistics Block */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 bg-theme-card p-5 sm:p-8 md:p-12 rounded border border-theme-border shadow-sm flex flex-col justify-between"
            >
              
              <div className="space-y-6 text-left">
                <h4 className="font-mono text-small-fluid text-theme-muted uppercase tracking-widest block">
                  // QUANTIFIED SPEED GAINS REGISTERED
                </h4>
                <div className="flex flex-wrap gap-3 items-center">
                  <span className="bg-theme-accent/10 border border-theme-accent/20 text-theme-accent text-small-fluid font-bold px-3 py-1.5 rounded uppercase">
                    Page Speed index +48%
                  </span>
                  <span className="bg-theme-accent/10 border border-theme-accent/20 text-theme-accent text-small-fluid font-bold px-3 py-1.5 rounded uppercase">
                    Bounce rate decrease -23%
                  </span>
                </div>
              </div>

              {/* Graphical models */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center my-8 text-left">
                {/* Score */}
                <div className="flex flex-col items-center bg-theme-surf p-6 rounded border border-theme-border text-center">
                  <div className="relative w-28 h-28 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="56"
                        cy="56"
                        r="48"
                        className="text-theme-muted/10 animate-none"
                        strokeWidth="8"
                        fill="transparent"
                        stroke="currentColor"
                      />
                      <motion.circle
                        cx="56"
                        cy="56"
                        r="48"
                        className="text-theme-accent"
                        strokeWidth="8"
                        fill="transparent"
                        strokeDasharray="301.6"
                        initial={{ strokeDashoffset: 301.6 }}
                        whileInView={{ strokeDashoffset: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        strokeLinecap="round"
                        stroke="currentColor"
                      />
                    </svg>
                    <span className="absolute font-display font-extrabold text-h2-fluid text-theme-text">100</span>
                  </div>
                  <span className="font-mono text-small-fluid uppercase tracking-wider text-theme-muted mt-3">Lighthouse speed</span>
                  <p className="text-small-fluid text-theme-muted mt-1 leading-normal">
                    Verified on standard Chromium server speed audits.
                  </p>
                </div>

                {/* Progress Mini Bar Chart */}
                <div className="bg-theme-surf p-6 rounded border border-theme-border flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-small-fluid text-theme-muted uppercase">Cumulative conversion</span>
                      <TrendingUp className="w-3.5 h-3.5 text-theme-accent" />
                    </div>
                    <h4 className="text-h3-fluid text-theme-text">
                      38k <span className="text-theme-accent text-small-fluid font-semibold">+60%</span>
                    </h4>
                  </div>

                  <div className="flex items-end justify-between gap-1.5 h-20 pt-4">
                    {chartData.map((data, idx) => (
                      <div key={idx} className="flex flex-col items-center flex-1">
                        <div className="w-full bg-theme-border rounded-t-sm h-full flex items-end overflow-hidden">
                          <motion.div
                            initial={{ height: 0 }}
                            whileInView={{ height: `${(data.visits / 120) * 100}%` }}
                            viewport={{ once: true }}
                             transition={{ duration: 1, ease: "easeOut", delay: idx * 0.1 }}
                            className={`w-full ${
                              data.active ? "bg-theme-accent" : "bg-theme-muted/30"
                            }`}
                          />
                        </div>
                        <span className="font-mono text-xs text-theme-muted mt-1 uppercase">{data.month}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Quote details */}
              <div className="border-t border-theme-border pt-6 text-left">
                <div className="flex items-center gap-1 text-amber-400 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <blockquote className="text-body-large-fluid text-theme-text font-medium leading-relaxed italic">
                  "Speed metrics changed visitor trust instantly. Converting legacy pages of Athena into headless structures yielded +60% organic leads within 3 months."
                </blockquote>
                <p className="font-mono text-small-fluid text-theme-muted mt-3 uppercase">
                  Angela Smith • Operations Lead, Athena Tech
                </p>
              </div>

            </motion.div>
          </div>
        </div>

      </motion.div>
    </section>
  );
}

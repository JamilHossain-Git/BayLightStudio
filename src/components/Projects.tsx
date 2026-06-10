import { ArrowUpRight, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { projects } from "../data";
import { Project } from "../types";

interface ProjectsProps {
  onSelectProject: (id: string) => void;
  onViewAllProjects: () => void;
}

export default function Projects({ onSelectProject, onViewAllProjects }: ProjectsProps) {
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
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 90, damping: 15 }
    }
  };

  return (
    <section className="bg-theme-bg py-24 border-b border-theme-border theme-transition" id="projects">
      <div className="max-w-[1600px] mx-auto px-[clamp(24px,4vw,48px)] w-full">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-16"
        >
          <div className="lg:col-span-2 select-none text-left">
            <h2 className="text-h2-fluid tracking-tight text-theme-text uppercase">
              Projects<span className="text-theme-accent">.</span>
            </h2>
          </div>
          
          <div className="lg:col-span-1 border-l border-theme-border pl-6 pt-4">
            <p className="text-body-standard-fluid text-theme-muted leading-relaxed">
              We've helped leading businesses across diverse sectors launch exceptional, reliable products. Explore our curated selection of high-fidelity engineering and design systems.
            </p>
          </div>
        </motion.div>

        {/* Projects Grid (Limited to 8 items on Homepage for perfect 4-column layout balance) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
        >
          {projects.slice(0, 8).map((project: Project) => {
            return (
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -6, borderColor: "var(--theme-accent)" }}
                key={project.id}
                onClick={() => onSelectProject(project.id)}
                className="group flex flex-col bg-theme-card border border-theme-border rounded-lg p-4 md:p-5 hover:shadow-lg transition-all duration-300 cursor-pointer theme-transition"
              >
                {/* Project Image Box with Proportional Aspect Ratio */}
                <div className="relative aspect-[16/10] rounded overflow-hidden bg-theme-surf border border-theme-border/50 mb-4 group/image">
                  <img
                    src={project.image}
                    alt={project.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />

                  {/* Year Tag on Top Right */}
                  <div className="absolute top-3 right-3 bg-theme-bg/85 backdrop-blur-sm px-2.5 py-1 rounded-sm text-small-fluid font-mono font-medium text-theme-text border border-theme-border select-none">
                    {project.year}
                  </div>
                </div>

                {/* Card structure & Details */}
                <div className="flex-grow flex flex-col justify-between">
                  <div>
                    {/* Category */}
                    <span className="font-mono text-small-fluid text-theme-accent uppercase tracking-widest font-semibold">
                      {project.category}
                    </span>

                    {/* Project Title */}
                    <h3 className="text-card-h4-fluid text-theme-text mt-1.5 group-hover:text-theme-accent transition-colors line-clamp-1">
                      {project.name}
                    </h3>

                    {/* Short Description */}
                    <p className="text-body-large-fluid text-theme-muted mt-2 leading-relaxed line-clamp-2 min-h-[2.5rem]">
                      {project.tagline}
                    </p>
                  </div>

                  {/* View Project Button */}
                  <div className="mt-4 pt-4 border-t border-theme-border/50 flex items-center justify-between">
                    <span className="text-small-fluid font-semibold text-theme-text group-hover:text-theme-accent transition-colors inline-flex items-center gap-1.5 cursor-pointer">
                      View Project <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View More Projects Action Button */}
        <div className="mt-16 flex justify-center">
          <button
            onClick={onViewAllProjects}
            className="h-[40px] px-6 sm:px-8 inline-flex items-center justify-center btn-glass-primary font-bold tracking-wider uppercase text-[11px] sm:text-xs rounded shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer font-display text-center w-full sm:w-auto"
          >
            View More Projects
          </button>
        </div>
      </div>
    </section>
  );
}

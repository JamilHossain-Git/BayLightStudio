import { useState } from "react";
import { Sparkles, Compass, ArrowUpRight } from "lucide-react";
import { team } from "../data";
import { motion } from "motion/react";
import SpotlightCard from "./SpotlightCard";

interface StudioPageProps {
  onBackToHome: () => void;
  onNavigateToContact: () => void;
}

export default function StudioPage({ onBackToHome, onNavigateToContact }: StudioPageProps) {
  const [activeBio, setActiveBio] = useState<string | null>(null);

  const teamBios: { [key: string]: string } = {
    lauren: "Directs the overarching creative vision, brand logic, and unified design systems.",
    christopher: "Crafts responsive layouts, interactive high-fidelity prototypes, and design system infrastructures.",
    sadat: "Directs corporate print architectures, luxury magazine spreads, and physical brand identity layouts.",
    sarah: "Shapes immersive digital cinematics, responsive audio-synced video editing, and dynamic motion graphics."
  };

  const philosophy = [
    {
      title: "Pragmatic Simplicity",
      desc: "We purge interfaces of cosmetic clutter to isolate the absolute core action of each user journey."
    },
    {
      title: "Absolute Alignment",
      desc: "Our design and engineering systems share the exact same JSON variables, ensuring perfect visual fidelity."
    },
    {
      title: "Offline-First Velocity",
      desc: "Every database layout is structurally prepared for aggressive client-side caching and millisecond load speeds."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Vector Planning",
      desc: "We analyze current UX bottlenecks, inspect conversion metrics, and design a custom architectural blueprint."
    },
    {
      step: "02",
      title: "Design Sprints & Typographic Spec",
      desc: "Pixel-perfect visual canvases are compiled in Figma, pairing space grotesque headers with custom palettes."
    },
    {
      step: "03",
      title: "Bespoke Clean Engineering",
      desc: "Everything is hard-coded into production-ready TypeScript modules. No bloated visual page builders, ever."
    },
    {
      step: "04",
      title: "Deployment & Speed Audits",
      desc: "We build and deploy on modern high-speed server layers with continuous delivery logs and speed scores of 100%."
    }
  ];

  const achievements = [
    { year: "2025", title: " Tokyo TDC Award", org: "Featured for minimalist web structure" },
    { year: "2024", title: "$45M Venture Funded", org: "Helped clients secure Series A through design" },
    { year: "2023", title: "Awwwards SOTD", org: "Recognized for creative tech and kinetic typography" },
    { year: "2022", title: "CSS Design Awards", org: "Best UI/UX layout and performance scaling" }
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
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-theme-bg min-h-screen pt-12 pb-32 border-b border-theme-border theme-transition"
    >
      <div className="max-w-[1600px] mx-auto px-[clamp(24px,4vw,48px)] w-full">
         
        {/* Studio Story & Mission / Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-28">
          <motion.div 
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative group cursor-pointer"
          >
            <img
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1000&auto=format&fit=crop"
              alt="Team discussing layout grids"
              referrerPolicy="no-referrer"
              className="w-full h-[550px] object-cover rounded-2xl border border-theme-border shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute bottom-4 left-4 bg-theme-bg/90 backdrop-blur-sm p-4 rounded-xl text-theme-text font-mono text-[9px] tracking-wider uppercase border border-theme-border">
              [ REF: STUDIO_BUILD_ROOM ]
            </div>
          </motion.div>

          <div className="lg:col-span-7 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-small-fluid font-mono text-theme-accent font-bold uppercase tracking-widest block mb-4">
                THE STUDIO STORY
              </span>
              <h2 className="text-h2-fluid text-theme-text leading-tight mb-6 uppercase">
                Redefining the design and engineering landscape since 2018.
              </h2>
              <div className="space-y-4 text-theme-muted text-body-large-fluid leading-relaxed">
                <p>
                  baylight studio was created to bridge a deep gap in the product landscape: most agencies create design templates that struggle to scale, or generate generic code missing core visual polish.
                </p>
                <p>
                  We operate as a high-density, small-scale unit. Our core engineers sit in on the original wireframing sprints, and our creative directors review the raw DOM nodes prior to production handoffs. This ensures that what is approved on our high-contrast presentation views matches precisely what is delivered in raw code.
                </p>
              </div>
            </motion.div>

            {/* Mission & Vision split */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-theme-border/50">
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-3"
              >
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-theme-accent/15 text-theme-accent rounded">
                    <Compass className="w-4 h-4" />
                  </div>
                  <h4 className="text-card-h4-fluid text-theme-text uppercase tracking-tight">Our Mission</h4>
                </div>
                <p className="text-body-large-fluid text-theme-muted leading-relaxed">
                  To empower top-tier startups and scaling companies with beautiful interfaces and robust technology architectures that trigger immediate, authentic conversions.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-3"
              >
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-theme-accent/15 text-theme-accent rounded">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <h4 className="text-card-h4-fluid text-theme-text uppercase tracking-tight">Our Vision</h4>
                </div>
                <p className="text-body-large-fluid text-theme-muted leading-relaxed">
                  A software environment purged of bloated elements—where raw performance, intentional typographic layouts, and secure codebases are standard.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Philosophy & Agile Process Grid */}
        <div className="mb-28 border-y border-theme-border/50 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
            <div className="lg:col-span-4">
              <span className="text-small-fluid font-mono text-theme-accent font-bold uppercase tracking-widest block mb-3">
                DESIGN PHILOSOPHY
              </span>
              <h2 className="text-h2-fluid text-theme-text mb-4 uppercase">
                Pristine execution, zero decoration.
              </h2>
              <p className="text-body-large-fluid text-theme-muted leading-relaxed">
                We believe that premium digital design doesn't come from heavy gradients or visual noise. It comes from the impeccable calibration of letter-spacing, grid proportions, and custom easing transitions.
              </p>
            </div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
              {philosophy.map((item, id) => (
                <motion.div 
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                  key={id} 
                  className="cursor-pointer"
                >
                  <SpotlightCard
                    className="p-6 h-full rounded hover:border-theme-accent transition-all duration-300 group"
                    spotlightColor="rgba(225, 255, 0, 0.15)"
                  >
                    <h4 className="text-card-h4-fluid text-theme-text mb-3 uppercase tracking-tight">
                      {item.title}
                    </h4>
                    <p className="text-body-large-fluid text-theme-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </SpotlightCard>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Process Timeline */}
          <div className="mt-16">
            <span className="text-caption font-mono text-theme-muted uppercase tracking-widest block mb-10 text-center select-none">
              — // SPRINT DEVELOPMENT PROCESS MAP // —
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
              {processSteps.map((step, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
                  key={idx} 
                  className="relative group cursor-pointer"
                >
                  <div className="flex items-baseline gap-4 mb-4 select-none">
                    <span className="text-3xl font-display font-black text-theme-accent opacity-40 group-hover:opacity-100 transition-opacity">
                      {step.step}
                    </span>
                    <div className="h-px bg-theme-border flex-grow group-hover:bg-theme-accent transition-colors"></div>
                  </div>
                  <h3 className="font-display font-bold text-body-standard-fluid text-theme-text tracking-tight uppercase mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-body-large-fluid text-theme-muted leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Members Section */}
        <div className="mb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
            <div className="lg:col-span-3 space-y-4">
              <div className="font-mono text-caption text-theme-muted uppercase tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-theme-accent rounded-full animate-pulse"></span>
                The faces behind
              </div>
              
              {/* Supporting workspace image to populate and clarify the left empty layout grid */}
              <div className="hidden lg:block relative rounded-2xl overflow-hidden border border-theme-border shadow-md aspect-[4/3] bg-theme-surf theme-transition">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=500&auto=format&fit=crop"
                  alt="baylight studio laboratory studio core center"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute bottom-2 left-2 bg-theme-bg/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-mono tracking-wider text-theme-text uppercase border border-theme-border">
                  [ ADDR: HQ_WORKSHOP ]
                </div>
              </div>
            </div>
            <div className="lg:col-span-9 space-y-4">
              <h2 className="text-h2-fluid text-theme-text leading-none uppercase">
                The experts driving the craft.
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                <p className="text-theme-muted text-body-large-fluid leading-relaxed pr-4">
                  We believe beautiful software is created through intimate alignment. That's why our core engineers and graphic design leads operate as an open synchronous unit.
                </p>
              </div>
            </div>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6"
          >
            {team.map((member) => {
              const isSelected = activeBio === member.id;
              return (
                <motion.div
                  variants={itemVariants}
                  key={member.id}
                  className="group flex flex-col bg-theme-surf rounded-2xl border border-theme-border overflow-hidden shadow-sm hover:border-theme-accent hover:shadow-md transition-all duration-300"
                  onMouseEnter={() => setActiveBio(member.id)}
                  onMouseLeave={() => setActiveBio(null)}
                >
                  <div className="relative aspect-[3/4] bg-theme-surf overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale transition-transform duration-700 ease-out group-hover:scale-102 group-hover:grayscale-0"
                    />

                    <div className="absolute inset-x-4 bottom-4 bg-theme-card/90 backdrop-blur-sm p-4 rounded-xl border border-theme-border text-theme-text flex flex-col justify-between transition-all duration-300 group-hover:bg-theme-card">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-mono text-small-fluid text-theme-muted tracking-wider uppercase leading-none mb-1">
                            {member.role.toUpperCase()}
                          </p>
                          <h4 className="text-body-large-fluid font-bold leading-tight text-theme-text">
                            {member.name}
                          </h4>
                        </div>
                        <span className="font-mono text-small-fluid text-theme-muted border border-theme-border px-1.5 py-0.5 rounded leading-none">
                          {member.initials}
                        </span>
                      </div>

                      <div className={`mt-3 pt-3 border-t border-theme-border text-small-fluid text-theme-muted leading-normal transition-all duration-300 ${
                        isSelected ? "block animate-in fade-in slide-in-from-bottom-2 duration-200" : "hidden"
                      }`}>
                        <p>{teamBios[member.id] || "Active studio team member."}</p>
                      </div>
                    </div>

                    <div className="absolute top-3 right-3 bg-theme-surf/90 backdrop-blur-sm px-2.5 py-1 rounded border border-theme-border flex items-center gap-1 font-mono text-small-fluid font-semibold text-theme-text tracking-wider shadow">
                      <span className="w-1 h-1 rounded bg-theme-accent animate-pulse"></span>
                      ACTIVE
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Experience & Achievements Stats Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-24 border-t border-theme-border/50 pt-20">
          <div>
            <span className="text-small-fluid font-mono text-theme-accent font-bold uppercase tracking-widest block mb-4">
              AWARDS & RECOGNITION
            </span>
            <h2 className="text-h2-fluid text-theme-text max-w-md leading-tight mb-8 uppercase">
              Bespoke quality validated by the industry.
            </h2>
            <div className="divide-y divide-theme-border">
              {achievements.map((item, idx) => (
                <motion.div 
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  key={idx} 
                  className="py-5 flex items-start gap-4 select-none"
                >
                  <span className="font-mono text-small-fluid text-theme-accent bg-theme-accent/10 border border-theme-accent/20 px-2.5 py-1 rounded font-bold">
                    {item.year}
                  </span>
                  <div>
                    <h4 className="text-body-standard-fluid text-theme-text font-bold">{item.title}</h4>
                    <p className="text-body-large-fluid text-theme-muted mt-0.5">{item.org}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="cursor-pointer"
          >
            <SpotlightCard 
              className="space-y-8 p-5 sm:p-8 rounded hover:border-theme-accent transition-all duration-300 shadow-xl h-full"
              spotlightColor="rgba(225, 255, 0, 0.15)"
            >
              <span className="font-mono text-small-fluid text-theme-muted uppercase tracking-widest border border-theme-border px-2.5 py-1 rounded bg-theme-bg inline-block">
                ENGINEERING CRITERIA
              </span>
              <h4 className="text-h3-fluid text-theme-text uppercase">Active Client Engagements</h4>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-small-fluid font-mono mb-2 uppercase">
                    <span>UX/UI Framework Consistency</span>
                    <span className="text-theme-accent">100%</span>
                  </div>
                  <div className="w-full bg-theme-surf h-1 rounded overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="bg-theme-accent h-full"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-small-fluid font-mono mb-2 uppercase">
                    <span>System Speed Index Scores (100)</span>
                    <span className="text-theme-accent">98/100</span>
                  </div>
                  <div className="w-full bg-[#111111] h-1 rounded overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "98%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
                      className="bg-theme-accent h-full"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-small-fluid font-mono mb-2 uppercase">
                    <span>Client Retention & Satisfaction</span>
                    <span className="text-theme-accent">98.4%</span>
                  </div>
                  <div className="w-full bg-[#111111] h-1 rounded overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "98.4%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                      className="bg-theme-accent h-full"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-theme-border/60">
                <blockquote className="text-body-large-fluid text-theme-muted leading-relaxed italic">
                  "Working with baylight studio boosted our engineering workflow and brought incredible visual consistency to our interfaces. They act not as freelancers, but as co-architects."
                </blockquote>
                <p className="text-small-fluid font-mono text-theme-text mt-3 text-right uppercase">
                  Enterprise Product Lead • TechNova Infrastructure
                </p>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>

        {/* Clients section inside Studio */}
        <div className="border-t border-theme-border/50 pt-20 text-center space-y-10">
          <div className="space-y-3">
            <h3 className="text-h3-fluid text-theme-text uppercase">Our Clients Operate Worldwide</h3>
            <p className="text-body-large-fluid text-theme-muted max-w-md mx-auto">
              Our codebases and corporate graphic files power design-minded groups across London, Tokyo, New York, Beirut, and beyond.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-12 opacity-65 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
            <span className="text-body-standard-fluid tracking-wider text-theme-text">Vapor Software</span>
            <span className="text-body-standard-fluid tracking-wider text-theme-text">Vertex Holdings</span>
            <span className="text-body-standard-fluid tracking-wider text-theme-text">Apex Construct</span>
            <span className="text-body-standard-fluid tracking-wider text-theme-text">Alcon Strategic</span>
          </div>

          <div className="pt-10">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onNavigateToContact}
              className="h-[40px] px-6 sm:px-8 inline-flex items-center justify-center btn-glass-primary font-bold tracking-wider uppercase text-[11px] sm:text-xs rounded shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer font-display text-center group"
            >
              <span>Start Your Project Sprints</span>
              <ArrowUpRight className="w-4 h-4 ml-2 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.button>
          </div>
        </div>

      </div>
    </motion.section>
  );
}

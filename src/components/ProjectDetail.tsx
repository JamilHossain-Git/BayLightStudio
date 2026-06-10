import React, { useState, useEffect } from "react";
import { 
  ArrowLeft, 
  ExternalLink, 
  Sparkles, 
  Check, 
  Clock, 
  Building, 
  Layers, 
  TrendingUp, 
  Monitor, 
  ChevronRight, 
  ChevronLeft,
  Mail,
  Zap,
  Cpu,
  Sliders,
  MapPin,
  Compass,
  Palette,
  CheckCircle2,
  Share2
} from "lucide-react";
import { projects } from "../data";
import { Project } from "../types";

interface ProjectDetailProps {
  projectId: string;
  onBack: () => void;
  onSelectProject: (id: string) => void;
}

export default function ProjectDetail({ projectId, onBack, onSelectProject }: ProjectDetailProps) {
  const projectIndex = projects.findIndex((p) => p.id === projectId);
  const project = projects[projectIndex] || projects[0];

  // Next and Prev projects
  const nextProject = projects[(projectIndex + 1) % projects.length];
  const prevProject = projects[(projectIndex - 1 + projects.length) % projects.length];

  // Sandbox simulations
  const [boltshiftBattery, setBoltshiftBattery] = useState(82);
  const [boltshiftEngineMode, setBoltshiftEngineMode] = useState<"comfort" | "sport" | "eco">("sport");

  const [ephemeralBg, setEphemeralBg] = useState("#F5EBE6");
  const [ephemeralTint, setEphemeralTint] = useState("Rose Petal");

  const [powersurgeColor, setPowersurgeColor] = useState<"red" | "black" | "silver">("red");
  const [powersurgeSpolier, setPowersurgeSpoiler] = useState(true);

  const [mastermailFilter, setMastermailFilter] = useState("all");
  const [mastermailSearch, setMastermailSearch] = useState("");

  const [warpspeedActiveRoute, setWarpspeedActiveRoute] = useState("Singapore-Dhaka");
  const [warpspeedPingCount, setWarpspeedPingCount] = useState(1);

  const [cloudwatchThreshold, setCloudwatchThreshold] = useState(85);
  const [cloudwatchStatus, setCloudwatchStatus] = useState<"normal" | "warning">("normal");

  const [copiedLink, setCopiedLink] = useState(false);

  // Auto scroll to top on change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [projectId]);

  const copyShareLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="min-h-screen bg-theme-bg text-theme-text font-sans selection:bg-theme-accent selection:text-theme-bg animate-in fade-in duration-300">
      {/* Detail View Header Navbar */}
      <header className="sticky top-0 z-40 bg-theme-bg/80 backdrop-blur-md border-b border-theme-border theme-transition">
        <div className="max-w-[1600px] mx-auto px-[clamp(24px,4vw,48px)] w-full h-20 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 btn-glass-secondary rounded-[4px] text-xs font-semibold group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transform group-hover:-translate-x-1 transition-transform" />
            <span>Back to Projects</span>
          </button>

          <div className="hidden sm:flex items-center gap-2 bg-theme-surf py-1.5 px-3 rounded-[4px] text-xs select-none border border-theme-border font-mono text-theme-muted">
            <span className="w-2 h-2 rounded bg-theme-accent animate-pulse"></span>
            <span>REPOSITORY MODE: ACTIVE</span>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={copyShareLink}
              className="p-2 border border-theme-border rounded-[4px] hover:border-theme-accent hover:text-theme-accent transition-colors"
              title="Copy shareable path"
            >
              <Share2 className="w-4 h-4" />
            </button>
            {copiedLink && (
              <span className="absolute top-[88px] right-6 bg-theme-accent text-theme-bg text-[10px] uppercase font-mono tracking-wider font-bold py-1 px-2.5 rounded-[4px] shadow-lg animate-in fade-in slide-in-from-top-1">
                Link Copied!
              </span>
            )}
            <a 
              href={project.liveUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 btn-glass-secondary px-4 py-2 rounded-[4px] text-xs font-bold"
            >
              <span>Live Website</span>
              <ExternalLink className="w-3 h-3 text-theme-text group-hover:text-theme-bg" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-[1600px] mx-auto px-[clamp(24px,4vw,48px)] w-full py-12 md:py-16 space-y-16">
        
        {/* Project Hero Title Card */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-theme-border pb-12">
          <div className="md:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 font-mono text-[10px] text-theme-accent uppercase tracking-widest font-semibold bg-theme-accent/5 px-3 py-1 rounded">
              <Sparkles className="w-3 h-3" />
              {project.category}
            </div>
            <h1 className="font-display font-black text-4xl md:text-7xl text-theme-text tracking-tight leading-none">
              {project.name}
            </h1>
            <p className="text-xl text-theme-muted max-w-2xl font-light">
              {project.tagline}
            </p>
          </div>
          
          {/* Timeline & Metadata Panel */}
          <div className="md:col-span-4 bg-theme-card border border-theme-border p-6 rounded-xl space-y-4 font-mono text-xs text-theme-muted">
            <div className="flex justify-between items-center pb-2 border-b border-theme-border/50">
              <span className="flex items-center gap-1.5"><Building className="w-3.5 h-3.5" /> CLIENT</span>
              <span className="font-semibold text-theme-text text-right">{project.client || "baylight studio Partners"}</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-theme-border/50">
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> DURATION</span>
              <span className="font-semibold text-theme-text text-right">{project.duration || "4 Weeks"}</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-theme-border/50">
              <span className="flex items-center gap-1.5"><Layers className="w-3.5 h-3.5" /> STATUS</span>
              <span className="font-semibold text-theme-accent text-right">DEPLOYED & LIVE</span>
            </div>
          </div>
        </div>

        {/* Hero Banner Image */}
        <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden border border-theme-border bg-theme-surf">
          <img 
            src={project.image} 
            alt={project.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-theme-bg/90 via-transparent to-transparent"></div>
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 bg-theme-bg/90 backdrop-blur-sm border border-theme-border py-2 px-4 rounded font-mono text-[10px] text-theme-muted">
            FIGURE 1.0 // OFFICIAL WORK DISPLAY
          </div>
        </div>

        {/* Detailed Overview Block Box */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-4">
          <div className="md:col-span-4 space-y-6">
            <h3 className="font-display font-semibold text-xl md:text-2xl text-theme-text">
              Core Services Included
            </h3>
            <div className="flex flex-col gap-2 font-mono text-xs text-theme-muted">
              {(project.services || ["UI/UX Engineering", "Interactive Web Renders", "Conversion Uplift"]).map((srv, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-theme-surf p-3 rounded border border-theme-border/50">
                  <span className="w-1.5 h-1.5 bg-theme-accent rounded"></span>
                  <span>{srv}</span>
                </div>
              ))}
            </div>

            <h3 className="font-display font-semibold text-xl md:text-2xl text-theme-text pt-4">
              Integrated Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {(project.techStack || ["React", "TypeScript", "Tailwind CSS"]).map((tech, idx) => (
                <span 
                  key={idx} 
                  className="bg-theme-card border border-theme-border px-3 py-1.5 rounded font-mono text-[10px] text-theme-text hover:border-theme-accent transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="md:col-span-8 space-y-8">
            <div className="space-y-4">
              <span className="font-mono text-[10px] text-theme-accent uppercase tracking-widest font-semibold">
                Project Journey & Scope
              </span>
              <h2 className="font-display font-bold text-2xl md:text-4xl text-theme-text">
                Rethinking user interaction metrics.
              </h2>
              <p className="text-theme-muted text-base leading-relaxed">
                {project.detailedOverview}
              </p>
            </div>

            {/* Split Grid Challenge vs Solution */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="bg-theme-surf border border-theme-border/60 p-6 rounded-xl space-y-3">
                <div className="font-mono text-[10px] text-red-400 font-bold uppercase tracking-wider">
                  ⚠️ THE CHALLENGE
                </div>
                <p className="text-xs text-theme-muted leading-relaxed">
                  {project.challenge || "Heavy operational lag and outdated core design systems restricted optimal navigation rates and degraded customer acquisition cycles."}
                </p>
              </div>

              <div className="bg-theme-accent/5 border border-theme-accent/20 p-6 rounded-xl space-y-3">
                <div className="font-mono text-[10px] text-theme-accent font-bold uppercase tracking-wider">
                  🔑 OUR APPROACH
                </div>
                <p className="text-xs text-theme-muted leading-relaxed">
                  {project.solution || "We constructed responsive, low-overhead container frameworks using state-of-the-art vector interfaces to secure responsive high-conversion outcomes."}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Metrics Section */}
        <div className="bg-theme-card border border-theme-border rounded-2xl p-6 md:p-10 text-center space-y-6">
          <div className="max-w-lg mx-auto">
            <span className="font-mono text-[9px] text-theme-accent uppercase tracking-widest font-semibold bg-theme-accent/15 px-3 py-1 rounded">
              VERIFIABLE METRIC FEEDBACKS
            </span>
            <h3 className="font-display font-semibold text-2xl text-theme-text mt-3">
              Performance Indicators Confirmed
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {(project.results || [
              "Page download speed optimized by 40%", 
              "99.9% interactive uptime confirmed", 
              "Average interaction duration increased by 80%"
            ]).map((metric, idx) => {
              // Parse out numeric text if any
              const parts = metric.split(" ");
              const amount = parts[0] || "+";
              const label = parts.slice(1).join(" ");

              return (
                <div key={idx} className="bg-theme-bg border border-theme-border p-6 rounded-xl text-center space-y-2 group hover:border-theme-accent transition-colors duration-300">
                  <div className="text-theme-accent font-display text-3xl font-black tracking-tight group-hover:scale-105 transition-transform">
                    {amount}
                  </div>
                  <p className="font-sans text-xs text-theme-muted leading-relaxed uppercase tracking-wider">
                    {label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* INTERACTIVE SIMULATOR SYSTEM SECTION */}
        <div className="bg-theme-bg border border-theme-border rounded-2xl overflow-hidden shadow-2xl">
          {/* Simulator Bar */}
          <div className="bg-theme-card border-b border-theme-border px-6 py-4 flex flex-wrap gap-4 items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
              </span>
              <span className="font-mono text-xs text-theme-muted border-l border-theme-border pl-3">
                workspace://live_sandbox_simulator
              </span>
            </div>

            <div className="flex items-center gap-2 bg-theme-bg px-3 py-1 border border-theme-border rounded text-[11px] font-mono text-theme-accent">
              <Monitor className="w-3.5 h-3.5" />
              <span>INTERACTIVE ACTIVE PORTAL</span>
            </div>
          </div>

          {/* Simulator Workspace Screen */}
          <div className="p-6 md:p-8 bg-theme-surf min-h-[300px] flex items-center justify-center">
            
            {/* BOLTSHIFT INTERACTIVE */}
            {project.id === "boltshift" && (
              <div className="w-full max-w-xl bg-theme-card border border-theme-border rounded-xl p-6 space-y-6 font-sans">
                <div className="flex items-center justify-between border-b border-theme-border pb-4">
                  <div>
                    <h4 className="font-display font-medium text-theme-text text-base">EV Battery Controller Simulator</h4>
                    <p className="text-[10px] text-theme-muted font-mono uppercase">Boltshift Fleet OS 1.2</p>
                  </div>
                  <span className="inline-flex items-center gap-1 bg-green-500/10 text-green-400 font-mono text-[9px] font-semibold py-1 px-2.5 rounded border border-green-500/20">
                    <span className="w-1.5 h-1.5 rounded bg-green-500 animate-ping"></span>
                    ONLINE & ACTIVE
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-theme-bg p-4 rounded border border-theme-border space-y-1">
                    <span className="font-mono text-[9px] text-theme-muted">CURRENT LOAD LEVEL</span>
                    <div className="text-xl font-bold text-theme-text font-mono">{boltshiftBattery}% Capacity</div>
                    <div className="w-full bg-theme-border h-1.5 rounded overflow-hidden mt-2">
                      <div className="bg-theme-accent h-full transition-all" style={{ width: `${boltshiftBattery}%` }}></div>
                    </div>
                  </div>

                  <div className="bg-theme-bg p-4 rounded border border-theme-border space-y-1">
                    <span className="font-mono text-[9px] text-theme-muted">ENGINE MODULATION</span>
                    <div className="text-xs font-semibold text-theme-accent capitalize mt-1 flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5" />
                      {boltshiftEngineMode} Drive Actuated
                    </div>
                  </div>
                </div>

                {/* Micro controller inputs */}
                <div className="space-y-3">
                  <div>
                    <label className="text-[10px] font-mono text-theme-muted flex justify-between">
                      <span>LOAD LIMIT VOLTAGE COUPLER</span>
                      <span>{boltshiftBattery}%</span>
                    </label>
                    <input 
                      type="range"
                      min="20"
                      max="100"
                      value={boltshiftBattery}
                      onChange={(e) => setBoltshiftBattery(Number(e.target.value))}
                      className="w-full h-1 bg-theme-border rounded-lg appearance-none cursor-pointer accent-theme-accent"
                    />
                  </div>

                  <div className="flex gap-2">
                    {(["comfort", "sport", "eco"] as const).map((mode) => (
                      <button
                        key={mode}
                        onClick={() => setBoltshiftEngineMode(mode)}
                        className={`flex-1 py-2 text-[10px] font-mono border rounded uppercase transition-colors ${
                          boltshiftEngineMode === mode 
                            ? "bg-theme-accent text-theme-bg border-theme-accent font-bold" 
                            : "bg-theme-surf/30 dark:bg-theme-surf/15 light:bg-[#ffffffe0]/90 backdrop-blur-md border border-theme-border/20 text-theme-muted hover:text-theme-text shadow-sm"
                        }`}
                      >
                        {mode} Mode
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* EPHEMERAL INTERACTIVE */}
            {project.id === "ephemeral" && (
              <div className="w-full max-w-xl bg-theme-card border border-theme-border rounded-xl p-6 space-y-6">
                <div className="flex items-center justify-between border-b border-theme-border pb-4">
                  <div>
                    <h4 className="font-display font-medium text-theme-text text-base">Bespoke Eco-Packaging Tint Builder</h4>
                    <p className="text-[10px] text-theme-muted font-mono uppercase">Ephemeral Customizer Client</p>
                  </div>
                  <Palette className="w-4 h-4 text-theme-accent" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-5 flex flex-col items-center">
                    {/* Skincare Bottle Simulator */}
                    <div 
                      className="w-24 h-44 rounded-t-3xl rounded-b-xl border border-theme-border shadow-2xl relative transition-colors duration-500 overflow-hidden"
                      style={{ backgroundColor: ephemeralBg }}
                    >
                      {/* Bottle Cap */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-neutral-800 rounded-t-md border-b border-theme-border"></div>
                      
                      {/* Brand Label design */}
                      <div className="absolute bottom-6 left-2 right-2 bg-white/90 backdrop-blur-xs p-2 rounded text-center border border-neutral-200/50">
                        <p className="font-display text-[9px] tracking-widest text-neutral-800 font-bold">EPHEMERAL.</p>
                        <p className="font-mono text-[6px] text-neutral-500 uppercase tracking-widest mt-0.5">{ephemeralTint}</p>
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-7 space-y-3 font-mono text-xs">
                    <span className="text-theme-muted text-[9px] uppercase tracking-wider block">SELECT FORMULA base</span>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { name: "Rose Petal", color: "#F5EBE6" },
                        { name: "Sage Extract", color: "#E1EAE3" },
                        { name: "Oceanic Gray", color: "#E0E3E6" },
                        { name: "Deep Ochre", color: "#ECE6DC" },
                      ].map((item) => (
                        <button
                          key={item.name}
                          onClick={() => {
                            setEphemeralBg(item.color);
                            setEphemeralTint(item.name);
                          }}
                          className={`p-2 rounded text-[10px] text-left transition-colors border ${
                            ephemeralTint === item.name 
                              ? "border-theme-accent bg-theme-accent/5 text-theme-text font-bold" 
                              : "bg-theme-surf/30 dark:bg-theme-surf/15 light:bg-[#ffffffe0]/90 backdrop-blur-md border border-theme-border/20 text-theme-muted"
                          }`}
                        >
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full border border-neutral-300" style={{ backgroundColor: item.color }}></span>
                            <span>{item.name}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                    <div className="bg-theme-bg p-3 rounded text-[10px] text-theme-muted leading-relaxed">
                      Organic, eco-packaging uses recycled material filters to retain 98% of natural extract freshness.
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* POWERSURGE INTERACTIVE */}
            {project.id === "powersurge" && (
              <div className="w-full max-w-xl bg-theme-card border border-theme-border rounded-xl p-6 space-y-6">
                <div className="flex items-center justify-between border-b border-theme-border pb-4">
                  <div>
                    <h4 className="font-display font-medium text-theme-text text-base">360° Custom Vehicle Visualizer Sandbox</h4>
                    <p className="text-[10px] text-theme-muted font-mono uppercase">Powersurge Configurator UI v4</p>
                  </div>
                  <Zap className="w-4 h-4 text-theme-accent" />
                </div>

                <div className="relative h-44 bg-theme-bg rounded-lg border border-theme-border flex items-center justify-center overflow-hidden">
                  {/* Decorative mesh grid back */}
                  <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>

                  {/* Car Outline mock graphics container */}
                  <div className="relative text-center">
                    <div className="flex justify-center items-end gap-2">
                      <div className={`w-36 h-20 border rounded-t-full relative transition-colors duration-550 ${
                        powersurgeColor === "red" ? "bg-red-500/10 border-red-500" :
                        powersurgeColor === "black" ? "bg-neutral-800/80 border-neutral-700" :
                        "bg-neutral-300/20 border-neutral-400"
                      }`}>
                        {/* Wheels mock representation */}
                        <div className="absolute -bottom-3 left-6 w-7 h-7 bg-neutral-900 border border-theme-accent rounded-full flex items-center justify-center animate-spin duration-3000">
                          <div className="w-3.5 h-3.5 bg-neutral-700 rounded-full flex items-center justify-center">
                            <span className="w-1.5 h-1.5 bg-neutral-900 rounded-full"></span>
                          </div>
                        </div>
                        <div className="absolute -bottom-3 right-6 w-7 h-7 bg-neutral-900 border border-theme-accent rounded-full flex items-center justify-center animate-spin duration-3000">
                          <div className="w-3.5 h-3.5 bg-neutral-700 rounded-full flex items-center justify-center">
                            <span className="w-1.5 h-1.5 bg-neutral-900 rounded-full"></span>
                          </div>
                        </div>
                        {/* Spoiler element */}
                        {powersurgeSpolier && (
                          <div className="absolute -top-3 -left-3 w-6 h-5 border-t-3 border-l-3 border-neutral-600 rounded-tl-lg"></div>
                        )}
                      </div>
                    </div>
                    <div className="h-[1px] w-48 bg-theme-border mx-auto mt-4"></div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-between items-start font-mono text-xs">
                  <div className="space-y-1.5">
                    <span className="text-[10px] text-theme-muted uppercase block">CHASSIS BODYPAINT</span>
                    <div className="flex gap-2">
                      {(["red", "black", "silver"] as const).map((col) => (
                        <button
                          key={col}
                          onClick={() => setPowersurgeColor(col)}
                          className={`w-6 h-6 rounded-full border transition-all ${
                            powersurgeColor === col ? "ring-2 ring-theme-accent scale-105" : "opacity-75"
                          }`}
                          style={{ 
                            backgroundColor: col === "red" ? "#EF4444" : col === "black" ? "#171717" : "#A3A3A3"
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] text-theme-muted uppercase block">AERODYNAMIC TRIM</span>
                    <label className="flex items-center gap-2 cursor-pointer mt-1">
                      <input 
                        type="checkbox"
                        checked={powersurgeSpolier}
                        onChange={(e) => setPowersurgeSpoiler(e.target.checked)}
                        className="rounded border-theme-border text-theme-accent focus:ring-0 w-3.5 h-3.5 accent-theme-accent bg-theme-bg"
                      />
                      <span className="text-[11px] text-theme-text select-none">ACTUATOR CARBON WING</span>
                    </label>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] text-theme-muted uppercase block">ESTIMATED MSRP</span>
                    <span className="text-sm font-bold text-theme-text">$142,500 USD</span>
                  </div>
                </div>
              </div>
            )}

            {/* MASTERMAIL INTERACTIVE */}
            {project.id === "mastermail" && (
              <div className="w-full max-w-xl bg-theme-card border border-theme-border rounded-xl p-6 space-y-4 font-sans text-xs">
                <div className="flex items-center justify-between border-b border-theme-border pb-3">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-theme-accent" />
                    <div>
                      <h4 className="font-display font-medium text-theme-text text-sm">Distraction-Free Inbox Workspace</h4>
                      <p className="text-[9px] text-theme-muted font-mono uppercase">Mastermail Minimal-Agent</p>
                    </div>
                  </div>
                  <span className="bg-theme-surf px-2 py-0.5 border border-theme-border text-[9px] text-theme-muted font-mono rounded">
                    FILTER: {mastermailFilter.toUpperCase()}
                  </span>
                </div>

                <div className="flex items-center gap-2 bg-theme-bg border border-theme-border rounded-lg px-3 py-2">
                  <input 
                    type="text"
                    value={mastermailSearch}
                    onChange={(e) => setMastermailSearch(e.target.value)}
                    placeholder="Search master mail database with latency-free indexes..."
                    className="bg-transparent focus:outline-hidden w-full text-xs text-theme-text placeholder:text-theme-muted/60"
                  />
                </div>

                {/* Simulated message list */}
                <div className="space-y-2 max-h-[140px] overflow-y-auto">
                  {[
                    { id: "m1", sender: "Jamil Hossain", sub: "Launch Timeline confirmed", cat: "primary", d: "Instantly" },
                    { id: "m2", sender: "Webmaster bot", sub: "Cleaned cache storage databases", cat: "system", d: "1h ago" },
                    { id: "m3", sender: "Designboard.org", sub: "You were nominated for Portfolio of Year", cat: "social", d: "2h ago" },
                    { id: "m4", sender: "Stripe Developer", sub: "Payment gateway initialized successfully", cat: "primary", d: "1d ago" },
                  ]
                    .filter(m => mastermailFilter === "all" || m.cat === mastermailFilter)
                    .filter(m => m.sender.toLowerCase().includes(mastermailSearch.toLowerCase()) || m.sub.toLowerCase().includes(mastermailSearch.toLowerCase()))
                    .map(m => (
                      <div key={m.id} className="bg-theme-bg p-2.5 rounded border border-theme-border flex justify-between items-center hover:border-theme-accent transition-colors">
                        <div>
                          <div className="font-semibold text-theme-text text-[11px]">{m.sender}</div>
                          <div className="text-[10px] text-theme-muted">{m.sub}</div>
                        </div>
                        <div className="text-right font-mono text-[9px] text-theme-muted space-y-1">
                          <div>{m.d}</div>
                          <span className={`inline-block px-1.5 py-0.2 mr-1 rounded-[3px] text-[8px] uppercase tracking-wider ${
                            m.cat === 'primary' ? 'bg-theme-accent/15 text-theme-accent font-semibold' : 'bg-theme-surf text-theme-muted border border-theme-border/50'
                          }`}>
                            {m.cat}
                          </span>
                        </div>
                      </div>
                    ))}
                </div>

                {/* Filter selectors */}
                <div className="flex gap-1.5">
                  {(["all", "primary", "system", "social"] as const).map(f => (
                    <button
                      key={f}
                      onClick={() => setMastermailFilter(f)}
                      className={`flex-1 py-1.5 text-[9px] font-mono rounded uppercase border transition-colors ${
                        mastermailFilter === f 
                          ? "bg-theme-accent text-theme-bg border-theme-accent font-bold" 
                          : "bg-theme-surf/30 dark:bg-theme-surf/15 light:bg-[#ffffffe0]/90 backdrop-blur-md border border-theme-border/20 text-theme-muted hover:text-theme-text shadow-sm"
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* WARPSPEED INTERACTIVE */}
            {project.id === "warpspeed" && (
              <div className="w-full max-w-xl bg-theme-card border border-theme-border rounded-xl p-6 space-y-4 font-sans text-xs">
                <div className="flex items-center justify-between border-b border-theme-border pb-3">
                  <div className="flex items-center gap-2">
                    <Compass className="w-4 h-4 text-theme-accent" />
                    <div>
                      <h4 className="font-display font-medium text-theme-text text-sm">Real-time Oceanic & Air Route Telemetries</h4>
                      <p className="text-[9px] text-theme-muted font-mono uppercase">Warpspeed Logistics Engine</p>
                    </div>
                  </div>
                  <span className="bg-theme-surf px-2 py-0.5 border border-theme-border text-[9px] text-theme-muted font-mono rounded">
                    PING LOGS ({warpspeedPingCount})
                  </span>
                </div>

                <div className="bg-theme-bg p-4 rounded-lg border border-theme-border relative min-h-[120px] overflow-hidden flex flex-col justify-between">
                  <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px]"></div>

                  {/* Route lines diagram */}
                  <div className="flex justify-between items-center relative z-10 py-4 px-6">
                    <div className="text-center">
                      <div className="w-7 h-7 bg-theme-accent text-theme-bg rounded-full flex items-center justify-center font-bold text-[10px]">
                        A
                      </div>
                      <div className="font-mono text-[9px] text-theme-text mt-1">Origin</div>
                    </div>

                    {/* Animated moving plane/ship */}
                    <div className="flex-1 relative mx-4">
                      <div className="h-[2px] bg-theme-border w-full"></div>
                      <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-theme-accent rounded-full animate-ping duration-1500" style={{ left: "45%" }}></div>
                      <span className="absolute top-1/2 -translate-y-1/2 text-[9px] transform translate-y-3 font-mono text-theme-accent w-full text-center">
                        Active Route: {warpspeedActiveRoute}
                      </span>
                    </div>

                    <div className="text-center">
                      <div className="w-7 h-7 bg-theme-card border border-theme-border text-theme-text rounded-full flex items-center justify-center font-mono text-[10px]">
                        B
                      </div>
                      <div className="font-mono text-[9px] text-theme-text mt-1">Destination</div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-[10px] font-mono text-theme-muted border-t border-theme-border/50 pt-2 relative z-10">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3 h-3 text-theme-accent" />
                      COORDINATES: 23.8103° N, 90.4125° E
                    </span>
                    <span>CARGO LOAD: STATUS SECURE</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  {[
                    "Singapore-Dhaka",
                    "Tokyo-London",
                    "New York-Mumbai",
                  ].map((route) => (
                    <button
                      key={route}
                      onClick={() => {
                        setWarpspeedActiveRoute(route);
                        setWarpspeedPingCount(prev => prev + 1);
                      }}
                      className={`flex-1 py-1.5 text-[10px] font-mono rounded border transition-colors ${
                        warpspeedActiveRoute === route 
                          ? "bg-theme-accent text-theme-bg border-theme-accent font-bold" 
                          : "bg-theme-surf/30 dark:bg-theme-surf/15 light:bg-[#ffffffe0]/90 backdrop-blur-md border border-theme-border/20 text-theme-muted hover:text-theme-text shadow-sm"
                      }`}
                    >
                      {route}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* CLOUDWATCH INTERACTIVE */}
            {project.id === "cloudwatch" && (
              <div className="w-full max-w-xl bg-theme-card border border-theme-border rounded-xl p-6 space-y-6">
                <div className="flex items-center justify-between border-b border-theme-border pb-4">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-theme-accent" />
                    <div>
                      <h4 className="font-display font-medium text-theme-text text-sm">Real-time Cluster Health Console</h4>
                      <p className="text-[9px] text-theme-muted font-mono uppercase">Cloudwatch telemetry suite</p>
                    </div>
                  </div>
                  <span className={`px-2.5 py-0.5 rounded text-[8px] font-mono font-bold border uppercase tracking-wider ${
                    cloudwatchStatus === "warning" 
                      ? "bg-red-500/15 text-red-400 border-red-500/30 animate-pulse" 
                      : "bg-theme-accent/15 text-theme-accent border-theme-accent/30"
                  }`}>
                    STATUS: {cloudwatchStatus.toUpperCase()}
                  </span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-theme-bg p-3.5 rounded border border-theme-border space-y-1 text-center">
                    <span className="font-mono text-[8px] text-theme-muted uppercase block">API LATENCY</span>
                    <span className="font-mono text-base font-bold text-theme-text">42ms</span>
                  </div>
                  <div className="bg-theme-bg p-3.5 rounded border border-theme-border space-y-1 text-center">
                    <span className="font-mono text-[8px] text-theme-muted uppercase block">NODE STACK</span>
                    <span className="font-mono text-base font-bold text-theme-text">6 / 6 Active</span>
                  </div>
                  <div className="bg-theme-bg p-3.5 rounded border border-theme-border space-y-1 text-center">
                    <span className="font-mono text-[8px] text-theme-muted uppercase block">CPU UTIL</span>
                    <span className={`font-mono text-base font-bold ${cloudwatchStatus === 'warning' ? 'text-red-400' : 'text-theme-accent'}`}>
                      {cloudwatchThreshold > 80 ? "84%" : "48%"}
                    </span>
                  </div>
                  <div className="bg-theme-bg p-3.5 rounded border border-theme-border space-y-1 text-center">
                    <span className="font-mono text-[8px] text-theme-muted uppercase block">SYSTEM MEM</span>
                    <span className="font-mono text-base font-bold text-theme-text">4.2 GB / 8.0</span>
                  </div>
                </div>

                {/* Slider controller */}
                <div className="space-y-3 font-mono text-xs">
                  <div>
                    <label className="text-[10px] text-theme-muted flex justify-between">
                      <span>SIMULATE SYSTEM THROTTLING THRESHOLD</span>
                      <span>{cloudwatchThreshold}% CPU</span>
                    </label>
                    <input 
                      type="range"
                      min="40"
                      max="100"
                      value={cloudwatchThreshold}
                      onChange={(e) => {
                        const val = Number(e.target.value);
                        setCloudwatchThreshold(val);
                        if (val > 80) {
                          setCloudwatchStatus("warning");
                        } else {
                          setCloudwatchStatus("normal");
                        }
                      }}
                      className="w-full h-1 bg-theme-border rounded appearance-none cursor-pointer accent-theme-accent"
                    />
                  </div>
                  <div className="bg-theme-bg p-3 rounded text-[10px] text-theme-muted leading-relaxed">
                    {cloudwatchStatus === "warning" 
                      ? "⚠️ THRESHOLD BREACHED: Automatic edge scale replica-cluster invoked due to threshold levels." 
                      : "✓ SYSTEM OPTIMAL: Cluster running safely below automatic scale deployment thresholds."
                    }
                  </div>
                </div>
              </div>
            )}

          </div>

          <div className="bg-theme-card border-t border-theme-border px-6 py-4 flex items-center justify-between font-mono text-[10px] text-theme-muted select-none">
            <span>READY TO COMMIT VERIFICATION: baylight studio v1.4</span>
            <span className="flex items-center gap-1.5"><Sliders className="w-3 h-3" /> PULL/PUSH IN SYNC</span>
          </div>
        </div>

        {/* Challenge Solving Detailed Review Gallery */}
        <div className="space-y-6">
          <h3 className="font-display font-semibold text-2xl text-theme-text">
            Implementation Details Screenshots
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(project.gallery || [
              "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop"
            ]).map((img, idx) => (
              <div key={idx} className="aspect-[16/10] bg-theme-card border border-theme-border rounded-xl overflow-hidden hover:border-theme-accent transition-all duration-300 relative group">
                <img 
                  src={img} 
                  alt="Screenshot of UI implementation"
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-[1.01]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-theme-bg/10 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute top-3 left-3 bg-theme-bg/90 backdrop-blur-sm border border-theme-border py-1 px-2.5 rounded font-mono text-[9px] uppercase tracking-wider text-theme-muted">
                  STAGE {idx + 1}.0 // PRODUCTION BLUEPRINT
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Contact Promo Banner Context */}
        <div className="relative overflow-hidden bg-theme-accent text-theme-bg p-8 md:p-12 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 border border-theme-border/50">
          <div className="space-y-2 max-w-lg">
            <span className="font-mono text-[9px] tracking-widest uppercase bg-theme-bg/15 py-1 px-3.5 rounded font-bold inline-block text-theme-bg border border-theme-bg/25">
              PARTNERSHIP OPPORTUNITY
            </span>
            <h3 className="font-display font-black text-2xl md:text-4xl leading-tight">
              Would you like to build something similar?
            </h3>
            <p className="text-sm font-medium opacity-85 leading-relaxed">
              We translate bold visions into gorgeous digital experiences. Connect with Jamil to receive your customized interactive interface design layout within 24 hours.
            </p>
          </div>
          <a 
            href="#contact"
            onClick={(e) => {
              onBack();
              // Smooth scroll to contact
              setTimeout(() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }, 100);
            }}
            className="flex-shrink-0 btn-glass-secondary text-theme-text font-bold text-xs py-3.5 px-6 rounded-xl text-center uppercase tracking-wider animate-pulse"
          >
            Launch Project Consultation
          </a>
        </div>

        {/* Lower Next/Prev Navigation Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-12 border-t border-theme-border">
          <button
            onClick={() => onSelectProject(prevProject.id)}
            className="group p-5 bg-theme-card border border-theme-border rounded-xl text-left hover:border-theme-accent transition-all duration-300 space-y-1 flex justify-between items-center"
          >
            <div>
              <span className="font-mono text-[9px] text-theme-muted uppercase tracking-widest flex items-center gap-1">
                <ChevronLeft className="w-3 h-3" /> Previous project
              </span>
              <h4 className="font-display font-semibold text-base text-theme-text group-hover:text-theme-accent transition-colors mt-1">
                {prevProject.name}
              </h4>
            </div>
            <img 
              src={prevProject.image} 
              alt={prevProject.name} 
              className="w-12 h-12 rounded object-cover grayscale group-hover:grayscale-0 border border-theme-border transition-all"
              referrerPolicy="no-referrer"
            />
          </button>

          <button
            onClick={() => onSelectProject(nextProject.id)}
            className="group p-5 bg-theme-card border border-theme-border rounded-xl text-right hover:border-theme-accent transition-all duration-300 space-y-1 flex justify-between items-center"
          >
            <img 
              src={nextProject.image} 
              alt={nextProject.name} 
              className="w-12 h-12 rounded object-cover grayscale group-hover:grayscale-0 border border-theme-border transition-all"
              referrerPolicy="no-referrer"
            />
            <div>
              <span className="font-mono text-[9px] text-theme-muted uppercase tracking-widest flex items-center gap-1 justify-end">
                Next project <ChevronRight className="w-3 h-3" />
              </span>
              <h4 className="font-display font-semibold text-base text-theme-text group-hover:text-theme-accent transition-colors mt-1">
                {nextProject.name}
              </h4>
            </div>
          </button>
        </div>

      </main>
    </div>
  );
}

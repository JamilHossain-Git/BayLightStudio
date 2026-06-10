import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { team } from "../data";

export default function TeamFaces() {
  const [activeBio, setActiveBio] = useState<string | null>(null);

  const teamBios: { [key: string]: string } = {
    lauren: "Directs the overarching creative vision, brand logic, and unified design systems.",
    christopher: "Crafts responsive layouts, interactive high-fidelity prototypes, and design system infrastructures.",
    sadat: "Directs corporate print architectures, luxury magazine spreads, and physical brand identity layouts.",
    sarah: "Shapes immersive digital cinematics, responsive audio-synced video editing, and dynamic motion graphics."
  };

  return (
    <section className="bg-theme-bg py-24 border-b border-theme-border theme-transition" id="team">
      <div className="max-w-[1600px] mx-auto px-[clamp(24px,4vw,48px)] w-full">
        {/* Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-3 font-mono text-[11px] text-theme-muted uppercase tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-theme-accent rounded-full animate-pulse"></span>
            The faces behind
          </div>
          <div className="lg:col-span-9 space-y-4">
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-theme-text leading-none">
              The faces behind the projects.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <p className="text-theme-muted text-sm leading-relaxed pr-4">
                We believe exceptional, sustainable software comes from intimate collaboration. That's why our core engineers, developers, and visual designers operate as one synchronous unit to shape high-fidelity products.
              </p>
              <div className="border-l border-theme-border pl-6 flex flex-col justify-between">
                <p className="text-xs text-theme-muted">
                  Interested in contributing your unique technical skills? We are always on the lookout for elite visual artists and Node architects.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 font-sans font-bold text-xs text-theme-text group mt-4 hover:text-theme-accent transition-colors"
                >
                  Apply to join our studio <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-theme-text" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Faces Visual Matrix Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {team.map((member) => {
            const isSelected = activeBio === member.id;
            return (
              <div
                key={member.id}
                className="group flex flex-col bg-theme-surf rounded-2xl border border-theme-border overflow-hidden shadow-sm hover:border-theme-accent hover:shadow-md transition-all duration-300"
                onMouseEnter={() => setActiveBio(member.id)}
                onMouseLeave={() => setActiveBio(null)}
              >
                {/* Photo frame */}
                <div className="relative aspect-[3/4] bg-theme-surf overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale transition-transform duration-700 ease-out group-hover:scale-102 group-hover:grayscale-0"
                  />

                  {/* Absolute Glass overlay details for member info */}
                  <div className="absolute inset-x-4 bottom-4 bg-theme-card/90 backdrop-blur-sm p-4 rounded-xl border border-theme-border text-theme-text flex flex-col justify-between transition-all duration-300 group-hover:bg-theme-card">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-mono text-[8px] text-theme-muted tracking-wider uppercase leading-none mb-1">
                          {member.role.toUpperCase()}
                        </p>
                        <h4 className="font-display font-medium text-sm leading-tight text-theme-text">
                          {member.name}
                        </h4>
                      </div>
                      <span className="font-mono text-[9px] text-theme-muted border border-theme-border px-1.5 py-0.5 rounded leading-none">
                        {member.initials}
                      </span>
                    </div>

                    {/* Collapsible hover details inside card */}
                    <div className={`mt-3 pt-3 border-t border-theme-border text-[10px] text-theme-muted leading-normal transition-all duration-300 ${
                      isSelected ? "block" : "hidden"
                    }`}>
                      <p>{teamBios[member.id] || "Active studio team member."}</p>
                    </div>
                  </div>

                  {/* Top Right Active Badge */}
                  <div className="absolute top-3 right-3 bg-theme-surf/90 backdrop-blur-sm px-2.5 py-0.5 rounded border border-theme-border flex items-center gap-1 font-mono text-[8px] font-semibold text-theme-text tracking-wider shadow">
                    <span className="w-1 h-1 rounded bg-theme-accent animate-pulse"></span>
                    ACTIVE
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

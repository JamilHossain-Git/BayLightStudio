import { Star, Eclipse, Database, Layers, Feather } from "lucide-react";
import { motion } from "motion/react";

export default function Clients() {
  const clientsList = [
    { name: "Lujo", icon: <Eclipse className="w-5 h-5 text-theme-accent" />, desc: "LUJO ARCH" },
    { name: "Warpspeed", icon: <Database className="w-5 h-5 text-theme-accent" />, desc: "WARPSPEED" },
    { name: "Floral", icon: <Feather className="w-5 h-5 text-theme-accent" />, desc: "BOTANICA" },
    { name: "Looo", icon: <Eclipse className="w-5 h-5 text-theme-accent" />, desc: "LOOO ENG" },
    { name: "BoxGrid", icon: <Layers className="w-5 h-5 text-theme-accent" />, desc: "NUCLEUS" },
    { name: "Nordic", icon: <Star className="w-5 h-5 text-theme-accent" />, desc: "NORDIC LTD" }
  ];

  // Repeat the list of clients to have enough items for a seamless high-density loop
  const repeatedClients = [...clientsList, ...clientsList, ...clientsList, ...clientsList];

  return (
    <section className="bg-theme-bg py-16 border-b border-theme-border theme-transition" id="studio">
      <div className="max-w-[1600px] mx-auto px-[clamp(24px,4vw,48px)] w-full">
        {/* Caption Row */}
        <div className="flex justify-between items-center mb-8 font-mono text-[14px] text-theme-muted uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-theme-accent rounded-full animate-pulse"></span>
            Our clients
          </div>
          <div>(2016-258)</div>
        </div>

        {/* Outer marquee viewport container with fade gradients */}
        <div className="relative w-full overflow-hidden border border-theme-border rounded-xl bg-[#0d0d0d] py-6 select-none group/marquee">
          {/* Ambient Fade Off Masks (Left & Right) to fade the elements out elegantly near boundary edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#0d0d0d] via-[#0d0d0d]/80 to-transparent z-10 pointer-events-none"></div>

          {/* Marquee Track */}
          <div className="flex w-full">
            <motion.div
              className="flex gap-4 md:gap-6 flex-nowrap"
              animate={{
                x: ["0%", "-50%"]
              }}
              transition={{
                ease: "linear",
                duration: 30,
                repeat: Infinity,
              }}
              style={{ display: "flex" }}
            >
              {repeatedClients.map((client, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4, borderColor: "var(--theme-accent)", backgroundColor: "var(--theme-surf)" }}
                  className="flex flex-col items-start justify-center py-6 px-10 md:py-8 md:px-12 bg-theme-card border border-theme-border rounded-lg transition-all duration-300 group/card relative flex-shrink-0 min-w-[200px] md:min-w-[240px] cursor-pointer"
                >
                  <div className="flex items-center gap-2.5 mb-2 transition-transform duration-300 group-hover/card:translate-x-1">
                    {client.icon}
                    <span className="font-display font-black text-base md:text-lg tracking-tight text-white group-hover/card:text-theme-accent transition-colors duration-300">
                      {client.name}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] md:text-[11px] text-theme-muted tracking-widest uppercase font-semibold">
                    {client.desc}
                  </span>

                  {/* Aesthetic dot accent with glowing response in dark luxury theme */}
                  <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-theme-border rounded-full opacity-60 group-hover/card:bg-theme-accent group-hover/card:opacity-100 group-hover/card:shadow-[0_0_8px_var(--theme-accent)] transition-all duration-300"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

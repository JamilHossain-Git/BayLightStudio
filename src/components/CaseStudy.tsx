import { TrendingUp, ArrowRight, Star } from "lucide-react";

export default function CaseStudy() {
  const chartData = [
    { month: "Jan", visits: 50, active: false },
    { month: "Feb", visits: 64, active: false },
    { month: "Mar", visits: 78, active: false },
    { month: "Apr", visits: 92, active: true },
    { month: "May", visits: 120, active: true }
  ];

  return (
    <section className="bg-theme-bg py-24 border-b border-theme-border theme-transition">
      <div className="max-w-[1600px] mx-auto px-[clamp(24px,4vw,48px)] w-full">
        {/* Header Caption */}
        <div className="flex justify-between items-center mb-12 font-mono text-xs text-theme-muted uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-theme-accent rounded-full"></span>
            Case Study Showcase
          </div>
          <div>LATEST RELEASE</div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left: Branding & Headless Optimization Card */}
          <div className="lg:col-span-6 bg-theme-card text-theme-text p-8 md:p-12 rounded-3xl flex flex-col justify-between relative overflow-hidden shadow-xl border border-theme-border">
            {/* Background design elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-radial from-theme-accent/5 to-transparent blur-3xl pointer-events-none"></div>

            <div className="space-y-6 relative z-10">
              <span className="bg-theme-surf border border-theme-border text-theme-text font-mono text-xs px-3 py-1 rounded-[4px] uppercase tracking-wider font-semibold">
                Full-Stack Rebrand
              </span>
              <h3 className="font-display font-bold text-2xl tracking-tight leading-tight text-theme-text">
                Brand Core & Headless optimization
              </h3>
              <p className="text-theme-muted text-base">
                Rebuilding baylight studio's digital suite: introducing high-velocity headless rendering, atomic design guidelines, and fully response-based asset caching.
              </p>
            </div>

            <div className="mt-12 relative z-10">
              {/* Overlapping aesthetic design */}
              <div className="relative rounded-2xl overflow-hidden border border-theme-border aspect-[16/9] mb-6">
                <img
                  src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop"
                  alt="Team member portrait"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale"
                />
                <div className="absolute top-3 left-3 bg-theme-bg/90 px-2.5 py-1 rounded-[4px] font-mono text-xs text-theme-text border border-theme-border">
                  REF: CAD_OPTIM_09
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-theme-border pt-4">
                <span className="font-mono text-xs text-theme-muted tracking-widest uppercase">
                  ACTIVE WEB LIVE
                </span>
                <span className="flex items-center gap-1.5 font-sans font-bold text-sm text-theme-text group cursor-pointer hover:text-theme-accent transition-colors">
                  baylightstudio.com/live <ArrowRight className="w-3.5 h-3.5 text-theme-text" />
                </span>
              </div>
            </div>
          </div>

          {/* Right: Metrics & Target Speed Panel */}
          <div className="lg:col-span-6 bg-theme-card p-8 md:p-12 rounded-3xl border border-theme-border shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              <h4 className="font-mono text-xs text-theme-muted uppercase tracking-widest">
                VERIFIED PERFORMANCE INDEX
              </h4>
              <div className="flex flex-wrap gap-4 items-center">
                <span className="bg-theme-accent/10 border border-theme-accent/20 text-theme-accent font-display font-bold text-base px-3 py-1.5 rounded">
                  Page speed +48%
                </span>
                <span className="bg-theme-accent/10 border border-theme-accent/20 text-theme-accent font-display font-bold text-base px-3 py-1.5 rounded">
                  Bounce rate -23%
                </span>
              </div>
            </div>

            {/* Performance Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center my-10">
              {/* Circular Lighthouse Indicator */}
              <div className="flex flex-col items-center bg-theme-surf p-6 rounded border border-theme-border text-center relative group">
                <div className="relative w-28 h-28 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="56"
                      cy="56"
                      r="48"
                      className="text-theme-muted/10"
                      strokeWidth="8"
                      fill="transparent"
                      stroke="currentColor"
                     />
                    <circle
                      cx="56"
                      cy="56"
                      r="48"
                      className="text-theme-accent"
                      strokeWidth="8"
                      fill="transparent"
                      strokeDasharray="301.6"
                      strokeDashoffset="0"
                      strokeLinecap="round"
                      stroke="currentColor"
                    />
                  </svg>
                  <span className="absolute font-display font-extrabold text-3xl text-theme-text col-span-1">100</span>
                </div>
                <p className="font-mono text-xs uppercase tracking-widest text-theme-muted mt-4">
                  Pagespeed score
                </p>
                <p className="text-xs text-theme-muted mt-1 leading-normal pr-1">
                  Optimized Web Vitals score verified on Lighthouse servers.
                </p>
              </div>

              {/* Chart Indicator */}
              <div className="bg-theme-surf p-6 rounded border border-theme-border flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs text-theme-muted uppercase">Quarterly visits</span>
                    <TrendingUp className="w-3.5 h-3.5 text-theme-accent" />
                  </div>
                  <h4 className="font-display font-extrabold text-2xl text-theme-text">38k <span className="text-theme-accent text-xs font-semibold">+60%</span></h4>
                </div>

                {/* Micro Bar Chart */}
                <div className="flex items-end justify-between gap-1.5 h-20 pt-4">
                  {chartData.map((data, idx) => (
                    <div key={idx} className="flex flex-col items-center flex-1 group">
                      <div className="w-full bg-theme-border rounded-t-sm h-full flex items-end overflow-hidden">
                        <div
                          className={`w-full transition-all duration-500 ${
                            data.active ? "bg-theme-accent" : "bg-theme-muted/30"
                          } hover:bg-theme-accent`}
                          style={{ height: `${(data.visits / 120) * 100}%` }}
                        ></div>
                      </div>
                      <span className="font-mono text-xs text-theme-muted mt-1.5">{data.month}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Testimonial Quote */}
            <div className="border-t border-theme-border pt-6">
              <div className="flex items-center gap-1 text-theme-accent mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <blockquote className="text-sm text-theme-text font-semibold leading-relaxed mb-4">
                "Thanks to the redesign, we've seen a steady 60% increase in organic leads. Speed has converted visitor trust instantly."
              </blockquote>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-theme-surf flex-shrink-0 flex items-center justify-center font-bold text-xs border border-theme-border text-theme-text">AM</div>
                <p className="font-mono text-xs text-theme-muted uppercase">
                  Angela Smith • Operations Manager
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

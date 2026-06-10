import { useState, FormEvent } from "react";
import { Send, CheckCircle2, MessageCircle } from "lucide-react";

export default function LetTalk() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("web-design");
  const [details, setDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !details) {
      setError("Please fill out all fields before sending your message.");
      return;
    }
    setError("");
    setSubmitted(true);
    // Auto reset after 5 seconds
    setTimeout(() => {
      setName("");
      setEmail("");
      setDetails("");
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section className="bg-theme-bg text-theme-text py-12 sm:py-16 md:py-20 border-b border-theme-border theme-transition" id="contact">
      <div className="max-w-[1600px] mx-auto px-[clamp(24px,4vw,48px)] w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Block: Elite Interactive Contact Form */}
          <div className="lg:col-span-6 bg-theme-card border border-theme-border p-6 md:p-8 rounded-[4px] shadow-2xl relative overflow-hidden flex flex-col justify-between">
            <div className="relative z-10 flex flex-col h-full flex-grow">
              <h3 className="text-[14px] font-bold tracking-tight mb-4 text-theme-text uppercase">
                Have a project in mind?
              </h3>

              {submitted ? (
                <div className="bg-theme-accent/10 border border-theme-accent/20 rounded-[4px] p-6 text-center space-y-4 my-auto animate-in zoom-in duration-300">
                  <div className="w-12 h-12 bg-theme-accent text-theme-bg rounded-[4px] flex items-center justify-center mx-auto shadow-lg">
                    <CheckCircle2 className="w-6 h-6 text-theme-bg" />
                  </div>
                  <div className="space-y-1 flex flex-col justify-center items-center">
                    <p className="text-body-standard-fluid text-theme-text font-bold">Message sent successfully!</p>
                    <p className="text-body-large-fluid text-theme-muted font-sans text-center">
                      Thank you {name}. Imran or Michael from our success team will contact you at {email} within 24 hours.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex-grow flex flex-col justify-between gap-4">
                  <div className="space-y-4 flex-grow flex flex-col justify-start">
                    {/* Name */}
                    <div className="space-y-1.5 animate-in fade-in slide-in-from-bottom duration-300">
                      <label htmlFor="name-input" className="text-contact-label-fluid text-theme-muted uppercase tracking-widest block font-bold font-mono">
                        Your name *
                      </label>
                      <input
                        id="name-input"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full bg-theme-surf border border-theme-border rounded-[4px] px-3.5 py-2.5 text-contact-input-fluid text-theme-text placeholder-theme-muted/50 focus:outline-none focus:border-theme-accent transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5 animate-in fade-in slide-in-from-bottom duration-300 delay-75">
                      <label htmlFor="email-input" className="text-contact-label-fluid text-theme-muted uppercase tracking-widest block font-bold font-mono">
                        Your email address *
                      </label>
                      <input
                        id="email-input"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="w-full bg-theme-surf border border-theme-border rounded-[4px] px-3.5 py-2.5 text-contact-input-fluid text-theme-text placeholder-theme-muted/50 focus:outline-none focus:border-theme-accent transition-colors"
                      />
                    </div>

                    {/* Scope */}
                    <div className="space-y-1.5 animate-in fade-in slide-in-from-bottom duration-300 delay-100">
                      <label htmlFor="scope-select" className="text-contact-label-fluid text-theme-muted uppercase tracking-widest block font-bold font-mono">
                        What's your project scope?
                      </label>
                      <div className="relative">
                        <select
                          id="scope-select"
                          value={projectType}
                          onChange={(e) => setProjectType(e.target.value)}
                          className="w-full bg-theme-surf border border-theme-border rounded-[4px] px-3.5 py-2.5 text-contact-input-fluid text-theme-text focus:outline-none focus:border-theme-accent transition-colors appearance-none cursor-pointer"
                        >
                          <option value="web-design">Web Design & Headless Dev</option>
                          <option value="branding">Corporate rebrand & Identity</option>
                          <option value="all-inclusive">Full Suite (Custom Blueprint)</option>
                        </select>
                        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-theme-muted">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="space-y-1.5 flex-grow flex flex-col animate-in fade-in slide-in-from-bottom duration-300 delay-150">
                      <label htmlFor="details-input" className="text-contact-label-fluid text-theme-muted uppercase tracking-widest block font-bold font-mono">
                        Project details *
                      </label>
                      <textarea
                        id="details-input"
                        required
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                        placeholder="Tell us about your project... This helps us prepare better."
                        className="w-full flex-grow bg-theme-surf border border-theme-border rounded-[4px] px-3.5 py-2.5 text-contact-input-fluid text-theme-text placeholder-theme-muted/50 focus:outline-none focus:border-theme-accent transition-colors resize-none min-h-[120px]"
                      ></textarea>
                    </div>
                  </div>

                  {/* Error & Button block */}
                  <div className="space-y-4 animate-in fade-in slide-in-from-bottom duration-300 delay-200 mt-4">
                    {error && (
                      <p className="text-rose-500 font-mono text-small-fluid uppercase leading-normal tracking-wide animate-pulse">
                        ! {error}
                      </p>
                    )}

                    {/* Action button */}
                    <button
                      type="submit"
                      className="h-[40px] px-6 sm:px-8 inline-flex items-center justify-center btn-glass-secondary font-bold tracking-wider uppercase text-[11px] sm:text-xs rounded-[4px] shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer font-display text-center w-full"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Block: Content Summary Column - Premium Agency-Quality Information Panel */}
          <div className="lg:col-span-6 space-y-5 lg:pl-4 select-none flex flex-col justify-between h-full">
            
            {/* Header section with Badge & Title */}
            <div className="space-y-2">
              <span className="bg-theme-surf text-theme-muted font-mono text-small-fluid px-3 py-1 rounded-[4px] uppercase tracking-wider border border-theme-border inline-flex items-center gap-1.5 shadow">
                <span className="w-1.5 h-1.5 bg-theme-accent rounded-full animate-pulse"></span>
                GET IN TOUCH
              </span>
              <h2 className="text-h2-fluid tracking-tight leading-none text-theme-text uppercase">
                Let's talk<span className="text-theme-accent">.</span>
              </h2>
              <p className="text-body-standard-fluid text-theme-muted leading-relaxed max-w-xl">
                Have a startup launch, enterprise rebrand, or system architecture campaign coming? Let's discuss how we can multiply your capability vectors. We serve as a direct partner, executing high-fidelity code with Swiss layout grids.
              </p>
            </div>

            {/* Grid structure dividing details into elegant interactive modules */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              
              {/* Availability Card */}
              <div className="bg-theme-card/45 border border-theme-border/60 p-4 rounded-[4px] shadow-md space-y-1.5 flex flex-col justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#84cc16] rounded-full animate-pulse shadow-[0_0_8px_#84cc16]"></span>
                  <span className="font-mono text-small-fluid text-theme-text font-bold uppercase tracking-widest">
                    Availability
                  </span>
                </div>
                <h4 className="font-display font-medium text-body-large-fluid text-theme-text">
                  Currently accepting premium projects
                </h4>
                <div className="flex flex-wrap gap-1 pt-1">
                  {["UI/UX Design", "Product", "Branding", "Motion"].map((service) => (
                    <span 
                      key={service} 
                      className="bg-theme-surf border border-theme-border/50 text-theme-muted text-small-fluid font-mono px-1.5 py-0.5 rounded tracking-wide font-medium"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              {/* Statistics Grid (2x2 nested closely) */}
              <div className="bg-theme-card/45 border border-theme-border/60 p-4 rounded-[4px] shadow-md grid grid-cols-2 gap-2 items-center">
                <div className="space-y-0.5">
                  <p className="font-mono text-[11px] sm:text-xs text-theme-muted uppercase font-bold tracking-wider">Completed</p>
                  <p className="text-[18px] sm:text-[20px] font-bold text-theme-accent">150+</p>
                </div>
                <div className="space-y-0.5">
                  <p className="font-mono text-[11px] sm:text-xs text-theme-muted uppercase font-bold tracking-wider">Experience</p>
                  <p className="text-[18px] sm:text-[20px] font-bold text-theme-text">8+ Yrs</p>
                </div>
                <div className="space-y-0.5">
                  <p className="font-mono text-[11px] sm:text-xs text-theme-muted uppercase font-bold tracking-wider">Countries</p>
                  <p className="text-[18px] sm:text-[20px] font-bold text-theme-text">18+</p>
                </div>
                <div className="space-y-0.5">
                  <p className="font-mono text-[11px] sm:text-xs text-theme-muted uppercase font-bold tracking-wider">Client Sat</p>
                  <p className="text-[18px] sm:text-[20px] font-bold text-theme-accent">99.8%</p>
                </div>
              </div>

              {/* Process Timeline Card */}
              <div className="bg-theme-card/45 border border-theme-border/60 p-4 rounded-[4px] shadow-md space-y-2 sm:col-span-2">
                <p className="font-mono text-small-fluid text-theme-muted uppercase font-bold tracking-widest">
                  Our Engagement Lifecycle
                </p>
                <div className="grid grid-cols-3 gap-2.5 pt-0.5">
                  {[
                    { step: "01", title: "Discovery Call", desc: "Define project values" },
                    { step: "02", title: "Proposal & Scope", desc: "Agile milestones" },
                    { step: "03", title: "Design & Launch", desc: "Zero visual noise" },
                  ].map((phase, i) => (
                    <div key={i} className="space-y-0.5 bg-theme-surf/40 p-2 rounded-[4px] border border-theme-border/40 relative">
                      <span className="absolute top-1 right-2 font-mono text-[11px] text-theme-accent font-bold">
                        {phase.step}
                      </span>
                      <p className="font-display font-bold text-body-standard-fluid text-theme-text pt-0.5">{phase.title}</p>
                      <p className="text-[11px] text-theme-muted font-sans leading-tight">{phase.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Response Promise Section */}
              <div className="bg-theme-card/45 border border-theme-border/60 p-4 rounded-[4px] shadow-md space-y-2 sm:col-span-2">
                <p className="font-mono text-small-fluid text-theme-muted uppercase font-bold tracking-widest">
                  Response Excellence Standard
                </p>
                <div className="grid grid-cols-3 gap-3 text-left">
                  <div className="space-y-0.5 border-l border-theme-accent pl-2.5">
                    <p className="font-mono text-small-fluid text-theme-muted uppercase tracking-wider">Avg Response</p>
                    <p className="font-display font-bold text-body-standard-fluid text-theme-text">Under 2 hours</p>
                  </div>
                  <div className="space-y-0.5 border-l border-theme-accent pl-2.5">
                    <p className="font-mono text-small-fluid text-theme-muted uppercase tracking-wider">Kickoff Time</p>
                    <p className="font-display font-bold text-body-standard-fluid text-theme-text">Within 7 days</p>
                  </div>
                  <div className="space-y-0.5 border-l border-theme-accent pl-2.5">
                    <p className="font-mono text-small-fluid text-theme-muted uppercase tracking-wider">Communication</p>
                    <p className="font-display font-bold text-body-standard-fluid text-theme-text">Direct Slack hub</p>
                  </div>
                </div>
              </div>
            </div>

             {/* Direct Contact Profile Card */}
            <div className="bg-theme-card border border-theme-border p-4 rounded-[4px] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="relative flex-shrink-0">
                  <img
                    src="https://raw.githubusercontent.com/jamilhossaindin/BayLight-Studio-Assets/refs/heads/main/Imran.png"
                    alt="Imran Hossain"
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full object-cover border-2 border-theme-border"
                  />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#84cc16] border-2 border-theme-card rounded-full"></span>
                </div>
                <div className="space-y-0.5">
                  <p className="font-mono text-small-fluid text-theme-muted tracking-wider uppercase font-bold">CREATIVE DIRECTOR</p>
                  <p className="font-display font-bold text-body-standard-fluid text-theme-text leading-tight">Imran Hossain</p>
                  <p className="font-mono text-small-fluid text-theme-accent">imran@baylightstudio.com</p>
                </div>
              </div>

              <div className="flex flex-col sm:items-end justify-center gap-1 flex-shrink-0">
                <button
                  type="button"
                  onClick={() => {
                    setName("George Thompson");
                    setDetails("Hello Imran! I saw your work on baylight studio and would love to schedule a custom consultation next Tuesday morning. Let me know what information you need.");
                  }}
                  className="h-[36px] px-4 inline-flex items-center justify-center btn-glass-secondary font-bold tracking-wider uppercase text-[10px] sm:text-[11px] rounded-[4px] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer font-display text-center w-full sm:w-auto group"
                >
                  <MessageCircle className="w-3.5 h-3.5 mr-1.5" />
                  <span>Ask directly</span>
                </button>
                <div className="flex items-center gap-1.5 justify-center sm:justify-end">
                  <span className="w-1.5 h-1.5 bg-[#84cc16] rounded-full animate-ping"></span>
                  <span className="text-[11px] text-theme-muted font-mono tracking-tight">
                    Usually replies in under 1 hr
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

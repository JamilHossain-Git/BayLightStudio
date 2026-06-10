import { useState, FormEvent, useEffect } from "react";
import { Send, CheckCircle2, Mail, Calendar, Video, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ContactPageProps {
  onBackToHome: () => void;
  prefillMessage?: string | null;
}

export default function ContactPage({ onBackToHome, prefillMessage }: ContactPageProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("web-design");
  const [details, setDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Sync details state with prefillMessage if provided
  useEffect(() => {
    if (prefillMessage) {
      setDetails(prefillMessage);
    }
  }, [prefillMessage]);

  // Booking states
  const [activeDate, setActiveDate] = useState<string>("June 4");
  const [activeTime, setActiveTime] = useState<string>("10:00 AM");
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingLoading, setBookingLoading] = useState(false);

  const availableDates = ["June 4", "June 5", "June 8", "June 9"];
  const availableTimes = ["10:00 AM", "11:30 AM", "2:00 PM", "4:30 PM"];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !details) {
      setError("Please input your name, email, and description metrics.");
      return;
    }
    setError("");
    setSubmitted(true);
    setTimeout(() => {
      setName("");
      setEmail("");
      setDetails("");
      setSubmitted(false);
    }, 6000);
  };

  const handleBookCall = () => {
    setBookingLoading(true);
    setTimeout(() => {
      setBookingLoading(false);
      setBookingConfirmed(true);
    }, 1500);
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-theme-bg min-h-screen pt-12 pb-32 border-b border-theme-border theme-transition"
    >
      <div className="max-w-[1600px] mx-auto px-[clamp(24px,4vw,48px)] w-full">
        
        {/* Dynamic Split block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-8">
          
          {/* Left Block: Elite Interactive Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 bg-theme-card border border-theme-border p-6 md:p-8 rounded-[4px] shadow-2xl relative overflow-hidden flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-[14px] font-bold tracking-tight text-theme-text text-left">
                  Have a product in mind?
                </h3>
                <span className="font-mono text-[14px] text-theme-accent border border-theme-accent/20 bg-theme-accent/5 px-2 py-0.5 rounded uppercase font-bold select-none">
                  Custom Request Desk
                </span>
              </div>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-theme-accent/10 border border-theme-accent/20 rounded-[4px] p-6 text-center space-y-4 my-10"
                  >
                    <div className="w-12 h-12 bg-theme-accent text-theme-bg rounded-[4px] flex items-center justify-center mx-auto shadow-lg">
                      <CheckCircle2 className="w-6 h-6 text-theme-bg" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-sans font-bold text-[14px] text-theme-text">Project Metrics Safely Logged!</p>
                      <p className="text-[14px] text-theme-muted leading-relaxed">
                        Thank you {name}. Imran Hossain or Jamil Hossain from our creative and design leadership team will contact you back at <strong className="text-theme-text">{email}</strong> inside of 24 hours.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    {/* Name */}
                    <div className="space-y-1.5 text-left">
                      <label htmlFor="form-name" className="font-mono text-[14px] text-theme-muted uppercase tracking-widest block font-bold">
                        Your name *
                      </label>
                      <input
                        id="form-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="E.g. Jennifer Lopez"
                        className="w-full bg-theme-surf border border-theme-border rounded-[4px] px-3.5 py-2.5 text-[14px] text-theme-text placeholder-theme-muted/45 focus:outline-none focus:border-theme-accent transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5 text-left">
                      <label htmlFor="form-email" className="font-mono text-[14px] text-theme-muted uppercase tracking-widest block font-bold">
                        Your email address *
                      </label>
                      <input
                        id="form-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="E.g. jennifer@techcorp.com"
                        className="w-full bg-theme-surf border border-theme-border rounded-[4px] px-3.5 py-2.5 text-[14px] text-theme-text placeholder-theme-muted/45 focus:outline-none focus:border-theme-accent transition-colors"
                      />
                    </div>

                    {/* Scope */}
                    <div className="space-y-1.5 text-left">
                      <label htmlFor="form-scope" className="font-mono text-[14px] text-theme-muted uppercase tracking-widest block font-bold">
                        Project area & tier *
                      </label>
                      <select
                        id="form-scope"
                        value={projectType}
                        onChange={(e) => setProjectType(e.target.value)}
                        className="w-full bg-theme-surf border border-theme-border rounded-[4px] px-3.5 py-2.5 text-[14px] text-theme-text focus:outline-none focus:border-theme-accent transition-colors appearance-none cursor-pointer"
                      >
                        <option value="web-design">UI/UX Design Sprints</option>
                        <option value="branding">Graphic Design Collaterals</option>
                        <option value="seo-content">Motion & Cinematic Video Sprints</option>
                        <option value="all-inclusive">Brand Identity Alignment</option>
                        <option value="custom-order">• Custom Commission / Bespoke Request</option>
                        <option value="retainer">• Continuous Monthly Engineering Retainer</option>
                      </select>
                    </div>

                    {/* Details */}
                    <div className="space-y-1.5 text-left">
                      <label htmlFor="form-details" className="font-mono text-[14px] text-theme-muted uppercase tracking-widest block font-bold">
                        Describe your project dimensions & custom targets *
                      </label>
                      <textarea
                        id="form-details"
                        required
                        rows={3}
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                        placeholder="Include deadlines, estimated page weights, special integrations, or custom invoice/order instructions..."
                        className="w-full bg-theme-surf border border-theme-border rounded-[4px] px-3.5 py-2.5 text-[14px] text-theme-text placeholder-theme-muted/45 focus:outline-none focus:border-theme-accent transition-all resize-none"
                      ></textarea>
                    </div>

                    {error && (
                      <p className="text-rose-500 font-mono text-[14px] uppercase leading-normal tracking-wide animate-pulse">
                        ! {error}
                      </p>
                    )}

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="h-[40px] px-6 sm:px-8 inline-flex items-center justify-center btn-glass-secondary font-bold tracking-wider uppercase text-[11px] sm:text-xs rounded transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer font-display text-center w-full group"
                    >
                      <span>Send inquiry metric</span>
                      <Send className="w-3.5 h-3.5 ml-2 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </motion.button>

                  </form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right Block: Direct Booking Widget */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 bg-theme-card border border-theme-border p-6 md:p-8 rounded-[4px] shadow-2xl flex flex-col justify-between text-left"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="p-1.5 bg-theme-accent/15 text-theme-accent rounded-[4px] border border-theme-accent/25">
                  <Calendar className="w-4 h-4 text-theme-accent" />
                </div>
                <div>
                  <span className="font-mono text-[14px] text-theme-muted uppercase tracking-widest block font-bold">REAL TIME SELECTION</span>
                  <h4 className="text-[14px] font-bold text-theme-text">Book 15-Min Live Consult</h4>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {bookingConfirmed ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="p-5 border border-theme-accent/20 bg-theme-accent/10 rounded-[4px] space-y-3.5 text-center select-none my-auto"
                  >
                    <CheckCircle2 className="w-8 h-8 text-theme-accent mx-auto animate-bounce" />
                    <div>
                      <h5 className="font-sans font-bold text-[14px] text-theme-text">Live Call Reserved!</h5>
                      <p className="text-[14px] text-theme-muted mt-1 leading-relaxed">
                        Your technical consultant slot is booked on <strong className="text-theme-text">{activeDate} at {activeTime} (GMT+6)</strong>. We emailed an authentication invite slot to your folder.
                      </p>
                    </div>
                    <button
                      onClick={() => setBookingConfirmed(false)}
                      className="font-mono text-[14px] text-theme-accent underline block mx-auto hover:text-theme-text bg-transparent cursor-pointer font-bold"
                    >
                      Adjust Reserved Slot
                    </button>
                  </motion.div>
                ) : (
                  <div className="space-y-4">
                    <p className="text-[14px] text-theme-muted leading-relaxed">
                      Select a date and available timing session to lock an automated Google Meet slot directly with our leading technology supervisor.
                    </p>

                    {/* Dates pills */}
                    <div className="space-y-1 select-none text-left">
                      <span className="font-mono text-[14px] text-theme-muted uppercase tracking-widest block font-bold">1. SELECT DATE</span>
                      <div className="flex flex-wrap gap-1.5 relative z-10">
                        {availableDates.map((d) => {
                          const isSelected = activeDate === d;
                          return (
                            <button
                              type="button"
                              key={d}
                              onClick={() => setActiveDate(d)}
                              className={`px-2.5 py-1 rounded-[4px] font-mono text-[14px] uppercase font-bold transition-all cursor-pointer relative ${
                                isSelected
                                  ? "text-theme-bg"
                                  : "bg-theme-surf/30 dark:bg-theme-surf/15 light:bg-[#ffffffe0]/90 backdrop-blur-md border border-theme-border/20 text-theme-muted hover:text-theme-text"
                              }`}
                            >
                              {isSelected && (
                                <motion.span 
                                  layoutId="activeBookingDateKeyHighlight"
                                  className="absolute inset-0 bg-theme-accent rounded-[4px] -z-10"
                                  transition={{ type: "spring", stiffness: 450, damping: 30 }}
                                />
                              )}
                              <span className="relative z-10">{d}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Times pills */}
                    <div className="space-y-1 select-none text-left">
                      <span className="font-mono text-[14px] text-theme-muted uppercase tracking-widest block font-bold">2. SELECT TIMING (GMT+6)</span>
                      <div className="flex flex-wrap gap-1.5 relative z-10">
                        {availableTimes.map((t) => {
                          const isSelected = activeTime === t;
                          return (
                            <button
                              type="button"
                              key={t}
                              onClick={() => setActiveTime(t)}
                              className={`px-2.5 py-1 rounded-[4px] font-mono text-[14px] uppercase font-bold transition-all cursor-pointer relative ${
                                isSelected
                                  ? "text-theme-bg"
                                  : "bg-theme-surf/30 dark:bg-theme-surf/15 light:bg-[#ffffffe0]/90 backdrop-blur-md border border-theme-border/20 text-theme-muted hover:text-theme-text"
                              }`}
                            >
                              {isSelected && (
                                <motion.span 
                                  layoutId="activeBookingTimeKeyHighlight"
                                  className="absolute inset-0 bg-theme-accent rounded-[4px] -z-10"
                                  transition={{ type: "spring", stiffness: 450, damping: 30 }}
                                />
                              )}
                              <span className="relative z-10">{t}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handleBookCall}
                      disabled={bookingLoading}
                      className="h-[40px] px-6 sm:px-8 inline-flex items-center justify-center btn-glass-secondary font-bold tracking-wider uppercase text-[11px] sm:text-xs rounded transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer font-display text-center w-full group disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {bookingLoading ? (
                        <span>Reserving Slot...</span>
                      ) : (
                        <>
                          <span>Reserve for {activeDate} @ {activeTime}</span>
                          <Video className="w-3.5 h-3.5 ml-2 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>

        {/* Directories group - Symmetrical bottom alignment section as requested */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          
          {/* E-mail channels */}
          <div className="bg-theme-card border border-theme-border p-5 rounded-[4px] space-y-3 hover:border-theme-accent transition-colors text-left select-none shadow-md">
            <div className="flex items-center gap-2 text-theme-accent">
              <Mail className="w-4 h-4" />
              <span className="font-mono text-[14px] uppercase font-bold tracking-widest">E-MAIL CHANNELS</span>
            </div>
            <div className="space-y-1">
              <a
                href="mailto:contact@baylightstudio.com"
                className="font-sans font-bold text-[14px] text-theme-text hover:text-theme-accent transition-colors block"
              >
                contact@baylightstudio.com
              </a>
              <a
                href="mailto:sprints@baylightstudio.com"
                className="font-sans font-medium text-[14px] text-theme-muted hover:text-theme-accent transition-colors block"
              >
                sprints@baylightstudio.com
              </a>
            </div>
          </div>

          {/* Social Directory */}
          <div className="bg-theme-card border border-theme-border p-5 rounded-[4px] space-y-3 hover:border-theme-accent transition-colors text-left select-none shadow-md">
            <div className="flex items-center gap-2 text-theme-accent">
              <span className="font-mono text-[14px] uppercase font-bold tracking-widest">SOCIAL DIRECTORY</span>
            </div>
            <div className="grid grid-cols-2 gap-y-1 text-[14px] text-theme-muted font-sans font-medium">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-theme-accent hover:underline block">LinkedIn</a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-theme-accent hover:underline block">GitHub</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-theme-accent hover:underline block">Twitter / X</a>
              <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="hover:text-theme-accent hover:underline block">Behance</a>
            </div>
          </div>

          {/* Dhaka coordinates */}
          <div className="bg-theme-card border border-dashed border-theme-border rounded-[4px] p-5 flex items-center justify-between text-left select-none shadow-md">
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-theme-accent" />
              <div>
                <span className="font-mono text-[14px] text-theme-muted uppercase tracking-widest block font-bold">REGIONAL GEOGRAPHY</span>
                <p className="font-sans font-bold text-[14px] text-theme-text mt-0.5">Dhaka, Bangladesh</p>
                <p className="text-[14px] font-mono text-theme-muted leading-tight">GMT+6 // Office active hours: 9:30 AM to 6:30 PM</p>
              </div>
            </div>
            <span className="font-mono text-[14px] text-theme-accent border border-theme-accent/20 bg-theme-accent/5 px-1.5 py-0.5 rounded-[4px] uppercase font-bold">
              GMT+6
            </span>
          </div>

        </div>

      </div>
    </motion.section>
  );
}

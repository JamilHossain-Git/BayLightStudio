import { ArrowRight, BookOpen } from "lucide-react";
import { bPosts } from "../data";

export default function BlogTrends() {
  return (
    <section className="bg-theme-bg py-24 border-b border-theme-border theme-transition" id="blog">
      <div className="max-w-[1600px] mx-auto px-[clamp(24px,4vw,48px)] w-full">
        {/* Caption Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 items-start">
          <div className="md:col-span-3 font-mono text-xs text-theme-muted uppercase tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-theme-accent rounded-full"></span>
            Insights Hub
          </div>
          <div className="md:col-span-9 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <h2 className="font-display text-3xl font-bold tracking-tight text-theme-text max-w-2xl leading-none">
              Newest trends and insights.
            </h2>
            <a
              href="#contact"
              className="flex items-center gap-2 btn-glass-secondary text-theme-text text-sm font-semibold px-5 py-2.5 rounded-[4px] uppercase tracking-wider"
            >
              See all articles <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Blog layout split */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-stretch">
          {/* Left Column - List of stack blogs */}
          <div className="md:col-span-5 flex flex-col justify-between gap-8">
            {bPosts.map((post) => (
              <div
                key={post.id}
                className="group flex flex-col md:flex-row gap-6 p-4 rounded-2xl border border-theme-border bg-theme-surf hover:bg-theme-card hover:border-theme-accent transition-all duration-300"
              >
                {/* Image */}
                <div className="w-full md:w-40 aspect-square rounded-xl overflow-hidden bg-theme-surf flex-shrink-0 border border-theme-border">
                  <img
                    src={post.image}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale transition-transform duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>

                {/* Details */}
                <div className="flex flex-col justify-between py-1">
                  <div>
                    <div className="flex items-center gap-3 font-mono text-xs text-theme-muted uppercase tracking-widest mb-1.5">
                      <span>{post.category}</span>
                      <span>•</span>
                      <span>{post.date.split(",")[0]}</span>
                    </div>
                    <h3 className="font-display font-bold text-base text-theme-text group-hover:text-theme-accent transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 pt-4 border-t border-theme-border mt-4 md:mt-0">
                    <span className="font-mono text-xs text-theme-muted">{post.readTime}</span>
                    <span className="text-theme-text font-semibold text-sm flex items-center gap-1 group-hover:text-theme-accent group-hover:underline">
                      Read post <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Large Hero Blog Post Card */}
          <div className="md:col-span-7 bg-theme-card border border-theme-border rounded-xl p-6 md:p-8 flex flex-col justify-between shadow-xs hover:border-theme-accent transition-all duration-300 group cursor-pointer font-sans">
            <div className="space-y-4">
              <span className="bg-theme-accent text-theme-bg font-mono text-xs px-3.5 py-1 rounded-[4px] uppercase tracking-wider inline-flex items-center gap-1.5 shadow border border-theme-border font-semibold">
                <BookOpen className="w-3.5 h-3.5" />
                Featured Editorial
              </span>
              <h3 className="font-display font-bold text-2xl text-theme-text tracking-tight leading-snug">
                What's new in digital? Exploring high-performance frontends.
              </h3>
              <p className="text-theme-muted text-base max-w-xl">
                Server-side components, headless CMS bundles, and static image-generation pipelines are completely changing customer acquisition. Here's our definitive blueprint to stay ahead.
              </p>
            </div>

            {/* Immersive MacBook photo */}
            <div className="my-8 aspect-[16/10] rounded-2xl overflow-hidden border border-theme-border relative">
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop"
                alt="MacBook Pro designer desk"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-103"
              />
              <div className="absolute top-4 left-4 bg-theme-bg/90 backdrop-blur-sm p-3 rounded-xl text-theme-text font-mono text-xs border border-theme-border uppercase tracking-widest">
                SERENE_ENVIRONMENT_096.JPEG
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-theme-border pt-6">
              <span className="font-mono text-xs text-theme-muted">8 min read • Published by Engineering Team</span>
              <span className="font-sans font-bold text-sm text-theme-text flex items-center gap-1 group-hover:text-theme-accent transition-colors">
                Unlock insights blueprint <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

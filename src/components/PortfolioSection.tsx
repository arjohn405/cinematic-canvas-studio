import { useState } from "react";
import { Play, ExternalLink } from "lucide-react";

const categories = ["All", "Vlogs", "Shorts / Reels", "Podcasts", "Business"];

const projects = [
  { title: "Travel Vlog Series", category: "Vlogs", thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&q=80", type: "video" },
  { title: "Product Launch Reel", category: "Shorts / Reels", thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&q=80", type: "video" },
  { title: "Tech Podcast S2", category: "Podcasts", thumbnail: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=600&q=80", type: "audio" },
  { title: "Brand Story Film", category: "Business", thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&q=80", type: "video" },
  { title: "Fitness Shorts", category: "Shorts / Reels", thumbnail: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80", type: "video" },
  { title: "Daily Vlog Edit", category: "Vlogs", thumbnail: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=80", type: "video" },
];

const PortfolioSection = () => {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-4 block">
            Portfolio
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Recent <span className="gradient-text">Projects</span>
          </h2>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                active === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div
              key={project.title}
              className="group relative rounded-xl overflow-hidden cursor-pointer"
            >
              <img
                src={project.thumbnail}
                alt={project.title}
                loading="lazy"
                className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <span className="text-xs text-primary font-medium">{project.category}</span>
                  <h3 className="font-display font-semibold text-lg">{project.title}</h3>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-100 scale-75">
                <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center">
                  <Play className="w-6 h-6 text-primary-foreground ml-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

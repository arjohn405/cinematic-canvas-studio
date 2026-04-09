import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Professional video editing studio"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse-glow" />
          <span className="text-xs font-medium text-muted-foreground tracking-wider uppercase">
            Available for new projects
          </span>
        </div>

        <h1
          className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          Turning Your Raw Footage into{" "}
          <span className="gradient-text glow-text">Powerful Stories</span>
        </h1>

        <p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          Professional Video, Photo & Audio Editing for Creators and Businesses
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up"
          style={{ animationDelay: "0.8s" }}
        >
          <a href="#portfolio" className="btn-primary text-base">
            View Portfolio
          </a>
          <a href="#contact" className="btn-outline text-base">
            Get a Quote
          </a>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-3 gap-8 mt-16 max-w-lg mx-auto opacity-0 animate-fade-up"
          style={{ animationDelay: "1s" }}
        >
          {[
            { value: "200+", label: "Projects" },
            { value: "50+", label: "Clients" },
            { value: "5+", label: "Years" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import { Smartphone, Mic, Briefcase, Zap, Share2 } from "lucide-react";

const specialties = [
  { icon: Smartphone, label: "Vertical Videos", desc: "TikTok, Reels, Shorts" },
  { icon: Mic, label: "Podcast Editing", desc: "Full production polish" },
  { icon: Briefcase, label: "Business Videos", desc: "Ads & promotional content" },
  { icon: Zap, label: "Fast Turnaround", desc: "48-hour delivery available" },
  { icon: Share2, label: "Social Optimized", desc: "Platform-ready formats" },
];

const SpecialtiesSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-4 block">
            Specialties
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            What Sets Me <span className="gradient-text">Apart</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {specialties.map((item, i) => (
            <div
              key={item.label}
              className="glass-card p-6 text-center group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-sm font-semibold mb-1">{item.label}</h3>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Sound wave visual */}
        <div className="flex items-center justify-center gap-1 mt-12">
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              className="w-1 bg-primary/40 rounded-full animate-wave"
              style={{
                height: `${Math.random() * 24 + 8}px`,
                animationDelay: `${i * 0.05}s`,
                animationDuration: `${0.8 + Math.random() * 0.8}s`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;

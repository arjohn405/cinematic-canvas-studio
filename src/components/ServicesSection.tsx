import { Film, Camera, Headphones } from "lucide-react";

const services = [
  {
    icon: Film,
    title: "Video Editing",
    description: "Vlogs, Shorts, Reels, Business Videos, YouTube Content — crafted with cinematic precision.",
    tags: ["YouTube", "Reels", "Shorts", "Ads"],
  },
  {
    icon: Camera,
    title: "Photo Editing",
    description: "Enhancement, retouching, and color grading that makes every shot look professional.",
    tags: ["Retouching", "Color Grading", "Compositing"],
  },
  {
    icon: Headphones,
    title: "Audio Editing",
    description: "Podcast cleanup, noise reduction, mastering — crystal clear audio every time.",
    tags: ["Podcasts", "Mixing", "Mastering"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-4 block">
            What I Do
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Services & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            End-to-end editing solutions tailored to your content goals
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="glass-card p-8 group"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

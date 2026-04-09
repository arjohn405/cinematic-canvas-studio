import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "YouTuber · 500K Subscribers",
    text: "My channel growth exploded after working with StudioEdit. The editing quality is cinematic, turnaround is insanely fast, and they just get my style.",
    rating: 5,
  },
  {
    name: "James Rivera",
    role: "Podcast Host · The Daily Grind",
    text: "Best audio editor I've worked with. My episodes sound professionally produced now — clean, polished, and perfectly paced. Highly recommend.",
    rating: 5,
  },
  {
    name: "Emily Chen",
    role: "Marketing Director · TechFlow",
    text: "Our promotional videos went from amateur to agency-level. The attention to detail and creative storytelling completely transformed our brand content.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-4 block">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Client <span className="gradient-text">Love</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="glass-card p-8 relative">
              <Quote className="w-8 h-8 text-primary/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">"{t.text}"</p>
              <div>
                <div className="font-display font-semibold text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

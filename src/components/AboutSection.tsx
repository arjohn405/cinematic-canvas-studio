import { Award, Heart, Eye } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-4 block">
              About Me
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              The Editor Behind{" "}
              <span className="gradient-text">Your Vision</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              With over 5 years of experience in video, photo, and audio editing, I've helped
              hundreds of creators and businesses transform raw content into compelling stories that
              captivate audiences and drive results.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              I believe every piece of content tells a story — my job is to make sure it's told in
              the most powerful way possible. From YouTube vlogs to corporate brand films, I bring
              the same level of passion and precision to every project.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Award, label: "5+ Years Experience" },
                { icon: Heart, label: "Passion for Storytelling" },
                { icon: Eye, label: "Attention to Detail" },
              ].map((item) => (
                <div key={item.label} className="glass-card p-4 text-center">
                  <item.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                  <span className="text-xs text-muted-foreground font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="glass-card p-1 rounded-2xl">
              <div className="aspect-square rounded-xl bg-gradient-to-br from-primary/20 via-secondary to-primary/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="font-display text-6xl md:text-8xl font-bold gradient-text mb-2">SE</div>
                  <div className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Studio Edit</div>
                </div>
              </div>
            </div>
            {/* Floating accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-primary/10 animate-float -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-primary/5 animate-float" style={{ animationDelay: "1s" }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

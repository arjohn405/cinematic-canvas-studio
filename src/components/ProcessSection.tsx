import { Upload, MessageSquare, Wand2, Download } from "lucide-react";

const steps = [
  { icon: Upload, title: "Send Your Files", desc: "Upload your raw footage, photos, or audio via any cloud service." },
  { icon: MessageSquare, title: "Discuss Vision", desc: "We align on style, pacing, and creative direction for your project." },
  { icon: Wand2, title: "Editing & Revisions", desc: "I craft your content with precision, with revision rounds included." },
  { icon: Download, title: "Final Delivery", desc: "Receive your polished, export-ready files in any format you need." },
];

const ProcessSection = () => {
  return (
    <section id="process" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-4 block">
            How It Works
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Simple <span className="gradient-text">Process</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From raw footage to final cut in four easy steps
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          {steps.map((step, i) => (
            <div key={step.title} className="text-center relative">
              <div className="w-20 h-20 rounded-2xl glass-card flex items-center justify-center mx-auto mb-6 relative z-10">
                <step.icon className="w-8 h-8 text-primary" />
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center font-display">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

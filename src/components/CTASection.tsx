const CTASection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="glass-card p-12 md:p-20 text-center relative overflow-hidden">
          {/* Background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Let's Bring Your Content{" "}
              <span className="gradient-text">to Life</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Ready to elevate your content? Let's discuss your project and create something extraordinary together.
            </p>
            <a href="#contact" className="btn-primary text-base inline-block">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

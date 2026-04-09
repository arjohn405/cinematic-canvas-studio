import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$49",
    desc: "Perfect for short-form content",
    features: ["Videos up to 3 min", "Basic color correction", "1 revision round", "48-hour delivery", "Export in 1 format"],
    popular: false,
  },
  {
    name: "Standard",
    price: "$149",
    desc: "For YouTube & podcast creators",
    features: ["Videos up to 15 min", "Color grading & effects", "2 revision rounds", "Thumbnails included", "Multi-format export"],
    popular: true,
  },
  {
    name: "Premium",
    price: "$349",
    desc: "Full production for businesses",
    features: ["Unlimited duration", "Advanced VFX & motion", "Unlimited revisions", "Priority delivery", "Full brand package"],
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-4 block">
            Pricing
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Simple <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Transparent pricing — no hidden fees
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`glass-card p-8 relative ${
                plan.popular ? "ring-2 ring-primary" : ""
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full font-display">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-lg font-semibold mb-1">{plan.name}</h3>
              <p className="text-xs text-muted-foreground mb-4">{plan.desc}</p>
              <div className="mb-6">
                <span className="font-display text-4xl font-bold">{plan.price}</span>
                <span className="text-sm text-muted-foreground"> / project</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block text-center py-3 rounded-lg font-display font-semibold text-sm transition-all duration-300 ${
                  plan.popular
                    ? "btn-primary"
                    : "btn-outline"
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

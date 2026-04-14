import { Heart, Lightbulb, Layers } from "lucide-react";

const steps = [
  {
    icon: Heart,
    title: "Empathize",
    description:
      "Deeply understand your users through observation, interviews, and immersive experiences. Build genuine empathy to uncover hidden needs and pain points that data alone can't reveal.",
    color: "text-primary",
  },
  {
    icon: Lightbulb,
    title: "Ideate",
    description:
      "Generate bold, diverse solutions through structured brainstorming. Challenge assumptions, explore edge cases, and push beyond the obvious to find breakthrough ideas.",
    color: "text-warning",
  },
  {
    icon: Layers,
    title: "Prototype",
    description:
      "Bring ideas to life quickly with low-fidelity prototypes. Test, learn, and iterate rapidly. Fail fast and cheap to succeed faster and smarter.",
    color: "text-success",
  },
];

const MethodologySection = () => {
  return (
    <section id="methodology" className="py-12 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What is Design Thinking?
          </h2>
          <p className="text-muted-foreground text-lg">
            A science-based, human-centered approach to innovation. Built on HFI
            methodologies and real-world usability research.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="relative p-8 rounded-xl border border-border bg-card card-hover"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className={`mb-6 ${step.color}`}>
                <step.icon className="h-10 w-10" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;

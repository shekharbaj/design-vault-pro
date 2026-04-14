import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] animate-glow-pulse" />

      <div className="relative container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-secondary/50 text-sm text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            100+ Curated Design Challenges
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
            Master the Art of{" "}
            <span className="text-gradient">Problem Solving</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Bridge the gap between empathy and execution. Access curated Design Thinking
            challenges to sharpen your UX strategy and product leadership skills.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/vault"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-base hover:opacity-90 transition-opacity glow"
            >
              Enter the Vault
              <ArrowDown className="h-4 w-4" />
            </Link>
            <Link
              to="/methodology"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border border-border text-foreground font-medium text-base hover:bg-secondary transition-colors"
            >
              Learn the Method
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

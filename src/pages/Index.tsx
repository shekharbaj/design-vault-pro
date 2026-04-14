import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MethodologySection from "@/components/MethodologySection";
import VaultSection from "@/components/VaultSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Compact hero banner */}
      <section className="pt-20 pb-8">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-secondary/50 text-sm text-muted-foreground mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            100+ Curated Design Challenges
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-3">
            Master the Art of{" "}
            <span className="text-gradient">Problem Solving</span>
          </h1>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Bridge the gap between empathy and execution. Access curated Design Thinking
            challenges to sharpen your UX strategy and product leadership skills.
          </p>
        </div>
      </section>
      <MethodologySection />
      <VaultSection />
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          © 2026 Nexus Design Vault. Built for designers who think in systems.
        </div>
      </footer>
    </div>
  );
};

export default Index;

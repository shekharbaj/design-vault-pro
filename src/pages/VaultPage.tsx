import Navbar from "@/components/Navbar";
import MethodologySection from "@/components/MethodologySection";
import VaultSection from "@/components/VaultSection";

const VaultPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <MethodologySection />
        <VaultSection />
      </div>
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          © 2026 Nexus Design Vault. Built for designers who think in systems.
        </div>
      </footer>
    </div>
  );
};

export default VaultPage;

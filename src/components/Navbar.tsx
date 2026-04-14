import { useState, useEffect } from "react";
import { Vault } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <a href="/" className="flex items-center gap-2.5">
          <Vault className="h-6 w-6 text-primary" />
          <span className="text-lg font-semibold tracking-tight text-foreground">
            Nexus Design Vault
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#methodology" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Methodology
          </a>
          <a href="#vault" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            The Vault
          </a>
          <a
            href="#vault"
            className="text-sm font-medium bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
          >
            Enter the Vault
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

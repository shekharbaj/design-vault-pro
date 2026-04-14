import { useState, useEffect } from "react";
import { Vault } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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
        <Link to="/" className="flex items-center gap-2.5">
          <Vault className="h-6 w-6 text-primary" />
          <span className="text-lg font-semibold tracking-tight text-foreground">
            Nexus Design Vault
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/methodology"
            className={`text-sm transition-colors ${
              location.pathname === "/methodology" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Methodology
          </Link>
          <Link
            to="/vault"
            className="text-sm font-medium bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
          >
            Enter the Vault
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

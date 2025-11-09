import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    // Handle base path for GitHub Pages
    const basePath = import.meta.env.BASE_URL || "/kevin-portfolio/";
    const cleanHref = href.startsWith("#") ? href : `#${href.replace("#", "")}`;
    const element = document.querySelector(cleanHref);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    } else {
      // Fallback: scroll to top for home
      if (cleanHref === "#home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <nav 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md border-b border-border/50 shadow-lg shadow-black/5" 
          : "bg-transparent"
      }`}
      data-testid="nav-navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2.5 hover-elevate px-3 py-2 rounded-lg transition-all hover:scale-105 active:scale-95"
            data-testid="button-logo"
          >
            <img 
              src="/profile-image.jpg" 
              alt="Kevin Bhadani" 
              className="w-9 h-9 md:w-10 md:h-10 rounded-full object-cover border-2 border-primary/30 shadow-md ring-2 ring-primary/10"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent && !parent.querySelector('.fallback-initials')) {
                  const fallback = document.createElement('span');
                  fallback.className = 'fallback-initials w-9 h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm md:text-base shadow-md';
                  fallback.textContent = 'KB';
                  parent.appendChild(fallback);
                }
              }}
            />
            <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent hidden sm:inline-block">
              Kevin Bhadani
            </span>
          </button>
          
          <div className="hidden md:flex items-center gap-1 bg-card/50 backdrop-blur-sm rounded-full px-2 py-1 border border-border/50">
            {navLinks.map((link, idx) => (
              <Button
                key={idx}
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(link.href)}
                className="rounded-full px-4 py-2 text-sm font-medium transition-all hover:bg-primary/10 hover:text-primary"
                data-testid={`button-nav-${idx}`}
              >
                {link.label}
              </Button>
            ))}
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
        
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border/50 py-4 space-y-1 animate-in slide-in-from-top-2" data-testid="div-mobile-menu">
            {navLinks.map((link, idx) => (
              <Button
                key={idx}
                variant="ghost"
                className="w-full justify-start rounded-lg px-4 py-3 text-base font-medium hover:bg-primary/10 hover:text-primary transition-colors"
                onClick={() => scrollToSection(link.href)}
                data-testid={`button-mobile-nav-${idx}`}
              >
                {link.label}
              </Button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

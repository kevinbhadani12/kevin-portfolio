import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Available For", href: "#looking-for" },
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
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-3 px-3 py-2 rounded-lg transition-all hover:bg-primary/5 active:scale-95 relative"
            data-testid="button-logo"
          >
            {/* Logo container */}
            <div className="relative">
              <img 
                src="/profile-image.jpg" 
                alt="Kevin Bhadani" 
                className="w-10 h-10 md:w-11 md:h-11 rounded-full object-cover border-2 border-primary/50 shadow-sm group-hover:shadow-md group-hover:border-primary transition-all duration-300"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent && !parent.querySelector('.fallback-initials')) {
                    const fallback = document.createElement('span');
                    fallback.className = 'fallback-initials w-10 h-10 md:w-11 md:h-11 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-white font-bold text-sm md:text-base shadow-sm group-hover:shadow-md transition-all duration-300';
                    fallback.textContent = 'KB';
                    parent.appendChild(fallback);
                  }
                }}
              />
            </div>
            
            {/* Name with distinct colors */}
            <div className="flex flex-col items-start hidden sm:flex">
              <div className="flex items-baseline gap-1">
                <span className="text-base md:text-lg font-bold text-primary">
                Kevin Bhadani
                </span>
              </div>
              <span className="text-xs text-muted-foreground font-medium hidden md:block">
                Automation Engineer
              </span>
            </div>
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

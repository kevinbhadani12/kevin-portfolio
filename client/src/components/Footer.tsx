import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleSocialClick = (platform: string) => {
    console.log(`${platform} link clicked`);
  };

  return (
    <footer className="bg-gradient-to-b from-background to-card border-t border-border/50 py-12 md:py-16" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-8 md:mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent" data-testid="text-footer-title">
              Let's Connect
            </h3>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed" data-testid="text-footer-description">
              Open to discussing automation solutions, web scraping projects, and data engineering challenges. 
              Let's build something great together.
            </p>
            <div className="flex items-center gap-2 text-sm md:text-base text-muted-foreground" data-testid="text-footer-location">
              <MapPin className="w-4 h-4 md:w-5 md:h-5" />
              <span>Based in Ahmedabad, Gujarat, India</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg md:text-xl font-bold" data-testid="text-contact-heading">
              Contact Information
            </h4>
            <div className="space-y-3">
              <a 
                href="mailto:kevinbhadani2121@gmail.com" 
                className="flex items-center gap-3 text-base md:text-lg text-muted-foreground hover:text-primary transition-all hover:translate-x-1 group"
                data-testid="link-email"
              >
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </div>
                <span>kevinbhadani2121@gmail.com</span>
              </a>
              <a 
                href="tel:+916354116990" 
                className="flex items-center gap-3 text-base md:text-lg text-muted-foreground hover:text-primary transition-all hover:translate-x-1 group"
                data-testid="link-phone"
              >
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </div>
                <span>+91-6354116990</span>
              </a>
              <a 
                href="https://linkedin.com/in/kevinbhadani" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-base md:text-lg text-muted-foreground hover:text-primary transition-all hover:translate-x-1 group"
                data-testid="link-linkedin"
              >
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Linkedin className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </div>
                <span>linkedin.com/in/kevinbhadani</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs md:text-sm text-muted-foreground" data-testid="text-copyright">
            © {currentYear} Kevin Bhadani. All rights reserved.
          </p>
          <p className="text-xs md:text-sm text-muted-foreground" data-testid="text-built-with">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

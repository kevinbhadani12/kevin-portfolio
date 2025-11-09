import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleSocialClick = (platform: string) => {
    console.log(`${platform} link clicked`);
  };

  return (
    <footer className="bg-card border-t py-12" id="contact">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold" data-testid="text-footer-title">
              Let's Connect
            </h3>
            <p className="text-muted-foreground leading-relaxed" data-testid="text-footer-description">
              I'm currently available for freelance opportunities and open to discussing 
              automation solutions, web scraping projects, and data engineering challenges.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground" data-testid="text-footer-location">
              <MapPin className="w-4 h-4" />
              <span>Based in Ahmedabad, Gujarat, India</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold" data-testid="text-contact-heading">
              Contact Information
            </h4>
            <div className="space-y-3">
              <a 
                href="mailto:kevinbhadani2121@gmail.com" 
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-email"
              >
                <Mail className="w-4 h-4" />
                kevinbhadani2121@gmail.com
              </a>
              <a 
                href="tel:+916354116990" 
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-phone"
              >
                <Phone className="w-4 h-4" />
                +91-6354116990
              </a>
              <a 
                href="https://linkedin.com/in/kevinbhadani" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-linkedin"
              >
                <Linkedin className="w-4 h-4" />
                linkedin.com/in/kevinbhadani
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground" data-testid="text-copyright">
            © {currentYear} Kevin Bhadani. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground" data-testid="text-built-with">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

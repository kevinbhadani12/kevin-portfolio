import { Mail, Linkedin, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const handleContactClick = (type: string) => {
    console.log(`${type} contact clicked`);
  };

  return (
    <section id="home" className="min-h-[85vh] md:min-h-[90vh] flex items-center justify-center relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background via-50% to-accent/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(120,119,198,0.1),transparent_50%)]" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
        {/* Name with gradient */}
        <div className="mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-2 tracking-tight" data-testid="text-name">
            <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
              Kevin Bhadani
            </span>
          </h1>
        </div>
        
        {/* Title */}
        <div className="mb-5 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-muted-foreground mb-2" data-testid="text-title">
            Python Developer & Automation Engineer
          </p>
        </div>
        
        {/* Description */}
        <div className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4" data-testid="text-summary">
            Associate Software Engineer at <span className="font-semibold text-foreground">MeasureOne</span>, specializing in building scalable automation workflows 
            and data extraction solutions using Python, Node.js, and modern scraping technologies
          </p>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <Button 
            size="lg"
            className="gap-2 rounded-full px-6 py-6 text-base font-medium shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
            asChild
            data-testid="button-email"
          >
            <a href="mailto:kevinbhadani2121@gmail.com">
              <Mail className="w-5 h-5" />
              Get In Touch
            </a>
          </Button>
          
          <Button 
            variant="outline"
            size="lg"
            className="gap-2 rounded-full px-6 py-6 text-base font-medium border-2 hover:bg-primary/10 hover:border-primary/50 transition-all hover:scale-105 active:scale-95"
            asChild
            data-testid="button-linkedin"
          >
            <a href="https://linkedin.com/in/kevinbhadani" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </Button>
        </div>
        
        {/* Location */}
        <div className="flex items-center justify-center gap-2 text-sm sm:text-base text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400" data-testid="text-location">
          <MapPin className="w-4 h-4" />
          <span>Ahmedabad, Gujarat, India</span>
        </div>
      </div>
    </section>
  );
}

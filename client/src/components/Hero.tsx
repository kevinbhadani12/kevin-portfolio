import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const handleContactClick = (type: string) => {
    console.log(`${type} contact clicked`);
  };

  return (
    <section className="min-h-[80vh] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 py-20 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight" data-testid="text-name">
          Kevin Bhadani
        </h1>
        
        <p className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-4" data-testid="text-title">
          Python Developer & Automation Engineer
        </p>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed" data-testid="text-summary">
          Associate Software Engineer at MeasureOne, specializing in building scalable automation workflows 
          and data extraction solutions using Python, Node.js, and modern scraping technologies
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <Button 
            variant="outline" 
            size="default"
            className="gap-2"
            onClick={() => handleContactClick('email')}
            data-testid="button-email"
          >
            <Mail className="w-4 h-4" />
            kevinbhadani2121@gmail.com
          </Button>
          
          <Button 
            variant="outline" 
            size="default"
            className="gap-2"
            onClick={() => handleContactClick('phone')}
            data-testid="button-phone"
          >
            <Phone className="w-4 h-4" />
            +91-6354116990
          </Button>
          
          <Button 
            variant="outline" 
            size="default"
            className="gap-2"
            onClick={() => window.open('https://linkedin.com/in/kevinbhadani', '_blank')}
            data-testid="button-linkedin"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </Button>
        </div>
        
        <div className="flex items-center justify-center gap-2 text-muted-foreground" data-testid="text-location">
          <MapPin className="w-4 h-4" />
          <span>Ahmedabad, Gujarat, India</span>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full p-1">
            <div className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}

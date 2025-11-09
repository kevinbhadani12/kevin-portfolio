import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-muted/20 to-background" id="education">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent" data-testid="text-education-heading">
            Education
          </h2>
        </div>
        
        <div className="flex justify-center">
          <Card className="group relative overflow-hidden border-2 border-border/50 hover:border-primary/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 p-6 md:p-8 max-w-3xl w-full" data-testid="card-education">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-300 pointer-events-none" />
            <div className="relative flex items-start gap-6">
              <div className="p-4 md:p-5 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="w-7 h-7 md:w-8 md:h-8 text-primary" />
              </div>
              
              <div className="flex-1 space-y-2">
                <h3 className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors" data-testid="text-degree">
                  Bachelor of Engineering
                </h3>
                <p className="text-base md:text-lg text-muted-foreground font-medium" data-testid="text-major">
                  Information Technology
                </p>
                <p className="text-sm md:text-base text-muted-foreground" data-testid="text-university">
                  Gujarat Technological University
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <span className="text-sm md:text-base text-muted-foreground" data-testid="text-duration">
                    2018 - 2022
                  </span>
                  <Badge variant="secondary" className="text-xs md:text-sm px-3 py-1 bg-primary/10 text-primary border-primary/20">
                    CGPA: 8.46
                  </Badge>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

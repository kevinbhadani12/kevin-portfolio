import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section className="py-16 md:py-24 bg-muted/30" id="education">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center" data-testid="text-education-heading">
          Education
        </h2>
        
        <div className="flex justify-center">
          <Card className="p-8 max-w-2xl w-full" data-testid="card-education">
            <div className="flex items-start gap-6">
              <div className="p-4 rounded-lg bg-primary/10">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              
              <div className="flex-1 space-y-2">
                <h3 className="text-2xl font-semibold" data-testid="text-degree">
                  Bachelor of Engineering
                </h3>
                <p className="text-lg text-muted-foreground" data-testid="text-major">
                  Information Technology
                </p>
                <p className="text-base text-muted-foreground" data-testid="text-university">
                  Gujarat Technological University
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <span className="text-sm text-muted-foreground" data-testid="text-duration">
                    2018 - 2022
                  </span>
                  <span className="text-sm font-medium" data-testid="text-gpa">
                    CGPA: 8.46
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

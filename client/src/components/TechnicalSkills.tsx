import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    skills: ["Python", "Node.js", "JavaScript", "TypeScript"]
  },
  {
    title: "Web & App Scraping",
    skills: ["Scrapy", "Requests", "Beautiful Soup", "Selenium", "Playwright", "Puppeteer", "Appium"]
  },
  {
    title: "Data Handling",
    skills: ["Pandas", "NumPy", "Data Processing", "ETL Pipelines"]
  },
  {
    title: "API Testing Tools",
    skills: ["Postman", "Fiddler", "HTTP Toolkit"]
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL", "PostgreSQL"]
  },
  {
    title: "Cloud & API Development",
    skills: ["AWS Lambda", "AWS S3", "FastAPI"]
  }
];

export default function TechnicalSkills() {
  return (
    <section id="skills" className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent" data-testid="text-skills-heading">
            Technical Skills
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to build automation solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {skillCategories.map((category, idx) => (
            <Card 
              key={idx} 
              className="group relative overflow-hidden border-2 border-border/50 hover:border-primary/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 p-6"
              data-testid={`card-skill-${idx}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-300 pointer-events-none" />
              <div className="relative">
                <h3 className="text-lg md:text-xl font-bold mb-4 group-hover:text-primary transition-colors" data-testid={`text-skill-category-${idx}`}>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <Badge 
                      key={skillIdx} 
                      variant="secondary"
                      className="text-xs md:text-sm px-3 py-1.5 bg-primary/10 hover:bg-primary/20 text-primary border-primary/20 transition-colors"
                      data-testid={`badge-skill-${idx}-${skillIdx}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

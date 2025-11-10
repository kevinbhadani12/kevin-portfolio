import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Code, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function LookingFor() {
  const opportunities = [
    {
      icon: Briefcase,
      title: "Web Scraping Projects",
      description: "Available for freelance web scraping projects using Python, Scrapy, Selenium, Playwright, and Puppeteer. Specialized in extracting data from e-commerce, social media, and complex websites with anti-scraping measures.",
      tags: ["Python", "Scrapy", "Selenium", "Playwright", "Beautiful Soup", "Data Extraction"]
    },
    {
      icon: Zap,
      title: "n8n Workflow Automation",
      description: "Looking to build intelligent automation workflows using n8n. I can help create agentic AI systems, integrate multiple APIs, and orchestrate complex business processes with custom n8n nodes.",
      tags: ["n8n", "Workflow Automation", "AI Agents", "API Integration", "Process Orchestration"]
    },
    {
      icon: Code,
      title: "Python Automation Solutions",
      description: "Open to Python-based automation projects including data pipelines, ETL processes, API development with FastAPI, and automation scripts for business process optimization.",
      tags: ["Python", "FastAPI", "ETL Pipelines", "Data Processing", "Pandas", "NumPy"]
    },
    {
      icon: Users,
      title: "Data Engineering & APIs",
      description: "Interested in data engineering projects involving MongoDB, MySQL, PostgreSQL, AWS services, and building scalable APIs for data extraction and integration.",
      tags: ["MongoDB", "PostgreSQL", "AWS Lambda", "AWS S3", "API Development", "Data Engineering"]
    }
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-background to-muted/20" id="looking-for">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Available For
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Open to freelance projects, new opportunities, and collaborations in web scraping, automation, and data engineering
          </p>
          <Button 
            size="lg"
            className="rounded-full px-6 py-6 text-base font-medium shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95 gap-2"
            asChild
          >
            <a href="mailto:kevinbhadani2121@gmail.com">
              <Mail className="w-5 h-5" />
              Let's Discuss Your Project
            </a>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {opportunities.map((opportunity, idx) => {
            const Icon = opportunity.icon;
            return (
              <Card 
                key={idx} 
                className="group relative overflow-hidden border-2 border-border/50 hover:border-primary/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 p-6 md:p-8"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-300 pointer-events-none" />
                
                <div className="relative">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 md:p-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {opportunity.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                    {opportunity.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {opportunity.tags.map((tag, tagIdx) => (
                      <Badge 
                        key={tagIdx} 
                        variant="secondary" 
                        className="text-xs md:text-sm px-3 py-1 bg-primary/10 hover:bg-primary/20 text-primary border-primary/20 transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}


import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Workflow, Smartphone } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  icon: typeof Code2;
}

const projects: Project[] = [
  {
    title: "Review Aggregation API",
    description: "Built a unified API that collects and aggregates customer reviews from multiple platforms including Trustpilot, Google Maps, and Yelp, providing businesses with comprehensive feedback analytics.",
    technologies: ["Python", "FastAPI", "BeautifulSoup", "Selenium", "MongoDB"],
    icon: Code2
  },
  {
    title: "E-commerce Affiliate Automation",
    description: "Developed an automated system that scrapes product data from e-commerce platforms and automatically posts to Pinterest for affiliate marketing, optimizing conversion and engagement.",
    technologies: ["Python", "Scrapy", "Pinterest API", "AWS S3", "Scheduling"],
    icon: Workflow
  },
  {
    title: "Multi-Store App Scraping",
    description: "Created a mobile app scraping solution using Appium to extract real-time offers, prices, and customer reviews from popular apps like PhonePe and Zomato for competitive analysis.",
    technologies: ["Python", "Appium", "Mobile Automation", "Data Processing"],
    icon: Smartphone
  }
];

export default function Projects() {
  return (
    <section className="py-16 md:py-24 bg-background" id="projects">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center" data-testid="text-projects-heading">
          Key Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => {
            const Icon = project.icon;
            return (
              <Card 
                key={idx} 
                className="p-6 hover-elevate active-elevate-2 cursor-pointer transition-transform hover:scale-[1.02]"
                onClick={() => console.log(`Project ${project.title} clicked`)}
                data-testid={`card-project-${idx}`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3" data-testid={`text-project-title-${idx}`}>
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-4" data-testid={`text-project-description-${idx}`}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIdx) => (
                    <Badge 
                      key={techIdx} 
                      variant="secondary" 
                      className="text-xs"
                      data-testid={`badge-tech-${idx}-${techIdx}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

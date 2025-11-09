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
    <section className="py-16 md:py-24 bg-background" id="skills">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center" data-testid="text-skills-heading">
          Technical Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <Card 
              key={idx} 
              className="p-6 hover-elevate"
              data-testid={`card-skill-${idx}`}
            >
              <h3 className="text-xl font-semibold mb-4" data-testid={`text-skill-category-${idx}`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <Badge 
                    key={skillIdx} 
                    variant="secondary"
                    data-testid={`badge-skill-${idx}-${skillIdx}`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

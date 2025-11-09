import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  projects?: {
    title: string;
    description: string;
  }[];
}

const experiences: ExperienceItem[] = [
  {
    role: "Associate Software Engineer",
    company: "MeasureOne",
    location: "Ahmedabad, India",
    period: "Feb 2025 – Present",
    description: [
      "Developed automation workflows using Node.js and Puppeteer for login-based scraping on insurance, education, and employment platforms",
      "Automated document and policy downloads, reducing manual work and improving data verification",
      "Applied advanced methods to bypass Cloudflare and CAPTCHA protections for smooth automation",
      "Designed scalable automation pipelines for high accuracy and efficiency"
    ]
  },
  {
    role: "Python Developer",
    company: "X-Byte Enterprise Crawling",
    location: "Ahmedabad, India",
    period: "Dec 2021 - Feb 2025",
    description: [
      "Built and automated web scraping solutions to extract data daily, weekly, and monthly from various sources including e-commerce, travel, social media, and government sites (Twitter, Amazon, Zomato, TikTok, Expedia, LinkedIn, Facebook, Google Maps)",
      "Delivered data in structured formats (CSV, XLSX, JSON) and integrated with cloud platforms like AWS S3 for seamless storage and access",
      "Created and maintained APIs for data extraction and integration, improving operational efficiency and enabling real-time data delivery",
      "Built and automated scraping pipelines, integrating APIs and frameworks to streamline data collection, reduce manual intervention, and enhance reporting accuracy",
      "Developed strategies to overcome anti-scraping measures (CAPTCHA, IP blocking, dynamic content) ensuring continuous data extraction",
      "Optimized scraping performance using rotating proxies, headless browsers, and asynchronous processing to improve speed and data accuracy"
    ],
    projects: [
      {
        title: "Review Aggregation API",
        description: "Collected reviews from Trustpilot, Google Maps, and Yelp into a unified API"
      },
      {
        title: "E-commerce Affiliate Automation",
        description: "Scraped products and auto-posted to Pinterest for affiliate marketing"
      },
      {
        title: "Multi-Store App Scraping",
        description: "Extracted offers, prices, and reviews from apps like PhonePe and Zomato using Appium"
      }
    ]
  }
];

export default function Experience() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-background to-muted/20" id="experience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent" data-testid="text-experience-heading">
            Professional Experience
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Building automation solutions and data engineering systems
          </p>
        </div>
        
        <div className="space-y-6 md:space-y-8">
          {experiences.map((exp, idx) => (
            <Card 
              key={idx} 
              className="group relative overflow-hidden border-2 border-border/50 hover:border-primary/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 p-6 md:p-8"
              data-testid={`card-experience-${idx}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:via-primary/5 group-hover:to-accent/5 transition-all duration-300 pointer-events-none" />
              
              <div className="relative grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-6 md:gap-8">
                <div className="space-y-3 lg:border-r lg:border-border/50 lg:pr-6">
                  <div className="text-sm md:text-base text-muted-foreground font-medium" data-testid={`text-period-${idx}`}>
                    {exp.period}
                  </div>
                  <Badge variant="outline" className="text-xs md:text-sm" data-testid={`badge-location-${idx}`}>
                    {exp.location}
                  </Badge>
                </div>
                
                <div className="space-y-4 md:space-y-5">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-primary transition-colors" data-testid={`text-role-${idx}`}>
                      {exp.role}
                    </h3>
                    <p className="text-base md:text-lg text-muted-foreground font-medium" data-testid={`text-company-${idx}`}>
                      {exp.company}
                    </p>
                  </div>
                  
                  <ul className="space-y-2 md:space-y-3">
                    {exp.description.map((item, itemIdx) => (
                      <li 
                        key={itemIdx} 
                        className="text-sm md:text-base leading-relaxed flex gap-3 text-muted-foreground"
                        data-testid={`text-description-${idx}-${itemIdx}`}
                      >
                        <span className="text-primary mt-1.5 flex-shrink-0">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {exp.projects && (
                    <div className="mt-6 pt-6 border-t border-border/50 space-y-3">
                      <h4 className="font-bold text-base md:text-lg text-foreground">Key Projects:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {exp.projects.map((project, projIdx) => (
                          <div key={projIdx} className="p-3 rounded-lg bg-primary/5 border border-primary/10" data-testid={`text-project-${idx}-${projIdx}`}>
                            <p className="font-semibold text-sm md:text-base mb-1">{project.title}</p>
                            <p className="text-xs md:text-sm text-muted-foreground">{project.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

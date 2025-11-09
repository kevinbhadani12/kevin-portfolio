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
    <section className="py-16 md:py-24 bg-muted/30" id="experience">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center" data-testid="text-experience-heading">
          Professional Experience
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <Card key={idx} className="p-8" data-testid={`card-experience-${idx}`}>
              <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-6">
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground font-medium" data-testid={`text-period-${idx}`}>
                    {exp.period}
                  </div>
                  <Badge variant="outline" data-testid={`badge-location-${idx}`}>
                    {exp.location}
                  </Badge>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-semibold mb-1" data-testid={`text-role-${idx}`}>
                      {exp.role}
                    </h3>
                    <p className="text-lg text-muted-foreground" data-testid={`text-company-${idx}`}>
                      {exp.company}
                    </p>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.description.map((item, itemIdx) => (
                      <li 
                        key={itemIdx} 
                        className="text-base leading-relaxed flex gap-2"
                        data-testid={`text-description-${idx}-${itemIdx}`}
                      >
                        <span className="text-primary mt-1.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {exp.projects && (
                    <div className="mt-6 pt-6 border-t space-y-3">
                      <h4 className="font-semibold text-lg">Key Projects:</h4>
                      {exp.projects.map((project, projIdx) => (
                        <div key={projIdx} className="space-y-1" data-testid={`text-project-${idx}-${projIdx}`}>
                          <p className="font-medium">{project.title}</p>
                          <p className="text-sm text-muted-foreground">{project.description}</p>
                        </div>
                      ))}
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

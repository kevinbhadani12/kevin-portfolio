import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Workflow, Smartphone, Bot, Zap } from "lucide-react";

interface Project {
  title: string;
  description: string;
  detailedDescription: string;
  keyFeatures: string[];
  technologies: string[];
  icon: typeof Code2;
  image?: string;
}

const projects: Project[] = [
  {
    title: "Intelligent Workflow Automation with n8n",
    description: "Built a comprehensive agentic AI system using n8n to automate complex business workflows, integrating multiple APIs, databases, and AI services for intelligent decision-making and task execution.",
    detailedDescription: "Developed an advanced workflow automation platform using n8n that orchestrates complex business processes with AI-powered decision making. The system integrates multiple data sources, APIs, and AI services to create intelligent automation workflows. Implemented custom n8n nodes for specialized integrations, error handling, and retry mechanisms. The solution handles data transformation, conditional logic, and multi-step processes with real-time monitoring and alerting capabilities. Features include dynamic workflow execution, API rate limiting, and comprehensive logging for audit trails.",
    keyFeatures: [
      "Agentic AI workflows with intelligent decision-making",
      "Multi-service integration (APIs, databases, AI models)",
      "Custom n8n nodes for specialized integrations",
      "Real-time monitoring and alerting",
      "Error handling and retry mechanisms",
      "Dynamic workflow execution based on conditions"
    ],
    technologies: ["n8n", "Node.js", "API Integration", "Workflow Automation", "AI Agents"],
    icon: Bot,
    image: "/projects/n8n-workflow.jpg"
  },
  {
    title: "AI-Powered Data Processing Pipeline",
    description: "Created an intelligent data processing system using n8n that automatically extracts, transforms, and enriches data from multiple sources using AI agents for classification and analysis.",
    detailedDescription: "Built an end-to-end data processing pipeline using n8n that leverages AI agents for intelligent data extraction and enrichment. The system automatically collects data from various sources including web APIs, databases, and file systems. AI agents classify, validate, and enrich the data before storing it in structured formats. The workflow includes data quality checks, duplicate detection, and automated reporting. The solution significantly reduces manual data processing time while improving accuracy through AI-powered validation.",
    keyFeatures: [
      "AI-powered data classification and enrichment",
      "Multi-source data collection and aggregation",
      "Automated data quality validation",
      "Duplicate detection and deduplication",
      "Structured data storage and reporting",
      "Real-time processing with scheduled batch jobs"
    ],
    technologies: ["n8n", "Python", "AI/ML", "Data Processing", "ETL Pipelines"],
    icon: Zap,
    image: "/projects/ai-pipeline.jpg"
  },
  {
    title: "Review Aggregation API",
    description: "Built a unified API that collects and aggregates customer reviews from multiple platforms including Trustpilot, Google Maps, and Yelp, providing businesses with comprehensive feedback analytics.",
    detailedDescription: "Developed a scalable REST API using FastAPI that aggregates customer reviews from multiple sources including Trustpilot, Google Maps, and Yelp. The system handles authentication, rate limiting, and data normalization to provide businesses with unified feedback analytics. Implemented web scraping using BeautifulSoup and Selenium for dynamic content extraction, with MongoDB for efficient data storage and retrieval. The API supports real-time data fetching and scheduled batch processing for comprehensive review collection.",
    keyFeatures: [
      "Multi-platform review aggregation (Trustpilot, Google Maps, Yelp)",
      "Real-time and scheduled data collection",
      "Data normalization and deduplication",
      "RESTful API with rate limiting",
      "MongoDB for scalable data storage"
    ],
    technologies: ["Python", "FastAPI", "BeautifulSoup", "Selenium", "MongoDB"],
    icon: Code2,
    image: "/projects/review-api.jpg"
  },
  {
    title: "E-commerce Affiliate Automation",
    description: "Developed an automated system that scrapes product data from e-commerce platforms and automatically posts to Pinterest for affiliate marketing, optimizing conversion and engagement.",
    detailedDescription: "Created an end-to-end automation workflow that extracts product information from e-commerce platforms and automatically publishes optimized content to Pinterest for affiliate marketing. The system uses Scrapy for efficient web scraping, processes product images and descriptions, and integrates with Pinterest API for automated posting. Implemented AWS S3 for image storage and a scheduling system to maintain consistent posting frequency. The solution significantly improved affiliate conversion rates through optimized content and timing.",
    keyFeatures: [
      "Automated product data extraction from e-commerce sites",
      "Pinterest API integration for automated posting",
      "Image processing and optimization",
      "AWS S3 for scalable image storage",
      "Intelligent scheduling system"
    ],
    technologies: ["Python", "Scrapy", "Pinterest API", "AWS S3", "Scheduling"],
    icon: Workflow,
    image: "/projects/ecommerce-automation.jpg"
  },
  {
    title: "Multi-Store App Scraping",
    description: "Created a mobile app scraping solution using Appium to extract real-time offers, prices, and customer reviews from popular apps like PhonePe and Zomato for competitive analysis.",
    detailedDescription: "Built a comprehensive mobile app scraping solution using Appium to extract real-time data from popular mobile applications including PhonePe and Zomato. The system automates app interactions to collect offers, prices, promotions, and customer reviews for competitive market analysis. Implemented robust error handling, data validation, and processing pipelines to ensure data quality. The solution supports multiple Android devices and handles dynamic content loading, providing businesses with valuable competitive intelligence.",
    keyFeatures: [
      "Mobile app automation using Appium",
      "Real-time data extraction from multiple apps",
      "Dynamic content handling",
      "Data validation and processing pipelines",
      "Multi-device support"
    ],
    technologies: ["Python", "Appium", "Mobile Automation", "Data Processing"],
    icon: Smartphone,
    image: "/projects/app-scraping.jpg"
  }
];

export default function Projects() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-background to-muted/20" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent" data-testid="text-projects-heading">
            Key Projects
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative automation solutions and data engineering projects
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, idx) => {
            const Icon = project.icon;
            return (
              <Card 
                key={idx} 
                className="group relative overflow-hidden border-2 border-border/50 hover:border-primary/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1"
                data-testid={`card-project-${idx}`}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:via-primary/5 group-hover:to-accent/5 transition-all duration-300 pointer-events-none" />
                
                <div className="relative p-6 md:p-8">
                  {/* Project Image */}
                  {project.image && (
                    <div className="mb-6 rounded-lg overflow-hidden border border-border/50 group-hover:border-primary/50 transition-colors">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    </div>
                  )}
                  
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 md:p-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-primary transition-colors" data-testid={`text-project-title-${idx}`}>
                        {project.title}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed" data-testid={`text-project-description-${idx}`}>
                        {project.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Detailed Overview */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">Overview</h4>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {project.detailedDescription}
                    </p>
                  </div>
                  
                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">Key Features</h4>
                    <ul className="space-y-2">
                      {project.keyFeatures.map((feature, featureIdx) => (
                        <li key={featureIdx} className="flex items-start gap-3 text-sm md:text-base text-muted-foreground">
                          <span className="text-primary mt-1 flex-shrink-0">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIdx) => (
                        <Badge 
                          key={techIdx} 
                          variant="secondary" 
                          className="text-xs md:text-sm px-3 py-1 bg-primary/10 hover:bg-primary/20 text-primary border-primary/20 transition-colors"
                          data-testid={`badge-tech-${idx}-${techIdx}`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
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

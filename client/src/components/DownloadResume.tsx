import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function DownloadResume() {
  const { toast } = useToast();

  const handleDownload = () => {
    // In a real implementation, this would download an actual PDF resume
    // For now, we'll show a notification
    toast({
      title: "Resume Download",
      description: "Add your resume PDF to enable downloading. Check CUSTOMIZE.md for instructions.",
    });
    
    // TODO: Replace with actual resume download
    // const link = document.createElement('a');
    // link.href = '/path/to/resume.pdf';
    // link.download = 'Kevin_Bhadani_Resume.pdf';
    // link.click();
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
          <FileText className="w-10 h-10 text-primary" />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-semibold mb-4" data-testid="text-resume-heading">
          Want to Learn More?
        </h2>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Download my resume for a detailed overview of my experience, skills, and achievements 
          in automation engineering and web scraping.
        </p>
        
        <Button 
          size="lg" 
          className="gap-2 text-lg px-8"
          onClick={handleDownload}
          data-testid="button-download-resume"
        >
          <Download className="w-5 h-5" />
          Download Resume (PDF)
        </Button>
        
        <p className="text-sm text-muted-foreground mt-6">
          Updated November 2025
        </p>
      </div>
    </section>
  );
}

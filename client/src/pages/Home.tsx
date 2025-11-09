import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechnicalSkills from "@/components/TechnicalSkills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import DownloadResume from "@/components/DownloadResume";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <TechnicalSkills />
        <Experience />
        <Projects />
        <Education />
        <DownloadResume />
        <ContactForm />
        <Footer />
      </main>
    </div>
  );
}

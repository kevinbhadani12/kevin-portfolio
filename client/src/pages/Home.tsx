import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechnicalSkills from "@/components/TechnicalSkills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import LookingFor from "@/components/LookingFor";
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
        <LookingFor />
        <Footer />
      </main>
    </div>
  );
}

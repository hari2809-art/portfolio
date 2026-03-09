import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import GitHubStats from "@/components/GitHubStats";
import ExperienceSection from "@/components/ExperienceSection";
import CertificationsSection from "@/components/CertificationsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import CustomCursor from "@/components/CustomCursor";
import IntroSequence from "@/components/IntroSequence";
import AudioSystem from "@/components/AudioSystem";
import Terminal from "@/components/Terminal";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <IntroSequence />
      <AudioSystem />
      <Terminal />
      <CustomCursor />
      <Navbar />
      <ParticlesBackground />
      
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <GitHubStats />
      <ExperienceSection />
      <CertificationsSection />
      <EducationSection />
      <ContactSection />

      <footer className="py-12 text-center text-stone-500 text-sm glass">
        <p>© {new Date().getFullYear()} Harinath Gurram • Built with Next.js, Three.js & Passion</p>
      </footer>
    </main>
  );
}

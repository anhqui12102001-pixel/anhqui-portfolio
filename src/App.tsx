import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { MarqueeSection } from './sections/MarqueeSection';
import { AboutSection } from './sections/AboutSection';
import { ServicesSection } from './sections/ServicesSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { EnglishTeacherHeroOrbit } from './sections/EnglishTeacherHeroOrbit';
import { ContactButton } from './components/ContactButton';
import { ArrowUp, Mail, GitBranch, Globe } from 'lucide-react';

export const App: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className="w-full min-h-screen bg-[#0C0C0C] text-[#D7E2EA] font-kanit"
      style={{ overflowX: 'clip' }}
    >
      {/* Floating Glassmorphism Navbar */}
      <Navbar />

      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Marquee Section */}
      <MarqueeSection />

      {/* 3. About Section */}
      <AboutSection />

      {/* 4. Services Section */}
      <ServicesSection />

      {/* 5. Projects Section */}
      <ProjectsSection />

      {/* English Teacher Portfolio Hero Orbit */}
      <EnglishTeacherHeroOrbit />

      {/* Footer / Contact Section */}
      <footer
        id="contact"
        className="w-full bg-[#0C0C0C] border-t border-neutral-800/80 px-6 md:px-12 py-14 flex flex-col sm:flex-row items-center justify-between gap-8"
      >
        <div className="flex flex-col gap-2 text-center sm:text-left">
          <p className="text-2xl font-bold uppercase tracking-wide text-[#D7E2EA]">
            Lý Anh Qui &mdash; Front-End Developer
          </p>
          <p className="text-sm font-light text-[#D7E2EA]/60 max-w-md">
            Sẵn sàng hợp tác trong các dự án phát triển Website, Creative Frontend và giải pháp số hiện đại.
          </p>
          <div className="flex items-center justify-center sm:justify-start gap-4 mt-2 text-[#D7E2EA]/80">
            <span className="flex items-center gap-1.5 text-xs tracking-wider uppercase font-medium hover:text-white transition-colors">
              <Mail className="w-4 h-4 text-[#B600A8]" /> anhqui.dev@gmail.com
            </span>
            <span className="flex items-center gap-1.5 text-xs tracking-wider uppercase font-medium hover:text-white transition-colors">
              <GitBranch className="w-4 h-4 text-[#7621B0]" /> github.com/anhqui
            </span>
            <span className="flex items-center gap-1.5 text-xs tracking-wider uppercase font-medium hover:text-white transition-colors">
              <Globe className="w-4 h-4 text-[#BE4C00]" /> TP. Hồ Chí Minh
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <ContactButton label="Kết nối với tôi" />
          <button
            onClick={scrollToTop}
            aria-label="Lên đầu trang"
            className="w-12 h-12 rounded-full border border-[#D7E2EA]/30 flex items-center justify-center text-[#D7E2EA] hover:border-[#D7E2EA] hover:bg-white/5 transition-all duration-300"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default App;

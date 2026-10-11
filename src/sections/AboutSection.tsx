import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { AnimatedText } from '../components/AnimatedText';
import { ContactButton } from '../components/ContactButton';
import { User, Briefcase, GraduationCap } from 'lucide-react';

const BIO_TEXT =
  "Lập trình viên Web năng động, có nền tảng vững chắc về HTML5/CSS3, JavaScript, PHP và MySQL.    Có kinh nghiệm thực tế trong việc phát triển giao diện người dùng (UI/UX), thiết kế hệ thống e-commerce trên WordPress, tối ưu SEO và xây dựng các ứng dụng web tương tác. Tỉ mỉ, sáng tạo và luôn hướng tới việc tối ưu trải nghiệm người dùng trên đa nền tảng.";

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-24 sm:py-32 overflow-hidden select-none"
    >
      {/* Decorative 3D elements in corners */}
      {/* Top-left: Moon icon */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none z-10 opacity-75">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="Moon 3D icon"
            className="w-full h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)]"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Bottom-left: 3D object */}
      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px] pointer-events-none z-10 opacity-75">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="3D object"
            className="w-full h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)]"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Top-right: Lego icon */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none z-10 opacity-75">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="Lego 3D icon"
            className="w-full h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)]"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Bottom-right: 3D group */}
      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px] pointer-events-none z-10 opacity-75">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="3D group element"
            className="w-full h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)]"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col items-center justify-center z-20 max-w-4xl text-center w-full">
        {/* Section Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 11vw, 150px)' }}
          >
            Về tôi
          </h2>
        </FadeIn>

        {/* Profile Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl mt-10 mb-12 px-4">
          <FadeIn delay={0.1} y={20}>
            <div className="flex flex-col items-center text-center p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-md hover:border-neutral-700 transition-all">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-3">
                <User className="w-5 h-5" />
              </div>
              <span className="text-xs uppercase tracking-wider text-[#D7E2EA]/50 font-medium mb-1">
                Họ và tên
              </span>
              <p className="text-base sm:text-lg font-bold text-white tracking-wide">
                Lý Anh Qui
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} y={20}>
            <div className="flex flex-col items-center text-center p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-md hover:border-neutral-700 transition-all">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-3">
                <Briefcase className="w-5 h-5" />
              </div>
              <span className="text-xs uppercase tracking-wider text-[#D7E2EA]/50 font-medium mb-1">
                Vị trí / Chuyên môn
              </span>
              <p className="text-sm sm:text-base font-semibold text-white tracking-wide">
                Front-End Developer / Web Developer
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3} y={20}>
            <div className="flex flex-col items-center text-center p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-md hover:border-neutral-700 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-3">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="text-xs uppercase tracking-wider text-[#D7E2EA]/50 font-medium mb-1">
                Học vấn
              </span>
              <p className="text-xs sm:text-sm font-medium text-white/90 leading-snug">
                Phát triển Website &mdash; Cao đẳng FPT Polytechnic TP.HCM
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Animated paragraph (Bio) */}
        <div className="max-w-[680px] mx-auto px-4">
          <AnimatedText
            text={BIO_TEXT}
            className="text-[#D7E2EA] font-medium text-center leading-relaxed text-base sm:text-lg md:text-xl"
          />
        </div>

        {/* Gap between text block and button */}
        <div className="h-12 sm:h-16" />

        {/* Contact button */}
        <FadeIn delay={0.4} y={20}>
          <ContactButton label="Trò chuyện ngay" />
        </FadeIn>
      </div>
    </section>
  );
};

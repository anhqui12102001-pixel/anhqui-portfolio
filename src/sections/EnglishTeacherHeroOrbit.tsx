import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Code2,
  Cpu,
  Layers,
  Database,
  Palette,
  Terminal,
  GitBranch,
  Globe,
  Zap,
} from 'lucide-react';
import { FadeIn } from '../components/FadeIn';

interface OrbitItemProps {
  size: number;
  rotation: number;
  duration?: number;
  children: React.ReactNode;
}

const HeroOrbit: React.FC<OrbitItemProps> = ({
  size,
  rotation,
  duration = 20,
  children,
}) => {
  return (
    <div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <motion.div
        className="w-full h-full"
        style={{ transform: `rotate(${rotation}deg)` }}
        animate={{ rotate: [rotation, rotation + 360] }}
        transition={{
          repeat: Infinity,
          duration,
          ease: 'linear',
        }}
      >
        <div
          className="inline-flex pointer-events-auto"
          style={{
            transform: `rotate(-${rotation}deg)`,
          }}
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export const EnglishTeacherHeroOrbit: React.FC = () => {
  return (
    <section className="relative w-full py-28 sm:py-36 bg-[#0C0C0C] text-[#D7E2EA] overflow-hidden select-none border-t border-neutral-800/60">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-cyan-600/15 via-blue-600/15 to-purple-600/15 rounded-full blur-[130px] pointer-events-none" />

      {/* Orbit Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Ring 1 - 340px */}
        <div className="absolute w-[340px] h-[340px] rounded-full border border-white/[0.06] shadow-[0_0_40px_rgba(255,255,255,0.02)]" />
        {/* Ring 2 - 540px */}
        <div className="absolute w-[540px] h-[540px] rounded-full border border-dashed border-white/[0.08]" />
        {/* Ring 3 - 740px */}
        <div className="absolute w-[740px] h-[740px] rounded-full border border-white/[0.05]" />
        {/* Ring 4 - 940px */}
        <div className="absolute w-[940px] h-[940px] rounded-full border border-dashed border-white/[0.04]" />
      </div>

      {/* Animated Orbiting Elements - Ring 2 (size 540) */}
      <HeroOrbit size={540} rotation={30} duration={32}>
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/85 backdrop-blur-md border border-cyan-500/40 text-xs font-medium text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.25)] hover:scale-110 transition-transform cursor-default">
          <Code2 className="w-3.5 h-3.5 text-cyan-400" />
          <span>React.js & TS</span>
        </div>
      </HeroOrbit>

      <HeroOrbit size={540} rotation={210} duration={32}>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900/85 backdrop-blur-md border border-sky-500/40 text-xs font-medium text-sky-300 shadow-[0_0_15px_rgba(56,189,248,0.2)] hover:scale-110 transition-transform cursor-default">
          <Palette className="w-3.5 h-3.5 text-sky-400" />
          <span>Tailwind CSS</span>
        </div>
      </HeroOrbit>

      {/* Animated Orbiting Elements - Ring 3 (size 740) */}
      <HeroOrbit size={740} rotation={-50} duration={45}>
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900/85 backdrop-blur-md border border-purple-500/40 text-xs font-medium text-purple-300 shadow-[0_0_20px_rgba(168,85,247,0.2)] hover:scale-105 transition-transform cursor-default">
          <Zap className="w-4 h-4 text-purple-400" />
          <span>Framer Motion & UI/UX</span>
        </div>
      </HeroOrbit>

      <HeroOrbit size={740} rotation={130} duration={45}>
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900/85 backdrop-blur-md border border-amber-500/40 text-xs font-medium text-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:scale-105 transition-transform cursor-default">
          <Terminal className="w-4 h-4 text-amber-400" />
          <span>JavaScript (ES6+)</span>
        </div>
      </HeroOrbit>

      <HeroOrbit size={740} rotation={240} duration={45}>
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/85 backdrop-blur-md border border-emerald-500/40 text-xs font-medium text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:scale-110 transition-transform cursor-default">
          <Database className="w-3.5 h-3.5 text-emerald-400" />
          <span>PHP & MySQL</span>
        </div>
      </HeroOrbit>

      {/* Animated Orbiting Elements - Ring 4 (size 940) */}
      <HeroOrbit size={940} rotation={40} duration={58}>
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/90 backdrop-blur-md border border-orange-500/40 text-xs font-medium text-orange-300 shadow-xl hover:scale-110 transition-transform cursor-default">
          <GitBranch className="w-3.5 h-3.5 text-orange-400" />
          <span>Git & GitHub</span>
        </div>
      </HeroOrbit>

      <HeroOrbit size={940} rotation={-130} duration={58}>
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/90 backdrop-blur-md border border-blue-500/40 text-xs font-medium text-blue-300 shadow-xl hover:scale-110 transition-transform cursor-default">
          <Globe className="w-3.5 h-3.5 text-blue-400" />
          <span>WordPress & CMS</span>
        </div>
      </HeroOrbit>

      <HeroOrbit size={940} rotation={190} duration={58}>
        <div className="w-10 h-10 rounded-full bg-neutral-900/90 border border-pink-500/40 flex items-center justify-center text-pink-400 shadow-[0_0_15px_rgba(236,72,153,0.3)] hover:scale-110 transition-transform cursor-default" title="Figma UI Design">
          <Layers className="w-5 h-5" />
        </div>
      </HeroOrbit>

      <HeroOrbit size={940} rotation={-45} duration={58}>
        <div className="w-9 h-9 rounded-full bg-neutral-900/90 border border-yellow-400/40 flex items-center justify-center text-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.3)] hover:scale-110 transition-transform cursor-default" title="Clean Code & Performance">
          <Cpu className="w-4 h-4" />
        </div>
      </HeroOrbit>

      {/* Center Content */}
      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center flex flex-col items-center">
        <FadeIn delay={0} y={20}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-medium uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-cyan-400" />
            <span>Modern Web Ecosystem</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.15} y={30}>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-none text-white mb-6">
            Tech Stack <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">& Tools</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.3} y={30}>
          <p className="text-sm sm:text-base md:text-lg text-[#D7E2EA]/70 font-light max-w-xl mx-auto leading-relaxed mb-8">
            Bộ công cụ và công nghệ hiện đại tôi sử dụng để kiến tạo các sản phẩm web chuẩn hiệu năng, giao diện sống động và trải nghiệm người dùng tối ưu.
          </p>
        </FadeIn>

        <FadeIn delay={0.45} y={30}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-white text-black font-semibold uppercase text-xs sm:text-sm tracking-wider hover:bg-[#D7E2EA] transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
            >
              Khám phá dự án
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-white/20 text-[#D7E2EA] font-semibold uppercase text-xs sm:text-sm tracking-wider hover:bg-white/5 hover:border-white/40 transition-all duration-300"
            >
              Liên hệ hợp tác
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default EnglishTeacherHeroOrbit;

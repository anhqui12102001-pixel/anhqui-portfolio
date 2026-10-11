import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Giới thiệu', href: '#about' },
    { label: 'Kỹ năng', href: '#services' },
    { label: 'Dự án', href: '#projects' },
  ];

  return (
    <header className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 max-w-[95vw] pointer-events-none">
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`pointer-events-auto flex items-center gap-1 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full transition-all duration-300 ${
          scrolled
            ? 'bg-neutral-950/80 backdrop-blur-xl border border-white/15 shadow-[0_12px_36px_rgba(0,0,0,0.6),0_0_20px_rgba(255,255,255,0.03)]'
            : 'bg-neutral-900/60 backdrop-blur-lg border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.4)]'
        }`}
      >
        {/* Brand / Logo */}
        <a
          href="#"
          className="flex items-center gap-2 pl-2 pr-2.5 py-1 rounded-full hover:bg-white/5 transition-all duration-200 group"
        >
          <div className="relative flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-tr from-cyan-500 via-blue-500 to-purple-600 text-white font-black text-[11px] shadow-sm tracking-tighter">
            AQ
            <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 border border-[#0C0C0C]" />
            </span>
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#D7E2EA] group-hover:text-white hidden md:inline-block">
            Anh Qui
          </span>
        </a>

        {/* Subtle Divider */}
        <div className="w-px h-4 bg-white/15 mx-0.5 sm:mx-1" />

        {/* Nav Links */}
        <div className="flex items-center gap-0.5 sm:gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-2.5 sm:px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-medium uppercase tracking-wider text-[#D7E2EA]/75 hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Subtle Divider */}
        <div className="w-px h-4 bg-white/15 mx-0.5 sm:mx-1" />

        {/* CTA Button */}
        <a
          href="#contact"
          className="group flex items-center gap-1.5 pl-3 pr-2.5 py-1.5 rounded-full bg-white text-black text-[11px] sm:text-xs font-bold uppercase tracking-wider hover:bg-[#D7E2EA] transition-all duration-200 shadow-[0_0_18px_rgba(255,255,255,0.25)] hover:shadow-[0_0_24px_rgba(255,255,255,0.4)]"
        >
          <span>Liên hệ</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </motion.nav>
    </header>
  );
};

export default Navbar;

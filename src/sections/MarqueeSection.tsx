import React, { useRef, useState, useEffect } from 'react';

const ROW_1_IMAGES = [
  'https://motionsites.org/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.org/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.org/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.org/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.org/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.org/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.org/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.org/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.org/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.org/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.org/assets/hero-designpro-preview-D8c5_een.gif',
];

const ROW_2_IMAGES = [
  'https://motionsites.org/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.org/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.org/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.org/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.org/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.org/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.org/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.org/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.org/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.org/assets/hero-celestia-preview-0yO3jXO8.gif',
];

// Tripled lists
const ROW_1_TRIPLED = [...ROW_1_IMAGES, ...ROW_1_IMAGES, ...ROW_1_IMAGES];
const ROW_2_TRIPLED = [...ROW_2_IMAGES, ...ROW_2_IMAGES, ...ROW_2_IMAGES];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setScrollOffset(offset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initialize

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const row1Transform = `translateX(${scrollOffset - 200}px)`;
  const row2Transform = `translateX(${-(scrollOffset - 200)}px)`;

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden select-none"
    >
      <div className="flex flex-col gap-3">
        {/* Row 1: Moves RIGHT on scroll */}
        <div
          className="flex gap-3 will-change-transform"
          style={{
            transform: row1Transform,
            willChange: 'transform',
          }}
        >
          {ROW_1_TRIPLED.map((src, i) => (
            <div
              key={`row1-${i}`}
              className="w-[420px] h-[270px] flex-shrink-0 overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800/60 shadow-lg"
            >
              <img
                src={src}
                alt={`Motion preview 1-${i}`}
                loading="lazy"
                className="w-full h-full object-cover rounded-2xl pointer-events-none"
              />
            </div>
          ))}
        </div>

        {/* Row 2: Moves LEFT on scroll */}
        <div
          className="flex gap-3 will-change-transform"
          style={{
            transform: row2Transform,
            willChange: 'transform',
          }}
        >
          {ROW_2_TRIPLED.map((src, i) => (
            <div
              key={`row2-${i}`}
              className="w-[420px] h-[270px] flex-shrink-0 overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800/60 shadow-lg"
            >
              <img
                src={src}
                alt={`Motion preview 2-${i}`}
                loading="lazy"
                className="w-full h-full object-cover rounded-2xl pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

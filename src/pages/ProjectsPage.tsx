import React, { useMemo } from 'react';
import { ScrollReveal } from '../components/ui/ScrollReveal';

interface ProjectsPageProps {
  onNavigate: (page: string) => void;
}

const numberedImages = [
  '/images/all/1.png',
  '/images/all/2.png',
  '/images/all/3.png',
  '/images/all/4.png',
  '/images/all/5.jpg',
  '/images/all/6.jpg',
  '/images/all/7.png',
  '/images/all/8.jpeg',
  '/images/all/9.jpeg',
  '/images/all/10.png',
  '/images/all/11.jpeg',
  '/images/all/12.jpeg',
  '/images/all/13.png',
];

const unnumberedImages = [
  '/images/all/ChatGPT Image Sep 12, 2026, 08_41_45 PM.png',
  '/images/all/Screenshot 2026-09-12 230031.png',
  '/images/all/Screenshot 2026-09-12 230045.png',
  '/images/all/Screenshot 2026-09-12 230057.png',
  '/images/all/Screenshot 2026-09-12 230123.png',
  '/images/all/WhatsApp Image 2026-08-06 at 11.25.47 (2).jpeg',
  '/images/all/WhatsApp Image 2026-08-06 at 11.25.48 (1).jpeg',
  '/images/all/WhatsApp Image 2026-08-06 at 11.25.49.jpeg',
  '/images/all/WhatsApp Image 2026-08-06 at 11.25.50 (2).jpeg',
  '/images/all/WhatsApp Image 2026-08-06 at 11.25.52 (1).jpeg',
  '/images/all/WhatsApp Image 2026-08-06 at 11.25.52 (2).jpeg',
  '/images/all/WhatsApp Image 2026-08-06 at 11.25.53.jpeg',
  '/images/all/WhatsApp Image 2026-08-06 at 11.25.54 (1).jpeg',
  '/images/all/WhatsApp Image 2026-08-06 at 11.25.54 (3).jpeg',
  '/images/all/WhatsApp Image 2026-08-06 at 11.25.54.jpeg',
  '/images/all/WhatsApp Image 2026-08-06 at 11.25.55.jpeg',
  '/images/all/WhatsApp Image 2026-08-06 at 11.25.56 (1).jpeg',
  '/images/all/WhatsApp Image 2026-08-06 at 11.25.57 (3).jpeg',
  '/images/all/WhatsApp Image 2026-08-06 at 11.25.58.jpeg',
  '/images/all/luury_villa.png',
  '/images/all/rakprop.png',
  '/images/all/resedential.png',
];

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate }) => {
  const allImages = useMemo(() => {
    return [...numberedImages, ...shuffleArray(unnumberedImages)];
  }, []);

  const col1 = useMemo(() => allImages.filter((_, i) => i % 4 === 0), [allImages]);
  const col2 = useMemo(() => allImages.filter((_, i) => i % 4 === 1), [allImages]);
  const col3 = useMemo(() => allImages.filter((_, i) => i % 4 === 2), [allImages]);
  const col4 = useMemo(() => allImages.filter((_, i) => i % 4 === 3), [allImages]);

  return (
    <div className="w-full bg-[#f8fafc] text-[#0F172A] min-h-screen">
      <main className="flex-grow w-full">
        {/* Page Hero Header */}
        <section className="bg-[#0F172A] relative py-24 px-margin-edge border-b border-outline-variant overflow-hidden text-white">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
          <div className="relative z-10 max-w-[1440px] mx-auto">
            <ScrollReveal>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2.5 h-2.5 bg-[#E90046]"></div>
                <span className="font-technical-data text-xs text-white/70 uppercase tracking-[0.2em] font-semibold">
                  ALMASRA GALLERY
                </span>
              </div>
              <h1 className="font-display-lg text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4 tracking-tight break-words">
                Our Work in Focus
              </h1>
              <p className="font-body-lg text-white/80 max-w-2xl leading-relaxed">
                Explore a visual collection of our MEP contracting work across the UAE, showcasing the quality, precision and technical expertise behind every project.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Original Ratio 4-Column Layout (1..13 left-to-right, then randomized unnumbered images) */}
        <section className="px-margin-edge py-16 max-w-[1440px] mx-auto">
          {/* Desktop 4-Column Masonry (Original Ratios) */}
          <div className="hidden lg:grid grid-cols-4 gap-6 items-start">
            <div className="flex flex-col gap-6">
              {col1.map((imgSrc, idx) => (
                <ScrollReveal key={`${imgSrc}-c1-${idx}`} delay={0.05}>
                  <div className="relative group cursor-pointer border border-outline-variant bg-white shadow-sm hover:border-[#E90046] transition-all overflow-hidden">
                    <img
                      className="w-full h-auto block group-hover:scale-105 transition-transform duration-700"
                      alt="Almasra Project Delivery"
                      src={imgSrc}
                    />
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <div className="flex flex-col gap-6">
              {col2.map((imgSrc, idx) => (
                <ScrollReveal key={`${imgSrc}-c2-${idx}`} delay={0.1}>
                  <div className="relative group cursor-pointer border border-outline-variant bg-white shadow-sm hover:border-[#E90046] transition-all overflow-hidden">
                    <img
                      className="w-full h-auto block group-hover:scale-105 transition-transform duration-700"
                      alt="Almasra Project Delivery"
                      src={imgSrc}
                    />
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <div className="flex flex-col gap-6">
              {col3.map((imgSrc, idx) => (
                <ScrollReveal key={`${imgSrc}-c3-${idx}`} delay={0.15}>
                  <div className="relative group cursor-pointer border border-outline-variant bg-white shadow-sm hover:border-[#E90046] transition-all overflow-hidden">
                    <img
                      className="w-full h-auto block group-hover:scale-105 transition-transform duration-700"
                      alt="Almasra Project Delivery"
                      src={imgSrc}
                    />
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <div className="flex flex-col gap-6">
              {col4.map((imgSrc, idx) => (
                <ScrollReveal key={`${imgSrc}-c4-${idx}`} delay={0.2}>
                  <div className="relative group cursor-pointer border border-outline-variant bg-white shadow-sm hover:border-[#E90046] transition-all overflow-hidden">
                    <img
                      className="w-full h-auto block group-hover:scale-105 transition-transform duration-700"
                      alt="Almasra Project Delivery"
                      src={imgSrc}
                    />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Mobile & Tablet Layout */}
          <div className="grid lg:hidden grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-start">
            {allImages.map((imgSrc, idx) => (
              <ScrollReveal key={`mob-${imgSrc}-${idx}`} delay={(idx % 2) * 0.05}>
                <div className="relative group cursor-pointer border border-outline-variant bg-white shadow-sm hover:border-[#E90046] transition-all overflow-hidden">
                  <img
                    className="w-full h-auto block group-hover:scale-105 transition-transform duration-700"
                    alt={`Almasra Project Delivery ${idx + 1}`}
                    src={imgSrc}
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-[#0F172A] text-white py-20 px-margin-edge relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <ScrollReveal>
              <div className="max-w-2xl">
                <h3 className="font-headline-lg text-3xl md:text-4xl text-white font-bold mb-4">
                  Have a New Project to Engineer?
                </h3>
                <p className="font-body-lg text-white/80 leading-relaxed">
                  Connect with Almasra Technical Services to discuss custom MEP contracting, authority approvals and project timelines.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div>
                <button
                  className="bg-[#E90046] text-white font-label-caps text-label-caps px-10 py-5 uppercase tracking-widest hover:bg-[#C4003B] transition-colors flex items-center whitespace-nowrap cursor-pointer shadow-lg font-bold"
                  onClick={() => onNavigate('contact')}
                >
                  Discuss Your Project
                  <span className="material-symbols-outlined ml-2">arrow_forward</span>
                </button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </div>
  );
};

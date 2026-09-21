import React, { useState } from 'react';
import { ScrollReveal } from '../components/ui/ScrollReveal';

interface ProjectsPageProps {
  onNavigate: (page: string) => void;
}

interface ProjectData {
  id: string;
  number: string;
  name: string;
  developer: string;
  location: string;
  category: string;
  scope: string;
  description?: string;
  images: string[];
}

const projectsList: ProjectData[] = [
  {
    id: 'cape-hayat',
    number: '01',
    name: 'CAPE HAYAT RESIDENTIAL PROJECT',
    developer: 'RAK Properties',
    location: 'Mina Al Arab, Ras Al Khaimah',
    category: 'Luxury Residential Development',
    scope: 'Electrical & Plumbing Works',
    images: [
      '/images/rakk/rakprop.webp',
      '/images/rakk/ChatGPT Image Sep 14, 2026, 09_49_45 AM.webp',
      '/images/rakk/ChatGPT Image Sep 14, 2026, 09_49_50 AM.webp',
      '/images/rakk/ChatGPT Image Sep 14, 2026, 09_49_54 AM.webp',
      '/images/rakk/ChatGPT Image Sep 14, 2026, 09_49_58 AM.webp',
      '/images/rakk/ChatGPT Image Sep 14, 2026, 09_50_28 AM.webp',
      '/images/rakk/ChatGPT Image Sep 14, 2026, 09_54_53 AM.webp',
      '/images/rakk/ChatGPT Image Sep 14, 2026, 09_55_15 AM.webp',
    ],
  },
  {
    id: 'quattro-delmar',
    number: '02',
    name: 'QUATTRO DELMAR',
    developer: 'RAK Properties',
    location: 'Mina Al Arab, Ras Al Khaimah',
    category: '1BR, 2BR, 3BR, Townhouses, Garden Houses & Penthouse',
    scope: 'Complete Drainage & Water Supply Works',
    images: [
      '/images/QUATTRO DELMAR/1.webp',
      '/images/QUATTRO DELMAR/12.webp',
      '/images/QUATTRO DELMAR/8.webp',
      '/images/QUATTRO DELMAR/9.webp',
      '/images/QUATTRO DELMAR/WhatsApp Image 2026-08-06 at 11.25.4.webp',
      '/images/QUATTRO DELMAR/WhatsApp Image 2026-08-06 at 11.25.47 (2).webp',
      '/images/QUATTRO DELMAR/WhatsApp Image 2026-08-06 at 11.25.48 (1).webp',
      '/images/QUATTRO DELMAR/WhatsApp Image 2026-08-06 at 11.25.49.webp',
      '/images/QUATTRO DELMAR/WhatsApp Image 2026-08-06 at 11.25.50 (2).webp',
      '/images/QUATTRO DELMAR/WhatsApp Image 2026-08-06 at 11.25.51.webp',
      '/images/QUATTRO DELMAR/WhatsApp Image 2026-08-06 at 11.25.55.webp',
      '/images/QUATTRO DELMAR/WhatsApp Image 2026-08-06 at 11.25.57 (3).webp',
    ],
  },
  {
    id: 'jebel-ali-village',
    number: '03',
    name: 'JEBEL ALI VILLAGE',
    developer: 'Nakheel Properties',
    location: 'Jebel Ali, Dubai',
    category: '3 BHK, 4 BHK & 5 BHK Luxury Villas & Townhouses',
    scope: 'Electrical & Plumbing Works',
    images: [
      '/images/Nakheel/luxury townhouse.webp',
      '/images/Nakheel/1.webp',
      '/images/Nakheel/4.webp',
      '/images/Nakheel/10.webp',
      '/images/Nakheel/13.webp',
      '/images/Nakheel/ChatGPT Image Sep 12, 2026, 08_41_45 PM.webp',
      '/images/Nakheel/ChatGPT Image Sep 14, 2026, 10_02_33 AM.webp',
      '/images/Nakheel/ChatGPT Image Sep 14, 2026, 11_42_06 AM.webp',
    ],
  },
  {
    id: 'opal-gardens',
    number: '04',
    name: 'DISTRICT 11 OPAL GARDENS',
    developer: 'Nakheel Properties',
    location: 'Mohammed Bin Rashid City (MBR City), Dubai',
    category: 'Semi-Detached & Independent Luxury Villas',
    scope: 'Electrical & Plumbing Works',
    images: [
      '/images/opal/opalgardens1.webp',
      '/images/opal/opalgardens2.webp',
      '/images/opal/opalgardens3.webp',
      '/images/opal/3.webp',
      '/images/opal/Screenshot 2026-09-12 230045.webp',
      '/images/opal/Screenshot 2026-09-12 230057.webp',
      '/images/opal/Screenshot 2026-09-12 230123.webp',
      '/images/opal/ChatGPT Image Sep 14, 2026, 11_57_02 AM.webp',
      '/images/opal/ChatGPT Image Sep 14, 2026, 11_59_31 AM.webp',
      '/images/opal/ChatGPT Image Sep 14, 2026, 12_01_31 PM.webp',
      '/images/opal/ChatGPT Image Sep 17, 2026, 03_16_46 PM.webp',
      '/images/opal/ChatGPT Image Sep 17, 2026, 03_16_55 PM.webp',
    ],
  },
  {
    id: 'masa-residences',
    number: '05',
    name: 'MASA RESIDENCES',
    developer: 'Durar Group',
    location: 'Al Marjan Island, Ras Al Khaimah',
    category: 'Luxury Island Residential Development',
    scope: 'Slab Conduiting Works',
    images: [
      '/images/durar/ChatGPT Image Sep 14, 2026, 12_16_04 PM.webp',
      '/images/durar/ChatGPT Image Sep 14, 2026, 12_18_05 PM.png',
      '/images/durar/ChatGPT Image Sep 14, 2026, 12_18_10 PM.webp',
      '/images/durar/ChatGPT Image Sep 17, 2026, 08_06_34 PM.png',
    ],
  },
];

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate }) => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

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
                  PROJECT PORTFOLIO
                </span>
              </div>
              <h1 className="font-display-lg text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4 tracking-tight break-words">
                Our Work in Focus
              </h1>
              <p className="font-body-lg text-white/80 max-w-2xl leading-relaxed">
                Detailed showcase of our premier MEP contracting projects across the UAE, featuring project descriptions, scope of works, and technical execution photos.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Project-Wise Section */}
        <section className="px-margin-edge py-12 max-w-[1440px] mx-auto space-y-12">
          {projectsList.map((project) => (
            <ScrollReveal key={project.id}>
              {/* Single Unified Project Section Card */}
              <div className="bg-white border border-slate-200 shadow-md overflow-hidden relative group border-t-4 border-t-[#E90046] p-6 md:p-8">
                {/* Header & Meta Row */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="bg-[#0F172A] text-white font-mono text-xs px-2.5 py-1 font-bold tracking-wider uppercase">
                      PROJECT {project.number}
                    </span>
                    <span className="text-[#E90046] font-semibold text-xs uppercase tracking-wider bg-rose-50 px-2.5 py-1 border border-rose-100">
                      {project.developer}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">location_on</span>
                    {project.location}
                  </span>
                </div>

                {/* Project Title */}
                <h2 className="font-headline-lg text-xl sm:text-2xl md:text-3xl font-bold text-[#0F172A] tracking-tight mb-2">
                  {project.name}
                </h2>

                {/* Subtitle / Scope Badge Row */}
                <div className="flex flex-wrap gap-2 text-xs font-technical-data mb-4">
                  <span className="bg-slate-100 text-slate-700 px-2.5 py-1 font-semibold border border-slate-200">
                    Category: {project.category}
                  </span>
                  <span className="bg-slate-900 text-white px-2.5 py-1 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-[#E90046] rounded-full"></span>
                    Scope: {project.scope}
                  </span>
                </div>

                {/* Optional Project Description */}
                {project.description && (
                  <p className="text-sm font-body-md text-slate-600 mb-6 leading-relaxed max-w-4xl">
                    {project.description}
                  </p>
                )}

                {/* Project Image Gallery Grid */}
                <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
                  {project.images.map((imgSrc, idx) => {
                    const imgAlt = `${project.name} - ${project.scope} execution photo ${idx + 1}`;
                    return (
                      <div
                        key={idx}
                        onClick={() => setSelectedImage({ src: imgSrc, alt: imgAlt })}
                        className="group/img relative cursor-pointer overflow-hidden bg-slate-900 border border-slate-200 aspect-[4/3] shadow-sm hover:border-[#E90046] transition-all duration-300"
                      >
                        <img
                          src={imgSrc}
                          alt={imgAlt}
                          className="w-full h-full object-cover group-hover/img:scale-108 transition-transform duration-500 opacity-95 group-hover/img:opacity-100"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end p-3">
                          <span className="text-white text-xs font-semibold flex items-center gap-1.5 bg-[#E90046] px-2.5 py-1 shadow">
                            <span className="material-symbols-outlined text-sm">zoom_in</span>
                            Zoom Photo
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </section>

        {/* Lightbox Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl max-h-[90vh] w-full flex items-center justify-center">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[85vh] object-contain border border-white/20 shadow-2xl"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-10 right-0 text-white hover:text-[#E90046] transition-colors flex items-center gap-1 text-sm font-semibold"
              >
                <span className="material-symbols-outlined text-2xl">close</span>
                Close
              </button>
            </div>
          </div>
        )}

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


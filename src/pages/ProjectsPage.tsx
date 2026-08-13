import React, { useState } from 'react';
import { ScrollReveal } from '../components/ui/ScrollReveal';

interface ProjectsPageProps {
  onNavigate: (page: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Residential', 'Commercial', 'Industrial', 'Electrical', 'Plumbing', 'HVAC', 'Fire & Safety'];

  const projects = [
    {
      id: 1,
      title: 'Cape Hyatt Luxury Penthouses',
      category: 'Residential',
      location: 'Mina Al Arab, Ras Al Khaimah',
      developer: 'RAK Properties',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2j1mFSBb0jAdZQGEaR54Uu9ujp0MxElOvFRnfzrJlZQmtaNUdfouhlkWcsxKTBieQdjNkLeG-bcWthDFqtaVWcFLYJa5laoeH9sFcHzbQ0OSKJElEh3yPfo-8ObRR7DTdJ3KCaiJM81dkL1UTwd6lQDJW-IdcIIcxrJvmCYQciKgpUS6Jno695Afop1Ax6m5vrO0KulpijGBw609_us1E-FEzETXn2dJha3rOtVvEaIauyr6mIpjNNw',
      aspect: 'aspect-[16/11]',
      badge: 'RAK Properties | MEP Infrastructure'
    },
    {
      id: 2,
      title: 'Jebel Ali Village Townhouses',
      category: 'Residential',
      location: 'Jebel Ali, Dubai',
      developer: 'Nakheel',
      image: '/resedential.png',
      aspect: 'aspect-[3/4]',
      badge: 'Nakheel | Townhouse MEP'
    },
    {
      id: 3,
      title: 'Opal Gardens Luxury Villas',
      category: 'Residential',
      location: 'District 11, Dubai',
      developer: 'Meydan',
      image: '/luury_villa.png',
      aspect: 'aspect-[4/5]',
      badge: 'Meydan | Luxury Villa MEP'
    },
    {
      id: 4,
      title: 'Al Madaen Industrial Complex',
      category: 'Industrial',
      location: 'Sharjah, UAE',
      developer: 'Industrial Zone',
      image: '/industrial.png',
      aspect: 'aspect-[3/5]',
      badge: 'Sharjah | Industrial MEP'
    },
    {
      id: 5,
      title: 'Commercial Business Tower',
      category: 'Commercial',
      location: 'Business Bay, Dubai',
      developer: 'Commercial Zone',
      image: '/commercial.png',
      aspect: 'aspect-[16/9]',
      badge: 'Business Bay | Electrical & HVAC'
    },
    {
      id: 6,
      title: '3D MEP Technical Engineering Systems',
      category: 'Electrical',
      location: 'Dubai, UAE',
      developer: 'Technical Bureau',
      image: '/3d.png',
      aspect: 'aspect-[4/3]',
      badge: 'Dubai | 3D MEP Infrastructure'
    },
    {
      id: 7,
      title: 'HVAC Chiller Plant Infrastructure',
      category: 'HVAC',
      location: 'Dubai South',
      developer: 'Logistics Park',
      image: '/S1.png',
      aspect: 'aspect-square',
      badge: 'Dubai South | Chiller Plant'
    },
    {
      id: 8,
      title: 'Main Distribution Control Center',
      category: 'Electrical',
      location: 'Abu Dhabi, UAE',
      developer: 'Infrastructure',
      image: '/S2.png',
      aspect: 'aspect-[4/3]',
      badge: 'Abu Dhabi | Power Distribution'
    },
    {
      id: 9,
      title: 'Civil Defence Fire Safety Systems',
      category: 'Fire & Safety',
      location: 'Sharjah, UAE',
      developer: 'Civil Defence Approved',
      image: '/S3.png',
      aspect: 'aspect-[3/4]',
      badge: 'Sharjah | Fire Suppression'
    },
    {
      id: 10,
      title: 'Hydro-Pneumatic Pump Room Station',
      category: 'Plumbing',
      location: 'Dubai, UAE',
      developer: 'Residential Complex',
      image: '/S4.png',
      aspect: 'aspect-[16/10]',
      badge: 'Dubai | Pump Room Engineering'
    }
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

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
                  ALMASRA PROJECT PORTFOLIO
                </span>
              </div>
              <h1 className="font-display-lg text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4 tracking-tight break-words">
                Featured Implementations
              </h1>
              <p className="font-body-lg text-white/80 max-w-2xl leading-relaxed">
                A curated engineering record of verified MEP contracting projects delivered across the UAE with precision, safety, and operational excellence.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Filter Navigation Bar */}
        <section className="bg-white border-b border-outline-variant sticky top-0 z-40 px-margin-edge py-4 shadow-sm">
          <div className="max-w-[1440px] mx-auto flex flex-wrap gap-2.5 justify-center md:justify-start font-technical-data text-xs">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 border transition-all cursor-pointer font-semibold uppercase tracking-wider ${
                  activeFilter === filter
                    ? 'bg-[#0F172A] text-white border-[#0F172A] shadow-sm'
                    : 'bg-[#f8fafc] text-on-surface-variant border-outline-variant hover:border-[#E90046] hover:text-[#0F172A]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </section>

        {/* Dynamic Architectural Masonry Layout */}
        <section className="px-4 md:px-margin-edge py-16 max-w-[1440px] mx-auto">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredProjects.map((project, idx) => (
              <ScrollReveal key={project.id} delay={(idx % 3) * 0.1}>
                <div
                  className="break-inside-avoid mb-6 relative group cursor-pointer border border-outline-variant bg-white shadow-sm hover:border-[#E90046] transition-all overflow-hidden"
                >
                  <div className={`w-full ${project.aspect} relative overflow-hidden bg-surface-container-low`}>
                    <img
                      className="w-full h-full object-cover block group-hover:scale-105 transition-transform duration-700"
                      alt={project.title}
                      src={project.image}
                    />
                    <div className="absolute top-3 left-3 bg-[#0F172A]/90 text-white px-2.5 py-1 font-technical-data text-[10px] uppercase font-semibold tracking-wider border border-white/10 z-10">
                      {project.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <span className="font-technical-data text-xs text-[#E90046] font-bold block mb-1">
                      {project.badge}
                    </span>
                    <h3 className="font-headline-md text-xl text-[#0F172A] font-bold mb-3 leading-snug">
                      {project.title}
                    </h3>
                    <div className="pt-3 border-t border-outline-variant/60 flex items-center justify-between text-xs text-on-surface-variant font-technical-data">
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-xs text-[#E90046]">location_on</span>
                        <span>{project.location}</span>
                      </div>
                      {project.developer && (
                        <span className="text-[#64748B]">{project.developer}</span>
                      )}
                    </div>
                  </div>
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
                  Connect with Almasra Technical Services to discuss custom MEP contracting, authority approvals, and project timelines.
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

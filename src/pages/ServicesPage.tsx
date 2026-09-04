import React, { useState, useEffect, useRef } from 'react';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeScopeTab, setActiveScopeTab] = useState(0);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

  const servicesList = [
    {
      id: '01',
      tag: 'SERVICE 01',
      title: 'ELECTRICAL SERVICES',
      description: 'Power distribution, lighting systems, LV installations, testing, commissioning, and preventive maintenance.',
      features: [
        'Power Distribution Networks',
        'LV Installations & Containment',
        'Indoor & Outdoor Lighting Systems',
        'Testing, Commissioning & Maintenance',
      ],
      image: '/images/electrical service.png',
      alt: 'Electrical Power Distribution & Systems',
    },
    {
      id: '02',
      tag: 'SERVICE 02',
      title: 'PLUMBING SERVICES',
      description: 'Water supply, drainage networks, sanitary installations, water filtration systems, and pump room engineering.',
      features: [
        'Domestic Water Supply Networks',
        'Sanitary & Storm Drainage Networks',
        'Central Water Filtration Systems',
        'Pump Room & Hydro-Pneumatic Systems',
      ],
      image: '/images/plumbing service.png',
      alt: 'Plumbing & Drainage Engineering',
    },
    {
      id: '03',
      tag: 'SERVICE 03',
      title: 'FIRE & LOW CURRENT SYSTEMS',
      description: 'Fire alarm, emergency lighting, access control, and Building Management Systems (BMS) for safe buildings.',
      features: [
        'Addressable Fire Alarm Systems',
        'Emergency Lighting & Central Battery',
        'Access Control & CCTV Surveillance',
        'Building Management Systems (BMS)',
      ],
      image: '/images/fire service.png',
      alt: 'Fire Alarm & Low Current Systems',
    },
    {
      id: '04',
      tag: 'SERVICE 04',
      title: 'HVAC SOLUTIONS',
      description: 'Installation, maintenance, repair, ventilation, and air conditioning systems for optimal performance.',
      features: [
        'Central Air Conditioning Systems',
        'Ventilation & Exhaust Installations',
        'System Maintenance & Emergency Repair',
        'Ductwork & Air Distribution Solutions',
      ],
      image: '/images/hvac service.png',
      alt: 'HVAC Solutions & Climate Control',
    },
  ];

  const scopeDetails = [
    {
      id: '01',
      name: 'Electrical Services',
      tag: '01 ELECTRICAL',
      scopeItems: [
        'High & Low Voltage Power Distribution (MDB, SMDB & DB Panel Assemblies)',
        'Indoor & Outdoor Architectural, Task & Security Lighting Systems',
        'Cable Trays, Trunking, Ladder Containment & Busbar Riser Systems',
        'Earthing, Lightning Protection & Surge Suppression Installations',
        'DEWA / SEWA / ADDC Authority Approvals, Load Audit, Testing & Commissioning',
      ],
      completedProjects: [
        {
          name: 'Cape Hyatt Luxury Residences',
          location: 'Mina Al Arab, Ras Al Khaimah',
          developer: 'RAK Properties',
          type: 'Residential MEP & Power Distribution',
          image: '/images/rakprop.png',
        },
        {
          name: 'Jebel Ali Village Community',
          location: 'Jebel Ali, Dubai',
          developer: 'Nakheel',
          type: 'Townhouse Electrical Infrastructure',
          image: '/images/luxury townhouse.png',
        },
      ],
    },
    {
      id: '02',
      name: 'Plumbing Services',
      tag: '02 PLUMBING',
      scopeItems: [
        'Domestic Cold & Hot Water Distribution Networks (PPR, PEX & HDPE Piping)',
        'Sanitary Soil, Waste, Vent & Rainwater Drainage Piping Infrastructure',
        'Hydro-Pneumatic Water Booster & Transfer Pump Room Assemblies',
        'Central Water Filtration, Softening & Solar Water Heating Systems',
        'Authority Inspections, Hydrostatic Pressure Testing & Water Chlorination',
      ],
      completedProjects: [
        {
          name: 'Opal Gardens Villa Estate',
          location: 'District 11, Dubai',
          developer: 'Meydan',
          type: 'Luxury Villa Plumbing & Booster Systems',
          image: '/images/opalgardens1.jpg',
        },
        {
          name: 'Al Madaen Commercial Tower',
          location: 'Sharjah, UAE',
          developer: 'Private Developer',
          type: 'Commercial Plumbing & Drainage Network',
          image: '/commercial.png',
        },
      ],
    },
    {
      id: '03',
      name: 'Fire & Low Current',
      tag: '03 FIRE & LOW CURRENT',
      scopeItems: [
        'Civil Defence Approved Addressable Fire Alarm & Voice Evacuation Networks',
        'Automatic Wet/Dry Pipe Fire Sprinklers & Fire Hose Reel Stations',
        'Clean Agent Gas Suppression (FM200 / Novec) for IT Server Rooms',
        'CCTV Security Surveillance, Access Control & Automatic Gate Barriers',
        'Building Management Systems (BMS) & Central Emergency Battery Systems',
      ],
      completedProjects: [
        {
          name: 'Dubai Logistics Hub Facility',
          location: 'Dubai South, UAE',
          developer: 'Industrial Zone',
          type: 'Fire Suppression & Alarm Systems',
          image: '/industrial.png',
        },
        {
          name: 'Cape Hyatt Towers',
          location: 'Mina Al Arab, RAK',
          developer: 'RAK Properties',
          type: 'BMS, Fire Safety & Low Current Integration',
          image: '/images/rakprop.png',
        },
      ],
    },
    {
      id: '04',
      name: 'HVAC Solutions',
      tag: '04 HVAC',
      scopeItems: [
        'Central Chilled Water Plants, FAHU & AHU Air Handling Installations',
        'Galvanized Iron (GI) & Pre-Insulated (PI) Ductwork Fabrication & Installation',
        'VRF / VRV Smart Inverter Multi-Split Air Conditioning Systems',
        'Commercial Kitchen Ventilation, Ecology Units & Smoke Extract Fans',
        'Air & Water Balancing (TAB), Commissioning & Indoor Air Quality Audits',
      ],
      completedProjects: [
        {
          name: 'Jebel Ali Community Estate',
          location: 'Jebel Ali, Dubai',
          developer: 'Nakheel',
          type: 'HVAC & Ductwork Infrastructure',
          image: '/resedential.png',
        },
        {
          name: 'Opal Luxury Residences',
          location: 'District 11, Dubai',
          developer: 'Meydan',
          type: 'Smart VRF Climate Control',
          image: '/images/opalgardens2.jpg',
        },
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      serviceRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.55 && rect.bottom >= window.innerHeight * 0.25) {
            setActiveIndex(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeScope = scopeDetails[activeScopeTab];

  return (
    <div className="w-full bg-[#f8fafc] min-h-screen text-[#0F172A]">
      <main className="relative z-10 w-full">
        {/* Page Hero Header */}
        <section className="w-full bg-[#0F172A] text-white py-24 px-margin-edge border-b border-outline-variant relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"></div>
          <div className="max-w-[1440px] mx-auto relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2.5 h-2.5 bg-[#E90046]"></div>
              <span className="font-technical-data text-xs text-white/70 uppercase tracking-[0.2em] font-semibold">
                ALMASRA ENGINEERING CAPABILITIES
              </span>
            </div>
            <h1 className="font-display-lg text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 tracking-tight break-words">
              Our Core Services
            </h1>
            <p className="font-body-lg text-white/80 max-w-3xl leading-relaxed">
              Specialized Mechanical, Electrical, Plumbing, Fire Safety, and HVAC engineering solutions delivered across commercial, residential, and industrial developments in the UAE.
            </p>
          </div>
        </section>

        {/* Sticky Pinned Image Showcase Section */}
        <section className="w-full py-12 px-margin-edge bg-[#f8fafc] border-b border-outline-variant">
          <div className="max-w-[1440px] mx-auto relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

              {/* Left Column: All Service Text Blocks (7 Cols) */}
              <div className="lg:col-span-7 flex flex-col">
                {servicesList.map((service, index) => (
                  <div
                    key={service.id}
                    ref={(el) => { serviceRefs.current[index] = el; }}
                    id={`service-${service.id}`}
                    className="min-h-[70vh] flex flex-col justify-center py-16 border-b border-outline-variant/40 last:border-none"
                  >
                    {/* Step Tag */}
                    <div className="font-technical-data text-xs md:text-sm text-[#94A3B8] font-bold uppercase tracking-[0.25em] mb-4">
                      {service.tag}
                    </div>

                    {/* Service Title */}
                    <h2 className="font-display-lg text-3xl md:text-4xl lg:text-5xl text-[#0F172A] font-black leading-[1.1] tracking-tight uppercase mb-6">
                      {service.title}
                    </h2>

                    {/* Service Narrative Description */}
                    <p className="font-body-md text-base md:text-lg text-[#475569] leading-relaxed max-w-2xl mb-8">
                      {service.description}
                    </p>

                    {/* Scope / Key Features Checklist */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-outline-variant/60">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2.5 font-technical-data text-xs text-[#334155]">
                          <div className="w-1.5 h-1.5 bg-[#E90046] mt-1.5 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Mobile Inline Image */}
                    <div className="block lg:hidden mt-8">
                      <div className="relative overflow-hidden bg-white border border-outline-variant shadow-sm aspect-[4/3] w-full p-2">
                        <img
                          src={service.image}
                          alt={service.alt}
                          className="w-full h-full object-contain object-center"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column: Sticky Pinned Image Frame (5 Cols) */}
              <div className="hidden lg:block lg:col-span-5 sticky top-[calc(50vh-240px)] self-start py-6">
                <div className="relative group overflow-hidden bg-white border border-outline-variant shadow-lg aspect-[1/1.12] h-[480px] w-full p-4">
                  {servicesList.map((service, index) => (
                    <img
                      key={service.id}
                      src={service.image}
                      alt={service.alt}
                      className={`absolute inset-0 w-full h-full object-contain object-center p-4 transition-opacity duration-700 ease-in-out ${index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                    />
                  ))}

                  <div className="absolute bottom-3 right-3 z-20 bg-black/70 text-white font-technical-data text-[11px] px-3.5 py-1.5 border border-white/20 backdrop-blur-sm">
                    SEC.{servicesList[activeIndex].id}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Interactive Scope of Work & Completed Projects Showcase */}
        <section className="w-full py-20 px-margin-edge bg-white border-b border-outline-variant">
          <div className="max-w-[1440px] mx-auto">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-outline-variant pb-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-[#E90046]"></div>
                  <span className="font-technical-data text-xs text-[#E90046] uppercase tracking-[0.25em] font-semibold">
                    TECHNICAL PORTFOLIO &amp; DELIVERABLES
                  </span>
                </div>
                <h2 className="font-headline-lg text-3xl md:text-4xl text-[#0F172A] font-bold tracking-tight">
                  Scope of Work &amp; Project References
                </h2>
              </div>
              <p className="font-body-md text-xs md:text-sm text-on-surface-variant max-w-md leading-relaxed">
                Detailed scope specifications and verified project deliveries for each of our engineering disciplines.
              </p>
            </div>

            {/* Service Navigation Tabs */}
            <div className="flex flex-wrap gap-2 md:gap-4 mb-12 border-b border-outline-variant pb-4">
              {scopeDetails.map((tab, idx) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveScopeTab(idx)}
                  className={`px-5 py-3 font-technical-data text-xs md:text-sm uppercase tracking-wider transition-all cursor-pointer border ${activeScopeTab === idx
                      ? 'bg-[#0F172A] text-white border-[#0F172A] font-semibold shadow-md'
                      : 'bg-[#f8fafc] text-on-surface-variant border-outline-variant hover:border-[#E90046] hover:text-[#0F172A]'
                    }`}
                >
                  <span className="text-[#E90046] mr-2 font-bold">{tab.tag.split(' ')[0]}</span>
                  {tab.name}
                </button>
              ))}
            </div>

            {/* Active Service Showcase Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start transition-opacity duration-500">

              {/* Left Side: Scope of Work Checklist (5 Cols) */}
              <div className="lg:col-span-5 bg-[#f8fafc] border border-outline-variant p-5 sm:p-6 md:p-8 relative shadow-sm">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#E90046]"></div>
                <span className="font-technical-data text-xs text-[#E90046] uppercase tracking-widest font-semibold block mb-2">
                  {activeScope.tag}
                </span>
                <h3 className="font-headline-lg text-2xl text-[#0F172A] font-bold mb-6">
                  Scope of Work
                </h3>

                <ul className="space-y-4">
                  {activeScope.scopeItems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 border-b border-outline-variant/60 pb-3 last:border-none">
                      <span className="font-technical-data text-xs text-[#E90046] font-bold mt-0.5">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className="font-body-md text-xs md:text-sm text-[#334155] leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Side: Selected Completed Projects (7 Cols) */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                <div className="flex items-center justify-between border-b border-outline-variant pb-3">
                  <span className="font-technical-data text-xs text-[#E90046] uppercase tracking-widest font-semibold">
                    SELECTED COMPLETED PROJECTS
                  </span>
                  <span className="font-technical-data text-xs text-[#64748B]">
                    {activeScope.name} Deliveries
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {activeScope.completedProjects.map((project, idx) => (
                    <div
                      key={idx}
                      className="bg-white border border-outline-variant p-4 sm:p-5 hover:border-[#E90046] transition-colors shadow-sm flex flex-col justify-between group"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden border border-outline-variant/60 mb-4 bg-surface-container-low">
                        <img
                          src={project.image}
                          alt={project.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute top-2 left-2 bg-[#0F172A]/90 text-white px-2 py-0.5 font-technical-data text-[10px] font-semibold tracking-wider">
                          PROJECT 0{idx + 1}
                        </div>
                      </div>

                      <div>
                        <span className="font-technical-data text-[11px] text-[#E90046] uppercase tracking-wider block mb-1 font-semibold">
                          {project.type}
                        </span>
                        <h4 className="font-headline-md text-base text-[#0F172A] font-bold mb-2 leading-snug">
                          {project.name}
                        </h4>
                        <div className="flex items-center gap-1.5 text-xs text-[#64748B] font-technical-data mb-1">
                          <span className="material-symbols-outlined text-xs text-[#E90046]">location_on</span>
                          <span>{project.location}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-[#64748B] font-technical-data">
                          <span className="material-symbols-outlined text-xs">domain</span>
                          <span>{project.developer}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="w-full bg-[#0F172A] text-white py-20 px-margin-edge relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h3 className="font-headline-lg text-3xl md:text-4xl text-white font-bold mb-4">
                Require Custom MEP Engineering Specifications?
              </h3>
              <p className="font-body-lg text-white/80 leading-relaxed">
                Connect with our technical design team to review project drawings, authority approvals, and bill of quantities.
              </p>
            </div>
            <div>
              <button
                className="bg-[#E90046] text-white font-label-caps text-label-caps px-10 py-5 uppercase tracking-widest hover:bg-[#C4003B] transition-colors flex items-center whitespace-nowrap cursor-pointer shadow-lg"
                onClick={() => onNavigate('contact')}
              >
                Request Technical Quote
                <span className="material-symbols-outlined ml-2">arrow_forward</span>
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

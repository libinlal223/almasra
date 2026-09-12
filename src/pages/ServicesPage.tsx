import React, { useState, useEffect, useRef } from 'react';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const [activeIndex, setActiveIndex] = useState(0);
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

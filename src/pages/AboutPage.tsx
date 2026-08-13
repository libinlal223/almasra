import React, { useState, useEffect } from 'react';
import { ScrollReveal } from '../components/ui/ScrollReveal';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const sectorImages = [
    { src: '/commercial.png', label: 'Commercial Infrastructure' },
    { src: '/industrial.png', label: 'Industrial MEP Solutions' },
    { src: '/luury_villa.png', label: 'Luxury Villa Projects' },
    { src: '/resedential.png', label: 'Residential Developments' },
  ];

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prevIndex) => (prevIndex + 1) % sectorImages.length);
    }, 3200);

    return () => clearInterval(interval);
  }, [sectorImages.length]);

  return (
    <div className="w-full">
      <main className="flex-grow w-full max-w-[1440px] mx-auto relative grid-bg">
        {/* Persistent Vertical Grid Lines (Desktop) */}
        <div className="hidden md:block absolute inset-0 pointer-events-none z-0 px-margin-edge">
          <div className="h-full w-full grid grid-cols-12 gap-0">
            <div className="col-span-1 structural-line-v"></div>
            <div className="col-span-1 structural-line-v"></div>
            <div className="col-span-1 structural-line-v"></div>
            <div className="col-span-1 structural-line-v"></div>
            <div className="col-span-1 structural-line-v"></div>
            <div className="col-span-1 structural-line-v"></div>
            <div className="col-span-1 structural-line-v"></div>
            <div className="col-span-1 structural-line-v"></div>
            <div className="col-span-1 structural-line-v"></div>
            <div className="col-span-1 structural-line-v"></div>
            <div className="col-span-1 structural-line-v"></div>
            <div className="col-span-1 structural-line-v border-r border-outline-variant"></div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative z-10 pt-32 pb-24 px-margin-edge structural-line-h border-outline-variant">
          <ScrollReveal>
            <div className="max-w-4xl">
              <p className="font-label-caps text-label-caps text-[#E90046] mb-6 tracking-widest uppercase font-semibold">
                ABOUT ALMASRA
              </p>
              <h1 className="font-display-lg text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-on-surface mb-8 font-bold leading-tight break-words">
                Engineering Trust Since Day One
              </h1>
              <div className="font-body-lg text-on-surface-variant max-w-2xl border-l-2 border-[#E90046] pl-6 py-2">
                <strong className="text-on-surface font-semibold">
                  Almasra Technical Services is a trusted UAE-based MEP contractor delivering complete Mechanical, Electrical, and Plumbing solutions for commercial, residential, industrial, and healthcare projects with an unwavering commitment to quality, safety, and reliability.
                </strong>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Section 1: Our Story with Animated Sector Showcase */}
        <section className="relative z-10 py-section-gap px-margin-edge structural-line-h border-outline-variant bg-surface-container-lowest">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter md:gap-0 h-full">
            <div className="md:col-span-7 md:pr-16 flex flex-col justify-center">
              <ScrollReveal>
                <h2 className="font-headline-lg text-headline-lg mb-8">
                  Complete MEP Solutions<br />Under One Roof
                </h2>
                <p className="font-body-md text-on-surface-variant mb-8 leading-relaxed">
                  From planning and engineering to installation, testing, commissioning, and maintenance, Almasra delivers complete Mechanical, Electrical, and Plumbing (MEP) solutions with precision and reliability. Backed by experienced engineers and skilled technicians, we provide high-quality, safe, and efficient solutions for commercial, residential, industrial, and healthcare projects across the UAE.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="border border-outline-variant p-4">
                    <span className="font-label-caps text-label-caps text-[#E90046] block mb-1">Electrical</span>
                    <span className="font-technical-data text-on-surface font-semibold text-sm">Power Distribution</span>
                  </div>
                  <div className="border border-outline-variant p-4">
                    <span className="font-label-caps text-label-caps text-[#E90046] block mb-1">Plumbing</span>
                    <span className="font-technical-data text-on-surface font-semibold text-sm">Water &amp; Drainage</span>
                  </div>
                  <div className="border border-outline-variant p-4">
                    <span className="font-label-caps text-label-caps text-[#E90046] block mb-1">Fire &amp; Low Current</span>
                    <span className="font-technical-data text-on-surface font-semibold text-sm">Fire Fighting &amp; Alarms</span>
                  </div>
                  <div className="border border-outline-variant p-4">
                    <span className="font-label-caps text-label-caps text-[#E90046] block mb-1">HVAC Solutions</span>
                    <span className="font-technical-data text-on-surface font-semibold text-sm">Air Conditioning &amp; Ventilation</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Animated Sector Image Showcase */}
            <div className="md:col-span-5 relative h-96 md:min-h-[420px] border border-outline-variant overflow-hidden mt-8 md:mt-0 bg-[#0F172A]">
              {sectorImages.map((img, index) => (
                <img
                  key={img.src}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${index === activeImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                  alt={img.label}
                  src={img.src}
                />
              ))}

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-15 pointer-events-none"></div>
              <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between">
                <span className="font-technical-data text-xs text-white bg-black/60 px-3 py-1 border border-white/20 backdrop-blur-sm font-semibold">
                  {sectorImages[activeImageIndex].label}
                </span>
                <div className="flex gap-1.5 bg-black/50 px-2 py-1 backdrop-blur-sm">
                  {sectorImages.map((_, index) => (
                    <div
                      key={index}
                      className={`h-1.5 transition-all duration-300 ${index === activeImageIndex ? 'w-4 bg-[#E90046]' : 'w-1.5 bg-white/60'
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Vision & Mission */}
        <section className="relative z-10 py-section-gap px-margin-edge structural-line-h border-outline-variant">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            <ScrollReveal delay={0.1}>
              <div className="border-l-4 border-[#E90046] bg-surface-container-low border border-outline-variant p-8 h-full">
                <h3 className="font-label-caps text-label-caps text-[#E90046] uppercase tracking-widest mb-4">Our Vision</h3>
                <p className="font-headline-md text-headline-md text-on-surface">
                  "To become the most renowned and preferred electromechanical contractors in the UAE."
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.25}>
              <div className="border-l-4 border-[#E90046] bg-surface-container-low border border-outline-variant p-8 h-full">
                <h3 className="font-label-caps text-label-caps text-[#E90046] uppercase tracking-widest mb-4">Our Mission</h3>
                <p className="font-headline-md text-headline-md text-on-surface">
                  "To give the best service, supply quality products at competitive prices and meet the needs and demands of our customers."
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Section 3: Our Motto */}
        <section className="relative z-10 py-32 px-margin-edge structural-line-h border-outline-variant bg-surface-container-lowest text-center">
          <ScrollReveal>
            <span className="font-label-caps text-label-caps text-[#E90046] uppercase tracking-widest mb-4 block font-semibold">The Almasra Standard</span>
            <h2 className="font-display-lg text-headline-lg md:text-display-lg text-on-surface italic font-light">"Excel par Excellence"</h2>
          </ScrollReveal>
        </section>

        {/* Section 4: The Almasra Difference */}
        <section className="relative z-10 py-section-gap px-margin-edge structural-line-h border-outline-variant">
          <ScrollReveal>
            <h2 className="font-headline-lg text-headline-lg mb-12">The Almasra Difference</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-gutter gap-y-12">
            <ScrollReveal delay={0.1}>
              <div className="flex gap-6 border-b border-outline-variant pb-8">
                <div className="font-technical-data text-2xl font-bold text-[#E90046] w-12 pt-1">01</div>
                <div>
                  <h4 className="font-body-lg font-bold text-on-surface mb-2">Turnkey MEP Solutions</h4>
                  <p className="font-body-md text-on-surface-variant">From planning and engineering to installation, testing, commissioning, and maintenance, we provide complete end-to-end MEP solutions under one trusted partner.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="flex gap-6 border-b border-outline-variant pb-8">
                <div className="font-technical-data text-2xl font-bold text-[#E90046] w-12 pt-1">02</div>
                <div>
                  <h4 className="font-body-lg font-bold text-on-surface mb-2">Experienced Workforce</h4>
                  <p className="font-body-md text-on-surface-variant">Our team of qualified engineers, supervisors, and skilled technicians delivers every project with precision, professionalism, and strict quality standards.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex gap-6 border-b md:border-none border-outline-variant pb-8 md:pb-0">
                <div className="font-technical-data text-2xl font-bold text-[#E90046] w-12 pt-1">03</div>
                <div>
                  <h4 className="font-body-lg font-bold text-on-surface mb-2">Quality &amp; Safety First</h4>
                  <p className="font-body-md text-on-surface-variant">Every project is executed with rigorous quality control, industry best practices, and a strong commitment to health, safety, and regulatory compliance.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="flex gap-6">
                <div className="font-technical-data text-2xl font-bold text-[#E90046] w-12 pt-1">04</div>
                <div>
                  <h4 className="font-body-lg font-bold text-on-surface mb-2">Reliable Project Delivery</h4>
                  <p className="font-body-md text-on-surface-variant">We deliver projects on schedule through efficient planning, professional execution, and continuous coordination, ensuring reliable results and complete client satisfaction.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Section 5: Our Workforce */}
        <section className="relative z-10 py-section-gap px-margin-edge structural-line-h border-outline-variant bg-[#0F172A] text-white">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-outline-variant/30">
              <div className="py-6">
                <div className="font-display-lg text-headline-lg md:text-display-lg font-bold mb-2 text-surface-bright">100+</div>
                <div className="font-label-caps text-secondary-fixed-dim uppercase tracking-widest">Total Workforce</div>
              </div>
              <div className="py-6">
                <div className="font-display-lg text-headline-lg md:text-display-lg font-bold mb-2 text-surface-bright">80+</div>
                <div className="font-label-caps text-secondary-fixed-dim uppercase tracking-widest">Skilled Technicians</div>
              </div>
              <div className="py-6">
                <div className="font-display-lg text-headline-lg md:text-display-lg font-bold mb-2 text-surface-bright">150+</div>
                <div className="font-label-caps text-secondary-fixed-dim uppercase tracking-widest">Projects Delivered</div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Section 6: Sister Companies */}
        <section className="relative z-10 py-20 px-margin-edge structural-line-h border-outline-variant bg-[#f8fafc] bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] [background-size:24px_24px]">
          <div className="max-w-[1440px] mx-auto">
            <ScrollReveal>
              <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6 border-b border-outline-variant pb-8">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 bg-[#E90046]"></div>
                    <span className="font-technical-data text-xs text-[#E90046] uppercase tracking-[0.25em] font-semibold">
                      OUR GROUP
                    </span>
                  </div>
                  <h2 className="font-headline-lg text-4xl text-on-surface font-bold tracking-tight">
                    Sister Companies
                  </h2>
                </div>
                <p className="font-body-md text-sm text-on-surface-variant max-w-lg leading-relaxed">
                  Extending regional MEP execution and specialized contracting across key Emirates through integrated group entities and regional branch networks.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              <div className="lg:col-span-7 bg-white border border-outline-variant p-8 md:p-10 flex flex-col justify-between relative group hover:border-[#E90046] transition-colors shadow-sm">
                <ScrollReveal delay={0.1}>
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-[#E90046]"></div>
                  <div>
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-outline-variant/60">
                      <span className="font-technical-data text-xs text-[#E90046] font-bold tracking-widest">
                        01 / PRIMARY ENTITY
                      </span>
                      <span className="font-technical-data text-xs text-[#64748B] uppercase tracking-wider">
                        ESTABLISHED GROUP MEMBER
                      </span>
                    </div>
                    <h3 className="font-headline-lg text-2xl md:text-3xl text-on-surface font-bold mb-4 leading-tight tracking-tight">
                      ALFAREEQ ALNADER TECHNICAL SERVICES LLC
                    </h3>
                    <p className="font-body-md text-sm text-on-surface-variant max-w-xl leading-relaxed mb-8">
                      Principal contracting entity executing multi-disciplinary Mechanical, Electrical, and Plumbing (MEP) infrastructure and technical engineering projects.
                    </p>
                  </div>
                  <div className="pt-6 border-t border-outline-variant/60 flex flex-wrap items-center justify-between gap-4 font-technical-data text-xs text-on-surface-variant">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-xs text-[#E90046]">location_on</span>
                      <span className="font-semibold text-on-surface">Dubai, UAE</span>
                    </div>
                    <span className="text-[#64748B] uppercase tracking-wider">MEP Contracting &bull; Turnkey Engineering</span>
                  </div>
                </ScrollReveal>
              </div>

              <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
                <ScrollReveal delay={0.2}>
                  <div className="flex-1 bg-white border border-outline-variant p-6 md:p-7 hover:border-[#E90046] transition-colors shadow-sm flex flex-col justify-between relative group">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-technical-data text-xs text-[#E90046] font-bold">
                          02 / REGIONAL BRANCH
                        </span>
                      </div>
                      <h3 className="font-headline-md text-lg text-on-surface font-bold mb-2 leading-snug">
                        ALFAREEQ ALNADER TECHNICAL SERVICES LLC
                      </h3>
                      <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
                        Dedicated regional operational branch expanding specialized MEP contracting capabilities across Sharjah and the Northern Emirates.
                      </p>
                    </div>
                    <div className="pt-4 mt-4 border-t border-outline-variant/60 flex items-center justify-between font-technical-data text-xs text-on-surface-variant">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-xs text-[#E90046]">location_on</span>
                        <span className="font-medium text-on-surface">Sharjah Branch, UAE</span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.3}>
                  <div className="flex-1 bg-white border border-outline-variant p-6 md:p-7 hover:border-[#E90046] transition-colors shadow-sm flex flex-col justify-between relative group">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-technical-data text-xs text-[#E90046] font-bold">
                          03 / GROUP ASSOCIATE
                        </span>
                      </div>
                      <h3 className="font-headline-md text-lg text-on-surface font-bold mb-2 leading-snug">
                        BAIT AL MULOUK TECHNICAL SERVICES
                      </h3>
                      <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
                        Specialized technical services associate delivering targeted electromechanical installations, maintenance, and technical works.
                      </p>
                    </div>
                    <div className="pt-4 mt-4 border-t border-outline-variant/60 flex items-center justify-between font-technical-data text-xs text-on-surface-variant">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-xs text-[#E90046]">location_on</span>
                        <span className="font-medium text-on-surface">Dubai, UAE</span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative z-10 py-24 px-margin-edge structural-line-h border-outline-variant flex flex-col items-center justify-center text-center">
          <ScrollReveal>
            <h2 className="font-headline-md text-headline-md mb-8">Ready to Build?</h2>
            <button
              className="bg-[#E90046] text-white font-label-caps px-8 py-4 uppercase tracking-widest hover:bg-[#C4003B] transition-colors rounded-none cursor-pointer shadow-md"
              onClick={() => onNavigate('contact')}
            >
              Contact Our Engineering Team
            </button>
          </ScrollReveal>
        </section>
      </main>
    </div>
  );
};

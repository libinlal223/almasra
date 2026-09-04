import React, { useState, useEffect } from 'react';
import { ScrollReveal } from '../components/ui/ScrollReveal';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const sectorImages = [
    { src: '/commercial.png', label: 'Commercial Infrastructure' },
    { src: '/images/industrial2.png', label: 'Industrial MEP Solutions' },
    { src: '/resedential.png', label: 'Residential Developments' },
    { src: '/luury_villa.png', label: 'Luxury Villa Projects' },
  ];

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [hoveredPanel, setHoveredPanel] = useState<string | null>(null);
  const [expandedFeatured, setExpandedFeatured] = useState<boolean>(false);

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
              <div className="font-body-lg text-on-surface-variant max-w-2xl border-l-2 border-[#E90046] pl-4 sm:pl-6 py-2">
                <strong className="text-on-surface font-semibold">
                  Almasra Technical Services is a trusted UAE-based MEP contractor delivering complete Mechanical, Electrical and Plumbing solutions for commercial, residential, industrial and healthcare projects with an unwavering commitment to quality, safety and reliability.
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
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="w-2 h-2 bg-[#E90046]"></span>
                  <span className="font-technical-data text-xs text-[#E90046] uppercase tracking-[0.25em] font-bold">
                    OUR CORE CAPABILITY
                  </span>
                </div>
                <h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-4xl text-[#0F172A] font-bold tracking-tight leading-snug mb-5">
                  Complete MEP Solutions <br className="hidden sm:inline" />
                  <span className="relative inline-block text-[#0F172A]">
                    Under One Roof
                    <span className="absolute bottom-0.5 left-0 right-0 h-0.5 bg-[#E90046]/40"></span>
                  </span>
                </h2>
                <p className="font-body-md text-on-surface-variant mb-8 leading-relaxed">
                  From planning and engineering to installation, testing, commissioning and maintenance, Almasra delivers complete Mechanical, Electrical and Plumbing (MEP) solutions with precision and reliability. Backed by experienced engineers and skilled technicians, we provide high-quality, safe and efficient solutions for commercial, residential, industrial and healthcare projects across the UAE.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="border border-outline-variant p-4 bg-white">
                    <span className="font-label-caps text-label-caps text-slate-700 block mb-1 font-semibold">Electrical</span>
                    <span className="font-technical-data text-on-surface font-semibold text-sm">Power Distribution</span>
                  </div>
                  <div className="border border-outline-variant p-4 bg-white">
                    <span className="font-label-caps text-label-caps text-slate-700 block mb-1 font-semibold">Plumbing</span>
                    <span className="font-technical-data text-on-surface font-semibold text-sm">Water &amp; Drainage</span>
                  </div>
                  <div className="border border-outline-variant p-4 bg-white">
                    <span className="font-label-caps text-label-caps text-slate-700 block mb-1 font-semibold">Fire &amp; Low Current</span>
                    <span className="font-technical-data text-on-surface font-semibold text-sm">Fire Fighting &amp; Alarms</span>
                  </div>
                  <div className="border border-outline-variant p-4 bg-white">
                    <span className="font-label-caps text-label-caps text-slate-700 block mb-1 font-semibold">HVAC Solutions</span>
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
                    <button
                      key={index}
                      type="button"
                      onClick={() => setActiveImageIndex(index)}
                      className={`h-1.5 transition-all duration-300 cursor-pointer ${index === activeImageIndex ? 'w-4 bg-[#E90046]' : 'w-1.5 bg-white/60'
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
              <div className="border-l-4 border-[#E90046] bg-surface-container-low border border-outline-variant p-5 sm:p-6 md:p-8 h-full">
                <h3 className="font-label-caps text-label-caps text-[#E90046] uppercase tracking-widest mb-4">Our Vision</h3>
                <p className="font-headline-md text-headline-md text-on-surface">
                  "To become the most renowned and preferred electromechanical contractors in the UAE."
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.25}>
              <div className="border-l-4 border-[#E90046] bg-surface-container-low border border-outline-variant p-5 sm:p-6 md:p-8 h-full">
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
                  <p className="font-body-md text-on-surface-variant">From planning and engineering to installation, testing, commissioning and maintenance, we provide complete end-to-end MEP solutions under one trusted partner.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="flex gap-6 border-b border-outline-variant pb-8">
                <div className="font-technical-data text-2xl font-bold text-[#E90046] w-12 pt-1">02</div>
                <div>
                  <h4 className="font-body-lg font-bold text-on-surface mb-2">Experienced Workforce</h4>
                  <p className="font-body-md text-on-surface-variant">Our team of qualified engineers, supervisors and skilled technicians delivers every project with precision, professionalism and strict quality standards.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex gap-6 border-b md:border-none border-outline-variant pb-8 md:pb-0">
                <div className="font-technical-data text-2xl font-bold text-[#E90046] w-12 pt-1">03</div>
                <div>
                  <h4 className="font-body-lg font-bold text-on-surface mb-2">Quality &amp; Safety First</h4>
                  <p className="font-body-md text-on-surface-variant">Every project is executed with rigorous quality control, industry best practices and a strong commitment to health, safety and regulatory compliance.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="flex gap-6">
                <div className="font-technical-data text-2xl font-bold text-[#E90046] w-12 pt-1">04</div>
                <div>
                  <h4 className="font-body-lg font-bold text-on-surface mb-2">Reliable Project Delivery</h4>
                  <p className="font-body-md text-on-surface-variant">We deliver projects on schedule through efficient planning, professional execution and continuous coordination, ensuring reliable results and complete client satisfaction.</p>
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

        {/* Section 6: Sister Companies / Group Ecosystem */}
        <section className="relative z-10 py-24 px-margin-edge border-t border-b border-slate-300/70 bg-[#FAF9F5] bg-[linear-gradient(to_right,rgba(15,23,42,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.025)_1px,transparent_1px)] [background-size:32px_32px]">
          <div className="max-w-[1440px] mx-auto">

            {/* Top Introduction Header */}
            <ScrollReveal>
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-8 border-b border-slate-300/80 gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-1.5 h-1.5 bg-[#E90046]"></span>
                    <span className="font-technical-data text-xs text-[#E90046] uppercase tracking-[0.25em] font-bold">
                      OUR GROUP
                    </span>
                    <span className="text-slate-300 font-light">|</span>
                    <span className="font-technical-data text-[11px] text-slate-500 uppercase tracking-widest font-medium">
                      ONE GROUP. FOUR SPECIALIZATIONS.
                    </span>
                  </div>
                  <h2 className="font-headline-lg text-4xl sm:text-5xl lg:text-6xl text-[#0F172A] font-bold tracking-tight">
                    Sister Companies
                  </h2>
                </div>
                <div className="max-w-xl">
                  <p className="font-body-md text-base text-slate-600 leading-relaxed">
                    Extending workforce solutions, technical manpower, MEP contracting and white-collar talent acquisition across key Emirates through integrated group entities.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Asymmetric 4-Part Composition Grid */}
            <div className="border border-slate-300/80 bg-white/70 backdrop-blur-[2px] shadow-sm">

              {/* Upper Asymmetric Grid: 58% Feature Left (7 cols) + Stacked Right (5 cols) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-300/80">

                {/* ------------------------------------------------------------- */}
                {/* COMPANY 01 — FEATURED PANEL (7 Cols) */}
                {/* ------------------------------------------------------------- */}
                <div
                  className={`lg:col-span-7 p-4 sm:p-8 lg:p-12 relative flex flex-col justify-between transition-all duration-500 cursor-pointer ${hoveredPanel === '01' ? 'bg-white z-10' : 'bg-[#FAF9F5]/40'
                    } ${hoveredPanel && hoveredPanel !== '01' ? 'opacity-60 grayscale-[20%]' : 'opacity-100'}`}
                  onMouseEnter={() => setHoveredPanel('01')}
                  onMouseLeave={() => setHoveredPanel(null)}
                >
                  {/* Subtle top accent rule */}
                  <div className="w-12 h-0.5 bg-[#E90046] mb-8"></div>

                  <div>
                    {/* Header: Number, Category Tag & Integrated Logo */}
                    <div className="flex items-start justify-between gap-6 mb-8">
                      <div>
                        <span className="font-technical-data text-5xl sm:text-6xl font-bold text-slate-300 group-hover:text-[#E90046] transition-colors block leading-none mb-3">
                          01
                        </span>
                        <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-slate-100/80 border border-slate-200/80 text-[11px] font-technical-data font-bold text-[#E90046] uppercase tracking-[0.2em]">
                          <span>FEATURED ENTITY</span>
                          <span className="text-slate-400">&bull;</span>
                          <span>MANPOWER SUPPLY</span>
                        </div>
                      </div>

                      {/* Unboxed Logo */}
                      <div className="h-16 sm:h-20 max-w-[180px] flex items-center justify-end">
                        <img
                          src="/alfareeq.jpg"
                          alt="Alfareeq Alnader Technical Services LLC Logo"
                          className="max-h-full w-auto object-contain transition-all duration-300"
                        />
                      </div>
                    </div>

                    {/* Company Title */}
                    <h3 className="font-headline-lg text-2xl sm:text-3xl lg:text-4xl text-[#0F172A] font-bold tracking-tight leading-tight mb-4">
                      ALFAREEQ ALNADER TECHNICAL SERVICES LLC
                    </h3>

                    {/* Meta Bar */}
                    <div className="flex flex-wrap items-center gap-4 text-xs font-technical-data text-slate-500 mb-6 pb-6 border-b border-slate-200/80">
                      <div className="flex items-center gap-1.5 text-slate-800 font-semibold">
                        <span className="material-symbols-outlined text-sm text-[#E90046]">location_on</span>
                        <span>Dubai, UAE</span>
                      </div>
                      <span className="text-slate-300">&bull;</span>
                      <span className="text-slate-600 font-medium uppercase tracking-wider">
                        Manpower &amp; Resource Management
                      </span>
                    </div>

                    {/* Description with Clean Read-More Expansion */}
                    <div className="relative">
                      <p className={`font-body-md text-sm sm:text-base text-slate-600 leading-relaxed transition-all duration-300 ${!expandedFeatured ? 'line-clamp-3 sm:line-clamp-4' : ''
                        }`}>
                        A Manpower Supply and Resource Management Company bridges the gap between organizations needing workforce capacity and qualified personnel seeking employment. It handles the end-to-end process of sourcing, vetting, deploying and managing human capital for client companies on a temporary, contract or permanent basis.
                      </p>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setExpandedFeatured(!expandedFeatured);
                        }}
                        className="mt-3 inline-flex items-center gap-1.5 text-xs font-technical-data font-bold text-[#E90046] hover:text-[#C4003B] uppercase tracking-wider cursor-pointer"
                      >
                        <span>{expandedFeatured ? 'Show Less Overview' : 'Read Full Overview'}</span>
                        <span className={`material-symbols-outlined text-sm transition-transform duration-300 ${expandedFeatured ? 'rotate-180' : ''}`}>
                          expand_more
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Panel Footer */}
                  <div className="mt-10 pt-6 border-t border-slate-200/80 flex items-center justify-between">
                    <span className="font-technical-data text-xs text-slate-400 uppercase tracking-widest">
                      Group Flagship Entity
                    </span>
                    <div className="flex items-center gap-2 text-xs font-technical-data uppercase tracking-widest text-[#E90046] font-semibold">
                      <span>View Entity</span>
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </div>
                  </div>
                </div>

                {/* ------------------------------------------------------------- */}
                {/* RIGHT COLUMN: STACKED PANELS (COMPANY 02 & 03) (5 Cols) */}
                {/* ------------------------------------------------------------- */}
                <div className="lg:col-span-5 divide-y divide-slate-300/80 flex flex-col">

                  {/* COMPANY 02: BAIT AL MULOUK TECHNICAL SERVICES */}
                  <div
                    className={`p-4 sm:p-7 flex-1 relative flex flex-col justify-between transition-all duration-500 cursor-pointer ${hoveredPanel === '02' ? 'bg-white z-10' : 'bg-transparent'
                      } ${hoveredPanel && hoveredPanel !== '02' ? 'opacity-60 grayscale-[20%]' : 'opacity-100'}`}
                    onMouseEnter={() => setHoveredPanel('02')}
                    onMouseLeave={() => setHoveredPanel(null)}
                  >
                    <div>
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div>
                          <span className="font-technical-data text-3xl sm:text-4xl font-bold text-slate-300 group-hover:text-[#E90046] transition-colors block leading-none mb-1">
                            02
                          </span>
                          <span className="font-technical-data text-[11px] font-bold text-[#E90046] uppercase tracking-widest">
                            02 / WORKFORCE SOLUTIONS
                          </span>
                        </div>
                        <div className="h-12 max-w-[130px] flex items-center justify-end">
                          <img
                            src="/bait al mulouck.jpg"
                            alt="Bait Al Mulouk Technical Services Logo"
                            className="max-h-full w-auto object-contain transition-all duration-300"
                          />
                        </div>
                      </div>

                      <h3 className="font-headline-lg text-xl sm:text-2xl text-[#0F172A] font-bold tracking-tight leading-tight mb-2">
                        BAIT AL MULOUK TECHNICAL SERVICES
                      </h3>

                      <div className="flex items-center gap-2 text-xs font-technical-data text-slate-500 mb-3">
                        <span className="material-symbols-outlined text-xs text-[#E90046]">location_on</span>
                        <span className="font-semibold text-slate-700">Dubai, UAE</span>
                        <span className="text-slate-300">&bull;</span>
                        <span className="text-slate-600 font-medium">Local &amp; International Staffing</span>
                      </div>

                      <p className="font-body-md text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                        BAIT AL MULOUK TECHNICAL SERVICES is a premier workforce solutions provider specializing in local and international manpower supply. We bridge the talent gap for businesses across diverse sectors by sourcing, vetting and deploying skilled, semi-skilled and professional personnel tailored to specific operational requirements.
                      </p>

                      <ul className="space-y-1.5 font-body-md text-xs text-slate-600 bg-slate-50/80 p-3 border-l border-slate-300">
                        <li className="flex items-start gap-2 leading-relaxed">
                          <span className="text-[#E90046] font-bold select-none">•</span>
                          <span>Direct hire, temporary, contract and flexible staffing solutions for immediate local operational needs.</span>
                        </li>
                        <li className="flex items-start gap-2 leading-relaxed">
                          <span className="text-[#E90046] font-bold select-none">•</span>
                          <span>End-to-end global sourcing, recruitment and cross-border placement from established talent hubs.</span>
                        </li>
                      </ul>
                    </div>

                    <div className="mt-4 pt-3 flex items-center justify-between text-xs font-technical-data">
                      <span className="text-slate-400 uppercase tracking-wider">Workforce Partner</span>
                      <span className="text-slate-500 group-hover:text-[#E90046] font-semibold transition-colors">
                        View Entity &rarr;
                      </span>
                    </div>
                  </div>

                  {/* COMPANY 03: REGIONAL BRANCH */}
                  <div
                    className={`p-4 sm:p-7 flex-1 relative flex flex-col justify-between transition-all duration-500 cursor-pointer ${hoveredPanel === '03' ? 'bg-white z-10' : 'bg-transparent'
                      } ${hoveredPanel && hoveredPanel !== '03' ? 'opacity-60 grayscale-[20%]' : 'opacity-100'}`}
                    onMouseEnter={() => setHoveredPanel('03')}
                    onMouseLeave={() => setHoveredPanel(null)}
                  >
                    <div>
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div>
                          <span className="font-technical-data text-3xl sm:text-4xl font-bold text-slate-300 group-hover:text-[#E90046] transition-colors block leading-none mb-1">
                            03
                          </span>
                          <div className="inline-flex items-center gap-1.5 text-[11px] font-technical-data font-bold text-[#E90046] uppercase tracking-widest">
                            <span>03 / REGIONAL BRANCH</span>
                            <span className="px-1.5 py-0.2 bg-[#E90046]/10 text-[#E90046] text-[10px] font-semibold border border-[#E90046]/30">
                              SHARJAH ENTITY
                            </span>
                          </div>
                        </div>
                        <div className="h-12 max-w-[130px] flex items-center justify-end">
                          <img
                            src="/alfareeq.jpg"
                            alt="Alfareeq Alnader Technical Services LLC Logo"
                            className="max-h-full w-auto object-contain transition-all duration-300"
                          />
                        </div>
                      </div>

                      <h3 className="font-headline-lg text-xl sm:text-2xl text-[#0F172A] font-bold tracking-tight leading-tight mb-2">
                        ALFAREEQ ALNADER TECHNICAL SERVICES LLC
                      </h3>

                      {/* Regional Branch Indicator Link Box */}
                      <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-slate-100/90 border-l-2 border-[#E90046] text-xs font-technical-data mb-3">
                        <span className="material-symbols-outlined text-xs text-[#E90046]">account_tree</span>
                        <span className="text-slate-700 font-semibold">Sharjah Branch, UAE</span>
                        <span className="text-slate-400">&bull;</span>
                        <span className="text-slate-500 uppercase tracking-wider text-[11px]">Regional Branch of Entity 01</span>
                      </div>

                      <p className="font-body-md text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Your trusted partner for civil and MEP staffing. We provide customized, high-quality skilled and semi-skilled labor to match your exact operational demands.
                      </p>
                    </div>

                    <div className="mt-4 pt-3 flex items-center justify-between text-xs font-technical-data">
                      <span className="text-slate-400 uppercase tracking-wider">Civil &amp; MEP Hub</span>
                      <span className="text-slate-500 group-hover:text-[#E90046] font-semibold transition-colors">
                        View Entity &rarr;
                      </span>
                    </div>
                  </div>

                </div>
              </div>

              {/* ------------------------------------------------------------- */}
              {/* LOWER WIDE SECTION: COMPANY 04 (STAFFORA HR CONSULTANCY) */}
              {/* ------------------------------------------------------------- */}
              <div
                className={`border-t border-slate-300/80 p-4 sm:p-8 lg:p-12 relative transition-all duration-500 cursor-pointer ${hoveredPanel === '04' ? 'bg-white z-10' : 'bg-[#FAF9F5]/60'
                  } ${hoveredPanel && hoveredPanel !== '04' ? 'opacity-60 grayscale-[20%]' : 'opacity-100'}`}
                onMouseEnter={() => setHoveredPanel('04')}
                onMouseLeave={() => setHoveredPanel(null)}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                  {/* Left Column: Number, Category & Company Title */}
                  <div className="lg:col-span-5">
                    <div className="flex items-baseline gap-4 mb-2">
                      <span className="font-technical-data text-4xl sm:text-5xl font-bold text-slate-300 group-hover:text-[#E90046] transition-colors leading-none">
                        04
                      </span>
                      <span className="font-technical-data text-xs font-bold text-[#E90046] uppercase tracking-[0.2em]">
                        04 / HR CONSULTANCY
                      </span>
                    </div>
                    <h3 className="font-headline-lg text-2xl sm:text-3xl text-[#0F172A] font-bold tracking-tight leading-tight mb-3">
                      STAFFORA HR CONSULTANCY
                    </h3>
                    <div className="flex items-center gap-3 text-xs font-technical-data text-slate-500">
                      <div className="flex items-center gap-1.5 text-slate-800 font-semibold">
                        <span className="material-symbols-outlined text-xs text-[#E90046]">location_on</span>
                        <span>Dubai, UAE</span>
                      </div>
                      <span className="text-slate-300">&bull;</span>
                      <span className="text-slate-600 font-medium uppercase tracking-wider">
                        Executive Search &amp; White-Collar Talent
                      </span>
                    </div>
                  </div>

                  {/* Middle Column: Full Description Text */}
                  <div className="lg:col-span-5">
                    <p className="font-body-md text-xs sm:text-sm text-slate-600 leading-relaxed">
                      &quot;STAFFORA&quot; is an executive search and white-collar talent consultancy dedicated to sourcing, assessing and placing high-caliber mid-to-senior &amp; Junior professionals, operational specialists and corporate leaders. We bridge the gap between ambitious enterprises and top-tier talent by providing bespoke recruitment, headhunting and strategic human resource solutions across diverse industry sectors.
                    </p>
                  </div>

                  {/* Right Column: Integrated Logo & Action Arrow */}
                  <div className="lg:col-span-2 flex flex-col items-start lg:items-end justify-between gap-4">
                    <div className="h-14 max-w-[150px] flex items-center justify-end">
                      <img
                        src="/staffora.png"
                        alt="Staffora HR Consultancy Logo"
                        className="max-h-full w-auto object-contain transition-all duration-300"
                      />
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-technical-data font-semibold text-slate-500 group-hover:text-[#E90046] transition-colors">
                      <span>View Entity</span>
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </div>
                  </div>

                </div>
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

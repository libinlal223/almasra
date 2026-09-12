import React, { useState, useEffect } from 'react';
import { ScrollReveal } from '../components/ui/ScrollReveal';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const expertiseImages = ['/S1.png', '/S2.png', '/S3.png', '/S4.png'];
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const opalImages = [
    '/images/opalgardens1.jpg',
    '/images/opalgardens2.jpg',
    '/images/opalgardens3.png',
  ];
  const [currentOpalImgIndex, setCurrentOpalImgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImgIndex((prevIndex) => (prevIndex + 1) % expertiseImages.length);
    }, 3200);

    return () => clearInterval(interval);
  }, [expertiseImages.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOpalImgIndex((prevIndex) => (prevIndex + 1) % opalImages.length);
    }, 3200);

    return () => clearInterval(interval);
  }, [opalImages.length]);

  return (
    <div className="w-full bg-white">
      {/* Main Content Area */}
      <main className="flex-grow flex flex-col relative w-full bg-white">
        {/* 1. Hero: Responsive background image (Desktop: heropc.png, Mobile: heromob.png) */}
        <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-black">
          <div className="absolute inset-0 z-0">
            {/* Mobile Hero Image */}
            <img
              alt="Industrial MEP Infrastructure Mobile"
              className="w-full h-full object-cover block md:hidden"
              src="/heromob.png"
            />
            {/* Desktop Hero Image */}
            <img
              alt="Industrial MEP Infrastructure Desktop"
              className="w-full h-full object-cover hidden md:block"
              src="/heropc.png"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40"></div>
          </div>

          <div className="relative z-10 w-full px-margin-edge py-24 flex-grow flex items-center mt-20">
            <div className="max-w-[1440px] mx-auto w-full">
              <ScrollReveal>
                <div className="max-w-3xl">
                  <div className="flex items-center gap-2 mb-6">

                    <span className="font-label-caps text-xs text-white/80 uppercase tracking-widest">ALMASRA MEP CONTRACTING</span>
                  </div>
                  <h1 className="font-display-lg text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-[1.15] md:leading-[1.1] font-bold break-words">
                    Engineering MEP Excellence in UAE
                  </h1>
                  <p className="font-body-lg text-white/80 mb-10 max-w-2xl leading-relaxed">
                    Specialized turnkey solutions for HVAC, electrical, plumbing, fire fighting, and low-current works delivered with technical precision and safety.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      className="border border-white/30 text-white font-label-caps text-label-caps px-8 py-4 uppercase tracking-widest flex items-center justify-center hover:bg-white/10 transition-all cursor-pointer"
                      onClick={() => onNavigate("about")}
                    >
                      Explore Us
                    </button>
                    <button
                      className="bg-[#E90046] text-white font-label-caps text-label-caps px-8 py-4 uppercase tracking-widest flex items-center justify-center hover:bg-[#C4003B] transition-all cursor-pointer shadow-lg"
                      onClick={() => onNavigate("contact")}
                    >
                      Contact Us
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* 2. Service Snapshot (Our Expertise) */}
        <section className="w-full border-b border-outline-variant bg-[#FFF8F9] bg-[linear-gradient(to_right,rgba(233,0,70,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(233,0,70,0.07)_1px,transparent_1px)] [background-size:24px_24px]">
          <div className="max-w-[1440px] mx-auto px-margin-edge py-16">
            <ScrollReveal>
              <div className="mb-6">
                <h2 className="font-headline-lg text-4xl text-on-surface font-bold">Our Expertise</h2>
              </div>
            </ScrollReveal>

            <div className="flex flex-col lg:flex-row gap-5">
              {/* Left Card (60%) */}
              <div className="w-full lg:w-[60%] bg-white p-5 sm:p-6 md:p-9 border border-outline-variant relative group grid md:grid-cols-2 gap-6 items-center shadow-sm">
                <ScrollReveal delay={0.1}>
                  <div className="flex flex-col">
                    <h3 className="font-headline-md text-2xl md:text-3xl text-primary mb-4 mt-1 font-bold">MEP Contracting</h3>
                    <p className="font-body-md text-sm md:text-base text-on-surface-variant max-w-lg mb-5 leading-relaxed">
                      Complete Mechanical, Electrical &amp; Plumbing contracting solutions for commercial, residential, industrial and healthcare developments across the UAE.
                    </p>
                    <div className="w-12 h-1 bg-[#E90046] mb-5 transition-all group-hover:w-24"></div>
                    <a
                      className="font-label-caps text-xs text-primary hover:text-[#E90046] uppercase tracking-widest flex items-center cursor-pointer font-semibold"
                      onClick={(e) => { e.preventDefault(); onNavigate("services"); }}
                    >
                      Explore services<span className="material-symbols-outlined ml-2 text-[14px]">arrow_forward</span>
                    </a>
                  </div>
                </ScrollReveal>

                {/* Animated Image Slideshow */}
                <div className="h-full min-h-[280px] relative overflow-hidden bg-white p-2 border border-outline-variant/40">
                  {expertiseImages.map((imgSrc, index) => (
                    <img
                      key={imgSrc}
                      alt={`MEP Engineering Showcase ${index + 1}`}
                      className={`absolute inset-0 w-full h-full object-contain object-bottom p-2 transition-opacity duration-700 ease-in-out ${index === currentImgIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                      src={imgSrc}
                    />
                  ))}
                  <div className="absolute bottom-2 right-2 z-20 flex gap-1.5 bg-black/40 px-2 py-1 backdrop-blur-sm">
                    {expertiseImages.map((_, index) => (
                      <div
                        key={index}
                        className={`h-1.5 rounded-full transition-all duration-300 ${index === currentImgIndex ? 'w-4 bg-[#E90046]' : 'w-1.5 bg-white/60'
                          }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Stack Cards (40%) - 4 Service Boxes */}
              <div className="w-full lg:w-[40%] flex flex-col gap-3.5">
                <ScrollReveal delay={0.15}>
                  <div className="flex-1 bg-white p-4 md:p-4.5 border border-outline-variant hover:border-[#E90046] transition-colors flex flex-col justify-center shadow-sm">
                    <h4 className="font-headline-md text-lg text-on-surface font-bold mb-1">Electrical Services</h4>
                    <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
                      Power distribution, lighting systems, LV installations, testing, commissioning, and preventive maintenance.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                  <div className="flex-1 bg-white p-4 md:p-4.5 border border-outline-variant hover:border-[#E90046] transition-colors flex flex-col justify-center shadow-sm">
                    <h4 className="font-headline-md text-lg text-on-surface font-bold mb-1">Plumbing Services</h4>
                    <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
                      Water supply, drainage networks, sanitary installations, water filtration systems, and pump room engineering.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.25}>
                  <div className="flex-1 bg-white p-4 md:p-4.5 border border-outline-variant hover:border-[#E90046] transition-colors flex flex-col justify-center shadow-sm">
                    <h4 className="font-headline-md text-lg text-on-surface font-bold mb-1">Fire &amp; Low Current Systems</h4>
                    <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
                      Fire alarm, emergency lighting, access control, and Building Management Systems (BMS) for safe buildings.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.3}>
                  <div className="flex-1 bg-white p-4 md:p-4.5 border border-outline-variant hover:border-[#E90046] transition-colors flex flex-col justify-center shadow-sm">
                    <h4 className="font-headline-md text-lg text-on-surface font-bold mb-1">HVAC Solutions</h4>
                    <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
                      Installation, maintenance, repair, ventilation, and air conditioning systems for optimal performance.
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Sector Expertise (Clean Grid View) */}
        <section className="w-full border-b border-outline-variant bg-[#f8fafc]">
          <div className="max-w-[1440px] mx-auto px-margin-edge py-16">
            <div className="mb-12">
              <h2 className="font-headline-lg text-4xl text-on-surface font-bold">Sector Expertise</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[200px]">
              {/* Commercial Sector */}
              <div className="bg-surface p-6 md:p-8 border border-outline-variant row-span-2 flex flex-col justify-end relative overflow-hidden group shadow-sm">
                <img
                  src="/images/commercial1.png"
                  alt="Commercial Sector"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 z-0"></div>
                <div className="relative z-10">
                  <h3 className="font-headline-md text-3xl text-white font-bold mb-1">Commercial</h3>
                  <p className="font-body-md text-xs text-white/80">Office Towers, Retail Malls &amp; Corporate Facilities</p>
                </div>
              </div>

              {/* Industrial Sector */}
              <div className="bg-surface p-6 md:p-8 border border-outline-variant row-span-1 flex flex-col justify-end relative overflow-hidden group shadow-sm">
                <img
                  src="/images/industrial2.png"
                  alt="Industrial Sector"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 z-0"></div>
                <div className="relative z-10">
                  <h3 className="font-headline-md text-2xl text-white font-bold mb-1">Industrial</h3>
                  <p className="font-body-md text-xs text-white/80">Warehouses, Factories &amp; Heavy Plants</p>
                </div>
              </div>

              {/* Luxury Villas Sector */}
              <div className="bg-surface p-6 md:p-8 border border-outline-variant row-span-2 flex flex-col justify-end relative overflow-hidden group shadow-sm">
                <img
                  src="/images/all/2.png"
                  alt="Luxury Villas Sector"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 z-0"></div>
                <div className="relative z-10">
                  <h3 className="font-headline-md text-3xl text-white font-bold mb-1">Luxury Villas</h3>
                  <p className="font-body-md text-xs text-white/80">Custom High-End Estates &amp; Private Residences</p>
                </div>
              </div>

              {/* Residential Sector */}
              <div className="bg-surface p-6 md:p-8 border border-outline-variant row-span-1 flex flex-col justify-end relative overflow-hidden group shadow-sm">
                <img
                  src="/images/all/10.png"
                  alt="Residential Sector"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 z-0"></div>
                <div className="relative z-10">
                  <h3 className="font-headline-md text-2xl text-white font-bold mb-1">Residential</h3>
                  <p className="font-body-md text-xs text-white/80">Townhouses &amp; Apartment Complexes</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Almasra Banner with /3d.png Image */}
        <section className="w-full bg-[#0f172a] border-b border-outline-variant py-16 relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-margin-edge">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="w-full lg:w-[65%] relative">
                <div className="absolute -inset-4 bg-[#E90046]/10 blur-3xl rounded-full"></div>
                <img
                  alt="3D Technical MEP Systems Visualization"
                  className="relative z-10 w-full h-auto border border-white/10 shadow-2xl object-cover"
                  src="/3d.png"
                />
              </div>
              <div className="w-full lg:w-[35%] flex flex-col justify-center">
                <div className="font-technical-data text-label-caps text-[#E90046] uppercase tracking-[0.2em] mb-4">ENGINEERING AUTHORITY</div>
                <h2 className="font-headline-md text-headline-md text-white mb-6">WHY ALMASRA ?</h2>
                <p className="font-body-lg text-inverse-on-surface opacity-70 mb-8">
                  We combine experienced engineers, skilled technicians, strict safety standards and timely project execution to deliver dependable MEP solutions for projects across the UAE.
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-[1px] w-12 bg-[#E90046]"></div>
                  <span className="font-label-caps text-xs text-white/90 uppercase tracking-widest">Trusted Engineering. Proven Results.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Maintenance Services Subsection */}
        <section className="w-full border-b border-outline-variant bg-[#f8fafc]">
          <div className="max-w-[1440px] mx-auto px-margin-edge py-14">
            <ScrollReveal>
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                <div>
                  <span className="font-technical-data text-xs text-[#E90046] uppercase tracking-widest font-semibold block mb-1">
                    ADDITIONAL OFFERINGS
                  </span>
                  <h2 className="font-headline-lg text-2xl md:text-3xl text-on-surface font-bold">
                    Maintenance &amp; Support Services
                  </h2>
                </div>
                <p className="font-body-md text-xs text-on-surface-variant max-w-md leading-relaxed">
                  Ongoing operational support and emergency technical response for existing commercial, residential, and industrial facilities.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ScrollReveal delay={0.1}>
                <div className="bg-white border border-outline-variant p-4.5 sm:p-6 hover:border-[#E90046] transition-colors shadow-sm flex flex-col justify-between h-full">
                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <span className="font-technical-data text-xs text-[#E90046] font-bold">01</span>
                      <span className="material-symbols-outlined text-on-surface-variant text-xl">event_repeat</span>
                    </div>
                    <h3 className="font-headline-md text-lg text-on-surface font-bold mb-2">
                      Annual Maintenance Contracts (AMC)
                    </h3>
                    <p className="font-body-md text-xs text-on-surface-variant leading-relaxed mb-4">
                      Comprehensive planned preventive maintenance and 24/7 priority emergency response tailored for long-term facility reliability.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-outline-variant/60 flex items-center justify-between text-xs text-on-surface-variant">
                    <span className="font-technical-data text-[11px] uppercase tracking-wider">Scheduled Inspections &bull; Priority SLA</span>
                    <span className="material-symbols-outlined text-sm text-[#E90046]">arrow_forward</span>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="bg-white border border-outline-variant p-4.5 sm:p-6 hover:border-[#E90046] transition-colors shadow-sm flex flex-col justify-between h-full">
                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <span className="font-technical-data text-xs text-[#E90046] font-bold">02</span>
                      <span className="material-symbols-outlined text-on-surface-variant text-xl">handyman</span>
                    </div>
                    <h3 className="font-headline-md text-lg text-on-surface font-bold mb-2">
                      Per-Call Maintenance
                    </h3>
                    <p className="font-body-md text-xs text-on-surface-variant leading-relaxed mb-4">
                      On-demand technical repair, fault diagnostics, and corrective servicing for single issues or urgent system failures without long-term contracts.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-outline-variant/60 flex items-center justify-between text-xs text-on-surface-variant">
                    <span className="font-technical-data text-[11px] uppercase tracking-wider">On-Demand Servicing &bull; Fast Dispatch</span>
                    <span className="material-symbols-outlined text-sm text-[#E90046]">arrow_forward</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* 4. Why Clients Trust Us (Original Sticky Layout Restored) */}
        <section className="w-full border-b border-outline-variant bg-white">
          <div className="max-w-[1440px] mx-auto px-margin-edge py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
              <div className="lg:col-span-4">
                <h2 className="font-headline-lg text-4xl text-on-surface font-bold sticky top-24">Why Clients Trust Us</h2>
              </div>
              <div className="lg:col-span-8 flex flex-col gap-10">
                <div className="border-t border-outline-variant pt-8">
                  <div className="font-technical-data text-2xl text-[#E90046] mb-3 font-bold">01</div>
                  <h3 className="font-headline-md text-2xl text-on-surface mb-3 font-bold">Uncompromising Quality Workmanship</h3>
                  <p className="font-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                    Every project is executed with strict quality control, premium materials, and meticulous attention to detail, ensuring durable and high-performing MEP systems that meet international standards.
                  </p>
                </div>
                <div className="border-t border-outline-variant pt-8">
                  <div className="font-technical-data text-2xl text-[#E90046] mb-3 font-bold">02</div>
                  <h3 className="font-headline-md text-2xl text-on-surface mb-3 font-bold">Experienced Engineers &amp; Technicians</h3>
                  <p className="font-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                    Our team of qualified engineers and skilled technicians delivers reliable Mechanical, Electrical, and Plumbing solutions with technical expertise and professional project execution.
                  </p>
                </div>
                <div className="border-t border-outline-variant pt-8">
                  <div className="font-technical-data text-2xl text-[#E90046] mb-3 font-bold">03</div>
                  <h3 className="font-headline-md text-2xl text-on-surface mb-3 font-bold">On-Time Project Execution</h3>
                  <p className="font-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                    From planning and installation to testing and commissioning, we complete projects efficiently while maintaining the highest standards of safety, quality, and performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. How We Work */}
        <section className="w-full border-b border-outline-variant bg-[#f8fafc]">
          <div className="max-w-[1440px] mx-auto px-margin-edge py-16">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="font-headline-lg text-4xl text-on-surface font-bold">How We Work</h2>
              </div>
            </ScrollReveal>

            <div className="relative max-w-4xl mx-auto">
              <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-[2px] bg-outline-variant -translate-x-1/2"></div>
              <div className="flex flex-col gap-12">
                <ScrollReveal delay={0.1}>
                  <div className="flex flex-col md:flex-row gap-8 items-start relative">
                    <div className="w-10 h-10 rounded-full bg-[#E90046] text-white flex items-center justify-center font-technical-data font-bold z-10 self-start md:absolute md:left-1/2 md:-translate-x-1/2 shadow-md">01</div>
                    <div className="md:w-1/2 md:pr-12 md:text-right">
                      <h3 className="font-headline-md text-xl text-on-surface mb-2 font-bold">Planning &amp; Design Review</h3>
                      <p className="font-body-md text-on-surface-variant">Detailed technical evaluation, engineering calculations, and authority compliance checks prior to execution.</p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                  <div className="flex flex-col md:flex-row gap-8 items-start relative">
                    <div className="w-10 h-10 rounded-full bg-[#E90046] text-white flex items-center justify-center font-technical-data font-bold z-10 self-start md:absolute md:left-1/2 md:-translate-x-1/2 shadow-md">02</div>
                    <div className="md:w-1/2 md:ml-auto md:pl-12">
                      <h3 className="font-headline-md text-xl text-on-surface mb-2 font-bold">Material Procurement</h3>
                      <p className="font-body-md text-on-surface-variant">Sourcing high-specification components, equipment, and piping from approved international manufacturers.</p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.3}>
                  <div className="flex flex-col md:flex-row gap-8 items-start relative">
                    <div className="w-10 h-10 rounded-full bg-[#E90046] text-white flex items-center justify-center font-technical-data font-bold z-10 self-start md:absolute md:left-1/2 md:-translate-x-1/2 shadow-md">03</div>
                    <div className="md:w-1/2 md:pr-12 md:text-right">
                      <h3 className="font-headline-md text-xl text-on-surface mb-2 font-bold">Site Installation</h3>
                      <p className="font-body-md text-on-surface-variant">Precision execution by certified technicians under rigorous quality control and safety supervision.</p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.4}>
                  <div className="flex flex-col md:flex-row gap-8 items-start relative">
                    <div className="w-10 h-10 rounded-full bg-[#E90046] text-white flex items-center justify-center font-technical-data font-bold z-10 self-start md:absolute md:left-1/2 md:-translate-x-1/2 shadow-md">04</div>
                    <div className="md:w-1/2 md:ml-auto md:pl-12">
                      <h3 className="font-headline-md text-xl text-on-surface mb-2 font-bold">Testing &amp; Handover</h3>
                      <p className="font-body-md text-on-surface-variant">Comprehensive system commissioning, authority approvals, and formal project handover with full documentation.</p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Signature Implementations Section */}
        <section className="w-full border-b border-outline-variant bg-white">
          <div className="max-w-[1440px] mx-auto px-margin-edge py-20">
            <ScrollReveal>
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-outline-variant pb-8">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 bg-[#E90046]"></div>
                    <span className="font-technical-data text-xs text-[#E90046] uppercase tracking-[0.25em] font-semibold">
                      SIGNATURE IMPLEMENTATIONS
                    </span>
                  </div>
                  <h2 className="font-headline-lg text-4xl text-on-surface font-bold tracking-tight">
                    Featured Project Deliveries
                  </h2>
                </div>
                <p className="font-body-md text-sm text-on-surface-variant max-w-md leading-relaxed">
                  A selection of high-end residential MEP contracting implementations for leading UAE master developers.
                </p>
              </div>
            </ScrollReveal>

            <div className="flex flex-col gap-16">
              {/* Project 01 */}
              <ScrollReveal>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-b border-outline-variant pb-16">
                  <div className="lg:col-span-7 relative group overflow-hidden bg-surface-container-low border border-outline-variant">
                    <img
                      src="/images/all/rakprop.png"
                      alt="Cape Hyatt, Mina Al Arab"
                      className="w-full h-[260px] sm:h-[340px] md:h-[440px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-[#0F172A]/90 text-white px-3 py-1 font-technical-data text-xs font-semibold tracking-widest border border-white/10">
                      01 / 03
                    </div>
                  </div>
                  <div className="lg:col-span-5 flex flex-col justify-center">
                    <span className="font-technical-data text-xs text-[#E90046] uppercase tracking-widest font-semibold mb-3">
                      RESIDENTIAL &bull; MEP CONTRACTING
                    </span>
                    <h3 className="font-headline-lg text-3xl md:text-4xl text-on-surface font-bold mb-4 leading-tight">
                      Luxury Penthouses &amp; Apartments
                    </h3>
                    <div className="space-y-2 mb-6 font-body-md text-sm text-on-surface-variant">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-xs text-on-surface-variant">location_on</span>
                        <span className="font-medium text-on-surface">Cape Hyatt, Mina Al Arab, Ras Al Khaimah</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-xs text-on-surface-variant">domain</span>
                        <span className="font-technical-data text-xs text-[#64748B]">By RAK Properties</span>
                      </div>
                    </div>
                    <p className="font-body-md text-sm text-on-surface-variant leading-relaxed mb-6">
                      Turnkey mechanical, electrical, and plumbing infrastructure services supporting high-specification luxury beachfront residences and penthouses.
                    </p>
                    <div className="pt-4 border-t border-outline-variant/60 flex items-center gap-4 text-xs font-technical-data text-[#64748B]">
                      <span>HVAC &bull; Electrical &bull; Sanitary &bull; Fire Protection</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Project 02 */}
              <ScrollReveal>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-b border-outline-variant pb-16">
                  <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center">
                    <span className="font-technical-data text-xs text-[#E90046] uppercase tracking-widest font-semibold mb-3">
                      TOWNHOUSE COMMUNITY &bull; MEP SERVICES
                    </span>
                    <h3 className="font-headline-lg text-3xl md:text-4xl text-on-surface font-bold mb-4 leading-tight">
                      Luxury Townhouses
                    </h3>
                    <div className="space-y-2 mb-6 font-body-md text-sm text-on-surface-variant">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-xs text-on-surface-variant">location_on</span>
                        <span className="font-medium text-on-surface">Jebel Ali Village, Dubai</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-xs text-on-surface-variant">domain</span>
                        <span className="font-technical-data text-xs text-[#64748B]">By Nakheel</span>
                      </div>
                    </div>
                    <p className="font-body-md text-sm text-on-surface-variant leading-relaxed mb-6">
                      Complete MEP contracting, low-current integration, and power distribution for upscale townhouse residences within a master-planned community.
                    </p>
                    <div className="pt-4 border-t border-outline-variant/60 flex items-center gap-4 text-xs font-technical-data text-[#64748B]">
                      <span>LV Distribution &bull; Plumbing &bull; Ductwork &bull; Drainage</span>
                    </div>
                  </div>
                  <div className="lg:col-span-7 order-1 lg:order-2 relative group overflow-hidden bg-surface-container-low border border-outline-variant">
                    <img
                      src="/images/all/2.png"
                      alt="Jebel Ali Village, Dubai"
                      className="w-full h-[260px] sm:h-[340px] md:h-[440px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-[#0F172A]/90 text-white px-3 py-1 font-technical-data text-xs font-semibold tracking-widest border border-white/10">
                      02 / 03
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Project 03 - Opal Gardens */}
              <ScrollReveal>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  <div className="lg:col-span-7 relative group overflow-hidden bg-surface-container-low border border-outline-variant h-[260px] sm:h-[340px] md:h-[440px]">
                    {opalImages.map((imgSrc, index) => (
                      <img
                        key={imgSrc}
                        src={imgSrc}
                        alt={`Opal Gardens, District 11, Dubai - View ${index + 1}`}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${index === currentOpalImgIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                          }`}
                      />
                    ))}
                    <div className="absolute top-4 left-4 bg-[#0F172A]/90 text-white px-3 py-1 font-technical-data text-xs font-semibold tracking-widest border border-white/10 z-20">
                      03 / 03
                    </div>
                    <div className="absolute bottom-3 right-3 z-20 flex gap-1.5 bg-black/50 px-2 py-1 backdrop-blur-sm">
                      {opalImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentOpalImgIndex(index)}
                          aria-label={`Select slide ${index + 1}`}
                          className={`h-1.5 transition-all duration-300 cursor-pointer ${index === currentOpalImgIndex ? 'w-4 bg-[#E90046]' : 'w-1.5 bg-white/60'
                            }`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="lg:col-span-5 flex flex-col justify-center">
                    <span className="font-technical-data text-xs text-[#E90046] uppercase tracking-widest font-semibold mb-3">
                      EXCLUSIVE VILLA ESTATE &bull; HIGH-SPEC MEP
                    </span>
                    <h3 className="font-headline-lg text-3xl md:text-4xl text-on-surface font-bold mb-4 leading-tight">
                      Luxury Villas
                    </h3>
                    <div className="space-y-2 mb-6 font-body-md text-sm text-on-surface-variant">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-xs text-on-surface-variant">location_on</span>
                        <span className="font-medium text-on-surface">Opal Gardens, District 11, Dubai</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-xs text-on-surface-variant">domain</span>
                        <span className="font-technical-data text-xs text-[#64748B]">By Meydan</span>
                      </div>
                    </div>
                    <p className="font-body-md text-sm text-on-surface-variant leading-relaxed mb-6">
                      Precision engineering for luxury villa MEP installations, smart climate control, fire safety, and water filtration networks.
                    </p>
                    <div className="pt-4 border-t border-outline-variant/60 flex items-center gap-4 text-xs font-technical-data text-[#64748B]">
                      <span>Smart Climate &bull; Booster Systems &bull; Fire Alarm &bull; MDB</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* 6. CTA Band */}
        <section className="w-full bg-[#0F172A] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="max-w-[1440px] mx-auto px-margin-edge py-20 relative z-10 flex flex-col md:flex-row items-center justify-between">
            <ScrollReveal>
              <div className="max-w-2xl mb-8 md:mb-0">
                <h2 className="font-headline-lg text-4xl text-white mb-4 font-bold">Ready to Engineer Your Next Project?</h2>
                <p className="font-body-lg opacity-80">Connect with our technical advisory team to discuss specifications, timelines, and structural requirements.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div>
                <button
                  className="bg-[#E90046] text-white font-label-caps text-label-caps px-10 py-5 uppercase tracking-widest hover:bg-[#C4003B] transition-colors flex items-center whitespace-nowrap cursor-pointer shadow-lg font-bold"
                  onClick={() => onNavigate("contact")}
                >
                  Request Consultation
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

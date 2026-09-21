import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { TextHoverEffect, FooterBackgroundGradient } from './ui/hover-footer';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const footerLinks = [
    {
      title: "Solutions",
      links: [
        { label: "MEP Contracting", page: "services" },
        { label: "HVAC Solutions", page: "services" },
        { label: "Electrical Systems", page: "services" },
        { label: "Plumbing Engineering", page: "services" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Almasra", page: "about" },
        { label: "Projects", page: "projects" },
        { label: "Quality & Safety", page: "about" },
        { label: "Contact Us", page: "contact", pulse: true },
      ],
    },
  ];



  return (
    <footer className="bg-[#0F172A] text-white relative h-fit overflow-hidden border-t border-outline-variant mt-auto">
      <div className="max-w-[1440px] mx-auto p-5 sm:p-8 md:p-14 pb-0 md:pb-0 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 lg:gap-12">
          
          {/* Brand section */}
          <div className="flex flex-col space-y-4">
            <div 
              className="flex items-center gap-3 cursor-pointer select-none"
              onClick={() => onNavigate('home')}
            >
              <img 
                src="/logoorg.webp" 
                alt="Almasra Logo" 
                className="h-10 w-auto object-contain" 
              />
              <div className="flex flex-col items-start leading-tight">
                <span className="font-headline-md text-2xl font-extrabold tracking-tight text-white uppercase">
                  ALMASRA
                </span>
                <span className="font-label-caps text-[9px] font-bold tracking-[0.18em] text-white/80 uppercase mt-0.5">
                  TECHNICAL SERVICES EST
                </span>
              </div>
            </div>
            <p className="font-body-md text-xs text-white/70 leading-relaxed max-w-xs">
              Architectural Precision. Industrial Authority. Turnkey Mechanical, Electrical &amp; Plumbing engineering solutions across the UAE.
            </p>
          </div>

          {/* Footer link sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-technical-data text-xs uppercase tracking-widest text-[#E90046] font-bold mb-5 pb-2 border-b border-white/10">
                {section.title}
              </h4>
              <ul className="space-y-3 font-technical-data text-xs">
                {section.links.map((link) => (
                  <li key={link.label} className="relative">
                    <a
                      href={link.page === 'home' ? '/' : `#${link.page}`}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate(link.page);
                      }}
                      className="text-white/70 hover:text-white transition-colors cursor-pointer"
                    >
                      {link.label}
                    </a>
                    {link.pulse && (
                      <span className="inline-block ml-2 w-1.5 h-1.5 rounded-full bg-[#E90046] animate-pulse"></span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact section */}
          <div>
            <h4 className="font-technical-data text-xs uppercase tracking-widest text-[#E90046] font-bold mb-5 pb-2 border-b border-white/10">
              Contact Reach
            </h4>
            <ul className="space-y-3.5 font-technical-data text-xs">
              <li className="flex items-center space-x-3 text-white/80">
                <Mail size={16} className="text-[#E90046] flex-shrink-0" />
                <a href="mailto:info@almasrauae.com" className="hover:text-[#E90046] transition-colors">
                  info@almasrauae.com
                </a>
              </li>
              <li className="flex items-start space-x-3 text-white/80">
                <Phone size={16} className="text-[#E90046] flex-shrink-0 mt-1" />
                <div className="flex flex-col space-y-1">
                  <a href="tel:+9715627777400" className="hover:text-[#E90046] transition-colors">+971 56 277 7400</a>
                  <a href="tel:+9715677773100" className="hover:text-[#E90046] transition-colors">+971 56 777 3100</a>
                  <a href="tel:+971565454332" className="hover:text-[#E90046] transition-colors">+971 56 545 4332</a>
                </div>
              </li>
              <li className="flex items-center space-x-3 text-[#25D366]">
                <span className="material-symbols-outlined text-base text-[#25D366] flex-shrink-0">forum</span>
                <a 
                  href="https://wa.me/971565454332" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline font-semibold text-[#25D366]"
                >
                  WhatsApp: +971 56 545 4332
                </a>
              </li>
              <li 
                className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors cursor-pointer"
                onClick={() => onNavigate('contact')}
              >
                <MapPin size={16} className="text-[#E90046] flex-shrink-0" />
                <span>Room 9 Dubai - Al Fahidi - Dubai Office</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* SVG Interactive Text Reveal Effect (ALMASRA) */}
      <div className="lg:flex hidden h-[10rem] sm:h-[13rem] md:h-[16rem] mt-10 md:mt-14 -mb-4 md:-mb-6 justify-center items-center pointer-events-auto z-40 relative max-w-[1440px] mx-auto px-5">
        <TextHoverEffect text="ALMASRA" className="z-40" />
      </div>

      {/* Footer bottom bar (placed below ALMASRA text) */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-14 pb-6 pt-0 z-40 relative">
        <hr className="border-t border-white/10 mb-4" />

        <div className="flex flex-col md:flex-row justify-between items-center text-xs font-technical-data text-white/60 space-y-3 md:space-y-0">
          <p>© {new Date().getFullYear()} ALMASRA TECHNICAL SERVICES EST. ALL RIGHTS RESERVED.</p>
          <span className="text-[#E90046]">EXCEL PAR EXCELLENCE</span>
        </div>
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
};

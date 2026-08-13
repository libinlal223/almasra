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
        { label: "Project Portfolio", page: "projects" },
        { label: "Quality & Safety", page: "about" },
        { label: "Contact Us", page: "contact", pulse: true },
      ],
    },
  ];

  const contactInfo = [
    {
      icon: <Mail size={16} className="text-[#E90046]" />,
      text: "info.almasra@gmail.com",
      page: "contact",
    },
    {
      icon: <Phone size={16} className="text-[#E90046]" />,
      text: "+971 (0) 4 123 4567",
      page: "contact",
    },
    {
      icon: <MapPin size={16} className="text-[#E90046]" />,
      text: "Dubai Municipality, Al Fahidi, Dubai",
      page: "contact",
    },
  ];

  return (
    <footer className="bg-[#0F172A] text-white relative h-fit overflow-hidden border-t border-outline-variant mt-auto">
      <div className="max-w-[1440px] mx-auto p-10 md:p-14 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 lg:gap-12 pb-10">
          
          {/* Brand section */}
          <div className="flex flex-col space-y-4">
            <div 
              className="flex items-center gap-3 cursor-pointer select-none"
              onClick={() => onNavigate('home')}
            >
              <img 
                src="/logoorg.png" 
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
                      onClick={() => onNavigate(link.page)}
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
              {contactInfo.map((item, i) => (
                <li 
                  key={i} 
                  className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors cursor-pointer"
                  onClick={() => onNavigate(item.page)}
                >
                  {item.icon}
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-t border-white/10 my-6" />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs font-technical-data text-white/60 space-y-3 md:space-y-0">
          <p>© {new Date().getFullYear()} ALMASRA TECHNICAL SERVICES EST. ALL RIGHTS RESERVED.</p>
          <span className="text-[#E90046]">EXCEL PAR EXCELLENCE</span>
        </div>
      </div>

      {/* SVG Interactive Text Reveal Effect (ALMASRA) */}
      <div className="lg:flex hidden h-[22rem] -mt-44 -mb-28 justify-center items-center pointer-events-auto z-50">
        <TextHoverEffect text="ALMASRA" className="z-50" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
};

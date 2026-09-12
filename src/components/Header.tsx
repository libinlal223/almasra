import React, { useState } from 'react';
import { ContactModal } from './ContactModal';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const isHome = currentPage === 'home';

  const handleNavClick = (e: React.MouseEvent, page: string) => {
    e.preventDefault();
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT US' },
    { id: 'services', label: 'SERVICES' },
    { id: 'projects', label: 'GALLERY' },
    { id: 'contact', label: 'CONTACT' },
  ];

  return (
    <>
      <header className={`${isHome ? 'absolute top-0 left-0 right-0' : 'relative bg-[#0F172A]'} z-50 w-full`}>
        <nav className="flex justify-between items-center w-full px-margin-edge h-20 max-w-[1440px] mx-auto border-b border-white/20">
          {/* Brand Logo with logoorg.png + Compact White Text Block */}
          <div 
            className="flex items-center gap-2.5 cursor-pointer py-1.5"
            onClick={(e) => handleNavClick(e, 'home')}
          >
            <img 
              src="/logoorg.png" 
              alt="Almasra Logo" 
              className="h-8 md:h-9.5 w-auto object-contain transition-transform hover:scale-105" 
            />
            <div className="flex flex-col items-start leading-none text-white select-none">
              <span className="font-headline-md text-lg md:text-xl font-bold tracking-tight text-white uppercase">
                ALMASRA
              </span>
              <span className="font-label-caps text-[8px] md:text-[9.5px] font-bold tracking-[0.16em] text-white/90 uppercase mt-0.5">
                TECHNICAL SERVICES EST
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links (Compact text & spacing) */}
          <div className="hidden md:flex space-x-7 items-center ml-auto mr-8">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <a
                  key={link.id}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`font-label-caps text-[11px] md:text-xs uppercase tracking-[0.14em] cursor-pointer transition-colors duration-200 ${
                    isActive
                      ? 'text-white border-b-2 border-[#E90046] pb-1 font-bold'
                      : 'text-white/75 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Contact CTA Button (Compact Sizing) */}
          <div className="hidden md:flex">
            <button 
              className="bg-[#E90046] text-white font-label-caps text-[11px] md:text-xs px-5 py-2.5 uppercase tracking-widest hover:bg-[#C4003B] transition-colors flex items-center cursor-pointer shadow-sm font-semibold"
              onClick={() => setIsContactModalOpen(true)}
            >
              CONTACT
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white cursor-pointer p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="material-symbols-outlined">{mobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </nav>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0F172A] border-b border-white/20 px-margin-edge py-5 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                className={`font-label-caps uppercase text-xs py-1.5 ${
                  currentPage === link.id ? 'text-white font-bold border-b border-[#E90046]' : 'text-white/75'
                }`}
                onClick={(e) => handleNavClick(e, link.id)}
              >
                {link.label}
              </a>
            ))}
            <button 
              className="bg-[#E90046] text-white font-label-caps text-[11px] px-5 py-2.5 uppercase tracking-widest w-full mt-2 hover:bg-[#C4003B] transition-colors"
              onClick={() => {
                setMobileMenuOpen(false);
                setIsContactModalOpen(true);
              }}
            >
              CONTACT
            </button>
          </div>
        )}
      </header>

      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        onNavigate={onNavigate}
      />
    </>
  );
};

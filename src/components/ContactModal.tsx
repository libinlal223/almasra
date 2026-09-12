import React from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: string) => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, onNavigate }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-[#0F172A] border border-white/20 text-white w-full max-w-lg shadow-2xl relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Accent Line */}
        <div className="h-1.5 w-full bg-[#E90046]"></div>

        {/* Modal Header */}
        <div className="p-6 pb-4 border-b border-white/10 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 bg-[#E90046]"></span>
              <span className="font-technical-data text-[11px] text-[#E90046] uppercase tracking-[0.2em] font-semibold">
                DIRECT CONTACT PROTOCOL
              </span>
            </div>
            <h2 className="font-headline-lg text-2xl font-bold text-white tracking-tight">
              Contact Almasra Technical
            </h2>
            <p className="font-body-md text-xs text-white/70 mt-1">
              Select a phone number to call directly or connect via 24/7 WhatsApp support.
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white p-1 cursor-pointer transition-colors"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        {/* Modal Body: Contact Channels */}
        <div className="p-6 space-y-3.5">
          
          {/* Phone Line 1 */}
          <a
            href="tel:+971562777400"
            className="flex items-center justify-between p-4 bg-white/5 border border-white/10 hover:border-[#E90046] hover:bg-white/10 transition-all cursor-pointer group"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-[#E90046]/10 text-[#E90046] flex items-center justify-center border border-[#E90046]/30 group-hover:bg-[#E90046] group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-lg">call</span>
              </div>
              <div>
                <span className="font-technical-data text-[10px] text-white/60 uppercase tracking-widest block font-medium">
                  PHONE LINE 01
                </span>
                <span className="font-technical-data text-base font-bold text-white tracking-wide">
                  +971 56 277 7400
                </span>
              </div>
            </div>
            <span className="bg-[#E90046] text-white font-technical-data text-xs px-3.5 py-1.5 font-semibold tracking-wider uppercase group-hover:bg-[#C4003B] transition-colors">
              Call
            </span>
          </a>

          {/* Phone Line 2 */}
          <a
            href="tel:+971567773100"
            className="flex items-center justify-between p-4 bg-white/5 border border-white/10 hover:border-[#E90046] hover:bg-white/10 transition-all cursor-pointer group"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-[#E90046]/10 text-[#E90046] flex items-center justify-center border border-[#E90046]/30 group-hover:bg-[#E90046] group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-lg">call</span>
              </div>
              <div>
                <span className="font-technical-data text-[10px] text-white/60 uppercase tracking-widest block font-medium">
                  PHONE LINE 02
                </span>
                <span className="font-technical-data text-base font-bold text-white tracking-wide">
                  +971 56 777 3100
                </span>
              </div>
            </div>
            <span className="bg-[#E90046] text-white font-technical-data text-xs px-3.5 py-1.5 font-semibold tracking-wider uppercase group-hover:bg-[#C4003B] transition-colors">
              Call
            </span>
          </a>

          {/* Phone Line 3 */}
          <a
            href="tel:+971565454332"
            className="flex items-center justify-between p-4 bg-white/5 border border-white/10 hover:border-[#E90046] hover:bg-white/10 transition-all cursor-pointer group"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-[#E90046]/10 text-[#E90046] flex items-center justify-center border border-[#E90046]/30 group-hover:bg-[#E90046] group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-lg">call</span>
              </div>
              <div>
                <span className="font-technical-data text-[10px] text-white/60 uppercase tracking-widest block font-medium">
                  PHONE LINE 03
                </span>
                <span className="font-technical-data text-base font-bold text-white tracking-wide">
                  +971 56 545 4332
                </span>
              </div>
            </div>
            <span className="bg-[#E90046] text-white font-technical-data text-xs px-3.5 py-1.5 font-semibold tracking-wider uppercase group-hover:bg-[#C4003B] transition-colors">
              Call
            </span>
          </a>

          {/* WhatsApp Direct */}
          <a
            href="https://wa.me/971565454332"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-[#25D366]/10 border border-[#25D366]/40 hover:bg-[#25D366]/20 hover:border-[#25D366] transition-all cursor-pointer group"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-md">
                <span className="material-symbols-outlined text-xl">forum</span>
              </div>
              <div>
                <span className="font-technical-data text-[10px] text-[#25D366] uppercase tracking-widest block font-semibold">
                  24/7 WHATSAPP DIRECT
                </span>
                <span className="font-technical-data text-base font-bold text-white tracking-wide">
                  +971 56 545 4332
                </span>
              </div>
            </div>
            <span className="bg-[#25D366] text-white font-technical-data text-xs px-3.5 py-1.5 font-semibold tracking-wider uppercase group-hover:bg-[#1DA851] transition-colors shadow-sm">
              Message
            </span>
          </a>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-white/5 border-t border-white/10 flex items-center justify-between text-xs font-technical-data">
          <span className="text-white/60">Need to send project drawings?</span>
          <button
            onClick={() => {
              onClose();
              onNavigate('contact');
            }}
            className="text-[#E90046] hover:text-white font-semibold uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-1"
          >
            Full Inquiry Form <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>

      </div>
    </div>
  );
};

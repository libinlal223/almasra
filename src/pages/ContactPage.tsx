import React, { useState } from 'react';
import { ScrollReveal } from '../components/ui/ScrollReveal';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate: _onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: 'Electrical Services',
    scope: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format WhatsApp prefilled message
    const message = `*NEW MEP INQUIRY - ALMASRA*\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `🏢 *Company:* ${formData.company || 'Not Specified'}\n` +
      `📞 *Phone:* ${formData.phone}\n` +
      `✉️ *Email:* ${formData.email}\n` +
      `⚙️ *Service Required:* ${formData.service}\n\n` +
      `📋 *Project Scope / Details:*\n${formData.scope || 'No specific notes provided.'}`;

    const waUrl = `https://wa.me/971565454332?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-[#f8fafc] text-[#0F172A] min-h-screen">
      <main className="relative z-10 w-full">
        {/* Page Hero Header */}
        <section className="w-full bg-[#0F172A] text-white py-24 px-margin-edge border-b border-outline-variant relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"></div>
          <div className="max-w-[1440px] mx-auto relative z-10">
            <ScrollReveal>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2.5 h-2.5 bg-[#E90046]"></div>
                <span className="font-technical-data text-xs text-white/70 uppercase tracking-[0.2em] font-semibold">
                  SEC.01 // CONTACT PROTOCOL
                </span>
              </div>
              <h1 className="font-display-lg text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 tracking-tight break-words">
                Let's Build Your Next Project
              </h1>
              <p className="font-body-lg text-white/80 max-w-3xl leading-relaxed">
                Whether you're planning a commercial development, luxury villa, industrial facility or healthcare project, our engineering team is ready to deliver reliable Mechanical, Electrical and Plumbing solutions tailored to your requirements.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Content Split: Contact Information Boxes + Inquiry Form Container */}
        <section className="w-full py-16 px-margin-edge bg-[#f8fafc] bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] [background-size:24px_24px]">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

              {/* Left Column (5 Cols): Office Details & Contact Cards */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <ScrollReveal delay={0.1}>
                  <div className="border-b border-outline-variant pb-4">
                    <span className="font-technical-data text-xs text-[#E90046] uppercase tracking-widest font-semibold block mb-1">
                      HEADQUARTERS &amp; DIRECT REACH
                    </span>
                    <h2 className="font-headline-lg text-2xl md:text-3xl text-[#0F172A] font-bold">
                      Get in Touch
                    </h2>
                  </div>
                </ScrollReveal>

                {/* Box 1: Address */}
                <ScrollReveal delay={0.15}>
                  <div className="bg-white border border-outline-variant p-4 sm:p-6 hover:border-[#E90046] transition-colors shadow-sm relative group">
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#E90046]"></div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#f8fafc] border border-outline-variant flex items-center justify-center text-[#E90046] flex-shrink-0">
                        <span className="material-symbols-outlined text-lg">location_on</span>
                      </div>
                      <div>
                        <span className="font-technical-data text-xs text-[#64748B] uppercase tracking-wider block mb-1 font-semibold">
                          OFFICE LOCATION
                        </span>
                        <p className="font-body-md text-sm md:text-base text-[#0F172A] font-semibold leading-relaxed">
                          Room 9 Dubai - Al Fahidi - Dubai Office
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Box 2: Phone */}
                <ScrollReveal delay={0.2}>
                  <div className="bg-white border border-outline-variant p-4 sm:p-6 hover:border-[#E90046] transition-colors shadow-sm relative group">
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#E90046]"></div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#f8fafc] border border-outline-variant flex items-center justify-center text-[#E90046] flex-shrink-0">
                        <span className="material-symbols-outlined text-lg">call</span>
                      </div>
                      <div>
                        <span className="font-technical-data text-xs text-[#64748B] uppercase tracking-wider block mb-1 font-semibold">
                          PHONE / TELEPHONE
                        </span>
                        <div className="font-technical-data text-sm md:text-base text-[#0F172A] font-semibold space-y-1">
                          <p><a href="tel:+9715627777400" className="hover:text-[#E90046] transition-colors">+971 56 277 7400</a></p>
                          <p><a href="tel:+9715677773100" className="hover:text-[#E90046] transition-colors">+971 56 777 3100</a></p>
                          <p><a href="tel:+971565454332" className="hover:text-[#E90046] transition-colors">+971 56 545 4332</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Box 3: Email & Operating Hours */}
                <ScrollReveal delay={0.25}>
                  <div className="bg-white border border-outline-variant p-4 sm:p-6 hover:border-[#E90046] transition-colors shadow-sm relative group">
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#E90046]"></div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#f8fafc] border border-outline-variant flex items-center justify-center text-[#E90046] flex-shrink-0">
                        <span className="material-symbols-outlined text-lg">mail</span>
                      </div>
                      <div className="flex-1">
                        <span className="font-technical-data text-xs text-[#64748B] uppercase tracking-wider block mb-1 font-semibold">
                          EMAIL &amp; WORKING HOURS
                        </span>
                        <a 
                          href="mailto:info@almasrauae.com" 
                          className="font-technical-data text-sm text-[#0F172A] hover:text-[#E90046] font-semibold mb-2 block transition-colors"
                        >
                          info@almasrauae.com
                        </a>

                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* WhatsApp Action Box */}
                <ScrollReveal delay={0.3}>
                  <div className="bg-[#0F172A] text-white border border-outline-variant p-4 sm:p-6 shadow-md flex items-center justify-between">
                    <div>
                      <span className="font-technical-data text-xs text-[#25D366] uppercase tracking-widest font-semibold block mb-1">
                        24/7 DIRECT MESSAGING
                      </span>
                      <h3 className="font-headline-md text-lg font-bold text-white">
                        Instant WhatsApp Support
                      </h3>
                      <p className="font-technical-data text-xs text-[#25D366] mt-0.5">+971 56 545 4332</p>
                    </div>
                    <a
                      href="https://wa.me/971565454332"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#25D366] text-white font-label-caps px-6 py-3 uppercase tracking-widest hover:bg-[#1DA851] transition-colors flex items-center gap-2 cursor-pointer shadow-md font-semibold text-xs whitespace-nowrap"
                    >
                      WhatsApp Us <span className="material-symbols-outlined text-sm">forum</span>
                    </a>
                  </div>
                </ScrollReveal>

              </div>

              {/* Right Column (7 Cols): Project Inquiry Box & Structured Form */}
              <div className="lg:col-span-7">
                <ScrollReveal delay={0.2}>
                  <div className="bg-white border border-outline-variant p-5 sm:p-8 md:p-10 shadow-sm relative">
                    <div className="absolute top-0 left-0 w-full h-1 bg-[#E90046]"></div>

                    <div className="mb-8 pb-4 border-b border-outline-variant">
                      <span className="font-technical-data text-xs text-[#E90046] uppercase tracking-widest font-semibold block mb-1">
                        PROJECT INQUIRY FORM
                      </span>
                      <h2 className="font-headline-lg text-2xl md:text-3xl text-[#0F172A] font-bold">
                        Tell Us About Your Project
                      </h2>
                    </div>

                    {submitted ? (
                      <div className="p-8 border border-[#25D366] bg-[#f0fdf4] text-[#166534] font-body-md">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="material-symbols-outlined text-2xl text-[#25D366]">check_circle</span>
                          <h3 className="font-headline-md text-2xl font-bold text-[#0F172A]">Enquiry Received</h3>
                        </div>
                        <p className="text-sm leading-relaxed text-[#334155]">
                          Thank you for submitting your project specifications. An Almasra MEP senior engineer will review your requirements and contact you within 24 hours.
                        </p>
                      </div>
                    ) : (
                      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="flex flex-col">
                            <label className="font-technical-data text-xs text-[#475569] uppercase font-semibold mb-2">
                              Your Name <span className="text-[#E90046]">*</span>
                            </label>
                            <input
                              className="bg-[#f8fafc] border border-outline-variant px-4 py-3 text-sm text-[#0F172A] font-body-md focus:border-[#E90046] focus:bg-white outline-none transition-colors"
                              placeholder="Enter your full name"
                              type="text"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              required
                            />
                          </div>
                          <div className="flex flex-col">
                            <label className="font-technical-data text-xs text-[#475569] uppercase font-semibold mb-2">
                              Company / Organization
                            </label>
                            <input
                              className="bg-[#f8fafc] border border-outline-variant px-4 py-3 text-sm text-[#0F172A] font-body-md focus:border-[#E90046] focus:bg-white outline-none transition-colors"
                              placeholder="Enter company name"
                              type="text"
                              value={formData.company}
                              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="flex flex-col">
                            <label className="font-technical-data text-xs text-[#475569] uppercase font-semibold mb-2">
                              Contact Number <span className="text-[#E90046]">*</span>
                            </label>
                            <input
                              className="bg-[#f8fafc] border border-outline-variant px-4 py-3 text-sm text-[#0F172A] font-body-md focus:border-[#E90046] focus:bg-white outline-none transition-colors font-technical-data"
                              placeholder="+971 -- --- ----"
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              required
                            />
                          </div>
                          <div className="flex flex-col">
                            <label className="font-technical-data text-xs text-[#475569] uppercase font-semibold mb-2">
                              Email Address <span className="text-[#E90046]">*</span>
                            </label>
                            <input
                              className="bg-[#f8fafc] border border-outline-variant px-4 py-3 text-sm text-[#0F172A] font-body-md focus:border-[#E90046] focus:bg-white outline-none transition-colors font-technical-data"
                              placeholder="email@domain.com"
                              type="email"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              required
                            />
                          </div>
                        </div>

                        <div className="flex flex-col">
                          <label className="font-technical-data text-xs text-[#475569] uppercase font-semibold mb-2">
                            Primary Service Required
                          </label>
                          <select 
                            value={formData.service}
                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                            className="bg-[#f8fafc] border border-outline-variant px-4 py-3 text-sm text-[#0F172A] font-body-md focus:border-[#E90046] focus:bg-white outline-none transition-colors cursor-pointer appearance-none"
                          >
                            <option value="Electrical Services">Electrical Services</option>
                            <option value="Plumbing Services">Plumbing Services</option>
                            <option value="Fire & Low Current Systems">Fire &amp; Low Current Systems</option>
                            <option value="HVAC Solutions">HVAC Solutions</option>
                            <option value="Full Turnkey MEP Contracting">Full Turnkey MEP Contracting</option>
                            <option value="Annual Maintenance Contract (AMC)">Annual Maintenance Contract (AMC)</option>
                          </select>
                        </div>

                        <div className="flex flex-col">
                          <label className="font-technical-data text-xs text-[#475569] uppercase font-semibold mb-2">
                            Project Scope / Specifications
                          </label>
                          <textarea
                            className="bg-[#f8fafc] border border-outline-variant p-4 text-sm text-[#0F172A] font-body-md focus:border-[#E90046] focus:bg-white outline-none transition-colors h-36 resize-none"
                            placeholder="Provide details regarding project location, capacity, timeline and technical constraints..."
                            value={formData.scope}
                            onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                          ></textarea>
                        </div>

                        <button
                          className="bg-[#25D366] hover:bg-[#1fa851] text-white font-label-caps text-label-caps px-8 py-4 uppercase tracking-widest transition-colors rounded-none w-full cursor-pointer shadow-md flex items-center justify-center gap-2 font-bold"
                          type="submit"
                        >
                          Send Inquiry via WhatsApp
                          <span className="material-symbols-outlined text-sm">forum</span>
                        </button>
                      </form>
                    )}
                  </div>
                </ScrollReveal>
              </div>

            </div>
          </div>
        </section>

        {/* Technical Map & Location Section */}
        <section className="w-full bg-white border-t border-b border-outline-variant py-16 px-margin-edge">
          <div className="max-w-[1440px] mx-auto">
            <ScrollReveal>
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-outline-variant pb-4">
                <div>
                  <span className="font-technical-data text-xs text-[#E90046] uppercase tracking-widest font-semibold block mb-1">
                    LOCATION &amp; GEOGRAPHIC COORDINATES
                  </span>
                  <h2 className="font-headline-lg text-2xl md:text-3xl text-[#0F172A] font-bold">
                    Dubai Headquarters Location
                  </h2>
                </div>
                <div className="flex items-center gap-6 font-technical-data text-xs text-[#64748B]">
                  <span>LAT: 25.2631° N</span>
                  <span>LON: 55.2972° E</span>
                </div>
              </div>

              <div className="w-full h-96 relative border border-outline-variant overflow-hidden shadow-sm bg-surface-container-low">
                <iframe
                  title="Almasra Office Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.219808945686!2d55.2972!3d25.2631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0x8b38341697208d0!2sAl%20Fahidi%2C%20Dubai%2C%20United%20Arab%20Emirates!5e0!3m2!1sen!2sae!4v1690000000000!5m2!1sen!2sae"
                  className="w-full h-full border-0 filter grayscale contrast-125 opacity-90 hover:grayscale-0 transition-all duration-500"
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="absolute bottom-4 left-4 bg-[#0F172A] text-white border border-white/20 px-4 py-2 font-technical-data text-xs flex items-center gap-2 shadow-md">
                  <div className="w-2 h-2 rounded-full bg-[#E90046] animate-pulse"></div>
                  <span>ALMASRA TECHNICAL SERVICES HQ &bull; DUBAI, UAE</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

      </main>

      {/* Pre-Footer Quick Contact Bar */}
      <div className="w-full bg-[#0F172A] text-white border-t border-outline-variant py-6 px-margin-edge">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 font-technical-data text-xs">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#E90046] text-sm">call</span>
            <span>+971 56 277 7400 &bull; +971 56 777 3100 &bull; +971 56 545 4332</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#E90046] text-sm">mail</span>
            <a href="mailto:info@almasrauae.com" className="hover:text-[#E90046] transition-colors">info@almasrauae.com</a>
          </div>
          <a href="https://wa.me/971565454332" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#25D366] font-semibold hover:underline">
            <span className="material-symbols-outlined text-sm">forum</span>
            <span>WhatsApp: +971 56 545 4332</span>
          </a>
        </div>
      </div>
    </div>
  );
};

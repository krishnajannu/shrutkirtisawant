import React from 'react';
import { NAV_LINKS } from '../constants';
import { Instagram, Clapperboard, ArrowUp, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    
    if (element) {
      const navHeight = 0;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      try {
        window.history.pushState(null, '', href);
      } catch (e) {
        // Ignore
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-magenta-950 text-slate-400 overflow-hidden pt-20 pb-10">
      {/* Decorative Top Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sunglow-500 via-ruby-500 to-magenta-900" />

      {/* Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.03] select-none">
        <h1 className="text-[15vw] font-display font-bold text-white leading-none tracking-tight">SHRUTKIRTI</h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-6">
            <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="inline-block">
                <h3 className="font-display text-3xl font-bold text-white tracking-wide">SHRUTKIRTI</h3>
            </a>
            <p className="text-slate-400 leading-relaxed font-sans max-w-sm">
              An artist dedicated to the craft of storytelling, bringing characters to life with authenticity, grace, and passion across theatre, television, and film.
            </p>
            <div className="flex gap-4 pt-2">
                <SocialLink href="https://www.instagram.com/shrutkirtisawant1111/" icon={Instagram} label="Instagram" />
                <SocialLink href="https://www.imdb.com/name/nm12279810/?ref_=ext_shr_lnk" icon={Clapperboard} label="IMDb" />
                <SocialLink href="mailto:shrutkirtisawant1111@gmail.com" icon={Mail} label="Email" />
            </div>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-3 md:col-start-7">
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-8 font-corporate">Explore</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map(link => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="hover:text-sunglow-400 transition-colors text-sm font-medium flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-sunglow-400 transition-colors" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact/Info Column */}
          <div className="md:col-span-3">
             <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-8 font-corporate">Contact</h4>
             <ul className="space-y-4 text-sm">
                <li className="flex flex-col">
                    <span className="text-xs text-slate-500 mb-1">Email</span>
                    <a href="mailto:shrutkirtisawant1111@gmail.com" className="text-slate-300 hover:text-white transition-colors">shrutkirtisawant1111@gmail.com</a>
                </li>
                <li className="flex flex-col">
                    <span className="text-xs text-slate-500 mb-1">Location</span>
                    <span className="text-slate-300">Mumbai, Maharashtra, India</span>
                </li>
             </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-500">
          <p>&copy; {currentYear} Shrutkirti Sawant. <span className="hidden md:inline">All Rights Reserved.</span></p>
          
          <button 
            onClick={scrollToTop} 
            className="group flex items-center gap-2 text-slate-400 hover:text-sunglow-400 transition-colors uppercase tracking-wider font-bold py-2 px-4 rounded-full border border-white/5 hover:border-white/10 bg-white/5 hover:bg-white/10"
          >
            Back to Top 
            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon: Icon, label }: { href: string, icon: any, label: string }) => (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-ruby-600 hover:border-ruby-500 transition-all duration-300 group"
      aria-label={label}
    >
      <Icon size={18} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
    </a>
);

export default Footer;
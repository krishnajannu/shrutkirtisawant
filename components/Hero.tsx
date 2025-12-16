import React from 'react';
import { motion } from 'framer-motion';
import { HERO_IMAGE } from '../constants';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const navHeight = 0;
      const elementPosition = aboutSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navHeight;

      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-magenta-950">
      {/* Background with accessible img */}
      <div className="absolute inset-0 z-0 select-none">
        <img 
          src={HERO_IMAGE} 
          alt="Shrutkirti Sawant - Marathi Actress Portfolio Cover" 
          className="absolute inset-0 w-full h-full object-cover object-top md:object-[center_25%]"
        />
        <div className="absolute inset-0 bg-magenta-950/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-magenta-950" />
        
        {/* Film Grain Overlay - Adds Cinematic Texture */}
        <div 
          className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none z-[1]"
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center"
        >
          <div className="mb-6 h-1 w-20 bg-sunglow-500" />

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-wide mb-6 shadow-black drop-shadow-lg">
            SHRUTKIRTI SAWANT
          </h1>
          
          <p className="font-corporate text-sm md:text-lg text-sunglow-400 uppercase tracking-[0.2em] font-medium mb-10">
            Indian Actress
          </p>

          <a
            href="#about"
            onClick={scrollToAbout}
            className="inline-flex items-center gap-2 px-8 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-full transition-all duration-300 backdrop-blur-sm group"
          >
            <span className="font-corporate text-xs font-bold uppercase tracking-widest">View Portfolio</span>
            <ChevronDown size={16} className="group-hover:translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Modern Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-0 z-20 flex flex-col items-center gap-4 pb-8 pointer-events-none"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-corporate">Scroll</span>
        <div className="w-[1px] h-24 bg-gradient-to-b from-white/0 via-white/10 to-white/0 relative overflow-hidden">
            <motion.div 
                className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-sunglow-500/80"
                animate={{ y: ["-100%", "200%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
            />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
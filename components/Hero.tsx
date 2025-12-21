import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';
import { HERO_IMAGE } from '../constants';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  // Mouse position state for 3D effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the mouse values
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  // Transformations for the 3D Text Container (Tilt)
  // Rotates slightly based on mouse position
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [7, -7]); 
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-7, 7]);

  // Transformations for the Background Image (Parallax)
  // Moves opposite to mouse to create depth
  const bgX = useTransform(mouseXSpring, [-0.5, 0.5], ["1%", "-1%"]);
  const bgY = useTransform(mouseYSpring, [-0.5, 0.5], ["1%", "-1%"]);

  // Dynamic Spotlight Gradient
  // Maps mouse coordinates to percentage for radial gradient positioning
  const spotlightX = useTransform(mouseXSpring, [-0.5, 0.5], [0, 100]);
  const spotlightY = useTransform(mouseYSpring, [-0.5, 0.5], [0, 100]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    
    // Calculate normalized position (-0.5 to 0.5)
    const xPct = (mouseXPos / width) - 0.5;
    const yPct = (mouseYPos / height) - 0.5;
    
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

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
    <section 
      id="home" 
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-magenta-950 perspective-[1000px]"
    >
      {/* Background with Parallax */}
      <motion.div 
        className="absolute inset-[-5%] z-0 select-none"
        style={{ x: bgX, y: bgY, scale: 1.05 }}
      >
        <img 
          src={HERO_IMAGE} 
          alt="Shrutkirti Sawant - Marathi Actress Portfolio Cover" 
          className="absolute inset-0 w-full h-full object-cover object-top md:object-[center_25%]"
        />
        <div className="absolute inset-0 bg-magenta-950/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-magenta-950" />
        
        {/* Film Grain Overlay */}
        <div 
          className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none z-[1]"
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
          }}
        />
      </motion.div>

      {/* Interactive Spotlight Orb */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none"
        style={{
          background: useMotionTemplate`radial-gradient(600px circle at ${spotlightX}% ${spotlightY}%, rgba(255, 183, 3, 0.15), transparent 80%)`
        }}
      />

      {/* 3D Tilted Content */}
      <motion.div 
        className="relative z-10 text-center px-6 max-w-5xl mx-auto w-full"
        style={{ 
          rotateX, 
          rotateY, 
          transformStyle: "preserve-3d" 
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center transform-gpu"
        >
          {/* Decorative floating line */}
          <motion.div 
            className="mb-6 h-1 w-20 bg-sunglow-500 shadow-[0_0_15px_rgba(255,183,3,0.5)]" 
            style={{ translateZ: 40 }} 
          />

          <motion.h1 
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-wide mb-6 shadow-black drop-shadow-2xl"
            style={{ translateZ: 80 }}
          >
            SHRUTKIRTI SAWANT
          </motion.h1>
          
          <motion.p 
            className="font-corporate text-sm md:text-lg text-sunglow-400 uppercase tracking-[0.2em] font-medium mb-10"
            style={{ translateZ: 60 }}
          >
            Indian Actress
          </motion.p>

          <motion.div style={{ translateZ: 100 }}>
            <a
              href="#about"
              onClick={scrollToAbout}
              className="inline-flex items-center gap-2 px-8 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-full transition-all duration-300 backdrop-blur-sm group hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              <span className="font-corporate text-xs font-bold uppercase tracking-widest">View Portfolio</span>
              <ChevronDown size={16} className="group-hover:translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Modern Scroll Indicator (Kept static relative to 3D tilt for contrast) */}
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
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { GALLERY_IMAGES } from '../constants';
import { GalleryItem } from '../types';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const GalleryCard: React.FC<{ image: GalleryItem; onClick: () => void }> = ({ image, onClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      onClick={onClick}
      className="flex-none w-[280px] md:w-[360px] aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border border-white/5 relative group/item bg-magenta-900 cursor-pointer transform transition-transform duration-300 hover:scale-[1.02]"
    >
      {/* Loading Placeholder */}
      <div 
        className={`absolute inset-0 bg-magenta-800/80 flex items-center justify-center transition-opacity duration-700 z-0 ${isLoaded ? 'opacity-0' : 'opacity-100'}`}
      >
        <div className="w-8 h-8 rounded-full border-2 border-white/10 border-t-sunglow-500 animate-spin" />
      </div>

      <img 
        src={image.src} 
        alt={image.alt || image.title} 
        className={`w-full h-full object-cover transition-all duration-1000 ease-out relative z-10 ${isLoaded ? 'opacity-100 blur-0' : 'opacity-0 blur-xl'}`}
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
      />
      
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <span className="inline-block self-start px-3 py-1 bg-sunglow-500 text-magenta-950 text-[10px] font-bold uppercase tracking-wider rounded mb-2 transform translate-y-4 group-hover/item:translate-y-0 transition-transform duration-300">
          {image.category}
        </span>
        <h3 className="text-white font-display text-xl transform translate-y-4 group-hover/item:translate-y-0 transition-transform duration-300 delay-75">
          {image.title}
        </h3>
      </div>
    </div>
  );
};

const Gallery: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Create a doubled array for infinite loop effect
  const loopImages = [...GALLERY_IMAGES, ...GALLERY_IMAGES];

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev! + 1) % GALLERY_IMAGES.length);
    }
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev! - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      
      switch (e.key) {
        case 'Escape':
          setSelectedIndex(null);
          break;
        case 'ArrowRight':
          setSelectedIndex((prev) => (prev! + 1) % GALLERY_IMAGES.length);
          break;
        case 'ArrowLeft':
          setSelectedIndex((prev) => (prev! - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
          break;
      }
    };

    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedIndex]);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-magenta-950 relative" aria-label="Photo Gallery">
        {/* Inject Styles for Marquee Animation */}
        <style>
            {`
            @keyframes marquee {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-50%); }
            }
            .animate-marquee {
                animation: marquee 80s linear infinite;
            }
            /* Pause on hover */
            .gallery-track:hover .animate-marquee {
                animation-play-state: paused;
            }
            `}
        </style>

      <div className="max-w-7xl mx-auto px-6 mb-12">
        <SectionTitle title="Photo Gallery" subtitle="A glimpse into professional moments" />
      </div>

      <div className="relative w-full overflow-hidden gallery-track group">
          {/* Gradient Edges for Smooth Fade - Opacity reduced by 50% */}
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-magenta-950/50 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-magenta-950/50 to-transparent z-20 pointer-events-none" />

          {/* Marquee Track */}
          <div className="flex w-max animate-marquee py-8">
            {loopImages.map((image, index) => (
              <div key={index} className="mx-3 md:mx-4">
                <GalleryCard 
                    image={image} 
                    onClick={() => setSelectedIndex(index % GALLERY_IMAGES.length)}
                />
              </div>
            ))}
          </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-lg flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 md:top-8 md:right-8 z-50 p-3 rounded-full bg-black/20 text-white/70 hover:bg-white hover:text-magenta-950 backdrop-blur-sm transition-all duration-300 border border-white/10"
              onClick={() => setSelectedIndex(null)}
              aria-label="Close gallery"
            >
              <X size={24} />
            </button>

            {/* Nav Buttons */}
            <button
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 p-3 md:p-4 rounded-full bg-black/20 text-white/70 hover:bg-sunglow-500 hover:text-magenta-950 backdrop-blur-sm transition-all duration-300 border border-white/10 shadow-lg group focus:outline-none focus:ring-2 focus:ring-sunglow-400 hidden md:block"
              onClick={handlePrev}
              aria-label="Previous image"
            >
              <ChevronLeft size={32} className="w-8 h-8 md:w-10 md:h-10 group-hover:scale-110 transition-transform" />
            </button>
            <button
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 p-3 md:p-4 rounded-full bg-black/20 text-white/70 hover:bg-sunglow-500 hover:text-magenta-950 backdrop-blur-sm transition-all duration-300 border border-white/10 shadow-lg group focus:outline-none focus:ring-2 focus:ring-sunglow-400 hidden md:block"
              onClick={handleNext}
              aria-label="Next image"
            >
              <ChevronRight size={32} className="w-8 h-8 md:w-10 md:h-10 group-hover:scale-110 transition-transform" />
            </button>

            {/* Image Container */}
            <div 
              className="relative max-w-7xl w-full h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="relative flex flex-col items-center justify-center max-h-full w-full"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(_, { offset, velocity }) => {
                    const swipe = Math.abs(offset.x) * velocity.x;
                    if (swipe < -10000) {
                      handleNext();
                    } else if (swipe > 10000) {
                      handlePrev();
                    }
                  }}
                >
                  <img
                    src={GALLERY_IMAGES[selectedIndex].src}
                    alt={GALLERY_IMAGES[selectedIndex].alt || GALLERY_IMAGES[selectedIndex].title}
                    className="max-h-[70vh] md:max-h-[85vh] w-auto max-w-full object-contain shadow-2xl rounded-sm"
                  />
                  
                  {/* Caption */}
                  <div className="mt-4 md:mt-6 text-center max-w-2xl px-4">
                    <h3 className="text-xl md:text-3xl font-display text-white mb-2 tracking-wide">
                      {GALLERY_IMAGES[selectedIndex].title}
                    </h3>
                    <span className="inline-block px-3 py-1 bg-white/10 text-sunglow-400 font-corporate text-xs font-bold uppercase tracking-widest rounded-full border border-white/10">
                      {GALLERY_IMAGES[selectedIndex].category}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Counter */}
            <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 text-white/30 font-corporate text-xs tracking-widest">
              {selectedIndex + 1} / {GALLERY_IMAGES.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
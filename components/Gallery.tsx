import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { GALLERY_IMAGES } from '../constants';
import { GalleryItem } from '../types';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const GalleryCard: React.FC<{ image: GalleryItem; index: number; onClick: () => void }> = ({ image, index, onClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ delay: 0.1, duration: 0.5 }}
      onClick={onClick}
      className="flex-none w-[280px] md:w-[360px] aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border border-white/5 snap-center relative group/item bg-magenta-900 cursor-pointer"
    >
      {/* Loading Placeholder */}
      <div 
        className={`absolute inset-0 bg-magenta-800/80 flex items-center justify-center transition-opacity duration-700 z-0 ${isLoaded ? 'opacity-0' : 'opacity-100'}`}
      >
        <div className="w-8 h-8 rounded-full border-2 border-white/10 border-t-sunglow-500 animate-spin" />
      </div>

      <img 
        src={image.src} 
        alt={image.alt || image.title || `Portfolio image ${index + 1}`} 
        className={`w-full h-full object-cover transition-all duration-1000 ease-out group-hover/item:scale-105 relative z-10 ${isLoaded ? 'opacity-100 blur-0 scale-100' : 'opacity-0 blur-xl scale-110'}`}
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
      />
      
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <span className="inline-block self-start px-3 py-1 bg-sunglow-500 text-magenta-950 text-[10px] font-bold uppercase tracking-wider rounded mb-2 transform translate-y-4 group-hover/item:translate-y-0 transition-transform duration-300">
          {image.category}
        </span>
        <h3 className="text-white font-display text-xl transform translate-y-4 group-hover/item:translate-y-0 transition-transform duration-300 delay-75">
          {image.title}
        </h3>
      </div>
    </motion.div>
  );
};

const Gallery: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth < 768 ? 300 : 450;
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const targetScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

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
    <section id="gallery" className="py-24 md:py-32 bg-magenta-950" aria-label="Photo Gallery">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="Photo Gallery" subtitle="A glimpse into professional moments" />

        <div className="relative group">
          {/* Controls - Updated visual style */}
          <button 
            onClick={() => scroll('left')}
            className="absolute -left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-sunglow-500 backdrop-blur-md p-4 rounded-full text-white hover:text-magenta-950 shadow-lg transition-all duration-300 hidden md:flex opacity-0 group-hover:opacity-100 focus:opacity-100 items-center justify-center border border-white/10"
            aria-label="Scroll gallery left"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute -right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-sunglow-500 backdrop-blur-md p-4 rounded-full text-white hover:text-magenta-950 shadow-lg transition-all duration-300 hidden md:flex opacity-0 group-hover:opacity-100 focus:opacity-100 items-center justify-center border border-white/10"
            aria-label="Scroll gallery right"
          >
            <ChevronRight size={24} />
          </button>

          {/* Gradient Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-magenta-950 to-transparent z-10 pointer-events-none md:w-20" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-magenta-950 to-transparent z-10 pointer-events-none md:w-20" />

          {/* Scroll Container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-4 md:gap-6 overflow-x-auto pb-12 pt-4 px-4 md:px-12 snap-x snap-mandatory scrollbar-hide focus:outline-none scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            tabIndex={0}
            role="region"
            aria-label="Gallery images"
          >
            {GALLERY_IMAGES.map((image, index) => (
              <GalleryCard 
                key={index} 
                image={image} 
                index={index} 
                onClick={() => setSelectedIndex(index)}
              />
            ))}
          </div>
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
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white transition-colors z-50 p-2 hover:bg-white/10 rounded-full"
              onClick={() => setSelectedIndex(null)}
              aria-label="Close gallery"
            >
              <X size={32} />
            </button>

            {/* Nav Buttons */}
            <button
              className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-2 md:p-4 hover:bg-white/10 rounded-full transition-all z-50"
              onClick={handlePrev}
              aria-label="Previous image"
            >
              <ChevronLeft size={36} className="md:w-12 md:h-12" />
            </button>
            <button
              className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-2 md:p-4 hover:bg-white/10 rounded-full transition-all z-50"
              onClick={handleNext}
              aria-label="Next image"
            >
              <ChevronRight size={36} className="md:w-12 md:h-12" />
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
                  className="relative flex flex-col items-center justify-center max-h-full"
                >
                  <img
                    src={GALLERY_IMAGES[selectedIndex].src}
                    alt={GALLERY_IMAGES[selectedIndex].alt || GALLERY_IMAGES[selectedIndex].title}
                    className="max-h-[75vh] md:max-h-[85vh] w-auto object-contain shadow-2xl rounded-sm"
                  />
                  
                  {/* Caption */}
                  <div className="mt-4 md:mt-6 text-center max-w-2xl px-4">
                    <h3 className="text-2xl md:text-3xl font-display text-white mb-2 tracking-wide">
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
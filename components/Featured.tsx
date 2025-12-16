import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { Play, Trophy, Star } from 'lucide-react';

interface FeaturedCardProps {
  image: string;
  badge: string;
  title: string;
  role: string;
  subtitle: string;
  description: string;
  imgPosition?: string;
  alt: string;
  delay?: number;
  icon?: 'play' | 'trophy' | 'star';
}

const FeaturedCard: React.FC<FeaturedCardProps> = ({ 
  image, badge, title, role, subtitle, description, 
  imgPosition = "bg-center", alt, delay = 0, icon = 'star'
}) => {
  // Convert tailwind bg-position classes to object-position classes
  const objectPositionClass = imgPosition.replace('bg-', 'object-');
  
  const Icon = icon === 'play' ? Play : icon === 'trophy' ? Trophy : Star;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className="relative h-[600px] w-full rounded-3xl overflow-hidden bg-magenta-950 shadow-2xl"
    >
        {/* Subtle Border */}
        <div className="absolute inset-0 p-[1px] bg-white/10 rounded-3xl z-20 pointer-events-none" />

        {/* Image Container */}
        <div className="absolute inset-0 w-full h-full overflow-hidden rounded-3xl">
            <img 
                src={image}
                alt={alt}
                loading="lazy"
                decoding="async"
                className={`w-full h-full object-cover ${objectPositionClass}`}
            />
             {/* Cinematic Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-magenta-950/95" />
            <div className="absolute inset-0 bg-magenta-950/20 mix-blend-multiply" />
        </div>

        {/* Floating Badge */}
        <div className="absolute top-8 left-8 z-30">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/10 text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-lg">
                <Icon size={12} fill="currentColor" />
                {badge}
            </span>
        </div>

        {/* Content Area */}
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-30 flex flex-col items-start">
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-3 leading-[1.1] drop-shadow-md">
                {title}
            </h3>
            
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6 text-sm font-medium">
                <span className="text-sunglow-400 font-corporate font-bold uppercase tracking-wider">{role}</span>
                <span className="hidden md:block w-1 h-1 rounded-full bg-white/30" />
                <span className="text-slate-300 font-sans tracking-wide">{subtitle}</span>
            </div>
            
            <div className="relative">
                <p className="text-slate-200 leading-relaxed text-base max-w-lg border-l-2 border-white/20 pl-5 font-sans">
                    {description}
                </p>
            </div>
        </div>
    </motion.div>
  );
};

const Featured: React.FC = () => {
  return (
    <section className="py-32 bg-magenta-950 text-white relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-0 w-full h-full bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-ruby-900/20 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle title="Featured Work" subtitle="Current highlights and major achievements" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <FeaturedCard 
            image="https://i.ibb.co/Q3rYxmNB/IMG-7245.png"
            badge="Currently Airing"
            title="Paaru"
            role="Damini Kirloskar"
            subtitle="Zee Marathi • 2024-Present"
            description="Playing the charismatic and comedic character of Damini, winning hearts with her versatile performance in this top-rated primetime show."
            alt="Scene from the TV show Paaru showing character Damini"
            delay={0}
            icon="play"
          />

          <FeaturedCard 
            image="https://i.ibb.co/m1tXxHR/IMG-0840.jpg"
            badge="Award Winner"
            title="Zee Marathi Award"
            role="Best Comedy Actress"
            subtitle="Utsav Natyancha • 2024"
            description="Recognized for outstanding comedic performance in Paaru. This prestigious award marks a significant milestone in her acting career."
            alt="Shrutkirti Sawant holding the Zee Marathi Award 2024 trophy"
            imgPosition="bg-top"
            delay={0.2}
            icon="trophy"
          />
        </div>
      </div>
    </section>
  );
};

export default Featured;
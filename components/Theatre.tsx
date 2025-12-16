import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { THEATRE_DATA } from '../constants';
import { PenTool, Sparkles, Theater as TheaterIcon, User } from 'lucide-react';

const Theatre: React.FC = () => {
  return (
    <section id="theatre" className="py-24 bg-magenta-950 text-white relative overflow-hidden">
      
      {/* --- Background Effects --- */}

      {/* 1. Curtain Fold Texture: Refined for subtlety and depth */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-20 mix-blend-soft-light"
        style={{
          backgroundImage: 'repeating-linear-gradient(90deg, rgba(0,0,0,0.8) 0%, transparent 5%, transparent 20%, rgba(0,0,0,0.8) 25%)',
          backgroundSize: '100px 100%'
        }}
      />
      
      {/* Vignette to enhance stage depth */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.6)_100%)]" />

      {/* 2. Top Spotlight: Dynamic pulsing effect */}
      <motion.div 
        className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[140%] max-w-7xl h-[800px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-magenta-900/10 to-transparent pointer-events-none blur-3xl z-0" 
        animate={{ 
            opacity: [0.6, 0.8, 0.6],
            scale: [1, 1.02, 1],
        }}
        transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
        }}
      />

      {/* 3. Deep Ambient Glow (Existing) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-magenta-900/20 blur-[120px] rounded-full pointer-events-none z-0" />
      
      {/* 4. Decorative Watermark (Existing) */}
      <div className="absolute right-0 bottom-0 opacity-[0.03] pointer-events-none select-none translate-x-1/3 translate-y-1/3 z-0">
        <TheaterIcon size={600} strokeWidth={0.5} />
      </div>

      {/* --- Content --- */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle title="नाट्य कार्य" subtitle="Theatrical Performances & Stage Plays" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {THEATRE_DATA.map((play, index) => {
            return (
              <motion.div
                key={play.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white/5 border border-white/10 p-6 rounded-xl overflow-hidden hover:bg-white/10 hover:border-sunglow-500/30 hover:shadow-2xl hover:shadow-sunglow-900/20 transition-all duration-300 flex flex-col h-full"
              >
                {/* Card Specific Accent Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-sunglow-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute left-0 top-6 bottom-6 w-0.5 bg-gradient-to-b from-transparent via-white/10 to-transparent group-hover:via-sunglow-500/50 transition-colors duration-300" />

                {/* Content Container */}
                <div className="pl-4 flex flex-col h-full">
                    
                    {/* Title */}
                    <div className="mb-4">
                        <h3 className="text-2xl font-bold text-white font-marathi leading-tight group-hover:text-sunglow-400 transition-colors duration-300">
                        {play.title}
                        </h3>
                    </div>

                    {/* Role Section */}
                    <div className="mb-6 flex items-start gap-3">
                        <div className="mt-1 p-1.5 rounded-full bg-white/5 text-slate-400 group-hover:text-sunglow-400 group-hover:bg-sunglow-400/10 transition-colors">
                            <User size={14} />
                        </div>
                        <div>
                            <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold block mb-0.5">Character</span>
                            <p className="text-lg font-medium text-slate-100 font-marathi tracking-wide">
                                {play.role}
                            </p>
                        </div>
                    </div>

                    <div className="mt-auto space-y-4 pt-4 border-t border-white/5 group-hover:border-white/10 transition-colors">
                        {/* Writer */}
                        {play.writer && (
                            <div className="flex items-center gap-2 text-sm text-slate-400">
                                <PenTool size={12} className="text-slate-600" />
                                <span className="text-xs font-marathi">Writer: <span className="text-slate-300">{play.writer}</span></span>
                            </div>
                        )}

                        {/* Highlight */}
                        {play.highlight && (
                            <div className="flex items-start gap-2">
                                <Sparkles size={12} className="text-sunglow-500 mt-1 shrink-0" fill="currentColor" />
                                <p className="text-xs text-sunglow-100/80 italic leading-relaxed font-sans">
                                    "{play.highlight}"
                                </p>
                            </div>
                        )}
                    </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Decorative 'Stage Floor' Line */}
        <div className="mt-16 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent w-full max-w-2xl mx-auto" />
      </div>
    </section>
  );
};

export default Theatre;
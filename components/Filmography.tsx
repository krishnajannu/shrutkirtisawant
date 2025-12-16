import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { TIMELINE_DATA } from '../constants';
import { Tv, Calendar, CheckCircle2, PlayCircle, Star } from 'lucide-react';

const Filmography: React.FC = () => {
  return (
    <section id="filmography" className="py-24 bg-magenta-950 text-white relative overflow-hidden">
       {/* Background Subtle Gradient for separation */}
       <div className="absolute inset-0 bg-gradient-to-b from-magenta-900/20 via-transparent to-magenta-900/20 pointer-events-none" />
       
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionTitle title="Television Journey" subtitle="Key roles and appearances on the small screen" />
        
        <div className="relative mt-16">
          {/* Vertical Gradient Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-sunglow-500/0 via-sunglow-500/30 to-sunglow-500/0 md:-ml-[0.5px]" />

          <div className="space-y-12">
            {TIMELINE_DATA.map((item, index) => {
               const isEven = index % 2 === 0;
               return (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 flex items-center justify-center z-20">
                    <div className="w-3 h-3 rounded-full bg-sunglow-500 shadow-[0_0_0_8px_rgba(255,183,3,0.1)] ring-4 ring-magenta-950" />
                  </div>

                  {/* Content Spacer for Desktop */}
                  <div className="md:w-1/2" />

                  {/* Content Card */}
                  <div className={`pl-20 md:pl-0 md:w-1/2 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                    <div className="group relative bg-white/5 border border-white/5 hover:border-sunglow-500/20 p-6 md:p-8 rounded-2xl transition-all duration-300 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-black/50 hover:-translate-y-1">
                        
                        {/* Status Badge */}
                        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-5 border ${
                            item.status === 'Currently Airing' 
                            ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20 shadow-[0_0_10px_rgba(52,211,153,0.1)]' 
                            : 'bg-white/5 text-slate-400 border-white/10'
                        } ${isEven ? 'md:ml-auto' : ''}`}>
                            {item.status === 'Currently Airing' ? <PlayCircle size={10} /> : <CheckCircle2 size={10} />}
                            {item.status}
                        </div>

                        <h3 className="text-3xl font-display font-bold text-white mb-2 group-hover:text-sunglow-400 transition-colors tracking-wide">
                            {item.title}
                        </h3>

                        <div className={`flex items-center gap-2 mb-5 text-sunglow-400 font-medium ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                            <Star size={14} fill="currentColor" className="opacity-80" />
                            <span className="text-sm tracking-wide font-corporate uppercase font-bold">{item.role}</span>
                        </div>
                        
                        <p className="text-slate-400 text-sm leading-relaxed font-sans mb-6">
                            {item.description}
                        </p>

                        <div className={`flex flex-col gap-2 pt-5 border-t border-white/5 group-hover:border-white/10 transition-colors ${isEven ? 'md:items-end' : 'md:items-start'}`}>
                             <div className="flex items-center gap-2 text-xs text-slate-500 font-bold uppercase tracking-widest group-hover:text-slate-400 transition-colors">
                                <Tv size={12} strokeWidth={2.5} />
                                {item.channel}
                             </div>
                             <div className="flex items-center gap-2 text-xs text-slate-600 font-bold uppercase tracking-widest">
                                <Calendar size={12} strokeWidth={2.5} />
                                {item.year}
                             </div>
                        </div>

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filmography;
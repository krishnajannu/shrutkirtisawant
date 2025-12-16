import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { AWARDS_DATA, SKILLS } from '../constants';
import { Award, Star, Medal, Sparkles, Trophy, Theater, Tv, Clapperboard, Laugh, Brain, UserRound, Heart, Languages as LangIcon, Mic2 } from 'lucide-react';

const CelebrationParticles = () => {
  const particles = Array.from({ length: 15 });
  
  return (
    <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none z-0">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-sunglow-400/30 rounded-full blur-[1px]"
          initial={{ 
            x: Math.random() * 100 + "%", 
            y: "110%", 
            opacity: 0 
          }}
          animate={{ 
            y: "-10%",
            opacity: [0, 1, 0],
            rotate: Math.random() * 360
          }}
          transition={{ 
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear"
          }}
          style={{
            width: Math.random() * 6 + 2 + "px",
            height: Math.random() * 6 + 2 + "px",
          }}
        />
      ))}
    </div>
  );
};

const CelebrationBlast = () => {
  const particles = Array.from({ length: 30 }).map((_, i) => ({
    angle: Math.random() * 360,
    distance: Math.random() * 120 + 50,
    size: Math.random() * 4 + 2,
    color: Math.random() > 0.5 ? '#FFBC42' : '#ffffff',
    delay: Math.random() * 0.2
  }));

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden rounded-2xl">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2 rounded-full"
          style={{ 
            backgroundColor: p.color,
            width: p.size,
            height: p.size,
            boxShadow: `0 0 6px ${p.color}`
          }}
          initial={{ x: "-50%", y: "-50%", scale: 0, opacity: 0 }}
          whileInView={{
            x: `calc(-50% + ${Math.cos(p.angle * (Math.PI / 180)) * p.distance}px)`,
            y: `calc(-50% + ${Math.sin(p.angle * (Math.PI / 180)) * p.distance}px)`,
            scale: [0, 1, 0],
            opacity: [0, 1, 0]
          }}
          viewport={{ once: true }}
          transition={{ 
            duration: 1.5, 
            ease: "easeOut",
            delay: 0.2 + p.delay
          }}
        />
      ))}
    </div>
  );
};

// Helper to get icon for skill
const getSkillIcon = (skill: string) => {
  const lower = skill.toLowerCase();
  if (lower.includes('theatre')) return Theater;
  if (lower.includes('tv') || lower.includes('television')) return Tv;
  if (lower.includes('film') || lower.includes('cinema')) return Clapperboard;
  if (lower.includes('comedy')) return Laugh;
  if (lower.includes('drama')) return Heart; // Represents emotion
  if (lower.includes('method')) return Brain;
  if (lower.includes('character')) return UserRound;
  return Star;
};

const Awards: React.FC = () => {
  const languages = ['Marathi', 'Hindi', 'English'];

  return (
    <section id="awards" className="py-24 bg-slate-50 text-magenta-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#8F2D56 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle title="Awards & Recognition" light={true} subtitle="Honoring excellence in theatre and television" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {AWARDS_DATA.map((award, index) => {
            const isWinner = award.type === 'winner';
            const isNomination = award.type === 'nomination';
            const isFeatured = award.isFeatured;
            const isFirst = index === 0;
            const isStatCard = award.id === '4'; // Special ID for the 80+ awards card

            return (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`group relative flex flex-col items-center text-center p-8 rounded-2xl transition-all duration-300 border ${
                  isWinner 
                    ? 'bg-gradient-to-br from-magenta-900 via-magenta-900 to-magenta-950 text-white shadow-2xl shadow-magenta-900/20' 
                    : 'bg-white text-magenta-950 shadow-lg shadow-slate-200/50'
                } ${
                  (isWinner || isFeatured) 
                    ? 'border-sunglow-500/50 ring-1 ring-sunglow-500/20' 
                    : 'border-slate-100'
                }`}
              >
                {/* Animations */}
                {isWinner && <CelebrationParticles />}
                {isFirst && isWinner && <CelebrationBlast />}

                {/* Badges */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                    {isWinner ? (
                      <div className="px-4 py-1.5 bg-gradient-to-r from-sunglow-400 to-sunglow-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-full flex items-center gap-1.5 shadow-lg shadow-sunglow-500/30 border border-white/20">
                        <Trophy size={11} fill="currentColor" /> Winner
                      </div>
                    ) : isNomination ? (
                      <div className="px-4 py-1.5 bg-gradient-to-r from-slate-100 to-slate-200 text-slate-600 text-[10px] font-bold uppercase tracking-widest rounded-full flex items-center gap-1.5 shadow-md border border-slate-300">
                        <Medal size={11} className="text-slate-500" /> Nominated
                      </div>
                    ) : isFeatured && (
                      <div className="px-4 py-1.5 bg-gradient-to-r from-sunglow-400 to-sunglow-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-full flex items-center gap-1.5 shadow-lg">
                        <Sparkles size={11} fill="currentColor" /> Featured
                      </div>
                    )}
                </div>

                {/* Icon Circle */}
                {!isStatCard && (
                    <div className={`mb-6 p-4 rounded-full relative z-10 backdrop-blur-sm ${
                      isWinner 
                        ? 'bg-white/5 text-sunglow-400 ring-1 ring-white/10' 
                        : 'bg-magenta-50 text-magenta-700'
                    }`}>
                      {isWinner ? (
                        <motion.div
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index }}
                        >
                          <Award size={32} strokeWidth={1.5} />
                        </motion.div>
                      ) : isNomination ? (
                        <Medal size={32} strokeWidth={1.5} />
                      ) : (
                        <Star size={32} strokeWidth={1.5} />
                      )}
                    </div>
                )}

                {/* Content */}
                <div className="relative z-10 w-full flex-1 flex flex-col items-center">
                    
                    {isStatCard ? (
                         /* Special Layout for 80+ Awards Card */
                        <div className="py-2 flex flex-col items-center justify-center h-full">
                            <motion.div 
                                initial={{ scale: 0.5, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.8, type: "spring" }}
                                className="text-7xl font-display font-bold text-sunglow-400 mb-2 drop-shadow-sm"
                            >
                                80+
                            </motion.div>
                             <h3 className="text-2xl font-display font-bold text-white mb-2">
                                Best Actress Awards
                            </h3>
                             <p className="text-slate-300 text-sm font-medium">State Level Drama Competitions</p>
                        </div>
                    ) : (
                        /* Standard Layout */
                        <>
                            <h3 className={`text-xl font-display font-bold mb-2 leading-tight ${isWinner ? 'text-white' : 'text-magenta-950'}`}>
                            {award.title}
                            </h3>
                            
                            <p className={`text-xs font-bold uppercase tracking-widest mb-5 font-corporate pb-4 border-b ${isWinner ? 'text-sunglow-400 border-white/10' : 'text-ruby-500 border-slate-100'}`}>
                            {award.category || 'Recognition'}
                            </p>
                            
                            {award.work && (
                            <p className={`text-sm mb-4 font-sans italic ${isWinner ? 'text-slate-300' : 'text-slate-500'}`}>
                                For "{award.work}"
                            </p>
                            )}
                            
                            {award.description && (
                            <p className={`text-sm leading-relaxed mt-auto font-medium ${isWinner ? 'text-slate-300' : 'text-slate-600'}`}>
                                {award.description}
                            </p>
                            )}
                        </>
                    )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Enhanced Skills & Expertise Section */}
        <div className="max-w-5xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-12">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-magenta-950 mb-4">Professional Expertise</h3>
            <div className="h-1 w-20 bg-gradient-to-r from-sunglow-500 to-ruby-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Performance Skills */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-ruby-50 text-ruby-600 rounded-lg">
                        <Star size={20} />
                    </div>
                    <h4 className="font-display text-xl font-bold text-magenta-950">Acting & Performance</h4>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {SKILLS.map((skill, index) => {
                        const Icon = getSkillIcon(skill);
                        return (
                            <motion.div 
                                key={skill}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-ruby-200 hover:bg-ruby-50/50 transition-colors group cursor-default"
                            >
                                <Icon size={16} className="text-slate-400 group-hover:text-ruby-500 transition-colors" />
                                <span className="text-sm font-semibold text-slate-700 group-hover:text-magenta-900">{skill}</span>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Languages & Voice */}
            <div className="space-y-6">
                
                {/* Languages */}
                <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-sunglow-50 text-sunglow-600 rounded-lg">
                            <LangIcon size={20} />
                        </div>
                        <h4 className="font-display text-xl font-bold text-magenta-950">Languages Spoken</h4>
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                        {languages.map((lang, index) => (
                             <motion.div 
                                key={lang}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                                className="flex items-center gap-2 px-4 py-2 rounded-full bg-sunglow-50 border border-sunglow-100 text-sunglow-700 font-bold text-sm"
                            >
                                <span className="w-2 h-2 rounded-full bg-sunglow-500" />
                                {lang}
                            </motion.div>
                        ))}
                    </div>
                    <p className="mt-4 text-sm text-slate-500 italic">Fluent in reading, writing, and speaking.</p>
                </div>

                {/* Additional Capabilities (Visual Placeholder) */}
                <div className="bg-gradient-to-r from-magenta-900 to-magenta-950 rounded-3xl p-8 text-white shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                        <Mic2 size={100} />
                    </div>
                    
                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-white/10 rounded-lg">
                                <Mic2 size={20} className="text-sunglow-400" />
                            </div>
                            <h4 className="font-display text-xl font-bold">Voice Modulation</h4>
                        </div>
                        <p className="text-slate-300 text-sm leading-relaxed mb-4">
                            Skilled in voice acting, dubbing, and adapting dialects for diverse character portrayals.
                        </p>
                        <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                            <div className="bg-sunglow-500 h-full w-3/4 rounded-full" />
                        </div>
                    </div>
                </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
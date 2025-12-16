import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { STATS } from '../constants';
import CountUp from './CountUp';
import { MapPin, GraduationCap, Ruler, Calendar, Languages, Quote } from 'lucide-react';

const About: React.FC = () => {
  const personalInfo = [
    { icon: Calendar, label: 'Born', value: '11th November 1996' },
    { icon: MapPin, label: 'Location', value: 'Mumbai, Maharashtra' },
    { icon: GraduationCap, label: 'Education', value: 'BA in Dramatics' },
    { icon: Ruler, label: 'Height', value: "5'4\" (1.63 m)" },
    { icon: Languages, label: 'Languages', value: 'Marathi, Hindi, English' },
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 text-magenta-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-magenta-50/50 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sunglow-500/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle title="About The Artist" light={true} />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Biography & Details */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h3 className="text-3xl md:text-4xl font-display font-bold text-magenta-950 mb-6 leading-tight">
                  Bringing stories to life with <span className="text-ruby-600">passion</span> and <span className="text-ruby-600">authenticity</span>.
                </h3>
                
                <div className="relative pl-6 border-l-4 border-sunglow-400 mb-8">
                    <Quote className="absolute -top-2 -left-2 text-sunglow-400 fill-current opacity-20 transform -scale-x-100" size={40} />
                    <p className="text-lg leading-relaxed text-slate-700 font-sans italic">
                    "Acting is not just about pretending; it's about living the truth of the character in imaginary circumstances."
                    </p>
                </div>

                <p className="text-slate-600 leading-relaxed font-sans mb-6 text-base md:text-lg">
                  Shrutkirti Ranjeet Sawant is an acclaimed Indian actress who has carved a niche for herself in Marathi films, television serials, and theatre. 
                  With over a decade of dedication to the performing arts, she is celebrated for her versatility and ability to embody complex characters with grace.
                  Her work bridges the gap between traditional theatre roots and modern cinematic storytelling.
                </p>
            </motion.div>

            {/* Personal Info Grid */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8 pt-6 border-t border-slate-200"
            >
                {personalInfo.map((item, index) => (
                    <div key={item.label} className="flex items-start gap-4 group">
                        <div className="p-2.5 rounded-full bg-white border border-slate-200 text-magenta-700 shadow-sm group-hover:border-sunglow-400 group-hover:text-sunglow-500 transition-colors">
                            <item.icon size={18} strokeWidth={1.5} />
                        </div>
                        <div>
                            <span className="block text-xs uppercase text-slate-400 tracking-widest font-bold mb-0.5">{item.label}</span>
                            <span className="text-base font-medium text-magenta-950">{item.value}</span>
                        </div>
                    </div>
                ))}
            </motion.div>
          </div>

          {/* Right Column: Stats Cards */}
          <div className="lg:col-span-5 relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {STATS.map((stat, index) => (
                <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -5 }}
                    className="bg-white p-6 rounded-2xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] border border-slate-100 hover:border-sunglow-200 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group"
                >
                    <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-magenta-700 to-ruby-600 mb-3 font-condensed group-hover:from-sunglow-500 group-hover:to-ruby-500 transition-all">
                        <CountUp value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="h-0.5 w-8 bg-slate-100 mb-3 group-hover:bg-sunglow-400 transition-colors" />
                    <div className="text-xs uppercase tracking-widest text-slate-500 font-bold group-hover:text-magenta-900 transition-colors">
                        {stat.label}
                    </div>
                </motion.div>
                ))}
            </div>
            
            {/* Decorative Element under stats */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-magenta-100/50 via-transparent to-transparent rounded-full blur-3xl opacity-60" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
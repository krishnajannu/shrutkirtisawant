import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { Mail, Phone, Instagram, Clapperboard, ArrowUpRight, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const contactItems = [
    { 
      icon: Mail, 
      label: 'Email', 
      value: 'shrutkirtisawant1111@gmail.com', 
      href: 'mailto:shrutkirtisawant1111@gmail.com',
      action: 'Email'
    },
    { 
      icon: Phone, 
      label: 'Phone', 
      value: '+91 8408024196', 
      href: 'tel:+918408024196',
      action: 'Call'
    },
    { 
      icon: Instagram, 
      label: 'Instagram', 
      value: '@shrutkirtisawant', 
      href: 'https://www.instagram.com/shrutkirtisawant1111/', 
      target: '_blank',
      action: 'Follow'
    },
    { 
      icon: Clapperboard, 
      label: 'IMDb', 
      value: 'Shrutkirti Sawant', 
      href: 'https://www.imdb.com/name/nm12279810/?ref_=ext_shr_lnk', 
      target: '_blank',
      action: 'View'
    }
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-magenta-950 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
             <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-sunglow-500/10 to-transparent rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
             <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-t from-ruby-500/10 to-transparent rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3" />
        </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle title="Get In Touch" subtitle="Available for feature films, television, and theatre productions" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Side: Pitch */}
            <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-5 space-y-8"
            >
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest font-corporate">Open for Opportunities</span>
                </div>

                <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.1]">
                    Let's create something <span className="text-transparent bg-clip-text bg-gradient-to-r from-sunglow-400 to-ruby-500">memorable</span> together.
                </h3>
                
                <p className="text-slate-400 text-lg leading-relaxed font-sans max-w-md">
                    Whether you have a script in mind, a casting inquiry, or just want to discuss a project, I'm always excited to connect with fellow creatives.
                </p>

                <div className="hidden lg:flex items-center gap-4 text-white/20">
                    <div className="h-px bg-white/20 w-12" />
                    <Send size={24} />
                </div>
            </motion.div>

            {/* Right Side: Contact List */}
            <div className="lg:col-span-7 grid grid-cols-1 gap-4">
                {contactItems.map((item, index) => (
                <motion.a 
                    key={item.label}
                    href={item.href}
                    target={item.target}
                    rel={item.target ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="group relative flex items-center gap-6 p-5 md:p-6 rounded-2xl border border-white/5 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300"
                >
                    <div className="flex-shrink-0 p-4 rounded-xl bg-gradient-to-br from-white/10 to-white/5 text-sunglow-400 group-hover:scale-110 group-hover:text-sunglow-300 transition-all duration-300 shadow-inner border border-white/10">
                        <item.icon size={24} strokeWidth={1.5} />
                    </div>
                    
                    <div className="flex-grow min-w-0">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-1 group-hover:text-slate-400 transition-colors">{item.label}</h4>
                        <p className="text-lg md:text-xl font-medium text-slate-200 truncate group-hover:text-white transition-colors font-sans">
                            {item.value}
                        </p>
                    </div>

                    <div className="flex-shrink-0 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-sunglow-500">
                        <ArrowUpRight size={20} strokeWidth={2} />
                    </div>
                </motion.a>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
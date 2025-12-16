import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  title: string;
  subtitle?: string;
  light?: boolean;
}

const SectionTitle: React.FC<Props> = ({ title, subtitle, light = false }) => {
  return (
    <div className="text-center mb-16">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`font-display text-3xl md:text-5xl font-bold mb-4 ${light ? 'text-magenta-900' : 'text-white'}`}
      >
        {title}
      </motion.h2>
      <div className="flex justify-center mb-4">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="h-1 bg-gradient-to-r from-sunglow-500 to-ruby-500" 
        />
      </div>
      {subtitle && (
        <p className={`text-lg max-w-2xl mx-auto ${light ? 'text-slate-600' : 'text-slate-400'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
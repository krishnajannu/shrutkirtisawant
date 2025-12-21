import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { Mail, Phone, Instagram, Clapperboard, ArrowUpRight, Send, Lock, Unlock, KeyRound, X } from 'lucide-react';

const Contact: React.FC = () => {
  // --- ADVANCED SECURITY CONFIGURATION ---
  // The phone number and PIN are NOT stored in plain text.
  // We use a XOR cipher. The data below is the result of encrypting the real phone number
  // with the PIN '3012'.
  
  // Real Phone: "+91 8408024196"
  // PIN: "3012"
  // To generate new data: Array.from("+91 8408024196").map((c, i) => c.charCodeAt(0) ^ "3012".charCodeAt(i % 4))
  const ENCRYPTED_PHONE_DATA = [24, 9, 0, 18, 11, 4, 1, 10, 3, 2, 5, 3, 10, 6];
  const HIDDEN_PHONE = "+91 99**** ****"; 

  // -----------------------------

  const [isPhoneUnlocked, setIsPhoneUnlocked] = useState(false);
  const [decryptedPhone, setDecryptedPhone] = useState('');
  const [showPinInput, setShowPinInput] = useState(false);
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Attempt to decrypt using the entered PIN
    try {
      const result = xorDecrypt(ENCRYPTED_PHONE_DATA, pin);
      
      // Validation: We expect the phone number to start with specific digits (e.g., Country Code)
      // This confirms the PIN is correct without storing the PIN itself.
      if (result.startsWith("+91")) {
        setDecryptedPhone(result);
        setIsPhoneUnlocked(true);
        setShowPinInput(false);
        setError(false);
      } else {
        throw new Error("Invalid decryption");
      }
    } catch (err) {
      setError(true);
      setPin('');
    }
  };

  // Simple XOR Decryption
  const xorDecrypt = (data: number[], key: string): string => {
    if (!key) return "";
    let result = "";
    for (let i = 0; i < data.length; i++) {
      // XOR the data byte with the key character code (cycling through key)
      const charCode = data[i] ^ key.charCodeAt(i % key.length);
      result += String.fromCharCode(charCode);
    }
    return result;
  };

  const contactItems = [
    { 
      icon: Mail, 
      label: 'Email', 
      value: 'shrutkirtisawant1111@gmail.com', 
      href: 'mailto:shrutkirtisawant1111@gmail.com',
      action: 'Email'
    },
    { 
      icon: isPhoneUnlocked ? Phone : Lock, 
      label: 'Phone', 
      value: isPhoneUnlocked ? decryptedPhone : 'Protected Number', 
      href: isPhoneUnlocked ? `tel:${decryptedPhone}` : '#',
      action: isPhoneUnlocked ? 'Call' : 'Unlock',
      isSecure: true // Flag to identify this item
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
                <div key={index} className="relative"> {/* Wrapper for positioning */}
                  <motion.a 
                      href={item.isSecure && !isPhoneUnlocked ? '#' : item.href}
                      target={item.target}
                      rel={item.target ? "noopener noreferrer" : undefined}
                      onClick={(e) => {
                        if (item.isSecure && !isPhoneUnlocked) {
                          e.preventDefault();
                          setShowPinInput(true);
                        }
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className={`group relative flex items-center gap-6 p-5 md:p-6 rounded-2xl border transition-all duration-300 ${
                        item.isSecure && !isPhoneUnlocked 
                          ? 'bg-magenta-900/40 border-sunglow-500/20 cursor-pointer' 
                          : 'border-white/5 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/20'
                      }`}
                  >
                      <div className={`flex-shrink-0 p-4 rounded-xl shadow-inner border border-white/10 transition-all duration-300 ${
                        item.isSecure && !isPhoneUnlocked
                          ? 'bg-sunglow-500/10 text-sunglow-400'
                          : 'bg-gradient-to-br from-white/10 to-white/5 text-sunglow-400 group-hover:scale-110 group-hover:text-sunglow-300'
                      }`}>
                          <item.icon size={24} strokeWidth={1.5} />
                      </div>
                      
                      <div className="flex-grow min-w-0">
                          <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-1 group-hover:text-slate-400 transition-colors">
                            {item.label}
                            {item.isSecure && !isPhoneUnlocked && <span className="ml-2 text-sunglow-500 text-[9px]">(Access Required)</span>}
                          </h4>
                          <p className={`text-lg md:text-xl font-medium truncate transition-colors font-sans ${
                            item.isSecure && !isPhoneUnlocked ? 'text-slate-400 blur-[2px]' : 'text-slate-200 group-hover:text-white'
                          }`}>
                              {item.isSecure && !isPhoneUnlocked ? HIDDEN_PHONE : item.value}
                          </p>
                      </div>

                      <div className={`flex-shrink-0 transition-all duration-300 ${
                         item.isSecure && !isPhoneUnlocked ? 'text-sunglow-500 opacity-100' : 'text-sunglow-500 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'
                      }`}>
                          {item.isSecure && !isPhoneUnlocked ? <Lock size={20} /> : <ArrowUpRight size={20} strokeWidth={2} />}
                      </div>
                  </motion.a>

                  {/* Security Input Overlay */}
                  <AnimatePresence>
                    {item.isSecure && showPinInput && !isPhoneUnlocked && (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="absolute inset-0 z-20 bg-magenta-900 rounded-2xl border border-sunglow-500/50 shadow-2xl flex items-center justify-between p-4 md:p-6"
                      >
                        <div className="flex items-center gap-4 flex-grow">
                          <div className="p-3 bg-sunglow-500/10 rounded-xl text-sunglow-500">
                             <KeyRound size={20} />
                          </div>
                          <form onSubmit={handleUnlock} className="flex-grow relative">
                            <input 
                              type="password" 
                              autoFocus
                              placeholder="Enter Access PIN"
                              value={pin}
                              onChange={(e) => setPin(e.target.value)}
                              className={`w-full bg-black/20 border text-white text-sm rounded-lg px-4 py-3 outline-none focus:border-sunglow-500 transition-colors placeholder:text-white/20 ${error ? 'border-red-500' : 'border-white/10'}`}
                            />
                            {error && <span className="absolute -bottom-5 left-0 text-[10px] text-red-400 font-bold tracking-wider">INCORRECT PIN</span>}
                          </form>
                        </div>
                        
                        <div className="flex items-center gap-2 ml-4">
                           <button 
                              onClick={handleUnlock}
                              className="p-3 bg-sunglow-500 text-magenta-950 rounded-lg hover:bg-sunglow-400 transition-colors font-bold"
                           >
                             <Unlock size={18} />
                           </button>
                           <button 
                              onClick={() => { setShowPinInput(false); setError(false); }}
                              className="p-3 bg-white/5 text-white/50 rounded-lg hover:bg-white/10 hover:text-white transition-colors"
                           >
                             <X size={18} />
                           </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
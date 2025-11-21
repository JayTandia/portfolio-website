import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ArrowUp, Copy, Check, ExternalLink } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  const [time, setTime] = useState<string>('');
  const [copied, setCopied] = useState(false);

  // Update time every second
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SOCIAL_LINKS.email.replace('mailto:', ''));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { name: 'Github', icon: Github, href: SOCIAL_LINKS.github },
    { name: 'LinkedIn', icon: Linkedin, href: SOCIAL_LINKS.linkedin },
    { name: 'Twitter', icon: Twitter, href: SOCIAL_LINKS.twitter },
  ];

  return (
    <footer id="contact" className="relative bg-[#050607] pt-24 px-6 pb-8 overflow-hidden rounded-t-[3rem] -mt-12 border-t border-white/5">
      
      {/* Decorative Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-high border border-white/5 text-primary text-sm font-medium mb-6"
            >
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Open for Opportunities
            </motion.div>
            
            <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[10vw] md:text-[7vw] leading-[0.9] font-display font-bold text-white tracking-tight mb-8"
            >
                LET'S WORK <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-500 to-gray-800">TOGETHER</span>
            </motion.h2>
        </div>

        {/* Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-24">
            
            {/* Email Copy Card */}
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="md:col-span-7 relative group cursor-pointer"
                onClick={handleCopyEmail}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative h-full bg-surface-high border border-white/5 rounded-[2rem] p-8 md:p-12 flex flex-col justify-between hover:border-primary/30 transition-colors duration-300">
                    <div className="flex justify-between items-start">
                        <div className="p-4 rounded-full bg-surface-highlight border border-white/5">
                            <Mail size={32} className="text-white" />
                        </div>
                        <div className="p-3 rounded-full bg-white/5 text-gray-400 group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                            <AnimatePresence mode='wait'>
                                {copied ? (
                                    <motion.div
                                        key="check"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        exit={{ scale: 0 }}
                                    >
                                        <Check size={20} />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="copy"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        exit={{ scale: 0 }}
                                    >
                                        <Copy size={20} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                    
                    <div>
                        <p className="text-gray-400 mb-2">Drop me an email</p>
                        <h3 className="text-2xl md:text-4xl font-bold text-white break-all">
                            {SOCIAL_LINKS.email.replace('mailto:', '')}
                        </h3>
                    </div>
                </div>
            </motion.div>

            {/* Social Links & Location */}
            <div className="md:col-span-5 flex flex-col gap-6">
                {/* Socials */}
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="flex-1 bg-[#16181a] border border-white/5 rounded-[2rem] p-8 flex items-center justify-around"
                >
                    {socialLinks.map((social, idx) => (
                        <a 
                            key={idx}
                            href={social.href}
                            target="_blank"
                            rel="noreferrer"
                            className="group/icon flex flex-col items-center gap-2"
                        >
                            <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-surface border border-white/5 flex items-center justify-center text-gray-400 group-hover/icon:bg-white group-hover/icon:text-black group-hover/icon:scale-110 transition-all duration-300 shadow-lg">
                                <social.icon size={24} />
                            </div>
                            <span className="text-xs font-medium text-gray-500 group-hover/icon:text-white transition-colors">{social.name}</span>
                        </a>
                    ))}
                </motion.div>

                {/* Location & Time */}
                <motion.div 
                     initial={{ opacity: 0, x: 20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.2 }}
                     className="bg-[#16181a] border border-white/5 rounded-[2rem] p-8 flex justify-between items-center"
                >
                    <div>
                        <p className="text-gray-400 text-sm mb-1">Based in</p>
                        <p className="text-white font-medium text-lg">India</p>
                    </div>
                    <div className="h-10 w-px bg-white/10" />
                    <div className="text-right">
                         <p className="text-gray-400 text-sm mb-1">Local time</p>
                         <p className="text-white font-medium text-lg tabular-nums">{time}</p>
                    </div>
                </motion.div>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col-reverse md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
                <p className="text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Jay Tandia. All rights reserved.
                </p>
                <div className="flex gap-6 text-sm font-medium text-gray-400">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                </div>
            </div>

            <button 
                onClick={scrollToTop}
                className="group flex items-center gap-3 px-5 py-3 rounded-full bg-surface border border-white/5 text-gray-300 hover:bg-white hover:text-black transition-all duration-300"
            >
                <span className="text-sm font-medium">Back to Top</span>
                <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
            </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
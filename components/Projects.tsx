import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS, ACHIEVEMENTS } from '../constants';
import { ArrowUpRight, Sparkles, Layers } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 px-6 relative">
      {/* Subtle Background accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 rounded-lg bg-primary-container text-on-primary-container">
                        <Layers size={20} />
                    </div>
                    <span className="text-primary font-bold tracking-wider uppercase text-sm">Selected Works</span>
                </div>
                <h2 className="font-display text-4xl md:text-6xl font-bold text-white">Featured Projects</h2>
            </motion.div>
            
            <motion.p 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-gray-400 max-w-xs md:text-right"
            >
                A collection of applications focusing on performance, design, and utility.
            </motion.p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROJECTS.map((project, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`group relative rounded-[2.5rem] p-8 flex flex-col justify-between overflow-hidden border border-white/5 transition-all duration-500 hover:border-white/10 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50
                        ${project.size === 'large' ? 'md:col-span-2 min-h-[420px]' : 'md:col-span-1 min-h-[420px]'}
                        bg-[#1e2124]
                    `}
                >
                    {/* Material State Layer */}
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300 pointer-events-none" />
                    
                    {/* Ambient Glow */}
                    <div className={`absolute -right-20 -top-20 w-64 h-64 rounded-full bg-gradient-to-br ${project.color} blur-[100px] opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />

                    <div className="relative z-10">
                        <div className="flex justify-between items-start mb-8">
                            <div className="h-14 w-14 rounded-2xl bg-surface-highlight flex items-center justify-center text-white border border-white/5 shadow-inner">
                                <project.icon size={26} strokeWidth={1.5} />
                            </div>
                            <a 
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="h-12 w-12 rounded-full bg-white text-black flex items-center justify-center opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:scale-110"
                            >
                                <ArrowUpRight size={24} />
                            </a>
                        </div>
                        
                        <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 group-hover:text-primary transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed text-lg">
                            {project.description}
                        </p>
                    </div>

                    <div className="relative z-10 mt-8 pt-8 border-t border-white/5">
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((t, i) => (
                                <span key={i} className="text-xs font-bold px-4 py-2 rounded-full bg-surface text-gray-300 border border-white/5 group-hover:border-white/10 transition-colors">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
        
        {/* Achievements Section */}
        <div className="mt-16">
             <h3 className="text-2xl font-display font-bold text-white mb-8 pl-4 border-l-4 border-primary">Honors & Awards</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {ACHIEVEMENTS.map((ach, index) => (
                     <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="rounded-[2rem] bg-surface-high border border-white/5 p-8 flex items-start gap-6 hover:bg-surface-highlight transition-colors duration-300"
                     >
                         <div className="h-14 w-14 rounded-2xl bg-tertiary-container text-tertiary flex items-center justify-center shrink-0">
                             <ach.icon size={28} />
                         </div>
                         <div>
                             <h4 className="text-xl font-bold text-white mb-1">{ach.title}</h4>
                             <p className="text-primary font-medium text-sm mb-2">{ach.org}</p>
                             <p className="text-gray-400 text-sm leading-relaxed">{ach.desc}</p>
                         </div>
                     </motion.div>
                 ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
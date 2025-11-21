import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../constants';
import { Calendar, Briefcase, Rocket } from 'lucide-react';

const Experience: React.FC = () => {
  // Separate data based on type
  const entrepreneurship = EXPERIENCE.filter(exp => exp.type === 'Entrepreneurship');
  const internships = EXPERIENCE.filter(exp => exp.type === 'Internship');

  return (
    <section id="experience" className="py-32 px-6 bg-[#0f1214] relative overflow-hidden">
      
       {/* Background elements */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-tertiary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
            <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
            >
                <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">Experience</h2>
                <p className="text-gray-400 text-lg max-w-2xl">
                    My professional journey split between building my own ventures and engineering at scale.
                </p>
            </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            
            {/* Entrepreneurship Column */}
            <div>
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 mb-12"
                >
                    <div className="h-12 w-12 rounded-2xl bg-tertiary-container/20 border border-tertiary/20 flex items-center justify-center text-tertiary">
                        <Rocket size={24} />
                    </div>
                    <h3 className="text-3xl font-display font-bold text-white">Entrepreneurship</h3>
                </motion.div>

                <div className="relative space-y-12 border-l border-white/10 ml-6 pl-8 md:ml-6 md:pl-12">
                    {entrepreneurship.map((exp, index) => (
                        <ExperienceCard key={`ent-${index}`} exp={exp} index={index} type="entrepreneurship" />
                    ))}
                </div>
            </div>

            {/* Internship Column */}
            <div>
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 mb-12"
                >
                     <div className="h-12 w-12 rounded-2xl bg-primary-container/20 border border-primary/20 flex items-center justify-center text-primary">
                        <Briefcase size={24} />
                    </div>
                    <h3 className="text-3xl font-display font-bold text-white">Internships</h3>
                </motion.div>

                <div className="relative space-y-12 border-l border-white/10 ml-6 pl-8 md:ml-6 md:pl-12">
                    {internships.map((exp, index) => (
                        <ExperienceCard key={`int-${index}`} exp={exp} index={index} type="internship" />
                    ))}
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

const ExperienceCard = ({ exp, index, type }: { exp: any, index: number, type: 'entrepreneurship' | 'internship' }) => {
    const isEnt = type === 'entrepreneurship';
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative group"
        >
            {/* Timeline Dot */}
            <div className={`absolute -left-[2.4rem] md:-left-[3.4rem] top-8 w-4 h-4 rounded-full border-2 transition-all duration-300 bg-[#0f1214] z-10
                ${isEnt ? 'border-tertiary group-hover:scale-125 group-hover:bg-tertiary' : 'border-primary group-hover:scale-125 group-hover:bg-primary'}
            `}>
                <div className={`absolute inset-0 bg-current opacity-20 blur-md rounded-full group-hover:opacity-60 transition-opacity`} />
            </div>

            <div className="relative p-6 md:p-8 rounded-[2rem] bg-surface-high border border-white/5 hover:border-white/10 transition-all duration-300 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-1">
                <div className="flex flex-col gap-1 mb-4">
                     <h4 className={`text-xl font-bold ${isEnt ? 'text-tertiary' : 'text-primary'}`}>{exp.role}</h4>
                     <h5 className="text-xl text-white font-medium">{exp.company}</h5>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-500 mb-6 font-medium bg-surface/50 w-fit px-3 py-1 rounded-lg border border-white/5">
                    <Calendar size={14} />
                    {exp.period}
                </div>

                <p className="text-gray-300 leading-relaxed mb-6 text-base">
                    {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill: string, i: number) => (
                        <span key={i} className="px-3 py-1 rounded-lg bg-surface border border-white/5 text-xs font-medium text-gray-400 group-hover:border-white/10 transition-colors">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default Experience;

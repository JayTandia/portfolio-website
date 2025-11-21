
import React from 'react';
import { motion } from 'framer-motion';

const SKILLS_DATA = [
    // Row 1: Languages & Frameworks
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", dark: true },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
    { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Framer", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg" },
    
    // Row 2: Backend & Tools
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
    { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", dark: true },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
    { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
];

// Split into two rows
const ROW_1 = SKILLS_DATA.slice(0, 8);
const ROW_2 = SKILLS_DATA.slice(8);

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden bg-[#0f1214]">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto mb-12 text-center">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-4xl md:text-6xl font-bold text-white mb-6"
            >
                Skills & Expertise
            </motion.h2>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-gray-400 max-w-xl mx-auto text-lg"
            >
                The tools and technologies I use to bring ideas to life.
            </motion.p>
        </div>

        <div className="flex flex-col gap-4 relative z-10">
            {/* Row 1 - Left to Right */}
            <MarqueeRow items={ROW_1} direction="left" speed={40} />
            
            {/* Row 2 - Right to Left */}
            <MarqueeRow items={ROW_2} direction="right" speed={35} />
        </div>
        
        {/* Fade Gradients on Sides */}
        <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-[#0f1214] to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-[#0f1214] to-transparent z-20 pointer-events-none" />
    </section>
  );
};

const MarqueeRow = ({ items, direction, speed }: { items: typeof SKILLS_DATA, direction: 'left' | 'right', speed: number }) => {
    return (
        // Padding added here (py-8 md:py-12) ensures hover effects don't get clipped
        <div className="flex overflow-hidden select-none py-8 md:py-12"> 
            <motion.div 
                initial={{ x: direction === 'left' ? 0 : "-50%" }}
                animate={{ x: direction === 'left' ? "-50%" : 0 }}
                transition={{ 
                    duration: speed, 
                    ease: "linear", 
                    repeat: Infinity 
                }}
                className="flex flex-nowrap gap-8 md:gap-16 min-w-full"
            >
                {/* Duplicate list 4 times to ensure smooth seamless loop on large screens */}
                {[...items, ...items, ...items, ...items].map((skill, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-4 group cursor-pointer flex-shrink-0">
                        <div className="h-24 w-24 md:h-32 md:w-32 rounded-[2rem] bg-surface-high border border-white/5 flex items-center justify-center p-6 transition-all duration-500 group-hover:bg-surface-highlight group-hover:border-primary/20 group-hover:shadow-2xl group-hover:shadow-primary/10 group-hover:-translate-y-4">
                            <img 
                                src={skill.icon} 
                                alt={skill.name}
                                className={`
                                    w-full h-full object-contain transition-all duration-500 
                                    filter grayscale opacity-40
                                    group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110
                                    ${skill.dark ? 'invert group-hover:invert-0 group-hover:brightness-200' : ''}
                                `} 
                            />
                        </div>
                        <span className="text-gray-500 font-medium text-sm md:text-base opacity-60 group-hover:opacity-100 group-hover:text-white transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                            {skill.name}
                        </span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}

export default Skills;

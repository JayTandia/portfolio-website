import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Terminal, Download, Sparkles } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {

  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Rotating Text Component for Aesthetic Fill
  const CircularText = () => (
    <div className="relative w-32 h-32 group cursor-pointer">
        <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 flex items-center justify-center"
        >
             <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                <text fill="#ccc2dc" fontSize="12" fontWeight="bold" letterSpacing="2">
                    <textPath href="#circlePath" startOffset="0%">
                        • PRODUCT • DESIGN • CODE •
                    </textPath>
                </text>
            </svg>
        </motion.div>
        <div className="absolute inset-0 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
            <Sparkles size={32} fill="currentColor" />
        </div>
    </div>
  );

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden selection:bg-primary selection:text-on-primary-container">
      
      {/* Organic Background Blobs */}
      <div className="absolute right-[-10%] top-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse" />
      <div className="absolute left-[-10%] bottom-[-10%] w-[500px] h-[500px] bg-tertiary/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Content */}
        <div className="lg:col-span-7 flex flex-col items-start z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-surface-high border border-white/5 mb-8 shadow-lg shadow-black/20 hover:bg-surface-highlight transition-colors cursor-default"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-gray-300 tracking-wide">Available for Hire</span>
          </motion.div>

          <div className="relative w-fit">
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }}
                className="font-display text-6xl md:text-8xl font-bold tracking-tight text-white mb-4 leading-[1.1]"
            >
                Jay <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-tertiary">
                Tandia.
                </span>
            </motion.h1>

            {/* Aesthetic Rotating Badge - Fills the empty space next to name on Desktop */}
            <motion.div
                initial={{ opacity: 0, scale: 0, rotate: -90 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.6, type: "spring", stiffness: 200, damping: 20 }}
                className="absolute -right-36 top-8 hidden xl:block"
            >
                <CircularText />
            </motion.div>
          </div>

          {/* Aesthetic Divider Line */}
          <motion.div 
             initial={{ width: 0 }} 
             animate={{ width: "120px" }} 
             transition={{ delay: 0.5, duration: 0.8 }}
             className="h-1.5 bg-gradient-to-r from-primary via-tertiary to-transparent rounded-full mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-400 max-w-xl mb-12 font-light leading-relaxed"
          >
            A Full Stack Engineer & Product Designer bridging the gap between <span className="text-primary underline decoration-primary/30 underline-offset-4">complex systems</span> and <span className="text-tertiary underline decoration-tertiary/30 underline-offset-4">intuitive experiences</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            {/* Primary Button - Material 3 Filled Tonal */}
            <a
              href="#projects"
              onClick={handleScrollToProjects}
              className="relative group h-14 px-8 rounded-[2rem] bg-primary-container text-on-primary-container font-bold text-lg flex items-center gap-3 overflow-hidden transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span>View Projects</span> 
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Secondary Button - Material 3 Outlined */}
            <a
                href="https://drive.google.com/file/d/1nhoAWpZIwFY12F39Y2LCQfflNR77rM9n/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="h-14 px-8 rounded-[2rem] border border-white/10 text-white font-medium text-lg flex items-center gap-3 hover:bg-white/5 transition-colors"
            >
                Resume <Download size={18} />
            </a>

            <div className="flex gap-3 ml-2">
                <SocialButton icon={Github} href={SOCIAL_LINKS.github} />
                <SocialButton icon={Linkedin} href={SOCIAL_LINKS.linkedin} />
            </div>
          </motion.div>
        </div>

        {/* Right Content - Abstract Art / Profile */}
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="hidden lg:block lg:col-span-5 relative"
        >
            {/* Abstract Geometric Composition */}
            <div className="relative w-full aspect-square">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-container to-tertiary-container rounded-[3rem] rotate-6 opacity-20 blur-xl" />
                <div className="absolute inset-0 bg-surface-high rounded-[3rem] rotate-3 border border-white/5 shadow-2xl" />
                
                {/* Inner Card */}
                <div className="absolute inset-4 bg-[#131619] rounded-[2.5rem] border border-white/5 p-8 flex flex-col justify-between overflow-hidden">
                    <div className="flex justify-between items-start">
                         <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-400/80" />
                            <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                            <div className="w-3 h-3 rounded-full bg-green-400/80" />
                        </div>
                        <Terminal className="text-gray-600" />
                    </div>

                    <div className="space-y-4 font-mono text-sm relative z-10">
                        <div className="p-4 rounded-xl bg-surface-highlight/50 border border-white/5">
                            <span className="text-secondary">package</span> <span className="text-white">main</span>
                        </div>
                        <div className="p-4 rounded-xl bg-surface-highlight/50 border border-white/5">
                            <span className="text-tertiary">import</span> <span className="text-green-400">"future"</span>
                        </div>
                        <div className="p-4 rounded-xl bg-surface-highlight/50 border border-white/5">
                            <span className="text-primary">func</span> <span className="text-blue-300">Build</span>() {'{'} <br/>
                            &nbsp;&nbsp;<span className="text-gray-400">// Crafting digital</span><br/>
                            &nbsp;&nbsp;<span className="text-gray-400">// experiences</span><br/>
                            {'}'}
                        </div>
                    </div>
                    
                    {/* Decorative Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
                </div>
            </div>
        </motion.div>

      </div>
    </section>
  );
};

const SocialButton = ({ icon: Icon, href }: { icon: any, href: string }) => (
    <a 
        href={href}
        target="_blank"
        rel="noreferrer"
        className="group h-14 w-14 flex items-center justify-center rounded-full border border-white/10 bg-surface-high text-gray-300 hover:bg-white hover:text-black transition-all duration-300"
    >
        <Icon size={22} />
    </a>
);

export default Hero;
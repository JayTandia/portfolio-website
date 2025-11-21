import React, { useState, useEffect } from 'react';
import { Home, User, Briefcase, Code, Mail, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const [isScrolled, setIsScrolled] = useState(false);

  // Define navigation items matching section IDs
  const navItems = [
    { name: 'Home', icon: Home, href: '#home' },
    { name: 'Work', icon: Briefcase, href: '#experience' },
    { name: 'Projects', icon: Code, href: '#projects' },
    { name: 'Skills', icon: Cpu, href: '#skills' },
    { name: 'Contact', icon: Mail, href: '#contact' },
  ];

  // Handle Scroll Spy (Update active tab on scroll)
  useEffect(() => {
    const handleScroll = () => {
      // Add subtle background to navbar when scrolled
      setIsScrolled(window.scrollY > 50);

      // Scroll spy logic
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
            const activeItem = navItems.find(item => item.href === `#${section}`);
            if (activeItem) setActiveTab(activeItem.name);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth Scroll Handler
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, name: string) => {
    e.preventDefault();
    setActiveTab(name);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-[90%] md:max-w-fit">
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className={`
            flex items-center justify-between md:justify-center gap-1 p-2 rounded-full transition-all duration-500
            ${isScrolled 
                ? 'bg-[#1e2124]/80 backdrop-blur-xl border border-white/10 shadow-xl shadow-black/40' 
                : 'bg-[#1e2124]/50 backdrop-blur-md border border-white/5'
            }
        `}
      >
        {navItems.map((item) => {
            const isActive = activeTab === item.name;
            return (
                <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href, item.name)}
                    className={`relative flex items-center gap-2 px-4 py-3 md:py-2.5 rounded-full transition-all duration-300 group shrink-0 select-none`}
                >
                    {isActive && (
                        <motion.div
                            layoutId="nav-pill"
                            className="absolute inset-0 bg-primary-container rounded-full"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                        <item.icon 
                            size={18} 
                            className={`transition-colors duration-300 ${isActive ? 'text-on-primary-container' : 'text-gray-400 group-hover:text-gray-200'}`}
                            strokeWidth={isActive ? 2.5 : 2} 
                        />
                        <span className={`text-sm font-medium transition-colors duration-300 ${
                            isActive ? 'text-on-primary-container block' : 'text-gray-400 hidden md:block group-hover:text-gray-200'
                        }`}>
                            {item.name}
                        </span>
                    </span>
                    
                    {/* Material Ripple/Hover State Layer */}
                    {!isActive && (
                        <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-[0.08] transition-opacity duration-200" />
                    )}
                </a>
            );
        })}
      </motion.nav>
    </div>
  );
};

export default Navbar;
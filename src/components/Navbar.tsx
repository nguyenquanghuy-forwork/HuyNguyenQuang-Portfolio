import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { cn } from '../lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '/#about' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Contact', href: '/#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith('/#') && location.pathname === '/') {
      const id = href.replace('/#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "py-4 glass" : "py-6 bg-transparent"
    )}>
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent origin-left z-50"
        style={{ scaleX }}
      />
      
      <div className="container mx-auto px-6 flex justify-between items-center relative">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link to="/" className="text-2xl font-bold tracking-tighter" onClick={() => setIsMobileMenuOpen(false)}>
            <span className="text-gradient">HUY.DEV</span>
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                if (link.href.startsWith('/#') && location.pathname === '/') {
                  e.preventDefault();
                  handleNavClick(link.href);
                }
              }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium text-white/70 hover:text-primary transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <Link to="/resume">
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold hover:bg-primary hover:text-white transition-all duration-300"
            >
              Resume
            </motion.button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white z-50 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-[#0f172a] z-[999] flex flex-col md:hidden overflow-hidden"
          >
            {/* Header in Menu */}
            <div className="flex justify-between items-center px-6 py-6 border-b border-white/5">
              <span className="text-2xl font-bold tracking-tighter text-gradient">HUY.DEV</span>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white p-2 hover:bg-white/5 rounded-full transition-colors"
                aria-label="Close Menu"
              >
                <X size={28} />
              </button>
            </div>
            
            {/* Menu Links */}
            <div className="flex-grow flex flex-col items-center justify-center gap-6 px-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={(e) => {
                    if (link.href.startsWith('/#') && location.pathname === '/') {
                      e.preventDefault();
                      handleNavClick(link.href);
                    } else {
                      setIsMobileMenuOpen(false);
                    }
                  }}
                  className="text-2xl font-semibold text-white/80 hover:text-primary transition-colors py-2 w-full text-center"
                >
                  {link.name}
                </motion.a>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="w-full mt-4"
              >
                <Link 
                  to="/resume" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center px-8 py-4 rounded-2xl bg-primary text-white text-lg font-bold shadow-lg shadow-primary/20"
                >
                  Resume
                </Link>
              </motion.div>
            </div>

            {/* Footer in Menu */}
            <div className="p-8 border-t border-white/5 flex justify-center gap-6">
              <a href="#" className="text-white/40 hover:text-primary transition-colors"><Github size={20} /></a>
              <a href="#" className="text-white/40 hover:text-primary transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-white/40 hover:text-primary transition-colors"><Mail size={20} /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

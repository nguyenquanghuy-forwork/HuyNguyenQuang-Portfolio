import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Stats from './sections/Stats';
import Contact from './sections/Contact';

const LoadingScreen = () => (
  <motion.div
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.8 }}
    className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center"
  >
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-4xl font-bold tracking-tighter mb-8"
    >
      <span className="text-gradient">HUY.DEV</span>
    </motion.div>
    <div className="w-48 h-1 bg-white/5 rounded-full overflow-hidden">
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        className="w-full h-full bg-gradient-to-r from-primary via-secondary to-accent"
      />
    </div>
  </motion.div>
);

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative bg-background text-foreground selection:bg-primary/30">
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Navbar />
          <main>
            <Hero />
            <About />
            <Stats />
            <Skills />
            <Experience />
            <Contact />
          </main>
          
          <footer className="py-12 border-t border-white/5 text-center">
            <div className="container mx-auto px-6">
              <p className="text-white/40 text-sm">
                © {new Date().getFullYear()} Nguyen Quang Huy. Built with React, Tailwind & Framer Motion.
              </p>
            </div>
          </footer>
        </motion.div>
      )}
    </div>
  );
}

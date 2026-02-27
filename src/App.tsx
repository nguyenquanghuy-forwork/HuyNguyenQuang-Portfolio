import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import Resume from './pages/Resume';

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

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="relative bg-background text-foreground selection:bg-primary/30">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <LoadingScreen key="loader" />
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/project/:id" element={<ProjectDetail />} />
                <Route path="/resume" element={<Resume />} />
              </Routes>
              
              <footer className="py-12 border-t border-white/5 text-center">
                <div className="container mx-auto px-6">
                  <p className="text-white/40 text-sm">
                    © {new Date().getFullYear()} Nguyen Quang Huy. Built with React, Tailwind & Framer Motion.
                  </p>
                </div>
              </footer>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}

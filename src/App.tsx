import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import FloatingNav, { navTabs } from "./components/FloatingNav";

const sectionComponents = [
  Hero,
  About,
  Experience,
  Projects,
  Contact
];

function App() {
  const [targetIndex, setTargetIndex] = useState(() => {
    const hash = window.location.hash.replace('#', '');
    const idx = navTabs.findIndex(t => t.id === hash);
    return idx !== -1 ? idx : 0;
  });
  
  const [currentIndex, setCurrentIndex] = useState(targetIndex);

  // Core sequencer for multi-step transitions
  useEffect(() => {
    if (currentIndex !== targetIndex) {
      const step = currentIndex < targetIndex ? 1 : -1;
      const timer = setTimeout(() => {
        setCurrentIndex(prev => prev + step);
      }, 220); // 220ms stagger delay for elegant cascading effect
      return () => clearTimeout(timer);
    }
  }, [currentIndex, targetIndex]);

  // Sync URL changes to target index
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const idx = navTabs.findIndex(t => t.id === hash);
      if (idx !== -1 && idx !== targetIndex) {
        setTargetIndex(idx);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [targetIndex]);

  const handleTabChange = (id: string) => {
    window.location.hash = id;
    const idx = navTabs.findIndex(t => t.id === id);
    if (idx !== -1) {
      setTargetIndex(idx);
    }
  };

  const isTransitioning = currentIndex !== targetIndex;

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#020202]">
      {navTabs.map((tab, i) => {
        const Section = sectionComponents[i];
        const offset = currentIndex - i; // positive if underlying, zero if active, negative if above
        
        // Define animation variants based on relationship to currentIndex
        let y = '100%';
        let scale = 1;
        let opacity = 1;

        if (i > currentIndex) {
          y = '100%'; // Above the active layer, waiting downward off-screen to slide up
          scale = 1;
          opacity = 1;
        } else if (i === currentIndex) {
          y = '0%'; // Active layer
          scale = 1;
          opacity = 1;
        } else {
          y = '0%'; // Underlying layer (i < currentIndex)
          scale = 1 - (offset * 0.04); // e.g., 0.96, 0.92, 0.88 ...
          opacity = 1 - (offset * 0.15); // e.g., 0.85, 0.70, 0.55 ...
        }

        const isActive = i === currentIndex;
        const pointerEvents = (isActive && !isTransitioning) ? 'auto' : 'none';

        return (
          <motion.div
            key={tab.id}
            initial={false}
            animate={{ y, scale, opacity }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ 
              zIndex: i, 
              pointerEvents: pointerEvents as any,
              transformOrigin: '50% 50%'
            }}
            className="absolute inset-0 w-full h-full shadow-[0_-20px_50px_rgba(0,0,0,0.8)] overflow-y-auto overflow-x-hidden bg-[#020202]"
          >
            <Section />
          </motion.div>
        );
      })}

      <div className="relative z-[100] pointer-events-auto">
        <FloatingNav 
          activeTab={navTabs[targetIndex].id} 
          setActiveTab={handleTabChange} 
        />
      </div>
    </div>
  )
}

export default App;

import React from 'react';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, FolderGit2, Mail } from 'lucide-react';

export const navTabs = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'experiences', label: 'Experiences', icon: Briefcase },
  { id: 'projects', label: 'Projects', icon: FolderGit2 },
  { id: 'contact', label: 'Contact', icon: Mail },
];

interface FloatingNavProps {
  activeTab: string;
  setActiveTab: (id: string) => void;
}

const FloatingNav: React.FC<FloatingNavProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <div className="min-w-[340px] flex items-center justify-between gap-2 bg-[#1A1A24] p-3 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.5)] border border-white/5 backdrop-blur-md">
        {navTabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex items-center justify-center p-3 rounded-full transition-colors duration-300 ${
                isActive ? 'text-black' : 'text-gray-400 hover:text-white'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-white rounded-full shadow-md"
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30
                  }}
                />
              )}
              
              <div className="relative z-10 flex items-center gap-2">
                <Icon size={20} strokeWidth={2.5} />
                {isActive && (
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 'auto' }}
                    exit={{ opacity: 0, width: 0 }}
                    className="font-semibold text-sm whitespace-nowrap overflow-hidden"
                  >
                    {tab.label}
                  </motion.span>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FloatingNav;

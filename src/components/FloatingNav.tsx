import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  Briefcase,
  FolderGit2,
  Mail,
  ChevronDown,
} from "lucide-react";
import { useLanguage } from "./LanguageContext";
import { LANGUAGES } from "../i18n";

export const navTabs = [
  { id: "home", labelKey: "nav.home", icon: Home },
  { id: "about", labelKey: "nav.about", icon: User },
  { id: "experiences", labelKey: "nav.experiences", icon: Briefcase },
  { id: "projects", labelKey: "nav.projects", icon: FolderGit2 },
  { id: "contact", labelKey: "nav.contact", icon: Mail },
];

interface FloatingNavProps {
  activeTab: string;
  setActiveTab: (id: string) => void;
}

const FloatingNav: React.FC<FloatingNavProps> = ({
  activeTab,
  setActiveTab,
}) => {
  const { lang, setLang, t } = useLanguage();
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [langOpen, setLangOpen] = useState(false);
  const [langHovered, setLangHovered] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentLangLabel =
    LANGUAGES.find((l) => l.code === lang)?.label ?? "En";
  const currentLangFullLabel =
    LANGUAGES.find((l) => l.code === lang)?.fullLabel ?? "English";

  return (
    <>
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-stretch gap-3">
        {/* Nav bar */}
        <nav className="min-w-[340px] flex items-center justify-between gap-2 bg-[#1A1A24] p-3 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.5)] border border-white/5 backdrop-blur-md">
          {navTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const isHovered = hoveredTab === tab.id;
            const Icon = tab.icon;
            const label = t(tab.labelKey);

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                onMouseEnter={() => setHoveredTab(tab.id)}
                onMouseLeave={() => setHoveredTab(null)}
                className={`relative flex items-center justify-center p-3 rounded-full transition-colors duration-300 ${
                  isActive ? "text-black" : "text-gray-400 hover:text-white"
                }`}
              >
                {/* Tooltip — only for non-active, hovered icons */}
                <AnimatePresence>
                  {isHovered && !isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 6, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.9 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-[#1A1A24] border border-white/10 rounded-full shadow-lg pointer-events-none whitespace-nowrap"
                    >
                      <span className="text-white text-xs font-medium font-montserrat">
                        {label}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-white rounded-full shadow-md"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}

                <div className="relative z-10 flex items-center gap-2">
                  <Icon size={20} strokeWidth={2.5} />
                  {isActive && (
                    <motion.span
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      className="font-semibold text-sm whitespace-nowrap overflow-hidden"
                    >
                      {label}
                    </motion.span>
                  )}
                </div>
              </button>
            );
          })}
        </nav>

        {/* Language dropdown */}
        <div
          className="hidden lg:block"
          ref={dropdownRef}
        >
          <button
            onClick={() => setLangOpen((prev) => !prev)}
            onMouseEnter={() => setLangHovered(true)}
            onMouseLeave={() => setLangHovered(false)}
            className="flex items-center justify-center h-[48px] md:h-full px-4 bg-[#1A1A24] border border-white/5 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.5)] backdrop-blur-md text-white hover:border-white/15 transition-all duration-300"
          >
            <motion.span
              key={langHovered ? "full" : "short"}
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              className="text-sm font-medium font-montserrat whitespace-nowrap overflow-hidden"
            >
              {langHovered ? currentLangFullLabel : currentLangLabel}
            </motion.span>
            <ChevronDown
              size={14}
              className={`ml-1 transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`}
            />
          </button>

          <AnimatePresence>
            {langOpen && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.95 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className="absolute top-full mt-2 right-0 md:top-auto md:mt-auto md:bottom-full md:mb-2 md:left-1/2 md:-translate-x-1/2 md:right-auto bg-[#1A1A24] border border-white/10 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.5)] overflow-hidden min-w-[56px]"
              >
                {LANGUAGES.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLang(l.code);
                      setLangOpen(false);
                    }}
                    className={`w-full px-4 py-2.5 text-sm font-montserrat font-medium transition-colors duration-200 ${
                      l.code === lang
                        ? "text-white bg-white/10"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Language dropdown */}
      <div
        className="lg:hidden fixed top-6 right-6 md:relative md:top-auto md:right-auto z-[60]"
        ref={dropdownRef}
      >
        <button
          onClick={() => setLangOpen((prev) => !prev)}
          onMouseEnter={() => setLangHovered(true)}
          onMouseLeave={() => setLangHovered(false)}
          className="flex items-center justify-center h-[48px] md:h-full px-4 bg-[#1A1A24] border border-white/5 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.5)] backdrop-blur-md text-white hover:border-white/15 transition-all duration-300"
        >
          <motion.span
            key={langHovered ? "full" : "short"}
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            exit={{ opacity: 0, width: 0 }}
            className="text-sm font-medium font-montserrat whitespace-nowrap overflow-hidden"
          >
            {langHovered ? currentLangFullLabel : currentLangLabel}
          </motion.span>
          <ChevronDown
            size={14}
            className={`ml-1 transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`}
          />
        </button>

        <AnimatePresence>
          {langOpen && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.95 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="absolute top-full mt-2 right-0 md:top-auto md:mt-auto md:bottom-full md:mb-2 md:left-1/2 md:-translate-x-1/2 md:right-auto bg-[#1A1A24] border border-white/10 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.5)] overflow-hidden min-w-[56px]"
            >
              {LANGUAGES.map((l) => (
                <button
                  key={l.code}
                  onClick={() => {
                    setLang(l.code);
                    setLangOpen(false);
                  }}
                  className={`w-full px-4 py-2.5 text-sm font-montserrat font-medium transition-colors duration-200 ${
                    l.code === lang
                      ? "text-white bg-white/10"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default FloatingNav;

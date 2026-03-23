import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import type { Language } from '../i18n';
import { t as translate, getLanguageFromPath, setLanguageInURL } from '../i18n';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(getLanguageFromPath);

  // Sync URL on mount (add /en if no lang prefix)
  useEffect(() => {
    setLanguageInURL(lang);
  }, []);

  const setLang = useCallback((newLang: Language) => {
    setLangState(newLang);
    setLanguageInURL(newLang);
  }, []);

  const t = useCallback((key: string) => translate(lang, key), [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage(): LanguageContextType {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}

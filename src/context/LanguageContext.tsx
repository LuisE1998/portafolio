import React, { createContext, useContext, useState } from "react";
import { translations } from "../translations/translations";
import type { Language } from "../translations/translations";

interface LanguageContextProps {
  language: Language;
  toggleLanguage: () => void;
  t: typeof translations["es"];
}

interface Props {
  children: React.ReactNode;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: Props) => {
  const [language, setLanguage] = useState<Language>("es");

  const toggleLanguage = () => {
    setLanguage(prev => (prev === "es" ? "en" : "es"));
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};

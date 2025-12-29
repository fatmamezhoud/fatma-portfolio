import React, { createContext, useContext, useState } from 'react';

// Création du context
const LanguageContext = createContext();

// Provider pour envelopper ton application
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('FR');

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'FR' ? 'EN' : prev === 'EN' ? 'DE' : 'FR'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook personnalisé pour utiliser le context facilement
export const useLanguage = () => useContext(LanguageContext);

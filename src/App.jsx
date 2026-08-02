import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { translations } from './utils/i18n';

import './App.css';

export default function App() {
  const [theme, setTheme] = useState('violet'); // 'violet' | 'emerald' | 'cyan' | 'rose'
  const [mode, setMode] = useState('dark'); // 'dark' | 'light'
  const [lang, setLang] = useState('ENG'); // 'ENG' | 'RUS' | 'UZB'

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('data-mode', mode);
  }, [theme, mode]);

  // Current language translations dictionary
  const t = translations[lang] || translations.ENG;

  return (
    <div className="app-root">
      {/* Mesh Glow Background */}
      <div className="bg-mesh-glow" />

      {/* Floating Glass Navigation */}
      <Navbar 
        theme={theme}
        setTheme={setTheme}
        mode={mode}
        setMode={setMode}
        lang={lang}
        setLang={setLang}
        t={t}
      />

      {/* Hero Header & Bio */}
      <Hero t={t} />

      {/* Projects Showcase */}
      <Projects t={t} />

      {/* Technical Skills & Stack */}
      <Skills t={t} />

      {/* Work Experience Timeline */}
      <Experience t={t} />

      {/* Contact Form */}
      <Contact t={t} />

      {/* Footer */}
      <Footer t={t} />
    </div>
  );
}

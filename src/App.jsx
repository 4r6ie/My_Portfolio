import { useState, useEffect } from 'react';
import { ThemeProvider } from '@/context';
import { Navbar, Footer } from '@/components/layout';
import { CommandPalette } from '@/components/search';
import {
  Hero, About, Skills, Services, Projects, Experience,
  Capabilities, Tools, Strengths, Certificates, WhyHireMe,
  Resume, Contact
} from '@/components/sections';

function AppContent() {
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <>
      <Navbar onSearchOpen={() => setSearchOpen(true)} />
      <CommandPalette isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Experience />
        <Capabilities />
        <Tools />
        <Strengths />
        <WhyHireMe />
        <Certificates />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
import React, { useEffect } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import Analytics from './components/Analytics';
import Hero from './components/Hero';
import About from './components/About';
import Vision from './components/Vision';
import Skills from './components/Skills';
import Tools from './components/Tools';
import Experience from './components/Experience';
import Education from './components/Education';
import Leadership from './components/Leadership';
import Footer from './components/Footer';
import { observeElements } from './utils/scrollAnimation';

function App() {
  useEffect(() => {
    const observer = observeElements();
    return () => observer.disconnect();
  }, []);

  return (
    <ErrorBoundary>
      <Analytics />
      <div className="min-h-screen bg-gray-50">
        <Hero />
        <About />
        <Vision />
        <Experience />
        <Skills />
        <Tools />
        <Education />
        <Leadership />
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;

import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { Benefits } from './components/Benefits';
import { Process } from './components/Process';
import { Services } from './components/Services';
import { WhyUs } from './components/WhyUs';
import { Portfolio } from './components/Portfolio';
import { Footer } from './components/Footer';
import { RevealOnScroll } from './components/RevealOnScroll';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import { ContactModalProvider, useContactModal } from './context/ContactModalContext';
import { ContactModal } from './components/ContactModal';
import { ScrollToTop } from './components/ScrollToTop';

function AppContent() {
  const { isOpen, closeModal } = useContactModal();

  useEffect(() => {
    // Esperar a que todo esté listo y agregar clase al root
    const handleLoad = () => {
      setTimeout(() => {
        document.getElementById('root')?.classList.add('loaded');
      }, 150);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);
  
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/" element={
          <div className="min-h-screen bg-black text-white selection:bg-orange-500 selection:text-white">
            <Navbar />
            <main>
              <Hero />
              <RevealOnScroll>
                <ProblemSolution />
              </RevealOnScroll>
              <RevealOnScroll>
                <Benefits />
              </RevealOnScroll>
              <div id="process">
                <RevealOnScroll>
                  <Process />
                </RevealOnScroll>
              </div>
              <div id="services">
                <RevealOnScroll>
                  <Services />
                </RevealOnScroll>
              </div>
              <RevealOnScroll>
                <WhyUs />
              </RevealOnScroll>
              <div id="portfolio">
                <RevealOnScroll>
                  <Portfolio />
                </RevealOnScroll>
              </div>
            </main>
            <div id="contact-info">
              <RevealOnScroll>
                <Footer />
              </RevealOnScroll>
            </div>
          </div>
        } />
      </Routes>
      <ContactModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
}

function App() {
  return (
    <Router>
      <ContactModalProvider>
        <AppContent />
      </ContactModalProvider>
    </Router>
  );
}

export default App;
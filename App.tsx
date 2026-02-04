import React from 'react';
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

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
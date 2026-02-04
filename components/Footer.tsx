import React from 'react';
import { Button } from './Button';
import FadeSection from './FadeSection';
import { AnimatedButton } from './AnimatedButton';
import { Link } from 'react-router-dom';
import { useContactModal } from '../context/ContactModalContext';


export const Footer: React.FC = () => {
  const { openModal } = useContactModal();

  return (
    <footer id="footer" className="bg-black pt-24 border-t border-neutral-900">
      <div className="container mx-auto px-6 pb-24">
        <div className="bg-gradient-to-br from-orange-600 to-orange-900 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden border border-orange-500/20">
          {/* Decorative shapes */}
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <FadeSection>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-syne">
                Convierte tu página web en una herramienta real de clientes
              </h2>
            </FadeSection>
            <FadeSection delay={0.1}>
              <p className="text-white/80 text-lg mb-10">
                Agenda una consulta gratuita y revisamos si una landing page es la mejor solución para tu negocio.
              </p>
            </FadeSection>
            <FadeSection delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <AnimatedButton 
                  className="px-8 py-4 bg-white text-black hover:bg-neutral-100 shadow-xl font-bold rounded-xl text-base"
                  onClick={openModal}
                >
                  Agendar consulta gratuita
                </AnimatedButton>
                <a
                  href="https://wa.me/34611575730"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-green-500 text-white hover:bg-green-600 shadow-xl font-bold rounded-xl text-base flex items-center justify-center transition-all hover:scale-[1.03] active:scale-[0.97]"
                >
                  <span className="mr-2 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12.04 2.003c-5.52 0-9.997 4.477-9.997 9.997 0 1.762.464 3.484 1.345 4.997L2.04 22.003l5.13-1.342a9.97 9.97 0 0 0 4.87 1.237h.001c5.52 0 9.997-4.477 9.997-9.997 0-2.67-1.04-5.178-2.929-7.067A9.96 9.96 0 0 0 12.04 2.003zm0 17.995a8.01 8.01 0 0 1-4.07-1.12l-.29-.17-3.04.796.81-2.964-.19-.304A7.97 7.97 0 0 1 4.04 12c0-4.418 3.582-8 8-8 2.137 0 4.146.832 5.656 2.344A7.96 7.96 0 0 1 20.04 12c0 4.418-3.582 8-8 8zm4.42-5.61c-.242-.121-1.434-.707-1.655-.788-.222-.08-.384-.12-.546.122-.16.242-.625.788-.767.95-.142.161-.283.182-.525.06-.242-.121-1.022-.377-1.947-1.202-.72-.642-1.207-1.434-1.35-1.676-.142-.242-.015-.373.106-.494.109-.108.242-.283.363-.424.12-.141.16-.242.242-.404.08-.161.04-.303-.02-.424-.06-.121-.545-1.314-.747-1.8-.197-.474-.398-.41-.546-.418l-.464-.008c-.16 0-.424.06-.646.303-.222.242-.85.83-.85 2.02 0 1.19.87 2.341.99 2.502.121.161 1.71 2.613 4.145 3.562.58.199 1.032.317 1.384.406.581.148 1.11.127 1.528.077.466-.056 1.434-.586 1.637-1.152.202-.566.202-1.052.142-1.152-.06-.101-.22-.161-.462-.282z"/></svg>
                  </span>
                  Contactar por WhatsApp
                </a>
              </div>
            </FadeSection>
          </div>
        </div>
      </div>

      <div id="contact-info" tabIndex={-1} className="border-t border-neutral-900 py-8 bg-black">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
          <p>© {new Date().getFullYear()} No Name. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link to="/terms" onClick={() => window.scrollTo(0, 0)} className="footer-link">Términos</Link>
            <Link to="/privacy" onClick={() => window.scrollTo(0, 0)} className="footer-link">Privacidad</Link>
            <button onClick={openModal} className="hover:text-white transition-colors">Contacto</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
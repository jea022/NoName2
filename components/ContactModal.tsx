import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Mail } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
          >
            <div className="bg-neutral-900 rounded-2xl border border-neutral-800 w-full max-w-md overflow-hidden shadow-2xl">
              {/* Header */}
              <div className="bg-gradient-to-r from-orange-600 to-orange-700 p-6 relative">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                <h3 className="text-2xl font-bold text-white font-syne">Contáctanos</h3>
                <p className="text-white/80 text-sm mt-1">Estamos aquí para ayudarte</p>
              </div>
              
              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Phone Container */}
                <a
                  href="tel:+34611575730"
                  className="flex items-center gap-4 p-4 bg-neutral-800/50 rounded-xl border border-neutral-700 hover:border-orange-500/50 hover:bg-neutral-800 transition-all group"
                >
                  <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                    <Phone className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-neutral-400 text-sm">Teléfono</p>
                    <p className="text-white font-semibold text-lg">611 575 730</p>
                  </div>
                </a>
                
                {/* Email Container */}
                <a
                  href="mailto:nonamewebdevelop@gmail.com"
                  className="flex items-center gap-4 p-4 bg-neutral-800/50 rounded-xl border border-neutral-700 hover:border-orange-500/50 hover:bg-neutral-800 transition-all group"
                >
                  <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                    <Mail className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-neutral-400 text-sm">Correo electrónico</p>
                    <p className="text-white font-semibold">nonamewebdevelop@gmail.com</p>
                  </div>
                </a>
                
                {/* WhatsApp Quick Link */}
                <a
                  href="https://wa.me/34611575730"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-green-500/10 rounded-xl border border-green-500/30 hover:border-green-500/50 hover:bg-green-500/20 transition-all group"
                >
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-green-500">
                      <path fill="currentColor" d="M12.04 2.003c-5.52 0-9.997 4.477-9.997 9.997 0 1.762.464 3.484 1.345 4.997L2.04 22.003l5.13-1.342a9.97 9.97 0 0 0 4.87 1.237h.001c5.52 0 9.997-4.477 9.997-9.997 0-2.67-1.04-5.178-2.929-7.067A9.96 9.96 0 0 0 12.04 2.003zm0 17.995a8.01 8.01 0 0 1-4.07-1.12l-.29-.17-3.04.796.81-2.964-.19-.304A7.97 7.97 0 0 1 4.04 12c0-4.418 3.582-8 8-8 2.137 0 4.146.832 5.656 2.344A7.96 7.96 0 0 1 20.04 12c0 4.418-3.582 8-8 8zm4.42-5.61c-.242-.121-1.434-.707-1.655-.788-.222-.08-.384-.12-.546.122-.16.242-.625.788-.767.95-.142.161-.283.182-.525.06-.242-.121-1.022-.377-1.947-1.202-.72-.642-1.207-1.434-1.35-1.676-.142-.242-.015-.373.106-.494.109-.108.242-.283.363-.424.12-.141.16-.242.242-.404.08-.161.04-.303-.02-.424-.06-.121-.545-1.314-.747-1.8-.197-.474-.398-.41-.546-.418l-.464-.008c-.16 0-.424.06-.646.303-.222.242-.85.83-.85 2.02 0 1.19.87 2.341.99 2.502.121.161 1.71 2.613 4.145 3.562.58.199 1.032.317 1.384.406.581.148 1.11.127 1.528.077.466-.056 1.434-.586 1.637-1.152.202-.566.202-1.052.142-1.152-.06-.101-.22-.161-.462-.282z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-neutral-400 text-sm">WhatsApp</p>
                    <p className="text-white font-semibold">Enviar mensaje</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

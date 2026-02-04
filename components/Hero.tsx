import React, { useEffect, useState } from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { Button } from './Button';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import FadeSection from './FadeSection';
import { useContactModal } from '../context/ContactModalContext';


// AnimatedStat usando framer-motion
function AnimatedStat({ label, value, suffix = '' }: { label: string; value: number; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => `${Math.round(latest)}${suffix}`);
  useEffect(() => {
    const controls = animate(count, value, { duration: 2 });
    return controls.stop;
  }, [value, count]);
  return (
    <div className="text-center">
      <motion.p className="text-3xl font-bold text-white mb-1">
        {rounded}
      </motion.p>
      <p className="text-sm text-neutral-500 uppercase tracking-wider">{label}</p>
    </div>
  );
}

export const Hero: React.FC = () => {
  const [typedSubtitle, setTypedSubtitle] = useState('');
  const fullSubtitle = 'Landing pages para negocios locales que necesitan ';
  const { openModal } = useContactModal();

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullSubtitle.length) {
        setTypedSubtitle((prev) => fullSubtitle.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50); // Adjust typing speed here

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 max-w-full w-[600px] h-[600px] bg-orange-600/40 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/3 pointer-events-none overflow-x-hidden" />
      <div className="absolute bottom-0 left-0 max-w-full w-[600px] h-[600px] bg-orange-800/30 rounded-full blur-[140px] translate-y-1/2 -translate-x-1/3 pointer-events-none overflow-x-hidden" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Brand Element */}
          <FadeSection>
            <h1 className="font-syne text-7xl md:text-[8rem] font-extrabold leading-[0.85] mb-6 tracking-tighter select-none opacity-20 hover:opacity-100 transition-opacity duration-700">
              <span className="text-white">NO</span>
              <span className="gradient-text">NAME</span>
            </h1>
          </FadeSection>
          {/* Main Headline from Copy */}
          <FadeSection delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
              {typedSubtitle.split('clientes reales')[0]}
              <span className="text-orange-500">clientes reales</span>
            </h2>
          </FadeSection>
          {/* Subtitle from Copy */}
          <FadeSection delay={0.2}>
            <p className="text-lg md:text-xl text-neutral-400 mb-10 max-w-3xl mx-auto leading-relaxed">
              Nuestra solución no tiene nombre. Tiene resultados.
            </p>
          </FadeSection>
          <FadeSection delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="group w-full sm:w-auto" onClick={openModal}>
                Agendar consulta gratuita
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto" onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}>
                Ver Portafolio
              </Button>
            </div>
          </FadeSection>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-8 justify-items-center">
            <AnimatedStat label="Experiencia" value={3} suffix="+ Años" />
            <AnimatedStat label="Satisfacción" value={100} suffix="%" />
            <AnimatedStat label="Soporte" value={24} suffix="/7" />
          </div>
        </div>
      </div>
    </section>
  );
};
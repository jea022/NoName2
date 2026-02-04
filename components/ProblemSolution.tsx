import React from 'react';
import { AlertTriangle, TrendingDown, Clock, CheckCircle, Zap, Target } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import FadeSection from './FadeSection';

export const ProblemSolution: React.FC = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Mensajes confusos y diseño genérico",
      desc: "Visitantes que se van sin entender qué ofreces. Mala experiencia = pérdida de clientes.",
    },
    {
      icon: TrendingDown,
      title: "Cero estrategia de conversión",
      desc: "Muchos negocios tienen presencia online, pero sus páginas no generan resultados reales.",
    },
    {
      icon: Clock,
      title: "Oportunidades perdidas",
      desc: "Mientras tanto, tus competidores capturan esos clientes porque comunican mejor.",
    },
  ];

  const solutions = [
    {
      icon: Target,
      title: "Mensaje claro desde el primer segundo",
      desc: "Diseño limpio y mensaje directo para que el usuario sepa exactamente qué hacer.",
    },
    {
      icon: CheckCircle,
      title: "Estructura enfocada en conversión",
      desc: "Cada elemento tiene un propósito claro: guiar al usuario hacia el contacto.",
    },
    {
      icon: Zap,
      title: "Diseño profesional sin distracciones",
      desc: "Optimizada para velocidad y SEO. No diseñamos webs gigantes innecesarias.",
    },
  ];

  return (
    <section id="problemsolution" className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <FadeSection>
            <SectionHeading 
              subtitle="El Problema vs La Solución"
              title={
                <span>Tener una página web no sirve <span className="text-orange-500">si no convierte</span></span>
              } 
            />
            <p className="text-lg text-neutral-400 -mt-6">
              Muchos negocios tienen presencia online, pero sus páginas no generan resultados. 
              Transformamos tu página en una máquina de generación de clientes.
            </p>
          </FadeSection>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* Problem Column */}
          <FadeSection delay={0.1}>
            <div className="group bg-neutral-950 p-8 rounded-3xl border border-red-900/20 relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_-10px_rgba(220,38,38,0.2)] hover:border-red-500/30 h-full">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-red-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="absolute top-0 right-0 p-4 opacity-10 transition-transform duration-700 ease-out group-hover:rotate-12 group-hover:scale-110 group-hover:opacity-20">
              <AlertTriangle size={120} className="text-red-500" />
            </div>

            <h3 className="text-2xl font-bold text-red-500 mb-8 flex items-center gap-3 relative z-10">
              <span className="bg-red-500/10 p-2 rounded-lg transition-transform duration-300 group-hover:scale-110"><AlertTriangle size={24} /></span>
              El Problema
            </h3>
            
            <div className="space-y-8 relative z-10">
              {problems.map((item, idx) => (
                <div key={idx} className="transform transition-transform duration-500 group-hover:translate-x-2" style={{ transitionDelay: `${idx * 50}ms` }}>
                  <h4 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                    <span className="text-red-500/50 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">•</span>
                    {item.title}
                  </h4>
                  <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-red-900/20 text-red-400 text-sm font-semibold relative z-10 transition-colors group-hover:text-red-300">
              Resultado: Oportunidades perdidas todos los días.
            </div>
            </div>
          </FadeSection>

          {/* Solution Column */}
          <FadeSection delay={0.2}>
            <div className="group bg-neutral-950 p-8 rounded-3xl border border-green-900/20 relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_-10px_rgba(34,197,94,0.2)] hover:border-green-500/30 h-full">
             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-green-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="absolute top-0 right-0 p-4 opacity-10 transition-transform duration-700 ease-out group-hover:-rotate-12 group-hover:scale-110 group-hover:opacity-20">
              <Target size={120} className="text-green-500" />
            </div>

            <h3 className="text-2xl font-bold text-green-500 mb-8 flex items-center gap-3 relative z-10">
              <span className="bg-green-500/10 p-2 rounded-lg transition-transform duration-300 group-hover:scale-110"><CheckCircle size={24} /></span>
              La Solución
            </h3>

            <div className="space-y-8 relative z-10">
              {solutions.map((item, idx) => (
                <div key={idx} className="transform transition-transform duration-500 group-hover:translate-x-2" style={{ transitionDelay: `${idx * 50}ms` }}>
                  <h4 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                    <span className="text-green-500/50 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">✓</span>
                    {item.title}
                  </h4>
                  <p className="text-neutral-300 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-green-900/20 text-green-400 text-sm font-semibold relative z-10 transition-colors group-hover:text-green-300">
              Resultado: Más contactos y clientes reales.
            </div>
            </div>
          </FadeSection>
        </div>
      </div>
    </section>
  );
};
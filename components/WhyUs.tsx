import React from 'react';
import { XCircle, Target, MessageSquare, Rocket } from 'lucide-react';

export const WhyUs: React.FC = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-syne">No somos una agencia tradicional</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Creamos landing pages claras, rápidas y enfocadas en generar contactos reales para tu negocio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "No vendemos paquetes inflados",
              desc: "Solo lo que necesitas para vender. Sin extras innecesarios que encarecen el proyecto.",
              icon: XCircle,
            },
            {
              title: "No prometemos resultados irreales",
              desc: "Hablamos claro sobre qué esperar y cómo vamos a conseguir tus objetivos.",
              icon: MessageSquare,
            },
            {
              title: "No diseñamos sin objetivo",
              desc: "Cada píxel de tu web está pensado para convertir visitas en clientes.",
              icon: Target,
            },
            {
              title: "Resultados Reales",
              desc: "Landing pages optimizadas para velocidad, SEO y conversión desde el día uno.",
              icon: Rocket,
            }
          ].map((item, idx) => (
            <div key={idx} className="flex gap-6 p-6 rounded-2xl bg-neutral-950 border border-white/10 transition-transform hover:-translate-y-1 hover:border-orange-500/30 group">
              <div className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 bg-neutral-900 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300`}>
                <item.icon size={26} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
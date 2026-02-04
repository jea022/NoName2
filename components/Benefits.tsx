import React from 'react';
import { Smartphone, Zap, MessageCircle, TrendingUp, Layout, Award } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { BenefitItem } from '../types';
import FadeSection from './FadeSection';
import { StaggerList, StaggerItem } from './StaggerList';

export const Benefits: React.FC = () => {
  const benefits: BenefitItem[] = [
    {
      title: "Imagen profesional",
      description: "Tu negocio transmite confianza y seriedad desde la primera visita.",
      icon: Award
    },
    {
      title: "Más contactos reales",
      description: "Menos visitas perdidas, más personas interesadas en tus servicios.",
      icon: TrendingUp
    },
    {
      title: "Diseño web responsive",
      description: "Tu página se ve y funciona perfectamente en móvil, tablet y escritorio.",
      icon: Smartphone
    },
    {
      title: "Velocidad y SEO",
      description: "Páginas web rápidas, con estructura optimizada para Google y tiempos de carga mínimos.",
      icon: Zap
    },
    {
      title: "Contacto directo",
      description: "Integración con WhatsApp y formularios. Facilitamos que tus clientes te escriban sin fricción.",
      icon: MessageCircle
    },
    {
      title: "Enfoque 100% Ventas",
      description: "Estructura pensada únicamente para convertir visitantes en clientes reales.",
      icon: Layout
    }
  ];

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <FadeSection>
          <SectionHeading title="Lo que realmente obtienes" subtitle="Beneficios Tangibles" />
        </FadeSection>
        
        <StaggerList className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <React.Fragment key={index}>
              <StaggerItem>
                <div className="group p-8 rounded-2xl bg-neutral-950 border border-white/10 hover:bg-orange-600 hover:border-orange-600 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20 hover:-translate-y-1 h-full">
                  <div className="w-14 h-14 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-500 mb-6 group-hover:bg-white group-hover:text-orange-600 transition-colors duration-300 shadow-sm border border-orange-500/20 group-hover:border-transparent">
                    <benefit.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white">{benefit.title}</h3>
                  <p className="text-neutral-400 leading-relaxed group-hover:text-orange-50">
                    {benefit.description}
                  </p>
                </div>
              </StaggerItem>
            </React.Fragment>
          ))}
        </StaggerList>
      </div>
    </section>
  );
};
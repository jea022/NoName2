import React from 'react';
import { SectionHeading } from './SectionHeading';
import { ProcessStep } from '../types';
import { ArrowRight } from 'lucide-react';
import FadeSection from './FadeSection';
import { StaggerList, StaggerItem } from './StaggerList';

export const Process: React.FC = () => {
  const steps: ProcessStep[] = [
    {
      number: "01",
      title: "Análisis de negocio",
      description: "Entendemos tu servicio, tu cliente ideal y qué acción debe tomar el usuario."
    },
    {
      number: "02",
      title: "Estructura y mensaje",
      description: "Definimos una propuesta clara y un flujo pensado para convertir."
    },
    {
      number: "03",
      title: "Diseño y desarrollo",
      description: "Implementación con código limpio, rápido y optimizado."
    },
    {
      number: "04",
      title: "Publicación y ajustes",
      description: "Lanzamiento y monitoreo según tus necesidades."
    }
  ];

  return (
    <section className="py-24 bg-orange-600 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none opacity-50" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-700 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/3 pointer-events-none opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <FadeSection>
          <SectionHeading 
            title="Nuestro proceso de trabajo" 
            subtitle="Simple y Claro" 
            lightMode={true}
          />
        </FadeSection>
        
        <div className="mt-16">
          <StaggerList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <StaggerItem className="relative group">
                  {/* Step Card */}
                  <div className="relative z-10 bg-transparent p-6 rounded-2xl border border-transparent transition-colors">
                    
                    {/* Inverted Number Circle: White bg, Orange text */}
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center text-3xl font-bold transition-all duration-300 
                      bg-white border-2 border-white/20 text-orange-600 shadow-xl
                      group-hover:bg-neutral-900 group-hover:text-white group-hover:border-neutral-900 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(0,0,0,0.2)]">
                      {step.number}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white text-center mb-3 group-hover:text-orange-100 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-orange-100 text-center text-sm leading-relaxed opacity-90">
                      {step.description}
                    </p>
                  </div>
                  {/* Animated Arrow (Desktop Only) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-[3.5rem] -right-4 z-0 justify-center items-center w-8 h-8 text-orange-300 transform transition-all duration-500 group-hover:text-white group-hover:translate-x-2">
                      <ArrowRight size={40} strokeWidth={1.5} />
                    </div>
                  )}
                </StaggerItem>
              </React.Fragment>
            ))}
          </StaggerList>
        </div>
      </div>
    </section>
  );
};
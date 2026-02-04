import React from 'react';
import { LayoutTemplate, Building2, BarChart2, LifeBuoy, Users, Store, Star, Briefcase, ArrowRight } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

export const Services: React.FC = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Services Column */}
          <div>
            <SectionHeading title="Nuestros Servicios" subtitle="Enfocados en resultados" alignment="left" />
            <div className="space-y-4">
              {[
                { title: "Landing Page de Captación", desc: "Enfocada en generar contactos por WhatsApp o formulario. Ideal para emprendedores.", icon: LayoutTemplate },
                { title: "Web Corporativa Básica", desc: "Para mostrar servicios, generar confianza y facilitar el contacto. Profesional y directa.", icon: Building2 },
                { title: "Optimización de Web Existente", desc: "Auditoría, mejora de mensaje, SEO básico y optimización de conversión.", icon: BarChart2 },
                { title: "Soporte y Mantenimiento", desc: "Actualizaciones, soporte técnico y mejoras continuas post-lanzamiento.", icon: LifeBuoy }
              ].map((service, idx) => (
                <div key={idx} className="group relative p-6 rounded-2xl bg-neutral-950/50 border border-white/5 hover:border-orange-500/50 hover:bg-neutral-950 transition-all duration-300 overflow-hidden cursor-default">
                  {/* Hover Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10 flex gap-6 items-start">
                    {/* Icon Container with animation */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-neutral-900 border border-white/5 flex items-center justify-center text-neutral-400 group-hover:bg-orange-500 group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-orange-500/25">
                      <service.icon size={24} strokeWidth={1.5} />
                    </div>

                    <div className="flex-grow">
                      <h4 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors flex items-center justify-between">
                        {service.title}
                        {/* Arrow that fades in/slides in */}
                        <ArrowRight size={18} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-orange-500" />
                      </h4>
                      <p className="text-neutral-400 text-sm mt-2 leading-relaxed group-hover:text-neutral-300 transition-colors">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Audience Column */}
          <div className="bg-gradient-to-br from-orange-500 to-orange-700 p-8 md:p-12 rounded-3xl border border-neutral-900 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            
            <h3 className="text-3xl font-bold text-white mb-8 relative z-10 font-syne">Ideal Para</h3>
            <div className="grid sm:grid-cols-2 gap-6 relative z-10">
              {[
                { title: "Emprendedores", desc: "Que quieren validar o escalar su negocio.", icon: Users },
                { title: "Negocios Locales", desc: "Que necesitan clientes de su zona.", icon: Store },
                { title: "Marcas Personales", desc: "Profesionales independientes que buscan autoridad.", icon: Star },
                { title: "Servicios", desc: "Que dependen del contacto directo con clientes.", icon: Briefcase }
              ].map((item, idx) => (
                <div key={idx} className="group relative bg-black p-6 rounded-2xl border border-neutral-900 transition-all duration-300 hover:border-black hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-900/10">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-orange-500/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <item.icon className="text-orange-600 mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:text-orange-500" size={32} strokeWidth={1.5} />
                  <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-neutral-400 text-sm leading-relaxed group-hover:text-neutral-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
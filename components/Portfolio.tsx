import React from 'react';
import { SectionHeading } from './SectionHeading';
import { ArrowUpRight } from 'lucide-react';
import { PortfolioItem } from '../types';
import FadeSection from './FadeSection';
import { StaggerList, StaggerItem } from './StaggerList';

export const Portfolio: React.FC = () => {
  const projects: PortfolioItem[] = [
    {
      title: "Marca Personal",
      category: "Landing Page Profesional",
      result: "+45% en conversiones",
      image: import.meta.env.BASE_URL + "MarcaPersonal.png"
    },
    {
      title: "Agencia de Marketing",
      category: "Web Corporativa Optimizada",
      result: "60 leads mensuales",
      image: import.meta.env.BASE_URL + "FaralionLogo.jpg"
    },
    {
      title: "Emprendimiento Gastronómico",
      category: "Landing Page B2B",
      result: "3.2x ROI en primer mes",
      image: import.meta.env.BASE_URL + "DreamyLogo.svg"
    }
  ];

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <FadeSection>
          <SectionHeading title="Proyectos recientes" subtitle="Nuestro Portafolio" />
        </FadeSection>
        
        <StaggerList className="grid md:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <React.Fragment key={index}>
              <StaggerItem>
                <div className="group relative rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-900 h-full">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-2">{project.category}</div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">{project.title}</h3>
                    <div className="flex items-center gap-2 text-green-400 font-medium text-sm mb-6">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      {project.result}
                    </div>
                    <a href="#" className="inline-flex items-center text-white font-semibold hover:text-orange-500 transition-colors">
                      Ver proyecto <ArrowUpRight size={18} className="ml-1" />
                    </a>
                  </div>
                </div>
              </StaggerItem>
            </React.Fragment>
          ))}
        </StaggerList>
      </div>
    </section>
  );
};
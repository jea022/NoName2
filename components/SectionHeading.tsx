import React from 'react';

interface SectionHeadingProps {
  title: string | React.ReactNode;
  subtitle?: string;
  alignment?: 'left' | 'center';
  lightMode?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle,
  alignment = 'center',
  lightMode = false
}) => {
  return (
    <div className={`mb-12 ${alignment === 'center' ? 'text-center' : 'text-left'}`}>
      {subtitle && (
        <span className={`${lightMode ? 'text-orange-100' : 'text-orange-500'} font-bold tracking-wider uppercase text-sm mb-3 block`}>
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight font-syne">
        {title}
      </h2>
      <div className={`h-1.5 w-24 rounded-full ${alignment === 'center' ? 'mx-auto' : ''} ${lightMode ? 'bg-white' : 'bg-gradient-to-r from-orange-500 to-orange-700'}`} />
    </div>
  );
};
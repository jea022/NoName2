import React, { useEffect, useRef, useState, memo } from 'react';

interface RevealOnScrollProps {
  children: React.ReactNode;
  delay?: number;
}

export const RevealOnScroll: React.FC<RevealOnScrollProps> = memo(({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -30px 0px"
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ 
        transitionDelay: `${delay}ms`,
        willChange: isVisible ? 'auto' : 'opacity, transform'
      }}
      className={`transition-[opacity,transform] duration-700 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
    >
      {children}
    </div>
  );
});
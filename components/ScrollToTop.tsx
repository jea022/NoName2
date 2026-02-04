import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    // Si hay un hash, hacer scroll al elemento
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    // El scroll está en #root, no en window
    const root = document.getElementById('root');
    if (root) {
      root.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash]);

  useEffect(() => {
    // Si hay hash, no hacer scroll al inicio
    if (hash) return;

    // Scroll adicional después del render para asegurar
    setTimeout(() => {
      const root = document.getElementById('root');
      if (root) {
        root.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 0);
  }, [pathname, hash]);

  return null;
};

import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Cómo funciona', href: '#problemsolution' },
    { name: 'Proceso', href: '#process' },
    { name: 'Servicios', href: '#services' },
    { name: 'Portafolio', href: '#portfolio' },
  ];

  // Función para manejar la navegación y el scroll
  const handleNavClick = (href: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-2xl py-4 border-b border-white/10 shadow-lg' : 'bg-black/30 backdrop-blur-lg py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
            <img 
              src={import.meta.env.BASE_URL + "NoName.png"} 
              alt="No Name Logo" 
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold text-white tracking-tight font-syne">NO NAME</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-medium text-neutral-300 hover:text-white transition-colors bg-transparent border-none cursor-pointer"
              style={{ padding: 0, margin: 0 }}
            >
              {link.name}
            </button>
          ))}
          <Button size="sm" onClick={() => handleNavClick('#footer')}>Hablemos</Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-black border-b border-neutral-900 p-6 flex flex-col gap-4 md:hidden shadow-2xl">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => { handleNavClick(link.href); setIsMobileMenuOpen(false); }}
                className="text-lg font-medium text-neutral-300 hover:text-white py-2 bg-transparent border-none cursor-pointer"
                style={{ padding: 0, margin: 0 }}
              >
                {link.name}
              </button>
            ))}
            <Button className="w-full" onClick={() => { handleNavClick('#footer'); setIsMobileMenuOpen(false); }}>Hablemos</Button>
          </div>
        )}
      </div>
    </nav>
  );
};
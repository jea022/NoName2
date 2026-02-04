import React from 'react';
import { Navbar } from '../components/Navbar';

const Terms = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-orange-500 selection:text-white">
      <Navbar />
      <main className="container mx-auto px-6 py-16 mt-24">
        <h1 className="text-3xl md:text-5xl font-bold text-orange-500 mb-6 font-syne">Términos y Condiciones de Uso</h1>
        <p className="mb-4 text-white/80">noname</p>
        <p className="mb-4 text-white/80">Al acceder a este sitio web, aceptas los presentes Términos y Condiciones. Si no estás de acuerdo con alguno de ellos, te recomendamos no utilizar el sitio.</p>
        <h2 className="text-xl md:text-2xl font-bold text-orange-400 mt-8 mb-2">1. Objeto del sitio web</h2>
        <p className="mb-4 text-white/80">El sitio web de noname tiene como finalidad presentar información sobre nuestros servicios de diseño y desarrollo web, así como facilitar el contacto con potenciales clientes.</p>
        <h2 className="text-xl md:text-2xl font-bold text-orange-400 mt-8 mb-2">2. Condiciones de uso</h2>
        <p className="mb-4 text-white/80">El usuario se compromete a utilizar este sitio de forma lícita, responsable y conforme a la ley, absteniéndose de realizar acciones que puedan afectar su funcionamiento o seguridad.</p>
        <h2 className="text-xl md:text-2xl font-bold text-orange-400 mt-8 mb-2">3. Servicios ofrecidos</h2>
        <p className="mb-4 text-white/80">Los servicios de noname incluyen, entre otros:</p>
        <ul className="list-disc list-inside mb-4 text-white/80">
          <li>Diseño de landing pages</li>
          <li>Desarrollo de sitios web</li>
          <li>Optimización orientada a conversión</li>
        </ul>
        <p className="mb-4 text-white/80">El alcance específico, plazos, entregables y condiciones económicas se acuerdan individualmente con cada cliente antes de iniciar cualquier proyecto.</p>
        <h2 className="text-xl md:text-2xl font-bold text-orange-400 mt-8 mb-2">4. Propiedad intelectual</h2>
        <p className="mb-4 text-white/80">Todos los contenidos del sitio web, incluyendo textos, diseño, estructura, identidad visual y código, son propiedad de noname, salvo que se indique lo contrario.</p>
        <p className="mb-4 text-white/80">Queda prohibida su reproducción, distribución o modificación sin autorización expresa.</p>
        <h2 className="text-xl md:text-2xl font-bold text-orange-400 mt-8 mb-2">5. Responsabilidad y garantías</h2>
        <p className="mb-4 text-white/80">noname no garantiza resultados comerciales específicos derivados del uso de los sitios web desarrollados, ya que estos dependen de factores externos como el mercado, el producto, la estrategia del cliente y el tráfico recibido.</p>
        <h2 className="text-xl md:text-2xl font-bold text-orange-400 mt-8 mb-2">6. Enlaces a terceros</h2>
        <p className="mb-4 text-white/80">El sitio puede contener enlaces a sitios web externos. noname no se responsabiliza por el contenido, funcionamiento ni políticas de dichos sitios.</p>
        <h2 className="text-xl md:text-2xl font-bold text-orange-400 mt-8 mb-2">7. Modificaciones de los términos</h2>
        <p className="mb-4 text-white/80">Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Las versiones actualizadas estarán disponibles en esta página.</p>
        <h2 className="text-xl md:text-2xl font-bold text-orange-400 mt-8 mb-2">8. Legislación y jurisdicción</h2>
        <p className="mb-4 text-white/80">Estos Términos y Condiciones se rigen por las leyes de la República de Colombia. Cualquier controversia será resuelta por los tribunales competentes del país.</p>
      </main>
    </div>
  );
};

export default Terms;
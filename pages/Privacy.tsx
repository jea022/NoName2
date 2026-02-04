import React from 'react';
import { Navbar } from '../components/Navbar';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-orange-500 selection:text-white">
      <Navbar />
      <main className="container mx-auto px-6 py-16 mt-24">
        <h1 className="text-3xl md:text-5xl font-bold text-orange-500 mb-6 font-syne">Política de Privacidad de noname</h1>
        <p className="mb-4 text-white/80">Última actualización: 2026</p>
        <p className="mb-4 text-white/80">En noname entendemos que la confianza no se pide, se construye. Por eso tratamos los datos personales con responsabilidad, transparencia y conforme a la legislación vigente.</p>
        <h2 className="text-xl md:text-2xl font-bold text-orange-400 mt-8 mb-2">1. Identidad del responsable del tratamiento</h2>
        <p className="mb-4 text-white/80">Responsable: noname</p>
        <p className="mb-4 text-white/80">Actividad: Diseño y desarrollo de landing pages y sitios web orientados a conversión</p>
        <p className="mb-4 text-white/80">Ubicación: Colombia</p>
        <p className="mb-4 text-white/80">Contacto: A través del formulario del sitio web o canales oficiales publicados</p>
        <h2 className="text-xl md:text-2xl font-bold text-orange-400 mt-8 mb-2">2. Información personal que recopilamos</h2>
        <p className="mb-4 text-white/80">Recopilamos únicamente los datos necesarios para prestar nuestros servicios de forma adecuada. Esto puede incluir:</p>
        <ul className="list-disc list-inside mb-4 text-white/80">
          <li>Nombre y apellido</li>
          <li>Correo electrónico</li>
          <li>Número de contacto</li>
          <li>Información sobre el negocio o proyecto del usuario</li>
        </ul>
        <p className="mb-4 text-white/80">No solicitamos ni tratamos datos sensibles.</p>
        <h2 className="text-xl md:text-2xl font-bold text-orange-400 mt-8 mb-2">3. Finalidad del tratamiento de los datos</h2>
        <p className="mb-4 text-white/80">Los datos personales recopilados se utilizan para los siguientes fines:</p>
        <ul className="list-disc list-inside mb-4 text-white/80">
          <li>Responder solicitudes de información</li>
          <li>Contactar a potenciales clientes</li>
          <li>Gestionar proyectos y servicios contratados</li>
          <li>Enviar comunicaciones relacionadas con el servicio solicitado</li>
        </ul>
        <p className="mb-4 text-white/80">En noname no vendemos, alquilamos ni cedemos datos personales a terceros.</p>
        <h2 className="text-xl md:text-2xl font-bold text-orange-400 mt-8 mb-2">4. Base legal del tratamiento</h2>
        <p className="mb-4 text-white/80">El tratamiento de los datos personales se realiza con base en el consentimiento explícito del usuario al completar formularios o comunicarse voluntariamente con nosotros.</p>
        <h2 className="text-xl md:text-2xl font-bold text-orange-400 mt-8 mb-2">5. Uso de herramientas de terceros</h2>
        <p className="mb-4 text-white/80">Este sitio web puede utilizar servicios de terceros para análisis y funcionamiento, tales como:</p>
        <ul className="list-disc list-inside mb-4 text-white/80">
          <li>Google Analytics (estadísticas de uso)</li>
          <li>Plataformas de formularios</li>
          <li>Integraciones con WhatsApp</li>
        </ul>
        <p className="mb-4 text-white/80">Estas herramientas pueden recopilar información técnica y anónima conforme a sus propias políticas de privacidad.</p>
        <h2 className="text-xl md:text-2xl font-bold text-orange-400 mt-8 mb-2">6. Conservación de la información</h2>
        <p className="mb-4 text-white/80">Los datos personales se conservarán únicamente durante el tiempo necesario para cumplir la finalidad para la cual fueron recopilados o mientras exista una relación comercial activa.</p>
        <h2 className="text-xl md:text-2xl font-bold text-orange-400 mt-8 mb-2">7. Derechos del titular de los datos</h2>
        <p className="mb-4 text-white/80">El usuario puede ejercer en cualquier momento los derechos de:</p>
        <ul className="list-disc list-inside mb-4 text-white/80">
          <li>Acceso</li>
          <li>Rectificación</li>
          <li>Cancelación</li>
          <li>Supresión</li>
          <li>Revocación del consentimiento</li>
        </ul>
        <p className="mb-4 text-white/80">Para ello, puede contactarnos a través de los medios disponibles en el sitio web.</p>
        <h2 className="text-xl md:text-2xl font-bold text-orange-400 mt-8 mb-2">8. Seguridad de los datos</h2>
        <p className="mb-4 text-white/80">En noname aplicamos medidas técnicas y organizativas razonables para proteger los datos personales frente a accesos no autorizados, pérdida o uso indebido.</p>
        <h2 className="text-xl md:text-2xl font-bold text-orange-400 mt-8 mb-2">9. Modificaciones de la política</h2>
        <p className="mb-4 text-white/80">Nos reservamos el derecho de modificar esta Política de Privacidad para adaptarla a cambios legales o mejoras en nuestros procesos. Cualquier cambio será publicado en esta página.</p>
        <h2 className="text-xl md:text-2xl font-bold text-orange-400 mt-8 mb-2">10. Legislación aplicable</h2>
        <p className="mb-4 text-white/80">Esta Política se rige por la legislación colombiana, en particular la Ley 1581 de 2012 y normas complementarias sobre protección de datos personales.</p>
      </main>
    </div>
  );
};

export default Privacy;
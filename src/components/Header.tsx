// Cabecera del sitio: barra superior informativa + menú de navegación.
// No lleva 'use client' porque no tiene estado ni eventos: es un Server Component,
// o sea, se genera una sola vez en el servidor y no gasta CPU ni RAM en el navegador.
import { whatsappUrl } from '@/lib/whatsapp';

export default function Header() {
  return (
    <>
      {/* Barra superior oscura con el mensaje de especialidad */}
      <div className="bg-slate-950 text-white text-xs font-semibold py-2.5 text-center tracking-wide px-4">
        SOPORTE TÉCNICO ESPECIALIZADO — MANTENIMIENTO, FORMATEO Y DIAGNÓSTICO EN QUILPUÉ
      </div>

      {/* Menú principal: sticky = se queda fijo arriba al hacer scroll */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 px-4 sm:px-6 py-4">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 font-black text-xl sm:text-2xl tracking-tighter text-slate-900">
            <span className="bg-blue-600 text-white px-2 py-0.5 rounded-lg text-base sm:text-lg">PC</span>
            SOPORTE.CL
          </div>

          {/* Enlaces internos: cada href apunta al id de una sección de la página.
              Se ocultan en móvil (hidden) y aparecen desde pantallas medianas (md:flex). */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-700">
            <a href="#planes" className="hover:text-blue-600 transition">Planes</a>
            <a href="#servicios" className="hover:text-blue-600 transition">Servicios</a>
            <a href="#contacto" className="hover:text-blue-600 transition">Contacto</a>
            <a href="#faq" className="hover:text-blue-600 transition">Preguntas Frecuentes</a>
          </nav>

          {/* Botón verde de WhatsApp */}
          <a
            href={whatsappUrl('Hola, me gustaría realizar una consulta por mi equipo.')}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-green-500 px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold text-white shadow-sm transition hover:bg-green-600"
          >
            Contacto WhatsApp
          </a>
        </div>
      </header>
    </>
  );
}
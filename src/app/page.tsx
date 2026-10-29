'use client';

import React, { useState } from 'react';

const WHATSAPP_NUMBER = "56973784443";

export default function Home() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });

  const [faqAbierta, setFaqAbierta] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const texto = `Hola, mi nombre es ${formData.nombre} (${formData.email}). Mi consulta es: ${formData.mensaje}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`, '_blank');
  };

  const whatsappUrl = (mensaje: string) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;

  const faqs = [
    {
      q: "¿En qué consiste la videollamada de diagnóstico sin costo?",
      a: "Es una sesión breve de 10 minutos por cámara o llamada donde me muestras el problema de tu equipo. Realizamos pruebas iniciales a distancia para determinar la causa probable y la mejor alternativa de solución antes de coordinar el trabajo presencial."
    },
    {
      q: "¿Cómo operan las modalidades de trabajo presencial?",
      a: "Puedes optar por atención a domicilio en Quilpué y zonas cercanas de la V Región, o bien entregar tu equipo en taller particular previa coordinación de agenda."
    },
    {
      q: "¿Qué resguardo tienen mis archivos y fotos personales durante un formateo?",
      a: "Realizamos un respaldo preventivo de todas tus carpetas personales (Documentos, Imágenes, Descargas, Escritorio) antes de proceder con la instalación limpia del sistema operativo."
    },
    {
      q: "¿Cuál es el tiempo promedio de entrega del equipo?",
      a: "El tiempo estándar de entrega es de 24 a 48 horas hábiles, ajustado al volumen de datos a respaldar o al nivel de mantenimiento requerido."
    }
  ];

  return (
    <main className="min-h-screen bg-[#F8F9FA] text-slate-900 font-sans relative">
      {/* 1. BARRA SUPERIOR */}
      <div className="bg-slate-950 text-white text-xs font-semibold py-2.5 text-center tracking-wide px-4">
        SOPORTE TÉCNICO ESPECIALIZADO — MANTENIMIENTO, FORMATEO Y DIAGNÓSTICO EN QUILPUÉ
      </div>

      {/* 2. HEADER */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 px-4 sm:px-6 py-4">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <div className="flex items-center gap-2 font-black text-xl sm:text-2xl tracking-tighter text-slate-900">
            <span className="bg-blue-600 text-white px-2 py-0.5 rounded-lg text-base sm:text-lg">PC</span>
            SOPORTE.CL
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-700">
            <a href="#planes" className="hover:text-blue-600 transition">Planes</a>
            <a href="#servicios" className="hover:text-blue-600 transition">Servicios</a>
            <a href="#contacto" className="hover:text-blue-600 transition">Contacto</a>
            <a href="#faq" className="hover:text-blue-600 transition">Preguntas Frecuentes</a>
          </nav>
          <a
            href={whatsappUrl("Hola, me gustaría realizar una consulta por mi equipo.")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-green-500 px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold text-white shadow-sm transition hover:bg-green-600"
          >
            Contacto WhatsApp
          </a>
        </div>
      </header>

      {/* 3. HERO BANNER */}
      <section className="bg-slate-900 text-white px-4 sm:px-6 py-16 sm:py-20 text-center relative overflow-hidden">
        <div className="mx-auto max-w-5xl relative z-10">
          <div className="inline-flex items-center gap-2 bg-slate-800 border border-slate-700 rounded-full px-4 py-1.5 text-xs font-semibold text-yellow-400 mb-6">
            <span>★★★★★</span>
            <span className="text-slate-300">Quilpué y V Región</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Optimización, Mantención y Reparación de Computadores
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Recupera la velocidad de tu equipo con atención directa, diagnósticos claros y la máxima seguridad para tus archivos.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#contacto"
              className="rounded-xl bg-blue-600 px-6 sm:px-8 py-3.5 sm:py-4 font-bold text-white shadow-lg transition hover:bg-blue-700"
            >
              Contactar por WhatsApp
            </a>
            <a
              href="#planes"
              className="rounded-xl border border-slate-700 bg-slate-800/80 px-6 sm:px-8 py-3.5 sm:py-4 font-bold text-white transition hover:bg-slate-800"
            >
              Ver Planes y Tarifas ↓
            </a>
          </div>
        </div>
      </section>

      {/* 4. PLANES INTEGRALES */}
      <section id="planes" className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <div className="text-center">
          <span className="bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
            Combos y Paquetes
          </span>
          <h2 className="text-2xl sm:text-3xl font-black mt-3 text-slate-900">Planes Integrales Recomendados</h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">Soluciones completas para dejar tu computador rápido y seguro.</p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Plan Windows Listo</h3>
              <p className="text-3xl font-black text-blue-600 mt-2">$20.000</p>
              <ul className="mt-6 space-y-3 text-xs sm:text-sm text-slate-600">
                <li className="flex items-center gap-2"><span className="text-green-500 font-bold">✓</span> Formateo e instalación limpia de Windows 10/11</li>
                <li className="flex items-center gap-2"><span className="text-green-500 font-bold">✓</span> Configuración de controladores oficiales</li>
                <li className="flex items-center gap-2"><span className="text-green-500 font-bold">✓</span> Programas básicos (Office, PDF, navegador)</li>
              </ul>
            </div>
            <a
              href={whatsappUrl("Hola, me interesa contratar el Plan Windows Listo ($20.000).")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block w-full text-center bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-xl transition text-xs sm:text-sm"
            >
              Solicitar Plan
            </a>
          </div>

          <div className="bg-white rounded-3xl p-6 border-2 border-blue-600 shadow-lg flex flex-col justify-between relative scale-105">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
              Más Solicitado
            </span>
            <div>
              <h3 className="text-xl font-bold text-slate-900">Plan Resguardo Seguro + Windows</h3>
              <p className="text-3xl font-black text-blue-600 mt-2">$28.000</p>
              <ul className="mt-6 space-y-3 text-xs sm:text-sm text-slate-600">
                <li className="flex items-center gap-2"><span className="text-green-500 font-bold">✓</span> Resguardo completo de fotos, carpetas y documentos</li>
                <li className="flex items-center gap-2"><span className="text-green-500 font-bold">✓</span> Formateo e instalación limpia de Windows 10/11</li>
                <li className="flex items-center gap-2"><span className="text-green-500 font-bold">✓</span> Configuración de controladores y programas</li>
              </ul>
            </div>
            <a
              href={whatsappUrl("Hola, me interesa contratar el Plan Resguardo Seguro + Windows ($28.000).")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition text-xs sm:text-sm shadow-md"
            >
              Solicitar Plan
            </a>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Plan Mantención Total 360°</h3>
              <p className="text-3xl font-black text-blue-600 mt-2">$40.000</p>
              <ul className="mt-6 space-y-3 text-xs sm:text-sm text-slate-600">
                <li className="flex items-center gap-2"><span className="text-green-500 font-bold">✓</span> Limpieza interna profunda y cambio de pasta térmica</li>
                <li className="flex items-center gap-2"><span className="text-green-500 font-bold">✓</span> Resguardo completo de todos tus archivos</li>
                <li className="flex items-center gap-2"><span className="text-green-500 font-bold">✓</span> Formateo e instalación limpia de Windows y programas</li>
              </ul>
            </div>
            <a
              href={whatsappUrl("Hola, quiero contratar el Plan Mantención Total 360° ($40.000).")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block w-full text-center bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-xl transition text-xs sm:text-sm"
            >
              Solicitar Plan
            </a>
          </div>
        </div>
      </section>

      {/* 5. FORMULARIO FRONTEND PURO (DIRECTO A WHATSAPP) */}
      <section id="contacto" className="bg-white border-y border-slate-200 px-4 sm:px-6 py-16">
        <div className="mx-auto max-w-xl bg-[#F8F9FA] p-6 sm:p-10 rounded-3xl border border-slate-200">
          <div className="text-center">
            <span className="bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
              Contacto Directo
            </span>
            <h2 className="text-2xl sm:text-3xl font-black mt-3 text-slate-900">Escríbeme al WhatsApp</h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Completa tus datos y envíame un mensaje directo para coordinar tu servicio.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Nombre Completo</label>
              <input
                type="text"
                required
                placeholder="Ej. Carlos Tapia"
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                className="w-full rounded-xl border border-slate-300 p-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Correo Electrónico</label>
              <input
                type="email"
                required
                placeholder="ejemplo@correo.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-xl border border-slate-300 p-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Mensaje o Consulta</label>
              <textarea
                rows={3}
                required
                placeholder="¿Qué problema presenta tu equipo?"
                value={formData.mensaje}
                onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                className="w-full rounded-xl border border-slate-300 p-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 rounded-xl transition shadow-md text-xs sm:text-sm flex items-center justify-center gap-2"
            >
              <span>💬</span> Enviar Consulta por WhatsApp
            </button>
          </form>
        </div>
      </section>

      {/* 6. PREGUNTAS FRECUENTES */}
      <section id="faq" className="mx-auto max-w-3xl px-4 sm:px-6 py-12">
        <h2 className="text-center text-2xl sm:text-3xl font-black text-slate-900">Preguntas Frecuentes</h2>
        <div className="mt-6 space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
              <button
                type="button"
                onClick={() => setFaqAbierta(faqAbierta === idx ? null : idx)}
                className="w-full text-left p-4 sm:p-5 font-bold text-slate-900 flex justify-between items-center text-xs sm:text-sm"
              >
                <span>{faq.q}</span>
                <span className="text-blue-600 font-black text-base ml-2">{faqAbierta === idx ? '−' : '+'}</span>
              </button>
              {faqAbierta === idx && (
                <div className="px-4 sm:px-5 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="bg-slate-950 text-slate-400 px-4 sm:px-6 py-8 text-center text-xs">
        <p>© 2026 Soporte PC Quilpué. Todos los derechos reservados.</p>
        <p className="mt-2 text-[11px] text-slate-500">Atención técnica profesional en Quilpué y Marga Marga.</p>
      </footer>
    </main>
  );
}

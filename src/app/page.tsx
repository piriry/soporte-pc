'use client';

import { useState, useEffect } from 'react';

const WHATSAPP_NUMBER = "56973784443";

interface Solicitud {
  nombre: string;
  email: string;
  telefono: string;
  sintoma: string;
  modalidad: string;
  fecha: string;
}

export default function Home() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    sintoma: '',
    modalidad: 'Videollamada de Diagnóstico (Gratis)',
  });

  const [formEnviado, setFormEnviado] = useState(false);
  const [testSintoma, setTestSintoma] = useState<string | null>(null);
  const [faqAbierta, setFaqAbierta] = useState<number | null>(null);
  const [solicitudesGuardadas, setSolicitudesGuardadas] = useState<Solicitud[]>([]);
  const [verAdmin, setVerAdmin] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem('solicitudes_pc');
    if (data) {
      try {
        setSolicitudesGuardadas(JSON.parse(data));
      } catch (e) {
        console.error("Error al leer solicitudes", e);
      }
    }
  }, [formEnviado]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nuevaSolicitud: Solicitud = {
      ...formData,
      fecha: new Date().toLocaleString('es-CL'),
    };
    const listaActualizada = [nuevaSolicitud, ...solicitudesGuardadas];
    localStorage.setItem('solicitudes_pc', JSON.stringify(listaActualizada));
    setSolicitudesGuardadas(listaActualizada);
    setFormEnviado(true);
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
        SOPORTE TÉCNICO ESPECIALIZADO — MANTENIMIENTO, FORMATEO Y DIAGNÓSTICO
      </div>

      {/* 2. HEADER */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 px-4 sm:px-6 py-4">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <div className="flex items-center gap-2 font-black text-xl sm:text-2xl tracking-tighter text-slate-900">
            <span className="bg-blue-600 text-white px-2 py-0.5 rounded-lg text-base sm:text-lg">PC</span>
            SOPORTE.CL
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-700">
            <a href="#servicios" className="hover:text-blue-600 transition">Servicios</a>
            <a href="#test" className="hover:text-blue-600 transition">Diagnóstico Express</a>
            <a href="#agendamiento" className="hover:text-blue-600 transition">Agendar</a>
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
        <div className="mx-auto max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 bg-slate-800 border border-slate-700 rounded-full px-4 py-1.5 text-xs font-semibold text-yellow-400 mb-6">
            <span>★★★★★</span>
            <span className="text-slate-300">Quilpué y V Región</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Optimización, Limpieza y Formateo de Computadores
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Recupera la velocidad de tu equipo. Solución efectiva a problemas de sobrecalentamiento, lentitud y errores de sistema.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#agendamiento"
              className="rounded-xl bg-blue-600 px-6 sm:px-8 py-3.5 sm:py-4 font-bold text-white shadow-lg transition hover:bg-blue-700"
            >
              Agendar Evaluación Gratuita
            </a>
            <a
              href="#servicios"
              className="rounded-xl border border-slate-700 bg-slate-800/80 px-6 sm:px-8 py-3.5 sm:py-4 font-bold text-white transition hover:bg-slate-800"
            >
              Ver Servicios y Precios ↓
            </a>
          </div>
        </div>
      </section>

      {/* 4. CINTA DE BENEFICIOS */}
      <section className="bg-white border-b border-slate-200 px-4 sm:px-6 py-6">
        <div className="mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-2">
            <div className="text-2xl mb-1">📹</div>
            <h4 className="font-bold text-xs sm:text-sm text-slate-900">Diagnóstico por Videollamada</h4>
            <p className="text-[11px] text-slate-500">Evaluación inicial sin costo</p>
          </div>
          <div className="p-2">
            <div className="text-2xl mb-1">🏠</div>
            <h4 className="font-bold text-xs sm:text-sm text-slate-900">Modalidad Flexible</h4>
            <p className="text-[11px] text-slate-500">En taller o a domicilio</p>
          </div>
          <div className="p-2">
            <div className="text-2xl mb-1">💾</div>
            <h4 className="font-bold text-xs sm:text-sm text-slate-900">Respaldo Integral</h4>
            <p className="text-[11px] text-slate-500">Protección de tus archivos</p>
          </div>
          <div className="p-2">
            <div className="text-2xl mb-1">⚡</div>
            <h4 className="font-bold text-xs sm:text-sm text-slate-900">Atención Directa</h4>
            <p className="text-[11px] text-slate-500">Trato transparente sin intermediarios</p>
          </div>
        </div>
      </section>

      {/* 5. SERVICIOS Y VALORES */}
      <section id="servicios" className="mx-auto max-w-5xl px-4 sm:px-6 py-16">
        <h2 className="text-center text-2xl sm:text-3xl font-black text-slate-900">Servicios Disponibles</h2>
        <p className="text-center text-slate-600 text-xs sm:text-sm mt-1">Transparencia en valores y procedimientos.</p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {/* Mantenimiento */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <span className="bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                MANTENIMIENTO
              </span>
              <div className="text-4xl mt-3">🧹</div>
              <h3 className="text-xl font-bold mt-2 text-slate-900">Limpieza Interna y Optimización</h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                Desarme técnico, remoción de polvo acumulado en componentes internos, reemplazo de pasta térmica en procesador y optimización del arranque del sistema operativo.
              </p>
            </div>
            <div className="mt-6 border-t border-slate-100 pt-4 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-slate-400 font-semibold block uppercase">Valor Mantenimiento</span>
                <span className="text-2xl font-black text-slate-900">$25.000</span>
              </div>
              <a
                href={whatsappUrl("Hola, deseo consultar por el servicio de Limpieza Interna y Optimización.")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl transition"
              >
                Consultar
              </a>
            </div>
          </div>

          {/* Formateo */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <span className="bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                FORMATEO
              </span>
              <div className="text-4xl mt-3">💽</div>
              <h3 className="text-xl font-bold mt-2 text-slate-900">Formateo con Respaldo de Datos</h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                Resguardo seguro de archivos personales, instalación limpia de Windows 10 u 11, configuración de controladores oficiales y utilitarios básicos.
              </p>
            </div>
            <div className="mt-6 border-t border-slate-100 pt-4 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-slate-400 font-semibold block uppercase">Valor Formateo</span>
                <span className="text-2xl font-black text-slate-900">$20.000</span>
              </div>
              <a
                href={whatsappUrl("Hola, deseo consultar por el servicio de Formateo con Respaldo de Datos.")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl transition"
              >
                Consultar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TEST EXPRESS DE SÍNTOMAS */}
      <section id="test" className="mx-auto max-w-4xl px-4 sm:px-6 py-12">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200 text-center">
          <span className="bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
            Diagnóstico Express
          </span>
          <h2 className="text-2xl sm:text-3xl font-black mt-3 text-slate-900">¿Qué síntoma presenta el equipo?</h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">Haz clic en la opción correspondiente para obtener una recomendación inmediata.</p>

          <div className="grid gap-3 sm:grid-cols-2 mt-6 text-left">
            {[
              { id: 'lento', texto: 'Lentitud extrema al encender o abrir programas' },
              { id: 'temperatura', texto: 'Elevada temperatura y ruido constante del ventilador' },
              { id: 'pantalla', texto: 'Aparición de pantallas de error o reinicios inesperados' },
              { id: 'formateo', texto: 'Necesidad de reinstalar el sistema conservando archivos' },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setTestSintoma(item.texto)}
                className={`p-4 rounded-xl border text-xs sm:text-sm font-semibold transition flex items-center justify-between text-left ${
                  testSintoma === item.texto
                    ? 'border-blue-600 bg-blue-50 text-blue-900 ring-2 ring-blue-600'
                    : 'border-slate-200 bg-slate-50 text-slate-800 hover:border-slate-300'
                }`}
              >
                <span>{item.texto}</span>
                {testSintoma === item.texto && <span className="text-blue-600 font-bold ml-2">✓</span>}
              </button>
            ))}
          </div>

          {testSintoma && (
            <div className="mt-6 bg-slate-50 p-5 rounded-2xl border border-slate-200 text-left sm:text-center animate-fade-in">
              <p className="text-xs sm:text-sm text-slate-700 font-medium">
                Síntoma seleccionado: <strong>{testSintoma}</strong>
              </p>
              <a
                href={whatsappUrl(`Hola, realicé el test express. Mi equipo presenta: ${testSintoma}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-xl text-xs sm:text-sm transition shadow-sm"
              >
                Continuar consulta vía WhatsApp →
              </a>
            </div>
          )}
        </div>
      </section>

      {/* 7. COMPROMISO DE ATENCIÓN */}
      <section className="bg-slate-900 text-white px-4 sm:px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl sm:text-3xl font-black">Principios de Atención</h2>
          <p className="text-center text-slate-400 text-xs sm:text-sm mt-1">Atención directa centrada en el cuidado de tu equipo.</p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700">
              <div className="text-3xl mb-2">🔍</div>
              <h3 className="font-bold text-base text-white">Evaluación Directa</h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Revisamos el estado de tu computador de forma clara y explicamos lo que requiere de manera simple y entendible.
              </p>
            </div>

            <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700">
              <div className="text-3xl mb-2">💾</div>
              <h3 className="font-bold text-base text-white">Resguardo de Archivos</h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Priorizamos la integridad de tus fotos, documentos y carpetas antes de cualquier proceso de formateo o mantenimiento.
              </p>
            </div>

            <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700">
              <div className="text-3xl mb-2">🤝</div>
              <h3 className="font-bold text-base text-white">Trato Personalizado</h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Atención cercana y coordinación directa por WhatsApp en todo momento para resolver tus dudas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FORMULARIO DE AGENDAMIENTO */}
      <section id="agendamiento" className="bg-white border-y border-slate-200 px-4 sm:px-6 py-16">
        <div className="mx-auto max-w-3xl bg-[#F8F9FA] p-6 sm:p-10 rounded-3xl border border-slate-200">
          <div className="text-center">
            <span className="bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
              Evaluación Inicial
            </span>
            <h2 className="text-2xl sm:text-3xl font-black mt-3 text-slate-900">Agendar Coordinación Técnica</h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Ingresa tus datos de contacto para evaluar la alternativa de servicio requerida.
            </p>
          </div>

          {formEnviado ? (
            <div className="mt-6 bg-green-50 border border-green-200 text-green-900 p-6 rounded-2xl text-center">
              <h3 className="font-bold text-base">¡Solicitud Registrada Exitosamente!</h3>
              <p className="text-xs sm:text-sm mt-1">
                La información ha sido guardada. Serás contactado a la brevedad para coordinar la atención.
              </p>
              <button
                onClick={() => setFormEnviado(false)}
                className="mt-3 text-xs text-green-700 underline font-semibold"
              >
                Ingresar otra solicitud
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
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
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Teléfono / WhatsApp</label>
                  <input
                    type="tel"
                    required
                    placeholder="+56 9 1234 5678"
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    className="w-full rounded-xl border border-slate-300 p-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Modalidad Preferida</label>
                  <select
                    value={formData.modalidad}
                    onChange={(e) => setFormData({ ...formData, modalidad: e.target.value })}
                    className="w-full rounded-xl border border-slate-300 p-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                  >
                    <option value="Videollamada de Diagnóstico (Gratis)">📹 Videollamada de Diagnóstico (Gratis)</option>
                    <option value="Visita a Domicilio">🏠 Atención a Domicilio</option>
                    <option value="Entrega en Taller">🛠️ Entrega en Taller Particular</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Descripción del Problema</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Detalla brevemente las fallas observadas en el equipo..."
                  value={formData.sintoma}
                  onChange={(e) => setFormData({ ...formData, sintoma: e.target.value })}
                  className="w-full rounded-xl border border-slate-300 p-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition shadow-md text-xs sm:text-sm"
              >
                Enviar Solicitud y Registrar Contacto
              </button>
            </form>
          )}
        </div>
      </section>

      {/* 9. PREGUNTAS FRECUENTES (FAQ ACORDEÓN) */}
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

      {/* 10. FOOTER Y ADMIN LOCAL */}
      <footer className="bg-slate-950 text-slate-400 px-4 sm:px-6 py-8 text-center text-xs">
        <p>© 2026 Soporte PC Quilpué. Todos los derechos reservados.</p>
        <div className="mt-4">
          <button
            type="button"
            onClick={() => setVerAdmin(!verAdmin)}
            className="text-slate-600 hover:text-slate-400 text-[11px] underline"
          >
            {verAdmin ? 'Ocultar Solicitudes Registradas' : 'Ver Solicitudes Registradas (Admin)'}
          </button>
        </div>

        {verAdmin && (
          <div className="mt-6 text-left bg-slate-900 p-4 rounded-xl border border-slate-800 max-w-4xl mx-auto overflow-x-auto">
            <h4 className="font-bold text-white mb-2 text-xs">Solicitudes Guardadas en Base de Datos Local:</h4>
            {solicitudesGuardadas.length === 0 ? (
              <p className="text-slate-500 text-xs">No hay solicitudes guardadas aún.</p>
            ) : (
              <table className="w-full text-left text-[11px] text-slate-300 border-collapse">
                <thead>
                  <tr className="border-b border-slate-700 text-slate-400">
                    <th className="p-2">Fecha</th>
                    <th className="p-2">Nombre</th>
                    <th className="p-2">Contacto</th>
                    <th className="p-2">Modalidad</th>
                    <th className="p-2">Problema</th>
                  </tr>
                </thead>
                <tbody>
                  {solicitudesGuardadas.map((sol, index) => (
                    <tr key={index} className="border-b border-slate-800">
                      <td className="p-2 whitespace-nowrap">{sol.fecha}</td>
                      <td className="p-2 font-semibold text-white">{sol.nombre}</td>
                      <td className="p-2">{sol.telefono} <br/>({sol.email})</td>
                      <td className="p-2">{sol.modalidad}</td>
                      <td className="p-2">{sol.sintoma}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}
      </footer>

      {/* BOTÓN FLOTANTE WHATSAPP */}
      <a
        href={whatsappUrl("Hola, deseo realizar una consulta sobre mi equipo.")}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transition transform hover:scale-110 flex items-center justify-center font-bold"
        aria-label="WhatsApp"
      >
        <span className="text-2xl">💬</span>
      </a>
    </main>
  );
}
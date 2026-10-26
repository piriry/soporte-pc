'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';

const WHATSAPP_NUMBER = "56973784443";

export default function Home() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    direccion: '',
    tipo_servicio: 'Mantenimiento Preventivo',
    mensaje: '',
  });

  const [cargando, setCargando] = useState(false);
  const [mensajeEstado, setMensajeEstado] = useState<string | null>(null);
  const [testSintoma, setTestSintoma] = useState<string | null>(null);
  const [faqAbierta, setFaqAbierta] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCargando(true);
    setMensajeEstado(null);

    // 1. Limpieza de datos (trim)
    const nombreLimpio = formData.nombre.trim();
    const emailLimpio = formData.email.trim();
    const telefonoLimpio = formData.telefono.trim();
    const direccionLimpia = formData.direccion.trim();
    const mensajeLimpio = (formData.mensaje || testSintoma || '').trim();

    // 2. Validaciones básicas de largo
    if (nombreLimpio.length < 2 || nombreLimpio.length > 100) {
      setMensajeEstado('El nombre debe tener entre 2 y 100 caracteres.');
      setCargando(false);
      return;
    }

    if (mensajeLimpio.length < 10 || mensajeLimpio.length > 2000) {
      setMensajeEstado('La descripción del problema debe tener entre 10 y 2000 caracteres.');
      setCargando(false);
      return;
    }

    const supabase = createClient();

    const { error } = await supabase.from('tickets').insert([
      {
        nombre: nombreLimpio,
        correo: emailLimpio,
        telefono: telefonoLimpio,
        direccion: direccionLimpia,
        tipo_servicio: formData.tipo_servicio,
        mensaje: mensajeLimpio,
      },
    ]);

    setCargando(false);

    if (error) {
      console.error('Error al insertar ticket:', error);
      setMensajeEstado('Hubo un error al enviar tu solicitud. Inténtalo de nuevo.');
    } else {
      setMensajeEstado('¡Solicitud enviada con éxito! Nos pondremos en contacto pronto.');
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        direccion: '',
        tipo_servicio: 'Mantenimiento Preventivo',
        mensaje: '',
      });
      setTestSintoma(null);
    }
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
                onClick={() => {
                  setTestSintoma(item.texto);
                  setFormData(prev => ({ ...prev, mensaje: item.texto }));
                }}
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
            <div className="mt-6 bg-slate-50 p-5 rounded-2xl border border-slate-200 text-left sm:text-center">
              <p className="text-xs sm:text-sm text-slate-700 font-medium">
                Síntoma seleccionado: <strong>{testSintoma}</strong>. ¡Ya se cargó en el formulario de abajo para agendar!
              </p>
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

      {/* 8. FORMULARIO DE AGENDAMIENTO CONECTADO A SUPABASE */}
      <section id="agendamiento" className="bg-white border-y border-slate-200 px-4 sm:px-6 py-16">
        <div className="mx-auto max-w-3xl bg-[#F8F9FA] p-6 sm:p-10 rounded-3xl border border-slate-200">
          <div className="text-center">
            <span className="bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
              Evaluación Inicial
            </span>
            <h2 className="text-2xl sm:text-3xl font-black mt-3 text-slate-900">Agendar Coordinación Técnica</h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Ingresa tus datos de contacto para guardar tu solicitud directo en la base de datos.
            </p>
          </div>

          {mensajeEstado && (
            <div className={`mt-6 p-4 rounded-2xl text-center text-xs sm:text-sm font-semibold ${mensajeEstado.includes('éxito') ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
              {mensajeEstado}
            </div>
          )}

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
                <label className="block text-xs font-bold text-slate-700 mb-1">Tipo de Servicio</label>
                <select
                  value={formData.tipo_servicio}
                  onChange={(e) => setFormData({ ...formData, tipo_servicio: e.target.value })}
                  className="w-full rounded-xl border border-slate-300 p-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                >
                  <option value="Mantenimiento Preventivo">🛠️ Mantenimiento Preventivo</option>
                  <option value="Formateo / Software">💽 Formateo con Respaldo</option>
                  <option value="Reparación de Hardware">⚙️ Reparación de Hardware</option>
                  <option value="Videollamada de Diagnóstico">📹 Videollamada de Diagnóstico (Gratis)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Dirección (para retiro o visita)</label>
              <input
                type="text"
                placeholder="Calle Principal 123, Quilpué"
                value={formData.direccion}
                onChange={(e) => setFormData({ ...formData, direccion: e.target.value })}
                className="w-full rounded-xl border border-slate-300 p-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Descripción del Problema</label>
              <textarea
                rows={3}
                required
                placeholder="Detalla brevemente las fallas observadas en el equipo..."
                value={formData.mensaje}
                onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                className="w-full rounded-xl border border-slate-300 p-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={cargando}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition shadow-md text-xs sm:text-sm disabled:opacity-50"
            >
              {cargando ? 'Guardando en Supabase...' : 'Enviar Solicitud y Registrar Contacto'}
            </button>
          </form>
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

      {/* 10. FOOTER */}
      <footer className="bg-slate-950 text-slate-400 px-4 sm:px-6 py-8 text-center text-xs">
        <p>© 2026 Soporte PC Quilpué. Todos los derechos reservados.</p>
        <p className="mt-2 text-[11px] text-slate-500">Atención técnica profesional en Quilpué y Marga Marga.</p>
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

// Sección de servicios individuales. Es la sección a la que apunta el enlace "Servicios" del menú.
// Server Component: es contenido fijo, no necesita JavaScript en el navegador.
import { whatsappUrl } from '@/lib/whatsapp';

// Lista de servicios. Para agregar uno nuevo basta con añadir un objeto aquí:
// la tarjeta se genera sola. Así no repetimos el mismo bloque HTML cinco veces.
const servicios = [
  {
    icono: '🧹',
    titulo: 'Mantención y limpieza',
    descripcion: 'Limpieza interna del equipo y cambio de pasta térmica para bajar la temperatura y evitar que se apague o se ponga lento.',
    mensaje: 'Hola, quiero cotizar el servicio de mantención y limpieza.',
  },
  {
    icono: '💻',
    titulo: 'Formateo limpio de Windows',
    descripcion: 'Instalación limpia de Windows 10/11 con controladores oficiales y programas básicos.',
    mensaje: 'Hola, quiero cotizar un formateo limpio de Windows.',
  },
  {
    icono: '💾',
    titulo: 'Respaldo de documentos',
    descripcion: 'Resguardo de tus fotos, documentos y carpetas personales antes de cualquier intervención.',
    mensaje: 'Hola, quiero cotizar un respaldo de mis documentos.',
  },
  {
    icono: '🛡️',
    titulo: 'Eliminación de virus',
    descripcion: 'Detección y eliminación de virus y malware, con configuración de protección para que no vuelva a ocurrir.',
    mensaje: 'Hola, quiero cotizar la eliminación de virus en mi equipo.',
  },
  {
    icono: '⚡',
    titulo: 'Optimización de rendimiento',
    descripcion: 'Evaluación y mejora de RAM y discos para que tu equipo vuelva a responder con rapidez.',
    mensaje: 'Hola, quiero cotizar una optimización de RAM y discos.',
  },
];

export default function Servicios() {
  return (
    // id="servicios" es lo que conecta con el enlace #servicios del menú
    <section id="servicios" className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
      <div className="text-center">
        <span className="bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
          Servicios Individuales
        </span>
        <h2 className="text-2xl sm:text-3xl font-black mt-3 text-slate-900">Elige solo lo que necesitas</h2>
        <p className="text-slate-600 text-xs sm:text-sm mt-1">
          Cada servicio se puede contratar por separado. Cotiza directo por WhatsApp.
        </p>
      </div>

      {/* Grilla: 1 columna en móvil, 2 en tablet, 3 en escritorio */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {servicios.map((servicio) => (
          <div
            key={servicio.titulo}
            className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between"
          >
            <div>
              <span className="text-3xl">{servicio.icono}</span>
              <h3 className="text-lg font-bold text-slate-900 mt-3">{servicio.titulo}</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">{servicio.descripcion}</p>
            </div>
            <a
              href={whatsappUrl(servicio.mensaje)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block w-full text-center bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-xl transition text-xs sm:text-sm"
            >
              Cotizar por WhatsApp
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
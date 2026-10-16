'use client';

const WHATSAPP_NUMBER = "56973784443"; // Cambia por tu número: código de país + número, sin "+" ni espacios

const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const services = [
  {
    icon: "🧹",
    title: "Mantenimiento",
    description:
      "Limpieza interna, cambio de pasta térmica y optimización para que tu equipo rinda como el primer día.",
    message: "Hola, quiero cotizar el servicio de mantenimiento de mi PC.",
  },
  {
    icon: "🔧",
    title: "Reparación",
    description:
      "Diagnóstico y solución de fallas de hardware y software: no enciende, pantalla, lentitud, ruidos y más.",
    message: "Hola, necesito reparar mi PC. ¿Me pueden ayudar?",
  },
  {
    icon: "💽",
    title: "Formateo",
    description:
      "Instalación limpia de Windows, drivers y programas esenciales, con respaldo de tu información.",
    message: "Hola, quiero cotizar el formateo e instalación de mi PC.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* HERO */}
      <section className="bg-slate-900 px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Soporte Técnico, Mantenimiento y Reparación de PC
          </h1>
          <p className="mt-6 text-lg text-slate-300">
            Tu computador funcionando como nuevo: rápido, seguro y sin
            complicaciones.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={whatsappLink("Hola, quiero consultar por soporte técnico.")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-green-500 px-6 py-3 font-semibold text-white transition hover:bg-green-600"
            >
              Escribir por WhatsApp
            </a>
            <a
              href="#servicios"
              className="rounded-lg border border-slate-500 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
            >
              Ver servicios
            </a>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-center text-3xl font-bold">Nuestros servicios</h2>
        <p className="mt-3 text-center text-slate-600">
          Elige el servicio y cotiza directo por WhatsApp.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="flex flex-col rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
            >
              <span className="text-4xl">{service.icon}</span>
              <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
              <p className="mt-2 flex-1 text-slate-600">
                {service.description}
              </p>
              <a
                href={whatsappLink(service.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-lg bg-blue-700 px-4 py-2 text-center font-semibold text-white transition hover:bg-blue-800"
              >
                Cotizar por WhatsApp
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="bg-white px-6 py-20 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold">¿Necesitas ayuda ahora?</h2>
          <p className="mt-3 text-slate-600">
            Cuéntanos qué le pasa a tu equipo y te respondemos lo antes posible.
          </p>
          <a
            href={whatsappLink("Hola, necesito ayuda con mi computador.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-lg bg-green-500 px-8 py-4 text-lg font-semibold text-white transition hover:bg-green-600"
          >
            Contactar por WhatsApp
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-8 text-center text-sm text-slate-500">
© 2026 Soporte PC. Todos los derechos reservados.
      </footer>
    </main>
  );
}
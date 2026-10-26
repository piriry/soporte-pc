"use client";

import { useState } from "react";
import { crearTicket } from "@/app/actions";

export default function Home() {
  const [mensajeEstado, setMensajeEstado] = useState<string | null>(null);
  const [errorEstado, setErrorEstado] = useState<string | null>(null);
  const [cargando, setCargando] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setCargando(true);
    setMensajeEstado(null);
    setErrorEstado(null);

    const formData = new FormData(event.currentTarget);
    const resultado = await crearTicket(formData);

    setCargando(false);

    if (resultado?.error) {
      setErrorEstado(resultado.error);
    } else {
      setMensajeEstado(
        "¡Solicitud enviada con éxito! Nos pondremos en contacto pronto.",
      );
      event.currentTarget.reset();
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 md:p-24 bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-xl bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
        <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
          Soporte PC
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Ingresa los datos de tu equipo y el problema para solicitar asistencia
          técnica.
        </p>

        {mensajeEstado && (
          <div className="mb-4 p-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800">
            {mensajeEstado}
          </div>
        )}

        {errorEstado && (
          <div className="mb-4 p-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800">
            {errorEstado}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Nombre completo
            </label>
            <input
              type="text"
              name="nombre"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Juan Pérez"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Correo electrónico
            </label>
            <input
              type="email"
              name="correo"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="juan@correo.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Tipo de servicio
            </label>
            <select
              name="tipo_servicio"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <option value="">Selecciona una opción</option>
              <option value="Mantenimiento Preventivo">
                Mantenimiento Preventivo
              </option>
              <option value="Reparación de Hardware">
                Reparación de Hardware
              </option>
              <option value="Formateo / Software">Formateo / Software</option>
              <option value="Armado de PC">Armado de PC</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Descripción del problema
            </label>
            <textarea
              name="mensaje"
              rows={4}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Describe qué le pasa a tu equipo..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={cargando}
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-200 disabled:opacity-50"
          >
            {cargando ? "Enviando..." : "Enviar Solicitud"}
          </button>
        </form>
      </div>
    </main>
  );
}

"use client";

import { useState } from "react";

export default function Home() {
  const [solicitudesGuardadas] = useState(() => {
    if (typeof window === "undefined") return [];
    try {
      const data = localStorage.getItem("solicitudes");
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error("Error al leer solicitudes", e);
      return [];
    }
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-4">Soporte PC</h1>
      <p className="text-lg text-gray-600 mb-8">
        Sistema de solicitudes y gestión de soporte técnico.
      </p>

      {solicitudesGuardadas.length > 0 && (
        <div className="w-full max-w-md p-4 bg-gray-100 rounded-lg dark:bg-gray-800">
          <h2 className="font-semibold mb-2">Solicitudes guardadas:</h2>
          <pre className="text-sm overflow-auto">
            {JSON.stringify(solicitudesGuardadas, null, 2)}
          </pre>
        </div>
      )}
    </main>
  );
}

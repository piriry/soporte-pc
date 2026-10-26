"use server";

import { createClient } from "@/lib/supabase/server";

export async function crearTicket(formData: FormData) {
  const supabase = await createClient();

  const nombre = formData.get("nombre") as string;
  const correo = formData.get("correo") as string;
  const tipo_servicio = formData.get("tipo_servicio") as string;
  const mensaje = formData.get("mensaje") as string;

  if (!nombre || !correo || !tipo_servicio || !mensaje) {
    return { error: "Todos los campos son obligatorios." };
  }

  const { error } = await supabase.from("tickets").insert([
    {
      nombre,
      correo,
      tipo_servicio,
      mensaje,
      estado: "nuevo",
    },
  ]);

  if (error) {
    console.error("Error al insertar ticket:", error);
    return { error: "No se pudo enviar la solicitud. Intenta nuevamente." };
  }

  return { success: true };
}

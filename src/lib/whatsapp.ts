// Utilidades de WhatsApp compartidas por todo el sitio.
// Se definen en un solo lugar para no repetir el número en cada componente.

// Número de contacto en formato internacional, sin "+" ni espacios.
export const WHATSAPP_NUMBER = '56973784443';

// Construye el enlace de WhatsApp con un mensaje ya escrito.
// encodeURIComponent convierte espacios y caracteres especiales a un formato válido para una URL.
export function whatsappUrl(mensaje: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;
}
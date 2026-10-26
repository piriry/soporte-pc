import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Soporte Técnico PC Quilpué | Formateo y Mantenimiento",
  description: "Servicio técnico especializado en computadores y notebooks en Quilpué y V Región. Diagnóstico inicial sin costo, limpieza interna y respaldo de datos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} bg-[#F8F9FA] text-slate-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}

# Soporte PC

![Next.js](https://img.shields.io/badge/Next.js-App_Router-000000?style=for-the-badge&logo=nextdotjs&logoColor=white&labelColor=101010)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black&labelColor=101010)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white&labelColor=101010)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white&labelColor=101010)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white&labelColor=101010)
![Licencia MIT](https://img.shields.io/badge/Licencia-MIT-yellow?style=for-the-badge&labelColor=101010)

## Sitio web de soporte técnico, mantenimiento y reparación de PC

### Proyecto de portafolio | Next.js | Tailwind CSS | Desplegado en Vercel

> Si te resulta útil este proyecto, apóyalo con una ★ en el repositorio. ¡Gracias!

## Índice

- [🖥️ Descripción](#descripción)
- [🛠️ Servicios](#servicios)
- [⚙️ Tecnologías](#tecnologías)
- [📁 Estructura del proyecto](#estructura-del-proyecto)
- [💻 Instalación local](#instalación-local)
- [🚀 Despliegue](#despliegue)
- [🔗 Referencias](#referencias)
- [📄 Licencia](#licencia)
- [👤 Autor](#autor)

## Descripción

Página web profesional para un servicio de soporte técnico, mantenimiento y reparación de computadores. Presenta los servicios disponibles y permite contactar directamente por WhatsApp con un mensaje prellenado según el servicio elegido.

## Servicios

- 🧹 **Mantenimiento:** limpieza interna, cambio de pasta térmica y optimización.
- 🔧 **Reparación:** diagnóstico y solución de fallas de hardware y software.
- 💽 **Formateo:** instalación limpia de Windows, drivers y programas esenciales.

## Tecnologías

| Tecnología | Uso |
| --- | --- |
| [Next.js](https://nextjs.org) (App Router) | Framework web |
| [React](https://react.dev) | Interfaz de usuario |
| [TypeScript](https://www.typescriptlang.org) | Tipado del código |
| [Tailwind CSS](https://tailwindcss.com) | Estilos |
| [Git](https://git-scm.com) y [GitHub](https://github.com) | Control de versiones |
| [Vercel](https://vercel.com) | Despliegue automático |

## Estructura del proyecto

```text
soporte-pc/
├── docs/              # Documentación del proyecto
├── public/
│   └── images/        # Imágenes y recursos estáticos
├── src/
│   ├── app/           # Páginas y layout (App Router)
│   └── components/    # Componentes reutilizables
├── LICENSE
├── README.md
└── package.json
```

## Instalación local

Requisitos: [Node.js](https://nodejs.org) (versión LTS) y [Git](https://git-scm.com).

```bash
# 1. Clonar el repositorio
git clone https://github.com/TU_USUARIO/soporte-pc.git

# 2. Entrar a la carpeta
cd soporte-pc

# 3. Instalar dependencias
npm install

# 4. Iniciar el servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

Para configurar tu número de WhatsApp, edita la constante `WHATSAPP_NUMBER` al inicio de `src/app/page.tsx` (código de país + número, sin `+` ni espacios).

## Despliegue

- 🌐 Sitio en vivo: [https://TU-PROYECTO.vercel.app](https://TU-PROYECTO.vercel.app)
- 📦 Repositorio: [github.com/TU_USUARIO/soporte-pc](https://github.com/TU_USUARIO/soporte-pc)

El proyecto está conectado a Vercel (plan Hobby): cada `git push` a la rama `main` publica una nueva versión automáticamente.

## Referencias

- Repositorio de referencia para el estilo del README: [mouredev/hello-sql](https://github.com/mouredev/hello-sql)
- [Documentación de Next.js](https://nextjs.org/docs)
- [Documentación de Tailwind CSS](https://tailwindcss.com/docs)
- [Documentación de Vercel](https://vercel.com/docs)

## Licencia

Distribuido bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más información.

## Autor

**Carlos Daniel Tapia Córdova

[![GitHub](https://img.shields.io/badge/GitHub-piriry-087ec4?style=for-the-badge&logo=github&logoColor=white&labelColor=101010)](https://github.com/piriry)
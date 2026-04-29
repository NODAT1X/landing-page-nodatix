# 🚀 Nodatix - Landing Page B2B

Repositorio oficial de la Landing Page de **Nodatix**, diseñada para proyectar autoridad técnica, agendar llamadas de diagnóstico y convertir prospectos B2B.

## 📌 Descripción General

El proyecto está construido bajo una arquitectura moderna, escalable y optimizada para SEO. El diseño sigue un enfoque "Dark Mode" minimalista y tecnológico, pensado para un público de CEOs, CTOs y Gerentes de Operaciones.

## 🛠️ Stack Tecnológico

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Lenguaje:** TypeScript (Strict Mode)
- **Estilos:** Tailwind CSS v4
- **Iconografía:** Lucide React
- **Despliegue (Planeado):** Vercel

## 🏗️ Estructura del Proyecto

La arquitectura del proyecto sigue las mejores prácticas de Next.js App Router, aislando componentes visuales de la lógica de enrutamiento:

```text
nodatix-landing/
├── app/
│   ├── layout.tsx         # Layout maestro (Navbar, Footer, SEO global)
│   ├── page.tsx           # Ensamblaje de las secciones de la Landing
│   └── globals.css        # Configuración de Tailwind v4 y variables CSS (Tokens)
├── components/
│   ├── layout/            # Componentes estructurales
│   │   └── Footer.tsx
│   ├── sections/          # Bloques visuales principales de la Landing
│   │   ├── HeroSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── TechStackSection.tsx
│   │   └── ContactCTASection.tsx
│   └── Navbar.tsx         # Navegación principal
```

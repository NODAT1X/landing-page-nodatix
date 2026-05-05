Aquí tienes la arquitectura técnica, visual y estratégica detallada, lista para ser ejecutada.

## 1. Concepto General de la Landing Page

La idea central de la página es proyectar a Nodatix como un socio tecnológico estratégico, un consultor ágil capaz de simplificar problemas complejos y traducirlos en soluciones funcionales.

- La percepción a los 5 segundos debe ser de seguridad, profesionalismo y claridad.

- El usuario debe sentir que está frente a una empresa moderna y confiable que resolverá sus cuellos de botella operativos.

- El enfoque evitará los tecnicismos innecesarios, priorizando el valor real de negocio y la escalabilidad.

## 2. Análisis de Referencias y Diferenciación

### Netguru (El Consultor Corporativo)

- **Qué hacen bien:** Estructura impecable de la información, generación de confianza profunda B2B y claridad en sus procesos.

- **Qué adaptar:** El nivel de detalle en la propuesta de valor y la forma en que explican metodologías.

- **Qué no copiar:** El enfoque masivo de "gran corporativo" que puede ahuyentar a PyMEs o Startups por parecer inalcanzable. Nodatix debe sentirse más cercano.

### Linear (El Estándar SaaS Moderno)

- **Qué hacen bien:** Estética Dark Mode absoluta, microinteracciones, uso magistral de gradientes sutiles y textos ultra-directos.

- **Qué adaptar:** La limpieza visual, el uso de mockups abstractos en lugar de fotos genéricas de oficina, y las grillas perfectas.

- **Qué no copiar:** Linear vende un producto único; Nodatix vende servicios adaptables. No podemos ser tan abstractos que el cliente no entienda qué compran.

**El Diferenciador de Nodatix:** La página debe comunicar que Nodatix primero entiende el proceso operativo del cliente y luego propone tecnología, entregando sistemas útiles y no solo "software bonito".

## 3. Estructura Recomendada de la Landing Page

Esta estructura está optimizada para guiar a un CEO, CTO o Gerente de Operaciones desde la curiosidad inicial hasta agendar una llamada.

| **Sección**           | **Objetivo**               | **Contenido / Mensaje**                                                      | **Elementos Visuales**                                               |
| --------------------- | -------------------------- | ---------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| **Navbar**            | Navegación rápida.         | Logo Nodatix, Servicios, Proceso, Tecnologías. CTA: "Agendar una llamada".   | Sticky header, fondo con glassmorphism oscuro.                       |
| **Hero**              | Enganche inmediato.        | Promesa: "Construimos software a medida que simplifica y escala tu negocio." | Mockup abstracto de un Dashboard/CRM. Botón primario azul eléctrico. |
| **El Problema**       | Empatía con el dolor B2B.  | Exponer el problema de los procesos manuales, WhatsApp u hojas de cálculo.   | Layout minimalista, tipografía fuerte.                               |
| **Servicios Top 3**   | Oferta clara.              | 1\) Desarrollo Web/SaaS, 2) CRM Personalizados, 3) Automatización.           | Cards en Gris Profundo (#1E1E24) con iconos sencillos.               |
| **Metodología**       | Generar confianza técnica. | Proceso claro: diagnóstico, propuesta, diseño, desarrollo, pruebas, entrega. | Timeline vertical o grilla horizontal limpia.                        |
| **Tecnologías**       | Autoridad técnica.         | Stack: Next.js, React, TypeScript, Node.js, MySQL, Tailwind CSS.             | Logos monocromáticos sutiles de las tecnologías.                     |
| **Casos / Confianza** | Mostrar capacidad.         | Mención a casos reales iniciales, como el sistema SaaS para gimnasios.       | Mockups limpios de UI. Perfil breve de founders.                     |
| **CTA Final**         | Conversión.                | Llamado a la acción directo para evaluar el proyecto.                        | Gradiente Linear Gradient (Primary Tech) de fondo.                   |
| **Footer**            | Cierre corporativo.        | Links legales, redes, contacto (WhatsApp Business/Formulario).               | Minimalista, fondo Negro Carbón (#121212).                           |

### 4. Copywriting Inicial

- **Hero (H1):** Construimos software a medida que simplifica y escala tu negocio.

- **Hero Subtítulo (H2):** Convertimos tus procesos manuales y herramientas desconectadas en sistemas digitales centralizados, rápidos y listos para crecer.

- **CTA Principal:** Agendar una llamada.

- **CTA Secundario:** Cotizar mi proyecto.

- **Copy Sección Problema:** ¿Demasiado tiempo en hojas de cálculo y WhatsApp? Construimos tecnología que centraliza tu operación para que puedas enfocarte en tomar decisiones.

- **Copy Diferenciador:** No entregamos solo "software bonito". Entendemos tu operación antes de escribir una sola línea de código, garantizando adopción real.

### 5. Dirección Visual y UI

El estilo será un _Dark Mode tecnológico_ que transmite modernidad y elegancia.

Paleta de Colores (Regla 60-30-10):

- **Fondo/Estructura (60%):** Negro Carbón (#121212) para el fondo global. Gris Profundo (#1E1E24) para las cards de servicios.

- **Textos (30%):** Blanco Nieve (#F8F9FA) para títulos. Gris Claro (#A0A0A0) para párrafos.

- **Acentos (10%):** Azul Eléctrico (#007BFF) como primario. Violeta Vibrante (#8A2BE2) y Cian Tech (#00F5FF) para hovers y detalles.

### Gradientes:

- **Primario:** linear-gradient(135deg, \#007BFF 0%, \#8A2BE2 100%) para el CTA principal.

- **Acento:** linear-gradient(90deg, \#00F5FF 0%, \#007BFF 100%) para líneas divisorias sutiles.

### Estilo General:

- Grillas perfectas, bordes sutiles (1px solid \#2A2A35).

- Mockups abstractos simulando dashboards sin imágenes complejas.

- Botones con ligero glow en hover.

### 6. Arquitectura Técnica

La base elegida es ideal para escalar. Iniciaremos en español, preparados para internacionalización.

- **Framework:** Next.js (App Router).

- **Estilos:** Tailwind CSS.

- **Lenguaje:** TypeScript (estricto).

- **Analítica/Leads:** Configuración para Google Analytics, Formulario a BD propia/Notion, botón flotante sutil de WhatsApp.

- **Estructura Base sugerida:**
  - /app: page.tsx, layout.tsx, globals.css

  - /components: /ui (botones, cards compartidas), /sections (Hero, Services, CTA)

  - /public: logos, mockups en formato WebP o SVG.

  - /lib: utilidades de TS.

### 7. Plan Paso a Paso de Implementación

1.  **Fase 1: Setup.** Inicialización del repositorio Next.js + Tailwind + Configuración de fuentes y variables de color en global.css.

2.  **Fase 2: Layout Base.** Creación del Navbar y Footer globales.

3.  **Fase 3: Componentes UI.** Construcción de botones base, gradientes y tipografía estandarizada.

4.  **Fase 4: Hero y Problema.** Maquetación de la primera impresión y CTA primario.

5.  **Fase 5: Servicios y Proceso.** Desarrollo de las cards de servicios y el timeline del proceso de trabajo.

6.  **Fase 6: Confianza.** Sección de tecnologías y mockups de casos (ej. SaaS Gimnasio).

7.  **Fase 7: QA Responsive.** Ajuste de grillas para móvil y tablet.

8.  **Fase 8: Integraciones.** Formulario de contacto y tags de analítica.

### 8. Prompts Modulares para Claude

Aquí tienes la batería de prompts iniciales para arrancar el desarrollo por fases. Copia y pega uno a la vez.

### Prompt 1: Setup Inicial y Configuración Visual

"Actúa como un Frontend Developer Senior experto en Next.js App Router, TypeScript y Tailwind CSS. Estamos creando la Landing Page para 'Nodatix', una empresa de desarrollo B2B. El diseño es Dark Mode moderno estilo Linear.

Tarea: Configura el archivo globals.css.

Requisitos de color: Background (#121212), Surface (#1E1E24), Text primary (#F8F9FA), Text secondary (#A0A0A0), Primary blue (#007BFF), Violet (#8A2BE2), Cyan (#00F5FF).

Crea clases de utilidad en globals.css para dos gradientes: 'bg-tech-gradient' (135deg, blue a violet) y 'bg-glow-line' (90deg, cyan a blue). Entrega solo los archivos de configuración actualizados y un código limpio."

### Prompt 2: Layout y Navbar

"Contexto: Proyecto Nodatix en Next.js.

Tarea: Crea el componente Navbar.tsx y aplícalo en layout.tsx.

Reglas: Debe ser sticky, tener un efecto glassmorphism oscuro muy sutil, y contener el logo de texto 'Nodatix' a la izquierda. En el centro enlaces: Servicios, Proceso, Tecnologías. A la derecha un botón primario sólido con la clase 'bg-tech-gradient' que diga 'Agendar llamada'. Asegúrate de que sea 100% responsive usando el menú hamburguesa genérico para móvil."

### Prompt 3: Componente Hero

"Contexto: Proyecto Nodatix.

Tarea: Crea el componente HeroSection.tsx para la landing page.

Contenido:

- H1: 'Construimos software a medida que simplifica y escala tu negocio.'

- H2 (subtitle): 'Convertimos tus procesos manuales en sistemas digitales centralizados, rápidos y listos para crecer.'

- CTAs: Botón principal 'Agendar una llamada' y secundario 'Cotizar mi proyecto' (outline).

> Estilo visual: Centrado, márgenes amplios, tipografía gruesa para el H1 (texto en \#F8F9FA). Debajo de los botones, incluye un div vacío estilizado que simule un mockup abstracto de una interfaz SaaS (usa bordes sutiles, border-radius y un degradado interno oscuro)."

### Prompt 4: Sección Servicios Prioritarios

"Contexto: Proyecto Nodatix.

Tarea: Crea el componente ServicesSection.tsx basado en un CSS Grid.

Contenido (3 servicios):

1.  Sistemas a Medida: Plataformas web y plataformas internas escalables.

2.  CRM Personalizados: Centraliza tus clientes, ventas y seguimientos.

3.  Automatización B2B: Flujos digitales que reemplazan procesos manuales.

> Visual: Usa cards con background '#1E1E24', bordes redondeados, y un leve hover state que ilumine el borde superior con el color Cyan (#00F5FF). Mantén el diseño minimalista."

### 9. Reglas de Oro para trabajar con Claude

- **Paso a paso:** Pídele un componente a la vez. Si le pides toda la página, el código será difícil de mantener y propenso a errores en TypeScript.

- **Verificación:** Después de integrar cada componente (ej. el Navbar), corre npm run dev y verifica que nada se rompió antes de pedir el Hero.

- **Cero Alucinaciones de CSS:** Exige a Claude que use estricta y únicamente las clases de Tailwind nativas y las variables definidas en el prompt de Setup, para evitar una ensalada de estilos.

Con esta estructura, tienen el plano exacto para levantar la presencia digital de Nodatix con un nivel técnico de Silicon Valley. Para el diseño del Hero, ¿tienen pensado usar algún screenshot estilizado del sistema SaaS de gimnasios que mencionaron, o prefieren que creemos un componente de UI puramente abstracto y geométrico con CSS para arrancar?

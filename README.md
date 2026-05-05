# 🚀 Nodatix – B2B Landing Page (feat/ui‑ux‑revamp)

Welcome to the redesign branch of the Nodatix landing page. This project showcases a **dark‑tech aesthetic** aligned with premium SaaS brands while maintaining clarity for B2B decision‑makers. The current iteration integrates sections such as **Hero**, **Services**, **Process**, **TechStack**, **Trust**, and **Contact CTA**, with responsive layouts and server-side rendering (SSR) via Next.js.

## 📌 Project Status

- **Phase:** Advanced UI/UX revamp focusing on a “Dark Tech” look-and-feel.
- **Implemented Sections:** Navigation, Hero, Problems, Services, Process (5 steps), Tech Stack, Trust/Case Studies, Contact CTA, and Footer.
- **Current Branch:** `feat/ui-ux-revamp` – all development should continue here until merge.

## 🧰 Technology Stack

| Layer           | Details & Notes                                                                                                                                               |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Framework**   | [Next.js](https://nextjs.org/) 16.x with the App Router and full SSR support:contentReference[oaicite:0]{index=0}.                                            |
| **Language**    | TypeScript in **strict** mode (TS 5.x):contentReference[oaicite:1]{index=1}.                                                                                  |
| **Styling**     | Tailwind CSS 4.x (JIT) with custom design tokens defined in `app/globals.css`; no separate Tailwind config file is used:contentReference[oaicite:2]{index=2}. |
| **Icons**       | Font Awesome SVG icons via `@fortawesome/*` packages:contentReference[oaicite:3]{index=3}.                                                                    |
| **State/Logic** | Minimal state; animations handled via CSS keyframes; no client‑side state libraries.                                                                          |
| **Scripts**     | `npm run dev` (development server), `npm run build` (production build), `npm run lint` (ESLint):contentReference[oaicite:4]{index=4}.                         |

## 🎨 Visual Style Guide

**Suggested separate file:** Given the level of detail, create a `STYLEGUIDE.md` to house the full palette, typography scales, spacing tokens, and component guidelines. Below is an overview; see `app/globals.css` for the complete definitions.

### Color Palette

| Role                  | Variable / Class                           | Value (Hex)                                                                                                |
| --------------------- | ------------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| **Background (Base)** | `--color-background`                       | `#000000`:contentReference[oaicite:5]{index=5}                                                             |
| **Surface / Cards**   | `--color-surface`                          | `#1E1E24`:contentReference[oaicite:6]{index=6}                                                             |
| **Raised Surface**    | `--color-surface-raised`                   | `#26262E`:contentReference[oaicite:7]{index=7}                                                             |
| **Overlay Surface**   | `--color-surface-overlay`                  | `#2E2E38`:contentReference[oaicite:8]{index=8}                                                             |
| **Primary Text**      | `--color-text-primary`                     | `#F8F9FA`:contentReference[oaicite:9]{index=9}                                                             |
| **Secondary Text**    | `--color-text-secondary`                   | `#A0A0A0`:contentReference[oaicite:10]{index=10}                                                           |
| **Disabled Text**     | `--color-text-disabled`                    | `#4A4A55`:contentReference[oaicite:11]{index=11}                                                           |
| **Brand Blue**        | `--color-primary-blue`                     | `#007BFF`:contentReference[oaicite:12]{index=12}                                                           |
| **Brand Violet**      | `--color-violet`                           | `#8A2BE2`:contentReference[oaicite:13]{index=13}                                                           |
| **Brand Cyan**        | `--color-cyan`                             | `#00F5FF`:contentReference[oaicite:14]{index=14}                                                           |
| **Glass Surfaces**    | `--color-glass-surface` / subtle / borders | `rgba(255,255,255,0.05)` etc. – unify opacities using these tokens:contentReference[oaicite:15]{index=15}. |
| **Gradients**         | `--gradient-tech` (Blue→Violet)            | `linear-gradient(135deg,#007BFF,#8A2BE2)`:contentReference[oaicite:16]{index=16}                           |
|                       | `--gradient-glow-line` (Cyan→Blue)         | `linear-gradient(90deg,#00F5FF,#007BFF)`:contentReference[oaicite:17]{index=17}                            |
| **Shadows**           | `--shadow-glow-blue/violet/cyan`           | Soft glow shadows tinted by brand colors:contentReference[oaicite:18]{index=18}.                           |

#### Typography

- **Display font:** _Clash Display_ (imported via Next.js fonts) for headings and numbers; defined as `--font-clash` in globals:contentReference[oaicite:19]{index=19}.
- **Body font:** _Geist Sans_ (alias `--font-sans`) for paragraphs and UI text:contentReference[oaicite:20]{index=20}.
- **Weights:** Headings default to `font-weight: 700`; body uses normal or light weights.
- **Line height:** 1.6 for paragraphs for readability:contentReference[oaicite:21]{index=21}.

#### Glassmorphism & Opacity

- We standardized glass surfaces to tokens (e.g., `--color-glass-surface`, `--color-glass-border`):contentReference[oaicite:22]{index=22}. **Avoid arbitrary opacities** like `white/5`; use these variables instead.

### Layout & Animations

- **Containers:** `.section-container` centers content up to 80 rem wide:contentReference[oaicite:23]{index=23}; use `.section-padding` for vertical spacing:contentReference[oaicite:24]{index=24}.
- **Animations:** Predefined keyframes (`fadeIn`, `fadeUp`, `glowPulse`, etc.) are available:contentReference[oaicite:25]{index=25}; respect the `prefers-reduced-motion` media query.

## 📂 Folder Structure

| Path                           | Purpose                                                                                                                                                                                                        |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`app/`**                     | Next.js pages and layout. The root `layout.tsx` wraps common providers; `page.tsx` composes the landing sections.                                                                                              |
| **`app/components/`**          | Reusable UI elements like `Navbar.tsx`, `Footer.tsx`, and icons.                                                                                                                                               |
| **`app/components/sections/`** | High‑level sections: `HeroSection.tsx`, `ProblemSection.tsx`, `ServicesSection.tsx`, `ProcessSection.tsx`, `TechStackSection.tsx`, `TrustSection.tsx`, `ContactCTASection.tsx`. Add new landing sections here. |
| **`app/globals.css`**          | Global styles, tokens, utility classes, and components definitions:contentReference[oaicite:26]{index=26}. **Do not edit tokens without approval.**                                                            |
| **`public/`**                  | Static assets such as images and icons.                                                                                                                                                                        |

## 🔁 Development Workflow

- **Branching:** Work on `feat/ui-ux-revamp` unless directed otherwise. Use topic branches off this branch for features or fixes, then open pull requests back into `feat/ui-ux-revamp`.
- **Claude Code:** Use the Claude Code terminal for refactorings. Each task should be atomic—clearly state files to modify, avoid business‑logic changes, and run `npm run lint` before finishing.
- **Commit messages:** Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification. Examples:
  - `feat(ui): add FAQ section`
  - `refactor(ui): standardize glass tokens`
  - `docs: update README with project status`
- **Pull Requests:** Provide context, link issues/tasks, and request reviews from team members (including Lázaro).

## 🛠️ Setup & Scripts

```bash
# Install dependencies
npm install

# Run development server (http://localhost:3000)
npm run dev

# Lint the codebase
npm run lint

# Build for production
npm run build
```

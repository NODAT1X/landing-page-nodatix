import type { ReactNode } from "react";

/* ─────────────────────────────────────────────────────────────────
   ServicesSection — Nodatix
   CSS Grid · Minimal dark cards · Cyan border-top hover
───────────────────────────────────────────────────────────────── */

interface ServiceAccent {
  color: string /* solid hex — icon text, top-line, hover border */;
  muted: string /* translucent bg for icon container */;
  border: string /* translucent border for icon container */;
  glow: string /* translucent top-bloom gradient color */;
}

interface Service {
  icon: ReactNode;
  title: string;
  description: string;
  tags: string[];
  accent: ServiceAccent;
}

const SERVICES: Service[] = [
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <path d="M17.5 14v6M14.5 17h6" />
      </svg>
    ),
    title: "Sistemas a Medida",
    description:
      "Plataformas web e internas diseñadas para escalar con tu operación. Arquitectura sólida, UX enfocada en productividad.",
    tags: ["Web Apps", "Portales internos", "Escalabilidad"],
    accent: {
      color: "#007BFF",
      muted: "rgba(0,123,255,0.08)",
      border: "rgba(0,123,255,0.18)",
      glow: "rgba(0,123,255,0.05)",
    },
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "CRM Personalizados",
    description:
      "Centraliza clientes, ventas y seguimientos en un solo sistema adaptado a tu ciclo comercial. Sin funciones que no necesitas.",
    tags: ["Pipeline", "Seguimiento", "Reportes"],
    accent: {
      color: "#8A2BE2",
      muted: "rgba(138,43,226,0.08)",
      border: "rgba(138,43,226,0.18)",
      glow: "rgba(138,43,226,0.05)",
    },
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "Automatización B2B",
    description:
      "Flujos digitales que reemplazan tareas manuales repetitivas. Menos fricción operativa, más tiempo para decisiones estratégicas.",
    tags: ["Integraciones", "Workflows", "Eficiencia"],
    accent: {
      color: "#00F5FF",
      muted: "rgba(0,245,255,0.07)",
      border: "rgba(0,245,255,0.14)",
      glow: "rgba(0,245,255,0.05)",
    },
  },
];

/* ── Single card ──────────────────────────────────────────────── */
function ServiceCard({ icon, title, description, tags, accent }: Service) {
  return (
    <article
      className="service-card group relative flex flex-col gap-4 rounded-xl p-5 md:gap-5 md:rounded-2xl md:p-7 bg-white/5 backdrop-blur-sm border border-white/10 border-t-white/20"
      style={{ "--card-accent": accent.color } as React.CSSProperties}
    >
      {/* per-card accent top-border reveal on hover */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: accent.color }}
      />

      {/* per-card top-glow bloom */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-24 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `linear-gradient(180deg, ${accent.glow} 0%, transparent 100%)`,
        }}
      />

      {/* icon — uses per-card accent color */}
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300"
        style={{
          color: accent.color,
          background: accent.muted,
          border: `1px solid ${accent.border}`,
        }}
      >
        {icon}
      </div>

      {/* copy */}
      <div className="flex flex-col gap-2.5">
        <h3 className="font-clash text-base font-semibold leading-tight tracking-tight text-[var(--color-text-primary)]">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
          {description}
        </p>
      </div>

      {/* tags */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 rounded-md text-[11px] font-medium tracking-wide text-[var(--color-text-disabled)]"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

/* ── Section ──────────────────────────────────────────────────── */
export default function ServicesSection() {
  return (
    <section
      id="servicios"
      aria-labelledby="services-heading"
      className="section-padding"
    >
      <div className="section-container flex flex-col gap-10 md:gap-14">
        {/* header */}
        <div className="flex flex-col items-center gap-4 max-w-2xl mx-auto text-center">
          <div className="badge badge-cyan w-fit">
            <span className="glow-dot w-1.5 h-1.5" aria-hidden="true" />
            Qué construimos
          </div>

          <h2
            id="services-heading"
            className="font-clash text-[clamp(1.75rem,3.5vw,2.6rem)] font-bold leading-tight tracking-tight text-[var(--color-text-primary)]"
          >
            Soluciones enfocadas en{" "}
            <span className="text-tech-gradient">tu operación</span>
          </h2>

          <p className="text-sm leading-relaxed text-[var(--color-text-secondary)] max-w-[52ch]">
            No vendemos software genérico. Cada entrega está diseñada para
            resolver un problema real dentro de tu negocio.
          </p>
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        {/* bottom divider */}
        <div className="divider-glow-line" aria-hidden="true" />
      </div>
    </section>
  );
}

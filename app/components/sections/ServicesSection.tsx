import type { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDisplay, faUsers, faBolt } from "@fortawesome/free-solid-svg-icons";
import { FadeUp } from "../ui/FadeUp";

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
    icon: <FontAwesomeIcon icon={faDisplay} aria-hidden={true} className="w-[22px] h-[22px]" />,
    title: "Sistemas a Medida",
    description:
      "Escala tu operación con plataformas web e internas. Arquitectura sólida, UX orientada a productividad.",
    tags: ["Web Apps", "Portales internos", "Escalabilidad"],
    accent: {
      color: "#007BFF",
      muted: "rgba(0,123,255,0.08)",
      border: "rgba(0,123,255,0.18)",
      glow: "rgba(0,123,255,0.05)",
    },
  },
  {
    icon: <FontAwesomeIcon icon={faUsers} aria-hidden={true} className="w-[22px] h-[22px]" />,
    title: "CRM Personalizados",
    description:
      "Centraliza clientes, ventas y seguimientos en un sistema adaptado a tu ciclo comercial.",
    tags: ["Pipeline", "Seguimiento", "Reportes"],
    accent: {
      color: "#8A2BE2",
      muted: "rgba(138,43,226,0.08)",
      border: "rgba(138,43,226,0.18)",
      glow: "rgba(138,43,226,0.05)",
    },
  },
  {
    icon: <FontAwesomeIcon icon={faBolt} aria-hidden={true} className="w-[22px] h-[22px]" />,
    title: "Automatización B2B",
    description:
      "Flujos digitales que eliminan tareas manuales. Menos fricción operativa, más tiempo estratégico.",
    tags: ["Integraciones", "Workflows", "Eficiencia"],
    accent: {
      color: "#00F5FF",
      muted: "rgba(0,245,255,0.07)",
      border: "rgba(0,245,255,0.14)",
      glow: "rgba(0,245,255,0.05)",
    },
  },
];

interface ServiceCardProps extends Service {
  featured?: boolean;
}

/* ── Single card ──────────────────────────────────────────────── */
function ServiceCard({ icon, title, description, tags, accent, featured }: ServiceCardProps) {
  return (
    <article
      className={[
        "group relative flex flex-col rounded-xl",
        "bg-white/[0.02] backdrop-blur-sm border border-white/[0.05]",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-1 hover:border-[#00F5FF]/30",
        "hover:shadow-[0_8px_32px_-8px_rgba(0,245,255,0.10)]",
        featured
          ? "gap-6 p-6 md:h-full md:gap-7 md:rounded-2xl md:p-8 lg:p-10"
          : "gap-5 h-full p-6 md:gap-6 md:rounded-2xl md:p-8",
      ].join(" ")}
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
        className={`rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${featured ? "w-10 h-10 md:w-12 md:h-12" : "w-10 h-10"}`}
        style={{
          color: accent.color,
          background: accent.muted,
          border: `1px solid ${accent.border}`,
        }}
      >
        {icon}
      </div>

      {/* copy */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <h3 className={`font-clash font-normal leading-tight tracking-tight text-[var(--color-text-primary)] ${featured ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"}`}>
            {title}
          </h3>
          <svg
            aria-hidden="true"
            className="shrink-0 opacity-0 -translate-x-1.5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ color: accent.color }}
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </div>
        <p className={`leading-relaxed text-white/60 ${featured ? "text-base md:text-lg" : "text-sm md:text-base"}`}>
          {description}
        </p>
      </div>

      {/* tags */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wide text-[var(--color-text-disabled)]"
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
      className="section-padding relative overflow-hidden"
    >
      {/* ambient violet glow — centered behind card grid */}
      <div aria-hidden="true" className="absolute inset-0 z-0 pointer-events-none flex justify-center items-center">
        <div className="w-[80%] h-[300px] bg-[#8A2BE2]/10 blur-[120px] rounded-[100%]" />
      </div>

      <div className="section-container relative z-10 flex flex-col gap-10 md:gap-14">
        {/* header */}
        <FadeUp className="flex flex-col items-center gap-4 max-w-2xl mx-auto text-center">
          <div className="badge badge-cyan w-fit">
            <span className="glow-dot w-1.5 h-1.5" aria-hidden="true" />
            Qué construimos
          </div>

          <h2
            id="services-heading"
            className="font-clash text-[clamp(1.75rem,3.5vw,2.6rem)] font-normal leading-tight tracking-tight text-[var(--color-text-primary)]"
          >
            Soluciones enfocadas en{" "}
            <span className="text-tech-gradient">tu operación</span>
          </h2>

          <p className="text-sm leading-relaxed text-[var(--color-text-secondary)] max-w-[52ch]">
            No vendemos software genérico. Cada entrega está diseñada para
            resolver un problema real dentro de tu negocio.
          </p>
        </FadeUp>

        {/* Bento grid — featured card carries col/row span on the FadeUp wrapper */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <FadeUp
              key={service.title}
              delay={i * 120}
              className={i === 0 ? "md:col-span-2 md:row-span-2" : ""}
            >
              <ServiceCard {...service} featured={i === 0} />
            </FadeUp>
          ))}
        </div>

        {/* bottom divider */}
        <div className="divider-glow-line" aria-hidden="true" />
      </div>
    </section>
  );
}

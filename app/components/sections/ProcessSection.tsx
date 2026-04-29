import { Search, FileText, Code2, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ─────────────────────────────────────────────────────────────────
   ProcessSection — Nodatix
   Timeline vertical (mobile) · 4-col grid (desktop)
   bg: #121212 · titles: #F8F9FA · body: #A0A0A0
───────────────────────────────────────────────────────────────── */

interface Step {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  detail: string[];
}

const STEPS: Step[] = [
  {
    number: "01",
    icon: Search,
    title: "Diagnóstico",
    description:
      "Analizamos tu operación actual, cuellos de botella y objetivos reales antes de escribir una sola línea de código.",
    detail: [
      "Entrevistas con stakeholders",
      "Mapeo de procesos",
      "Definición de KPIs",
    ],
  },
  {
    number: "02",
    icon: FileText,
    title: "Propuesta",
    description:
      "Entregamos una propuesta técnica y funcional detallada: alcance, tiempos, tecnologías y costo fijo sin sorpresas.",
    detail: ["Arquitectura técnica", "Roadmap de entregas", "Precio cerrado"],
  },
  {
    number: "03",
    icon: Code2,
    title: "Desarrollo",
    description:
      "Sprints cortos con entregables reales. Tienes visibilidad total del avance y acceso al staging en todo momento.",
    detail: ["Sprints de 2 semanas", "Demo por sprint", "Staging continuo"],
  },
  {
    number: "04",
    icon: Rocket,
    title: "Entrega",
    description:
      "Desplegamos en producción, capacitamos a tu equipo y permanecemos disponibles durante el periodo de estabilización.",
    detail: [
      "Deploy auditado",
      "Capacitación incluida",
      "Soporte post-lanzamiento",
    ],
  },
];

/* ── Step card ────────────────────────────────────────────────── */
function StepCard({ step, isLast }: { step: Step; isLast: boolean }) {
  const Icon = step.icon;

  return (
    <div className="relative flex gap-4 md:gap-5 lg:flex-col lg:gap-6">
      {/* ── Timeline connector (mobile/tablet only) ────────────── */}
      {!isLast && (
        <div
          aria-hidden="true"
          className="lg:hidden absolute left-[19px] top-10 bottom-0 w-px"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,123,255,0.35) 0%, rgba(0,123,255,0.06) 100%)",
          }}
        />
      )}

      {/* ── Icon node ─────────────────────────────────────────── */}
      <div className="relative shrink-0 flex flex-col items-center lg:flex-row lg:items-start">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-[var(--color-primary-blue)] z-10 shrink-0"
          style={{
            background: "rgba(0,123,255,0.10)",
            border: "1px solid rgba(0,123,255,0.20)",
          }}
        >
          <Icon size={17} strokeWidth={1.7} aria-hidden="true" />
        </div>

        {/* desktop horizontal connector */}
        {!isLast && (
          <div
            aria-hidden="true"
            className="hidden lg:block absolute left-10 top-1/2 -translate-y-1/2 h-px"
            style={{
              width: "calc(100% + 1rem + 40px)", // spans gap between cards
              background:
                "linear-gradient(90deg, rgba(0,123,255,0.35) 0%, rgba(0,123,255,0.06) 100%)",
            }}
          />
        )}
      </div>

      {/* ── Text content ──────────────────────────────────────── */}
      <div className="min-w-0 flex flex-col gap-3 pb-10 lg:pb-0">
        {/* step number */}
        <span
          className="text-[11px] font-mono font-medium tracking-[0.12em] uppercase"
          style={{ color: "var(--color-primary-blue)" }}
        >
          Paso {step.number}
        </span>

        {/* title */}
        <h3
          className="text-[1.05rem] font-semibold leading-snug tracking-tight"
          style={{ color: "#F8F9FA" }}
        >
          {step.title}
        </h3>

        {/* description */}
        <p className="text-sm leading-relaxed" style={{ color: "#A0A0A0" }}>
          {step.description}
        </p>

        {/* detail list */}
        <ul
          className="flex flex-col gap-1.5 mt-1"
          aria-label={`Detalles de ${step.title}`}
        >
          {step.detail.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 text-[12px]"
              style={{ color: "#A0A0A0" }}
            >
              <span
                aria-hidden="true"
                className="w-1 h-1 rounded-full shrink-0"
                style={{ background: "var(--color-cyan)" }}
              />
              <span className="min-w-0 break-words">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ── Section ──────────────────────────────────────────────────── */
export default function ProcessSection() {
  return (
    <section
      id="proceso"
      aria-labelledby="process-heading"
      className="section-padding"
      style={{ background: "#121212" }}
    >
      <div className="section-container flex flex-col gap-10 md:gap-14">
        {/* ── Header ────────────────────────────────────────────── */}
        <div className="flex flex-col gap-4 max-w-[42ch]">
          <div className="badge-blue w-fit">
            <span className="glow-dot w-1.5 h-1.5" aria-hidden="true" />
            Nuestra metodología
          </div>

          <h2
            id="process-heading"
            className="text-[clamp(1.75rem,3.5vw,2.6rem)] font-bold leading-tight tracking-tight"
            style={{ color: "#F8F9FA" }}
          >
            Un proceso{" "}
            <span className="text-tech-gradient">claro y predecible</span>
          </h2>

          <p
            className="text-sm leading-relaxed max-w-[52ch]"
            style={{ color: "#A0A0A0" }}
          >
            Cada proyecto sigue cuatro fases bien definidas. Sin metodologías
            opacas: sabes exactamente en qué etapa estamos y qué viene después.
          </p>
        </div>

        {/* ── Steps ─────────────────────────────────────────────── */}
        {/* Mobile/tablet: vertical timeline | Desktop: 4-column grid */}
        <div className="grid grid-cols-1 gap-0 lg:grid-cols-4 lg:gap-8">
          {STEPS.map((step, i) => (
            <StepCard
              key={step.number}
              step={step}
              isLast={i === STEPS.length - 1}
            />
          ))}
        </div>

        {/* ── Bottom CTA strip ──────────────────────────────────── */}
        <div
          className="flex flex-col items-stretch justify-between gap-4 rounded-2xl px-5 py-5 sm:flex-row sm:items-center md:px-7"
          style={{
            background: "rgba(0,123,255,0.05)",
            border: "1px solid rgba(0,123,255,0.12)",
          }}
        >
          <div className="min-w-0 flex flex-col gap-1">
            <p className="text-sm font-medium" style={{ color: "#F8F9FA" }}>
              ¿Listo para empezar tu diagnóstico?
            </p>
            <p className="text-xs" style={{ color: "#A0A0A0" }}>
              Primera sesión sin costo · 45 minutos · Sin compromiso
            </p>
          </div>
          <a
            href="#contacto"
            className="btn-primary w-full shrink-0 text-sm px-5 py-2.5 sm:w-auto"
          >
            Agendar diagnóstico
          </a>
        </div>

        <div className="divider-glow-line" aria-hidden="true" />
      </div>
    </section>
  );
}

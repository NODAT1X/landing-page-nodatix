import type { ReactNode } from "react";

/* ─────────────────────────────────────────────────────────────────
   ProblemSection — Nodatix
   Empatía B2B: expone el dolor antes de presentar la solución.
   Layout: 12-col grid asimétrico (7 pain + 5 solution) en desktop.
───────────────────────────────────────────────────────────────── */

interface PainPoint {
  icon: ReactNode;
  title: string;
  description: string;
}

const PAIN_POINTS: PainPoint[] = [
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Coordinación por WhatsApp",
    description:
      "Decisiones críticas sepultadas en chats. Sin trazabilidad, sin historial ni control sobre el seguimiento.",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M3 15h18M9 3v18" />
      </svg>
    ),
    title: "Datos dispersos en hojas de cálculo",
    description:
      "Archivos duplicados, versiones desactualizadas y reportes que consumen horas sin generar claridad real.",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Procesos que no escalan",
    description:
      "Cada persona trabaja a su manera. Sin automatización ni estándares, crecer solo genera más caos operativo.",
  },
];

export default function ProblemSection() {
  return (
    <section
      id="problema"
      aria-labelledby="problem-heading"
      className="section-padding"
      style={{ background: "#121212" }}
    >
      <div className="section-container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* ── Left col (7/12): eyebrow + H2 + pain points ───── */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* badge */}
            <div className="badge badge-blue w-fit">
              <span className="glow-dot w-1.5 h-1.5" aria-hidden="true" />
              El Problema
            </div>

            {/* H2 — hook */}
            <h2
              id="problem-heading"
              className="font-clash text-[clamp(1.9rem,3.8vw,3rem)] font-bold leading-tight tracking-tight text-[var(--color-text-primary)]"
            >
              ¿Demasiado tiempo en{" "}
              <span className="text-tech-gradient">
                hojas de cálculo y WhatsApp?
              </span>
            </h2>

            {/* Pain point list */}
            <div className="flex flex-col gap-3" role="list">
              {PAIN_POINTS.map((point) => (
                <div
                  key={point.title}
                  role="listitem"
                  className="flex items-start gap-4 rounded-xl p-4 transition-all duration-500 ease-out bg-white/5 backdrop-blur-md border border-white/[0.08] border-t-white/20 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_-8px_rgba(0,123,255,0.15)]"
                >
                  {/* icon node */}
                  <div
                    className="mt-0.5 w-9 h-9 rounded-lg flex items-center justify-center shrink-0 text-[var(--color-primary-blue)]"
                    style={{
                      background: "rgba(0,123,255,0.08)",
                      border: "1px solid rgba(0,123,255,0.16)",
                    }}
                  >
                    {point.icon}
                  </div>

                  {/* text */}
                  <div className="min-w-0 flex flex-col gap-1">
                    <p className="text-sm font-semibold tracking-tight text-[var(--color-text-primary)]">
                      {point.title}
                    </p>
                    <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right col (5/12): solution + differentiator ───── */}
          {/*
            lg:justify-center aligns the card group to the vertical
            midpoint of the left column, creating a controlled
            asymmetry without an arbitrary top offset.
          */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:justify-center">
            {/* solution statement */}
            <p className="text-[clamp(1rem,1.4vw,1.15rem)] leading-relaxed font-medium text-[var(--color-text-primary)]">
              Construimos tecnología que centraliza tu operación para que puedas
              enfocarte en{" "}
              <span className="text-tech-gradient font-semibold">
                tomar decisiones.
              </span>
            </p>

            {/* differentiator callout */}
            <blockquote
              className="relative rounded-xl p-5 bg-white/5 backdrop-blur-md border border-white/[0.08] border-t-white/20"
            >
              {/* cyan left-bar accent */}
              <div
                aria-hidden="true"
                className="absolute left-0 top-4 bottom-4 w-[3px] rounded-r-full"
                style={{ background: "var(--gradient-glow-line)" }}
              />

              <p className="pl-4 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                <em>
                  No entregamos solo{" "}
                  <strong className="not-italic font-semibold text-[var(--color-text-primary)]">
                    software bonito
                  </strong>
                  . Entendemos tu operación antes de escribir una sola línea de
                  código, garantizando adopción real.
                </em>
              </p>
            </blockquote>
          </div>
        </div>

        {/* bottom divider */}
        <div className="divider-glow-line mt-14 md:mt-20" aria-hidden="true" />
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";

const benefits = [
  "Centraliza datos y elimina silos",
  "Automatiza tareas de alto volumen",
  "Visibilidad operativa en tiempo real",
];

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

// CTA de contacto del home. Redirige al formulario completo de cotización.
export default function ContactCTASection() {
  return (
    <section
      id="contacto"
      aria-labelledby="contact-cta-heading"
      className="font-clash relative overflow-hidden py-24 md:py-32"
      style={{ background: "var(--background)" }}
    >
      {/* Subtle background only */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(255,255,255,0.02) 0%, transparent 70%)",
        }}
      />

      <div className="section-container">
        <div className="divider-glow-line mb-16 md:mb-20" aria-hidden="true" />

        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="inline-flex items-center rounded-full border border-[var(--color-glass-border)] bg-[var(--color-glass-surface)] px-3 py-1 text-xs font-medium text-(--color-text-secondary)">
            Consulta sin costo
          </span>

          <h2
            id="contact-cta-heading"
            className="font-clash mt-7 text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight tracking-tight text-[var(--foreground)]"
          >
            Convierte tu proceso en{" "}
            <span className="text-tech-gradient">un sistema real</span>
          </h2>

          <p className="mt-6 max-w-[56ch] text-sm leading-relaxed text-(--color-text-secondary) md:text-base">
            Operaciones en Excel, tareas manuales, datos dispersos. Diseñamos el
            sistema que lo centraliza todo.
          </p>

          <ul
            className="mt-8 flex flex-col items-start gap-3 text-left"
            aria-label="Qué resolvemos"
          >
            {benefits.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-sm text-(--color-text-secondary)"
              >
                <span
                  aria-hidden="true"
                  className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                  style={{ background: "rgba(22,163,74,0.12)" }}
                >
                  <svg
                    viewBox="0 0 12 12"
                    className="h-3 w-3"
                    fill="none"
                    stroke="#16A34A"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M2 6.5 4.5 9 10 3" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col items-center gap-3">
            <Link
              href="/cotizar-proyecto"
              className="btn-primary px-8 py-4 text-sm font-semibold tracking-wide"
              style={{
                boxShadow: "0 2px 12px rgba(0,0,0,0.45)",
              }}
            >
              Cotizar mi proyecto
              <ArrowIcon />
            </Link>

            <p className="text-[0.7rem] text-(--color-text-disabled)">
              Sin spam. Respuesta inicial en menos de 24 h.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

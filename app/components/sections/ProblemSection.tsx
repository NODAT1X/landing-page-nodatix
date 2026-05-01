import type { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTable,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FadeUp } from "../ui/FadeUp";

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
      <FontAwesomeIcon
        icon={faWhatsapp}
        aria-hidden={true}
        className="w-[26px] h-[26px]"
      />
    ),
    title: "Coordinación por WhatsApp",
    description:
      "Decisiones sin trazabilidad. El historial se pierde; el seguimiento, también.",
  },
  {
    icon: (
      <FontAwesomeIcon
        icon={faTable}
        aria-hidden={true}
        className="w-[26px] h-[26px]"
      />
    ),
    title: "Datos en hojas de cálculo",
    description:
      "Versiones duplicadas, reportes lentos. Nadie trabaja con la misma verdad.",
  },
  {
    icon: (
      <FontAwesomeIcon
        icon={faClock}
        aria-hidden={true}
        className="w-[26px] h-[26px]"
      />
    ),
    title: "Procesos que no escalan",
    description:
      "Sin estándares ni automatización, escalar solo amplifica el caos.",
  },
];

export default function ProblemSection() {
  return (
    <section
      id="problema"
      aria-labelledby="problem-heading"
      className="section-padding bg-black"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-12 lg:gap-16">
          {/* ── Left col (7/12): eyebrow + H2 + pain points ───── */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* badge + heading grouped — animate as one unit */}
            <FadeUp className="flex flex-col gap-4">
              <div className="badge badge-blue w-fit">
                <span className="glow-dot w-1.5 h-1.5" aria-hidden="true" />
                El Problema
              </div>
              <h2
                id="problem-heading"
                className="font-clash text-[clamp(1.9rem,3.8vw,3rem)] font-normal leading-tight tracking-tight text-[var(--color-text-primary)]"
              >
                Tu operación pierde tiempo en{" "}
                <span className="text-tech-gradient">
                  herramientas que no conectan.
                </span>
              </h2>
            </FadeUp>

            {/* Pain point list */}
            <div className="flex flex-col gap-5 md:gap-8 lg:gap-10" role="list">
              {PAIN_POINTS.map((point, i) => (
                <FadeUp key={point.title} role="listitem" delay={i * 100}>
                  <div className="flex items-start gap-6 rounded-xl p-5 md:p-6 transition-all duration-500 ease-out bg-white/5 backdrop-blur-md border border-white/[0.08] border-t-white/20 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_-8px_rgba(0,123,255,0.15)]">
                    {/* icon node */}
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 text-[var(--color-primary-blue)]"
                      style={{
                        background: "rgba(0,123,255,0.08)",
                        border: "1px solid rgba(0,123,255,0.16)",
                      }}
                    >
                      {point.icon}
                    </div>

                    {/* text */}
                    <div className="min-w-0 flex flex-col gap-1">
                      <p className="text-xl md:text-2xl font-normal tracking-tight text-[var(--color-text-primary)]">
                        {point.title}
                      </p>
                      <p className="text-base md:text-lg leading-relaxed text-white/60">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

          {/* ── Right col (5/12): solution + differentiator ───── */}
          <div className="lg:col-span-5 flex flex-col items-start md:items-end gap-5 md:gap-8 lg:gap-10 lg:justify-center">
            <FadeUp delay={100}>
              <p className="text-left md:text-right text-xl md:text-2xl lg:text-3xl leading-normal font-semibold text-[var(--color-text-primary)]">
                Centraliza tu operación. Automatiza lo repetitivo.{" "}
                <span className="text-tech-gradient font-semibold">
                  Decide con datos reales.
                </span>
              </p>
            </FadeUp>

            <FadeUp delay={220}>
              <blockquote className="relative rounded-xl p-6 md:p-8 bg-white/5 backdrop-blur-md border border-white/[0.08] border-t-white/20">
                {/* cyan right-bar accent */}
                <div
                  aria-hidden="true"
                  className="absolute right-0 top-5 bottom-5 w-[4px] rounded-l-full"
                  style={{ background: "var(--gradient-glow-line)" }}
                />
                <p className="pr-0 md:pr-5 text-left md:text-right text-base md:text-lg leading-relaxed text-white/60">
                  <em>
                    Analizamos tu operación antes de escribir código{" "}
                    <strong className="not-italic font-semibold text-[var(--color-text-primary)]">
                      entregamos adopción real,
                    </strong>{" "}
                    no solo pantallas.
                  </em>
                </p>
              </blockquote>
            </FadeUp>
          </div>
        </div>

        {/* bottom divider */}
        <div className="divider-glow-line mt-14 md:mt-20" aria-hidden="true" />
      </div>
    </section>
  );
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faFileContract, faCode, faRocket } from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FadeUp } from "../ui/FadeUp";

/* ─────────────────────────────────────────────────────────────────
   ProcessSection — Nodatix
   Timeline vertical (mobile) · 4-col grid (desktop)
   bg: #121212 · titles: #F8F9FA · body: #A0A0A0
───────────────────────────────────────────────────────────────── */

interface Step {
  number: string;
  icon: IconDefinition;
  title: string;
  description: string;
  detail: string[];
}

const STEPS: Step[] = [
  {
    number: "01",
    icon: faMagnifyingGlass,
    title: "Diagnóstico",
    description:
      "Mapeamos tu operación e identificamos los cuellos de botella clave.",
    detail: [
      "Entrevistas con stakeholders",
      "Mapeo de procesos",
      "Definición de KPIs",
    ],
  },
  {
    number: "02",
    icon: faFileContract,
    title: "Propuesta",
    description:
      "Alcance, arquitectura y precio cerrado. Sin ambigüedades.",
    detail: ["Arquitectura técnica", "Roadmap de entregas", "Precio cerrado"],
  },
  {
    number: "03",
    icon: faCode,
    title: "Desarrollo",
    description:
      "Sprints de 2 semanas con demos reales y staging continuo.",
    detail: ["Sprints de 2 semanas", "Demo por sprint", "Staging continuo"],
  },
  {
    number: "04",
    icon: faRocket,
    title: "Despliegue",
    description:
      "Deploy auditado, capacitación incluida y soporte post-lanzamiento.",
    detail: [
      "Deploy auditado",
      "Capacitación incluida",
      "Soporte post-lanzamiento",
    ],
  },
];

/* ── Step card ────────────────────────────────────────────────── */
function StepCard({ step, isLast }: { step: Step; isLast: boolean }) {

  return (
    <div className="relative flex h-full gap-5 md:gap-6 p-6 md:p-8 lg:flex-col lg:gap-7 lg:p-10 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_12px_40px_-8px_rgba(0,123,255,0.15)] bg-white/[0.02] border border-white/[0.05] rounded-xl backdrop-blur-sm">
      {/* ── Timeline connector (mobile/tablet only) ────────────── */}
      {!isLast && (
        <div
          aria-hidden="true"
          className="lg:hidden absolute left-[39px] md:left-[43px] top-10 bottom-0 w-px"
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
          <FontAwesomeIcon icon={step.icon} aria-hidden={true} className="w-[17px] h-[17px]" />
        </div>
      </div>

      {/* ── Text content ──────────────────────────────────────── */}
      <div className="min-w-0 flex flex-col gap-4 md:gap-5">
        {/* step number */}
        <div className="flex flex-col gap-0.5">
          <span
            className="text-[10px] font-mono tracking-[0.14em] uppercase"
            style={{ color: "var(--color-text-disabled)" }}
          >
            Paso
          </span>
          <span
            className="text-7xl font-light leading-none tracking-tight text-white/[0.08]"
            style={{ fontFamily: "var(--font-display, var(--font-sans))" }}
          >
            {step.number}
          </span>
        </div>

        {/* title */}
        <h3
          className="font-clash text-xl md:text-2xl font-normal leading-tight tracking-tight"
          style={{ color: "#F8F9FA" }}
        >
          {step.title}
        </h3>

        {/* description */}
        <p className="text-base md:text-lg leading-relaxed text-white/60">
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
              className="flex items-center gap-2 text-xs md:text-sm"
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
      className="section-padding bg-black relative overflow-hidden"
    >
      <div className="section-container flex flex-col gap-16 md:gap-20">
        {/* ── Header ────────────────────────────────────────────── */}
        <FadeUp>
          <div className="flex flex-col gap-6 max-w-[52ch]">
            <div className="badge badge-blue w-fit">
              <span className="glow-dot w-1.5 h-1.5" aria-hidden="true" />
              Metodología
            </div>

            <h2
              id="process-heading"
              className="font-clash text-3xl md:text-4xl lg:text-5xl font-normal leading-tight tracking-tight"
              style={{ color: "#F8F9FA" }}
            >
              Cuatro fases.{" "}
              <span className="text-tech-gradient">Sin sorpresas.</span>
            </h2>

            <p className="text-lg md:text-xl leading-relaxed text-white/60">
              Visibilidad total en cada etapa. Sabes qué se entrega, cuándo y a qué costo.
            </p>
          </div>
        </FadeUp>

        {/* ── Steps ─────────────────────────────────────────────── */}
        <div className="relative grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-6 lg:grid-cols-4 lg:gap-10">
          {/* directional violet→cyan glow behind the step timeline */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 -translate-x-1/2 top-0 w-[150px] h-[80%] bg-gradient-to-b from-[#8A2BE2]/10 to-[#00F5FF]/10 blur-[100px] pointer-events-none"
          />

          {/* Desktop connector rail */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-5 left-5 right-5 h-[1.5px] pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, rgba(0,123,255,0.65) 0%, rgba(0,245,255,0.45) 50%, rgba(0,123,255,0.2) 100%)",
              boxShadow: "0 0 8px 0 rgba(0,123,255,0.25)",
            }}
          />
          {STEPS.map((step, i) => (
            <FadeUp key={step.number} delay={i * 120} className="h-full">
              <StepCard step={step} isLast={i === STEPS.length - 1} />
            </FadeUp>
          ))}
        </div>

        {/* ── Bottom CTA strip ──────────────────────────────────── */}
        <FadeUp delay={STEPS.length * 120 + 60}>
          <div
            className="flex flex-col items-stretch justify-between gap-6 rounded-2xl p-6 md:p-10 lg:p-12 sm:flex-row sm:items-center"
            style={{
              background: "rgba(0,123,255,0.05)",
              border: "1px solid rgba(0,123,255,0.12)",
            }}
          >
            <div className="min-w-0 flex flex-col gap-1">
              <p className="font-clash text-xl md:text-3xl font-normal" style={{ color: "#F8F9FA" }}>
                Agenda tu sesión de diagnóstico
              </p>
              <p className="text-base md:text-lg text-white/60">
                Sin costo · 45 minutos · Sin compromiso
              </p>
            </div>
            <a
              href="#contacto"
              className="btn-primary btn-light text-sm px-5 py-2.5 sm:w-auto"
            >
              Agendar diagnóstico
            </a>
          </div>
        </FadeUp>

        <div className="divider-glow-line" aria-hidden="true" />
      </div>
    </section>
  );
}

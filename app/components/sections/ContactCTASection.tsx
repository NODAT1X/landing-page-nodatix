"use client";

import { useState, useEffect } from "react";

type FormState = { name: string; email: string; details: string };

const inputCls = [
  "w-full rounded-lg border border-white/10 bg-[#060810] px-4 py-3 text-sm",
  "text-(--color-text-primary) placeholder-(--color-text-disabled) outline-none",
  "transition-all duration-200",
  "focus:border-white/[0.22] focus:bg-[#060810] focus:shadow-[0_0_0_2px_rgba(255,255,255,0.04)]",
].join(" ");

const labelCls =
  "text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-(--color-text-secondary)";

function FormBody({
  idPrefix,
  form,
  onChange,
  onSubmit,
}: {
  idPrefix: string;
  form: FormState;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}) {
  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label htmlFor={`${idPrefix}-name`} className={labelCls}>
          Nombre
        </label>
        <input
          id={`${idPrefix}-name`}
          name="name"
          type="text"
          autoComplete="name"
          required
          value={form.name}
          onChange={onChange}
          placeholder="Tu nombre completo"
          className={inputCls}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor={`${idPrefix}-email`} className={labelCls}>
          Correo Corporativo
        </label>
        <input
          id={`${idPrefix}-email`}
          name="email"
          type="email"
          autoComplete="email"
          required
          value={form.email}
          onChange={onChange}
          placeholder="tu@empresa.com"
          className={inputCls}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor={`${idPrefix}-details`} className={labelCls}>
          Detalles del Proyecto
        </label>
        <textarea
          id={`${idPrefix}-details`}
          name="details"
          rows={4}
          required
          value={form.details}
          onChange={onChange}
          placeholder="¿Qué procesos quieres digitalizar o automatizar? Describe brevemente tu operación actual."
          className={`${inputCls} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="btn-primary mt-1 w-full py-3.5 text-sm font-semibold tracking-wide"
        style={{
          boxShadow: "0 2px 12px rgba(0,0,0,0.5)",
        }}
      >
        Enviar solicitud
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
      </button>

      <p className="text-center text-[0.7rem] text-(--color-text-disabled)">
        Sin spam. Respuesta en menos de 24 h.
      </p>
    </form>
  );
}

export default function ContactCTASection() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", details: "" });
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: connect backend / form service
  };

  useEffect(() => {
    document.body.style.overflow = isSheetOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isSheetOpen]);

  return (
    <section
      id="contacto"
      aria-labelledby="contact-cta-heading"
      className="relative overflow-hidden py-24 md:py-32"
      style={{ background: "#0C0C10" }}
    >
      {/* ── Subtle vignette only — no color glow ────────────────────── */}
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

        {/* ── DESKTOP: Two-column card ─────────────────────────────── */}
        <div
          className="relative isolate hidden overflow-hidden rounded-2xl border border-white/[0.11] px-6 py-12 md:block md:px-14 md:py-16"
          style={{
            background: "#13151C",
            boxShadow:
              "0 0 0 1px rgba(255,255,255,0.05) inset, 0 8px 48px rgba(0,0,0,0.65)",
          }}
        >
          {/* Top hairline */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-px bg-white/[0.10]"
          />

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">

            {/* LEFT: Copy */}
            <div className="flex flex-col gap-7">
              <span className="self-start inline-flex items-center rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-medium text-(--color-text-secondary)">
                Consulta inicial
              </span>

              <div className="flex flex-col gap-4">
                <h2
                  id="contact-cta-heading"
                  className="text-[clamp(1.9rem,3.5vw,3.1rem)] font-bold leading-tight tracking-tight text-[#F8F9FA]"
                >
                  Convierte tu proceso en{" "}
                  <span className="text-tech-gradient">un sistema real</span>
                </h2>
                <p className="max-w-[48ch] text-sm leading-relaxed text-(--color-text-secondary) md:text-base">
                  Muchas empresas operan con hojas de cálculo, herramientas
                  separadas y procesos manuales. Diseñamos sistemas que
                  centralizan, automatizan y escalan su operación.
                </p>
              </div>

              <ul className="flex flex-col gap-3" aria-label="Qué resolvemos">
                {[
                  "Centralización de datos y procesos",
                  "Automatización de tareas manuales",
                  "Dashboards para control operativo",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-(--color-text-secondary)"
                  >
                    <span
                      aria-hidden="true"
                      className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                      style={{ background: "rgba(255,255,255,0.06)" }}
                    >
                      <svg
                        viewBox="0 0 12 12"
                        className="h-3 w-3"
                        fill="none"
                        stroke="var(--color-primary-blue)"
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
            </div>

            {/* RIGHT: Form */}
            <div
              className="rounded-xl border border-white/7 p-6 md:p-8"
              style={{
                background: "#080A0F",
                boxShadow:
                  "inset 0 0 0 1px rgba(255,255,255,0.07)",
              }}
            >
              <FormBody
                idPrefix="cta"
                form={form}
                onChange={handleChange}
                onSubmit={handleSubmit}
              />
            </div>
          </div>
        </div>

        {/* ── MOBILE: Compact CTA ──────────────────────────────────── */}
        <div className="flex flex-col items-center gap-6 text-center md:hidden">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-medium text-(--color-text-secondary)">
            Consulta inicial
          </span>

          <h2 className="text-[clamp(1.7rem,7vw,2.4rem)] font-bold leading-tight tracking-tight text-[#F8F9FA]">
            Convierte tu proceso en{" "}
            <span className="text-tech-gradient">un sistema real</span>
          </h2>

          <p className="max-w-[36ch] text-sm leading-relaxed text-(--color-text-secondary)">
            Muchas empresas operan con hojas de cálculo y herramientas
            separadas. Diseñamos el sistema que centraliza tu operación.
          </p>

          <button
            type="button"
            onClick={() => setIsSheetOpen(true)}
            className="btn-primary w-full max-w-xs py-4 text-sm font-semibold tracking-wide"
            style={{
              boxShadow:
                "0 4px 14px -4px rgba(0,123,255,0.25), 0 2px 8px rgba(0,0,0,0.4)",
            }}
          >
            Cuéntanos tu proyecto
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
          </button>

          <p className="text-[0.7rem] text-(--color-text-disabled)">
            Te respondemos a instante
          </p>
        </div>
      </div>

      {/* ── MOBILE BOTTOM SHEET ──────────────────────────────────────── */}

      {/* Backdrop */}
      <div
        className={[
          "fixed inset-0 z-60 md:hidden",
          "bg-black/55 backdrop-blur-[2px]",
          "transition-opacity duration-300",
          isSheetOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        ].join(" ")}
        onClick={() => setIsSheetOpen(false)}
        aria-hidden="true"
      />

      {/* Sheet */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Formulario de diagnóstico"
        className={[
          "fixed bottom-0 left-0 right-0 z-61 md:hidden",
          "max-h-[88vh] overflow-y-auto overscroll-contain",
          "rounded-t-2xl border-t border-x border-white/10",
          "transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
          isSheetOpen ? "translate-y-0" : "translate-y-full",
        ].join(" ")}
        style={{
          background: "linear-gradient(180deg, #161622 0%, #111118 100%)",
          boxShadow: "0 -8px 40px -4px rgba(0,0,0,0.75)",
        }}
      >
        {/* Sheet header */}
        <div
          className="sticky top-0 z-10 flex items-start justify-between gap-4 px-6 pb-4 pt-5"
          style={{
            background:
              "linear-gradient(180deg, #161622 80%, transparent 100%)",
          }}
        >
          <div className="flex flex-col gap-1">
            <h3 className="text-base font-semibold text-(--color-text-primary)">
              Cuéntanos tu proyecto
            </h3>
            <p className="text-xs text-(--color-text-secondary)">
              Describe tu operación y te enviamos una propuesta concreta.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsSheetOpen(false)}
            aria-label="Cerrar formulario"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-(--color-text-secondary) transition-colors duration-200 hover:bg-white/6 hover:text-(--color-text-primary)"
          >
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
              <path d="M3 3l10 10M13 3 3 13" />
            </svg>
          </button>
        </div>

        {/* Sheet form */}
        <div className="px-6 pb-8">
          <FormBody
            idPrefix="sheet"
            form={form}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </section>
  );
}

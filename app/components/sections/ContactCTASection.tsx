"use client";

import { useState } from "react";

type FormState = { name: string; email: string; details: string };

export default function ContactCTASection() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", details: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: connect backend / form service
  };

  return (
    <section
      id="contacto"
      aria-labelledby="contact-cta-heading"
      className="relative overflow-hidden py-24 md:py-32 bg-black"
    >
      {/* ── Ambient backdrop glows ───────────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 50% 55%, #007BFF1A 0%, #8A2BE212 45%, transparent 75%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-32 -z-10 h-[28rem] w-[28rem] rounded-full"
        style={{
          background: "radial-gradient(circle, #007BFF2A 0%, transparent 70%)",
          filter: "blur(72px)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 right-0 -z-10 h-80 w-80 rounded-full"
        style={{
          background: "radial-gradient(circle, #8A2BE228 0%, transparent 70%)",
          filter: "blur(64px)",
        }}
      />

      {/* ascending violet→cyan glow — climax aura from bottom */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[400px] bg-gradient-to-t from-[#8A2BE2]/20 via-[#00F5FF]/5 to-transparent blur-[100px] rounded-t-full z-0 pointer-events-none"
      />

      <div className="section-container relative z-10">
        {/* ── Card ─────────────────────────────────────────────────── */}
        <div
          className="relative isolate overflow-hidden rounded-2xl border border-white/[0.10] px-6 py-12 md:px-14 md:py-16"
          style={{
            background: "linear-gradient(145deg, #141420CC 0%, #18182ACC 100%)",
            backdropFilter: "blur(24px)",
            boxShadow:
              "0 0 0 1px rgba(255,255,255,0.05) inset, 0 40px 120px -32px rgba(0,123,255,0.45), 0 8px 40px -16px rgba(138,43,226,0.25)",
          }}
        >
          {/* Inner gradient wash */}
          <div
            aria-hidden="true"
            className="bg-tech-gradient absolute inset-0 -z-10 opacity-[0.14]"
          />
          {/* Top accent line */}
          <div
            aria-hidden="true"
            className="bg-tech-gradient absolute inset-x-8 top-0 h-px opacity-100 md:inset-x-14"
          />
          {/* Corner glow top-left */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-16 -top-16 -z-10 h-56 w-56 rounded-full"
            style={{
              background: "radial-gradient(circle, #007BFF30 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />

          {/* ── Two-column grid ──────────────────────────────────────── */}
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">

            {/* ── LEFT: Copy ───────────────────────────────────────── */}
            <div className="flex flex-col gap-7">
              <span className="badge badge-cyan self-start">
                <span className="glow-dot w-1.5 h-1.5" aria-hidden="true" />
                Agenda tu diagnóstico
              </span>

              <div className="flex flex-col gap-4">
                <h2
                  id="contact-cta-heading"
                  className="font-clash text-[clamp(1.9rem,3.5vw,3.1rem)] font-normal leading-tight tracking-tight text-[#F8F9FA]"
                >
                  ¿Listo para escalar tu{" "}
                  <span className="text-tech-gradient">operación?</span>
                </h2>
                <p className="max-w-[48ch] text-sm leading-relaxed text-[var(--color-text-secondary)] md:text-base">
                  Convierte tus procesos críticos en una plataforma robusta,
                  clara y lista para crecer. Sin demos genéricas — solo
                  soluciones construidas para tu negocio.
                </p>
              </div>

              {/* Trust micro-signals */}
              <ul className="flex flex-col gap-3" aria-label="Ventajas del diagnóstico">
                {[
                  "Diagnóstico inicial sin costo",
                  "Propuesta en menos de 48 h",
                  "Sin contratos de permanencia",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-[var(--color-text-secondary)]">
                    <span
                      aria-hidden="true"
                      className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                      style={{ background: "rgba(0,123,255,0.15)" }}
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

            {/* ── RIGHT: Inline Form ───────────────────────────────── */}
            <div
              className="rounded-xl border border-white/[0.08] p-6 md:p-8"
              style={{
                background: "rgba(10, 10, 16, 0.65)",
                backdropFilter: "blur(16px)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
              }}
            >
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">

                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="cta-name"
                    className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[var(--color-text-secondary)]"
                  >
                    Nombre
                  </label>
                  <input
                    id="cta-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Tu nombre completo"
                    className="w-full rounded-lg border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-disabled)] outline-none transition-all duration-200 focus:border-[#007BFF55] focus:bg-[#007BFF09] focus:shadow-[0_0_0_3px_rgba(0,123,255,0.12)]"
                  />
                </div>

                {/* Corporate email */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="cta-email"
                    className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[var(--color-text-secondary)]"
                  >
                    Correo Corporativo
                  </label>
                  <input
                    id="cta-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="tu@empresa.com"
                    className="w-full rounded-lg border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-disabled)] outline-none transition-all duration-200 focus:border-[#007BFF55] focus:bg-[#007BFF09] focus:shadow-[0_0_0_3px_rgba(0,123,255,0.12)]"
                  />
                </div>

                {/* Project details */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="cta-details"
                    className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[var(--color-text-secondary)]"
                  >
                    Detalles del Proyecto
                  </label>
                  <textarea
                    id="cta-details"
                    name="details"
                    rows={4}
                    required
                    value={form.details}
                    onChange={handleChange}
                    placeholder="Cuéntanos brevemente sobre tu negocio y qué quieres construir…"
                    className="w-full resize-none rounded-lg border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-disabled)] outline-none transition-all duration-200 focus:border-[#007BFF55] focus:bg-[#007BFF09] focus:shadow-[0_0_0_3px_rgba(0,123,255,0.12)]"
                  />
                </div>

                {/* Submit — imponente */}
                <button
                  type="submit"
                  className="btn-primary mt-1 w-full py-4 text-sm font-semibold tracking-wide hover:scale-105"
                  style={{
                    boxShadow:
                      "0 4px 28px -6px rgba(0,123,255,0.7), 0 2px 8px rgba(0,0,0,0.5)",
                  }}
                >
                  Solicitar diagnóstico gratuito
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

                <p className="text-center text-[0.7rem] text-[var(--color-text-disabled)]">
                  Sin spam. Respondemos en menos de 24 h.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

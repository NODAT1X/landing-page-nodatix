export default function ContactCTASection() {
  return (
    <section
      id="contacto"
      aria-labelledby="contact-cta-heading"
      className="relative overflow-hidden py-24 md:py-28"
      style={{ background: "#121212" }}
    >
      <div className="section-container">
        <div className="relative isolate overflow-hidden rounded-2xl border border-white/[0.08] px-6 py-12 text-center shadow-[0_24px_80px_-32px_rgba(0,123,255,0.55)] md:px-12 md:py-16">
          <div
            aria-hidden="true"
            className="bg-tech-gradient absolute inset-0 -z-10 opacity-15"
          />
          <div
            aria-hidden="true"
            className="absolute inset-px -z-10 rounded-2xl bg-[#121212]/90"
          />
          <div
            aria-hidden="true"
            className="bg-tech-gradient absolute inset-x-6 top-0 h-px opacity-80 md:inset-x-12"
          />

          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6">
            <span className="badge badge-cyan">
              <span className="glow-dot w-1.5 h-1.5" aria-hidden="true" />
              Agenda tu diagnóstico
            </span>

            <div className="flex flex-col items-center gap-4">
              <h2
                id="contact-cta-heading"
                className="text-[clamp(2rem,4vw,3.4rem)] font-bold leading-tight tracking-tight text-[#F8F9FA]"
              >
                ¿Listo para escalar tu operación?
              </h2>
              <p className="max-w-[56ch] text-sm leading-relaxed text-[var(--color-text-secondary)] md:text-base">
                Convirtamos tus procesos críticos en una plataforma robusta,
                clara y lista para crecer.
              </p>
            </div>

            <a
              href="mailto:hola@nodatix.com?subject=Quiero%20agendar%20una%20llamada%20con%20Nodatix"
              className="btn-primary w-full px-6 py-3 text-sm sm:w-auto"
            >
              Agendar una llamada
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

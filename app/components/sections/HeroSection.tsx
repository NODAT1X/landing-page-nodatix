import Image from "next/image";
import Link from "next/link";

/* ─────────────────────────────────────────────────────────────────
   HeroSection — Nodatix Landing Page
   Pure black base · Intense mesh glows · mix-blend-screen cubos
   contrast-125 brightness-90 crushes near-blacks to true black
   so no gray box bleeds around the image under screen blend.
───────────────────────────────────────────────────────────────── */
export default function HeroSection() {
  return (
    <section
      className="relative isolate min-h-dvh bg-black flex flex-col items-center justify-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* ── Mesh gradient layer ───────────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        {/* VIOLET — large orb, bottom-left, washes the text column */}
        <div className="absolute bottom-[-120px] left-[-200px] w-[950px] h-[950px] rounded-full bg-[#8A2BE2] opacity-[0.35] blur-[180px]" />

        {/* CYAN — right side, backs the cubos and adds depth */}
        <div className="absolute top-[8%] right-[-160px] w-[720px] h-[720px] rounded-full bg-[#00F5FF] opacity-[0.28] blur-[160px]" />

        {/* BLUE — very subtle top-center, adds tonal richness */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[380px] rounded-full bg-[#007BFF] opacity-[0.10] blur-[130px]" />

        {/* fine dot-grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
          }}
        />

        {/* edge fades — pure black so sections below blend cleanly */}
        <div className="absolute top-0 inset-x-0 h-40 bg-linear-to-b from-black to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-48 bg-linear-to-t from-black to-transparent" />
      </div>

      {/* ── Content ───────────────────────────────────────────── */}
      <div className="section-container w-full grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center py-28 md:py-36 lg:py-40">

        {/* ── Left column: copy ─────────────────────────────── */}
        <div className="flex flex-col items-start gap-7 text-left">

          {/* eyebrow badge */}
          <div
            className="badge badge-blue animate-fade-up"
            style={{ animationDelay: "0ms" }}
          >
            <span className="glow-dot w-1.5 h-1.5" aria-hidden="true" />
            Desarrollo B2B · Proyectos a medida
          </div>

          {/* H1 */}
          <h1
            id="hero-heading"
            className="font-clash animate-fade-up text-[clamp(2.6rem,5vw,4.5rem)] font-semibold leading-[1.06] tracking-tight text-[#F8F9FA]"
            style={{ animationDelay: "80ms" }}
          >
            Construimos Software{" "}
            <span className="text-tech-gradient">a medida</span>{" "}
            que simplifica y escala tu negocio.
          </h1>

          {/* subtitle */}
          <p
            className="animate-fade-up max-w-[48ch] text-[clamp(1rem,1.8vw,1.15rem)] leading-relaxed text-(--color-text-secondary)"
            style={{ animationDelay: "160ms" }}
          >
            Convertimos tus procesos manuales y herramientas desconectadas en
            sistemas digitales centralizados, rápidos y listos para crecer.
          </p>

          {/* CTAs */}
          <div
            className="animate-fade-up flex flex-col sm:flex-row items-start gap-3 w-full sm:w-auto"
            style={{ animationDelay: "240ms" }}
          >
            <Link
              href="#contacto"
              className="btn-primary btn-light w-full sm:w-auto text-sm px-6 py-3"
            >
              Agendar una llamada
            </Link>
            <Link
              href="#contacto"
              className="btn-secondary w-full sm:w-auto text-sm px-6 py-3"
            >
              Cotizar mi proyecto
            </Link>
          </div>

          {/* social proof */}
          <p
            className="animate-fade-up text-xs text-(--color-text-disabled) tracking-wide"
            style={{ animationDelay: "300ms" }}
          >
            Sin compromisos · Respuesta en menos de 24 h
          </p>
        </div>

        {/* ── Right column: floating cubos ──────────────────── */}
        <div
          className="animate-fade-up relative flex items-center justify-center lg:justify-end"
          style={{ animationDelay: "200ms" }}
          aria-hidden="true"
        >
          {/* cyan accent — moved to bottom-right corner, off the laptop chassis */}
          <div className="absolute bottom-[5%] right-[5%] w-[100px] h-[100px] rounded-full bg-[#00F5FF] opacity-[0.08] blur-[55px] pointer-events-none" />   

          <Image
            src="/images/laptop.png"
            alt=""
            width={600}
            height={600}
            priority
            className="relative w-full max-w-[530px] lg:max-w-[600px] h-auto object-contain mix-blend-screen animate-float contrast-125 brightness-110 saturate-110"
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse 85% 85% at 50% 50%, black 50%, transparent 100%)",
              maskImage:
                "radial-gradient(ellipse 85% 85% at 50% 50%, black 50%, transparent 100%)",
            }}
          />
        </div>
      </div>

      {/* ── Scroll indicator ──────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 opacity-35 pointer-events-none select-none"
      >
        <div
          className="w-[18px] h-[28px] rounded-full flex items-start justify-center pt-[5px]"
          style={{ border: "1.5px solid rgba(255,255,255,0.25)" }}
        >
          <div
            className="w-[3px] h-[7px] rounded-full bg-(--color-cyan) animate-bounce"
            style={{ animationDuration: "1.8s" }}
          />
        </div>
      </div>
    </section>
  );
}

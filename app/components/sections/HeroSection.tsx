import Link from "next/link";

/* ─────────────────────────────────────────────────────────────────
   HeroSection — Nodatix Landing Page
   Centred, typographically bold, Linear-style dark aesthetic
───────────────────────────────────────────────────────────────── */
export default function HeroSection() {
  return (
    <section
      className="relative isolate min-h-dvh flex flex-col items-center justify-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* ── Ambient background glows ──────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        {/* blue glow — top-left */}
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-[#007BFF] opacity-[0.07] blur-[120px]" />
        {/* violet glow — top-right */}
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-[#8A2BE2] opacity-[0.06] blur-[110px]" />
        {/* cyan glow — bottom-center */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-[#00F5FF] opacity-[0.04] blur-[100px]" />

        {/* cyan accent orb — left, heading zone */}
        <div className="absolute top-[20%] left-[5%] w-[380px] h-[320px] rounded-full bg-(--color-cyan) opacity-10 blur-3xl" />
        {/* violet accent orb — right, heading zone */}
        <div className="absolute top-[15%] right-[5%] w-[340px] h-[380px] rounded-full bg-(--color-violet) opacity-10 blur-3xl" />

        {/* fine grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
          }}
        />

        {/* top gradient fade */}
        <div className="absolute top-0 inset-x-0 h-40 bg-linear-to-b from-[#121212] to-transparent" />
        {/* bottom gradient fade */}
        <div className="absolute bottom-0 inset-x-0 h-48 bg-linear-to-t from-[#121212] to-transparent" />
      </div>

      {/* ── Content ───────────────────────────────────────────── */}
      <div className="section-container w-full flex flex-col items-center text-center gap-6 pt-20 pb-28 sm:py-28 md:gap-8 md:py-40">
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
          className="font-clash animate-fade-up max-w-[18ch] text-[clamp(2.4rem,5.5vw,4.25rem)] font-extrabold leading-none tracking-tight text-[#F8F9FA]"
          style={{ animationDelay: "80ms" }}
        >
          Construimos Software{" "}
          <span className="text-tech-gradient">a medida</span> que simplifica y
          escala tu negocio.
        </h1>

        {/* H2 / subtitle */}
        <p
          className="animate-fade-up max-w-[52ch] text-[clamp(1rem,1.8vw,1.2rem)] leading-relaxed text-(--color-text-secondary)"
          style={{ animationDelay: "160ms" }}
        >
          Convertimos tus procesos manuales y herramientas desconectadas en
          sistemas digitales centralizados, rápidos y listos para crecer.
        </p>

        {/* CTAs */}
        <div
          className="animate-fade-up flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto"
          style={{ animationDelay: "240ms" }}
        >
          <Link
            href="#contacto"
            className="btn-primary w-full sm:w-auto text-sm px-6 py-3"
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

        {/* social proof strip */}
        <p
          className="animate-fade-up text-xs text-(--color-text-disabled) tracking-wide"
          style={{ animationDelay: "300ms" }}
        >
          Sin compromisos · Respuesta en menos de 24 h
        </p>

        {/* ── Abstract SaaS mockup ──────────────────────────── */}
        <div
          className="animate-fade-up w-full mt-16 md:mt-24"
          style={{ animationDelay: "380ms" }}
          aria-hidden="true"
        >
          <div className="mx-auto max-w-4xl bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl overflow-hidden">

            {/* Top bar — macOS chrome */}
            <div className="h-10 border-b border-white/10 bg-white/5 flex items-center px-4 gap-2">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56]/40" />
              <span className="w-3 h-3 rounded-full bg-[#FEBC2E]/40" />
              <span className="w-3 h-3 rounded-full bg-[#28C840]/40" />
              <div className="ml-4 flex-1 flex justify-center">
                <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] w-44">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00C48C]" />
                  <span className="text-[10px] text-(--color-text-disabled) font-mono tracking-wider truncate">
                    app.nodatix.io
                  </span>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 grid grid-cols-3 gap-6 opacity-50">

              {/* Sidebar */}
              <div className="col-span-1 rounded-lg bg-white/5 border border-white/[0.06] p-3 flex flex-col gap-2 min-h-[220px]">
                {/* brand row */}
                <div className="flex items-center gap-2 pb-3 border-b border-white/[0.06]">
                  <div className="w-4 h-4 rounded bg-tech-gradient opacity-80" />
                  <div className="h-2 w-14 rounded-full bg-white/15" />
                </div>
                {/* nav items */}
                {[
                  { w: "w-3/4", active: true  },
                  { w: "w-2/3", active: false },
                  { w: "w-4/5", active: false },
                  { w: "w-1/2", active: false },
                  { w: "w-3/5", active: false },
                ].map(({ w, active }, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-2 px-2 py-1.5 rounded-md ${active ? "bg-[#007BFF14] border border-[#007BFF20]" : ""}`}
                  >
                    <div className={`w-2.5 h-2.5 rounded-sm ${active ? "bg-(--color-primary-blue) opacity-70" : "bg-white/[0.08]"}`} />
                    <div className={`h-1.5 ${w} rounded-full ${active ? "bg-(--color-primary-blue) opacity-50" : "bg-white/[0.08]"}`} />
                  </div>
                ))}
                <div className="flex-1" />
                {/* avatar */}
                <div className="flex items-center gap-2 pt-2 border-t border-white/[0.06]">
                  <div className="w-5 h-5 rounded-full bg-tech-gradient opacity-60 shrink-0" />
                  <div className="flex flex-col gap-1">
                    <div className="h-1.5 w-12 rounded-full bg-white/15" />
                    <div className="h-1.5 w-8 rounded-full bg-white/[0.08]" />
                  </div>
                </div>
              </div>

              {/* Main content — cols 2–3 */}
              <div className="col-span-2 flex flex-col gap-4">
                {/* page header */}
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-1.5">
                    <div className="h-3 w-28 rounded-full bg-white/20" />
                    <div className="h-2 w-40 rounded-full bg-white/[0.08]" />
                  </div>
                  <div className="flex gap-2">
                    <div className="h-7 w-16 rounded-lg bg-white/[0.05] border border-white/[0.06]" />
                    <div className="h-7 w-20 rounded-lg bg-tech-gradient opacity-70" />
                  </div>
                </div>

                {/* KPI cards */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { color: "bg-(--color-primary-blue)", val: "w-14", label: "w-10" },
                    { color: "bg-(--color-violet)",       val: "w-12", label: "w-8"  },
                    { color: "bg-(--color-cyan)",         val: "w-16", label: "w-12" },
                  ].map(({ color, val, label }, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-white/[0.06] p-3 flex flex-col gap-2"
                      style={{ background: "rgba(255,255,255,0.025)" }}
                    >
                      <div className={`w-3.5 h-3.5 rounded-md ${color} opacity-60`} />
                      <div className={`h-4 ${val} rounded-full bg-white/20`} />
                      <div className={`h-1.5 ${label} rounded-full bg-white/[0.08]`} />
                    </div>
                  ))}
                </div>

                {/* Chart skeleton */}
                <div
                  className="rounded-xl border border-white/[0.06] p-4 flex flex-col gap-3"
                  style={{ background: "rgba(255,255,255,0.02)" }}
                >
                  <div className="flex items-center justify-between">
                    <div className="h-2.5 w-20 rounded-full bg-white/15" />
                    <div className="flex gap-1.5">
                      <div className="h-2 w-7 rounded-full bg-white/[0.08]" />
                      <div className="h-2 w-7 rounded-full bg-white/[0.08]" />
                    </div>
                  </div>
                  {/* bar chart */}
                  <div className="flex items-end gap-1.5 h-16">
                    {[45, 65, 38, 80, 55, 90, 60, 75, 48, 85, 70, 95].map(
                      (h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-sm"
                          style={{
                            height: `${h}%`,
                            background:
                              i === 11
                                ? "linear-gradient(180deg, #007BFF 0%, #8A2BE2 100%)"
                                : "rgba(255,255,255,0.07)",
                          }}
                        />
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ──────────────────────────────────────
          Mouse-capsule with animated cyan dot.
          Absolute so it never disrupts the centred content flow.
          Hidden below 640px to avoid crowding on small screens.
      ─────────────────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 opacity-35 pointer-events-none select-none"
      >
        {/* mouse body */}
        <div
          className="w-[18px] h-[28px] rounded-full flex items-start justify-center pt-[5px]"
          style={{ border: "1.5px solid rgba(255,255,255,0.25)" }}
        >
          {/* scroll wheel — bounces gently in brand cyan */}
          <div
            className="w-[3px] h-[7px] rounded-full bg-(--color-cyan) animate-bounce"
            style={{ animationDuration: "1.8s" }}
          />
        </div>
      </div>
    </section>
  );
}

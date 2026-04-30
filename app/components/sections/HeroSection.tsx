import Link from "next/link";

/* ─────────────────────────────────────────────────────────────────
   HeroSection — Nodatix Landing Page
   Centred, typographically bold, Linear-style dark aesthetic
───────────────────────────────────────────────────────────────── */
export default function HeroSection() {
  return (
    <section
      className="relative isolate min-h-[100svh] flex flex-col items-center justify-center overflow-hidden"
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
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#121212] to-transparent" />
        {/* bottom gradient fade */}
        <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#121212] to-transparent" />
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
          CONSTRUIMOS SOFTWARE{" "}
          <span className="text-tech-gradient">A MEDIDA</span> QUE SIMPLIFICA Y
          ESCALA TU NEGOCIO.
        </h1>

        {/* H2 / subtitle */}
        <p
          className="animate-fade-up max-w-[52ch] text-[clamp(1rem,1.8vw,1.2rem)] leading-relaxed text-[var(--color-text-secondary)]"
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
          className="animate-fade-up text-xs text-[var(--color-text-disabled)] tracking-wide"
          style={{ animationDelay: "300ms" }}
        >
          Sin compromisos · Respuesta en menos de 24 h
        </p>

        {/* ── Abstract SaaS mockup ──────────────────────────── */}
        <div
          className="animate-fade-up w-full mt-10 md:mt-14"
          style={{ animationDelay: "380ms" }}
          aria-hidden="true"
        >
          {/* outer frame — simulates browser / app chrome */}
          <div
            className="relative w-full max-w-5xl mx-auto rounded-xl overflow-hidden border border-white/[0.07] sm:rounded-2xl"
            style={{
              background:
                "linear-gradient(160deg, #1E1E24 0%, #16161C 60%, #121218 100%)",
              boxShadow:
                "0 0 0 1px rgba(255,255,255,0.04), 0 32px 80px -16px rgba(0,0,0,0.7), 0 0 60px -20px rgba(0,123,255,0.15)",
            }}
          >
            {/* ── Titlebar ──────────────────────────────────── */}
            <div className="flex items-center gap-2 px-3 py-3 border-b border-white/[0.06] bg-white/[0.02] sm:gap-3 sm:px-5 sm:py-3.5">
              {/* window dots */}
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] opacity-70 sm:w-3 sm:h-3" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E] opacity-70 sm:w-3 sm:h-3" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28C840] opacity-70 sm:w-3 sm:h-3" />
              </div>
              {/* URL bar */}
              <div className="min-w-0 flex-1 flex items-center justify-center">
                <div className="flex items-center gap-2 px-2 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] w-full max-w-36 sm:w-48 sm:max-w-none sm:px-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00C48C]" />
                  <span className="min-w-0 truncate text-[10px] text-[var(--color-text-disabled)] font-mono tracking-wider">
                    app.nodatix.io
                  </span>
                </div>
              </div>
              {/* action icons placeholder */}
              <div className="hidden gap-2 sm:flex">
                <div className="w-6 h-6 rounded bg-white/[0.04] border border-white/[0.06]" />
                <div className="w-6 h-6 rounded bg-white/[0.04] border border-white/[0.06]" />
              </div>
            </div>

            {/* ── App layout ────────────────────────────────── */}
            <div className="flex min-h-[300px] sm:min-h-[380px]">
              {/* Sidebar */}
              <div className="hidden sm:flex flex-col w-[200px] shrink-0 border-r border-white/[0.05] px-3 py-4 gap-1">
                {/* brand row */}
                <div className="flex items-center gap-2 px-2 mb-4">
                  <div className="w-5 h-5 rounded bg-tech-gradient opacity-90" />
                  <div className="h-2.5 w-16 rounded-full bg-white/10" />
                </div>
                {/* nav items */}
                {[
                  { w: "w-3/4", active: true },
                  { w: "w-2/3", active: false },
                  { w: "w-4/5", active: false },
                  { w: "w-1/2", active: false },
                  { w: "w-3/5", active: false },
                ].map(({ w, active }, i) => (
                  <div
                    key={i}
                    className={[
                      "flex items-center gap-2.5 px-2 py-2 rounded-lg",
                      active ? "bg-[#007BFF14] border border-[#007BFF20]" : "",
                    ].join(" ")}
                  >
                    <div
                      className={[
                        "w-3.5 h-3.5 rounded",
                        active
                          ? "bg-[var(--color-primary-blue)] opacity-80"
                          : "bg-white/10",
                      ].join(" ")}
                    />
                    <div
                      className={`h-2 ${w} rounded-full ${active ? "bg-[var(--color-primary-blue)] opacity-60" : "bg-white/10"}`}
                    />
                  </div>
                ))}

                {/* separator */}
                <div className="my-3 h-px bg-white/[0.05]" />

                {[{ w: "w-2/3" }, { w: "w-3/4" }, { w: "w-1/2" }].map(
                  ({ w }, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 px-2 py-2"
                    >
                      <div className="w-3.5 h-3.5 rounded bg-white/[0.06]" />
                      <div
                        className={`h-2 ${w} rounded-full bg-white/[0.06]`}
                      />
                    </div>
                  ),
                )}

                {/* avatar bottom */}
                <div className="mt-auto flex items-center gap-2.5 px-2 py-2">
                  <div className="w-6 h-6 rounded-full bg-tech-gradient opacity-70" />
                  <div className="flex flex-col gap-1">
                    <div className="h-1.5 w-14 rounded-full bg-white/15" />
                    <div className="h-1.5 w-10 rounded-full bg-white/08" />
                  </div>
                </div>
              </div>

              {/* Main content */}
              <div className="min-w-0 flex-1 flex flex-col p-3 gap-3 overflow-hidden sm:p-5 sm:gap-4">
                {/* page header row */}
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0 flex flex-col gap-1.5">
                    <div className="h-3 w-24 rounded-full bg-white/20 sm:w-32" />
                    <div className="h-2 w-32 max-w-full rounded-full bg-white/07 sm:w-48" />
                  </div>
                  <div className="hidden gap-2 md:flex">
                    <div className="h-7 w-20 rounded-lg bg-white/[0.05] border border-white/[0.06]" />
                    <div className="h-7 w-24 rounded-lg bg-tech-gradient opacity-80" />
                  </div>
                </div>

                {/* KPI cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    {
                      color: "bg-[var(--color-primary-blue)]",
                      val: "w-16",
                      label: "w-12",
                    },
                    {
                      color: "bg-[var(--color-violet)]",
                      val: "w-14",
                      label: "w-10",
                    },
                    {
                      color: "bg-[var(--color-cyan)]",
                      val: "w-20",
                      label: "w-14",
                    },
                    { color: "bg-[#00C48C]", val: "w-12", label: "w-8" },
                  ].map(({ color, val, label }, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-white/[0.06] p-3.5 flex flex-col gap-2"
                      style={{ background: "rgba(255,255,255,0.025)" }}
                    >
                      <div
                        className={`w-4 h-4 rounded-md ${color} opacity-70`}
                      />
                      <div className={`h-4 ${val} rounded-full bg-white/20`} />
                      <div
                        className={`h-2 ${label} rounded-full bg-white/08`}
                      />
                    </div>
                  ))}
                </div>

                {/* Chart + table row */}
                <div className="min-w-0 flex gap-3 flex-1 min-h-0">
                  {/* Chart card */}
                  <div
                    className="min-w-0 flex-1 rounded-xl border border-white/[0.06] p-3 flex flex-col gap-3 sm:p-4"
                    style={{ background: "rgba(255,255,255,0.02)" }}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="h-2.5 w-20 rounded-full bg-white/15 sm:w-24" />
                      <div className="hidden gap-2 sm:flex">
                        <div className="h-2 w-8 rounded-full bg-white/08" />
                        <div className="h-2 w-8 rounded-full bg-white/08" />
                      </div>
                    </div>
                    {/* bar chart skeleton */}
                    <div className="flex-1 flex items-end gap-1.5 pt-2">
                      {[45, 65, 38, 80, 55, 90, 60, 75, 48, 85, 70, 95].map(
                        (h, i) => (
                          <div
                            key={i}
                            className="flex-1 flex flex-col items-center gap-0.5"
                          >
                            <div
                              className="w-full rounded-sm"
                              style={{
                                height: `${h}%`,
                                background:
                                  i === 11
                                    ? "linear-gradient(180deg, #007BFF 0%, #8A2BE2 100%)"
                                    : "rgba(255,255,255,0.07)",
                              }}
                            />
                          </div>
                        ),
                      )}
                    </div>
                    {/* x-axis */}
                    <div className="flex gap-1.5">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <div
                          key={i}
                          className="flex-1 h-1.5 rounded-full bg-white/05"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Table card */}
                  <div
                    className="hidden lg:flex w-56 rounded-xl border border-white/[0.06] p-4 flex-col gap-2.5"
                    style={{ background: "rgba(255,255,255,0.02)" }}
                  >
                    <div className="h-2.5 w-20 rounded-full bg-white/15 mb-1" />
                    {[
                      { w1: "w-16", w2: "w-10", dot: "bg-[#00C48C]" },
                      {
                        w1: "w-20",
                        w2: "w-8",
                        dot: "bg-[var(--color-primary-blue)]",
                      },
                      {
                        w1: "w-14",
                        w2: "w-12",
                        dot: "bg-[var(--color-violet)]",
                      },
                      { w1: "w-18", w2: "w-9", dot: "bg-[#FFB800]" },
                      { w1: "w-12", w2: "w-11", dot: "bg-[var(--color-cyan)]" },
                    ].map(({ w1, w2, dot }, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between py-1.5 border-b border-white/[0.04] last:border-0"
                      >
                        <div className="flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full ${dot}`} />
                          <div
                            className={`h-2 ${w1} rounded-full bg-white/12`}
                          />
                        </div>
                        <div className={`h-2 ${w2} rounded-full bg-white/08`} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ── Bottom glow reflection ──────────────────── */}
            <div
              className="absolute bottom-0 inset-x-0 h-32 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,123,255,0.06) 0%, transparent 100%)",
              }}
            />
          </div>

          {/* subtle glow under the mockup */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-16 blur-2xl pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, #007BFF22 0%, #8A2BE222 50%, #00F5FF22 100%)",
            }}
          />
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
            className="w-[3px] h-[7px] rounded-full bg-[var(--color-cyan)] animate-bounce"
            style={{ animationDuration: "1.8s" }}
          />
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   TrustSection — Nodatix
   Part 1: Caso SaaS Gimnasios — mockup abstracto de dashboard
   Part 2: Founders — avatares con iniciales + declaración de confianza
   Layout: 12-col grid 7 (caso) / 5 (equipo) en desktop
───────────────────────────────────────────────────────────────── */

/* ── Founders data ────────────────────────────────────────────── */
interface Founder {
  initials: string;
  role: string;
  description: string;
}

/* Update initials and roles with real team data when available */
const FOUNDERS: Founder[] = [
  {
    initials: "J.S.",
    role: "CEO & Co-founder",
    description:
      "Visión de producto, estrategia comercial y desarrollo de negocio B2B.",
  },
  {
    initials: "A.M.",
    role: "CTO & Co-founder",
    description:
      "Arquitectura de software, infraestructura y liderazgo técnico del equipo.",
  },
];

const TECH_TAGS = ["React", "Node.js", "TypeScript", "MySQL", "Tailwind CSS"];

/* ── KPI cards data ───────────────────────────────────────────── */
const KPIS = [
  { value: "248", label: "Miembros activos", color: "#007BFF" },
  { value: "+18", label: "Nuevos esta semana", color: "#00F5FF" },
  { value: "$12.4k", label: "Ingresos / mes", color: "#8A2BE2" },
];

/* ── Membership distribution ──────────────────────────────────── */
const MEMBERSHIP_TYPES = [
  { label: "Premium", pct: 68, color: "#007BFF" },
  { label: "Básico", pct: 24, color: "#8A2BE2" },
  { label: "Prueba libre", pct: 8, color: "#00F5FF" },
];

/* ── Weekly attendance bars ───────────────────────────────────── */
const ATTENDANCE = [68, 42, 88, 52, 74, 36, 22];
const DAYS = ["L", "M", "Mi", "J", "V", "S", "D"];

/* ── Check-ins ────────────────────────────────────────────────── */
const CHECKINS = [
  { w1: "w-16", w2: "w-10", time: "Hace 2 min", dot: "#00C48C" },
  { w1: "w-20", w2: "w-12", time: "Hace 7 min", dot: "#007BFF" },
  { w1: "w-14", w2: "w-8", time: "Hace 15 min", dot: "#8A2BE2" },
];

/* ─────────────────────────────────────────────────────────────────
   Sub-component: Abstract Gym Dashboard Mockup
───────────────────────────────────────────────────────────────── */
function GymDashboardMockup() {
  return (
    <div
      className="relative overflow-hidden rounded-xl"
      style={{
        background:
          "linear-gradient(160deg, #1E1E24 0%, #17171D 60%, #121218 100%)",
        border: "1px solid rgba(255,255,255,0.07)",
        boxShadow:
          "0 0 0 1px rgba(255,255,255,0.03), 0 24px 60px -12px rgba(0,0,0,0.65), 0 0 40px -15px rgba(0,123,255,0.10)",
      }}
    >
      {/* App chrome */}
      <div
        className="flex items-center gap-3 border-b border-white/[0.06] px-4 py-2.5"
        style={{ background: "rgba(255,255,255,0.015)" }}
      >
        <div className="flex shrink-0 gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[#FF5F56] opacity-55" />
          <span className="h-2 w-2 rounded-full bg-[#FEBC2E] opacity-55" />
          <span className="h-2 w-2 rounded-full bg-[#28C840] opacity-55" />
        </div>

        <div className="mr-2 flex items-center gap-1.5">
          <div
            className="h-3.5 w-3.5 rounded-sm"
            style={{
              background: "linear-gradient(135deg, #007BFF 0%, #8A2BE2 100%)",
            }}
          />
          <span className="text-xs font-semibold text-white/60">Nodatix</span>
        </div>

        <div className="ml-auto flex gap-3 text-xs font-medium text-white/40">
          <span className="rounded border border-white/10 bg-white/5 px-2 py-1">
            Dashboard
          </span>
          <span className="px-2 py-1">Miembros</span>
          <span className="px-2 py-1">Facturación</span>
        </div>
      </div>

      {/* KPI row */}
      <div className="grid grid-cols-3 gap-4 border-b border-white/[0.06] p-5">
        {KPIS.map((kpi) => (
          <div key={kpi.label} className="space-y-1">
            <div className="text-lg font-bold" style={{ color: kpi.color }}>
              {kpi.value}
            </div>
            <div className="text-xs text-white/50">{kpi.label}</div>
          </div>
        ))}
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-1 gap-5 border-b border-white/[0.06] p-5 sm:grid-cols-3 sm:gap-4">
        <div className="sm:col-span-2">
          <div className="mb-3 text-xs font-semibold text-white/70">
            Asistencia semanal
          </div>

          <div className="flex h-16 items-end gap-2">
            {ATTENDANCE.map((val, index) => (
              <div
                key={`${val}-${index}`}
                className="flex-1"
                style={{
                  height: `${val}%`,
                  background: index === 2 ? "#00F5FF" : "rgba(0,123,255,0.3)",
                  borderRadius: "2px",
                }}
              />
            ))}
          </div>

          <div className="mt-2 flex gap-2 text-xs text-white/40">
            {DAYS.map((day) => (
              <div key={day} className="flex-1 text-center">
                {day}
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-3 text-xs font-semibold text-white/70">
            Membresías
          </div>

          <div className="space-y-2">
            {MEMBERSHIP_TYPES.map((type) => (
              <div key={type.label} className="space-y-1">
                <div className="flex items-center justify-between text-xs text-white/60">
                  <span>{type.label}</span>
                  <span className="font-semibold">{type.pct}%</span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${type.pct}%`,
                      background: type.color,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Check-ins table */}
      <div className="p-5">
        <div className="mb-3 text-xs font-semibold text-white/70">
          Últimos accesos
        </div>

        <div className="space-y-3">
          {CHECKINS.map((check) => (
            <div key={check.time} className="flex items-center gap-3">
              <span
                className="h-2 w-2 shrink-0 rounded-full"
                style={{ background: check.dot }}
              />

              <div className="flex flex-1 gap-1">
                <div className={`h-1.5 rounded-full bg-white/20 ${check.w1}`} />
                <div className={`h-1.5 rounded-full bg-white/10 ${check.w2}`} />
              </div>

              <span className="text-xs text-white/40">{check.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   Main Component
───────────────────────────────────────────────────────────────── */
export default function TrustSection() {
  return (
    <section
      id="confianza"
      aria-labelledby="trust-heading"
      className="relative overflow-hidden bg-[#0A0C0D] px-6 py-24 text-white sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left side: SaaS case mockup */}
          <div className="lg:col-span-7">
            <div className="mb-6">
              <span className="inline-flex rounded-full border border-[#00F5FF]/20 bg-[#00F5FF]/10 px-3 py-1 text-xs font-semibold text-[#00F5FF]">
                Caso representativo
              </span>

              <h2
                id="trust-heading"
                className="mt-5 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl"
              >
                Software diseñado para operaciones reales, no solo para verse
                bien.
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-white/60">
                Un ejemplo de sistema SaaS para gimnasios: control de miembros,
                ingresos, asistencias, membresías y accesos en un solo panel
                administrativo.
              </p>
            </div>

            <GymDashboardMockup />
          </div>

          {/* Right side: Team trust */}
          <div className="lg:col-span-5">
            <span className="inline-flex rounded-full border border-[#007BFF]/20 bg-[#007BFF]/10 px-3 py-1 text-xs font-semibold text-[#00F5FF]">
              Equipo fundador
            </span>

            <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Construimos con enfoque técnico, claridad y visión de negocio.
            </h3>

            <p className="mt-4 text-base leading-7 text-white/60">
              En Nodatix combinamos estrategia, diseño de producto y desarrollo
              de software para crear soluciones digitales mantenibles,
              escalables y alineadas a procesos empresariales.
            </p>

            <div className="mt-8 space-y-4">
              {FOUNDERS.map((founder) => (
                <div
                  key={founder.initials}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#007BFF] to-[#8A2BE2] text-sm font-bold text-white shadow-lg shadow-[#007BFF]/20">
                      {founder.initials}
                    </div>

                    <div>
                      <h4 className="text-base font-semibold text-white">
                        {founder.role}
                      </h4>

                      <p className="mt-1 text-sm leading-6 text-white/55">
                        {founder.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <p className="mb-3 text-sm font-medium text-white/70">
                Stack base de desarrollo
              </p>

              <div className="flex flex-wrap gap-2">
                {TECH_TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-[#00F5FF]/15 bg-[#00F5FF]/[0.04] p-5">
              <p className="text-sm leading-6 text-white/65">
                Nuestro objetivo no es solo entregar pantallas, sino construir
                sistemas que ayuden a operar mejor, automatizar procesos y tomar
                decisiones con información clara.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

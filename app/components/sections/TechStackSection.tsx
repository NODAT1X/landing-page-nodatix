/* ─────────────────────────────────────────────────────────────────
   TechStackSection — Nodatix
   Infinite CSS marquee · Monochrome → brand-color on hover
   Zero JS animation · No third-party deps
───────────────────────────────────────────────────────────────── */

interface Tech {
  name: string;
  hoverColor: string;
  svg: React.ReactNode;
}

const TECHS: Tech[] = [
  {
    name: "Next.js",
    hoverColor: "var(--foreground)",
    svg: (
      <svg viewBox="0 0 180 180" fill="currentColor" aria-hidden="true">
        <mask id="nxt-mask" style={{ maskType: "alpha" }}>
          <circle cx="90" cy="90" r="90" />
        </mask>
        <g mask="url(#nxt-mask)">
          <circle cx="90" cy="90" r="90" />
          <path
            d="M149.508 157.52L69.142 54H54v71.97h12.114V69.384l73.1 95.469a90.46 90.46 0 0 0 10.294-7.333Z"
            fill="url(#nxt-grad)"
          />
          <rect x="115" y="54" width="12" height="72" fill="url(#nxt-grad2)" />
        </g>
        <defs>
          <linearGradient
            id="nxt-grad"
            x1="109"
            y1="116.5"
            x2="144.5"
            y2="160.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="nxt-grad2"
            x1="115"
            y1="54"
            x2="115.032"
            y2="106.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: "React",
    hoverColor: "#61DAFB",
    svg: (
      <svg viewBox="0 0 100 100" fill="none" aria-hidden="true">
        <ellipse cx="50" cy="50" rx="13" ry="13" fill="currentColor" />
        <ellipse
          cx="50"
          cy="50"
          rx="47"
          ry="18.5"
          stroke="currentColor"
          strokeWidth="5"
          fill="none"
        />
        <ellipse
          cx="50"
          cy="50"
          rx="47"
          ry="18.5"
          stroke="currentColor"
          strokeWidth="5"
          fill="none"
          transform="rotate(60 50 50)"
        />
        <ellipse
          cx="50"
          cy="50"
          rx="47"
          ry="18.5"
          stroke="currentColor"
          strokeWidth="5"
          fill="none"
          transform="rotate(120 50 50)"
        />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    hoverColor: "#3178C6",
    svg: (
      <svg viewBox="0 0 100 100" aria-hidden="true">
        <rect
          width="100"
          height="100"
          rx="8"
          fill="currentColor"
          opacity="0.15"
        />
        <text
          x="50"
          y="72"
          textAnchor="middle"
          fontSize="52"
          fontWeight="bold"
          fill="currentColor"
          fontFamily="monospace"
        >
          TS
        </text>
      </svg>
    ),
  },
  {
    name: "Node.js",
    hoverColor: "#339933",
    svg: (
      <svg viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
        <path
          d="M50 5 L90 27.5 L90 72.5 L50 95 L10 72.5 L10 27.5 Z"
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
        />
        <path
          d="M50 20 L77 35.5 L77 64.5 L50 80 L23 64.5 L23 35.5 Z"
          fill="currentColor"
          opacity="0.2"
        />
        <text
          x="50"
          y="58"
          textAnchor="middle"
          fontSize="18"
          fontWeight="bold"
          fill="currentColor"
          fontFamily="monospace"
        >
          node
        </text>
      </svg>
    ),
  },
  {
    name: "MySQL",
    hoverColor: "#4479A1",
    svg: (
      <svg viewBox="0 0 100 100" fill="none" aria-hidden="true">
        <ellipse
          cx="50"
          cy="28"
          rx="34"
          ry="12"
          stroke="currentColor"
          strokeWidth="4.5"
        />
        <path
          d="M16 28 L16 50 Q16 62 50 62 Q84 62 84 50 L84 28"
          stroke="currentColor"
          strokeWidth="4.5"
          fill="none"
        />
        <path
          d="M16 50 L16 72 Q16 84 50 84 Q84 84 84 72 L84 50"
          stroke="currentColor"
          strokeWidth="4.5"
          fill="none"
        />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    hoverColor: "#06B6D4",
    svg: (
      <svg viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
        <path d="M25 37.5 C30.6 18.8 43.1 9.4 62.5 12.5 C50 25 51.9 35.9 62.5 37.5 C76.6 39.5 83.1 30 87.5 25 C81.9 43.8 69.4 53.1 50 50 C37.5 47.8 33.6 56.6 37.5 62.5 Z" />
        <path d="M12.5 62.5 C18.1 43.8 30.6 34.4 50 37.5 C37.5 50 39.4 60.9 50 62.5 C64.1 64.5 70.6 55 75 50 C69.4 68.8 56.9 78.1 37.5 75 C25 72.8 21.1 81.6 25 87.5 Z" />
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    hoverColor: "#4169E1",
    svg: (
      <svg viewBox="0 0 100 100" fill="none" aria-hidden="true">
        <ellipse
          cx="50"
          cy="30"
          rx="32"
          ry="13"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          d="M18 30 L18 65 Q18 80 50 80 Q82 80 82 65 L82 30"
          stroke="currentColor"
          strokeWidth="4"
        />
        <line
          x1="50"
          y1="43"
          x2="50"
          y2="80"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          d="M50 43 Q65 48 82 42"
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
        />
      </svg>
    ),
  },
  {
    name: "Docker",
    hoverColor: "#2496ED",
    svg: (
      <svg viewBox="0 0 100 100" fill="none" aria-hidden="true">
        <rect
          x="12"
          y="42"
          width="76"
          height="32"
          rx="6"
          stroke="currentColor"
          strokeWidth="4"
        />
        {[24, 38, 52].map((x) => (
          <rect
            key={x}
            x={x}
            y="28"
            width="12"
            height="12"
            rx="2"
            stroke="currentColor"
            strokeWidth="3.5"
          />
        ))}
        <rect
          x="38"
          y="14"
          width="12"
          height="12"
          rx="2"
          stroke="currentColor"
          strokeWidth="3.5"
        />
        <path
          d="M82 54 Q92 50 92 58"
          stroke="currentColor"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="30" cy="58" r="4" fill="currentColor" />
        <circle cx="50" cy="58" r="4" fill="currentColor" />
        <circle cx="70" cy="58" r="4" fill="currentColor" />
      </svg>
    ),
  },
];

/* duplicate for seamless loop */
const TRACK = [...TECHS, ...TECHS];

/* ── Single tech pill ─────────────────────────────────────────── */
function TechPill({ tech }: { tech: Tech }) {
  return (
    <div
      className="tech-pill group flex items-center gap-3 px-4 py-3 rounded-xl shrink-0 cursor-default md:px-5"
      style={
        {
          background: "var(--color-surface)",
          border: "1px solid var(--color-border)",
          "--hover-color": tech.hoverColor,
        } as React.CSSProperties
      }
      title={tech.name}
    >
      {/* icon */}
      <span className="tech-icon w-6 h-6 shrink-0 text-(--color-text-disabled) transition-colors duration-300 group-hover:text-[var(--hover-color)]">
        {tech.svg}
      </span>
      {/* name */}
      <span className="text-[13px] font-semibold whitespace-nowrap text-[var(--color-text-disabled)] transition-colors duration-300 group-hover:text-[var(--foreground)]">
        {tech.name}
      </span>
    </div>
  );
}

/* ── Section ──────────────────────────────────────────────────── */
export default function TechStackSection() {
  return (
    <section
      id="tecnologias"
      aria-labelledby="tech-heading"
      className="section-padding overflow-hidden bg-[var(--background)] relative"
    >
      {/* lateral cyan glow — left edge, emanates from tech stack */}
      <div aria-hidden="true" className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -left-[150px] top-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[var(--glass-surface)] blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 flex flex-col gap-8 md:gap-16 lg:gap-20">
        {/* header — constrained */}
        <div className="section-container flex flex-col items-center text-center gap-6 max-w-[42ch]">
          <div className="badge badge-violet w-fit">
            <span className="glow-dot w-1.5 h-1.5" aria-hidden="true" />
            Stack tecnológico
          </div>

          <h2
            id="tech-heading"
            className="font-clash text-[clamp(1.75rem,3.5vw,2.6rem)] font-normal leading-tight tracking-tight"
            style={{ color: "var(--foreground)" }}
          >
            Tecnología que{" "}
            <span className="text-tech-gradient">ya conoces</span>
          </h2>

          <p className="text-center text-base md:text-xl lg:text-2xl leading-relaxed text-(--color-text-secondary)">
            Producción a escala. Sin vendor lock-in.
          </p>
        </div>

        {/* ── Marquee track ─────────────────────────────────────── */}
        {/*
          Two identical tracks moving in opposite directions give
          depth without extra JS. CSS handles everything via
          @keyframes marquee / marquee-reverse defined below.
        */}
        <div
          className="relative overflow-hidden w-full"
          aria-label="Tecnologías que usamos"
          role="list"
        >
          {/* edge fade masks */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 w-12 z-10 md:w-32"
            style={{
              background:
                "linear-gradient(90deg, var(--background) 0%, transparent 100%)",
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 w-12 z-10 md:w-32"
            style={{
              background:
                "linear-gradient(270deg, var(--background) 0%, transparent 100%)",
            }}
          />

          {/* row 1 — left */}
          <div className="marquee-wrapper flex mb-3">
            <div className="marquee-track flex gap-3 animate-marquee">
              {TRACK.map((tech, i) => (
                <div key={`r1-${i}`} role="listitem">
                  <TechPill tech={tech} />
                </div>
              ))}
            </div>
          </div>

          {/* row 2 — right (offset by half) */}
          <div className="marquee-wrapper flex">
            <div className="marquee-track flex gap-3 animate-marquee-reverse">
              {[...TRACK].reverse().map((tech, i) => (
                <div key={`r2-${i}`} role="listitem">
                  <TechPill tech={tech} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* bottom rule */}
        <div className="section-container">
          <div className="divider-glow-line" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

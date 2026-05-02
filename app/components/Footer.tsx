import Link from "next/link";

/* ─────────────────────────────────────────────────────────────────
   Footer — Nodatix
   4-column grid: brand · navegación · legal · contacto
   bg: var(--color-background) · minimalista · cierre corporativo
───────────────────────────────────────────────────────────────── */

const QUICK_LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Tecnologías", href: "#tecnologias" },
  { label: "Contacto", href: "#contacto" },
];

const LEGAL_LINKS = [
  { label: "Política de privacidad", href: "/privacidad" },
  { label: "Términos de uso", href: "/terminos" },
];

/* ── Inline social icons ──────────────────────────────────────── */
function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

/* ── Reusable column heading ──────────────────────────────────── */
function ColHeading({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="text-xs font-semibold uppercase tracking-widest text-(--color-text-disabled)">
      {children}
    </h4>
  );
}

/* ── Reusable link style ──────────────────────────────────────── */
const linkClass = [
  "text-sm text-(--color-text-secondary)",
  "transition-colors duration-200 hover:text-(--color-text-primary)",
  "w-fit",
].join(" ");

/* ── Social icon button ───────────────────────────────────────── */
function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={[
        "w-8 h-8 rounded-lg flex items-center justify-center",
        "text-(--color-text-disabled)",
        "transition-all duration-200",
        "hover:text-(--color-text-primary) hover:bg-[var(--color-glass-border-subtle)]",
      ].join(" ")}
      style={{ border: "1px solid var(--color-border-subtle)" }}
    >
      {children}
    </a>
  );
}

/* ── Shared social row (rendered in two places) ───────────────── */
function SocialRow({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className ?? ""}`}>
      <SocialLink href="https://linkedin.com/company/nodatix" label="LinkedIn de Nodatix">
        <LinkedInIcon />
      </SocialLink>
      <SocialLink href="https://www.facebook.com/share/1DwYrUaL8p/" label="Facebook de Nodatix">
        <FacebookIcon />
      </SocialLink>
      {/* Instagram URL pendiente — reemplaza href="#" con la URL real */}
      <SocialLink href="#" label="Instagram de Nodatix">
        <InstagramIcon />
      </SocialLink>
    </div>
  );
}

/* ── Footer ───────────────────────────────────────────────────── */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer aria-label="Pie de página Nodatix" style={{ background: "var(--color-background)" }}>
      <div className="section-container">
        {/* top glow divider */}
        <div className="divider-glow-line" aria-hidden="true" />

        {/* ── Main grid ─────────────────────────────────────────── */}
        <div className="grid grid-cols-1 gap-0 py-8 sm:grid-cols-2 sm:gap-10 sm:py-12 lg:grid-cols-4 lg:py-16 divide-y divide-[var(--color-glass-border-subtle)] sm:divide-y-0">

          {/* ── Brand col ───────────────────────────────────────── */}
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col gap-5 items-center sm:items-start pb-6 sm:pb-0">
            {/* logo */}
            <Link
              href="/"
              className="group flex items-center gap-2 w-fit select-none"
              aria-label="Nodatix — ir al inicio"
            >
              <span
                className="glow-dot shrink-0 transition-transform duration-300 group-hover:scale-125"
                aria-hidden="true"
              />
              <span className="text-[1.1rem] font-bold tracking-tight leading-none text-[var(--color-text-primary)]">
                Nodatix
              </span>
            </Link>

            {/* tagline — desktop only */}
            <p className="hidden sm:block text-xs leading-relaxed text-(--color-text-secondary) max-w-[26ch]">
              Desarrollo de software a medida para empresas que quieren escalar
              su operación.
            </p>

            {/* social links — desktop only (mobile shows them in contact block) */}
            <SocialRow className="hidden sm:flex" />
          </div>

          {/* ── Quick links ─────────────────────────────────────── */}
          <nav aria-label="Navegación del footer" className="pt-6 pb-6 sm:pt-0 sm:pb-0">
            <div className="flex flex-col gap-4 items-center sm:items-start">
              <ColHeading>Navegación</ColHeading>
              <ul className="flex flex-col gap-2.5 items-center sm:items-start">
                {QUICK_LINKS.map(({ label, href }) => (
                  <li key={href}>
                    <Link href={href} className={linkClass}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* ── Legal ───────────────────────────────────────────── */}
          <div className="flex flex-col gap-4 items-center sm:items-start pt-6 pb-6 sm:pt-0 sm:pb-0">
            <ColHeading>Legal</ColHeading>
            <ul className="flex flex-col gap-2.5 items-center sm:items-start">
              {LEGAL_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className={linkClass}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact ─────────────────────────────────────────── */}
          <div className="flex flex-col gap-4 items-center sm:items-start pt-6 pb-3 sm:pt-0 sm:pb-0">
            <ColHeading>Contacto</ColHeading>
            <ul className="flex flex-col gap-3 items-center sm:items-start">
              <li>
                <a
                  href="mailto:contact.nodatix@gmail.com"
                  className={`${linkClass} flex items-center gap-2`}
                >
                  <span className="text-(--color-text-disabled) shrink-0" aria-hidden="true">
                    <MailIcon />
                  </span>
                  contact.nodatix@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/+52 1 55 2935 7876"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${linkClass} flex items-center gap-2`}
                >
                  <span className="text-(--color-text-disabled) shrink-0" aria-hidden="true">
                    <WhatsAppIcon />
                  </span>
                  +52 1 5529357876
                </a>
              </li>
            </ul>

            {/* social links — mobile only, grouped with contact */}
            <SocialRow className="sm:hidden" />
          </div>
        </div>

        {/* ── Bottom bar ──────────────────────────────────────────── */}
        <div
          className="flex flex-col items-center justify-between gap-3 border-t mt-2 pt-5 pb-24 sm:mt-0 sm:py-6 sm:flex-row"
          style={{ borderColor: "var(--color-border)" }}
        >
          <p className="text-xs text-(--color-text-disabled)">
            © {year} Nodatix. Todos los derechos reservados.
          </p>
          <p className="hidden sm:block text-xs text-(--color-text-disabled)">
            Hecho con Next.js &amp; TypeScript · México
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Tecnologías", href: "#tecnologias" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={[
          "fixed top-0 inset-x-0 z-50",
          "backdrop-blur-md border-b border-white/[0.05]",
          "transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
          scrolled
            ? "py-3 bg-black/80 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.6)]"
            : "py-5 bg-black/60",
        ].join(" ")}
      >
        <div className="section-container flex items-center justify-between">
          {/* ── Logo ─────────────────────────────────────────── */}
          <Link
            href="/"
            className="group relative flex items-center gap-2.5 select-none"
            aria-label="Nodatix — inicio"
          >
            <span
              className="glow-dot shrink-0 transition-transform duration-300 group-hover:scale-125"
              aria-hidden="true"
            />
            <span className="font-clash text-[1.35rem] font-normal tracking-tight leading-none text-[var(--color-text-primary)]">
              Nodatix
            </span>
          </Link>

          {/* ── Desktop nav ──────────────────────────────────── */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Navegación principal"
          >
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={[
                  "relative px-4 py-2 text-sm font-semibold rounded-lg",
                  "text-[var(--color-text-secondary)]",
                  "transition-colors duration-200",
                  "hover:text-[var(--color-cyan)]",
                  "hover:bg-white/[0.04]",
                  "after:absolute after:inset-x-4 after:bottom-1.5 after:h-px",
                  "after:bg-glow-line after:scale-x-0 after:origin-left",
                  "after:transition-transform after:duration-300",
                  "hover:after:scale-x-100",
                ].join(" ")}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* ── Desktop CTA ──────────────────────────────────── */}
          <div className="hidden md:flex items-center">
            <Link href="#contacto" className="btn-primary text-sm px-5 py-2.5">
              Agendar llamada
            </Link>
          </div>

          {/* ── Hamburger (mobile) ───────────────────────────── */}
          <button
            className={[
              "md:hidden relative w-9 h-9 flex flex-col items-center justify-center gap-[5px]",
              "rounded-lg transition-colors duration-200",
              "hover:bg-white/[0.06] focus-visible:outline focus-visible:outline-2",
              "focus-visible:outline-[var(--color-primary-blue)]",
            ].join(" ")}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span
              className={[
                "block w-5 h-px rounded-full bg-[var(--color-text-primary)]",
                "transition-all duration-300 origin-center",
                menuOpen ? "translate-y-[6px] rotate-45" : "translate-y-0 rotate-0",
              ].join(" ")}
            />
            <span
              className={[
                "block w-5 h-px rounded-full bg-[var(--color-text-primary)]",
                "transition-all duration-300",
                menuOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100",
              ].join(" ")}
            />
            <span
              className={[
                "block w-5 h-px rounded-full bg-[var(--color-text-primary)]",
                "transition-all duration-300 origin-center",
                menuOpen ? "-translate-y-[6px] -rotate-45" : "translate-y-0 rotate-0",
              ].join(" ")}
            />
          </button>
        </div>
      </header>

      {/* ── Mobile menu overlay ────────────────────────────────── */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
        className={[
          "fixed inset-0 z-40 md:hidden",
          "transition-opacity duration-300",
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        ].join(" ")}
      >
        {/* backdrop */}
        <div
          className="absolute inset-0 bg-[rgba(18,18,18,0.85)] backdrop-blur-xl"
          onClick={closeMenu}
          aria-hidden="true"
        />

        {/* panel */}
        <nav
          className={[
            "absolute top-0 inset-x-0",
            "bg-[var(--color-surface)] border-b border-white/[0.07]",
            "px-6 pt-24 pb-8 flex flex-col gap-1",
            "transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
            menuOpen ? "translate-y-0" : "-translate-y-4",
          ].join(" ")}
          aria-label="Menú móvil"
        >
          {NAV_LINKS.map(({ label, href }, i) => (
            <Link
              key={href}
              href={href}
              onClick={closeMenu}
              style={{ animationDelay: `${i * 60}ms` }}
              className={[
                "group flex items-center justify-between",
                "px-4 py-3.5 rounded-xl text-base font-semibold",
                "text-[var(--color-text-secondary)]",
                "hover:text-[var(--color-cyan)] hover:bg-white/[0.05]",
                "border border-transparent hover:border-white/[0.06]",
                "transition-all duration-200",
                menuOpen ? "animate-fade-up" : "",
              ].join(" ")}
            >
              {label}
              <svg
                className="w-4 h-4 opacity-30 -translate-x-1 group-hover:opacity-70 group-hover:translate-x-0 transition-all duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          ))}

          <div className="divider-glow-line my-3" aria-hidden="true" />

          <Link
            href="#contacto"
            onClick={closeMenu}
            className="btn-primary w-full text-center text-sm py-3 mt-1"
          >
            Agendar llamada
          </Link>
        </nav>
      </div>
    </>
  );
}

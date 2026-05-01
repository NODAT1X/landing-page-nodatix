"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Tecnologías", href: "#tecnologias" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
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
        className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 sm:px-6 pt-4"
        style={{ animation: "navbar-enter 0.7s cubic-bezier(0.22,1,0.36,1) both" }}
      >
        {/* Floating pill container */}
        <div
          className={[
            "relative",
            "flex items-center justify-between gap-3 sm:gap-4",
            "w-full max-w-[280px] sm:max-w-[880px] px-4 sm:px-5 py-2.5 rounded-2xl",
            "transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
            scrolled
              ? [
                  "bg-[rgba(10,10,16,0.92)]",
                  "backdrop-blur-2xl",
                  "border border-white/10",
                  "shadow-[0_8px_40px_-4px_rgba(0,0,0,0.75),0_0_0_0.5px_rgba(138,43,226,0.15),inset_0_1px_0_rgba(255,255,255,0.05)]",
                ].join(" ")
              : [
                  "bg-[rgba(18,18,26,0.62)]",
                  "backdrop-blur-xl",
                  "border border-white/7",
                  "shadow-[0_4px_24px_-4px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.03)]",
                ].join(" "),
          ].join(" ")}
        >
          {/* ── Logo ─────────────────────────────────────────── */}
          <Link
            href="/"
            scroll={false}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group relative flex items-center select-none shrink-0"
            aria-label="Nodatix — inicio"
          >
            <Image
              src="/images/Nodatix_logo.png"
              alt="Nodatix"
              width={120}
              height={32}
              priority
              className="h-8 md:h-9 w-auto object-contain"
              style={{ width: "auto" }}
            />
          </Link>

          {/* ── Desktop nav ──────────────────────────────────── */}
          <nav
            className="hidden md:flex items-center gap-0.5"
            aria-label="Navegación principal"
          >
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={[
                  "relative px-3.5 py-1.5 text-sm font-medium rounded-lg",
                  "text-(--color-text-secondary)",
                  "transition-colors duration-200",
                  "hover:text-(--color-text-primary) hover:bg-white/5",
                  "after:absolute after:inset-x-3.5 after:bottom-1 after:h-px",
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
          <div className="hidden md:flex items-center shrink-0">
            <Link href="#contacto" className="btn-primary btn-light text-sm px-5 py-2">
              Agendar llamada
            </Link>
          </div>

          {/* ── Hamburger (mobile) ───────────────────────────── */}
          <button
            type="button"
            className={[
              "md:hidden relative flex flex-col items-center justify-center gap-[5px]",
              "w-11 h-11 rounded-lg transition-colors duration-200",
              "hover:bg-white/6",
              "focus-visible:outline focus-visible:outline-2",
              "focus-visible:outline-(--color-primary-blue)",
            ].join(" ")}
            style={{ touchAction: "manipulation" }}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span
              className={[
                "block w-5 h-px rounded-full bg-(--color-text-primary)",
                "transition-all duration-300 origin-center",
                menuOpen ? "translate-y-1.5 rotate-45" : "translate-y-0 rotate-0",
              ].join(" ")}
            />
            <span
              className={[
                "block w-5 h-px rounded-full bg-(--color-text-primary)",
                "transition-all duration-300",
                menuOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100",
              ].join(" ")}
            />
            <span
              className={[
                "block w-5 h-px rounded-full bg-(--color-text-primary)",
                "transition-all duration-300 origin-center",
                menuOpen ? "-translate-y-1.5 -rotate-45" : "translate-y-0 rotate-0",
              ].join(" ")}
            />
          </button>

          {/* ── Mobile dropdown menu ─────────────────────────── */}
          <div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menú de navegación"
            className={[
              "md:hidden absolute top-full left-0 right-0 mt-2",
              "rounded-2xl overflow-hidden",
              "bg-[rgba(10,10,16,0.96)] backdrop-blur-2xl",
              "border border-white/9",
              "shadow-[0_12px_40px_-4px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.05)]",
              "transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
              menuOpen
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-3 pointer-events-none",
            ].join(" ")}
          >
            <nav className="flex flex-col p-3 gap-1" aria-label="Menú móvil">
              {NAV_LINKS.map(({ label, href }, i) => (
                <Link
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  style={{
                    transitionDelay: menuOpen ? `${i * 50}ms` : "0ms",
                  }}
                  className={[
                    "group flex items-center justify-between",
                    "px-4 py-3 rounded-xl text-sm font-medium",
                    "text-(--color-text-secondary)",
                    "hover:text-(--color-text-primary) hover:bg-white/5",
                    "border border-transparent hover:border-white/6",
                    "transition-all duration-200",
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

              <div className="divider-glow-line my-2" aria-hidden="true" />

              <Link
                href="#contacto"
                onClick={closeMenu}
                className="btn-primary btn-light text-center text-sm py-2.5"
              >
                Agendar llamada
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile backdrop — only mounted when menu is open */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden bg-black/40 backdrop-blur-sm"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
}

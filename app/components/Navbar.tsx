"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "./ThemeProvider";

function SunIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="2" x2="12" y2="4" />
      <line x1="12" y1="20" x2="12" y2="22" />
      <line x1="4.93" y1="4.93" x2="6.34" y2="6.34" />
      <line x1="17.66" y1="17.66" x2="19.07" y2="19.07" />
      <line x1="2" y1="12" x2="4" y2="12" />
      <line x1="20" y1="12" x2="22" y2="12" />
      <line x1="4.93" y1="19.07" x2="6.34" y2="17.66" />
      <line x1="17.66" y1="6.34" x2="19.07" y2="4.93" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

const NAV_LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Tecnologías", href: "#tecnologias" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
            "navbar-pill relative",
            "flex items-center justify-between gap-3 sm:gap-4",
            "w-full max-w-[280px] sm:max-w-[880px] px-4 sm:px-5 py-2.5 rounded-2xl",
            "transition-all duration-500 ease-in-out",
            scrolled
              ? [
                  "navbar-pill--scrolled bg-[rgba(10,10,16,0.92)]",
                  "backdrop-blur-2xl",
                  "border border-white/8",
                  "shadow-[0_8px_40px_-4px_rgba(0,0,0,0.75),0_0_0_0.5px_rgba(255,255,255,0.08),inset_0_1px_0_rgba(255,255,255,0.05)]",
                ].join(" ")
              : [
                  "bg-[rgba(18,18,26,0.62)]",
                  "backdrop-blur-xl",
                  "border border-white/6",
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
                  "text-white/65",
                  "transition-colors duration-200",
                  "hover:text-white hover:bg-white/6",
                  "after:absolute after:inset-x-3.5 after:bottom-1 after:h-px",
                  "after:bg-white/40 after:scale-x-0 after:origin-left",
                  "after:transition-transform after:duration-300",
                  "hover:after:scale-x-100",
                ].join(" ")}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* ── Desktop CTA + Theme toggle ───────────────────── */}
          <div className="hidden md:flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
              className={[
                "flex items-center justify-center w-7 h-7 rounded-md",
                "text-white/45",
                "transition-all duration-200",
                "hover:text-white hover:bg-white/6",
              ].join(" ")}
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>

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
              "hover:bg-white/8",
              "focus-visible:outline focus-visible:outline-2",
              "focus-visible:outline-white/50",
            ].join(" ")}
            style={{ touchAction: "manipulation" }}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span
              className={[
                "block w-5 h-px rounded-full bg-white",
                "transition-all duration-300 origin-center",
                menuOpen ? "translate-y-1.5 rotate-45" : "translate-y-0 rotate-0",
              ].join(" ")}
            />
            <span
              className={[
                "block w-5 h-px rounded-full bg-white",
                "transition-all duration-300",
                menuOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100",
              ].join(" ")}
            />
            <span
              className={[
                "block w-5 h-px rounded-full bg-white",
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
              "border border-[var(--color-glass-border)]",
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
                    "text-white/65",
                    "hover:text-white hover:bg-white/8",
                    "border border-transparent hover:border-white/10",
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

              {/* Theme toggle (mobile) */}
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
                className={[
                  "flex items-center justify-between",
                  "px-4 py-3 rounded-xl text-sm font-medium",
                  "text-white/65",
                  "hover:text-white hover:bg-white/8",
                  "border border-transparent hover:border-white/10",
                  "transition-all duration-200 w-full",
                ].join(" ")}
              >
                <span>{theme === "dark" ? "Modo claro" : "Modo oscuro"}</span>
                <span className="opacity-60">
                  {theme === "dark" ? <SunIcon /> : <MoonIcon />}
                </span>
              </button>

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

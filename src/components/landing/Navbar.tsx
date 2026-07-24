"use client";

import Link from "next/link";
import { assetPath } from "@/lib/base-path";
import { useEffect, useState } from "react";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#casos", label: "Casos" },
  { href: "#proceso", label: "Proceso" },
  { href: "#por-que", label: "Por qué Hilo" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function onResize() {
      if (window.innerWidth > 900) setMenuOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav id="nav" className={`${scrolled ? "scrolled" : ""}${menuOpen ? " menu-open" : ""}`}>
      <Link href="/" className="nav-logo" onClick={closeMenu}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={assetPath("/logo-hilo.png")} alt="Hilo" className="nav-logo-img" />
      </Link>

      <ul className="nav-links">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="nav-actions">
        <a href="#contacto" className="nav-cta" onClick={closeMenu}>
          Hablemos
        </a>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={menuOpen}
          aria-controls="nav-menu"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </div>

      <div id="nav-menu" className="nav-mobile-panel">
        <ul className="nav-mobile-links">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contacto" className="nav-mobile-cta" onClick={closeMenu}>
              Hablemos →
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { HiloLogo } from "./HiloLogo";

const links = [
  { href: "#trabajo", label: "Servicios" },
  { href: "#como", label: "Cómo trabajamos" },
  { href: "#estudio", label: "Por qué nosotros" },
  { href: "#faq", label: "Preguntas" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onResize() {
      if (window.innerWidth > 720) setMenuOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav id="nav" className={menuOpen ? "menu-open" : ""}>
      <div className="header-inner">
        <Link href="/" className="nav-logo" aria-label="hilo" onClick={closeMenu}>
          <HiloLogo size={36} />
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
            Contanos
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
              Contanos →
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

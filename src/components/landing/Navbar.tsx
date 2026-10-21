"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { HiloLogo } from "./HiloLogo";

const links = [
  { href: "#trabajos", label: "Trabajos" },
  { href: "#trabajo", label: "Servicios" },
  { href: "#como", label: "Cómo trabajamos" },
  { href: "#nosotros", label: "Quiénes somos" },
  { href: "#faq", label: "Preguntas" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const pinned = useRef<string | null>(null);

  useEffect(() => {
    function onResize() {
      if (window.innerWidth > 1120) setMenuOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((section): section is HTMLElement => section !== null);
    const seen = new Map<string, IntersectionObserverEntry>();

    if (links.some((link) => link.href === window.location.hash)) {
      setActive(window.location.hash);
    }

    function visibleSection() {
      const visible = [...seen.values()].filter((entry) => entry.isIntersecting);
      if (visible.length === 0) {
        setActive("");
        return;
      }
      visible.sort(
        (a, b) => b.intersectionRatio - a.intersectionRatio || a.boundingClientRect.top - b.boundingClientRect.top,
      );
      setActive(`#${visible[0].target.id}`);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => seen.set(entry.target.id, entry));
        if (pinned.current) {
          const pin = seen.get(pinned.current.slice(1));
          if (pin?.isIntersecting) pinned.current = null;
          else return;
        }
        visibleSection();
      },
      { rootMargin: "-18% 0px -52% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((section) => observer.observe(section));

    function releasePin() {
      pinned.current = null;
      visibleSection();
    }

    window.addEventListener("scrollend", releasePin);
    return () => {
      observer.disconnect();
      window.removeEventListener("scrollend", releasePin);
    };
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  function selectSection(href: string) {
    pinned.current = href;
    setActive(href);
    closeMenu();
    window.setTimeout(() => {
      if (pinned.current === href) pinned.current = null;
    }, 1200);
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
              <a
                href={link.href}
                aria-current={active === link.href ? "true" : undefined}
                onClick={() => selectSection(link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <a href="#contacto" className="nav-cta" onClick={closeMenu}>
            Hablemos <span className="btn-arrow">→</span>
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
              <a
                href={link.href}
                aria-current={active === link.href ? "true" : undefined}
                onClick={() => selectSection(link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contacto" className="nav-mobile-cta" onClick={closeMenu}>
              Hablemos <span className="btn-arrow">→</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

"use client";

import Link from "next/link";
import { assetPath } from "@/lib/base-path";
import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav id="nav" className={scrolled ? "scrolled" : undefined}>
      <Link href="/" className="nav-logo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={assetPath("/logo-hilo.png")} alt="Hilo" className="nav-logo-img" />
      </Link>

      <ul className="nav-links">
        <li>
          <a href="#servicios">Servicios</a>
        </li>
        <li>
          <a href="#como">Cómo trabajamos</a>
        </li>
        <li>
          <a href="#diferencial">Diferencial</a>
        </li>
      </ul>

      <a href="#contacto" className="nav-cta">
        Contacto
      </a>
    </nav>
  );
}

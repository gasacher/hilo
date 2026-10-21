"use client";

import { useEffect, useState } from "react";

export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      const hero = document.getElementById("hero");
      if (!hero) return;
      setVisible(hero.getBoundingClientRect().bottom < 120);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`sticky-cta-bar${visible ? " visible" : ""}`} aria-hidden={!visible}>
      <a href="#contacto" className="sticky-cta-primary">
        Contanos →
      </a>
      {/* TODO: verificar que la cuenta sea nuestra */}
      <a
        href="https://www.instagram.com/hilo.studio/"
        className="sticky-cta-secondary"
        target="_blank"
        rel="noreferrer"
      >
        @hilo.studio
      </a>
    </div>
  );
}

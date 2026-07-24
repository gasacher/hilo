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
        Hablemos →
      </a>
      <a
        href="mailto:hola@hilo.studio?subject=Consulta%20desde%20hilo.studio"
        className="sticky-cta-secondary"
      >
        hola@hilo.studio
      </a>
    </div>
  );
}

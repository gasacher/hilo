"use client";

import { useEffect, useState } from "react";

export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      const hero = document.getElementById("hero");
      if (!hero) return;
      setVisible(hero.getBoundingClientRect().bottom < 0);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#contacto"
      className={`sticky-cta${visible ? " visible" : ""}`}
      aria-hidden={!visible}
    >
      Hablemos →
    </a>
  );
}

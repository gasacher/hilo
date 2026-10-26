"use client";

import { useEffect, useState } from "react";
import { HiloGlyph } from "./HiloIcon";
import { HeroTypeword } from "./HeroTypeword";

function HeroMark() {
  const [flow, setFlow] = useState(false);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setFlow(!motion.matches);
    apply();
    motion.addEventListener("change", apply);
    return () => motion.removeEventListener("change", apply);
  }, []);

  return (
    <svg className="hero-nodes" viewBox="0 0 100 100" fill="none" aria-hidden>
      <HiloGlyph glow flow={flow} />
    </svg>
  );
}

export function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg" aria-hidden>
        <div className="hero-blob" />
      </div>
      <div className="hero-inner">
        <div className="hero-content">
          <p className="hero-kicker">HILO · ESTUDIO · BUENOS AIRES</p>
          <h1>
            <span className="sr-only">
              Resolvemos lo que te frena en tus procesos, tus ventas, tu web y tu día a día.
            </span>
            <span aria-hidden="true">
              <span className="hero-line">
                Resolvemos lo que te <span className="ink-violet">frena</span>
              </span>
              <br />
              <span className="hero-line">
                en <HeroTypeword />
              </span>
            </span>
          </h1>
          <p className="hero-sub">
            Eso que hacés a mano, lo que no te deja crecer, lo que no se ve. Contanos y del resto nos encargamos nosotros.
          </p>
          <a href="#contacto" className="btn-primary">
            Hablemos <span className="btn-arrow">↗</span>
          </a>
        </div>
        <HeroMark />
      </div>
    </section>
  );
}

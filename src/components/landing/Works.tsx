"use client";

import { FocusEvent, PointerEvent, useCallback, useEffect, useRef, useState } from "react";
import { assetPath } from "@/lib/base-path";

const works: {
  num: string;
  name: string;
  sub: string;
  tags: string;
  status: string;
  href?: string;
  image?: string;
  alt?: string;
  mobile?: string;
  mobileAlt?: string;
  lines: { label: string; text: string }[];
}[] = [
  {
    num: "01",
    name: "Fujeira",
    sub: "Marca propia",
    tags: "E-commerce · Marca propia",
    status: "Lanzado",
    href: "https://fujeiraretrostore.com/",
    image: "/trabajos/fujeira.webp",
    alt: "Inicio de la tienda Fujeira: remeras de fútbol de diseño propio, con la serie Los Diablos Rojos y el botón de compra.",
    mobile: "/trabajos/fujeira_mobile.webp",
    mobileAlt: "Versión móvil de la tienda Fujeira, con el menú, la serie Los Diablos Rojos y el botón de compra.",
    lines: [
      { label: "Antes", text: "queríamos probar en carne propia lo que ofrecemos." },
      { label: "Qué hicimos", text: "nuestra propia tienda de e-commerce." },
      { label: "Cómo quedó", text: "publicada y vendiendo online." },
    ],
  },
  {
    num: "02",
    name: "El Femenino Hub",
    sub: "Sitio web",
    tags: "Sitio web",
    status: "Lanzado",
    href: "https://elfemeninohub.com/",
    image: "/trabajos/elfemeninohub.webp",
    alt: "Inicio de El Femenino Hub, un espacio para emprendedoras, con el título principal y el menú del sitio.",
    mobile: "/trabajos/elfemeninohub_mobile.webp",
    mobileAlt: "Versión móvil de El Femenino Hub, con el menú, el título principal y el botón de contacto.",
    lines: [
      { label: "Antes", text: "no tenía dónde mostrarse ni recibir consultas." },
      { label: "Qué hicimos", text: "el sitio web." },
      { label: "Cómo quedó", text: "publicado y con un lugar para recibir consultas." },
    ],
  },
  {
    num: "03",
    name: "Velitas de la Luna",
    sub: "E-commerce a medida",
    tags: "E-commerce · Laravel",
    status: "En desarrollo",
    href: "https://gasacher.github.io/Velitas-LunaV2/",
    image: "/trabajos/velitas.webp",
    alt: "Inicio de Velitas de la Luna, con el título Encendé tu esencia y la colección de velas artesanales.",
    mobile: "/trabajos/velitas_mobile.webp",
    mobileAlt: "Versión móvil de Velitas de la Luna, con el título Encendé tu esencia y la colección de velas.",
    lines: [
      { label: "Antes", text: "necesitaba vender con su propia lógica." },
      { label: "Qué hacemos", text: "e-commerce a medida en Laravel." },
    ],
  },
  {
    num: "04",
    name: "FUZZ Equipamientos",
    sub: "Catálogo y panel",
    tags: "Catálogo · Panel de gestión",
    status: "En desarrollo",
    href: "https://gasacher.github.io/fuzz_equipamientos/",
    image: "/trabajos/fuzz.webp",
    alt: "Inicio de FUZZ Equipamientos, fabricante de equipos para gastronomía, con el catálogo y los datos de contacto.",
    mobile: "/trabajos/fuzz_mobile.webp",
    mobileAlt: "Versión móvil de FUZZ Equipamientos, con el catálogo de equipos y los datos de contacto.",
    lines: [
      { label: "Antes", text: "catálogo y stock dispersos." },
      { label: "Qué hacemos", text: "catálogo online y panel de gestión." },
      { label: "Cómo va", text: "lo van a actualizar desde el panel." },
    ],
  },
  {
    num: "05",
    name: "Cámara empresarial del sector pagos",
    sub: "Reportería con IA",
    tags: "Reportería · Automatización",
    status: "Confidencial",
    image: "/trabajos/camara_desktop.webp",
    alt: "Reporte mensual de métricas de redes de una cámara empresarial, con datos sensibles difuminados.",
    lines: [
      { label: "Antes", text: "el reporte mensual se armaba a mano." },
      { label: "Qué hicimos", text: "automatizamos la reportería con IA." },
      { label: "Cómo quedó", text: "el reporte sale solo cada mes." },
    ],
  },
];

const AUTOPLAY_MS = 6000;
const RESUME_MS = 2500;

function pad(value: number) {
  return String(value).padStart(2, "0");
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function siteDomain(href: string) {
  return new URL(href).hostname.replace(/^www\./, "");
}

function PhoneMock({ image, alt }: { image: string; alt: string }) {
  return (
    <div className="work-phone">
      <span className="work-phone-island" aria-hidden="true" />
      <img
        src={assetPath(image)}
        alt={alt}
        width={390}
        height={844}
        loading="lazy"
        decoding="async"
        draggable={false}
      />
    </div>
  );
}

function BrowserFrame({
  image,
  alt,
  mobile,
  mobileAlt,
  domain,
  eager,
}: {
  image?: string;
  alt?: string;
  mobile?: string;
  mobileAlt?: string;
  domain?: string;
  eager?: boolean;
}) {
  return (
    <div className={mobile && mobileAlt ? "work-visual" : "work-visual is-solo"}>
      <div className="work-browser">
        <div className="work-browser-bar" aria-hidden="true">
          <span />
          <span />
          <span />
          <div className="work-browser-url">{domain}</div>
        </div>
        {image && alt ? (
          <div className="work-browser-stage">
            <img
              src={assetPath(image)}
              alt={alt}
              width={1440}
              height={810}
              loading={eager ? "eager" : "lazy"}
              decoding="async"
              draggable={false}
            />
          </div>
        ) : (
          <div className="work-browser-stage is-placeholder" aria-hidden="true" />
        )}
      </div>
      {mobile && mobileAlt ? <PhoneMock image={mobile} alt={mobileAlt} /> : null}
    </div>
  );
}

export function Works() {
  const sectionRef = useRef<HTMLElement>(null);
  const viewport = useRef<HTMLDivElement>(null);
  const drag = useRef<{ x: number; left: number } | null>(null);
  const programmatic = useRef<number | null>(null);
  const indexRef = useRef(0);
  const goRef = useRef<(next: number, wrap?: boolean) => void>(() => {});
  const reasons = useRef(new Set<string>());
  const resumeTimer = useRef(0);
  const reducedRef = useRef(false);
  const userPausedRef = useRef(false);
  const [index, setIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const last = works.length - 1;
  indexRef.current = index;

  const hold = useCallback((reason: string) => {
    window.clearTimeout(resumeTimer.current);
    reasons.current.add(reason);
    setAutoplay(false);
  }, []);

  const release = useCallback((reason: string) => {
    reasons.current.delete(reason);
    window.clearTimeout(resumeTimer.current);
    if (reducedRef.current || userPausedRef.current || reasons.current.size > 0) {
      setAutoplay(false);
      return;
    }
    resumeTimer.current = window.setTimeout(() => {
      if (!reducedRef.current && !userPausedRef.current && reasons.current.size === 0) setAutoplay(true);
    }, RESUME_MS);
  }, []);

  function nearestIndex() {
    const el = viewport.current;
    if (!el) return 0;
    const slides = [...el.querySelectorAll<HTMLElement>(".work-story")];
    let nearest = 0;
    let best = Infinity;
    slides.forEach((slide, i) => {
      const distance = Math.abs(slide.offsetLeft - el.scrollLeft);
      if (distance < best) {
        best = distance;
        nearest = i;
      }
    });
    return nearest;
  }

  function go(next: number, wrap = false) {
    const el = viewport.current;
    if (!el) return;
    const slides = [...el.querySelectorAll<HTMLElement>(".work-story")];
    const count = slides.length;
    if (!count) return;
    const target = wrap ? ((next % count) + count) % count : Math.max(0, Math.min(count - 1, next));
    if (target === indexRef.current && Math.abs(el.scrollLeft - slides[target].offsetLeft) < 2) {
      programmatic.current = null;
      return;
    }
    programmatic.current = target;
    setIndex(target);
    el.scrollTo({
      left: slides[target].offsetLeft,
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
  }

  goRef.current = go;

  function interact() {
    hold("interact");
    release("interact");
  }

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    function apply() {
      reducedRef.current = media.matches;
      setReduced(media.matches);
      if (!media.matches) return;
      window.clearTimeout(resumeTimer.current);
      setAutoplay(false);
    }
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) release("offscreen");
      else hold("offscreen");
    }, { threshold: 0.35 });
    observer.observe(node);
    return () => observer.disconnect();
  }, [hold, release]);

  useEffect(() => {
    function onVisibility() {
      if (document.hidden) hold("hidden");
      else release("hidden");
    }
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, [hold, release]);

  useEffect(() => () => window.clearTimeout(resumeTimer.current), []);

  useEffect(() => {
    const el = viewport.current;
    if (!el) return;
    const scroller = el;

    function sync() {
      const slides = [...scroller.querySelectorAll<HTMLElement>(".work-story")];
      let nearest = 0;
      let best = Infinity;
      slides.forEach((slide, i) => {
        const distance = Math.abs(slide.offsetLeft - scroller.scrollLeft);
        if (distance < best) {
          best = distance;
          nearest = i;
        }
      });
      const target = programmatic.current;
      if (target !== null) {
        const distance = Math.abs((slides[target]?.offsetLeft ?? 0) - scroller.scrollLeft);
        if (distance > 3) return;
        programmatic.current = null;
        setIndex(target);
        return;
      }
      hold("scroll");
      release("scroll");
      setIndex((current) => (current === nearest ? current : nearest));
    }

    function settle() {
      if (programmatic.current === null) return;
      const target = programmatic.current;
      programmatic.current = null;
      setIndex(target);
    }

    scroller.addEventListener("scroll", sync, { passive: true });
    scroller.addEventListener("scrollend", settle);
    return () => {
      scroller.removeEventListener("scroll", sync);
      scroller.removeEventListener("scrollend", settle);
    };
  }, [hold, release]);

  useEffect(() => {
    if (!autoplay) return;
    const timer = window.setTimeout(() => {
      goRef.current(indexRef.current + 1, true);
    }, AUTOPLAY_MS);
    return () => window.clearTimeout(timer);
  }, [autoplay, index]);

  function onPointerDown(event: PointerEvent<HTMLDivElement>) {
    programmatic.current = null;
    hold("pointer");
    const finish = () => {
      window.removeEventListener("pointerup", finish);
      window.removeEventListener("pointercancel", finish);
      if (drag.current) {
        drag.current = null;
        viewport.current?.classList.remove("is-dragging");
        go(nearestIndex());
      }
      release("pointer");
    };
    window.addEventListener("pointerup", finish);
    window.addEventListener("pointercancel", finish);
    if (event.pointerType !== "mouse" || event.button !== 0) return;
    if (event.target instanceof Element && event.target.closest("a, button")) return;
    const el = event.currentTarget;
    drag.current = { x: event.clientX, left: el.scrollLeft };
    el.setPointerCapture(event.pointerId);
    el.classList.add("is-dragging");
  }

  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    if (!drag.current) return;
    event.currentTarget.scrollLeft = drag.current.left - (event.clientX - drag.current.x);
  }

  function onCarouselBlur(event: FocusEvent<HTMLDivElement>) {
    const next = event.relatedTarget;
    if (next instanceof Node && event.currentTarget.contains(next)) return;
    release("focus");
  }

  function togglePause() {
    const next = !userPausedRef.current;
    userPausedRef.current = next;
    setUserPaused(next);
    if (next) {
      window.clearTimeout(resumeTimer.current);
      setAutoplay(false);
      return;
    }
    reasons.current.delete("focus");
    reasons.current.delete("hover");
    if (!reducedRef.current && reasons.current.size === 0) {
      resumeTimer.current = window.setTimeout(() => {
        if (!reducedRef.current && !userPausedRef.current && reasons.current.size === 0) setAutoplay(true);
      }, RESUME_MS);
    }
  }

  return (
    <section
      id="trabajos"
      ref={sectionRef}
      className={autoplay ? "is-playing" : undefined}
      aria-labelledby="trabajos-title"
    >
      <div className="reveal">
        <p className="section-marker">01 Trabajos</p>
        <h2 id="trabajos-title">
          Trabajos<span className="ink-violet">.</span>
        </h2>
      </div>

      <div
        className="work-carousel"
        onMouseEnter={() => hold("hover")}
        onMouseLeave={() => release("hover")}
        onFocusCapture={() => hold("focus")}
        onBlurCapture={onCarouselBlur}
      >
      <div
        className="work-viewport"
        ref={viewport}
        id="trabajos-carrusel"
        tabIndex={0}
        aria-roledescription="carrusel"
        aria-label="Trabajos"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") {
            event.preventDefault();
            interact();
            go(indexRef.current + 1);
          }
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            interact();
            go(indexRef.current - 1);
          }
        }}
      >
        {works.map((work, slide) => (
          <article key={work.name} className="work-story" aria-label={`${work.num} ${work.name}`}>
            <div className="work-copy">
              <div className="work-heading">
                <span className="work-num">{work.num}</span>
                <h3 className="work-name">{work.name}</h3>
              </div>
              <p className="work-sub">{work.sub}</p>
              <p className="work-tags">{work.tags}</p>
              <p className={`work-pill ${work.status === "Lanzado" ? "is-live" : work.status === "Confidencial" ? "is-confidential" : "is-wip"}`}>
                <span className="work-dot" aria-hidden="true" />
                {work.status}
              </p>
              <dl className="work-lines">
                {work.lines.map((line) => (
                  <div key={line.label}>
                    <dt>{line.label}</dt>
                    <dd>{line.text}</dd>
                  </div>
                ))}
              </dl>
              {work.href ? (
                <a className="work-link" href={work.href} target="_blank" rel="noopener" aria-label={`Ver sitio de ${work.name}`}>
                  Ver sitio <span aria-hidden="true">↗</span>
                </a>
              ) : null}
            </div>
            <BrowserFrame
              image={work.image}
              alt={work.alt}
              mobile={work.mobile}
              mobileAlt={work.mobileAlt}
              domain={work.href ? siteDomain(work.href) : undefined}
              eager={slide === 0}
            />
          </article>
        ))}
      </div>

      <div className="work-nav">
        <div className="work-nav-group">
          <button
            type="button"
            className="work-arrow"
            aria-label="Trabajo anterior"
            onClick={() => {
              interact();
              go(index - 1);
            }}
            disabled={index === 0}
          >
            <span aria-hidden="true">←</span>
          </button>
          <p className="work-count" aria-live={autoplay ? "off" : "polite"} aria-atomic="true">
            <span aria-hidden="true">
              {pad(index + 1)}/{pad(works.length)}
            </span>
            <span className="sr-only">
              Trabajo {index + 1} de {works.length}
            </span>
          </p>
          <button
            type="button"
            className="work-arrow"
            aria-label="Trabajo siguiente"
            onClick={() => {
              interact();
              go(index + 1);
            }}
            disabled={index === last}
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
        <p className="work-hint">Deslizá para ver</p>
        <div className="work-dots">
          {works.map((work, i) => (
            <button
              key={work.num}
              type="button"
              className="work-dotbtn"
              aria-label={`Ir a ${work.name}`}
              aria-current={i === index ? "true" : undefined}
              onClick={() => {
                interact();
                go(i);
              }}
            />
          ))}
          {reduced ? null : (
            <button
              type="button"
              className="work-pause"
              aria-pressed={userPaused}
              aria-controls="trabajos-carrusel"
              onClick={togglePause}
            >
              <span aria-hidden="true">{userPaused ? "▶" : "❚❚"}</span>
              <span className="sr-only">{userPaused ? "Reanudar carrusel" : "Pausar carrusel"}</span>
            </button>
          )}
        </div>
      </div>
      </div>
    </section>
  );
}

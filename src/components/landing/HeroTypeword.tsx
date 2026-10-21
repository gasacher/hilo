"use client";

import { useEffect, useState } from "react";

const words = ["tus procesos", "tus ventas", "tu web", "tu día a día"];

export function HeroTypeword() {
  const [text, setText] = useState(words[0]);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches) {
      setText(words[0]);
      return;
    }

    let wordIndex = 0;
    let count = words[0].length;
    let deleting = false;
    let timer = 0;

    const tick = () => {
      const word = words[wordIndex];
      if (!deleting) {
        count += 1;
        setText(word.slice(0, count));
        if (count >= word.length) {
          deleting = true;
          timer = window.setTimeout(tick, 1400);
          return;
        }
        timer = window.setTimeout(tick, 85);
        return;
      }

      count -= 1;
      setText(word.slice(0, Math.max(count, 0)));
      if (count <= 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        count = 0;
        timer = window.setTimeout(tick, 320);
        return;
      }
      timer = window.setTimeout(tick, 48);
    };

    timer = window.setTimeout(tick, 900);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <span className="hero-type" aria-live="off">
      {text}
      <span className="hero-caret" aria-hidden="true" />
    </span>
  );
}

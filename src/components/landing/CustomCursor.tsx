"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    function sync() {
      setEnabled(finePointer.matches && !reduceMotion.matches);
    }

    sync();
    finePointer.addEventListener("change", sync);
    reduceMotion.addEventListener("change", sync);
    return () => {
      finePointer.removeEventListener("change", sync);
      reduceMotion.removeEventListener("change", sync);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const cursor = document.getElementById("hilo-cursor");
    const ring = document.getElementById("hilo-cursor-ring");
    if (!cursor || !ring) return;

    const cursorNode = cursor;
    const ringNode = ring;

    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;
    let frameId = 0;

    function onMouseMove(e: MouseEvent) {
      mx = e.clientX;
      my = e.clientY;
      cursorNode.style.left = `${mx - 4}px`;
      cursorNode.style.top = `${my - 4}px`;
      const overLink = Boolean(
        (e.target as Element | null)?.closest?.(
          "a, button, summary, input, textarea, select"
        )
      );
      ringNode.classList.toggle("is-hover", overLink);
    }

    function animateRing() {
      rx += (mx - rx - 16) * 0.12;
      ry += (my - ry - 16) * 0.12;
      ringNode.style.left = `${rx}px`;
      ringNode.style.top = `${ry}px`;
      frameId = requestAnimationFrame(animateRing);
    }

    document.addEventListener("mousemove", onMouseMove);
    frameId = requestAnimationFrame(animateRing);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div className="cursor" id="hilo-cursor" />
      <div className="cursor-ring" id="hilo-cursor-ring" />
    </>
  );
}

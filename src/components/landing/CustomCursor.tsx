"use client";

import { useEffect } from "react";

export function CustomCursor() {
  useEffect(() => {
    const cursor = document.getElementById("hilo-cursor");
    const ring = document.getElementById("hilo-cursor-ring");
    if (!cursor || !ring) return;

    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;
    let frameId = 0;

    function onMouseMove(e: MouseEvent) {
      mx = e.clientX;
      my = e.clientY;
      cursor!.style.left = `${mx - 4}px`;
      cursor!.style.top = `${my - 4}px`;
    }

    function animateRing() {
      rx += (mx - rx - 16) * 0.12;
      ry += (my - ry - 16) * 0.12;
      ring!.style.left = `${rx}px`;
      ring!.style.top = `${ry}px`;
      frameId = requestAnimationFrame(animateRing);
    }

    document.addEventListener("mousemove", onMouseMove);
    frameId = requestAnimationFrame(animateRing);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <>
      <div className="cursor" id="hilo-cursor" />
      <div className="cursor-ring" id="hilo-cursor-ring" />
    </>
  );
}

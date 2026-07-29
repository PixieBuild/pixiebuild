"use client";

import { useEffect, useRef } from "react";

/**
 * Properties are written onto the reveal layer itself, not a parent: the
 * utility declares its own defaults, which would shadow anything inherited.
 */
export function HeroBackdrop() {
  const revealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = revealRef.current;
    if (!layer) return;

    const fine = window.matchMedia("(pointer: fine)");
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || calm.matches) return;

    let frame = 0;

    const onMove = (event: PointerEvent) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const bounds = layer.getBoundingClientRect();
        layer.style.setProperty("--reveal-x", `${event.clientX - bounds.left}px`);
        layer.style.setProperty("--reveal-y", `${event.clientY - bounds.top}px`);
        layer.style.setProperty("--reveal-opacity", "1");
      });
    };

    const onLeave = () => {
      layer.style.setProperty("--reveal-opacity", "0");
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div aria-hidden className="absolute inset-0">
      <div className="bg-hero-glow absolute inset-0" />
      <div className="bg-blueprint absolute inset-0" />
      <div ref={revealRef} className="bg-blueprint-reveal absolute inset-0" />
    </div>
  );
}

"use client";

import { useEffect, useRef } from "react";

/**
 * Properties are written onto the reveal layer itself, not a parent: the
 * utility declares its own defaults, which would shadow anything inherited.
 * Both layers are fixed, so pointer coordinates are already layer-relative.
 */
export function PageBackdrop() {
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
        layer.style.setProperty("--reveal-x", `${event.clientX}px`);
        layer.style.setProperty("--reveal-y", `${event.clientY}px`);
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
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div className="bg-grid absolute inset-0" />
      <div ref={revealRef} className="bg-blueprint-reveal absolute inset-0" />
    </div>
  );
}

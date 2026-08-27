"use client";

import Lenis from "lenis";
import { useEffect } from "react";

/* How closely the page tracks the wheel. Lower glides longer; this is high
   enough that a notch still lands about where the pointer expects it. */
const lerp = 0.12;

export function SmoothScroll() {
  useEffect(() => {
    const still = window.matchMedia("(prefers-reduced-motion: reduce)");

    let lenis: Lenis | null = null;

    const start = () => {
      if (lenis || still.matches) return;
      lenis = new Lenis({
        lerp,
        autoRaf: true,
        anchors: true,
      });
    };

    /* Reduced motion gets the browser's own scrolling back, not a slower
       glide: the request is for no invented movement at all. */
    const stop = () => {
      lenis?.destroy();
      lenis = null;
    };

    const sync = () => (still.matches ? stop() : start());

    sync();
    still.addEventListener("change", sync);

    return () => {
      still.removeEventListener("change", sync);
      stop();
    };
  }, []);

  return null;
}

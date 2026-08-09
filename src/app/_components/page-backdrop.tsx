"use client";

import { useEffect, useRef } from "react";

const step = 64;
const reach = 160;
const lift = 0.2;
const margin = 32;
const spacing = 12;
const fade = 1600;
const box = 2 * (reach + margin);

export function PageBackdrop() {
  const patchRef = useRef<SVGSVGElement>(null);
  const linesRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const patch = patchRef.current;
    const lines = linesRef.current;
    if (!patch || !lines) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let showing = false;
    const to = { x: 0, y: 0 };
    const at = { x: 0, y: 0 };

    /* A point keeps its bearing and moves out along it, so the centre holds
       still and the grid swells around it. The swell eases to nothing by the
       edge of the reach, which is what lets the patch fade out seamlessly. */
    const place = (x: number, y: number, first: boolean) => {
      const dx = x - at.x;
      const dy = y - at.y;
      const away = Math.hypot(dx, dy);
      const ease = away < reach ? 1 - (away / reach) ** 2 : 0;
      const swell = 1 + lift * ease * ease;

      const round = (value: number) => Math.round(value * 10) / 10 + box / 2;

      return `${first ? "M" : "L"}${round(dx * swell)} ${round(dy * swell)}`;
    };

    /* The half pixel puts the stroke on the same rail as the flat grid. */
    const draw = () => {
      const samples = Math.ceil((2 * reach) / spacing);
      let path = "";

      for (
        let x = Math.ceil((at.x - reach) / step) * step;
        x <= at.x + reach;
        x += step
      ) {
        for (let i = 0; i <= samples; i++) {
          path += place(x + 0.5, at.y - reach + (i * 2 * reach) / samples, !i);
        }
      }

      for (
        let y = Math.ceil((at.y - reach) / step) * step;
        y <= at.y + reach;
        y += step
      ) {
        for (let i = 0; i <= samples; i++) {
          path += place(at.x - reach + (i * 2 * reach) / samples, y + 0.5, !i);
        }
      }

      lines.setAttribute("d", path);
      patch.style.transform = `translate(${at.x - box / 2}px, ${
        at.y - box / 2
      }px)`;
    };

    /* Trails the pointer rather than tracking it, so the grid reads as being
       dragged out of shape and settling back. */
    const run = () => {
      frame = 0;
      const dx = to.x - at.x;
      const dy = to.y - at.y;
      at.x += dx * 0.2;
      at.y += dy * 0.2;
      draw();
      if (Math.abs(dx) > 0.4 || Math.abs(dy) > 0.4) {
        frame = requestAnimationFrame(run);
      }
    };

    const show = (x: number, y: number) => {
      to.x = x;
      to.y = y;

      if (!showing) {
        showing = true;
        at.x = x;
        at.y = y;
        draw();
        patch.style.transitionDuration = "";
        patch.style.opacity = "1";
      }

      if (!frame) frame = requestAnimationFrame(run);
    };

    const hide = () => {
      showing = false;
      patch.style.opacity = "0";
    };

    const point = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      show(event.clientX, event.clientY);
    };

    /* Touch events, not pointer events: a scroll cancels the pointer
       mid-gesture, and the dome should follow the finger doing the scrolling. */
    const touch = (event: TouchEvent) => {
      const finger = event.touches[0];
      if (finger) show(finger.clientX, finger.clientY);
    };

    /* A finger has no hover to end on, so the lift starts a long fade rather
       than holding the dome and then cutting it. */
    const lifted = () => {
      patch.style.transitionDuration = `${fade}ms`;
      hide();
    };

    const leave = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      hide();
    };

    window.addEventListener("pointermove", point, { passive: true });
    window.addEventListener("pointerdown", point, { passive: true });
    window.addEventListener("touchstart", touch, { passive: true });
    window.addEventListener("touchmove", touch, { passive: true });
    window.addEventListener("touchend", lifted, { passive: true });
    window.addEventListener("touchcancel", lifted, { passive: true });
    document.documentElement.addEventListener("pointerleave", leave);

    return () => {
      window.removeEventListener("pointermove", point);
      window.removeEventListener("pointerdown", point);
      window.removeEventListener("touchstart", touch);
      window.removeEventListener("touchmove", touch);
      window.removeEventListener("touchend", lifted);
      window.removeEventListener("touchcancel", lifted);
      document.documentElement.removeEventListener("pointerleave", leave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div className="bg-grid absolute inset-0" />
      <svg
        ref={patchRef}
        width={box}
        height={box}
        viewBox={`0 0 ${box} ${box}`}
        className="reveal-patch absolute top-0 left-0"
      >
        <defs>
          {/* Luminance, not colour — white and black are the mask's own
              channels and carry no theme. */}
          <radialGradient id="dome-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="white" stopOpacity="0.55" />
            <stop offset="65%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="dome-crown">
            <rect width={box} height={box} fill="url(#dome-core)" />
          </mask>

          <radialGradient id="dome-sheen" cx="36%" cy="32%" r="68%">
            <stop
              offset="0%"
              stopColor="var(--color-primary)"
              stopOpacity="0.05"
            />
            <stop
              offset="55%"
              stopColor="var(--color-primary)"
              stopOpacity="0.014"
            />
            <stop
              offset="100%"
              stopColor="var(--color-primary)"
              stopOpacity="0"
            />
          </radialGradient>
        </defs>

        <circle cx={box / 2} cy={box / 2} r={reach} fill="url(#dome-sheen)" />
        <path
          id="dome-lines"
          ref={linesRef}
          fill="none"
          stroke="var(--reveal-line)"
          strokeWidth="1"
        />
        <use href="#dome-lines" mask="url(#dome-crown)" />
      </svg>
    </div>
  );
}

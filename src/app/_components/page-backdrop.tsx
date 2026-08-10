"use client";

import { animate } from "motion/react";
import { useEffect, useRef } from "react";

const patch = 420;
const trail = 24;
const rise = 0.05;
const decay = 0.9;
const spread = 0.07;
const fade = 1600;
const settle = [0.25, 1, 0.5, 1] as const;

/* The cells around the one pressed, each lit on its own distance so the press
   leaves the centre as a ring. */
const ring = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
  [-1, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
] as const;

export function PageBackdrop() {
  const lightRef = useRef<HTMLDivElement>(null);
  const fieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const light = lightRef.current;
    const field = fieldRef.current;
    if (!light || !field) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const cells = Array.from(field.children) as HTMLElement[];
    const step =
      parseFloat(getComputedStyle(field).getPropertyValue("--grid-step")) || 64;

    let next = 0;
    let col = NaN;
    let row = NaN;

    /* The cells are a pool, oldest reused first, so the trail is however many
       are still fading. The wait is a keyframe rather than a delay: a delayed
       animation fills with its first frame, lighting a whole ring at once. */
    const ignite = (at: number, down: number, wait: number) => {
      const cell = cells[next];
      const span = wait + rise + decay;
      next = (next + 1) % cells.length;

      cell.style.transform = `translate(${at * step}px, ${down * step}px)`;
      animate(
        cell,
        { opacity: [0, 1, 0] },
        { duration: span, times: [0, (wait + rise) / span, 1], ease: settle },
      );
    };

    /* The disc's own lines are offset back by however far it sits off the grid,
       or the light lays a second grid over the first. Both line layers take the
       offset and the wash stays centred, in the order the utility declares. */
    const place = (x: number, y: number) => {
      const left = x - patch / 2;
      const top = y - patch / 2;
      const ox = ((-left % step) + step) % step;
      const oy = ((-top % step) + step) % step;

      light.style.transform = `translate(${left}px, ${top}px)`;
      light.style.backgroundPosition = `${ox}px ${oy}px, ${ox}px ${oy}px, center`;
    };

    const show = (x: number, y: number) => {
      place(x, y);
      light.style.transitionDuration = "";
      light.style.opacity = "1";

      const at = Math.floor(x / step);
      const down = Math.floor(y / step);
      if (at === col && down === row) return;

      col = at;
      row = down;
      ignite(at, down, 0);
    };

    const press = (x: number, y: number) => {
      show(x, y);

      const at = Math.floor(x / step);
      const down = Math.floor(y / step);
      for (const [dx, dy] of ring) {
        ignite(at + dx, down + dy, Math.hypot(dx, dy) * spread);
      }
    };

    const hide = () => {
      light.style.opacity = "0";
    };

    const point = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      show(event.clientX, event.clientY);
    };

    const pressed = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      press(event.clientX, event.clientY);
    };

    /* Touch events, not pointer events: a scroll cancels the pointer
       mid-gesture, and the light should follow the finger doing the scrolling. */
    const touch = (event: TouchEvent) => {
      const finger = event.touches[0];
      if (finger) show(finger.clientX, finger.clientY);
    };

    const tapped = (event: TouchEvent) => {
      const finger = event.touches[0];
      if (finger) press(finger.clientX, finger.clientY);
    };

    /* A finger has no hover to end on, so the lift starts a long fade rather
       than holding the light and then cutting it. */
    const lifted = () => {
      light.style.transitionDuration = `${fade}ms`;
      hide();
    };

    const leave = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      hide();
    };

    window.addEventListener("pointermove", point, { passive: true });
    window.addEventListener("pointerdown", pressed, { passive: true });
    window.addEventListener("touchstart", tapped, { passive: true });
    window.addEventListener("touchmove", touch, { passive: true });
    window.addEventListener("touchend", lifted, { passive: true });
    window.addEventListener("touchcancel", lifted, { passive: true });
    document.documentElement.addEventListener("pointerleave", leave);

    return () => {
      window.removeEventListener("pointermove", point);
      window.removeEventListener("pointerdown", pressed);
      window.removeEventListener("touchstart", tapped);
      window.removeEventListener("touchmove", touch);
      window.removeEventListener("touchend", lifted);
      window.removeEventListener("touchcancel", lifted);
      document.documentElement.removeEventListener("pointerleave", leave);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div className="grid-band absolute inset-0">
        <div className="bg-grid absolute inset-0" />

        <div ref={fieldRef} className="absolute inset-0">
          {Array.from({ length: trail }, (_, at) => (
            <div
              key={at}
              className="absolute top-0 left-0 h-(--grid-step) w-(--grid-step) bg-(--reveal-cell) opacity-0"
            />
          ))}
        </div>

        <div
          ref={lightRef}
          style={{ width: patch, height: patch }}
          className="grid-light absolute top-0 left-0"
        />
      </div>
    </div>
  );
}

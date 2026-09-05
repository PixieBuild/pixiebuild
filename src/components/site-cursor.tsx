"use client";

import { useEffect, useRef, useState } from "react";

const handles = '[data-slot="button"], button:not(:disabled), [role="button"]';
const carets = 'input, textarea, [contenteditable="true"]';

/* Share of the gap to the pointer the ring closes each frame. */
const chase = 0.17;

export function SiteCursor() {
  const [drawn, setDrawn] = useState(false);
  const dot = useRef<HTMLDivElement>(null);
  const pip = useRef<HTMLSpanElement>(null);
  const orbit = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)");
    const read = () => setDrawn(fine.matches && !calm.matches);

    read();
    fine.addEventListener("change", read);
    calm.addEventListener("change", read);

    return () => {
      fine.removeEventListener("change", read);
      calm.removeEventListener("change", read);
    };
  }, []);

  useEffect(() => {
    if (!drawn) return;

    const point = dot.current;
    const bead = pip.current;
    const trail = orbit.current;
    const halo = ring.current;
    if (!point || !bead || !trail || !halo) return;

    const root = document.documentElement;

    let x = 0;
    let y = 0;
    let trailX = 0;
    let trailY = 0;
    let placed = false;
    let held: Element | null = null;
    let playing = 0;

    const drop = () => {
      held = null;
      delete trail.dataset.held;
      delete point.dataset.held;
    };

    const take = (target: Element) => {
      held = target;
      trail.dataset.held = "";
      point.dataset.held = "";
    };

    const follow = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;

      x = event.clientX;
      y = event.clientY;

      /* The real pointer goes only once ours has somewhere to be, so a page
         nobody has touched yet still shows a cursor. */
      if (!placed) {
        trailX = x;
        trailY = y;
        placed = true;
        root.classList.add("pointer-lens");
      }

      point.style.translate = `calc(${x}px - 50%) calc(${y}px - 50%)`;

      const target = event.target instanceof Element ? event.target : null;
      const typing = Boolean(target?.closest(carets));

      point.style.opacity = typing ? "0" : "1";
      trail.style.opacity = typing ? "0" : "1";

      const under = typing ? null : (target?.closest(handles) ?? null);
      if (under === held) return;
      if (under) take(under);
      else drop();
    };

    const settle = () => {
      if (held) take(held);
    };

    const press = () => {
      bead.style.scale = "0.5";
      halo.style.scale = "0.86";
    };

    const lift = () => {
      bead.style.scale = "1";
      halo.style.scale = "1";
    };

    const hide = () => {
      point.style.opacity = "0";
      trail.style.opacity = "0";
    };

    const step = () => {
      playing = requestAnimationFrame(step);

      trailX += (x - trailX) * chase;
      trailY += (y - trailY) * chase;
      trail.style.translate = `calc(${trailX}px - 50%) calc(${trailY}px - 50%)`;
    };

    playing = requestAnimationFrame(step);

    document.addEventListener("pointermove", follow, { passive: true });
    document.addEventListener("pointerdown", press, { passive: true });
    document.addEventListener("pointerup", lift, { passive: true });
    root.addEventListener("mouseleave", hide);
    window.addEventListener("blur", hide);
    window.addEventListener("scroll", settle, { passive: true });
    window.addEventListener("resize", settle);

    return () => {
      cancelAnimationFrame(playing);
      root.classList.remove("pointer-lens");
      document.removeEventListener("pointermove", follow);
      document.removeEventListener("pointerdown", press);
      document.removeEventListener("pointerup", lift);
      root.removeEventListener("mouseleave", hide);
      window.removeEventListener("blur", hide);
      window.removeEventListener("scroll", settle);
      window.removeEventListener("resize", settle);
    };
  }, [drawn]);

  if (!drawn) return null;

  return (
    <>
      <div
        ref={orbit}
        aria-hidden
        className="data-held:mix-blend-difference pointer-events-none fixed top-0 left-0 z-9999 opacity-0 transition-opacity duration-300"
      >
        <span
          ref={ring}
          className="border-foreground/35 ease-interface in-data-held:bg-cursor in-data-held:size-12 in-data-held:border-transparent block size-8 rounded-full border transition-[scale,width,height,background-color,border-color] duration-300"
        />
      </div>

      <div
        ref={dot}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-9999 opacity-0 transition-opacity duration-300"
      >
        <span
          ref={pip}
          className="bg-foreground ease-interface in-data-held:opacity-0 block size-1.5 rounded-full transition-[scale,opacity] duration-300"
        />
      </div>
    </>
  );
}

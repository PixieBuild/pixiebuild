"use client";

import {
  animate,
  useIsomorphicLayoutEffect,
  useReducedMotion,
  type AnimationPlaybackControls,
} from "motion/react";
import { useRef } from "react";

import { HeroBuild } from "@/app/_components/hero-build";
import { HeroBuildPhone } from "@/app/_components/hero-build-phone";

const practice = [
  "Landing pages",
  "Company websites",
  "Custom web applications",
];

const arrival = 0.52;

const entrance = [0.16, 1, 0.3, 1] as const;

/* Seconds a whole beat is worth, turning the beats of the parts arriving
   together into the gaps between them. */
const cadence = 2.2;

const clear = "0px 0px -6% 0px";

/* Inherited by every part, and what each one is released from. */
const held = { "--step": 0 } as React.CSSProperties;

export function BuildAssembly() {
  const frame = useRef<HTMLDivElement>(null);
  const calm = useReducedMotion();

  /* A part is released as it comes into view, so none is left empty on screen
     and none arrives unwatched below the fold. Parts coming into view together
     are spread by their beats, so the group lands as a sequence. Each step is
     written to the node, so nothing re-renders while the build runs. */
  useIsomorphicLayoutEffect(() => {
    const node = frame.current;
    if (!node || calm) return;

    const parts = Array.from(node.querySelectorAll<HTMLElement>(".build-part"));
    const beatOf = (part: HTMLElement) =>
      Number(part.style.getPropertyValue("--beat"));
    const runs: AnimationPlaybackControls[] = [];

    const watch = new IntersectionObserver(
      entries => {
        const arriving = entries
          .filter(entry => entry.isIntersecting)
          .map(entry => entry.target as HTMLElement);
        if (!arriving.length) return;

        const lead = Math.min(...arriving.map(beatOf));

        for (const part of arriving) {
          watch.unobserve(part);
          runs.push(
            animate(0, 1, {
              duration: arrival,
              delay: (beatOf(part) - lead) * cadence,
              ease: entrance,
              onUpdate: at => part.style.setProperty("--step", `${at}`),
            }),
          );
        }
      },
      { rootMargin: clear },
    );

    for (const part of parts) watch.observe(part);

    return () => {
      watch.disconnect();
      for (const run of runs) run.stop();
      for (const part of parts) part.style.removeProperty("--step");
    };
  }, [calm]);

  return (
    <div className="relative mx-auto max-w-7xl px-6 pb-16 sm:px-8 sm:pb-18 md:px-12 md:pb-20 lg:px-16 lg:pb-24">
      {/* Nothing releases the parts if the assembly never runs. */}
      <noscript>
        <style>{".build-part { --step: 1 }"}</style>
      </noscript>

      <div ref={frame} style={held}>
        <div className="md:hidden">
          <HeroBuildPhone />
        </div>
        <div className="hidden md:block">
          <HeroBuild />
        </div>
      </div>

      <div className="text-muted-foreground mt-4 flex items-baseline justify-between gap-6 sm:mt-5">
        <p className="text-sm">
          Concept build — Cala Verde, a boutique hotel in Liguria.
        </p>
        <ul className="hidden shrink-0 items-center gap-6 text-xs font-medium tracking-widest uppercase sm:flex">
          {practice.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

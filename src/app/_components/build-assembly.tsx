"use client";

import {
  useIsomorphicLayoutEffect,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "motion/react";
import { useRef } from "react";

import { HeroBuild } from "@/app/_components/hero-build";
import { HeroBuildPhone } from "@/app/_components/hero-build-phone";

const practice = [
  "Landing pages",
  "Company websites",
  "Custom web applications",
];

export function BuildAssembly() {
  const frame = useRef<HTMLDivElement>(null);
  const calm = useReducedMotion();

  /* Both edges read against the same line, so the range is the build's own
     height whatever the screen. Progress is then how far the build has passed
     that line, and a part whose beat is where it sits lands as it arrives
     there. The target is the build alone: padding or the caption in it would
     stretch the range and break that. */
  const { scrollYProgress } = useScroll({
    target: frame,
    offset: ["start 72%", "end 72%"],
  });

  /* The parts read the assembly off a custom property, so the build stays
     markup and nothing re-renders while it runs. */
  const sync = (at: number) => {
    const node = frame.current;
    if (!node) return;
    const step = Number.isFinite(at) ? at : 2;
    if (calm) node.style.removeProperty("--assemble");
    else node.style.setProperty("--assemble", `${step}`);
  };

  useMotionValueEvent(scrollYProgress, "change", sync);

  useIsomorphicLayoutEffect(() => {
    sync(scrollYProgress.get());
  });

  return (
    <div className="relative mx-auto max-w-7xl px-6 pb-16 sm:px-8 sm:pb-18 md:px-12 md:pb-20 lg:px-16 lg:pb-24">
      <div ref={frame}>
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

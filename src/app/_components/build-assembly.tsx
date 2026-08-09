"use client";

import {
  motion,
  useIsomorphicLayoutEffect,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";

import { HeroBuild } from "@/app/_components/hero-build";

const practice = [
  "Landing pages",
  "Company websites",
  "Custom web applications",
];

/* Fractions of the runway's scroll. It pins at 0.31 and releases at 0.69;
   the fade runs across the release so the build is still leaving while the
   next section rises behind it. */
const beat = {
  lift: [0.02, 0.3],
  shrink: [0.42, 0.78],
  fade: [0.68, 0.84],
};

export function BuildAssembly() {
  const runway = useRef<HTMLDivElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const group = useRef<HTMLDivElement>(null);
  const calm = useReducedMotion();

  /* Motion values, not state: a transform recomputes from its inputs, so a
     measurement held in a closure would stay at its first-render zero. */
  const screenHeight = useMotionValue(0);
  const buildHeight = useMotionValue(0);

  const { scrollYProgress } = useScroll({
    target: runway,
    offset: ["start end", "end start"],
  });

  useIsomorphicLayoutEffect(() => {
    const screen = stage.current;
    const build = group.current;
    if (!screen || !build) return;

    const measure = () => {
      screenHeight.set(screen.clientHeight);
      buildHeight.set(build.offsetHeight);
    };

    measure();

    const watcher = new ResizeObserver(measure);
    watcher.observe(screen);
    watcher.observe(build);
    return () => watcher.disconnect();
  }, [screenHeight, buildHeight]);

  /* A transform with one bad token in it is dropped whole, so nothing
     non-finite may reach it. */
  const pass = useTransform(scrollYProgress, at =>
    Number.isFinite(at) ? Math.min(1, Math.max(0, at)) : 0,
  );

  const rise = useTransform(pass, beat.lift, [0, 1]);
  const angle = useTransform(rise, [0, 1], [-72, 0]);
  const shrink = useTransform(pass, beat.shrink, [1, 0.8]);
  const opacity = useTransform(pass, beat.fade, [1, 0]);

  /* Scaling happens about the top edge, since that is the hinge, so the drop
     pays back half of what the scale takes to keep the build centred. A build
     taller than the screen centres to nothing and stays at the top. */
  const drop = useTransform(
    [rise, shrink, screenHeight, buildHeight],
    ([standing, going, screen, built]: number[]) => {
      const settle = Math.max(0, (screen - built) / 2);
      const at = standing * settle + ((1 - going) * built) / 2;
      return Number.isFinite(at) ? at : 0;
    },
  );

  return (
    <div
      ref={runway}
      className="relative h-[220svh] motion-reduce:h-auto motion-reduce:pt-8"
    >
      <div
        ref={stage}
        className="sticky top-0 h-svh motion-reduce:static motion-reduce:h-auto"
      >
        <div className="mx-auto w-full max-w-7xl px-6 perspective-[1600px] sm:px-8 md:px-12 lg:px-16">
          <motion.div
            ref={group}
            style={
              calm
                ? undefined
                : { y: drop, scale: shrink, rotateX: angle, opacity }
            }
            className="origin-top"
          >
            <HeroBuild />

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
          </motion.div>
        </div>
      </div>
    </div>
  );
}

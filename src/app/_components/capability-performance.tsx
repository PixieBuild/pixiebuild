"use client";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "motion/react";
import { useEffect, useRef } from "react";

import { useLoop } from "@/hooks/use-loop";

const bars = ["Server", "Bundle", "Images"];

export function CapabilityPerformance() {
  const frame = useRef<HTMLDivElement>(null);
  const seen = useInView(frame, { margin: "0px 0px -15% 0px" });
  const still = useReducedMotion();
  const step = useLoop(2, 3800, seen && !still);
  const quick = step === 1;

  const score = useMotionValue(quick ? 98 : 41);
  const shown = useTransform(score, (value) => Math.round(value));
  const sweep = useTransform(score, (value) => value / 100);

  useEffect(() => {
    const run = animate(score, quick ? 98 : 41, {
      duration: still ? 0 : 1.2,
      ease: [0.25, 1, 0.5, 1],
    });
    return () => run.stop();
  }, [quick, score, still]);

  return (
    <div
      ref={frame}
      className="flex size-full flex-col items-center justify-center gap-7 p-6 sm:p-8"
    >
      <div className="relative size-28">
        <svg viewBox="0 0 100 100" className="size-full -rotate-90">
          <circle
            cx="50"
            cy="50"
            r="42"
            fill="none"
            stroke="var(--color-border)"
            strokeWidth="7"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="42"
            fill="none"
            stroke="var(--color-primary)"
            strokeWidth="7"
            strokeLinecap="round"
            style={{ pathLength: sweep }}
          />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span className="text-3xl font-semibold tabular-nums">
            {shown}
          </motion.span>
          <span className="text-muted-foreground font-mono text-[0.5625rem] tracking-widest uppercase">
            Score
          </span>
        </div>
      </div>

      <div className="flex w-full max-w-56 flex-col gap-2.5">
        {bars.map((bar, index) => (
          <div key={bar} className="flex items-center gap-3">
            <span className="text-muted-foreground w-12 font-mono text-[0.5625rem] tracking-wider uppercase">
              {bar}
            </span>
            <span className="bg-muted h-1.5 flex-1 overflow-hidden rounded-full">
              <motion.span
                animate={{ width: still ? "100%" : ["0%", "100%"] }}
                transition={{
                  duration: still ? 0 : quick ? 0.5 : 2,
                  delay: still ? 0 : index * (quick ? 0.09 : 0.35),
                  ease: "linear",
                  repeat: still ? 0 : Infinity,
                  repeatDelay: quick ? 0.9 : 0.3,
                }}
                className="bg-primary block h-full rounded-full"
              />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

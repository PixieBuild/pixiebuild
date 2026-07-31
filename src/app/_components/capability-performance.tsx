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

const metrics = [
  { label: "LCP", poor: "4.8 s", good: "1.1 s" },
  { label: "CLS", poor: "0.24", good: "0.01" },
  { label: "INP", poor: "310 ms", good: "90 ms" },
  { label: "TBT", poor: "890 ms", good: "40 ms" },
];

export function CapabilityPerformance() {
  const frame = useRef<HTMLDivElement>(null);
  const seen = useInView(frame, { margin: "0px 0px -15% 0px" });
  const still = useReducedMotion();
  const step = useLoop(2, 4600, seen && !still);
  const quick = step === 1;

  const score = useMotionValue(quick ? 98 : 41);
  const shown = useTransform(score, (value) => Math.round(value));
  const sweep = useTransform(score, (value) => value / 100);

  useEffect(() => {
    const run = animate(score, quick ? 98 : 41, {
      duration: still ? 0 : 1.3,
      ease: [0.25, 1, 0.5, 1],
    });
    return () => run.stop();
  }, [quick, score, still]);

  const swap = { duration: still ? 0 : 0.5 };

  return (
    <div ref={frame} className="size-full p-4 sm:p-6">
      <div className="bg-card shadow-elev-1 @container flex size-full flex-col gap-4 overflow-hidden rounded-xl border p-4 @min-[420px]:gap-5 @min-[420px]:p-5">
        <div className="flex shrink-0 items-center justify-between">
          <span className="text-muted-foreground font-mono text-[0.5625rem] tracking-widest uppercase">
            Lighthouse
          </span>
          <span className="text-muted-foreground truncate font-mono text-[0.5625rem]">
            willowdental.com
          </span>
        </div>

        <div className="flex min-h-0 flex-1 items-center gap-5 @min-[420px]:gap-7">
          <div className="relative size-24 shrink-0 @min-[420px]:size-28">
            <motion.span
              animate={{ opacity: quick ? 0 : 1 }}
              transition={swap}
              className="absolute inset-2 rounded-full bg-amber-500/10"
            />
            <motion.span
              animate={{ opacity: quick ? 1 : 0 }}
              transition={swap}
              className="absolute inset-2 rounded-full bg-emerald-500/10"
            />

            <svg viewBox="0 0 100 100" className="size-full -rotate-90">
              <circle
                cx="50"
                cy="50"
                r="43"
                fill="none"
                stroke="var(--color-border)"
                strokeWidth="6"
              />
              <motion.circle
                cx="50"
                cy="50"
                r="43"
                fill="none"
                stroke="var(--color-amber-500)"
                strokeWidth="6"
                strokeLinecap="round"
                style={{ pathLength: sweep }}
                animate={{ opacity: quick ? 0 : 1 }}
                transition={swap}
              />
              <motion.circle
                cx="50"
                cy="50"
                r="43"
                fill="none"
                stroke="var(--color-emerald-500)"
                strokeWidth="6"
                strokeLinecap="round"
                style={{ pathLength: sweep }}
                animate={{ opacity: quick ? 1 : 0 }}
                transition={swap}
              />
            </svg>

            <div className="absolute inset-0 flex items-center justify-center">
              <motion.span className="text-3xl font-semibold tabular-nums @min-[420px]:text-4xl">
                {shown}
              </motion.span>
            </div>
          </div>

          <div className="flex min-w-0 flex-1 flex-col gap-2 @min-[420px]:gap-2.5">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="flex items-center gap-2.5 border-b pb-2 last:border-0 last:pb-0"
              >
                <span className="relative size-2 shrink-0">
                  <motion.span
                    animate={{ opacity: quick ? 0 : 1 }}
                    transition={swap}
                    className="absolute inset-0 rounded-xs bg-amber-500"
                  />
                  <motion.span
                    animate={{ opacity: quick ? 1 : 0 }}
                    transition={swap}
                    className="absolute inset-0 rounded-full bg-emerald-500"
                  />
                </span>

                <span className="text-muted-foreground font-mono text-[0.5625rem] tracking-wider">
                  {metric.label}
                </span>

                <span className="ml-auto grid justify-items-end">
                  <motion.span
                    animate={{ opacity: quick ? 0 : 1 }}
                    transition={swap}
                    className="col-start-1 row-start-1 font-mono text-[0.625rem] tabular-nums @min-[420px]:text-[0.6875rem]"
                  >
                    {metric.poor}
                  </motion.span>
                  <motion.span
                    animate={{ opacity: quick ? 1 : 0 }}
                    transition={swap}
                    className="col-start-1 row-start-1 font-mono text-[0.625rem] tabular-nums @min-[420px]:text-[0.6875rem]"
                  >
                    {metric.good}
                  </motion.span>
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-muted/50 flex shrink-0 items-center gap-2.5 rounded-lg px-3 py-2">
          <span className="text-muted-foreground text-[0.5625rem]">
            Core Web Vitals assessment
          </span>
          <span className="ml-auto grid justify-items-end">
            <motion.span
              animate={{ opacity: quick ? 0 : 1 }}
              transition={swap}
              className="col-start-1 row-start-1 rounded-full bg-amber-500/15 px-2 py-0.5 text-[0.5625rem] font-medium text-amber-600 dark:text-amber-400"
            >
              Failed
            </motion.span>
            <motion.span
              animate={{ opacity: quick ? 1 : 0 }}
              transition={swap}
              className="col-start-1 row-start-1 rounded-full bg-emerald-500/15 px-2 py-0.5 text-[0.5625rem] font-medium text-emerald-600 dark:text-emerald-400"
            >
              Passed
            </motion.span>
          </span>
        </div>
      </div>
    </div>
  );
}

"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

import { useLoop } from "@/hooks/use-loop";

const stops = ["Skip to content", "Menu", "Book a table"];

export function CapabilityAccessibility() {
  const frame = useRef<HTMLDivElement>(null);
  const seen = useInView(frame, { margin: "0px 0px -15% 0px" });
  const still = useReducedMotion();
  const step = useLoop(stops.length, 1400, seen && !still);

  return (
    <div
      ref={frame}
      className="flex size-full flex-col justify-center gap-6 p-6 sm:p-8"
    >
      <div className="flex items-center justify-center gap-2">
        <motion.span
          animate={{ scale: still ? 1 : [1, 0.92, 1] }}
          transition={{ duration: 1.4, repeat: still ? 0 : Infinity }}
          className="bg-card text-muted-foreground rounded-md border px-2 py-1 font-mono text-[0.5625rem] tracking-widest uppercase shadow-[var(--elevation-1)]"
        >
          Tab
        </motion.span>
      </div>

      <div className="flex flex-col gap-2.5">
        {stops.map((stop, index) => {
          const here = still ? index === stops.length - 1 : index === step;

          return (
            <div key={stop} className="relative">
              {here ? (
                <motion.span
                  layoutId="focus-ring"
                  transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                  className="ring-primary pointer-events-none absolute -inset-1 rounded-lg ring-2"
                />
              ) : null}

              <div className="bg-card relative flex items-center justify-between rounded-md border px-3 py-2.5">
                <span className="text-sm">{stop}</span>
                <motion.span
                  animate={{ opacity: here ? 1 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-primary font-mono text-[0.5625rem] tracking-widest uppercase"
                >
                  Focused
                </motion.span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between rounded-lg border border-dashed px-3 py-2.5">
        <span className="text-muted-foreground font-mono text-[0.5625rem] tracking-widest uppercase">
          Contrast
        </span>
        <div className="flex items-center gap-2 font-mono text-[0.625rem]">
          <span className="text-muted-foreground/50 line-through">3.1</span>
          <span className="text-primary">7.4</span>
        </div>
      </div>
    </div>
  );
}

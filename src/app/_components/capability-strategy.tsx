"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

import { useLoop } from "@/hooks/use-loop";

export function CapabilityStrategy() {
  const frame = useRef<HTMLDivElement>(null);
  const seen = useInView(frame, { margin: "0px 0px -15% 0px" });
  const still = useReducedMotion();
  const step = useLoop(2, 3600, seen && !still);
  const built = step === 1;
  const fade = { duration: 0.55, ease: [0.25, 1, 0.5, 1] as const };

  return (
    <div
      ref={frame}
      className="flex size-full items-center justify-center p-6 sm:p-8"
    >
      <div className="bg-card shadow-panel relative w-full max-w-64 overflow-hidden rounded-lg border p-4">
        <div className="relative h-4">
          <motion.span
            animate={{ opacity: built ? 0 : 1 }}
            transition={fade}
            className="border-primary/40 absolute top-0 left-0 h-4 w-20 rounded border border-dashed"
          />
          <motion.span
            animate={{ opacity: built ? 1 : 0 }}
            transition={fade}
            className="bg-foreground absolute top-1 left-0 h-2 w-16 rounded-full"
          />
        </div>

        <div className="relative mt-4 h-16">
          <motion.span
            animate={{ opacity: built ? 0 : 1 }}
            transition={fade}
            className="border-primary/40 absolute inset-0 rounded border border-dashed"
          />
          <motion.svg
            aria-hidden
            viewBox="0 0 100 60"
            preserveAspectRatio="none"
            animate={{ opacity: built ? 0 : 1 }}
            transition={fade}
            className="absolute inset-0 size-full"
          >
            <line
              x1="0"
              y1="0"
              x2="100"
              y2="60"
              stroke="var(--color-primary)"
              strokeOpacity="0.3"
              vectorEffect="non-scaling-stroke"
            />
            <line
              x1="100"
              y1="0"
              x2="0"
              y2="60"
              stroke="var(--color-primary)"
              strokeOpacity="0.3"
              vectorEffect="non-scaling-stroke"
            />
          </motion.svg>
          <motion.span
            animate={{ opacity: built ? 1 : 0 }}
            transition={fade}
            className="bg-muted absolute inset-0 rounded-md"
          />
        </div>

        <div className="relative mt-4 flex flex-col gap-2">
          {["70%", "50%"].map((width) => (
            <span key={width} className="relative block h-2">
              <motion.span
                animate={{ opacity: built ? 0 : 1 }}
                transition={fade}
                style={{ width }}
                className="border-primary/40 absolute inset-y-0 left-0 rounded-full border border-dashed"
              />
              <motion.span
                animate={{ opacity: built ? 1 : 0 }}
                transition={fade}
                style={{ width }}
                className="bg-muted-foreground/30 absolute inset-y-0 left-0 rounded-full"
              />
            </span>
          ))}
        </div>

        <div className="relative mt-5 h-7 w-24">
          <motion.span
            animate={{ opacity: built ? 0 : 1 }}
            transition={fade}
            className="border-primary/40 absolute inset-0 rounded border border-dashed"
          />
          <motion.span
            animate={{ opacity: built ? 1 : 0 }}
            transition={fade}
            className="bg-primary absolute inset-0 rounded-full"
          />
        </div>

        <motion.span
          animate={{ opacity: built ? 0 : 1 }}
          transition={fade}
          className="text-primary/60 absolute right-3 bottom-3 font-mono text-[0.5rem] tracking-widest uppercase"
        >
          Wireframe
        </motion.span>
      </div>
    </div>
  );
}

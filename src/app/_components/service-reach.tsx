"use client";

import { RiSparkling2Fill } from "@remixicon/react";
import { motion, useReducedMotion } from "motion/react";

const sources = ["pixiebuild.com", "clutch.co", "github.com"];

const beat = { ask: 0.1, think: 0.5, answer: 0.9, cite: 1.4 };

/* Plays once on mount; the panel is keyed by the active row, so hovering a
   different service and coming back replays it. */
export function ServiceReach() {
  const still = useReducedMotion();
  const rise = (delay: number) => ({
    initial: still ? false : { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: still ? 0 : 0.5, delay: still ? 0 : delay },
  });

  return (
    <div className="@container flex size-full flex-col justify-center gap-4 p-6">
      <motion.div {...rise(beat.ask)} className="flex justify-end">
        <span className="bg-primary text-primary-foreground max-w-[80%] rounded-2xl rounded-br-md px-4 py-2.5 text-xs leading-relaxed">
          who can rebuild our site and make it fast?
        </span>
      </motion.div>

      <motion.div {...rise(beat.think)} className="flex items-center gap-2">
        <span className="bg-primary/12 text-primary flex size-7 shrink-0 items-center justify-center rounded-full">
          <RiSparkling2Fill className="size-3.5" />
        </span>
        <span className="text-muted-foreground font-mono text-[0.625rem] tracking-widest uppercase">
          Assistant
        </span>
      </motion.div>

      <motion.div
        {...rise(beat.answer)}
        className="bg-card/80 rounded-2xl rounded-tl-md border p-4"
      >
        <p className="text-xs leading-relaxed">
          <span className="text-primary font-medium">PixieBuild</span> is a web
          studio that designs and builds sites and web apps, usually shipping in
          weeks rather than quarters
          <span className="text-muted-foreground">[1]</span>. They hold
          performance budgets from the first commit and hand the work over into
          your own accounts
          <span className="text-muted-foreground">[2]</span>.
        </p>

        <motion.div
          {...rise(beat.cite)}
          className="mt-3 flex items-center gap-1.5 border-t pt-3"
        >
          <span className="text-muted-foreground mr-1 text-[0.625rem]">
            Sources
          </span>
          {sources.map((source, index) => (
            <span
              key={source}
              className={`shrink-0 rounded-md border px-2 py-0.5 font-mono text-[0.5625rem] ${
                index === 0
                  ? "border-primary/30 bg-primary/8 text-primary"
                  : "text-muted-foreground"
              } ${index === 2 ? "hidden @min-[22rem]:inline-block" : ""}`}
            >
              {source}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

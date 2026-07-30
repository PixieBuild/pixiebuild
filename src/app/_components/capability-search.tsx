"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

import { useLoop } from "@/hooks/use-loop";

const others = ["directory listing", "old blog post", "competitor", "forum"];

export function CapabilitySearch() {
  const frame = useRef<HTMLDivElement>(null);
  const seen = useInView(frame, { margin: "0px 0px -15% 0px" });
  const still = useReducedMotion();
  const step = useLoop(2, 4000, seen && !still);
  const risen = step === 1;

  const order = risen
    ? ["you", ...others.slice(0, 3)]
    : [...others.slice(0, 3), "you"];

  return (
    <div
      ref={frame}
      className="flex size-full flex-col justify-center gap-4 p-6 sm:p-8"
    >
      <motion.div
        animate={{ opacity: risen ? 1 : 0.25, y: risen ? 0 : -4 }}
        transition={{ duration: 0.5 }}
        className="bg-card shadow-panel rounded-lg border p-3"
      >
        <div className="flex items-center gap-2">
          <span className="bg-primary size-1.5 rounded-full" />
          <span className="text-muted-foreground font-mono text-[0.5625rem] tracking-widest uppercase">
            AI answer
          </span>
        </div>
        <div className="mt-2 flex flex-col gap-1.5">
          <span className="bg-muted-foreground/30 h-1.5 w-[85%] rounded-full" />
          <span className="bg-muted-foreground/30 h-1.5 w-[60%] rounded-full" />
        </div>
        <div className="mt-2.5 flex items-center gap-1.5">
          <span className="bg-primary/15 text-primary rounded px-1.5 py-0.5 font-mono text-[0.5625rem]">
            yoursite.com
          </span>
        </div>
      </motion.div>

      <div className="flex flex-col gap-2">
        {order.map((item, place) => {
          const mine = item === "you";

          return (
            <motion.div
              key={item}
              layout
              transition={{ duration: still ? 0 : 0.6, ease: [0.25, 1, 0.5, 1] }}
              className={`flex items-center gap-3 rounded-lg border px-3 py-2.5 ${
                mine ? "border-primary/40 bg-primary/5" : "bg-card/50"
              }`}
            >
              <span
                className={`font-mono text-[0.625rem] tabular-nums ${
                  mine ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {place + 1}
              </span>
              <span className="flex flex-1 flex-col gap-1.5">
                <span
                  className={`h-1.5 rounded-full ${
                    mine ? "bg-primary/70 w-24" : "bg-muted-foreground/35 w-16"
                  }`}
                />
                <span className="bg-muted-foreground/20 h-1 w-32 rounded-full" />
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

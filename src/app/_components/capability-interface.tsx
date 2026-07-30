"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

import { useLoop } from "@/hooks/use-loop";

const before = ["Details", "Address", "Delivery", "Payment", "Confirm"];
const after = ["Details", "Payment"];

export function CapabilityInterface() {
  const frame = useRef<HTMLDivElement>(null);
  const seen = useInView(frame, { margin: "0px 0px -15% 0px" });
  const still = useReducedMotion();
  const step = useLoop(2, 3600, seen && !still);
  const shorter = step === 1;
  const steps = shorter ? after : before;

  return (
    <div
      ref={frame}
      className="flex size-full flex-col justify-center gap-6 p-6 sm:p-8"
    >
      <div className="flex items-baseline justify-between">
        <span className="text-muted-foreground font-mono text-[0.5625rem] tracking-widest uppercase">
          Checkout
        </span>
        <motion.span
          key={steps.length}
          initial={still ? false : { opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={`font-mono text-[0.625rem] tabular-nums ${
            shorter ? "text-primary" : "text-muted-foreground"
          }`}
        >
          {steps.length} steps
        </motion.span>
      </div>

      <div className="flex items-center gap-1.5">
        {steps.map((label, index) => (
          <motion.div
            key={label}
            layout
            initial={still ? false : { opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: still ? 0 : 0.45, ease: [0.25, 1, 0.5, 1] }}
            className="flex flex-1 flex-col gap-1.5"
          >
            <span
              className={`h-1 rounded-full ${
                index === 0 ? "bg-primary" : "bg-border"
              }`}
            />
            <span className="text-muted-foreground truncate text-[0.625rem]">
              {label}
            </span>
          </motion.div>
        ))}
      </div>

      <motion.div
        layout
        transition={{ duration: still ? 0 : 0.5, ease: [0.25, 1, 0.5, 1] }}
        className="bg-card shadow-panel flex flex-col gap-2.5 rounded-lg border p-4"
      >
        {[0, 1].map((field) => (
          <span key={field} className="flex flex-col gap-1.5">
            <span className="bg-muted-foreground/25 h-1 w-12 rounded-full" />
            <span className="bg-muted h-7 rounded-md border" />
          </span>
        ))}

        <motion.span
          animate={{ opacity: shorter ? 0 : 1, height: shorter ? 0 : 38 }}
          transition={{ duration: still ? 0 : 0.45 }}
          className="flex flex-col gap-1.5 overflow-hidden"
        >
          <span className="bg-muted-foreground/25 h-1 w-16 rounded-full" />
          <span className="bg-muted h-7 rounded-md border" />
        </motion.span>

        <motion.span
          animate={{ width: shorter ? "100%" : "45%" }}
          transition={{ duration: still ? 0 : 0.5, ease: [0.25, 1, 0.5, 1] }}
          className="bg-primary mt-1 flex h-8 items-center justify-center rounded-full"
        >
          <motion.span
            animate={{ opacity: shorter ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-primary-foreground text-[0.625rem] font-medium"
          >
            Pay now
          </motion.span>
        </motion.span>
      </motion.div>
    </div>
  );
}

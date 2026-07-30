"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

import { useLoop } from "@/hooks/use-loop";

const loose = [
  { width: 82, height: 30, radius: 4, x: -14, y: -6, tilt: -3 },
  { width: 64, height: 24, radius: 14, x: 18, y: 4, tilt: 2.5 },
  { width: 94, height: 34, radius: 2, x: -6, y: 12, tilt: -1.5 },
];

const swatches = ["bg-primary", "bg-foreground", "bg-muted-foreground/40"];

export function CapabilitySystem() {
  const frame = useRef<HTMLDivElement>(null);
  const seen = useInView(frame, { margin: "0px 0px -15% 0px" });
  const still = useReducedMotion();
  const step = useLoop(2, 3600, seen && !still);
  const tidy = step === 1;
  const move = { duration: 0.65, ease: [0.25, 1, 0.5, 1] as const };

  return (
    <div
      ref={frame}
      className="flex size-full flex-col justify-center gap-7 p-6 sm:p-8"
    >
      <div className="flex flex-col items-center gap-3">
        {loose.map((button, index) => (
          <motion.span
            key={index}
            animate={{
              width: tidy ? 88 : button.width,
              height: tidy ? 28 : button.height,
              borderRadius: tidy ? 999 : button.radius,
              x: tidy ? 0 : button.x,
              y: tidy ? 0 : button.y,
              rotate: tidy ? 0 : button.tilt,
            }}
            transition={move}
            className="relative block"
          >
            <motion.span
              animate={{ opacity: tidy ? 0 : 1 }}
              transition={move}
              className="bg-muted-foreground/25 absolute inset-0 rounded-[inherit]"
            />
            <motion.span
              animate={{ opacity: tidy ? 1 : 0 }}
              transition={move}
              className="bg-primary absolute inset-0 rounded-[inherit]"
            />
          </motion.span>
        ))}
      </div>

      <div className="flex items-center justify-center gap-6">
        <div className="flex items-center gap-1.5">
          {swatches.map((swatch, index) => (
            <motion.span
              key={swatch}
              animate={{
                opacity: tidy ? 1 : 0.3,
                y: tidy ? 0 : 4,
              }}
              transition={{ ...move, delay: still ? 0 : index * 0.06 }}
              className={`${swatch} size-4 rounded-md`}
            />
          ))}
        </div>

        <motion.span
          animate={{ opacity: tidy ? 1 : 0.3 }}
          transition={move}
          className="text-muted-foreground font-mono text-[0.5625rem] tracking-widest uppercase"
        >
          One set of parts
        </motion.span>
      </div>
    </div>
  );
}

"use client";

import { RiCheckLine } from "@remixicon/react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const steps = [
  "Tested on real phones and laptops",
  "Live on your own domain",
  "Files and accounts put in your name",
  "We stay reachable for fixes",
];

const step = 1600;
const hold = 3200;
const rewind = 900;

export function ArtifactDelivery() {
  const still = useReducedMotion();
  const area = useRef<HTMLDivElement>(null);
  const seen = useInView(area, { margin: "0px 0px -20% 0px" });
  const [done, setDone] = useState(-1);

  useEffect(() => {
    if (!seen || still) return;

    let at = -1;
    let timer: ReturnType<typeof setTimeout>;

    const advance = () => {
      at = at >= steps.length - 1 ? -1 : at + 1;
      setDone(at);
      timer = setTimeout(
        advance,
        at === -1 ? rewind : at === steps.length - 1 ? hold : step
      );
    };

    timer = setTimeout(advance, 400);
    return () => clearTimeout(timer);
  }, [seen, still]);

  const complete = still || done >= steps.length - 1;

  return (
    <div
      ref={area}
      className="bg-card shadow-panel w-full rounded-xl border p-6"
    >
      <div className="flex items-center justify-between">
        <span className="text-muted-foreground font-mono text-[0.625rem] tracking-widest uppercase">
          Handover
        </span>
        <motion.span
          animate={{ opacity: complete ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="text-primary font-mono text-[0.625rem] tracking-widest uppercase"
        >
          Complete
        </motion.span>
      </div>

      <div className="mt-5 flex flex-col">
        {steps.map((label, index) => {
          const reached = still || done >= index;

          return (
            <div key={label} className="relative flex gap-4 pb-5 last:pb-0">
              {index < steps.length - 1 ? (
                <>
                  <span className="bg-border absolute top-6 bottom-0 left-2.75 w-px" />
                  <motion.span
                    aria-hidden
                    animate={{ scaleY: reached ? 1 : 0 }}
                    transition={{
                      duration: reached ? 1.1 : 0.3,
                      ease: "linear",
                    }}
                    className="bg-primary absolute top-6 bottom-0 left-2.75 w-px origin-top"
                  />
                </>
              ) : null}

              <span className="bg-card relative size-6 shrink-0 rounded-full border">
                <motion.span
                  animate={{ scale: reached ? 1 : 0 }}
                  transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
                  className="bg-primary absolute inset-0 rounded-full"
                />
                <motion.span
                  animate={{ opacity: reached ? 1 : 0 }}
                  transition={{ duration: 0.3, delay: reached ? 0.15 : 0 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <RiCheckLine className="text-primary-foreground size-3.5" />
                </motion.span>
              </span>

              <motion.span
                animate={{ opacity: reached ? 1 : 0.3 }}
                transition={{ duration: 0.4 }}
                className="pt-0.5 text-sm"
              >
                {label}
              </motion.span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

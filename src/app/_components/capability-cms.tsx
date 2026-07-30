"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const headline = "Autumn menu is live";

export function CapabilityCms() {
  const frame = useRef<HTMLDivElement>(null);
  const seen = useInView(frame, { margin: "0px 0px -15% 0px" });
  const still = useReducedMotion();
  const [typed, setTyped] = useState(headline.length);

  useEffect(() => {
    if (!seen || still) return;

    let at = 0;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      at = at >= headline.length ? 0 : at + 1;
      setTyped(at);
      timer = setTimeout(tick, at === headline.length ? 2200 : at === 0 ? 500 : 70);
    };

    timer = setTimeout(tick, 600);
    return () => clearTimeout(timer);
  }, [seen, still]);

  const shown = seen && !still ? typed : headline.length;
  const done = shown === headline.length;

  return (
    <div
      ref={frame}
      className="flex size-full flex-col justify-center gap-4 p-6 sm:p-8"
    >
      <div className="bg-card rounded-lg border p-3">
        <span className="text-muted-foreground font-mono text-[0.5625rem] tracking-widest uppercase">
          Editor
        </span>
        <div className="bg-muted/60 mt-2 flex h-9 items-center rounded-md border px-2.5">
          <span className="text-sm">
            {headline.slice(0, shown)}
            <motion.span
              animate={{ opacity: still ? 1 : [1, 1, 0, 0] }}
              transition={{ duration: 1, repeat: still ? 0 : Infinity }}
              className="bg-foreground ml-px inline-block h-3.5 w-px align-middle"
            />
          </span>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <motion.span
          animate={{ opacity: done ? 1 : 0.25 }}
          transition={{ duration: 0.3 }}
          className="text-primary font-mono text-[0.5625rem] tracking-widest uppercase"
        >
          Published
        </motion.span>
      </div>

      <div className="bg-card shadow-panel relative overflow-hidden rounded-lg border">
        <div className="flex items-center gap-1.5 border-b px-3 py-2">
          {[0, 1, 2].map((dot) => (
            <span key={dot} className="bg-border size-1.5 rounded-full" />
          ))}
        </div>
        <div className="p-4">
          <motion.h4
            animate={{ opacity: done ? 1 : 0.55 }}
            transition={{ duration: 0.35 }}
            className="text-base font-semibold tracking-tight"
          >
            {headline.slice(0, shown) || " "}
          </motion.h4>
          <div className="mt-3 flex flex-col gap-1.5">
            <span className="bg-muted-foreground/25 h-1.5 w-[80%] rounded-full" />
            <span className="bg-muted-foreground/25 h-1.5 w-[55%] rounded-full" />
          </div>
        </div>

        <motion.span
          aria-hidden
          animate={{ opacity: done ? [0, 0.5, 0] : 0 }}
          transition={{ duration: 0.9 }}
          className="bg-primary/10 pointer-events-none absolute inset-0"
        />
      </div>
    </div>
  );
}

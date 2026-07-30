"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export function ArtifactBuild() {
  const still = useReducedMotion();
  const frame = useRef<HTMLDivElement>(null);
  const seen = useInView(frame, { margin: "0px 0px -20% 0px" });
  const [built, setBuilt] = useState(false);

  useEffect(() => {
    if (!seen || still) return;
    const id = setInterval(() => setBuilt((previous) => !previous), 4200);
    return () => clearInterval(id);
  }, [seen, still]);

  const done = still || built;
  const drawing = { duration: 0.45, delay: done ? 0 : 0.35 };
  const shipping = { duration: 0.45, delay: done ? 0.35 : 0 };

  return (
    <div
      ref={frame}
      className="@container bg-card shadow-panel w-full overflow-hidden rounded-xl border"
    >
      <div className="relative h-9 border-b">
        <motion.div
          animate={{ opacity: done ? 0 : 1 }}
          transition={drawing}
          className="absolute inset-0 flex items-center justify-between px-3"
        >
          <span className="text-primary/70 font-mono text-[0.5625rem] tracking-widest uppercase">
            Design
          </span>
          <span className="text-primary/40 font-mono text-[0.5625rem]">
            64 grid
          </span>
        </motion.div>

        <motion.div
          animate={{ opacity: done ? 1 : 0 }}
          transition={shipping}
          className="absolute inset-0 flex items-center gap-1.5 px-3"
        >
          {[0, 1, 2].map((dot) => (
            <span key={dot} className="bg-border size-1.5 rounded-full" />
          ))}
          <span className="bg-muted ml-2 h-3 flex-1 rounded-full" />
        </motion.div>
      </div>

      <div className="relative p-4">
        <motion.div
          aria-hidden
          animate={{ opacity: done ? 0 : 1 }}
          transition={drawing}
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
          className="pointer-events-none absolute inset-0"
        />

        <div className="relative flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="bg-foreground/70 size-4 rounded" />
            <span className="bg-foreground/70 h-2 w-14 rounded-full" />
          </div>

          <div className="hidden items-center gap-3 @min-[22rem]:flex">
            {[16, 12, 14].map((width) => (
              <span
                key={width}
                style={{ width: `${width * 4}px` }}
                className="bg-muted-foreground/30 h-1.5 rounded-full"
              />
            ))}
          </div>

          <div className="flex flex-col gap-1 @min-[22rem]:hidden">
            {[0, 1, 2].map((line) => (
              <span
                key={line}
                className="bg-muted-foreground/40 h-0.5 w-3.5 rounded-full"
              />
            ))}
          </div>

          <span className="relative hidden h-5 w-14 @min-[22rem]:block">
            <motion.span
              animate={{ opacity: done ? 0 : 1 }}
              transition={drawing}
              className="border-primary/50 absolute inset-0 rounded-full border border-dashed"
            />
            <motion.span
              animate={{ opacity: done ? 1 : 0 }}
              transition={shipping}
              className="bg-primary absolute inset-0 rounded-full"
            />
          </span>
        </div>

        <div className="relative mt-6 flex flex-col gap-2">
          <span className="bg-muted-foreground/30 h-1.5 w-16 rounded-full" />
          <span className="bg-foreground/80 mt-1 h-3.5 w-[85%] rounded-full" />
          <span className="bg-foreground/80 h-3.5 w-[55%] rounded-full" />
        </div>

        <motion.div
          aria-hidden
          animate={{ opacity: done ? 0 : 1 }}
          transition={drawing}
          className="relative mt-2 flex w-[85%] items-center gap-2"
        >
          <span className="bg-primary/50 h-2 w-px" />
          <span className="bg-primary/25 h-px flex-1" />
          <span className="text-primary/60 font-mono text-[0.5rem]">42ch</span>
          <span className="bg-primary/25 h-px flex-1" />
          <span className="bg-primary/50 h-2 w-px" />
        </motion.div>

        <div className="relative mt-2 flex flex-col gap-2">
          <span className="bg-muted-foreground/25 h-2 w-[70%] rounded-full" />
          <span className="bg-muted-foreground/25 h-2 w-[45%] rounded-full" />
        </div>

        <motion.div
          aria-hidden
          animate={{ opacity: done ? 0 : 1 }}
          transition={drawing}
          className="relative mt-3 flex items-center gap-1.5"
        >
          <span className="bg-primary/50 h-px w-2" />
          <span className="text-primary/60 font-mono text-[0.5rem]">20</span>
          <span className="bg-primary/25 h-px flex-1" />
        </motion.div>

        <div className="relative mt-3">
          <motion.span
            aria-hidden
            animate={{ opacity: done ? 0 : 1 }}
            transition={drawing}
            className="border-primary/40 pointer-events-none absolute -inset-1.5 rounded-md border border-dashed"
          />
          <div className="flex flex-wrap gap-2">
            {[0, 1, 2].map((card) => (
              <div
                key={card}
                className="min-w-20 flex-1 rounded-md border p-2.5"
              >
                <span className="relative block h-9">
                  <motion.span
                    animate={{ opacity: done ? 0 : 1 }}
                    transition={drawing}
                    className="border-primary/30 absolute inset-0 rounded border border-dashed"
                  />
                  <motion.span
                    animate={{ opacity: done ? 1 : 0 }}
                    transition={shipping}
                    className="bg-muted absolute inset-0 rounded"
                  />
                </span>
                <span className="bg-muted-foreground/30 mt-2.5 block h-1.5 w-[60%] rounded-full" />
                <span className="bg-muted-foreground/20 mt-1.5 block h-1.5 w-[40%] rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

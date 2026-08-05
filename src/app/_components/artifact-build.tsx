"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

import { useLoop } from "@/hooks/use-loop";

const parts = [
  {
    name: "Card",
    rows: [
      { prop: "Radius", design: "10", code: "rounded-lg" },
      { prop: "Padding", design: "16", code: "p-4" },
      { prop: "Fill", design: "Surface", code: "bg-card" },
    ],
  },
  {
    name: "Title",
    rows: [
      { prop: "Size", design: "14", code: "text-sm" },
      { prop: "Weight", design: "Medium", code: "font-medium" },
      { prop: "Tracking", design: "−0.01", code: "tracking-tight" },
    ],
  },
  {
    name: "Action",
    rows: [
      { prop: "Radius", design: "Full", code: "rounded-full" },
      { prop: "Height", design: "28", code: "h-7" },
      { prop: "Fill", design: "Brand", code: "bg-primary" },
    ],
  },
];

const ring =
  "ring-primary pointer-events-none absolute -inset-1.5 ring-2 ring-offset-0";

export function ArtifactBuild() {
  const frame = useRef<HTMLDivElement>(null);
  const seen = useInView(frame, { margin: "0px 0px -20% 0px" });
  const still = useReducedMotion();
  const at = useLoop(parts.length, 2800, seen && !still, 1000);
  const part = parts[at];
  const slide = { duration: still ? 0 : 0.4, ease: [0.25, 1, 0.5, 1] as const };

  return (
    <div
      ref={frame}
      className="@container bg-card shadow-panel w-full overflow-hidden rounded-xl border"
    >
      <div className="flex h-8 shrink-0 items-center gap-2 border-b px-3">
        <span className="text-muted-foreground font-mono text-[0.5625rem] tracking-widest uppercase">
          Design
        </span>
        <span className="bg-border h-3 w-px" />
        <span className="text-muted-foreground font-mono text-[0.5625rem] tracking-widest uppercase">
          Build
        </span>
        <span className="text-muted-foreground/70 ml-auto truncate font-mono text-[0.5625rem]">
          one file, one pass
        </span>
      </div>

      <div
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
        className="bg-muted/20 flex justify-center p-4 @min-[22rem]:p-5"
      >
        <div className="relative w-full max-w-56">
          <div className="bg-card shadow-elev-1 relative rounded-lg border p-4">
            {at === 0 ? (
              <motion.span
                layoutId="inspect"
                initial={false}
                transition={slide}
                className={`${ring} rounded-[0.7rem]`}
              />
            ) : null}

            <span className="relative inline-block">
              <span className="text-sm font-medium tracking-tight">
                Corner suite
              </span>
              {at === 1 ? (
                <motion.span
                  layoutId="inspect"
                  initial={false}
                  transition={slide}
                  className={`${ring} rounded-sm`}
                />
              ) : null}
            </span>

            <p className="text-muted-foreground mt-1.5 text-[0.625rem]">
              Sleeps two · from €240
            </p>

            <span className="relative mt-3 block">
              <span className="bg-primary text-primary-foreground flex h-7 items-center justify-center rounded-full text-[0.625rem] font-medium">
                Check dates
              </span>
              {at === 2 ? (
                <motion.span
                  layoutId="inspect"
                  initial={false}
                  transition={slide}
                  className={`${ring} rounded-full`}
                />
              ) : null}
            </span>
          </div>
        </div>
      </div>

      <div className="border-t p-3">
        <div className="flex items-center gap-2 border-b pb-1.5">
          <span className="grid w-14 shrink-0 justify-items-start">
            {parts.map((option, index) => (
              <motion.span
                key={option.name}
                initial={false}
                animate={{ opacity: at === index ? 1 : 0 }}
                transition={{ duration: still ? 0 : 0.2 }}
                className="col-start-1 row-start-1 text-[0.5625rem] font-medium"
              >
                {option.name}
              </motion.span>
            ))}
          </span>
          <span className="text-muted-foreground w-12 shrink-0 font-mono text-[0.5rem] tracking-widest uppercase @min-[22rem]:w-16">
            Design
          </span>
          <span className="text-muted-foreground font-mono text-[0.5rem] tracking-widest uppercase">
            Code
          </span>
        </div>

        <div className="mt-1">
          {[0, 1, 2].map(row => (
            <div key={row} className="flex items-center gap-2 py-1">
              <span className="text-muted-foreground w-14 shrink-0 truncate text-[0.5625rem]">
                {part.rows[row].prop}
              </span>
              <span className="w-12 shrink-0 truncate font-mono text-[0.5625rem] tabular-nums @min-[22rem]:w-16">
                {part.rows[row].design}
              </span>
              <span className="text-primary truncate font-mono text-[0.5625rem]">
                {part.rows[row].code}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import {
  RiCodeSSlashLine,
  RiKey2Line,
  RiPencilRuler2Line,
} from "@remixicon/react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const nav = [
  { label: "Approach", width: 16 },
  { label: "Studio", width: 12 },
  { label: "Contact", width: 14 },
];

const columns = [
  { title: "Design", meta: "In house", icon: RiPencilRuler2Line },
  { title: "Engineering", meta: "In house", icon: RiCodeSSlashLine },
  { title: "Handover", meta: "Included", icon: RiKey2Line },
];

export function ArtifactBuild() {
  const still = useReducedMotion();
  const frame = useRef<HTMLDivElement>(null);
  const seen = useInView(frame, { margin: "0px 0px -20% 0px" });
  const [built, setBuilt] = useState(false);

  useEffect(() => {
    if (!seen || still) return;
    const id = setInterval(() => setBuilt(previous => !previous), 4200);
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
          {[0, 1, 2].map(dot => (
            <span key={dot} className="bg-border size-1.5 rounded-full" />
          ))}
          <span className="bg-muted ml-2 h-3 flex-1 rounded-full" />
        </motion.div>
      </div>

      {/* Both states share one grid cell, so the frame keeps the height of
          whichever is taller. The built layer takes its sizes from the
          wireframe's bars — type set to the height each bar drew, lines
          written to the width it ran to, and gaps that absorb the rows the
          annotations occupy so the two stay in register as they cross. */}
      <div className="grid">
        <motion.div
          aria-hidden
          animate={{ opacity: done ? 0 : 1 }}
          transition={drawing}
          className="relative col-start-1 row-start-1 p-4"
        >
          <div
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
              {nav.map(item => (
                <span
                  key={item.label}
                  style={{ width: `${item.width * 4}px` }}
                  className="bg-muted-foreground/30 h-1.5 rounded-full"
                />
              ))}
            </div>

            <div className="flex flex-col gap-1 @min-[22rem]:hidden">
              {[0, 1, 2].map(line => (
                <span
                  key={line}
                  className="bg-muted-foreground/40 h-0.5 w-3.5 rounded-full"
                />
              ))}
            </div>

            <span className="border-primary/50 hidden h-5 w-14 rounded-full border border-dashed @min-[22rem]:block" />
          </div>

          <div className="relative mt-6 flex flex-col gap-2">
            <span className="bg-muted-foreground/30 h-1.5 w-16 rounded-full" />
            <span className="bg-foreground/80 mt-1 h-3.5 w-[85%] rounded-full" />
            <span className="bg-foreground/80 h-3.5 w-[55%] rounded-full" />
          </div>

          <div className="relative mt-2 flex w-[85%] items-center gap-2">
            <span className="bg-primary/50 h-2 w-px" />
            <span className="bg-primary/25 h-px flex-1" />
            <span className="text-primary/60 font-mono text-[0.5rem]">42ch</span>
            <span className="bg-primary/25 h-px flex-1" />
            <span className="bg-primary/50 h-2 w-px" />
          </div>

          <div className="relative mt-2 flex flex-col gap-2">
            <span className="bg-muted-foreground/25 h-2 w-[70%] rounded-full" />
            <span className="bg-muted-foreground/25 h-2 w-[45%] rounded-full" />
          </div>

          <div className="relative mt-3 flex items-center gap-1.5">
            <span className="bg-primary/50 h-px w-2" />
            <span className="text-primary/60 font-mono text-[0.5rem]">20</span>
            <span className="bg-primary/25 h-px flex-1" />
          </div>

          <div className="relative mt-3">
            <span className="border-primary/40 pointer-events-none absolute -inset-1.5 rounded-md border border-dashed" />
            <div className="flex flex-wrap gap-2">
              {columns.map(column => (
                <div
                  key={column.title}
                  className="min-w-20 flex-1 rounded-md border p-2.5"
                >
                  <span className="border-primary/30 block h-9 rounded border border-dashed" />
                  <span className="bg-muted-foreground/30 mt-2.5 block h-1.5 w-[60%] rounded-full" />
                  <span className="bg-muted-foreground/20 mt-1.5 block h-1.5 w-[40%] rounded-full" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={{ opacity: done ? 1 : 0 }}
          transition={shipping}
          className="col-start-1 row-start-1 p-4"
        >
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="bg-foreground text-background flex size-4 items-center justify-center rounded text-[0.5rem] font-semibold">
                F
              </span>
              <span className="text-[0.6875rem] leading-none font-semibold tracking-tight">
                Fieldwork
              </span>
            </div>

            <div className="text-muted-foreground hidden items-center gap-3 text-[0.6875rem] leading-none @min-[22rem]:flex">
              {nav.map(item => (
                <span key={item.label}>{item.label}</span>
              ))}
            </div>

            <div className="flex flex-col gap-1 @min-[22rem]:hidden">
              {[0, 1, 2].map(line => (
                <span
                  key={line}
                  className="bg-muted-foreground/40 h-0.5 w-3.5 rounded-full"
                />
              ))}
            </div>

            <span className="bg-primary text-primary-foreground hidden h-5 w-14 items-center justify-center rounded-full text-[0.625rem] font-medium @min-[22rem]:flex">
              Enquire
            </span>
          </div>

          <div className="mt-6">
            <p className="text-muted-foreground text-[0.5625rem] leading-2.75 font-medium tracking-widest uppercase">
              The studio
            </p>
            <p className="mt-3 w-[85%] text-xl leading-[1.1] font-semibold tracking-tight">
              The same people design it and build it, from sketch to deploy.
            </p>
          </div>

          <p className="text-muted-foreground mt-6 w-[70%] text-xs leading-tight">
            Decisions get made once, by the same people who are going to build
            the thing.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {columns.map(column => (
              <div
                key={column.title}
                className="min-w-20 flex-1 rounded-md border p-2.5"
              >
                <span className="bg-primary/10 flex h-9 items-center justify-center rounded">
                  <column.icon className="text-primary size-4" />
                </span>
                <p className="mt-2.5 text-[0.625rem] leading-none font-medium">
                  {column.title}
                </p>
                <p className="text-muted-foreground mt-1.5 text-[0.625rem] leading-none">
                  {column.meta}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

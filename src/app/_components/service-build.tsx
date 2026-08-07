"use client";

import { RiSearchLine } from "@remixicon/react";
import { motion, useReducedMotion } from "motion/react";

import { useLoop } from "@/hooks/use-loop";

const snap = { type: "spring", stiffness: 420, damping: 32 } as const;

const swatches = ["bg-primary", "bg-violet-500", "bg-emerald-500"];

/* Each entry renders the component itself, not its name — the panel should
   read as a kit you could pull from, and the preview beside it as what
   happens when you do. */
const kit = [
  {
    name: "Nav",
    render: (
      <div className="flex w-full items-center gap-1.5">
        <span className="bg-primary size-2 shrink-0 rounded-xs" />
        <span className="bg-muted-foreground/30 h-1 w-4 rounded-full" />
        <span className="bg-muted-foreground/30 h-1 w-3 rounded-full" />
        <span className="bg-foreground/80 ml-auto h-3 w-6 shrink-0 rounded-full" />
      </div>
    ),
  },
  {
    name: "Hero",
    render: (
      <div className="w-full">
        <span className="bg-foreground/80 block h-1.5 w-full rounded-full" />
        <span className="bg-foreground/80 mt-1 block h-1.5 w-[60%] rounded-full" />
        <span className="bg-muted-foreground/25 mt-1.5 block h-1 w-[80%] rounded-full" />
      </div>
    ),
  },
  {
    name: "Button",
    render: (
      <span className="bg-primary text-primary-foreground inline-flex items-center rounded-full px-2.5 py-1 text-[0.5rem] font-medium">
        Get started
      </span>
    ),
  },
  {
    name: "Card",
    render: (
      <div className="flex w-full items-center gap-2">
        <span className="bg-violet-500/20 size-5 shrink-0 rounded-md" />
        <div className="min-w-0 flex-1">
          <span className="bg-foreground/70 block h-1 w-full rounded-full" />
          <span className="bg-muted-foreground/25 mt-1 block h-1 w-[60%] rounded-full" />
        </div>
      </div>
    ),
  },
  {
    name: "Form",
    render: (
      <div className="flex w-full items-center gap-1.5">
        <span className="border-border/80 h-4 flex-1 rounded border" />
        <span className="bg-primary h-4 w-6 shrink-0 rounded" />
      </div>
    ),
  },
];

export function ServiceBuild() {
  const still = useReducedMotion();
  const step = useLoop(7, 820, !still, 650);
  const built = still ? kit.length : Math.min(step, kit.length);
  const placed = still ? -1 : step - 1;

  const land = (index: number) => ({
    initial: still ? false : { opacity: 0, y: 8, scale: 0.95 },
    animate:
      index < built
        ? { opacity: 1, y: 0, scale: 1 }
        : { opacity: 0, y: 8, scale: 0.95 },
    transition: still ? { duration: 0 } : snap,
  });

  return (
    <div className="size-full p-5">
      <div className="bg-card shadow-elev-1 flex size-full flex-col overflow-hidden rounded-xl border">
        <div className="flex shrink-0 items-center gap-2.5 border-b px-3 py-2.5">
          <span className="bg-background flex min-w-0 flex-1 items-center gap-1.5 rounded-md border px-2 py-1.5">
            <RiSearchLine className="text-muted-foreground/60 size-3 shrink-0" />
            <span className="text-muted-foreground/60 truncate text-[0.5625rem]">
              Search components
            </span>
          </span>

          <div className="flex shrink-0 items-center gap-1">
            {swatches.map((tone) => (
              <span key={tone} className={`size-2 rounded-full ${tone}`} />
            ))}
          </div>
        </div>

        <div className="grid min-h-0 flex-1 grid-cols-[1fr_1.05fr]">
          <div className="flex flex-col justify-center gap-1.5 border-r p-3">
            {kit.map((piece, index) => (
              <motion.div
                key={piece.name}
                animate={{
                  borderColor:
                    placed === index
                      ? "var(--color-primary)"
                      : "var(--color-border)",
                  scale: placed === index ? 1.02 : 1,
                }}
                transition={{ duration: still ? 0 : 0.3 }}
                className="bg-background flex items-center gap-2 rounded-lg border px-2.5 py-2"
              >
                <span className="flex min-w-0 flex-1 items-center">
                  {piece.render}
                </span>
                <span className="text-muted-foreground/50 shrink-0 font-mono text-[0.5rem]">
                  {piece.name}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="flex min-h-0 flex-col p-3">
            <div className="bg-background flex min-h-0 flex-1 flex-col overflow-hidden rounded-lg border">
              <div className="flex shrink-0 items-center gap-1 border-b px-2.5 py-1.5">
                {[0, 1, 2].map((dot) => (
                  <span
                    key={dot}
                    className="bg-muted-foreground/25 size-1 rounded-full"
                  />
                ))}
                <span className="bg-muted mx-auto h-1.5 w-12 rounded-full" />
              </div>

              <div className="flex min-h-0 flex-1 flex-col gap-2 p-2.5">
                <motion.div
                  {...land(0)}
                  className="flex shrink-0 items-center gap-1.5"
                >
                  <span className="bg-primary size-2 shrink-0 rounded-xs" />
                  <span className="bg-muted-foreground/30 h-1 w-4 rounded-full" />
                  <span className="bg-muted-foreground/30 h-1 w-3 rounded-full" />
                  <span className="bg-foreground/80 ml-auto h-3 w-6 shrink-0 rounded-full" />
                </motion.div>

                <motion.div {...land(1)} className="shrink-0">
                  <span className="bg-foreground/80 block h-2 w-[85%] rounded-full" />
                  <span className="bg-foreground/80 mt-1 block h-2 w-[55%] rounded-full" />
                </motion.div>

                <motion.div {...land(2)} className="shrink-0">
                  <span className="bg-primary text-primary-foreground inline-flex items-center rounded-full px-2.5 py-1 text-[0.5rem] font-medium">
                    Get started
                  </span>
                </motion.div>

                <motion.div
                  {...land(3)}
                  className="grid min-h-0 flex-1 grid-cols-2 gap-1.5"
                >
                  {["bg-violet-500/20", "bg-emerald-500/20"].map((tone) => (
                    <span
                      key={tone}
                      className="border-border/60 flex flex-col justify-end gap-1 rounded-md border p-1.5"
                    >
                      <span className={`size-3 rounded ${tone}`} />
                      <span className="bg-muted-foreground/25 h-1 w-full rounded-full" />
                      <span className="bg-muted-foreground/20 h-1 w-2/3 rounded-full" />
                    </span>
                  ))}
                </motion.div>

                <motion.div
                  {...land(4)}
                  className="flex shrink-0 items-center gap-1.5"
                >
                  <span className="border-border/80 h-4 flex-1 rounded border" />
                  <span className="bg-primary h-4 w-6 shrink-0 rounded" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

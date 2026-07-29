"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

/* Percentages only: mixing units makes motion measure mid-flight and collapse
   the box. Height is measured off the content and animated to that number,
   because auto cannot be transitioned — the reflow would otherwise jump. */
export function ArtifactBuild() {
  const still = useReducedMotion();
  const page = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>();

  useEffect(() => {
    const node = page.current;
    if (!node) return;

    const observer = new ResizeObserver(([entry]) => {
      setHeight(entry.borderBoxSize[0].blockSize + 2);
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      animate={{
        width: still ? "100%" : ["60%", "60%", "100%", "100%"],
        height,
      }}
      transition={{
        width: {
          duration: 7,
          times: [0, 0.35, 0.65, 1],
          repeat: still ? 0 : Infinity,
          repeatType: "reverse",
          ease: [0.25, 1, 0.5, 1],
        },
        height: { duration: 0.5, ease: [0.25, 1, 0.5, 1] },
      }}
      className="@container bg-card shadow-panel shrink-0 self-start overflow-hidden rounded-xl border"
    >
      <div ref={page}>
        <div className="flex items-center gap-1.5 border-b px-3 py-2.5">
          {[0, 1, 2].map((dot) => (
            <span key={dot} className="bg-border size-1.5 rounded-full" />
          ))}
          <span className="bg-muted ml-2 h-3 flex-1 rounded-full" />
        </div>

        <div className="p-4">
          <div className="flex items-center justify-between gap-4">
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

            <span className="bg-primary hidden h-5 w-14 rounded-full @min-[22rem]:block" />
          </div>

          <div className="mt-6 flex flex-col gap-2">
            <span className="bg-muted-foreground/30 h-1.5 w-16 rounded-full" />
            <span className="bg-foreground/80 mt-1 h-3.5 w-[85%] rounded-full" />
            <span className="bg-foreground/80 h-3.5 w-[55%] rounded-full" />
            <span className="bg-muted-foreground/25 mt-2 h-2 w-[70%] rounded-full" />
            <span className="bg-muted-foreground/25 h-2 w-[45%] rounded-full" />
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {[0, 1, 2].map((card) => (
              <div
                key={card}
                className="min-w-20 flex-1 rounded-md border p-2.5"
              >
                <div className="bg-muted h-9 rounded" />
                <span className="bg-muted-foreground/30 mt-2.5 block h-1.5 w-[60%] rounded-full" />
                <span className="bg-muted-foreground/20 mt-1.5 block h-1.5 w-[40%] rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

"use client";

import { RiLinksLine } from "@remixicon/react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

import { Shop, type Version } from "@/app/_components/shop";
import { cn } from "@/lib/utils";

const rounds: { version: Version; changed: string[] }[] = [
  {
    version: 1,
    changed: [
      "Price tucked under the name",
      "No way to choose how many",
      "One photo, no detail shots",
    ],
  },
  {
    version: 2,
    changed: [
      "Price up beside the name",
      "Pick the quantity before adding",
      "Buy button given real weight",
    ],
  },
  {
    version: 3,
    changed: [
      "Photos you can click through",
      "Says what is running low",
      "Free delivery said up front",
    ],
  },
];

const turn = 4600;

export function IterationView({
  still,
  compact,
}: {
  still: boolean;
  compact?: boolean;
}) {
  const [at, setAt] = useState(0);
  const [held, setHeld] = useState(false);

  /* Picking a round latches `held`, which retires the timer for good rather
     than restarting it after the next turn. */
  useEffect(() => {
    if (still || held) return;
    const timer = window.setTimeout(
      () => setAt(was => (was + 1) % rounds.length),
      turn,
    );
    return () => window.clearTimeout(timer);
  }, [at, still, held]);

  const round = rounds[at];

  return (
    <div className="concept-scale concept-theme-paper bg-concept-shell absolute inset-0 flex flex-col">
      <div
        className={cn(
          "border-concept-ink/10 flex shrink-0 items-center border-b px-5 py-3",
          compact ? "gap-3" : "flex-wrap gap-x-4 gap-y-2",
        )}
      >
        <span className="bg-concept-canvas border-concept-ink/15 text-concept-muted font-label flex min-w-0 items-center gap-2 border px-3 py-1.5 text-[0.62em] tracking-[0.12em]">
          <RiLinksLine className="text-concept-clay size-[1.1em] shrink-0" />
          <span className="truncate">norvia.ie/preview</span>
        </span>

        <span className="flex items-center gap-1.5">
          {rounds.map((option, index) => (
            <button
              key={option.version}
              type="button"
              onClick={() => {
                setAt(index);
                setHeld(true);
              }}
              className={cn(
                "font-label relative px-3 py-1.5 text-[0.62em] tracking-[0.16em] transition-colors duration-300",
                index === at
                  ? "text-concept-canvas"
                  : "text-concept-muted hover:text-concept-ink",
              )}
            >
              {index === at ? (
                <motion.span
                  layoutId="round"
                  transition={{
                    duration: still ? 0 : 0.35,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="bg-concept-clay absolute inset-0"
                />
              ) : null}
              <span className="relative">V{option.version}</span>
            </button>
          ))}
        </span>

        {compact ? (
          <span className="text-concept-muted ml-auto flex min-w-0 items-center gap-1.5 text-[0.62em]">
            <span className="bg-concept-clay size-[0.35em] shrink-0 rounded-full" />
            <span className="truncate">{round.changed[0]}</span>
          </span>
        ) : (
          <span className="text-concept-muted font-label ml-auto text-[0.6em] tracking-[0.18em]">
            SHARED WITH YOU
          </span>
        )}
      </div>

      <div className="relative min-h-0 flex-1">
        <motion.div
          key={round.version}
          initial={still ? false : { opacity: 0, scale: 0.99 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: still ? 0 : 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <Shop version={round.version} compact={compact} />
        </motion.div>
      </div>

      <div
        className={cn(
          "bg-concept-scrim text-concept-chalk shrink-0 flex-col gap-2 px-6 py-3.5",
          compact ? "hidden" : "flex",
        )}
      >
        <span className="text-concept-chalk/45 font-label text-[0.58em] tracking-[0.2em]">
          ROUND {round.version} — YOU ASKED FOR
        </span>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-1.5">
          {round.changed.map((change, index) => (
            <motion.span
              key={change}
              initial={still ? false : { opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: still ? 0 : 0.35,
                delay: still ? 0 : 0.1 + index * 0.07,
              }}
              className="flex items-center gap-2 text-[0.78em]"
            >
              <span className="bg-concept-clay size-[0.35em] rounded-full" />
              {change}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef, useSyncExternalStore } from "react";

import { cn } from "@/lib/utils";

/* The site already rises text from behind a mask — set-line does it in the
   footer. This is that, on the heading of every section. */
const entrance = [0.16, 1, 0.3, 1] as const;

/* Distinguishes the server render from the hydrated one without setting state
   in an effect, which cascades renders. */
const idle = () => () => {};
const onClient = () => true;
const onServer = () => false;

export function SectionHeading({
  label,
  className,
  children,
}: {
  label: string;
  className?: string;
  children: React.ReactNode;
}) {
  const head = useRef<HTMLElement>(null);
  const seen = useInView(head, { once: true, margin: "0px 0px -15% 0px" });
  const still = useReducedMotion();
  /* Nothing is hidden until JavaScript is running, so the heading is present in
     the server markup and on the first paint. */
  const armed = useSyncExternalStore(idle, onClient, onServer);

  const shown = !armed || seen || still;

  return (
    <header ref={head} className={cn("max-w-3xl", className)}>
      <motion.p
        animate={{ opacity: shown ? 1 : 0, y: shown ? 0 : 6 }}
        initial={false}
        transition={{ duration: still ? 0 : 0.45, ease: entrance }}
        className="text-muted-foreground text-xs font-medium tracking-widest uppercase"
      >
        {label}
      </motion.p>

      <h2 className="mt-5 overflow-hidden pb-1 text-3xl font-semibold tracking-tight text-balance md:text-4xl">
        <motion.span
          animate={{ y: shown ? 0 : "110%" }}
          initial={false}
          transition={{
            duration: still ? 0 : 0.85,
            ease: entrance,
            delay: still ? 0 : 0.08,
          }}
          className="block"
        >
          {children}
        </motion.span>
      </h2>
    </header>
  );
}

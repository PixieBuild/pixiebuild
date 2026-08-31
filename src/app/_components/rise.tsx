"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef, useSyncExternalStore } from "react";

const entrance = [0.16, 1, 0.3, 1] as const;

/* Distinguishes the server render from the hydrated one without setting state
   in an effect, which cascades renders. */
const idle = () => () => {};
const onClient = () => true;
const onServer = () => false;

/* Arms itself after mount, so the server and the first client paint both render
   the card in place — nothing is hidden by a style that only JavaScript can
   undo — and only then does it drop back to be revealed on approach. */
export function Rise({
  delay = 0,
  className,
  children,
}: {
  delay?: number;
  className?: string;
  children: React.ReactNode;
}) {
  const mark = useRef<HTMLDivElement>(null);
  const seen = useInView(mark, { once: true, margin: "0px 0px -8% 0px" });
  const still = useReducedMotion();
  const armed = useSyncExternalStore(idle, onClient, onServer);

  const waiting = armed && !seen && !still;

  return (
    <motion.div
      ref={mark}
      initial={false}
      animate={{
        opacity: waiting ? 0 : 1,
        y: waiting ? 26 : 0,
        scale: waiting ? 0.985 : 1,
      }}
      transition={{
        duration: still ? 0 : 0.75,
        ease: entrance,
        delay: still ? 0 : delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

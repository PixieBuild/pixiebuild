"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

const entrance = [0.16, 1, 0.3, 1] as const;

/* The figure is rendered plainly and counted by writing to the node, so the
   server and the client agree on the markup and only the behaviour differs. */
export function PricingFigure({ value }: { value: string }) {
  const slot = useRef<HTMLSpanElement>(null);
  const seen = useInView(slot, { once: true, margin: "0px 0px -20% 0px" });
  const still = useReducedMotion();
  const target = Number(value.replace(/,/g, ""));
  const countable = Number.isFinite(target);

  useEffect(() => {
    if (still || !countable || !slot.current) return;
    slot.current.textContent = "0";
  }, [still, countable]);

  useEffect(() => {
    const node = slot.current;
    if (!seen || still || !countable || !node) return;

    const run = animate(0, target, {
      duration: 1.1,
      ease: entrance,
      onUpdate: at => {
        node.textContent = Math.round(at).toLocaleString("en-GB");
      },
      onComplete: () => {
        node.textContent = value;
      },
    });

    return () => run.stop();
  }, [seen, still, countable, target, value]);

  return <span ref={slot}>{value}</span>;
}

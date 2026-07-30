"use client";

import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "motion/react";
import { useRef, useState } from "react";

import { CapabilityAccessibility } from "@/app/_components/capability-accessibility";
import { CapabilityCms } from "@/app/_components/capability-cms";
import { CapabilityInterface } from "@/app/_components/capability-interface";
import { CapabilityPerformance } from "@/app/_components/capability-performance";
import { CapabilityRedesign } from "@/app/_components/capability-redesign";
import { CapabilitySearch } from "@/app/_components/capability-search";
import { CapabilityStrategy } from "@/app/_components/capability-strategy";
import { CapabilitySystem } from "@/app/_components/capability-system";

const capabilities = [
  {
    title: "Website Redesign",
    blurb:
      "A site that looks current and earns trust in the first five seconds.",
    preview: <CapabilityRedesign />,
  },
  {
    title: "Performance Optimization",
    blurb:
      "Pages that load before attention runs out, on the connection people actually have.",
    preview: <CapabilityPerformance />,
  },
  {
    title: "SEO & AI Search",
    blurb:
      "Found by search engines, and by the assistants people now ask instead.",
    preview: <CapabilitySearch />,
  },
  {
    title: "CMS Integration",
    blurb: "Your team changes the site themselves, without waiting on us.",
    preview: <CapabilityCms />,
  },
  {
    title: "Accessibility",
    blurb: "Usable with a keyboard, a screen reader, and in bright sunlight.",
    preview: <CapabilityAccessibility />,
  },
  {
    title: "Product Strategy",
    blurb: "Decide what to build before a month goes into building it.",
    preview: <CapabilityStrategy />,
  },
  {
    title: "UI/UX Improvements",
    blurb: "Fewer steps between someone arriving and someone finishing.",
    preview: <CapabilityInterface />,
  },
  {
    title: "Design Systems",
    blurb: "One set of parts, so the next page starts three quarters done.",
    preview: <CapabilitySystem />,
  },
];

export function CapabilityWall() {
  const still = useReducedMotion();
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: track,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (at) => {
    const reached = Math.floor(at * capabilities.length);
    setActive(Math.min(capabilities.length - 1, Math.max(0, reached)));
  });

  const current = capabilities[active];

  return (
    <div
      ref={track}
      style={{ height: `${capabilities.length * 45}vh` }}
      className="relative mt-10 md:mt-14"
    >
      <div className="sticky top-0 flex h-dvh items-center">
        <div className="grid w-full gap-6 sm:gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
          <div className="order-2 lg:order-1 lg:col-span-5">
            <div className="grid">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={capability.title}
                  aria-hidden={index !== active}
                  animate={{ opacity: index === active ? 1 : 0 }}
                  transition={{
                    duration: still ? 0 : 0.3,
                    delay: still || index !== active ? 0 : 0.15,
                  }}
                  className="col-start-1 row-start-1"
                >
                  <h3 className="text-3xl font-semibold tracking-tight text-balance md:text-4xl">
                    {capability.title}
                  </h3>
                  <p className="text-muted-foreground mt-4 max-w-sm text-pretty">
                    {capability.blurb}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-3">
              <span className="text-muted-foreground font-mono text-[0.625rem] tabular-nums">
                {String(active + 1).padStart(2, "0")}
              </span>
              <span className="bg-border h-px max-w-40 flex-1">
                <motion.span
                  animate={{ scaleX: (active + 1) / capabilities.length }}
                  transition={{
                    duration: still ? 0 : 0.4,
                    ease: [0.25, 1, 0.5, 1],
                  }}
                  className="bg-primary block h-full origin-left"
                />
              </span>
              <span className="text-muted-foreground font-mono text-[0.625rem] tabular-nums">
                {String(capabilities.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          <div
            aria-hidden
            className="bg-card/40 order-1 overflow-hidden rounded-2xl border lg:order-2 lg:col-span-7"
          >
            <div className="relative aspect-16/10 lg:aspect-4/3">
              <motion.div
                key={current.title}
                initial={still ? false : { opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: still ? 0 : 0.25,
                  ease: [0.25, 1, 0.5, 1],
                }}
                className="absolute inset-0"
              >
                {current.preview}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

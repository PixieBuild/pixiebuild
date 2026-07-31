"use client";

import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "motion/react";
import { useRef, useState } from "react";

import { ServiceAccessibility } from "@/app/_components/service-accessibility";
import { ServiceCms } from "@/app/_components/service-cms";
import { ServiceInterface } from "@/app/_components/service-interface";
import { ServicePerformance } from "@/app/_components/service-performance";
import { ServiceRedesign } from "@/app/_components/service-redesign";
import { ServiceSearch } from "@/app/_components/service-search";

const services = [
  {
    title: "Website Redesign",
    blurb:
      "A site that looks current and earns trust in the first five seconds.",
    preview: <ServiceRedesign />,
  },
  {
    title: "Performance Optimization",
    blurb:
      "Pages that load before attention runs out, on the connection people actually have.",
    preview: <ServicePerformance />,
  },
  {
    title: "UI/UX Improvements",
    blurb: "Fewer steps between someone arriving and someone finishing.",
    preview: <ServiceInterface />,
  },
  {
    title: "SEO & AI Search",
    blurb:
      "Found by search engines, and by the assistants people now ask instead.",
    preview: <ServiceSearch />,
  },
  {
    title: "CMS Integration",
    blurb: "Your team changes the site themselves, without waiting on us.",
    preview: <ServiceCms />,
  },
  {
    title: "Accessibility",
    blurb: "Usable with a keyboard, a screen reader, and in bright sunlight.",
    preview: <ServiceAccessibility />,
  },
];

export function ServiceWall() {
  const still = useReducedMotion();
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: track,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (at) => {
    const reached = Math.floor(at * services.length);
    setActive(Math.min(services.length - 1, Math.max(0, reached)));
  });

  const current = services[active];

  return (
    <div
      ref={track}
      style={{ height: `${services.length * 45}vh` }}
      className="relative mt-10 md:mt-14"
    >
      <div className="sticky top-0 flex h-dvh items-center">
        <div className="grid w-full gap-6 sm:gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
          <div className="order-2 mx-auto w-full max-w-lg lg:order-1 lg:col-span-5 lg:mx-0 lg:max-w-none">
            <div className="grid">
              {services.map((service, index) => (
                <motion.div
                  initial={false}
                  key={service.title}
                  aria-hidden={index !== active}
                  animate={{ opacity: index === active ? 1 : 0 }}
                  transition={{
                    duration: still ? 0 : 0.3,
                    delay: still || index !== active ? 0 : 0.15,
                  }}
                  className="col-start-1 row-start-1"
                >
                  <h3 className="text-3xl font-semibold tracking-tight text-balance md:text-4xl">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mt-4 max-w-sm text-pretty">
                    {service.blurb}
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
                  animate={{ scaleX: (active + 1) / services.length }}
                  transition={{
                    duration: still ? 0 : 0.4,
                    ease: [0.25, 1, 0.5, 1],
                  }}
                  className="bg-primary block h-full origin-left"
                />
              </span>
              <span className="text-muted-foreground font-mono text-[0.625rem] tabular-nums">
                {String(services.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          <div
            aria-hidden
            className="bg-card/40 order-1 mx-auto w-full max-w-lg overflow-hidden rounded-2xl border lg:order-2 lg:col-span-7 lg:mx-0 lg:max-w-none"
          >
            <div className="relative aspect-square sm:aspect-4/3">
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

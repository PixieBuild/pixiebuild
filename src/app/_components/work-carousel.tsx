"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { PagePlaceholder } from "@/app/_components/page-placeholder";

export type Project = {
  name: string;
  domain: string;
  sector: string;
  built: string;
  delivered: string[];
  year: string;
  /* Paths under /public/work. A skeleton page stands in until one is set. */
  image?: string;
  phone?: string;
  /* Serves the file untouched. Set it where the optimizer's re-encode costs
     more than the bytes it saves — dense UI, fine type, flat colour. */
  unoptimized?: boolean;
};

type WorkCarouselProps = {
  projects: Project[];
};

const spread = 103;

const shown = 1;

/* A tile crosses from one end of the ring to the other between the two slots
   furthest from centre. Below five tiles those slots are on screen, so the
   crossing is visible; running the deck twice moves it out of sight. */
const least = 5;

export function WorkCarousel({ projects }: WorkCarouselProps) {
  const still = useReducedMotion();
  const stage = useRef<HTMLDivElement>(null);
  const seen = useInView(stage, { once: true, margin: "0px 0px -25% 0px" });
  const [active, setActive] = useState(0);
  const [held, setHeld] = useState(false);
  const ring =
    projects.length < least ? [...projects, ...projects] : [...projects];
  const count = ring.length;
  const current = projects[active % projects.length];

  /* Depends on active so the wait restarts after a manual pick — otherwise it
     can advance a moment after someone chooses. */
  useEffect(() => {
    if (!seen || still || held) return;
    const id = setTimeout(() => setActive((at) => (at + 1) % count), 4600);
    return () => clearTimeout(id);
  }, [seen, still, held, count, active]);

  /* Positions wrap, so the slots either side of centre are always filled and
     the run has no start or end to reach. */
  const slotOf = (index: number) => {
    const raw = (index - active + count) % count;
    return raw > count / 2 ? raw - count : raw;
  };

  /* A project can sit at two places on a doubled ring. Move to whichever copy
     is nearer, so picking one never rewinds the deck further than it must. */
  const handlePick = (index: number) => {
    const copies = ring
      .map((_, at) => at)
      .filter((at) => at % projects.length === index);
    setActive(
      copies.reduce((best, at) =>
        Math.abs(slotOf(at)) < Math.abs(slotOf(best)) ? at : best,
      ),
    );
  };

  return (
    <div
      onMouseEnter={() => setHeld(true)}
      onMouseLeave={() => setHeld(false)}
      className="mt-10 sm:mt-14 md:mt-20"
    >
      <div ref={stage} className="relative overflow-hidden pb-3 sm:pb-12">
        <div
          aria-hidden
          className="invisible mx-auto aspect-16/10 w-[82vw] sm:w-104 lg:w-2xl"
        />

        {ring.map((project, index) => {
          const slot = slotOf(index);
          const away = Math.abs(slot);
          const centre = slot === 0;

          return (
            <div
              key={`${project.name}-${index}`}
              style={{ zIndex: count - away }}
              className="absolute inset-x-0 top-0 flex items-start justify-center"
            >
              <motion.article
                initial={false}
                animate={
                  seen
                    ? {
                        x: `${slot * spread}%`,
                        scale: centre ? 1 : 0.82,
                        opacity: away > shown ? 0 : centre ? 1 : 0.45,
                        filter: centre ? "blur(0px)" : "blur(2px)",
                      }
                    : { x: "0%", scale: 0.92, opacity: 0, filter: "blur(6px)" }
                }
                transition={{
                  duration: still ? 0 : 0.7,
                  ease: [0.25, 1, 0.5, 1],
                  opacity: { duration: still ? 0 : 0.5 },
                }}
                className="relative w-[82vw] sm:w-104 lg:w-2xl"
              >
                <div className="bg-muted shadow-elev-2 relative aspect-16/10 overflow-hidden rounded-2xl border">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`${project.name} — ${project.sector}`}
                      fill
                      sizes="(min-width: 1024px) 42rem, 82vw"
                      unoptimized={project.unoptimized}
                      className="object-cover object-top"
                      priority={index === 0}
                    />
                  ) : (
                    <PagePlaceholder />
                  )}
                </div>

                <div className="shadow-elev-2 absolute right-6 -bottom-7 hidden w-24 rounded-[1.45rem] bg-neutral-900 p-0.75 ring-1 ring-white/12 ring-inset sm:block lg:w-28">
                  <div className="rounded-[1.25rem] p-0.75 ring-1 ring-white/10 ring-inset">
                    <div className="bg-muted relative aspect-9/18 overflow-hidden rounded-[1.05rem]">
                      {project.phone ? (
                        <Image
                          src={project.phone}
                          alt=""
                          fill
                          sizes="7rem"
                          unoptimized={project.unoptimized}
                          className="object-cover object-top"
                        />
                      ) : (
                        <PagePlaceholder phone />
                      )}

                      <span
                        aria-hidden
                        className="absolute top-1 left-1/2 h-1.5 w-6 -translate-x-1/2 rounded-full bg-black/75"
                      />
                    </div>
                  </div>
                </div>
              </motion.article>
            </div>
          );
        })}
      </div>

      <div className="mx-auto mt-8 grid max-w-2xl px-6 sm:mt-14">
        {projects.map((project) => (
          <div
            key={project.name}
            aria-hidden={project.name !== current.name}
            style={{ opacity: project.name === current.name ? 1 : 0 }}
            className="ease-interface col-start-1 row-start-1 flex flex-col gap-2 text-center transition-opacity duration-500"
          >
            <div className="flex items-baseline justify-center gap-3">
              <h3 className="text-xl font-semibold tracking-tight">
                {project.name}
              </h3>
              <span className="text-muted-foreground font-mono text-xs">
                {project.domain}
              </span>
            </div>

            <p className="text-muted-foreground text-sm text-pretty">
              {project.built}
            </p>

            <ul className="text-muted-foreground flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-mono text-[0.6875rem]">
              {project.delivered.map((item, place) => (
                <li key={item} className="flex items-center gap-3">
                  {place > 0 ? (
                    <span
                      aria-hidden
                      className="bg-border size-1 rounded-full"
                    />
                  ) : null}
                  {item}
                </li>
              ))}
              <li className="flex items-center gap-3">
                <span aria-hidden className="bg-border size-1 rounded-full" />
                {project.year}
              </li>
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-center gap-2 sm:mt-8">
        {projects.map((project, index) => (
          <button
            key={project.name}
            type="button"
            onClick={() => handlePick(index)}
            aria-label={`Show ${project.name}`}
            aria-current={index === active % projects.length}
            className="group cursor-pointer px-1 py-3"
          >
            <span className="bg-border group-hover:bg-muted-foreground group-aria-current:bg-foreground ease-interface block h-1 w-6 rounded-full transition-colors duration-300" />
          </button>
        ))}
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { useRef } from "react";

export type Project = {
  name: string;
  sector: string;
  built: string;
  delivered: string[];
  year: string;
  image: string;
  blur: string;
  tone: "light" | "dark";
  unoptimized?: boolean;
};

/* Each card stops a little lower than the one before, so the edge of every
   project it has already passed stays on screen underneath it. */
const rest = ["lg:top-24", "lg:top-28", "lg:top-32", "lg:top-36"];

function Card({
  project,
  index,
  count,
  progress,
}: {
  project: Project;
  index: number;
  count: number;
  progress: MotionValue<number>;
}) {
  const still = useReducedMotion();

  /* A card is buried over the stretch the next one takes to cover it, so its
     depth is read from the deck's progress rather than its own box — a sticky
     element never moves, so it has no progress of its own to read. */
  const from = index / count;
  const to = (index + 1) / count;
  /* Nothing covers the last one, so nothing buries it either. */
  const buried = index < count - 1;

  const scale = useTransform(progress, [from, to], still || !buried ? [1, 1] : [1, 0.94], {
    clamp: true,
  });
  const dim = useTransform(progress, [from, to], still || !buried ? [0, 0] : [0, 0.42], {
    clamp: true,
  });

  /* The screenshot drifts against its frame as the card travels, so the crop
     reads as a window onto the site rather than a picture of it. Both ranges
     start at the same place, so the server and the client agree on the first
     paint whatever the motion preference is. */
  const drift = useTransform(
    progress,
    [Math.max(0, from - 1 / count), to],
    still ? ["8%", "8%"] : ["8%", "0%"],
    { clamp: true },
  );

  return (
    <article className={`lg:sticky ${rest[index] ?? "lg:top-36"}`}>
      <motion.div
        style={{ scale }}
        className="group bg-card shadow-elev-2 relative grid origin-top overflow-hidden rounded-2xl border lg:grid-cols-[1.4fr_1fr]"
      >
        <div className="relative aspect-16/10 overflow-hidden">
          <motion.div
            style={{ y: drift }}
            className="absolute inset-x-0 -inset-y-[10%]"
          >
            <Image
              src={project.image}
              alt={`${project.name} — ${project.sector}`}
              fill
              sizes="(min-width: 1024px) 56vw, 92vw"
              unoptimized={project.unoptimized}
              placeholder="blur"
              blurDataURL={project.blur}
              className="ease-interface object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </motion.div>
        </div>

        <div className="flex flex-col justify-between p-7 md:p-10 lg:p-12">
          <div className="text-muted-foreground font-label flex items-baseline justify-between gap-4 text-[0.6875rem] tracking-[0.16em] uppercase">
            <span>{project.sector}</span>
            <span className="flex items-baseline gap-3">
              <span className="tabular-nums">{project.year}</span>
              <span className="text-foreground/25 text-sm tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
            </span>
          </div>

          <div className="mt-10 lg:mt-0">
            <h3 className="text-3xl font-semibold tracking-tight md:text-4xl">
              {project.name}
            </h3>
            <p className="text-muted-foreground mt-4 leading-relaxed text-pretty">
              {project.built}
            </p>
            <ul className="border-foreground/10 text-muted-foreground/70 font-label mt-7 flex flex-wrap items-center gap-x-3 gap-y-1.5 border-t pt-5 text-[0.6875rem] tracking-[0.16em] uppercase">
              {project.delivered.map((item, place) => (
                <li key={item} className="flex items-center gap-3">
                  {item}
                  {place < project.delivered.length - 1 ? (
                    <span
                      aria-hidden
                      className="bg-border size-1 rounded-full"
                    />
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Buried cards fall back rather than simply being covered. */}
        {buried ? (
          <motion.span
            aria-hidden
            style={{ opacity: dim }}
            className="bg-background pointer-events-none absolute inset-0 hidden lg:block"
          />
        ) : null}
      </motion.div>
    </article>
  );
}

export function WorkStack({ projects }: { projects: Project[] }) {
  const deck = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: deck,
    offset: ["start 140px", "end end"],
  });

  return (
    <div ref={deck} className="flex flex-col gap-6 md:gap-8">
      {projects.map((project, index) => (
        <Card
          key={project.name}
          project={project}
          index={index}
          count={projects.length}
          progress={scrollYProgress}
        />
      ))}
    </div>
  );
}

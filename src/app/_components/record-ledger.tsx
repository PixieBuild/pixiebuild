"use client";

import { RiAddLine, RiStarFill } from "@remixicon/react";
import { motion, useMotionValue, useSpring } from "motion/react";
import Image from "next/image";
import { useState } from "react";

import { jobs } from "@/lib/record";
import { cn } from "@/lib/utils";

const index = (place: number) => String(place + 1).padStart(2, "0");

const columns = ["Client", "What we built", "Time", "Rating"];

const trail = { stiffness: 320, damping: 32, mass: 0.7 };

export function RecordLedger() {
  const [open, setOpen] = useState<string | null>(jobs[0]?.id ?? null);
  const [hover, setHover] = useState<string | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const left = useSpring(x, trail);
  const top = useSpring(y, trail);

  const hovered = jobs.find(job => job.id === hover);
  const preview =
    hovered && hovered.id !== open && hovered.image
      ? { ...hovered, image: hovered.image }
      : null;

  return (
    <div
      onPointerMove={event => {
        x.set(event.clientX + 28);
        y.set(event.clientY - 90);
      }}
      onPointerLeave={() => setHover(null)}
    >
      <div className="text-muted-foreground font-label border-foreground/12 hidden grid-cols-[2.5rem_1fr_1fr_5rem_4rem_1.5rem] gap-x-6 border-b py-3 text-[0.625rem] tracking-[0.16em] uppercase md:grid">
        <span>#</span>
        {columns.map(column => (
          <span key={column}>{column}</span>
        ))}
      </div>

      <ol className="divide-foreground/12 border-foreground/12 divide-y border-b">
        {jobs.map((job, place) => {
          const here = open === job.id;

          return (
            <li key={job.id}>
              <button
                type="button"
                onClick={() => setOpen(here ? null : job.id)}
                onPointerEnter={() => setHover(job.id)}
                aria-expanded={here}
                className="group/job ease-interface -mx-3 flex w-[calc(100%+1.5rem)] items-center gap-4 px-3 py-5 text-left transition-colors duration-300 hover:bg-foreground/3 md:grid md:grid-cols-[2.5rem_1fr_1fr_5rem_4rem_1.5rem] md:items-baseline md:gap-x-6"
              >
                <span className="flex min-w-0 flex-1 flex-col gap-2 md:hidden">
                  <span className="text-muted-foreground font-label flex items-center gap-2 text-[0.625rem] tracking-[0.16em] uppercase">
                    <span
                      className={cn(
                        "tabular-nums",
                        here ? "text-primary" : "text-muted-foreground/60",
                      )}
                    >
                      {index(place)}
                    </span>
                    <span aria-hidden className="bg-border size-1 rounded-full" />
                    <span className="tabular-nums">{job.days} days</span>
                    <span aria-hidden className="bg-border size-1 rounded-full" />
                    <span className="text-primary flex items-center gap-1 tabular-nums">
                      <RiStarFill className="size-3" />
                      {job.rating.toFixed(1)}
                    </span>
                  </span>
                  <span
                    className={cn(
                      "ease-interface text-lg font-medium tracking-tight transition-colors duration-300",
                      here ? "text-foreground" : "text-muted-foreground",
                    )}
                  >
                    {job.business}
                    <span className="text-muted-foreground/60 text-base font-normal">
                      {" "}
                      · {job.place}
                    </span>
                  </span>
                  <span className="text-muted-foreground text-sm">{job.built}</span>
                </span>

                <span
                  className={cn(
                    "font-label ease-interface hidden text-[0.6875rem] tracking-[0.16em] tabular-nums transition-colors duration-300 md:block",
                    here ? "text-primary" : "text-muted-foreground/60",
                  )}
                >
                  {index(place)}
                </span>

                <span
                  className={cn(
                    "ease-interface hidden text-lg font-medium tracking-tight transition-colors duration-300 md:block",
                    here
                      ? "text-foreground"
                      : "text-muted-foreground group-hover/job:text-foreground",
                  )}
                >
                  {job.business}
                  <span className="text-muted-foreground/60 text-base font-normal">
                    {" "}
                    · {job.place}
                  </span>
                </span>

                <span className="text-muted-foreground hidden text-[0.9375rem] md:block">
                  {job.built}
                </span>

                <span className="text-muted-foreground font-label hidden text-[0.6875rem] tracking-[0.16em] tabular-nums uppercase md:block">
                  {job.days} days
                </span>

                <span className="text-primary hidden items-center gap-1 text-sm tabular-nums md:flex">
                  <RiStarFill className="size-3.5" />
                  {job.rating.toFixed(1)}
                </span>

                <span
                  aria-hidden
                  className={cn(
                    "ease-interface flex size-6 shrink-0 items-center justify-center rounded-full border transition-[transform,background-color,border-color] duration-300 md:self-center",
                    here
                      ? "bg-foreground border-foreground text-background rotate-45"
                      : "border-foreground/20 text-muted-foreground group-hover/job:border-foreground/50",
                  )}
                >
                  <RiAddLine className="size-3.5" />
                </span>
              </button>

              <div
                className={cn(
                  "ease-entrance motion-reduce:transition-none grid transition-[grid-template-rows] duration-500",
                  here ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                )}
              >
                <div className="overflow-hidden">
                  <div
                    className={cn(
                      "ease-entrance motion-reduce:transition-none flex flex-col gap-6 pt-1 pb-8 transition-opacity duration-300 md:flex-row md:items-start md:justify-between md:gap-12 md:pb-9 md:pl-16",
                      here ? "opacity-100 delay-150" : "opacity-0",
                    )}
                  >
                    <div className="flex max-w-[48ch] flex-1 flex-col gap-5">
                      {job.review ? (
                        <blockquote className="text-xl leading-snug font-medium tracking-tight text-balance md:text-2xl">
                          &ldquo;{job.review}&rdquo;
                        </blockquote>
                      ) : (
                        <p className="text-muted-foreground text-base leading-relaxed">
                          Delivered and signed off. No written review on this
                          one.
                        </p>
                      )}

                      <p className="flex items-center gap-3">
                        <span className="bg-foreground text-background flex size-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold">
                          {job.client[0]}
                        </span>
                        <span className="flex flex-col">
                          <span className="text-sm font-medium">{job.client}</span>
                          <span className="text-muted-foreground text-sm">
                            {job.business}, {job.place} · {job.days} days
                          </span>
                        </span>
                      </p>
                    </div>

                    {job.image ? (
                      <div className="bg-card shadow-elev-2 w-full shrink-0 overflow-hidden border md:w-80">
                        <div className="bg-muted flex items-center gap-1.5 border-b px-3 py-2">
                          {[0, 1, 2].map(light => (
                            <span
                              key={light}
                              className="bg-foreground/15 size-1.5 rounded-full"
                            />
                          ))}
                          <span className="text-muted-foreground font-label ml-2 text-[0.5625rem] tracking-[0.12em] uppercase">
                            {job.business} · {job.place}
                          </span>
                        </div>
                        <div className="relative aspect-16/10">
                          <Image
                            src={job.image}
                            alt={`${job.business} in ${job.place}`}
                            fill
                            sizes="(min-width: 768px) 320px, 90vw"
                            className="object-cover object-top"
                          />
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ol>

      <motion.div
        aria-hidden
        style={{ left, top }}
        animate={{ opacity: preview ? 1 : 0, scale: preview ? 1 : 0.96 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="bg-card shadow-elev-2 pointer-events-none fixed z-30 hidden w-60 overflow-hidden border pointer-fine:block"
      >
        {preview ? (
          <>
            <div className="bg-muted flex items-center gap-1.5 border-b px-2.5 py-1.5">
              {[0, 1, 2].map(light => (
                <span
                  key={light}
                  className="bg-foreground/15 size-1.5 rounded-full"
                />
              ))}
              <span className="text-muted-foreground font-label ml-2 truncate text-[0.5625rem] tracking-[0.12em] uppercase">
                {preview.business} · {preview.place}
              </span>
            </div>
            <div className="relative aspect-16/10">
              <Image
                src={preview.image}
                alt=""
                fill
                sizes="240px"
                className="object-cover object-top"
              />
            </div>
          </>
        ) : null}
      </motion.div>
    </div>
  );
}

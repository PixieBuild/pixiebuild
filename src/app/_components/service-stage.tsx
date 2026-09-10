"use client";

import {
  animate,
  useIsomorphicLayoutEffect,
  useReducedMotion,
} from "motion/react";
import { useEffect, useRef, useState } from "react";

import { ServiceFrame } from "@/app/_components/service-frame";
import { services } from "@/lib/services";
import { cn } from "@/lib/utils";

const wide = "(min-width: 1280px) and (orientation: landscape)";
const dwell = 6500;
const reprieve = 9000;
const running = { "--run": 0 } as React.CSSProperties;

const index = (place: number) => String(place + 1).padStart(2, "0");

/* Scrolls the row itself; scrollIntoView would scroll every ancestor too. */
const slide = (
  row: HTMLDivElement | null,
  cell: HTMLDivElement | null,
  calm: boolean | null,
) => {
  if (!row || !cell) return;

  const middle = row.getBoundingClientRect().left + row.clientWidth / 2;
  const box = cell.getBoundingClientRect();

  row.scrollTo({
    left: row.scrollLeft + (box.left + box.width / 2 - middle),
    behavior: calm ? "auto" : "smooth",
  });
};

function Includes({ service }: { service: (typeof services)[number] }) {
  return (
    <ul className="text-muted-foreground/70 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs">
      {service.includes.map((item, place) => (
        <li key={item} className="flex items-center gap-3">
          {item}
          {place < service.includes.length - 1 ? (
            <span aria-hidden className="bg-border size-1 rounded-full" />
          ) : null}
        </li>
      ))}
    </ul>
  );
}

export function ServiceStage({ heading }: { heading: React.ReactNode }) {
  const track = useRef<HTMLDivElement>(null);
  const row = useRef<HTMLDivElement>(null);
  const rail = useRef<HTMLDivElement>(null);
  const cells = useRef<(HTMLDivElement | null)[]>([]);
  const [at, setAt] = useState(0);
  const [last, setLast] = useState(0);
  const [decked, setDecked] = useState(false);
  const [handled, setHandled] = useState(0);
  const [watched, setWatched] = useState(false);

  const calm = useReducedMotion();

  useEffect(() => {
    const stacks = window.matchMedia(wide);
    const sync = () => setDecked(stacks.matches);

    sync();
    stacks.addEventListener("change", sync);
    return () => stacks.removeEventListener("change", sync);
  }, []);

  /* The nearest card to the middle, not a share of the scrolled distance: the
     row is padded and gapped, and its last card parks against the end. */
  useEffect(() => {
    if (decked) return;
    const node = row.current;
    if (!node) return;

    const read = () => {
      const middle = node.getBoundingClientRect().left + node.clientWidth / 2;
      let nearest = 0;
      let closest = Infinity;

      cells.current.forEach((cell, place) => {
        if (!cell) return;
        const box = cell.getBoundingClientRect();
        const gap = Math.abs(box.left + box.width / 2 - middle);
        if (gap < closest) {
          closest = gap;
          nearest = place;
        }
      });

      setAt(nearest);
    };

    node.addEventListener("scroll", read, { passive: true });
    return () => node.removeEventListener("scroll", read);
  }, [decked]);

  useEffect(() => {
    const node = track.current;
    if (!node) return;

    const watch = new IntersectionObserver(entries =>
      setWatched(entries[0].isIntersecting),
    );

    watch.observe(node);
    return () => watch.disconnect();
  }, []);

  useEffect(() => {
    if (calm || handled || !watched) return;

    const timer = window.setTimeout(() => {
      const next = (at + 1) % services.length;

      if (decked) {
        setLast(at);
        setAt(next);
        return;
      }

      slide(row.current, cells.current[next], calm);
    }, dwell);

    return () => window.clearTimeout(timer);
  }, [at, decked, calm, handled, watched]);

  /* Spends the same wait the rotation is keeping, so the rail fills as the turn
     runs out. Emptied whenever that wait is not standing. */
  useIsomorphicLayoutEffect(() => {
    const node = rail.current;
    if (!node || !decked) return;

    if (calm) {
      node.style.setProperty("--run", "1");
      return;
    }

    node.style.setProperty("--run", "0");
    if (handled || !watched) return;

    const run = animate(0, 1, {
      duration: dwell / 1000,
      ease: "linear",
      onUpdate: spent => node.style.setProperty("--run", `${spent}`),
    });

    return () => run.stop();
  }, [at, decked, calm, handled, watched]);

  useEffect(() => {
    const node = track.current;
    if (!node) return;

    const claim = () => setHandled(count => count + 1);
    node.addEventListener("pointerdown", claim, { passive: true });
    return () => node.removeEventListener("pointerdown", claim);
  }, []);

  /* Counted rather than latched, so a second hand re-arms the wait instead of
     being swallowed by a count that is already standing. */
  useEffect(() => {
    if (!handled) return;

    const timer = window.setTimeout(() => setHandled(0), reprieve);
    return () => window.clearTimeout(timer);
  }, [handled]);

  const show = (next: number) => {
    setHandled(count => count + 1);

    if (decked) {
      setLast(at);
      setAt(next);
      return;
    }

    slide(row.current, cells.current[next], calm);
  };

  return (
    <div ref={track}>
      <div className="mx-auto hidden w-full max-w-page px-16 xl:landscape:block">
        <div className="flex gap-12 2xl:gap-16">
          <div className="order-2 flex w-[34%] max-w-116 min-w-76 shrink-0 flex-col 2xl:w-[32%] 2xl:max-w-132">
            {heading}

            <span aria-hidden className="bg-foreground/12 mt-10 h-px w-full" />

            <ol className="divide-foreground/12 border-foreground/12 divide-y border-b">
              {services.map((service, place) => {
                const here = place === at;

                return (
                  <li key={service.id}>
                    <button
                      type="button"
                      onClick={() => show(place)}
                      aria-current={here ? "true" : undefined}
                      className="group/service flex w-full items-baseline gap-3 py-4 text-left"
                    >
                      <span
                        className={cn(
                          "font-label ease-interface text-[0.6875rem] tracking-[0.16em] tabular-nums transition-colors duration-300 2xl:text-xs",
                          here ? "text-primary" : "text-muted-foreground/60",
                        )}
                      >
                        {index(place)}
                      </span>
                      <span
                        aria-hidden
                        className={cn(
                          "ease-interface h-px w-6 shrink-0 transition-colors duration-300",
                          here ? "bg-primary/40" : "bg-foreground/15",
                        )}
                      />
                      <span
                        className={cn(
                          "ease-interface text-base font-medium tracking-tight transition-colors duration-300 2xl:text-lg",
                          here
                            ? "text-foreground"
                            : "text-muted-foreground group-hover/service:text-foreground",
                        )}
                      >
                        {service.title}
                      </span>
                      <span className="text-muted-foreground/60 font-label ml-auto shrink-0 text-[0.625rem] tracking-[0.16em] uppercase 2xl:text-[0.6875rem]">
                        {service.meta}
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
                            "ease-entrance motion-reduce:transition-none flex flex-col gap-3.5 pb-5 transition-opacity duration-300",
                            here ? "opacity-100 delay-150" : "opacity-0",
                          )}
                        >
                          <p className="text-muted-foreground max-w-[44ch] text-[0.9375rem] leading-relaxed text-pretty">
                            {service.blurb}
                          </p>
                          <Includes service={service} />
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>

            <div
              ref={rail}
              style={running}
              aria-hidden
              className="mt-auto flex items-center gap-2 pt-10"
            >
              {services.map((service, place) => (
                <span
                  key={service.id}
                  className={cn(
                    "relative block h-px flex-1 overflow-hidden",
                    place < at ? "bg-primary" : "bg-foreground/15",
                  )}
                >
                  {place === at ? (
                    <span className="bg-primary build-run absolute inset-0 origin-left" />
                  ) : null}
                </span>
              ))}
              <span className="text-muted-foreground font-label ml-3 text-[0.625rem] tracking-[0.16em] tabular-nums 2xl:text-xs">
                {index(at)} / {index(services.length - 1)}
              </span>
            </div>
          </div>

          <div className="order-1 flex min-w-0 flex-1 items-center">
            <div className="mx-auto w-[min(100%,calc((100svh-9rem)*1.5))]">
              <ServiceFrame at={at} last={last} />
            </div>
          </div>
        </div>
      </div>

      <div className="xl:landscape:hidden">
        <div className="mx-auto w-full max-w-page px-6 sm:px-8 md:px-12 lg:px-16">
          {heading}
        </div>

        <div
          ref={row}
          className="scrollbar-none mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 motion-safe:scroll-smooth sm:gap-6 sm:px-8 md:mt-12 md:px-12 lg:px-16"
        >
          {services.map((service, place) => (
            <div
              key={service.id}
              ref={cell => {
                cells.current[place] = cell;
              }}
              className="flex w-[88%] shrink-0 snap-center flex-col sm:w-[64%] md:w-[72%]"
            >
              <div className="md:hidden">
                <ServiceFrame at={place} single phone />
              </div>
              <div className="hidden md:block">
                <ServiceFrame at={place} single />
              </div>

              <p className="mt-4 flex items-baseline gap-3">
                <span
                  className={cn(
                    "font-label text-[0.6875rem] tracking-[0.16em] tabular-nums",
                    place === at ? "text-primary" : "text-muted-foreground",
                  )}
                >
                  {index(place)}
                </span>
                <span
                  className={cn(
                    "text-base font-medium tracking-tight",
                    place === at ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {service.title}
                </span>
                <span className="text-muted-foreground/60 font-label ml-auto shrink-0 text-[0.625rem] tracking-[0.16em] uppercase">
                  {service.meta}
                </span>
              </p>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed text-pretty">
                {service.blurb}
              </p>
              <div className="mt-2.5">
                <Includes service={service} />
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-6 flex w-full max-w-page gap-1.5 px-6 sm:px-8 md:px-12 lg:px-16">
          {services.map((service, place) => (
            <button
              key={service.id}
              type="button"
              aria-label={`Show ${service.title}`}
              aria-current={place === at ? "true" : undefined}
              onClick={() => show(place)}
              className="flex-1 py-3"
            >
              <span
                className={cn(
                  "ease-interface block h-px w-full transition-colors duration-300",
                  place === at ? "bg-primary" : "bg-foreground/20",
                )}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

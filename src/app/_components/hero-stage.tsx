"use client";

import {
  animate,
  useIsomorphicLayoutEffect,
  useReducedMotion,
  type AnimationPlaybackControls,
} from "motion/react";
import { useEffect, useRef, useState } from "react";

import { ConceptCadence } from "@/app/_components/concept-cadence";
import { ConceptCadencePhone } from "@/app/_components/concept-cadence-phone";
import { ConceptFigVine } from "@/app/_components/concept-fig-vine";
import { ConceptFigVinePhone } from "@/app/_components/concept-fig-vine-phone";
import { ConceptFoss } from "@/app/_components/concept-foss";
import { ConceptFossPhone } from "@/app/_components/concept-foss-phone";
import { ConceptKessler } from "@/app/_components/concept-kessler";
import { ConceptKesslerPhone } from "@/app/_components/concept-kessler-phone";
import { ConceptNorthline } from "@/app/_components/concept-northline";
import { ConceptNorthlinePhone } from "@/app/_components/concept-northline-phone";
import { cn } from "@/lib/utils";

const arrival = 0.44;

const entrance = [0.16, 1, 0.3, 1] as const;
const cadence = 0.55;
const dealt = 300;

const deal = 110;
const wide = "(min-width: 1024px)";
const dwell = 5200;
const reprieve = 9000;
const held = { "--step": 0, "--act": 0 } as React.CSSProperties;
const move = 0.62;
const cue = 1.4;
const shut = { "--in": 0 } as React.CSSProperties;
const running = { "--run": 0 } as React.CSSProperties;
const depth = (index: number, front: number, count: number) =>
  (index - front + count) % count;

const clamp = (value: number, limit: number) =>
  Math.round(Math.max(-limit, Math.min(limit, value)));

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
const settle = 0.02;

const assemble = (
  cell: HTMLElement,
  runs: AnimationPlaybackControls[],
  after: number,
) => {
  for (const piece of cell.querySelectorAll<HTMLElement>(".build-part")) {
    runs.push(
      animate(0, 1, {
        duration: arrival,
        delay:
          after +
          settle +
          Number(piece.style.getPropertyValue("--beat")) * cadence,
        ease: entrance,
        onUpdate: step => piece.style.setProperty("--step", `${step}`),
      }),
    );
  }
};

const builds = [
  {
    trade: "Business websites",
    page: <ConceptNorthline />,
    phone: <ConceptNorthlinePhone />,
  },
  {
    trade: "Hospitality experiences",
    page: <ConceptFigVine />,
    phone: <ConceptFigVinePhone />,
  },
  {
    trade: "Dashboards & apps",
    page: <ConceptCadence />,
    phone: <ConceptCadencePhone />,
  },
  {
    trade: "Commerce storefronts",
    page: <ConceptKessler />,
    phone: <ConceptKesslerPhone />,
  },
  {
    trade: "Brand experiences",
    page: <ConceptFoss />,
    phone: <ConceptFossPhone />,
  },
];

export function HeroStage({
  header,
  title,
  lead,
  actions,
}: {
  header: React.ReactNode;
  title: React.ReactNode;
  lead: React.ReactNode;
  actions: React.ReactNode;
}) {
  const track = useRef<HTMLElement>(null);
  const deck = useRef<HTMLDivElement>(null);
  const rail = useRef<HTMLDivElement>(null);
  const cells = useRef<(HTMLDivElement | null)[]>([]);
  const shown = useRef(new Set<number>());
  const settled = useRef(false);
  const opened = useRef(false);
  const runs = useRef<AnimationPlaybackControls[]>([]);
  const [at, setAt] = useState(0);
  const [decked, setDecked] = useState(false);
  const [handled, setHandled] = useState(0);
  const [watched, setWatched] = useState(true);

  const calm = useReducedMotion();

  useEffect(() => {
    const stacks = window.matchMedia(wide);
    const sync = () => setDecked(stacks.matches);

    sync();
    stacks.addEventListener("change", sync);
    return () => stacks.removeEventListener("change", sync);
  }, []);

  /* The nearest build to the middle, not a share of the scrolled distance: the
     row is padded and gapped, and its last build parks against the end. */
  useEffect(() => {
    if (decked) return;
    const node = deck.current;
    if (!node) return;

    const read = () => {
      const middle = node.getBoundingClientRect().left + node.clientWidth / 2;
      let nearest = 0;
      let closest = Infinity;

      cells.current.forEach((cell, index) => {
        if (!cell) return;
        const box = cell.getBoundingClientRect();
        const gap = Math.abs(box.left + box.width / 2 - middle);
        if (gap < closest) {
          closest = gap;
          nearest = index;
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
      const next = (at + 1) % builds.length;

      if (decked) {
        setAt(next);
        return;
      }

      slide(deck.current, cells.current[next], calm);
    }, dwell);

    return () => window.clearTimeout(timer);
  }, [at, decked, calm, handled, watched]);

  /* Spends the same wait the rotation is keeping, so the rail fills as the turn
     runs out. Emptied whenever that wait is not standing — a held or unwatched
     deck starts its wait over, so a part-filled mark would promise a turn that
     is no longer counting down. */
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
    const node = deck.current;
    if (!node) return;

    const claim = () => setHandled(count => count + 1);
    node.addEventListener("pointerdown", claim, { passive: true });
    return () => node.removeEventListener("pointerdown", claim);
  }, []);

  /* Counted rather than latched, so a second hand on the deck re-arms the wait
     instead of being swallowed by a count that is already standing. */
  useEffect(() => {
    if (!handled) return;

    const timer = window.setTimeout(() => setHandled(0), reprieve);
    return () => window.clearTimeout(timer);
  }, [handled]);
  useEffect(() => {
    if (!decked || calm) return;
    const node = track.current;
    const stack = deck.current;
    if (!node || !stack) return;

    let waiting = 0;

    const follow = (event: PointerEvent) => {
      if (event.pointerType === "touch" || waiting) return;
      waiting = requestAnimationFrame(() => {
        waiting = 0;
        const box = node.getBoundingClientRect();
        const across = (event.clientX - box.left) / box.width - 0.5;
        const down = (event.clientY - box.top) / box.height - 0.5;

        /* Leant towards the hand, and drawn a little way after it. */
        const deck = stack.getBoundingClientRect();
        const pullX = (event.clientX - (deck.left + deck.width / 2)) * 0.05;
        const pullY = (event.clientY - (deck.top + deck.height / 2)) * 0.05;

        stack.style.setProperty("--sway", `${across * 9}deg`);
        stack.style.setProperty("--lean", `${down * -5}deg`);
        stack.style.setProperty("--pull-x", `${clamp(pullX, 22)}px`);
        stack.style.setProperty("--pull-y", `${clamp(pullY, 14)}px`);
      });
    };

    const rest = () => {
      for (const key of ["--sway", "--lean", "--pull-x", "--pull-y"]) {
        stack.style.removeProperty(key);
      }
    };

    node.addEventListener("pointermove", follow, { passive: true });
    node.addEventListener("pointerleave", rest);

    return () => {
      cancelAnimationFrame(waiting);
      node.removeEventListener("pointermove", follow);
      node.removeEventListener("pointerleave", rest);
      rest();
    };
  }, [decked, calm]);
  useEffect(() => {
    if (settled.current) return;
    settled.current = true;

    cells.current.forEach((cell, index) => {
      if (index === at || !cell) return;
      shown.current.add(index);
      for (const piece of cell.querySelectorAll<HTMLElement>(".build-part")) {
        piece.style.setProperty("--step", "1");
      }
    });
  }, [at]);
  useEffect(() => {
    if (calm || shown.current.has(at)) return;
    const cell = cells.current[at];
    if (!cell) return;

    shown.current.add(at);
    assemble(cell, runs.current, (dealt + at * deal) / 1000);
  }, [at, calm]);

  /* The one move a build makes on its own, replayed each time it comes to the
     front. Held at nought behind, so it plays again rather than starting done. */
  useEffect(() => {
    for (const [index, cell] of cells.current.entries()) {
      if (cell && index !== at) cell.style.setProperty("--act", "0");
    }

    const cell = cells.current[at];
    if (!cell) return;

    if (calm) {
      cell.style.setProperty("--act", "1");
      return;
    }

    const run = animate(0, 1, {
      duration: move,
      delay: cue,
      ease: entrance,
      onUpdate: played => cell.style.setProperty("--act", `${played}`),
    });

    return () => run.stop();
  }, [at, calm]);
  useIsomorphicLayoutEffect(() => {
    if (opened.current) return;
    opened.current = true;

    const cards = cells.current.filter(Boolean) as HTMLDivElement[];

    for (const [index, cell] of cards.entries()) {
      cell.style.setProperty("--d", `${depth(index, at, builds.length)}`);
      if (calm) cell.style.setProperty("--in", "1");
    }

    if (calm) return;

    const runs = cards.map((cell, index) =>
      animate(0, 1, {
        duration: 1.05,
        delay: (dealt + index * deal) / 1000,
        ease: entrance,
        onUpdate: place => cell.style.setProperty("--in", `${place}`),
      }),
    );

    return () => {
      for (const run of runs) run.stop();
    };
  }, [at, calm]);
  useEffect(() => {
    if (!opened.current) return;

    const runs: AnimationPlaybackControls[] = [];

    cells.current.forEach((cell, index) => {
      if (!cell) return;
      const target = depth(index, at, builds.length);
      const from = Number(cell.style.getPropertyValue("--d"));
      if (from === target) return;

      if (calm) {
        cell.style.setProperty("--d", `${target}`);
        return;
      }

      if (from === 0 && target === builds.length - 1) {
        runs.push(
          animate(0, 1, {
            duration: 0.48,
            ease: [0.5, 0, 0.9, 0.4],
            onUpdate: gone => cell.style.setProperty("--out", `${gone}`),
            onComplete: () => {
              cell.style.setProperty("--d", `${target}`);
              runs.push(
                animate(1, 0, {
                  duration: 0.6,
                  ease: entrance,
                  onUpdate: gone => cell.style.setProperty("--out", `${gone}`),
                }),
              );
            },
          }),
        );
        return;
      }

      runs.push(
        animate(from, target, {
          type: "spring",
          stiffness: 170,
          damping: 24,
          restDelta: 0.002,
          onUpdate: place => cell.style.setProperty("--d", `${place}`),
        }),
      );
    });

    return () => {
      for (const run of runs) run.stop();
    };
  }, [at, calm]);

  useEffect(() => {
    const running = runs.current;
    return () => {
      for (const run of running) run.stop();
    };
  }, []);

  const show = (next: number) => {
    setHandled(count => count + 1);

    if (decked) {
      setAt(next);
      return;
    }

    slide(deck.current, cells.current[next], calm);
  };

  return (
    <section ref={track} id="top" className="relative">
      <noscript>
        <style>
          {
            ".build-part { --step: 1 } .build-act { --act: 1 } .build-arrive { --in: 1 } .build-arrive:not(:first-of-type) { display: none }"
          }
        </style>
      </noscript>
      <div className="relative flex min-h-svh flex-col overflow-clip lg:grid lg:grid-cols-1 lg:grid-rows-[auto_1fr_auto_auto]">
        <div className="relative z-10 lg:row-start-1">{header}</div>
        <div className="relative z-10 mx-auto flex w-full max-w-page flex-1 flex-col justify-center px-6 pt-18 sm:px-8 sm:pt-22 md:px-12 lg:col-start-1 lg:row-start-2 lg:px-16 lg:pt-8 lg:pb-8">
          {title}
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-page flex-col gap-9 px-6 pt-12 sm:px-8 md:px-12 md:flex-row md:items-end md:justify-between md:gap-8 lg:row-start-3 lg:gap-16 lg:px-16 lg:pt-0">
          {lead}
          {actions}
        </div>
        <div className="relative z-10 mt-12 lg:col-start-1 lg:row-start-2 lg:z-0 lg:mt-0">
          <div className="lg:build-deck lg:absolute lg:inset-x-0 lg:top-0 lg:-bottom-8 2xl:bottom-0">
            <div
              ref={deck}
              style={shut}
              className="scrollbar-none lg:build-tilt flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 motion-safe:scroll-smooth sm:gap-6 sm:px-8 md:px-12 lg:absolute lg:inset-y-0 lg:right-0 lg:left-[43%] lg:block 2xl:left-[calc(50%-1rem)] lg:snap-none lg:gap-0 lg:overflow-visible lg:px-0 lg:pb-0 lg:[--fan:10%] lg:[--sink:-200px]"
            >
              {builds.map((build, index) => {
                const step = depth(index, at, builds.length);

                return (
                  <div
                    key={build.trade}
                    ref={cell => {
                      cells.current[index] = cell;
                    }}
                    style={
                      {
                        ...held,
                        "--play":
                          step === 0 && watched ? "running" : "paused",
                        zIndex: builds.length - step,
                      } as React.CSSProperties
                    }
                    className={cn(
                      "build-arrive max-lg:build-card w-[78%] shrink-0 snap-center sm:w-[52%] md:w-[64%] lg:build-panel lg:absolute lg:inset-0 lg:flex lg:w-auto lg:items-center lg:justify-center lg:pt-10 lg:pr-[5%] lg:pb-4 lg:@container-size 2xl:pt-14 2xl:pr-[8%]",
                      step > 0 && "lg:build-back lg:pointer-events-none",
                    )}
                  >
                    <div className="md:hidden">{build.phone}</div>
                    <div className="hidden w-full md:block">{build.page}</div>

                    <p className="mt-4 flex items-baseline gap-3 lg:hidden">
                      <span
                        className={cn(
                          "font-label text-[0.6875rem] tracking-[0.16em] tabular-nums",
                          index === at
                            ? "text-primary"
                            : "text-muted-foreground",
                        )}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={cn(
                          "text-sm font-medium tracking-tight",
                          index === at
                            ? "text-foreground"
                            : "text-muted-foreground",
                        )}
                      >
                        {build.trade}
                      </span>
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div
          style={{ animationDelay: "900ms" }}
          className="motion-reduce:animate-none mx-auto mt-8 flex w-full max-w-page animate-rise-in gap-1.5 px-6 sm:px-8 md:px-12 lg:hidden"
        >
          {builds.map((build, index) => (
            <span
              key={build.trade}
              aria-hidden
              className={cn(
                "ease-interface h-px flex-1 transition-colors duration-300",
                index === at ? "bg-primary" : "bg-foreground/20",
              )}
            />
          ))}
        </div>

        <div className="relative z-10 mx-auto hidden w-full max-w-page px-6 sm:px-8 md:px-12 lg:row-start-4 lg:block lg:px-16 lg:pb-4">
          <div
            ref={rail}
            style={running}
            className="flex items-center gap-6 pt-10 pb-4"
          >
            <p
              style={{ animationDelay: "760ms" }}
              className="motion-reduce:animate-none flex animate-rise-in items-baseline gap-3.5"
            >
              <span className="font-label text-primary text-[0.6875rem] tracking-[0.16em] tabular-nums 2xl:text-xs">
                {String(at + 1).padStart(2, "0")}
                <span className="text-muted-foreground">
                  {" / "}
                  {String(builds.length).padStart(2, "0")}
                </span>
              </span>
              <span className="text-sm font-medium tracking-tight 2xl:text-base">
                {builds[at].trade}
              </span>
            </p>

            <div className="ml-auto flex items-center gap-8 2xl:gap-12">
              <span
                style={{ animationDelay: "1080ms" }}
                className="font-label text-muted-foreground motion-reduce:animate-none hidden animate-rise-in items-center gap-2.5 text-[0.6875rem] tracking-[0.16em] uppercase xl:flex 2xl:text-xs"
              >
                <span
                  aria-hidden
                  className="bg-primary motion-reduce:animate-none size-1.5 animate-build-pulse rounded-full"
                />
                Rendered live
              </span>

              <div className="flex items-center gap-2.5">
                {builds.map((build, index) => (
                  <button
                    key={build.trade}
                    type="button"
                    onClick={() => show(index)}
                    aria-label={build.trade}
                    aria-current={index === at ? "true" : undefined}
                    style={{ animationDelay: `${820 + index * 60}ms` }}
                    className="group/trade motion-reduce:animate-none flex animate-rise-in flex-col items-center gap-2 py-1"
                  >
                    <span
                      className={cn(
                        "font-label ease-interface text-[0.625rem] tracking-[0.16em] tabular-nums transition-colors duration-300",
                        index === at
                          ? "text-primary"
                          : "text-muted-foreground/70 group-hover/trade:text-foreground",
                      )}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="bg-foreground/20 ease-interface group-hover/trade:bg-foreground/45 relative block h-px w-8 transition-colors duration-300 2xl:w-10">
                      {index === at ? (
                        <span
                          aria-hidden
                          className="bg-primary build-run absolute inset-0 origin-left"
                        />
                      ) : null}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="pb-14 lg:hidden" />
      </div>
    </section>
  );
}

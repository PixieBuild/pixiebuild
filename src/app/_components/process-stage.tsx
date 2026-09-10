"use client";

import { useReducedMotion, useScroll } from "motion/react";
import { useEffect, useRef, useState } from "react";

import { ProcessFrame } from "@/app/_components/process-frame";
import { cn } from "@/lib/utils";

const beats = [
  {
    step: "01",
    name: "Understand",
    short: "Understand",
    claim: "We learn how the business makes money before anything is designed.",
  },
  {
    step: "02",
    name: "Design & build",
    short: "Build",
    claim: "Designed and built in one pass, by the same people.",
  },
  {
    step: "03",
    name: "Refine",
    short: "Refine",
    claim: "Every round is a link you can open and comment on.",
  },
  {
    step: "04",
    name: "Launch",
    short: "Launch",
    claim: "We test it all, connect the domain, and hand it over.",
  },
];

const swatches = ["bg-concept-scrim", "bg-concept-clay", "bg-concept-gold"];

const steps = beats.length;

/* Scroll each step owns, and the hold after the last, both in vh. */
const stride = 55;
const tail = 20;

/* The shares of a step spent moving from the one before it and playing its
   own act. What is left holds the finished state. */
const entry = 0.2;
const span = 0.5;

/* How far the first act has already run when the stage pins. */
const lead = 0.3;

/* How far past a boundary the scroll has to be before the label turns over. */
const slack = 0.02;

const reach = steps + tail / stride;

const clamp = (value: number) => Math.min(1, Math.max(0, value));

/* Where a step's act has finished, as a share of the runway's travel. */
const anchor = (index: number) =>
  index === 0 ? 0 : (index + entry + span) / reach;

const rest = {
  "--x": 0,
  "--e1": 0,
  "--e2": 0,
  "--e3": 0,
  "--a0": 0,
  "--a1": 0,
  "--a2": 0,
  "--a3": 0,
  "--act": 0,
} as React.CSSProperties;

function StepBar({ at, className }: { at: number; className?: string }) {
  return (
    <ol className={cn("flex gap-2 sm:gap-3", className)}>
      {beats.map((mark, index) => (
        <li key={mark.step} className="min-w-0 flex-1">
          <a
            href={`#process-${mark.step}`}
            aria-current={index === at ? "step" : undefined}
            className="group/step flex flex-col gap-2.5 py-1"
          >
            <span
              className={cn(
                "font-label ease-interface flex items-baseline gap-2 text-[0.625rem] tracking-[0.12em] uppercase transition-colors duration-300",
                index <= at
                  ? "text-primary"
                  : "text-muted-foreground/60 group-hover/step:text-foreground",
              )}
            >
              <span className="tabular-nums">{mark.step}</span>
              <span
                className={cn(
                  "hidden truncate md:inline",
                  index === at && "text-foreground",
                )}
              >
                {mark.short}
              </span>
            </span>
            <span className="bg-foreground/15 relative block h-px w-full">
              <span
                style={
                  {
                    "--run": `clamp(0, calc(var(--x, 0) - ${index}), 1)`,
                  } as React.CSSProperties
                }
                className="bg-primary build-run absolute inset-0 origin-left"
              />
            </span>
          </a>
        </li>
      ))}
    </ol>
  );
}

export function ProcessStage({ heading }: { heading: React.ReactNode }) {
  const runway = useRef<HTMLDivElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const [at, setAt] = useState(0);
  const still = Boolean(useReducedMotion());

  const { scrollYProgress } = useScroll({
    target: runway,
    offset: ["start start", "end end"],
  });

  /* Read off the scroll position rather than an observer: the page runs Lenis,
     and an observer measures the position Lenis is still gliding towards, so
     every step would turn over before it looked like it should. Everything
     but the label is driven through custom properties on the stage. */
  useEffect(() => {
    const follow = (progress: number) => {
      const node = stage.current;
      if (!node) return;

      const spent = Number.isFinite(progress) ? clamp(progress) : 0;
      const x = Math.min(steps, spent * reach);

      const enter = (index: number) =>
        still ? (x >= index ? 1 : 0) : clamp((x - index) / entry);
      const act = (index: number) => {
        const start = index === 0 ? -lead : index + entry;
        const length = index === 0 ? span + lead : span;
        if (still) return x >= Math.max(0, start) ? 1 : 0;
        return clamp((x - start) / length);
      };

      const set = (name: string, value: number) =>
        node.style.setProperty(name, value.toFixed(4));

      set("--x", x);
      for (let index = 1; index < steps; index += 1) {
        set(`--e${index}`, enter(index));
      }
      for (let index = 0; index < steps; index += 1) {
        set(`--a${index}`, act(index));
      }
      set("--act", clamp((act(2) - 0.55) / 0.25));

      const place = Math.min(steps - 1, Math.floor(x));
      setAt(was => {
        if (place > was) return x - place >= slack ? place : was;
        if (place < was) return was - x >= slack ? place : was;
        return was;
      });
    };

    follow(scrollYProgress.get());
    return scrollYProgress.on("change", follow);
  }, [scrollYProgress, still]);

  return (
    <>
      <div className="mx-auto w-full max-w-page px-6 sm:px-8 md:px-12 lg:landscape:hidden">
        {heading}
      </div>

      <div
        ref={runway}
        style={{ "--steps": steps } as React.CSSProperties}
        className="relative mt-10 h-[calc(100svh+var(--steps)*55vh+20vh)] lg:landscape:mt-0"
      >
        {beats.map((mark, index) => (
          <span
            key={mark.step}
            id={`process-${mark.step}`}
            aria-hidden
            style={{ top: `calc((100% - 100svh) * ${anchor(index)})` }}
            className="absolute left-0 size-px"
          />
        ))}

        <div ref={stage} style={rest} className="sticky top-0 flex h-svh flex-col">
          <div className="mx-auto hidden w-full max-w-page flex-1 items-center px-16 pt-10 pb-22 2xl:pt-14 2xl:pb-26 lg:landscape:flex">
            <div className="flex w-full gap-12 2xl:gap-16">
              <div className="flex w-[32%] max-w-108 min-w-76 shrink-0 flex-col 2xl:w-[30%] 2xl:max-w-124">
                {heading}

                <span aria-hidden className="bg-foreground/12 mt-10 h-px w-full" />

                <div className="grid min-w-0 pt-8">
                  {beats.map((mark, index) => {
                    const here = index === at;

                    return (
                      <div
                        key={mark.step}
                        aria-hidden={!here}
                        className={cn(
                          "ease-entrance motion-reduce:transition-none col-start-1 row-start-1 transition-[opacity,transform] duration-500",
                          here
                            ? "translate-y-0 opacity-100"
                            : "pointer-events-none translate-y-2 opacity-0",
                        )}
                      >
                        <span className="text-primary font-label flex items-baseline gap-3 text-[0.6875rem] tracking-[0.16em] uppercase 2xl:text-xs">
                          <span className="tabular-nums">{mark.step}</span>
                          <span className="bg-primary/40 h-px w-6" />
                          {mark.name}
                        </span>

                        <h3 className="mt-4 text-[1.75rem] leading-[1.15] font-medium tracking-tight text-balance 2xl:text-[2.25rem]">
                          {mark.claim}
                        </h3>

                        {mark.step === "02" ? (
                          <div className="concept-theme-paper mt-6 flex items-center gap-3">
                            <span className="flex items-center gap-1.5">
                              {swatches.map(tone => (
                                <span
                                  key={tone}
                                  className={cn(
                                    "border-foreground/10 size-5 rounded-sm border 2xl:size-6",
                                    tone,
                                  )}
                                />
                              ))}
                            </span>
                            <span className="text-muted-foreground font-label text-[0.6875rem] tracking-[0.16em]">
                              ARCHIVO · GEIST
                            </span>
                          </div>
                        ) : null}
                      </div>
                    );
                  })}
                </div>

                <div aria-hidden className="mt-auto flex items-center gap-2 pt-10">
                  {beats.map((mark, index) => (
                    <span
                      key={mark.step}
                      className="bg-foreground/15 relative block h-px flex-1 overflow-hidden"
                    >
                      <span
                        style={
                          {
                            "--run": `clamp(0, calc(var(--x, 0) - ${index}), 1)`,
                          } as React.CSSProperties
                        }
                        className="bg-primary build-run absolute inset-0 origin-left"
                      />
                    </span>
                  ))}
                  <span className="text-muted-foreground font-label ml-3 text-[0.625rem] tracking-[0.16em] tabular-nums 2xl:text-xs">
                    {beats[at].step} / {String(steps).padStart(2, "0")}
                  </span>
                </div>
              </div>

              <div className="flex min-w-0 flex-1 items-center">
                <div className="mx-auto w-[min(100%,calc((100svh-9rem)*1.25))] 2xl:w-[min(100%,calc((100svh-11rem)*1.25))]">
                  <ProcessFrame live={at === 3} />
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto flex w-full max-w-page flex-1 flex-col justify-center px-6 pt-3 pb-18 sm:px-8 md:px-12 lg:px-16 lg:landscape:hidden">
            <div className="flex flex-col gap-5">
              <StepBar at={at} />

              <div className="grid min-w-0">
                {beats.map((mark, index) => {
                  const here = index === at;

                  return (
                    <div
                      key={mark.step}
                      aria-hidden={!here}
                      className={cn(
                        "ease-entrance motion-reduce:transition-none col-start-1 row-start-1 transition-[opacity,transform] duration-500",
                        here
                          ? "translate-y-0 opacity-100"
                          : "pointer-events-none translate-y-2 opacity-0",
                      )}
                    >
                      <span className="text-primary font-label flex items-baseline gap-3 text-[0.625rem] tracking-[0.16em] uppercase md:text-[0.6875rem]">
                        <span className="tabular-nums">{mark.step}</span>
                        <span className="text-foreground">{mark.name}</span>
                      </span>
                      <p className="mt-2.5 max-w-[28ch] text-[1.0625rem] leading-tight font-medium tracking-tight text-balance md:mt-3 md:max-w-[30ch] md:text-2xl">
                        {mark.claim}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-7 flex min-h-0 justify-center md:mt-8">
              <div className="w-[min(100%,24rem,calc((100svh-15.5rem)*0.677))] md:hidden">
                <ProcessFrame live={at === 3} phone />
              </div>
              <div className="hidden w-[min(100%,calc((100svh-17rem)*1.25))] md:block">
                <ProcessFrame live={at === 3} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

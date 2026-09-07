"use client";

import {
  RiArrowLeftLine,
  RiArrowRightLine,
  RiLock2Line,
} from "@remixicon/react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
} from "motion/react";
import { useEffect, useRef, useState } from "react";

import { DiscoveryCard } from "@/app/_components/discovery-card";
import { DiscoverySheet } from "@/app/_components/discovery-sheet";
import { IterationView } from "@/app/_components/iteration-view";
import { Shop } from "@/app/_components/shop";
import { cn } from "@/lib/utils";

const beats = [
  {
    step: "01",
    name: "Discovery",
    claim: "We learn your business before anything is designed.",
  },
  {
    step: "02",
    name: "Design & build",
    claim: "Designed and built in one pass, by the same people.",
  },
  {
    step: "03",
    name: "Iteration",
    claim: "Every round is a link you can open and comment on.",
  },
  { step: "04", name: "Launch", claim: "We test it all, connect your domain, and hand it over." },
];

const swatches = ["bg-concept-scrim", "bg-concept-clay", "bg-concept-gold"];

const proof = [
  { name: "TO THE FIRST ORDER", value: "2 hrs" },
  { name: "VISITS, WEEK ONE", value: "1,240" },
  { name: "ORDERS", value: "38" },
];

const ease = [0.16, 1, 0.3, 1] as const;

function Frame({
  at,
  still,
  portrait,
}: {
  at: number;
  still: boolean;
  portrait?: boolean;
}) {
  const live = at === 3;
  const span = { duration: still ? 0 : 0.5, ease };

  return (
    <div
      className={cn(
        "concept-stage concept-theme-paper bg-concept-canvas shadow-elev-2 border-concept-ink/15 relative w-full overflow-hidden border",
        portrait
          ? "[--concept-height:420] [--concept-width:360]"
          : "[--concept-height:600] [--concept-width:900]",
      )}
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={at}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={span}
          className="absolute inset-0 flex flex-col"
        >
          {live ? (
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              transition={span}
              className="concept-scale bg-concept-shell border-concept-ink/10 z-20 flex h-[8%] shrink-0 items-center gap-2 border-b px-4"
            >
              {[0, 1, 2].map(light => (
                <span
                  key={light}
                  className="bg-concept-ink/20 size-[0.45em] shrink-0 rounded-full"
                />
              ))}
              <span className="bg-concept-canvas text-concept-muted font-label border-concept-ink/10 ml-2 flex flex-1 items-center gap-2 border px-3 py-1 text-[0.62em] tracking-[0.12em]">
                <RiLock2Line className="text-concept-clay size-[1em]" />
                https://norvia.ie
              </span>
              <span className="bg-concept-clay text-concept-canvas font-label px-2.5 py-1 text-[0.6em] tracking-[0.18em]">
                LIVE
              </span>
            </motion.div>
          ) : null}

          <div className="relative min-h-0 flex-1">
            {at === 0 ? (
              portrait ? <DiscoveryCard /> : <DiscoverySheet />
            ) : at === 2 ? (
              <IterationView still={still} compact={portrait} />
            ) : (
              <Shop version={3} live compact={portrait} />
            )}
          </div>

          {live ? (
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={span}
              className="concept-scale bg-concept-scrim text-concept-chalk z-20 flex h-[12%] shrink-0 items-center justify-between px-6"
            >
              {proof.map((item, index) => (
                <span
                  key={item.name}
                  className={cn(
                    "items-baseline gap-2",
                    portrait && index > 0 ? "hidden" : "flex",
                  )}
                >
                  <span className="text-[1.3em] font-semibold whitespace-nowrap tabular-nums">
                    {item.value}
                  </span>
                  <span className="text-concept-chalk/55 font-label text-[0.6em] whitespace-nowrap tracking-[0.18em]">
                    {item.name}
                  </span>
                </span>
              ))}
              <span className={cn("text-concept-chalk/55 font-label text-[0.6em] tracking-[0.18em]", portrait && "hidden")}>
                ALL YOURS
              </span>
            </motion.div>
          ) : null}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export function ProcessStage({ heading }: { heading: React.ReactNode }) {
  const runway = useRef<HTMLDivElement>(null);
  const scene = useRef<HTMLDivElement>(null);
  const [at, setAt] = useState(0);
  const [picked, setPicked] = useState(0);
  const still = Boolean(useReducedMotion());

  const { scrollYProgress } = useScroll({
    target: runway,
    offset: ["start start", "end end"],
  });

  /* Read off the scroll position rather than an observer: the page runs Lenis,
     and an observer measures the position Lenis is still gliding towards, so
     every stage would turn over before it looked like it should. */
  useEffect(() => {
    const follow = (progress: number) => {
      const spent = Number.isFinite(progress) ? progress : 0;
      const place = Math.min(beats.length - 1, Math.floor(spent * beats.length));

      setAt(place);
      scene.current?.style.setProperty(
        "--run",
        `${Math.min(1, spent * beats.length - place)}`,
      );
    };

    follow(scrollYProgress.get());
    return scrollYProgress.on("change", follow);
  }, [scrollYProgress]);

  const beat = beats[at];

  return (
    <>
      <div
        ref={runway}
        style={{ "--runway": beats.length } as React.CSSProperties}
        className="relative hidden h-[calc(100svh+var(--runway)*22vh)] lg:block"
      >
        <div ref={scene} className="sticky top-0 flex h-svh items-center">
          <div className="mx-auto w-full max-w-page px-16">
            <div className="grid grid-cols-12 gap-14 xl:gap-10">
              <div className="col-span-5 flex flex-col 2xl:col-span-4">
                {heading}

                <span
                  aria-hidden
                  className="bg-foreground/12 mt-10 h-px w-full"
                />

                <div className="grid min-w-0">
                  <AnimatePresence initial={false}>
                    <motion.div
                      key={beat.step}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: still ? 0 : 0.3, ease }}
                      className="col-start-1 row-start-1 pt-8"
                    >
                      <span className="text-primary font-label flex items-baseline gap-3 text-[0.6875rem] tracking-[0.16em] uppercase">
                        <span className="tabular-nums">{beat.step}</span>
                        <span className="bg-primary/40 h-px w-6" />
                        {beat.name}
                      </span>

                      <h3 className="mt-4 min-h-[2lh] text-[1.75rem] leading-[1.15] font-medium tracking-tight text-balance">
                        {beat.claim}
                      </h3>

                      {beat.step === "02" ? (
                        <div className="concept-theme-paper mt-6 flex items-center gap-3">
                          <span className="flex items-center gap-1.5">
                            {swatches.map(tone => (
                              <span
                                key={tone}
                                className={cn(
                                  "border-foreground/10 size-5 rounded-sm border",
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
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div aria-hidden className="mt-auto flex items-center gap-2 pt-10">
                  {beats.map((mark, index) => (
                    <span
                      key={mark.step}
                      className={cn(
                        "relative block h-px flex-1 overflow-hidden",
                        index < at ? "bg-primary" : "bg-foreground/15",
                      )}
                    >
                      {index === at ? (
                        <span className="bg-primary absolute inset-0 origin-left scale-x-[var(--run)]" />
                      ) : null}
                    </span>
                  ))}
                  <span className="text-muted-foreground font-label ml-3 text-[0.625rem] tracking-[0.16em] tabular-nums">
                    {beat.step} / 04
                  </span>
                </div>
              </div>

              <div className="col-span-7 flex items-center 2xl:col-span-8">
                <div className="mx-auto w-[min(100%,calc((100svh-16rem)*1.5))]">
                  <Frame at={at} still={still} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden">
        <div className="mx-auto w-full max-w-page px-6 sm:px-8 md:px-12">
          {heading}

          <div className="mt-10 grid min-w-0">
            <AnimatePresence initial={false}>
              <motion.div
                key={picked}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: still ? 0 : 0.3, ease }}
                className="col-start-1 row-start-1"
              >
                <span className="text-primary font-label flex items-baseline gap-3 text-[0.6875rem] tracking-[0.16em] uppercase">
                  <span className="tabular-nums">Step {beats[picked].step}</span>
                  <span className="bg-primary/40 h-px w-6" />
                  {beats[picked].name}
                </span>

                <p className="mt-3 min-h-[2lh] text-xl leading-[1.2] font-medium tracking-tight text-balance">
                  {beats[picked].claim}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6">
            <Frame at={picked} still={still} portrait />
          </div>

          <div className="mt-5 flex items-center gap-4">
            <button
              type="button"
              aria-label="Previous step"
              disabled={picked === 0}
              onClick={() => setPicked(was => Math.max(0, was - 1))}
              className="border-foreground/15 text-foreground ease-interface flex size-10 shrink-0 items-center justify-center rounded-full border transition-opacity duration-300 disabled:opacity-30"
            >
              <RiArrowLeftLine className="size-4" />
            </button>

            <div className="flex flex-1 items-center gap-1.5">
              {beats.map((mark, index) => (
                <button
                  key={mark.step}
                  type="button"
                  aria-label={`Step ${mark.step} — ${mark.name}`}
                  aria-current={index === picked ? "step" : undefined}
                  onClick={() => setPicked(index)}
                  className="flex-1 py-3"
                >
                  <span
                    className={cn(
                      "ease-interface block h-0.5 w-full transition-colors duration-300",
                      index === picked ? "bg-primary" : "bg-foreground/15",
                    )}
                  />
                </button>
              ))}
            </div>

            <button
              type="button"
              aria-label="Next step"
              disabled={picked === beats.length - 1}
              onClick={() =>
                setPicked(was => Math.min(beats.length - 1, was + 1))
              }
              className="border-foreground/15 text-foreground ease-interface flex size-10 shrink-0 items-center justify-center rounded-full border transition-opacity duration-300 disabled:opacity-30"
            >
              <RiArrowRightLine className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

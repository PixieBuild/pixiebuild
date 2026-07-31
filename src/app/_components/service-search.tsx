"use client";

import { RiSearchLine, RiSparkling2Fill } from "@remixicon/react";
import { motion, useInView, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

import { useLoop } from "@/hooks/use-loop";

const logo = "/previews/willow-logo.webp";

const mine = {
  title: "Willow Dental — Family & Emergency Dentistry",
  url: "willowdental.com",
};

const others = [
  {
    title: "The 12 Best Dentists in Portland (2026)",
    url: "citydirectory.com › portland › dentists",
  },
  {
    title: "Rose City Dental — General & Cosmetic Care",
    url: "rosecitydental.com",
  },
  {
    title: "Emergency Dental Clinic of Oregon",
    url: "emergencydentaloregon.com",
  },
];

export function ServiceSearch() {
  const frame = useRef<HTMLDivElement>(null);
  const seen = useInView(frame, { margin: "0px 0px -15% 0px" });
  const still = useReducedMotion();
  const step = useLoop(2, 4800, seen && !still, 1300);
  const risen = still || step === 1;
  const swap = { duration: still ? 0 : 0.45 };
  const move = { duration: still ? 0 : 0.65, ease: [0.25, 1, 0.5, 1] as const };

  const results = risen
    ? [mine, ...others]
    : [others[0], others[1], mine, others[2]];

  return (
    <div ref={frame} className="size-full p-4 sm:p-6">
      <div className="bg-card shadow-elev-1 @container flex size-full flex-col gap-3 overflow-hidden rounded-xl border p-4 @min-[420px]:gap-4 @min-[420px]:p-5">
        <div className="bg-muted/60 flex shrink-0 items-center gap-2 rounded-full border px-3 py-1.5">
          <RiSearchLine className="text-muted-foreground size-3 shrink-0" />
          <span className="truncate text-[0.625rem]">
            emergency dentist east portland
          </span>
        </div>

        <div className="border-primary/25 bg-primary/5 shrink-0 rounded-lg border p-2.5">
          <div className="flex items-center gap-1.5">
            <RiSparkling2Fill className="text-primary size-2.5" />
            <span className="text-primary font-mono text-[0.5rem] tracking-widest uppercase">
              AI overview
            </span>
          </div>

          <div className="mt-1.5 grid">
            <motion.p
              initial={false}
              animate={{ opacity: risen ? 0 : 1 }}
              transition={swap}
              className="text-muted-foreground col-start-1 row-start-1 text-[0.5625rem] leading-relaxed"
            >
              Several Portland clinics list emergency hours. Directories suggest
              calling ahead, as availability varies by day.
            </motion.p>
            <motion.p
              initial={false}
              animate={{ opacity: risen ? 1 : 0 }}
              transition={swap}
              className="col-start-1 row-start-1 text-[0.5625rem] leading-relaxed"
            >
              Willow Dental sees emergency patients the same day at its east
              Portland practice, with prices published up front.
            </motion.p>
          </div>

          <div className="mt-2 grid justify-items-start">
            <motion.span
              initial={false}
              animate={{ opacity: risen ? 0 : 1 }}
              transition={swap}
              className="bg-background text-muted-foreground col-start-1 row-start-1 rounded border px-1.5 py-0.5 font-mono text-[0.5rem]"
            >
              citydirectory.com
            </motion.span>
            <motion.span
              initial={false}
              animate={{ opacity: risen ? 1 : 0 }}
              transition={swap}
              className="bg-background col-start-1 row-start-1 flex items-center gap-1 rounded border px-1.5 py-0.5 font-mono text-[0.5rem]"
            >
              <Image
                src={logo}
                alt=""
                width={256}
                height={256}
                className="size-2.5"
              />
              willowdental.com
            </motion.span>
          </div>
        </div>

        <div className="mask-[linear-gradient(to_bottom,black_82%,transparent)] flex min-h-0 flex-1 flex-col gap-2.5 overflow-hidden">
          {results.map((result) => {
            const ours = result.url === mine.url;

            return (
              <motion.div
                key={result.url}
                layout
                transition={move}
                className={`flex items-center gap-2 rounded-md px-2 py-1.5 ${
                  ours ? "bg-primary/5 ring-primary/25 ring-1" : ""
                }`}
              >
                {ours ? (
                  <Image
                    src={logo}
                    alt=""
                    width={256}
                    height={256}
                    className="size-3 shrink-0"
                  />
                ) : (
                  <span className="bg-muted-foreground/25 size-3 shrink-0 rounded-full" />
                )}

                <span className="flex min-w-0 flex-col">
                  <span
                    className={`truncate text-[0.5625rem] @min-[420px]:text-[0.625rem] ${
                      ours ? "font-medium" : ""
                    }`}
                  >
                    {result.title}
                  </span>
                  <span className="text-muted-foreground truncate font-mono text-[0.5rem]">
                    {result.url}
                  </span>
                </span>

                {ours ? (
                  <span className="ml-auto grid shrink-0 justify-items-end">
                    <motion.span
                      initial={false}
                      animate={{ opacity: risen ? 0 : 1 }}
                      transition={swap}
                      className="text-muted-foreground col-start-1 row-start-1 font-mono text-[0.5rem] tabular-nums"
                    >
                      #3
                    </motion.span>
                    <motion.span
                      initial={false}
                      animate={{ opacity: risen ? 1 : 0 }}
                      transition={swap}
                      className="text-primary col-start-1 row-start-1 font-mono text-[0.5rem] tabular-nums"
                    >
                      #1
                    </motion.span>
                  </span>
                ) : null}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

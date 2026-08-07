"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";

import { useLoop } from "@/hooks/use-loop";

const photo = "/concept/room.webp";

const dated = ["Home", "About", "Rooms", "Rates", "Contact"];

export function ServiceModernize() {
  const still = useReducedMotion();
  const step = useLoop(2, 3800, !still, 1400);
  const fresh = still || step === 1;
  const swap = { duration: still ? 0 : 0.7, ease: [0.25, 1, 0.5, 1] as const };

  return (
    <div className="size-full p-5">
      <div className="bg-card shadow-elev-1 relative size-full overflow-hidden rounded-xl border">
        <motion.div
          initial={false}
          animate={{ opacity: fresh ? 0 : 1, scale: fresh ? 0.985 : 1 }}
          transition={swap}
          className="absolute inset-0 flex flex-col bg-slate-100 text-slate-700"
        >
          <div className="flex shrink-0 items-center justify-between border-b border-slate-300 bg-white px-4 py-2.5">
            <span className="text-[0.6875rem] font-bold tracking-tight text-slate-800">
              HARBOUR INN
            </span>
            <div className="flex gap-3">
              {dated.map((item) => (
                <span key={item} className="text-[0.5625rem] text-slate-500">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="flex min-h-0 flex-1 gap-3 p-4">
            <div className="relative h-full w-[38%] shrink-0 overflow-hidden rounded border border-slate-300">
              <Image
                src={photo}
                alt=""
                fill
                sizes="200px"
                className="object-cover saturate-50"
              />
            </div>

            <div className="flex min-w-0 flex-1 flex-col">
              <p className="text-[0.8125rem] font-bold text-slate-800">
                Welcome to Harbour Inn
              </p>
              <p className="mt-1.5 text-[0.5625rem] leading-relaxed text-slate-500">
                A family run inn with nine comfortable rooms, a licensed bar and
                a full breakfast served daily. Book online or call reception.
              </p>

              <span className="mt-2.5 w-fit rounded bg-linear-to-b from-sky-500 to-sky-700 px-3 py-1 text-[0.5625rem] font-bold text-white shadow-sm">
                BOOK NOW
              </span>

              <div className="mt-auto grid grid-cols-3 gap-2">
                {["Rooms", "Rates", "Find us"].map((cell) => (
                  <div
                    key={cell}
                    className="rounded border border-slate-300 bg-white p-1.5"
                  >
                    <p className="text-[0.5625rem] font-bold text-slate-700">
                      {cell}
                    </p>
                    <p className="text-[0.5rem] text-sky-700 underline">
                      Read more
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={false}
          animate={{ opacity: fresh ? 1 : 0, scale: fresh ? 1 : 1.015 }}
          transition={swap}
          className="concept-theme bg-concept-canvas font-concept text-concept-ink absolute inset-0 flex flex-col"
        >
          <div className="relative h-[58%] shrink-0 overflow-hidden">
            <Image
              src={photo}
              alt=""
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="from-concept-scrim/80 absolute inset-0 bg-linear-to-b to-transparent" />

            <div className="relative flex items-center justify-between px-5 pt-4">
              <span className="font-concept-display text-concept-chalk text-[0.8125rem] tracking-[0.28em]">
                HARBOUR INN
              </span>
              <span className="border-concept-chalk/40 text-concept-chalk rounded-full border px-3 py-1 text-[0.5625rem]">
                Book a room
              </span>
            </div>
          </div>

          <div className="flex min-h-0 flex-1 flex-col justify-center px-5 py-4">
            <span className="text-concept-muted flex items-center gap-2.5 text-[0.5rem] font-medium tracking-[0.28em] uppercase">
              <span aria-hidden className="bg-concept-clay h-px w-5" />
              Since 1994
            </span>

            <p className="font-concept-display mt-2 text-xl leading-[1.05]">
              Nine rooms, and the harbour below.
            </p>

            <div className="mt-3 flex items-center gap-2">
              <span className="bg-concept-clay text-concept-chalk rounded-md px-3.5 py-1.5 text-[0.625rem] font-medium">
                Check availability
              </span>
              <span className="border-concept-line rounded-md border px-3.5 py-1.5 text-[0.625rem] font-medium">
                The rooms
              </span>
            </div>
          </div>
        </motion.div>

        <div className="absolute top-3 right-3 grid">
          <motion.span
            initial={false}
            animate={{ opacity: fresh ? 0 : 1 }}
            transition={swap}
            className="col-start-1 row-start-1 rounded-full bg-slate-900/70 px-2.5 py-1 font-mono text-[0.5625rem] tracking-widest text-white uppercase backdrop-blur-sm"
          >
            Before
          </motion.span>
          <motion.span
            initial={false}
            animate={{ opacity: fresh ? 1 : 0 }}
            transition={swap}
            className="bg-primary text-primary-foreground col-start-1 row-start-1 rounded-full px-2.5 py-1 font-mono text-[0.5625rem] tracking-widest uppercase"
          >
            After
          </motion.span>
        </div>
      </div>
    </div>
  );
}

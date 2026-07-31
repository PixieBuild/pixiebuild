"use client";

import { RiCheckLine } from "@remixicon/react";
import { motion, useInView, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const logo = "/previews/willow-logo.webp";
const notice = "Open late on Thursdays until 8pm";

export function CapabilityCms() {
  const frame = useRef<HTMLDivElement>(null);
  const seen = useInView(frame, { margin: "0px 0px -15% 0px" });
  const still = useReducedMotion();
  const [typed, setTyped] = useState(notice.length);
  const [live, setLive] = useState(true);

  useEffect(() => {
    if (!seen || still) return;

    let at = notice.length;
    let timer: ReturnType<typeof setTimeout>;

    const type = () => {
      at += 1;
      setTyped(at);
      timer = setTimeout(at < notice.length ? type : publish, 55);
    };

    const publish = () => {
      timer = setTimeout(() => {
        setLive(true);
        timer = setTimeout(restart, 2800);
      }, 650);
    };

    const restart = () => {
      at = 0;
      setTyped(0);
      setLive(false);
      timer = setTimeout(type, 700);
    };

    timer = setTimeout(restart, 1600);
    return () => clearTimeout(timer);
  }, [seen, still]);

  const written = typed === notice.length;
  const swap = { duration: still ? 0 : 0.35 };

  return (
    <div ref={frame} className="size-full p-4 sm:p-6">
      <div className="@container flex size-full flex-col gap-3">
        <div className="bg-card shadow-elev-1 shrink-0 rounded-xl border p-3">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground font-mono text-[0.5rem] tracking-widest uppercase">
              Homepage notice
            </span>
            <span className="grid justify-items-end">
              <motion.span
                animate={{ opacity: live ? 0 : 1 }}
                transition={swap}
                className="bg-muted text-muted-foreground col-start-1 row-start-1 rounded-full px-1.5 py-0.5 text-[0.5rem] font-medium"
              >
                Draft
              </motion.span>
              <motion.span
                animate={{ opacity: live ? 1 : 0 }}
                transition={swap}
                className="col-start-1 row-start-1 rounded-full bg-emerald-500/15 px-1.5 py-0.5 text-[0.5rem] font-medium text-emerald-600 dark:text-emerald-400"
              >
                Published
              </motion.span>
            </span>
          </div>

          <div className="bg-muted/50 mt-2 flex h-8 items-center rounded-md border px-2.5">
            <span className="truncate text-[0.625rem]">
              {notice.slice(0, typed)}
              <motion.span
                animate={{ opacity: still || written ? 0 : [1, 1, 0, 0] }}
                transition={{ duration: 0.9, repeat: still ? 0 : Infinity }}
                className="bg-foreground ml-px inline-block h-3 w-px align-middle"
              />
            </span>
          </div>

          <div className="mt-2.5 flex items-center justify-between">
            <span className="text-muted-foreground text-[0.5rem]">
              Dana · Reception
            </span>
            <motion.span
              animate={{ scale: still ? 1 : written && !live ? 0.94 : 1 }}
              transition={{ duration: 0.2 }}
              className="bg-primary text-primary-foreground flex items-center gap-1 rounded-full px-2.5 py-1 text-[0.5625rem] font-medium"
            >
              <motion.span
                animate={{ opacity: live ? 1 : 0, width: live ? 10 : 0 }}
                transition={swap}
                className="overflow-hidden"
              >
                <RiCheckLine className="size-2.5" />
              </motion.span>
              Publish
            </motion.span>
          </div>
        </div>

        <div className="bg-card shadow-elev-1 flex min-h-0 flex-1 flex-col overflow-hidden rounded-xl border">
          <div className="flex shrink-0 items-center gap-2 border-b px-3 py-2">
            {[0, 1, 2].map((dot) => (
              <span key={dot} className="bg-border size-1.5 rounded-full" />
            ))}
            <span className="text-muted-foreground ml-1 truncate font-mono text-[0.5rem]">
              willowdental.com
            </span>
          </div>

          <motion.div
            animate={{ height: live ? 22 : 0, opacity: live ? 1 : 0 }}
            transition={{ duration: still ? 0 : 0.4, ease: [0.25, 1, 0.5, 1] }}
            className="flex shrink-0 items-center justify-center gap-1.5 overflow-hidden bg-teal-700/10"
          >
            <span className="size-1 shrink-0 rounded-full bg-teal-700 dark:bg-teal-400" />
            <span className="truncate text-[0.5625rem] text-teal-800 dark:text-teal-300">
              {notice}
            </span>
          </motion.div>

          <div className="flex min-h-0 flex-1 flex-col p-3.5">
            <div className="flex shrink-0 items-center justify-between">
              <div className="flex items-center gap-1.5">
                <Image
                  src={logo}
                  alt=""
                  width={256}
                  height={256}
                  className="size-3.5"
                />
                <span className="text-[0.5625rem] font-semibold tracking-tight">
                  Willow Dental
                </span>
              </div>
              <span className="rounded-full bg-teal-700 px-2 py-0.5 text-[0.5rem] font-medium text-white">
                Book a visit
              </span>
            </div>

            <div className="mt-auto">
              <h4 className="text-sm leading-tight font-semibold tracking-tight @min-[420px]:text-base">
                Dentistry without the dread.
              </h4>
              <p className="text-muted-foreground mt-1.5 text-[0.5625rem] @max-[380px]:hidden">
                Same-day appointments and clear pricing in east Portland.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

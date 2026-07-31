"use client";

import { RiVolumeUpLine } from "@remixicon/react";
import { motion, useInView, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

import { useLoop } from "@/hooks/use-loop";

const logo = "/previews/willow-logo.webp";
const photo = "/previews/dental.webp";

const links = [
  { label: "Treatments", spoken: "Link, treatments" },
  { label: "Pricing", spoken: "Link, pricing" },
  { label: "Book a visit", spoken: "Button, book a visit" },
];

const cta = { label: "See available times", spoken: "Button, see available times" };
const stops = [...links, cta];

export function CapabilityAccessibility() {
  const frame = useRef<HTMLDivElement>(null);
  const seen = useInView(frame, { margin: "0px 0px -15% 0px" });
  const still = useReducedMotion();
  const at = useLoop(stops.length, 1500, seen && !still);
  const ring = { duration: still ? 0 : 0.35, ease: [0.25, 1, 0.5, 1] as const };

  return (
    <div ref={frame} className="size-full p-4 sm:p-6">
      <div className="@container flex size-full flex-col gap-3">
        <div className="bg-card shadow-elev-1 flex min-h-0 flex-1 flex-col overflow-hidden rounded-xl border">
          <div className="flex shrink-0 items-center gap-2 border-b px-3 py-2">
            {[0, 1, 2].map((dot) => (
              <span key={dot} className="bg-border size-1.5 rounded-full" />
            ))}
            <span className="text-muted-foreground ml-1 truncate font-mono text-[0.5rem]">
              willowdental.com
            </span>
          </div>

          <div className="flex min-h-0 flex-1 flex-col p-3.5">
            <div className="flex shrink-0 items-center justify-between">
              <div className="flex items-center gap-1.5">
                <Image
                  src={logo}
                  alt=""
                  width={256}
                  height={256}
                  className="size-4"
                />
                <span className="text-[0.625rem] font-semibold tracking-tight">
                  Willow Dental
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                {links.map((link, index) => {
                  const here = at === index;
                  const action = link.label === "Book a visit";

                  return (
                    <span key={link.label} className="relative">
                      <span
                        className={
                          action
                            ? "block rounded-full bg-teal-700 px-2.5 py-1 text-[0.5625rem] font-medium text-white"
                            : "text-muted-foreground block px-0.5 py-1 text-[0.5625rem]"
                        }
                      >
                        {link.label}
                      </span>
                      {here ? (
                        <motion.span
                          layoutId="focus"
                          transition={ring}
                          className={`ring-primary pointer-events-none absolute -inset-1 ring-2 ${
                            action ? "rounded-full" : "rounded"
                          }`}
                        />
                      ) : null}
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="mt-3.5 flex min-h-0 flex-1 items-center gap-4">
              <div className="flex flex-1 flex-col items-start">
                <span className="bg-muted text-muted-foreground rounded px-1 py-0.5 font-mono text-[0.4375rem] tracking-wider">
                  h1
                </span>

                <h4 className="mt-1.5 text-sm leading-tight font-semibold tracking-tight text-balance @min-[420px]:text-base">
                  Dentistry without the dread.
                </h4>

                <p className="text-foreground/70 mt-2 text-[0.5625rem] leading-relaxed text-pretty @min-[420px]:text-[0.625rem]">
                  Same-day appointments and clear pricing in east Portland.
                </p>

                <span className="relative mt-3">
                  <span className="border-foreground/25 block rounded-full border px-2.5 py-1 text-[0.5625rem] font-medium">
                    {cta.label}
                  </span>
                  {at === stops.length - 1 ? (
                    <motion.span
                      layoutId="focus"
                      transition={ring}
                      className="ring-primary pointer-events-none absolute -inset-1 rounded-full ring-2"
                    />
                  ) : null}
                </span>
              </div>

              <div className="bg-muted relative h-full w-[34%] shrink-0 overflow-hidden rounded-lg @max-[380px]:hidden @min-[420px]:w-[38%]">
                <Image
                  src={photo}
                  alt=""
                  fill
                  sizes="200px"
                  className="object-cover"
                />
                <span className="bg-background/85 absolute bottom-1 left-1 max-w-[calc(100%-0.5rem)] truncate rounded px-1 py-0.5 font-mono text-[0.4375rem] backdrop-blur-sm">
                  alt: treatment room
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-muted/50 flex shrink-0 items-center gap-2.5 rounded-lg px-3 py-2">
          <motion.span
            animate={{ scale: still ? 1 : [1, 0.9, 1] }}
            transition={{
              duration: 1.5,
              repeat: still ? 0 : Infinity,
              times: [0, 0.1, 0.25],
            }}
            className="bg-card shadow-elev-1 shrink-0 rounded border px-1.5 py-0.5 font-mono text-[0.5rem] font-medium"
          >
            Tab
          </motion.span>

          <RiVolumeUpLine className="text-muted-foreground size-3 shrink-0" />

          <span className="grid min-w-0 flex-1">
            {stops.map((stop, index) => (
              <motion.span
                key={stop.label}
                animate={{ opacity: at === index ? 1 : 0 }}
                transition={{ duration: still ? 0 : 0.2 }}
                className="text-muted-foreground col-start-1 row-start-1 truncate font-mono text-[0.5625rem]"
              >
                {stop.spoken}
              </motion.span>
            ))}
          </span>

          <span className="text-muted-foreground shrink-0 font-mono text-[0.5rem] whitespace-nowrap">
            7.4:1{" "}
            <span className="text-emerald-600 dark:text-emerald-400">AAA</span>
          </span>
        </div>
      </div>
    </div>
  );
}

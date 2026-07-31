"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

import { useLoop } from "@/hooks/use-loop";

const photo = "/previews/dental.webp";
const logo = "/previews/willow-logo.webp";

const services = [
  { name: "Check-ups", note: "From $89" },
  { name: "Whitening", note: "45 minutes" },
  { name: "Emergencies", note: "Seen same day" },
];

export function CapabilityRedesign() {
  const frame = useRef<HTMLDivElement>(null);
  const seen = useInView(frame, { margin: "0px 0px -15% 0px" });
  const still = useReducedMotion();
  const step = useLoop(2, 4600, seen && !still);
  const fresh = step === 1;
  const swap = { duration: still ? 0 : 0.6, ease: [0.25, 1, 0.5, 1] as const };

  return (
    <div ref={frame} className="size-full p-4 sm:p-6">
      <div className="bg-card shadow-elev-1 @container flex size-full flex-col overflow-hidden rounded-xl border">
        <div className="flex shrink-0 items-center gap-2 border-b px-3 py-2.5">
          {[0, 1, 2].map((dot) => (
            <span key={dot} className="bg-border size-1.5 rounded-full" />
          ))}
          <span className="bg-muted ml-1.5 h-2.5 w-full max-w-24 min-w-6 rounded-full" />
          <span className="ml-auto grid shrink-0 justify-items-end">
            <motion.span
              animate={{ opacity: fresh ? 0 : 1 }}
              transition={swap}
              className="bg-muted-foreground/15 text-muted-foreground col-start-1 row-start-1 rounded-full px-2.5 py-1 font-mono text-[0.625rem] font-medium tracking-widest uppercase"
            >
              Before
            </motion.span>
            <motion.span
              animate={{ opacity: fresh ? 1 : 0 }}
              transition={swap}
              className="bg-foreground text-background col-start-1 row-start-1 rounded-full px-2.5 py-1 font-mono text-[0.625rem] font-medium tracking-widest uppercase"
            >
              After
            </motion.span>
          </span>
        </div>

        <div className="relative min-h-0 flex-1">
          <motion.div
            aria-hidden
            animate={{
              opacity: fresh ? 0 : 1,
              scale: fresh ? 0.98 : 1,
              filter: fresh ? "blur(3px)" : "blur(0px)",
            }}
            transition={swap}
            className="absolute inset-0 flex flex-col gap-2 p-3 font-serif"
          >
            <div className="bg-muted-foreground/15 flex shrink-0 items-center justify-center rounded-xs py-1">
              <span className="text-muted-foreground text-[0.5rem] tracking-wide">
                ★ NEW PATIENTS WELCOME — CALL (503) 555-0142 ★
              </span>
            </div>

            <div className="flex shrink-0 items-center justify-between border-b pb-2">
              <span className="text-[0.625rem] font-bold tracking-wider">
                WILLOW DENTAL
              </span>
              <span className="text-muted-foreground text-[0.5rem] underline">
                Home | About Us | Services | Contact
              </span>
            </div>

            <div className="flex min-h-0 flex-1 gap-3">
              <div className="flex flex-1 flex-col">
                <h4 className="text-[0.6875rem] font-bold @min-[420px]:text-xs">
                  Welcome to Our Website!
                </h4>
                <p className="text-muted-foreground mt-1.5 text-[0.5rem] leading-relaxed @min-[420px]:text-[0.5625rem]">
                  We are a family dental practice serving Portland&apos;s east
                  side since 1998. Please browse our site to learn more about
                  our services and our staff.
                </p>
                <span className="border-muted-foreground/40 bg-muted-foreground/10 text-muted-foreground mt-2.5 w-fit rounded-xs border px-2 py-1 text-[0.5rem]">
                  Click Here »
                </span>
              </div>

              <div className="border-muted-foreground/30 relative h-full w-[34%] shrink-0 overflow-hidden border @max-[380px]:hidden">
                <Image
                  src={photo}
                  alt=""
                  fill
                  sizes="240px"
                  className="object-cover grayscale contrast-75"
                />
              </div>
            </div>

            <div className="grid shrink-0 grid-cols-3 gap-1.5 @max-[380px]:hidden">
              {services.map((service) => (
                <div
                  key={service.name}
                  className="border-muted-foreground/25 rounded-xs border p-1.5"
                >
                  <span className="text-[0.5rem] font-bold">{service.name}</span>
                  <span className="text-muted-foreground mt-0.5 block text-[0.4375rem] underline">
                    Read more »
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            aria-hidden
            animate={{
              opacity: fresh ? 1 : 0,
              scale: fresh ? 1 : 1.02,
              filter: fresh ? "blur(0px)" : "blur(3px)",
            }}
            transition={swap}
            className="absolute inset-0 flex flex-col gap-5 p-5 @min-[420px]:gap-6 @min-[420px]:p-6"
          >
            <div className="flex shrink-0 items-center justify-between">
              <div className="flex items-center gap-2">
                <Image
                  src={logo}
                  alt=""
                  width={256}
                  height={256}
                  className="size-4 @min-[420px]:size-5"
                />
                <span className="text-[0.6875rem] font-semibold tracking-tight @min-[420px]:text-xs">
                  Willow Dental
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-muted-foreground hidden text-[0.5625rem] @min-[420px]:inline">
                  Treatments
                </span>
                <span className="text-muted-foreground hidden text-[0.5625rem] @min-[420px]:inline">
                  Pricing
                </span>
                <span className="bg-teal-700 rounded-full px-2.5 py-1 text-[0.5625rem] font-medium text-white">
                  Book a visit
                </span>
              </div>
            </div>

            <div className="flex min-h-0 flex-1 items-center gap-5 @min-[420px]:gap-7">
              <div className="flex flex-1 flex-col items-start">
                <h4 className="text-base leading-[1.15] font-semibold tracking-tight text-balance @min-[420px]:text-xl">
                  Dentistry without the dread.
                </h4>

                <p className="text-muted-foreground mt-2.5 text-[0.5625rem] leading-relaxed text-pretty @min-[420px]:mt-3 @min-[420px]:text-[0.625rem]">
                  Same-day appointments, clear pricing, and a team that explains
                  everything before it happens.
                </p>

                <div className="mt-4 flex items-center gap-2 @min-[420px]:mt-5">
                  <span className="bg-teal-700 rounded-full px-3 py-1.5 text-[0.5625rem] font-medium text-white">
                    Book a visit
                  </span>
                  <span className="rounded-full border px-3 py-1.5 text-[0.5625rem] font-medium">
                    See pricing
                  </span>
                </div>
              </div>

              <div className="bg-muted relative h-full w-[38%] shrink-0 overflow-hidden rounded-xl @max-[380px]:hidden @min-[420px]:w-[42%]">
                <Image
                  src={photo}
                  alt=""
                  fill
                  sizes="280px"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="grid shrink-0 grid-cols-3 gap-2.5 @max-[380px]:hidden">
              {services.map((service) => (
                <div
                  key={service.name}
                  className="bg-muted/60 flex flex-col gap-1 rounded-lg p-2.5"
                >
                  <span className="text-[0.5625rem] font-medium">
                    {service.name}
                  </span>
                  <span className="text-muted-foreground text-[0.5rem]">
                    {service.note}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { RiCheckLine } from "@remixicon/react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

import { useLoop } from "@/hooks/use-loop";

const fields = [
  { label: "Date of birth", value: "MM / DD / YYYY" },
  { label: "Insurance provider", value: "Select…" },
  { label: "Referring dentist", value: "" },
];

const slots = ["Today 4:30pm", "Tomorrow 9:00am", "Thu 11:15am"];

export function CapabilityInterface() {
  const frame = useRef<HTMLDivElement>(null);
  const seen = useInView(frame, { margin: "0px 0px -15% 0px" });
  const still = useReducedMotion();
  const step = useLoop(2, 5200, seen && !still);
  const shorter = step === 1;
  const swap = { duration: still ? 0 : 0.55, ease: [0.25, 1, 0.5, 1] as const };

  return (
    <div ref={frame} className="size-full p-4 sm:p-6">
      <div className="@container flex size-full flex-col gap-3">
        <div className="bg-card shadow-elev-1 flex min-h-0 flex-1 flex-col overflow-hidden rounded-xl border">
          <div className="flex shrink-0 items-center gap-2 border-b px-3 py-2">
            {[0, 1, 2].map((dot) => (
              <span key={dot} className="bg-border size-1.5 rounded-full" />
            ))}
            <span className="text-muted-foreground ml-1 truncate font-mono text-[0.5rem]">
              willowdental.com/book
            </span>
            <span className="ml-auto grid shrink-0 justify-items-end">
              <motion.span
                animate={{ opacity: shorter ? 0 : 1 }}
                transition={swap}
                className="bg-muted-foreground/15 text-muted-foreground col-start-1 row-start-1 rounded-full px-2 py-0.5 font-mono text-[0.5rem] font-medium tracking-widest uppercase"
              >
                Before
              </motion.span>
              <motion.span
                animate={{ opacity: shorter ? 1 : 0 }}
                transition={swap}
                className="bg-foreground text-background col-start-1 row-start-1 rounded-full px-2 py-0.5 font-mono text-[0.5rem] font-medium tracking-widest uppercase"
              >
                After
              </motion.span>
            </span>
          </div>

          <div className="relative min-h-0 flex-1">
            <motion.div
              animate={{
                opacity: shorter ? 0 : 1,
                scale: shorter ? 0.98 : 1,
                filter: shorter ? "blur(3px)" : "blur(0px)",
              }}
              transition={swap}
              className="absolute inset-0 flex flex-col p-3.5"
            >
              <div className="flex shrink-0 items-baseline justify-between">
                <span className="text-[0.625rem] font-semibold tracking-tight">
                  Request an Appointment
                </span>
                <span className="text-muted-foreground text-[0.5rem]">
                  Step 3 of 5
                </span>
              </div>

              <div className="mt-1.5 flex shrink-0 gap-1">
                {[0, 1, 2, 3, 4].map((mark) => (
                  <span
                    key={mark}
                    className={`h-0.5 flex-1 rounded-full ${
                      mark < 3 ? "bg-muted-foreground/40" : "bg-muted"
                    }`}
                  />
                ))}
              </div>

              <div className="mt-2.5 flex min-h-0 flex-1 flex-col gap-1.5">
                {fields.map((field) => (
                  <div
                    key={field.label}
                    className={`flex flex-col gap-0.5 ${
                      field.label === "Referring dentist"
                        ? "@max-[380px]:hidden"
                        : ""
                    }`}
                  >
                    <span className="text-muted-foreground text-[0.5rem]">
                      {field.label} <span className="text-red-500">*</span>
                    </span>
                    <span className="bg-muted/40 text-muted-foreground/60 flex h-5 items-center rounded-xs border px-1.5 text-[0.5rem]">
                      {field.value}
                    </span>
                  </div>
                ))}
                <span className="text-muted-foreground/70 text-[0.4375rem]">
                  Create an account to save your progress.
                </span>
              </div>

              <div className="mt-2 flex shrink-0 items-center justify-between">
                <span className="text-muted-foreground rounded-xs border px-2 py-1 text-[0.5rem]">
                  Back
                </span>
                <span className="bg-muted-foreground/25 text-muted-foreground rounded-xs px-3 py-1 text-[0.5rem]">
                  Next
                </span>
              </div>
            </motion.div>

            <motion.div
              animate={{
                opacity: shorter ? 1 : 0,
                scale: shorter ? 1 : 1.02,
                filter: shorter ? "blur(0px)" : "blur(3px)",
              }}
              transition={swap}
              className="absolute inset-0 flex flex-col p-4 @min-[420px]:p-5"
            >
              <span className="shrink-0 text-xs font-semibold tracking-tight @min-[420px]:text-sm">
                Book a visit
              </span>

              <div className="mt-3 flex shrink-0 flex-wrap gap-1.5">
                {slots.map((slot, index) => (
                  <span
                    key={slot}
                    className={`rounded-full px-2.5 py-1 text-[0.5625rem] font-medium ${
                      index === 0
                        ? "bg-teal-700 text-white"
                        : "text-muted-foreground border"
                    }`}
                  >
                    {slot}
                  </span>
                ))}
              </div>

              <div className="mt-3.5 flex min-h-0 flex-1 flex-col gap-2">
                <div className="flex flex-col gap-1">
                  <span className="text-muted-foreground text-[0.5rem]">
                    Name
                  </span>
                  <span className="bg-muted/50 flex h-7 items-center rounded-md border px-2 text-[0.5625rem]">
                    Dana Whitfield
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-muted-foreground text-[0.5rem]">
                    Phone
                  </span>
                  <span className="bg-muted/50 flex h-7 items-center rounded-md border px-2 text-[0.5625rem]">
                    (503) 555-0148
                  </span>
                </div>
              </div>

              <div className="mt-3 flex shrink-0 items-center gap-2">
                <span className="flex flex-1 items-center justify-center gap-1 rounded-full bg-teal-700 py-1.5 text-[0.5625rem] font-medium text-white">
                  <RiCheckLine className="size-2.5" />
                  Confirm booking
                </span>
              </div>

              <span className="text-muted-foreground mt-1.5 shrink-0 text-center text-[0.4375rem]">
                No account needed
              </span>
            </motion.div>
          </div>
        </div>

        <div className="grid shrink-0 grid-cols-2 gap-3">
          {[
            { label: "Steps", poor: "5", good: "1" },
            { label: "Fields", poor: "9", good: "2" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-muted/50 flex items-center gap-2 rounded-lg px-3 py-2"
            >
              <span className="text-muted-foreground font-mono text-[0.5rem] tracking-widest uppercase">
                {stat.label}
              </span>
              <span className="ml-auto grid justify-items-end">
                <motion.span
                  animate={{ opacity: shorter ? 0 : 1 }}
                  transition={swap}
                  className="col-start-1 row-start-1 font-mono text-xs tabular-nums"
                >
                  {stat.poor}
                </motion.span>
                <motion.span
                  animate={{ opacity: shorter ? 1 : 0 }}
                  transition={swap}
                  className="text-primary col-start-1 row-start-1 font-mono text-xs tabular-nums"
                >
                  {stat.good}
                </motion.span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

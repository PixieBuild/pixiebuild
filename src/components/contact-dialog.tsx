"use client";

import {
  RiArrowLeftLine,
  RiArrowRightLine,
  RiCalendarLine,
  RiSendPlaneLine,
} from "@remixicon/react";
import { useState } from "react";

import { CalEmbed } from "@/components/cal-embed";
import { ContactForm } from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { useAppStore } from "@/store";

const calLink = "anurag-singh-odo4uq/15min";

const routes = [
  {
    id: "call" as const,
    icon: RiCalendarLine,
    title: "Book a call",
    hint: "Pick a slot that suits you and we will meet on video.",
    meta: "15 minutes",
  },
  {
    id: "brief" as const,
    icon: RiSendPlaneLine,
    title: "Send a brief",
    hint: "Tell us what you are building and we reply by email.",
    meta: "Four fields",
  },
];

export function ContactDialog() {
  const open = useAppStore((state) => state.contactOpen);
  const setOpen = useAppStore((state) => state.setContactOpen);
  const [pick, setPick] = useState<"call" | "brief" | null>(null);

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (!next) setPick(null);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="bg-background grid h-[min(90dvh,46rem)] grid-rows-[auto_1fr] gap-0 overflow-hidden p-0 sm:max-w-5xl">
        <header className="flex items-start gap-3 border-b px-5 py-4 sm:px-6 sm:py-5">
          {pick ? (
            <Button
              variant="ghost"
              size="icon-sm"
              aria-label="Back"
              onClick={() => setPick(null)}
              className="-ml-1 shrink-0 md:hidden"
            >
              <RiArrowLeftLine className="size-4" />
            </Button>
          ) : null}

          <div className="min-w-0">
            <DialogTitle className="text-lg font-semibold tracking-tight">
              Let&apos;s talk about it
            </DialogTitle>
            <DialogDescription className="text-muted-foreground mt-1 text-sm text-pretty">
              Book a fifteen minute call, or send the idea over and we will
              reply.
            </DialogDescription>
          </div>
        </header>

        <div className="grid min-h-0 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] md:divide-x">
          {pick === null ? (
            <div className="flex min-h-0 flex-col gap-4 p-5 md:hidden">
              {routes.map((route) => (
                <button
                  key={route.id}
                  type="button"
                  onClick={() => setPick(route.id)}
                  className="bg-card hover:border-primary/40 ease-interface flex flex-1 flex-col justify-between rounded-2xl border p-5 text-left transition-colors duration-300"
                >
                  <span className="bg-primary/10 text-primary flex size-11 items-center justify-center rounded-xl">
                    <route.icon className="size-5" />
                  </span>

                  <span className="mt-6">
                    <span className="block text-lg font-semibold tracking-tight">
                      {route.title}
                    </span>
                    <span className="text-muted-foreground mt-1.5 block text-sm leading-relaxed text-pretty">
                      {route.hint}
                    </span>
                  </span>

                  <span className="text-muted-foreground mt-5 flex items-center gap-1.5 font-mono text-[0.625rem] tracking-widest uppercase">
                    {route.meta}
                    <RiArrowRightLine className="size-3.5" />
                  </span>
                </button>
              ))}
            </div>
          ) : null}

          <div
            className={`min-h-0 min-w-0 flex-col overflow-hidden ${
              pick === "call" ? "flex" : "hidden"
            } md:flex`}
          >
            <CalEmbed namespace="15min" calLink={calLink} />
          </div>

          <div
            className={`scrollbar-quiet min-h-0 min-w-0 flex-col overflow-y-auto p-5 sm:p-6 ${
              pick === "brief" ? "flex" : "hidden"
            } md:flex`}
          >
            <ContactForm />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

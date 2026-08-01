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
    hint: "Fifteen minutes on video, at a time that suits you.",
    meta: "15 minutes",
    action: "Pick a time",
  },
  {
    id: "brief" as const,
    icon: RiSendPlaneLine,
    title: "Send a brief",
    hint: "A few lines about the project, and we reply by email.",
    meta: "Four fields",
    action: "Start writing",
  },
];

export function ContactDialog() {
  const open = useAppStore((state) => state.contactOpen);
  const setOpen = useAppStore((state) => state.setContactOpen);
  const [pick, setPick] = useState<"call" | "brief" | null>(null);

  /* Only ever set on a phone, where one route fills the dialog and the header
     has to say which one you are in. */
  const chosen = routes.find((route) => route.id === pick);

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (!next) setPick(null);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="bg-background grid h-[min(90dvh,46rem)] grid-rows-[auto_1fr] gap-0 overflow-hidden p-0 sm:max-w-[90%] lg:max-w-5xl">
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
              {chosen ? chosen.title : "Choose how you'd like to start"}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground mt-1 text-sm text-pretty">
              {chosen
                ? chosen.hint
                : "Either one reaches us. Take whichever suits you."}
            </DialogDescription>
          </div>
        </header>

        <div className="relative grid min-h-0 md:grid-cols-2 md:divide-x">
          <span
            aria-hidden
            className="bg-primary text-primary-foreground ring-background absolute top-1/2 left-1/2 z-10 hidden size-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full font-mono text-[0.5625rem] font-medium tracking-widest uppercase ring-4 md:flex"
          >
            or
          </span>

          {pick === null ? (
            <div className="flex min-h-0 flex-col gap-4 p-5 md:hidden">
              {routes.map((route) => (
                <button
                  key={route.id}
                  type="button"
                  onClick={() => setPick(route.id)}
                  className="bg-card hover:border-primary/40 ease-interface flex flex-1 flex-col justify-center rounded-2xl border p-6 text-left transition-colors duration-300"
                >
                  <span className="flex items-center justify-between gap-3">
                    <span className="bg-primary/10 text-primary flex size-12 shrink-0 items-center justify-center rounded-2xl">
                      <route.icon className="size-6" />
                    </span>
                    <span className="text-muted-foreground font-mono text-[0.625rem] tracking-widest uppercase">
                      {route.meta}
                    </span>
                  </span>

                  <span className="mt-5 block text-xl font-semibold tracking-tight">
                    {route.title}
                  </span>
                  <span className="text-muted-foreground mt-2 block text-sm leading-relaxed text-pretty">
                    {route.hint}
                  </span>

                  <span className="text-primary mt-5 flex items-center gap-1.5 text-sm font-medium">
                    {route.action}
                    <RiArrowRightLine className="size-4" />
                  </span>
                </button>
              ))}
            </div>
          ) : null}

          <section
            className={`min-h-0 min-w-0 flex-col ${
              pick === "call" ? "flex" : "hidden"
            } md:flex`}
          >
            <div className="hidden shrink-0 items-start gap-3 px-5 pt-5 sm:px-6 sm:pt-6 md:flex">
              <span className="bg-primary/10 text-primary flex size-9 shrink-0 items-center justify-center rounded-lg">
                <RiCalendarLine className="size-4" />
              </span>
              <div className="min-w-0">
                <h3 className="font-semibold tracking-tight">Book a call</h3>
                <p className="text-muted-foreground mt-0.5 text-sm text-pretty">
                  {routes[0].hint}
                </p>
              </div>
            </div>

            <div className="mt-4 min-h-0 flex-1 overflow-hidden">
              <CalEmbed namespace="15min" calLink={calLink} />
            </div>
          </section>

          <section
            className={`scrollbar-quiet min-h-0 min-w-0 flex-col overflow-y-auto ${
              pick === "brief" ? "flex" : "hidden"
            } md:flex`}
          >
            <div className="hidden shrink-0 items-start gap-3 px-5 pt-5 sm:px-6 sm:pt-6 md:flex">
              <span className="bg-primary/10 text-primary flex size-9 shrink-0 items-center justify-center rounded-lg">
                <RiSendPlaneLine className="size-4" />
              </span>
              <div className="min-w-0">
                <h3 className="font-semibold tracking-tight">Send a brief</h3>
                <p className="text-muted-foreground mt-0.5 text-sm text-pretty">
                  {routes[1].hint}
                </p>
              </div>
            </div>

            <div className="px-5 pt-5 pb-5 sm:px-6 sm:pb-6">
              <ContactForm />
            </div>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}

"use client";

import { RiArrowRightLine, RiMenuLine } from "@remixicon/react";
import Image from "next/image";
import { useState } from "react";

import { NorviaBag } from "@/app/_components/norvia-bag";
import { NorviaBooking } from "@/app/_components/norvia-booking";
import { NorviaEnquiry } from "@/app/_components/norvia-enquiry";
import { NorviaSheet } from "@/app/_components/norvia-sheet";
import { SeatDots } from "@/app/_components/seat-dots";
import { drop, sessions, stock } from "@/lib/norvia";
import { cn } from "@/lib/utils";

type Sheet =
  | { kind: "bag" }
  | { kind: "book"; date: string }
  | { kind: "ask" }
  | null;

const cue = (beat: number) => ({ "--beat": beat }) as React.CSSProperties;

export function NorviaHomePhone() {
  const [bag, setBag] = useState<Record<string, number>>({});
  const [booked, setBooked] = useState<Record<string, number>>({});
  const [sheet, setSheet] = useState<Sheet>(null);
  const [open, setOpen] = useState(false);

  const count = Object.values(bag).reduce((sum, n) => sum + n, 0);

  const nudge = (id: string, by: number) =>
    setBag(was => {
      const next = Math.max(0, (was[id] ?? 0) + by);
      const rest = { ...was };
      if (next) rest[id] = next;
      else delete rest[id];
      return rest;
    });

  /* Closing clears `open` and leaves `sheet` set, so the panel still has its
     content while it leaves. */
  const show = (next: Sheet) => {
    setSheet(next);
    setOpen(true);
  };
  const close = () => setOpen(false);

  const session =
    sheet?.kind === "book"
      ? sessions.find(option => option.date === sheet.date)
      : undefined;

  return (
    <div className="concept-page concept-theme-paper bg-concept-canvas text-concept-ink font-display absolute top-0 left-0 flex flex-col">
      <header
        style={cue(0)}
        className="stage-cue build-part border-concept-ink/10 flex h-11 shrink-0 items-center border-b px-4"
      >
        <span className="font-label text-[0.8em] tracking-[0.32em]">NORVIA</span>
        <span className="ml-auto flex items-center gap-3">
          <RiMenuLine className="size-[1.1em]" />
          <button
            type="button"
            onClick={() => show({ kind: "bag" })}
            className={cn(
              "font-label flex items-center gap-2 border px-2.5 py-1 text-[0.55em] tracking-[0.2em] transition-colors duration-300",
              count
                ? "bg-concept-clay border-concept-clay text-concept-canvas"
                : "border-concept-ink/20",
            )}
          >
            BAG
            <span className="tabular-nums">{count}</span>
          </button>
        </span>
      </header>

      <div
        style={cue(0.06)}
        className="stage-cue build-part bg-concept-shell relative h-40 shrink-0 overflow-hidden"
      >
        <Image
          src="/concept/norvia-maker.webp"
          alt=""
          fill
          sizes="400px"
          className="object-cover object-[50%_30%]"
        />
        <span className="from-concept-scrim/90 via-concept-scrim/30 absolute inset-0 bg-linear-to-t to-transparent" />
        <div className="text-concept-chalk absolute inset-x-4 bottom-4 flex flex-col gap-2.5">
          <span className="build-act text-concept-chalk/80 font-label text-[0.55em] tracking-[0.2em]">
            HUDSON, NEW YORK
          </span>
          <span className="font-concept-display max-w-[15ch] text-[1.6em] leading-[0.95]">
            Thrown by hand,{" "}
            <span className="text-concept-gold italic">a few dozen</span> at a
            time.
          </span>
          <span className="bg-concept-clay text-concept-canvas font-label self-start px-3 py-1.5 text-[0.55em] tracking-[0.2em]">
            SHOP THE DROP
          </span>
        </div>
      </div>

      <div className="flex shrink-0 flex-col px-4 pt-3">
        <span
          style={cue(0.28)}
          className="stage-cue build-part text-concept-clay font-label text-[0.55em] tracking-[0.2em]"
        >
          THIS MONTH&apos;S DROP · 24 PIECES
        </span>
        <div className="scrollbar-none -mx-4 mt-2 flex snap-x gap-2.5 overflow-x-auto px-4">
          {drop.map((good, index) => {
            const gone = good.left === 0;
            const tag = stock(good);

            return (
              <button
                key={good.id}
                type="button"
                disabled={gone}
                onClick={() => nudge(good.id, 1)}
                style={cue(0.32 + index * 0.04)}
                className="stage-cue build-part flex w-19 shrink-0 snap-start flex-col text-left"
              >
                <span className="bg-concept-shell relative aspect-square w-full overflow-hidden">
                  <Image
                    src={good.photo}
                    alt=""
                    fill
                    sizes="100px"
                    className="object-cover"
                  />
                  {gone ? (
                    <span className="build-act bg-concept-canvas/55 absolute inset-0" />
                  ) : null}
                  {tag ? (
                    <span className="build-act bg-concept-canvas/90 font-label absolute top-1 left-1 px-1 py-0.5 text-[0.45em] tracking-[0.14em]">
                      {tag}
                    </span>
                  ) : null}
                </span>
                <span className="mt-1 flex justify-between gap-1 text-[0.6em] leading-tight">
                  <span className="truncate">{good.short}</span>
                  <span className="text-concept-muted tabular-nums">
                    ${good.price}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="border-concept-ink/10 mt-2.5 flex min-h-0 flex-1 flex-col border-t px-4 pt-2">
        <span
          style={cue(0.48)}
          className="stage-cue build-part text-concept-clay font-label text-[0.55em] tracking-[0.2em]"
        >
          AT THE WHEEL
        </span>
        {sessions.slice(0, 2).map((option, index) => {
          const taken = option.taken + (booked[option.date] ?? 0);
          const left = option.seats - taken;

          return (
            <div
              key={option.date}
              style={cue(0.52 + index * 0.05)}
              className="stage-cue build-part flex flex-1 items-center gap-2.5 text-[0.66em]"
            >
              <span className="flex min-w-0 flex-col gap-0.5">
                <span className="flex items-baseline gap-2">
                  <span className="font-label shrink-0 text-[0.85em] tracking-[0.08em] tabular-nums">
                    {option.date}
                  </span>
                  <span className="truncate">{option.name}</span>
                </span>
                <span className="build-act flex items-center gap-1.5">
                  <SeatDots seats={option.seats} taken={taken} />
                  <span className="text-concept-clay text-[0.85em]">
                    {left ? `${left} left` : "Full"}
                  </span>
                </span>
              </span>
              <button
                type="button"
                disabled={!left}
                onClick={() => show({ kind: "book", date: option.date })}
                className="border-concept-ink/25 font-label ml-auto shrink-0 border px-2 py-0.5 text-[0.7em] tracking-[0.14em] transition-colors duration-300 disabled:opacity-40"
              >
                {left ? "BOOK" : "FULL"}
              </button>
            </div>
          );
        })}
      </div>

      <button
        type="button"
        onClick={() => show({ kind: "ask" })}
        style={cue(0.62)}
        className="stage-cue build-part border-concept-ink/10 flex h-8 shrink-0 items-center justify-between gap-3 border-t px-4 text-left"
      >
        <span className="text-concept-muted font-label text-[0.5em] tracking-[0.2em]">
          COMMISSIONS · FROM $480
        </span>
        <span className="flex items-center gap-1.5 text-[0.62em]">
          Tell us what you have in mind
          <RiArrowRightLine className="text-concept-clay size-[1.1em]" />
        </span>
      </button>

      <NorviaSheet open={open} onClose={close} compact>
        {sheet?.kind === "bag" ? (
          <NorviaBag
            bag={bag}
            onChange={nudge}
            onReset={() => setBag({})}
            onClose={close}
            compact
          />
        ) : session ? (
          <NorviaBooking
            session={session}
            taken={session.taken + (booked[session.date] ?? 0)}
            onReserve={seats =>
              setBooked(was => ({
                ...was,
                [session.date]: (was[session.date] ?? 0) + seats,
              }))
            }
            onClose={close}
            compact
          />
        ) : sheet?.kind === "ask" ? (
          <NorviaEnquiry onClose={close} compact />
        ) : null}
      </NorviaSheet>
    </div>
  );
}

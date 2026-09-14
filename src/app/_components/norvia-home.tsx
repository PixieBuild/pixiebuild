"use client";

import { RiArrowRightLine } from "@remixicon/react";
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

const links = ["Shop", "Classes", "Commissions", "Visit"];

export function NorviaHome() {
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
        className="stage-cue build-part border-concept-ink/10 flex h-14 shrink-0 items-center gap-9 border-b px-9"
      >
        <span className="font-label text-[0.95em] tracking-[0.32em]">NORVIA</span>
        <nav className="flex gap-7 text-[0.78em]">
          {links.map(link => (
            <span key={link}>{link}</span>
          ))}
        </nav>
        <span className="text-concept-muted font-label ml-auto text-[0.64em] tracking-[0.18em]">
          NEXT DROP · SAT 3 OCT · 9AM
        </span>
        <button
          type="button"
          onClick={() => show({ kind: "bag" })}
          className={cn(
            "font-label flex items-center gap-2.5 border px-4 py-2 text-[0.66em] tracking-[0.2em] transition-colors duration-300",
            count
              ? "bg-concept-clay border-concept-clay text-concept-canvas"
              : "border-concept-ink/20 hover:bg-concept-shell",
          )}
        >
          BAG
          <span className="tabular-nums">{count}</span>
        </button>
      </header>

      <div className="grid h-90 shrink-0 grid-cols-2">
        <div className="flex flex-col justify-center px-9">
          <span
            style={cue(0.06)}
            className="stage-cue build-part text-concept-muted font-label text-[0.66em] tracking-[0.2em]"
          >
            HUDSON, NEW YORK · SINCE 2019
          </span>
          <p
            style={cue(0.1)}
            className="stage-cue build-part font-concept-display mt-4 text-[2.7em] leading-[0.95]"
          >
            Thrown by hand,
            <br />
            <span className="text-concept-clay italic">a few dozen</span> at a
            time.
          </p>
          <p
            style={cue(0.14)}
            className="stage-cue build-part text-concept-muted mt-4 max-w-[40ch] text-[0.9em] leading-relaxed"
          >
            A two-person studio making speckled stoneware. A new drop on the
            first Saturday of the month, classes at the wheel, and commissions
            when the kiln has room.
          </p>
          <div style={cue(0.18)} className="stage-cue build-part mt-6 flex gap-3">
            <button
              type="button"
              className="bg-concept-clay text-concept-canvas font-label px-6 py-3 text-[0.62em] tracking-[0.2em] transition-opacity duration-300 hover:opacity-85"
            >
              SHOP THE DROP
            </button>
            <button
              type="button"
              onClick={() => show({ kind: "book", date: sessions[0].date })}
              className="border-concept-ink/25 hover:bg-concept-shell font-label border px-6 py-3 text-[0.62em] tracking-[0.2em] transition-colors duration-300"
            >
              BOOK A CLASS
            </button>
          </div>
        </div>

        <div
          style={cue(0.08)}
          className="stage-cue build-part bg-concept-shell relative overflow-hidden"
        >
          <Image
            src="/concept/norvia-wheel.webp"
            alt=""
            fill
            sizes="640px"
            className="object-cover"
          />
          <span className="bg-concept-canvas/90 font-label absolute bottom-4 left-4 px-2.5 py-1.5 text-[0.62em] tracking-[0.18em]">
            MARA, AT THE WHEEL
          </span>
        </div>
      </div>

      <div className="border-concept-ink/10 divide-concept-ink/10 grid min-h-0 flex-1 grid-cols-12 divide-x border-t">
        <div className="col-span-5 flex min-h-0 flex-col p-6">
          <span
            style={cue(0.3)}
            className="stage-cue build-part text-concept-clay font-label text-[0.66em] tracking-[0.2em]"
          >
            THIS MONTH&apos;S DROP · 24 PIECES
          </span>
          <div className="mt-4 grid min-h-0 flex-1 grid-cols-3 gap-4">
            {drop.slice(0, 3).map((good, index) => {
              const gone = good.left === 0;
              const tag = stock(good);

              return (
                <button
                  key={good.id}
                  type="button"
                  disabled={gone}
                  onClick={() => nudge(good.id, 1)}
                  style={cue(0.34 + index * 0.04)}
                  className="stage-cue build-part group/good flex min-h-0 flex-col text-left"
                >
                  <span className="bg-concept-shell relative min-h-0 w-full flex-1 overflow-hidden">
                    <Image
                      src={good.photo}
                      alt=""
                      fill
                      sizes="200px"
                      className="object-cover transition-transform duration-500 group-hover/good:scale-105"
                    />
                    {gone ? (
                      <span className="build-act bg-concept-canvas/55 absolute inset-0" />
                    ) : null}
                    {tag ? (
                      <span className="build-act bg-concept-canvas/90 font-label absolute top-2 left-2 px-1.5 py-0.5 text-[0.62em] tracking-[0.16em]">
                        {tag}
                      </span>
                    ) : null}
                    {!gone ? (
                      <span className="bg-concept-ink text-concept-canvas font-label absolute right-2 bottom-2 px-1.5 py-0.5 text-[0.62em] tracking-[0.16em] opacity-0 transition-opacity duration-300 group-hover/good:opacity-100">
                        + ADD
                      </span>
                    ) : null}
                  </span>
                  <span className="mt-2.5 flex shrink-0 flex-col gap-0.5 text-[0.78em]">
                    <span className="truncate">{good.name}</span>
                    <span className="text-concept-muted tabular-nums">${good.price}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="col-span-4 flex min-h-0 flex-col p-6">
          <span
            style={cue(0.48)}
            className="stage-cue build-part text-concept-clay font-label text-[0.66em] tracking-[0.2em]"
          >
            AT THE WHEEL
          </span>
          <div className="mt-2 flex min-h-0 flex-1 flex-col">
            {sessions.map((option, index) => {
              const taken = option.taken + (booked[option.date] ?? 0);
              const left = option.seats - taken;

              return (
                <div
                  key={option.date}
                  style={cue(0.52 + index * 0.04)}
                  className="stage-cue build-part flex flex-1 items-center gap-3 text-[0.8em]"
                >
                  <span className="flex min-w-0 flex-col gap-1.5">
                    <span className="flex items-baseline gap-2.5">
                      <span className="font-label shrink-0 text-[0.85em] tracking-[0.1em] tabular-nums">
                        {option.date}
                      </span>
                      <span className="truncate">{option.name}</span>
                    </span>
                    <span className="build-act flex items-center gap-2">
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
                    className="border-concept-ink/25 hover:bg-concept-shell font-label ml-auto shrink-0 border px-3 py-1.5 text-[0.8em] tracking-[0.16em] transition-colors duration-300 disabled:opacity-40"
                  >
                    {left ? "BOOK" : "FULL"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <button
          type="button"
          onClick={() => show({ kind: "ask" })}
          style={cue(0.6)}
          className="stage-cue build-part group/ask relative col-span-3 min-h-0 overflow-hidden text-left"
        >
          <Image
            src="/concept/norvia-commission.webp"
            alt=""
            fill
            sizes="320px"
            className="object-cover transition-transform duration-700 group-hover/ask:scale-105"
          />
          <span className="from-concept-scrim/85 absolute inset-0 bg-linear-to-b to-transparent" />
          <span className="text-concept-chalk absolute inset-x-6 top-5 flex flex-col gap-1.5">
            <span className="font-label text-[0.66em] tracking-[0.2em] opacity-70">
              COMMISSIONS · FROM $480
            </span>
            <span className="font-concept-display flex items-center gap-2 text-[1.3em] leading-tight">
              Tell us what you have in mind
              <RiArrowRightLine className="size-[0.9em] shrink-0 transition-transform duration-300 group-hover/ask:translate-x-0.5" />
            </span>
          </span>
        </button>
      </div>

      <footer
        style={cue(0.66)}
        className="stage-cue build-part border-concept-ink/10 flex h-16 shrink-0 items-center gap-5 border-t px-9 text-[0.78em]"
      >
        <span className="text-concept-muted font-label text-[0.85em] tracking-[0.2em]">
          FIND US IN PERSON
        </span>
        <span>
          Hudson Farmers Market, Saturdays
          <span className="build-act"> 9 to 1</span>
        </span>
        <span className="text-concept-muted">·</span>
        <span>Studio door, Thursday to Saturday</span>
        <span className="text-concept-muted ml-auto">@norvia.studio</span>
      </footer>

      <NorviaSheet open={open} onClose={close}>
        {sheet?.kind === "bag" ? (
          <NorviaBag
            bag={bag}
            onChange={nudge}
            onReset={() => setBag({})}
            onClose={close}
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
          />
        ) : sheet?.kind === "ask" ? (
          <NorviaEnquiry onClose={close} />
        ) : null}
      </NorviaSheet>
    </div>
  );
}

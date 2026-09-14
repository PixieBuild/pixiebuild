"use client";

import { RiArrowRightLine } from "@remixicon/react";
import Image from "next/image";
import { useState } from "react";

import { NorviaSheet } from "@/app/_components/norvia-sheet";
import { SeatDots } from "@/app/_components/seat-dots";
import { SorrelTable } from "@/app/_components/sorrel-table";
import { dishes, sittings } from "@/lib/sorrel";

type Sheet = { kind: "table" } | { kind: "sit"; date: string } | null;

const links = ["Menu", "Tonight", "Events", "Find us"];

export function SorrelHome() {
  const [booked, setBooked] = useState<Record<string, number>>({});
  const [sheet, setSheet] = useState<Sheet>(null);
  const [open, setOpen] = useState(false);

  /* Closing clears `open` and leaves `sheet` set, so the panel still has its
     content while it leaves. */
  const show = (next: Sheet) => {
    setSheet(next);
    setOpen(true);
  };
  const close = () => setOpen(false);

  const sitting =
    sheet?.kind === "sit"
      ? sittings.find(option => option.date === sheet.date)
      : undefined;

  return (
    <div className="concept-page concept-theme-ink bg-concept-canvas text-concept-ink font-display absolute top-0 left-0 flex flex-col">
      <header className="border-concept-ink/10 flex h-14 shrink-0 items-center gap-9 border-b px-9">
        <span className="font-label text-[0.95em] tracking-[0.32em]">SORREL</span>
        <nav className="flex gap-7 text-[0.78em]">
          {links.map(link => (
            <span key={link}>{link}</span>
          ))}
        </nav>
        <span className="text-concept-muted font-label ml-auto text-[0.64em] tracking-[0.18em]">
          OPEN TONIGHT · WALK-INS UNTIL 9
        </span>
        <button
          type="button"
          onClick={() => show({ kind: "table" })}
          className="bg-concept-clay text-concept-canvas font-label px-4 py-2 text-[0.66em] tracking-[0.2em] transition-opacity duration-300 hover:opacity-85"
        >
          BOOK A TABLE
        </button>
      </header>

      <div className="relative h-[56%] shrink-0 overflow-hidden">
        <Image
          src="/concept/hotel-kitchen.webp"
          alt=""
          fill
          sizes="1200px"
          className="object-cover object-[50%_65%]"
        />
        <span className="from-concept-scrim via-concept-scrim/30 absolute inset-0 bg-linear-to-t to-transparent" />
        <span className="text-concept-chalk/75 font-label absolute top-6 left-9 text-[0.66em] tracking-[0.2em]">
          FORT GREENE, BROOKLYN · KITCHEN &amp; WINE BAR
        </span>
        <span className="text-concept-chalk absolute bottom-[0.05em] left-8 text-[10.5em] leading-[0.8] font-semibold tracking-tighter">
          SORREL
        </span>
        <span className="text-concept-chalk absolute right-9 bottom-7 flex flex-col items-end gap-1.5 text-right">
          <span className="font-concept-display text-[1.7em] leading-none italic">
            Dinner from five.
          </span>
          <span className="text-concept-chalk/70 text-[0.78em]">
            Sunday lunch, once a week.
          </span>
        </span>
      </div>

      <div className="border-concept-ink/10 divide-concept-ink/10 grid min-h-0 flex-1 grid-cols-12 divide-x border-t">
        <div className="col-span-5 flex min-h-0 flex-col p-6">
          <span className="text-concept-clay font-label text-[0.66em] tracking-[0.2em]">
            TONIGHT
          </span>
          <div className="divide-concept-ink/10 mt-2 flex min-h-0 flex-1 flex-col divide-y">
            {dishes.map(dish => (
              <span
                key={dish.name}
                className="flex flex-1 items-center justify-between gap-4 text-[0.8em]"
              >
                <span className="truncate">{dish.name}</span>
                <span className="text-concept-muted tabular-nums">${dish.price}</span>
              </span>
            ))}
          </div>
          <span className="text-concept-muted mt-2 flex items-center gap-2 text-[0.7em]">
            Changes every Tuesday · Full menu
            <RiArrowRightLine className="text-concept-clay size-[1em]" />
          </span>
        </div>

        <div className="col-span-4 flex min-h-0 flex-col p-6">
          <span className="text-concept-clay font-label text-[0.66em] tracking-[0.2em]">
            THIS WEEK
          </span>
          <div className="mt-2 flex min-h-0 flex-1 flex-col">
            {sittings.map(option => {
              const taken = option.taken + (booked[option.date] ?? 0);
              const left = option.seats - taken;

              return (
                <div
                  key={option.date}
                  className="flex flex-1 items-center gap-3 text-[0.8em]"
                >
                  <span className="flex min-w-0 flex-col gap-1.5">
                    <span className="flex items-baseline gap-2.5">
                      <span className="font-label shrink-0 text-[0.85em] tracking-widest tabular-nums">
                        {option.date}
                      </span>
                      <span className="truncate">{option.name}</span>
                    </span>
                    <span className="flex items-center gap-2">
                      <SeatDots seats={option.seats} taken={taken} />
                      <span className="text-concept-clay text-[0.85em]">
                        {left ? `${left} left` : "Full"}
                      </span>
                    </span>
                  </span>
                  <button
                    type="button"
                    disabled={!left}
                    onClick={() => show({ kind: "sit", date: option.date })}
                    className="border-concept-ink/25 hover:bg-concept-shell font-label ml-auto shrink-0 border px-3 py-1.5 text-[0.8em] tracking-[0.16em] transition-colors duration-300 disabled:opacity-40"
                  >
                    {left ? "BOOK" : "FULL"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <div className="col-span-3 flex min-h-0 flex-col p-6">
          <span className="text-concept-clay font-label text-[0.66em] tracking-[0.2em]">
            FIND US
          </span>
          <div className="mt-3 flex flex-col gap-1.5 text-[0.8em] leading-snug">
            <span>184 DeKalb Ave, Fort Greene</span>
            <span className="text-concept-muted">Tuesday to Sunday, 5 to 11</span>
            <span className="text-concept-muted">Walk-ins at the bar until 9</span>
          </div>
          <span className="text-concept-muted mt-auto flex items-center gap-2 text-[0.7em]">
            Private dining, from $65 a head
            <RiArrowRightLine className="text-concept-clay size-[1em]" />
          </span>
        </div>
      </div>

      <NorviaSheet open={open} onClose={close}>
        {sheet?.kind === "table" ? (
          <SorrelTable onReserve={() => {}} onClose={close} />
        ) : sitting ? (
          <SorrelTable
            sitting={sitting}
            taken={sitting.taken + (booked[sitting.date] ?? 0)}
            onReserve={seats =>
              setBooked(was => ({
                ...was,
                [sitting.date]: (was[sitting.date] ?? 0) + seats,
              }))
            }
            onClose={close}
          />
        ) : null}
      </NorviaSheet>
    </div>
  );
}

"use client";

import { RiMenuLine } from "@remixicon/react";
import Image from "next/image";
import { useState } from "react";

import { NorviaSheet } from "@/app/_components/norvia-sheet";
import { SeatDots } from "@/app/_components/seat-dots";
import { SorrelTable } from "@/app/_components/sorrel-table";
import { dishes, sittings } from "@/lib/sorrel";

type Sheet = { kind: "table" } | { kind: "sit"; date: string } | null;

export function SorrelHomePhone() {
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
      <header className="border-concept-ink/10 flex h-11 shrink-0 items-center border-b px-4">
        <span className="font-label text-[0.8em] tracking-[0.32em]">SORREL</span>
        <span className="ml-auto flex items-center gap-3">
          <RiMenuLine className="size-[1.1em]" />
          <button
            type="button"
            onClick={() => show({ kind: "table" })}
            className="bg-concept-clay text-concept-canvas font-label px-2.5 py-1 text-[0.6em] tracking-[0.2em]"
          >
            BOOK
          </button>
        </span>
      </header>

      <div className="relative h-44 shrink-0 overflow-hidden">
        <Image
          src="/concept/hotel-kitchen.webp"
          alt=""
          fill
          sizes="400px"
          className="object-cover object-[50%_65%]"
        />
        <span className="from-concept-scrim via-concept-scrim/30 absolute inset-0 bg-linear-to-t to-transparent" />
        <span className="text-concept-chalk/75 font-label absolute top-3.5 left-4 text-[0.58em] tracking-[0.2em]">
          FORT GREENE, BROOKLYN
        </span>
        <span className="text-concept-chalk absolute bottom-[0.05em] left-3 text-[4.3em] leading-[0.8] font-semibold tracking-tighter">
          SORREL
        </span>
      </div>

      <div className="flex min-h-0 flex-1 flex-col overflow-hidden px-4 pt-3">
        <span className="text-concept-clay font-label text-[0.55em] tracking-[0.2em]">
          TONIGHT
        </span>
        <div className="divide-concept-ink/10 mt-1 flex flex-col divide-y">
          {dishes.slice(0, 2).map(dish => (
            <span
              key={dish.name}
              className="flex shrink-0 items-center justify-between gap-3 py-1.5 text-[0.68em]"
            >
              <span className="truncate">{dish.name}</span>
              <span className="text-concept-muted tabular-nums">${dish.price}</span>
            </span>
          ))}
        </div>
      </div>

      <div className="border-concept-ink/10 mt-2 flex shrink-0 flex-col border-t px-4 pt-2 pb-2.5">
        <span className="text-concept-clay font-label text-[0.55em] tracking-[0.2em]">
          THIS WEEK
        </span>
        {sittings.map(option => {
          const taken = option.taken + (booked[option.date] ?? 0);
          const left = option.seats - taken;

          return (
            <div
              key={option.date}
              className="flex items-center gap-2.5 pt-1.5 text-[0.72em]"
            >
              <span className="flex min-w-0 flex-col gap-0.5">
                <span className="flex items-baseline gap-2">
                  <span className="font-label shrink-0 text-[0.85em] tracking-[0.08em] tabular-nums">
                    {option.date}
                  </span>
                  <span className="truncate">{option.name}</span>
                </span>
                <span className="flex items-center gap-1.5">
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
                className="border-concept-ink/25 font-label ml-auto shrink-0 border px-2 py-0.5 text-[0.85em] tracking-[0.14em] transition-colors duration-300 disabled:opacity-40"
              >
                {left ? "BOOK" : "FULL"}
              </button>
            </div>
          );
        })}
      </div>

      <div className="border-concept-ink/10 flex h-8 shrink-0 items-center justify-between border-t px-4 text-[0.62em]">
        <span>184 DeKalb Ave</span>
        <span className="text-concept-muted">Tue to Sun, 5 to 11</span>
      </div>

      <NorviaSheet open={open} onClose={close} compact>
        {sheet?.kind === "table" ? (
          <SorrelTable onReserve={() => {}} onClose={close} compact />
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
            compact
          />
        ) : null}
      </NorviaSheet>
    </div>
  );
}

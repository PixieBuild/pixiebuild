"use client";

import { RiCheckLine, RiCloseLine } from "@remixicon/react";
import { useState } from "react";

import { SeatDots } from "@/app/_components/seat-dots";
import { gone, slots, type Sitting } from "@/lib/sorrel";
import { cn } from "@/lib/utils";

/* Books a table tonight, or seats at one of the week's sittings when one is
   passed in. */
export function SorrelTable({
  sitting,
  taken = 0,
  onReserve,
  onClose,
  compact,
}: {
  sitting?: Sitting;
  taken?: number;
  onReserve: (seats: number) => void;
  onClose: () => void;
  compact?: boolean;
}) {
  const left = sitting ? sitting.seats - taken : 6;
  const most = Math.min(sitting ? 4 : 6, left);
  const [guests, setGuests] = useState(Math.min(2, most));
  const [slot, setSlot] = useState(slots.find(time => !gone.includes(time)));
  const [done, setDone] = useState(false);
  const pad = compact ? "px-4" : "px-6";

  const when = sitting ? `${sitting.date} · ${sitting.time}` : `Tonight · ${slot}`;

  if (done) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 py-10 text-center">
        <span className="bg-concept-clay text-concept-canvas flex size-[3em] items-center justify-center rounded-full">
          <RiCheckLine className="size-[1.5em]" />
        </span>
        <span className="font-concept-display mt-1 text-[2em] leading-none">
          Table booked
        </span>
        <span className="text-concept-muted text-[0.85em]">
          {when} · {guests} {guests === 1 ? "guest" : "guests"} · the details
          are in your inbox
        </span>
        <button
          type="button"
          onClick={onClose}
          className="border-concept-ink/25 hover:bg-concept-shell font-label mt-3 border px-6 py-3 text-[0.62em] tracking-[0.2em] transition-colors duration-300"
        >
          DONE
        </button>
      </div>
    );
  }

  return (
    <>
      <div
        className={cn(
          "border-concept-ink/10 flex shrink-0 items-center justify-between gap-4 border-b py-3.5",
          pad,
        )}
      >
        <span className="font-concept-display text-[1.35em] leading-none">
          Book a table
        </span>
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="text-concept-muted hover:text-concept-ink transition-colors duration-300"
        >
          <RiCloseLine className="size-[1.1em]" />
        </button>
      </div>

      <div
        className={cn(
          "scrollbar-none flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto py-4",
          pad,
        )}
      >
        <div className="flex flex-col gap-1.5">
          <span className="font-concept-display text-[1.6em] leading-none">
            {sitting ? sitting.name : "Tonight"}
          </span>
          <span className="text-concept-muted text-[0.8em]">
            {sitting
              ? `${sitting.date} · ${sitting.time} · $${sitting.price} a head`
              : "184 DeKalb Ave · kitchen open until 10:30"}
          </span>
        </div>

        {sitting ? (
          <div className="flex items-center gap-3">
            <SeatDots seats={sitting.seats} taken={taken} className="text-[1.1em]" />
            <span className="text-concept-clay text-[0.72em]">
              {left} {left === 1 ? "seat" : "seats"} left
            </span>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <span className="font-label text-[0.55em] tracking-[0.2em]">TIME</span>
            <div className="grid grid-cols-3 gap-1.5">
              {slots.map(time => {
                const full = gone.includes(time);

                return (
                  <button
                    key={time}
                    type="button"
                    disabled={full}
                    onClick={() => setSlot(time)}
                    className={cn(
                      "border py-1.5 text-[0.78em] tabular-nums transition-colors duration-300 disabled:line-through disabled:opacity-30",
                      time === slot
                        ? "bg-concept-clay border-concept-clay text-concept-canvas"
                        : "border-concept-ink/20 hover:bg-concept-shell",
                    )}
                  >
                    {time}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        <div className="border-concept-ink/10 flex items-center justify-between border-y py-3">
          <span className="font-label text-[0.55em] tracking-[0.2em]">GUESTS</span>
          <span className="border-concept-ink/20 flex items-center border">
            <button
              type="button"
              aria-label="One fewer"
              disabled={guests <= 1}
              onClick={() => setGuests(n => n - 1)}
              className="hover:bg-concept-shell px-3 py-1 text-[0.85em] transition-colors duration-300 disabled:opacity-30"
            >
              −
            </button>
            <span className="w-[1.8em] text-center text-[0.8em] tabular-nums">
              {guests}
            </span>
            <button
              type="button"
              aria-label="One more"
              disabled={guests >= most}
              onClick={() => setGuests(n => n + 1)}
              className="hover:bg-concept-shell px-3 py-1 text-[0.85em] transition-colors duration-300 disabled:opacity-30"
            >
              +
            </button>
          </span>
        </div>

        <div className="grid grid-cols-2 gap-x-5 gap-y-4">
          {["NAME", "PHONE"].map(label => (
            <label key={label} className="flex flex-col gap-1.5">
              <span className="text-concept-muted font-label text-[0.52em] tracking-[0.16em]">
                {label}
              </span>
              <span className="border-concept-ink/20 block h-[1.6em] border-b" />
            </label>
          ))}
        </div>
      </div>

      <div className={cn("bg-concept-shell flex shrink-0 flex-col gap-3 py-4", pad)}>
        <span className="flex items-baseline justify-between">
          <span className="font-label text-[0.55em] tracking-[0.2em]">
            {sitting ? "TOTAL" : "HOLDING"}
          </span>
          <span className="font-concept-display text-[1.7em] leading-none tabular-nums">
            {sitting ? `$${sitting.price * guests}` : when}
          </span>
        </span>
        <button
          type="button"
          disabled={!left}
          onClick={() => {
            onReserve(guests);
            setDone(true);
          }}
          className="bg-concept-clay text-concept-canvas font-label py-3 text-[0.62em] tracking-[0.2em] transition-opacity duration-300 hover:opacity-85 disabled:opacity-40"
        >
          {left ? "RESERVE" : "FULL"}
        </button>
      </div>
    </>
  );
}

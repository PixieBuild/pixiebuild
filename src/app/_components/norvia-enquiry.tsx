"use client";

import { RiCheckLine, RiCloseLine } from "@remixicon/react";
import { useState } from "react";

import { cn } from "@/lib/utils";

const kinds = ["Dinner set", "Mugs & cups", "Something else"];

export function NorviaEnquiry({
  onClose,
  compact,
}: {
  onClose: () => void;
  compact?: boolean;
}) {
  const [kind, setKind] = useState(kinds[0]);
  const [sent, setSent] = useState(false);
  const pad = compact ? "px-4" : "px-6";

  if (sent) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 py-10 text-center">
        <span className="bg-concept-clay text-concept-canvas flex size-[3em] items-center justify-center rounded-full">
          <RiCheckLine className="size-[1.5em]" />
        </span>
        <span className="font-concept-display mt-1 text-[2em] leading-none">
          Sent
        </span>
        <span className="text-concept-muted text-[0.85em]">
          Mara replies within two days.
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
          Commission a piece
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
        <span className="text-concept-muted text-[0.8em] leading-relaxed">
          Made to order between drops. From $480, and six to eight weeks from
          the first sketch.
        </span>

        <div className="flex flex-col gap-2">
          <span className="text-concept-muted font-label text-[0.52em] tracking-[0.16em]">
            WHAT KIND OF PIECE
          </span>
          <span className="flex flex-wrap gap-1.5">
            {kinds.map(option => (
              <button
                key={option}
                type="button"
                onClick={() => setKind(option)}
                className={cn(
                  "border px-3 py-1.5 text-[0.72em] transition-colors duration-300",
                  option === kind
                    ? "bg-concept-ink border-concept-ink text-concept-canvas"
                    : "border-concept-ink/20 hover:bg-concept-shell",
                )}
              >
                {option}
              </button>
            ))}
          </span>
        </div>

        {["WHAT ARE YOU THINKING OF", "EMAIL"].map((label, index) => (
          <label key={label} className="flex flex-col gap-1.5">
            <span className="text-concept-muted font-label text-[0.52em] tracking-[0.16em]">
              {label}
            </span>
            <span
              className={cn(
                "border-concept-ink/20 block border-b",
                index === 0 ? "h-[3.2em]" : "h-[1.6em]",
              )}
            />
          </label>
        ))}
      </div>

      <div className={cn("bg-concept-shell flex shrink-0 flex-col gap-3 py-4", pad)}>
        <button
          type="button"
          onClick={() => setSent(true)}
          className="bg-concept-clay text-concept-canvas font-label py-3 text-[0.62em] tracking-[0.2em] transition-opacity duration-300 hover:opacity-85"
        >
          SEND TO MARA
        </button>
      </div>
    </>
  );
}

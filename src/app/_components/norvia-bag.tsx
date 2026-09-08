"use client";

import {
  RiArrowLeftLine,
  RiCheckLine,
  RiCloseLine,
  RiShieldCheckLine,
} from "@remixicon/react";
import Image from "next/image";
import { useState } from "react";

import { goods } from "@/lib/norvia";
import { cn } from "@/lib/utils";

const fields = [
  { label: "EMAIL", wide: true },
  { label: "FIRST NAME" },
  { label: "LAST NAME" },
  { label: "ADDRESS", wide: true },
  { label: "CITY" },
  { label: "ZIP" },
];

function Stepper({
  value,
  onChange,
}: {
  value: number;
  onChange: (by: number) => void;
}) {
  return (
    <span className="border-concept-ink/20 flex shrink-0 items-center border">
      <button
        type="button"
        aria-label="One fewer"
        onClick={() => onChange(-1)}
        className="hover:bg-concept-shell px-2.5 py-1 text-[0.85em] transition-colors duration-300"
      >
        −
      </button>
      <span className="w-[1.8em] text-center text-[0.8em] tabular-nums">
        {value}
      </span>
      <button
        type="button"
        aria-label="One more"
        onClick={() => onChange(1)}
        className="hover:bg-concept-shell px-2.5 py-1 text-[0.85em] transition-colors duration-300"
      >
        +
      </button>
    </span>
  );
}

export function NorviaBag({
  bag,
  onChange,
  onReset,
  onClose,
  compact,
}: {
  bag: Record<string, number>;
  onChange: (id: string, by: number) => void;
  onReset: () => void;
  onClose: () => void;
  compact?: boolean;
}) {
  const [view, setView] = useState<"bag" | "pay" | "done">("bag");

  const lines = Object.keys(bag).filter(id => bag[id]);
  const count = lines.reduce((sum, id) => sum + bag[id], 0);
  const total = lines.reduce((sum, id) => sum + goods[id].price * bag[id], 0);
  const pad = compact ? "px-4" : "px-6";

  if (view === "done") {
    return (
      <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 py-10 text-center">
        <span className="bg-concept-clay text-concept-canvas flex size-[3em] items-center justify-center rounded-full">
          <RiCheckLine className="size-[1.5em]" />
        </span>
        <span className="font-concept-display mt-1 text-[2em] leading-none">
          Order placed
        </span>
        <span className="text-concept-muted text-[0.85em]">
          #NV-2841 · arriving Thursday
        </span>
        <button
          type="button"
          onClick={() => {
            onReset();
            onClose();
          }}
          className="border-concept-ink/25 hover:bg-concept-shell font-label mt-3 border px-6 py-3 text-[0.62em] tracking-[0.2em] transition-colors duration-300"
        >
          BACK TO SHOP
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
          {view === "bag" ? "Your bag" : "Checkout"}
        </span>
        <span className="flex items-center gap-4">
          <span className="text-concept-muted font-label text-[0.55em] tracking-[0.2em]">
            {count} ITEM{count === 1 ? "" : "S"}
          </span>
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="text-concept-muted hover:text-concept-ink transition-colors duration-300"
          >
            <RiCloseLine className="size-[1.1em]" />
          </button>
        </span>
      </div>

      <div
        className={cn(
          "scrollbar-none flex min-h-0 flex-1 flex-col overflow-y-auto py-4",
          pad,
        )}
      >
        {view === "bag" ? (
          lines.length ? (
            <div className="divide-concept-ink/10 flex flex-col divide-y">
              {lines.map(id => {
                const good = goods[id];

                return (
                  <div key={id} className="flex items-center gap-3 py-3">
                    <span className="bg-concept-shell relative size-[3.2em] shrink-0 overflow-hidden">
                      <Image
                        src={good.photo}
                        alt=""
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </span>
                    <span className="flex min-w-0 flex-col gap-0.5">
                      <span className="truncate text-[0.85em]">{good.name}</span>
                      <span className="text-concept-muted text-[0.7em] tabular-nums">
                        ${good.price}
                      </span>
                    </span>
                    <span className="ml-auto flex shrink-0 items-center gap-3">
                      <Stepper value={bag[id]} onChange={by => onChange(id, by)} />
                      <span className="w-[3em] text-right text-[0.85em] font-semibold tabular-nums">
                        ${good.price * bag[id]}
                      </span>
                    </span>
                  </div>
                );
              })}
            </div>
          ) : (
            <span className="text-concept-muted my-auto text-center text-[0.85em]">
              Nothing in your bag yet.
            </span>
          )
        ) : (
          <div className="grid grid-cols-2 gap-x-5 gap-y-4">
            {fields.map(field => (
              <label
                key={field.label}
                className={cn("flex flex-col gap-1.5", field.wide && "col-span-2")}
              >
                <span className="text-concept-muted font-label text-[0.52em] tracking-[0.16em]">
                  {field.label}
                </span>
                <span className="border-concept-ink/20 block h-[1.6em] border-b" />
              </label>
            ))}
            <span className="text-concept-muted col-span-2 flex items-center gap-2 text-[0.7em]">
              <RiShieldCheckLine className="text-concept-clay size-[1.2em]" />
              Encrypted, handled by Stripe
            </span>
          </div>
        )}
      </div>

      <div
        className={cn(
          "bg-concept-shell flex shrink-0 flex-col gap-3 py-4",
          pad,
        )}
      >
        <span className="flex justify-between text-[0.78em]">
          <span className="text-concept-muted">Delivery</span>
          <span className="text-concept-clay">Free over $50</span>
        </span>
        <span className="flex items-baseline justify-between">
          <span className="font-label text-[0.55em] tracking-[0.2em]">TOTAL</span>
          <span className="font-concept-display text-[1.7em] leading-none tabular-nums">
            ${total}
          </span>
        </span>
        <button
          type="button"
          disabled={!count}
          onClick={() => setView(view === "bag" ? "pay" : "done")}
          className="bg-concept-clay text-concept-canvas font-label py-3 text-[0.62em] tracking-[0.2em] transition-opacity duration-300 hover:opacity-85 disabled:opacity-40"
        >
          {view === "bag" ? "CHECKOUT" : "PLACE ORDER"}
        </button>
        {view === "pay" ? (
          <button
            type="button"
            onClick={() => setView("bag")}
            className="text-concept-muted hover:text-concept-ink font-label flex items-center gap-2 self-start text-[0.55em] tracking-[0.2em] transition-colors duration-300"
          >
            <RiArrowLeftLine className="size-[1.2em]" />
            BACK TO BAG
          </button>
        ) : null}
      </div>
    </>
  );
}

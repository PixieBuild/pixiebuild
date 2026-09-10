import { RiArrowRightLine } from "@remixicon/react";
import Image from "next/image";

import { NorviaHomePhone } from "@/app/_components/norvia-home-phone";

const grid = [
  "/concept/product-cups.webp",
  "/concept/norvia-stall.webp",
  "/concept/product-bowl.webp",
  "/concept/norvia-wheel.webp",
  "/concept/product-jug.webp",
  "/concept/norvia-commission.webp",
];

export function NorviaBeforePhone() {
  return (
    <div className="concept-page concept-theme-paper bg-concept-canvas text-concept-ink font-display absolute top-0 left-0 flex flex-col">
      <div className="flex h-1/2 min-h-0 flex-col">
        <div className="border-concept-ink/10 flex shrink-0 items-baseline justify-between border-b px-4 py-2.5">
          <span className="text-concept-muted font-label text-[0.58em] tracking-[0.2em]">
            BEFORE
          </span>
          <span className="text-[0.72em]">A grid of photos, DM to order</span>
        </div>

        <div className="flex shrink-0 items-center gap-3 px-4 pt-3">
          <span className="bg-concept-shell relative size-10 shrink-0 overflow-hidden rounded-full">
            <Image
              src="/concept/norvia-maker.webp"
              alt=""
              fill
              sizes="48px"
              className="object-cover object-[50%_20%]"
            />
          </span>
          <span className="flex min-w-0 flex-col">
            <span className="text-[0.85em] font-semibold">norvia.studio</span>
            <span className="text-concept-muted text-[0.68em] leading-snug">
              Ceramics · Hudson, NY · Market Saturdays
            </span>
          </span>
        </div>

        <div className="mt-3 grid min-h-0 flex-1 grid-cols-3 gap-1 px-4 pb-3">
          {grid.map(shot => (
            <span key={shot} className="bg-concept-shell relative min-h-0 overflow-hidden">
              <Image src={shot} alt="" fill sizes="110px" className="object-cover" />
            </span>
          ))}
        </div>
      </div>

      <div className="border-concept-ink/10 bg-concept-shell flex h-1/2 min-h-0 flex-col border-t">
        <div className="border-concept-ink/10 flex shrink-0 items-baseline justify-between border-b px-4 py-2.5">
          <span className="text-concept-clay font-label text-[0.58em] tracking-[0.2em]">
            AFTER
          </span>
          <span className="flex items-center gap-1.5 text-[0.72em]">
            Sells, books and answers
            <RiArrowRightLine className="text-concept-clay size-[1em]" />
          </span>
        </div>

        <div className="relative min-h-0 flex-1 overflow-hidden px-8 pt-4">
          <div className="border-concept-scrim bg-concept-scrim shadow-elev-2 mx-auto w-full overflow-hidden rounded-t-[1.4em] border-[0.3em] border-b-0">
            <div className="concept-stage relative w-full overflow-hidden rounded-t-[1.1em] [--concept-base:16] [--concept-height:464] [--concept-width:360]">
              <NorviaHomePhone />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

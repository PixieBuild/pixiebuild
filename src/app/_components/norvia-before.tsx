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
  "/concept/product-linen.webp",
  "/concept/norvia-list.webp",
  "/concept/norvia-maker.webp",
];

export function NorviaBefore() {
  return (
    <div className="concept-page concept-theme-paper bg-concept-canvas text-concept-ink font-display absolute top-0 left-0 grid grid-cols-2">
      <div className="border-concept-ink/10 flex min-h-0 flex-col border-r">
        <div className="border-concept-ink/10 flex shrink-0 items-baseline justify-between border-b px-9 py-6">
          <span className="text-concept-muted font-label text-[0.62em] tracking-[0.2em]">
            BEFORE
          </span>
          <span className="text-[0.85em]">A grid of photos, and a DM to order.</span>
        </div>

        <div className="flex min-h-0 flex-1 flex-col px-9 py-7">
          <div className="flex items-center gap-5">
            <span className="bg-concept-shell relative size-16 shrink-0 overflow-hidden rounded-full">
              <Image
                src="/concept/norvia-maker.webp"
                alt=""
                fill
                sizes="80px"
                className="object-cover object-[50%_20%]"
              />
            </span>
            <span className="flex min-w-0 flex-col gap-1">
              <span className="text-[1em] font-semibold">norvia.studio</span>
              <span className="text-concept-muted text-[0.78em] leading-snug">
                Ceramics · Hudson, NY
                <br />
                Market Saturdays · DM to order
              </span>
            </span>
          </div>

          <div className="mt-5 flex gap-2">
            <span className="bg-concept-ink text-concept-canvas font-label flex-1 py-2 text-center text-[0.58em] tracking-[0.18em]">
              MESSAGE
            </span>
            <span className="border-concept-ink/20 font-label flex-1 border py-2 text-center text-[0.58em] tracking-[0.18em]">
              FOLLOW
            </span>
          </div>

          <div className="mt-5 grid min-h-0 flex-1 grid-cols-3 gap-1.5">
            {grid.map(shot => (
              <span
                key={shot}
                className="bg-concept-shell relative min-h-0 overflow-hidden"
              >
                <Image
                  src={shot}
                  alt=""
                  fill
                  sizes="160px"
                  className="object-cover"
                />
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex min-h-0 flex-col">
        <div className="border-concept-ink/10 flex shrink-0 items-baseline justify-between border-b px-9 py-6">
          <span className="text-concept-clay font-label text-[0.62em] tracking-[0.2em]">
            AFTER
          </span>
          <span className="flex items-center gap-2 text-[0.85em]">
            A site that sells, books and answers
            <RiArrowRightLine className="text-concept-clay size-[1em]" />
          </span>
        </div>

        <div className="bg-concept-shell flex min-h-0 flex-1 items-center justify-center px-9 py-7">
          <div className="border-concept-scrim bg-concept-scrim shadow-elev-2 w-[80%] overflow-hidden rounded-[1.5em] border-[0.35em]">
            <div className="concept-stage relative w-full overflow-hidden rounded-[1.15em] [--concept-base:16] [--concept-height:464] [--concept-width:360]">
              <NorviaHomePhone />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { RiArrowRightLine } from "@remixicon/react";
import Image from "next/image";

import { SorrelHomePhone } from "@/app/_components/sorrel-home-phone";

const menu = ["Home", "About Us", "Menu (PDF)", "Contact"];

export function SorrelBeforePhone() {
  return (
    <div className="concept-page concept-theme-paper bg-concept-canvas text-concept-ink font-display absolute top-0 left-0 flex flex-col">
      <div className="flex h-1/2 min-h-0 flex-col">
        <div className="border-concept-ink/10 flex shrink-0 items-baseline justify-between border-b px-4 py-2.5">
          <span className="text-concept-muted font-label text-[0.58em] tracking-[0.2em]">
            BEFORE
          </span>
          <span className="text-[0.72em]">A page from 2016, and a phone number</span>
        </div>

        <div className="border-concept-ink/15 bg-concept-chalk mx-4 mt-3 mb-3 flex min-h-0 flex-1 flex-col border">
          <div className="border-concept-ink/10 flex shrink-0 flex-col items-center gap-1.5 border-b py-2.5">
            <span className="font-concept-display text-[1.1em] leading-none">
              Sorrel Restaurant
            </span>
            <span className="text-concept-muted flex gap-2.5 text-[0.5em] underline underline-offset-2">
              {menu.map(item => (
                <span key={item}>{item}</span>
              ))}
            </span>
          </div>
          <div className="bg-concept-shell relative h-14 shrink-0 overflow-hidden">
            <Image
              src="/concept/cutlery.webp"
              alt=""
              fill
              sizes="320px"
              className="object-cover"
            />
          </div>
          <div className="flex min-h-0 flex-1 flex-col items-center gap-1 px-4 py-2 text-center">
            <span className="text-[0.7em] font-semibold">Welcome to our website!</span>
            <span className="text-concept-muted text-[0.58em] leading-snug">
              Call (718) 555-0142 to make a reservation.
            </span>
          </div>
        </div>
      </div>

      <div className="border-concept-ink/10 bg-concept-shell flex h-1/2 min-h-0 flex-col border-t">
        <div className="border-concept-ink/10 flex shrink-0 items-baseline justify-between border-b px-4 py-2.5">
          <span className="text-concept-clay font-label text-[0.58em] tracking-[0.2em]">
            AFTER
          </span>
          <span className="flex items-center gap-1.5 text-[0.72em]">
            Books, shows tonight, is found
            <RiArrowRightLine className="text-concept-clay size-[1em]" />
          </span>
        </div>

        <div className="relative min-h-0 flex-1 overflow-hidden px-8 pt-4">
          <div className="border-concept-scrim bg-concept-scrim shadow-elev-2 mx-auto w-full overflow-hidden rounded-t-[1.4em] border-[0.3em] border-b-0">
            <div className="concept-stage relative w-full overflow-hidden rounded-t-[1.1em] [--concept-base:16] [--concept-height:464] [--concept-width:360]">
              <SorrelHomePhone />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

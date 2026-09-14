import { RiArrowRightLine } from "@remixicon/react";
import Image from "next/image";

import { SorrelHomePhone } from "@/app/_components/sorrel-home-phone";

const menu = ["Home", "About Us", "Menu (PDF)", "Photos", "Contact"];

export function SorrelBefore() {
  return (
    <div className="concept-page concept-theme-paper bg-concept-canvas text-concept-ink font-display absolute top-0 left-0 grid grid-cols-2">
      <div className="border-concept-ink/10 flex min-h-0 flex-col border-r">
        <div className="border-concept-ink/10 flex shrink-0 items-baseline justify-between border-b px-9 py-6">
          <span className="text-concept-muted font-label text-[0.62em] tracking-[0.2em]">
            BEFORE
          </span>
          <span className="text-[0.85em]">A page from 2016, and a phone number.</span>
        </div>

        <div className="flex min-h-0 flex-1 flex-col px-9 py-7">
          <div className="border-concept-ink/15 bg-concept-chalk shadow-elev-1 flex min-h-0 flex-1 flex-col border">
            <div className="border-concept-ink/10 flex shrink-0 flex-col items-center gap-3 border-b py-5">
              <span className="font-concept-display text-[1.7em] leading-none">
                Sorrel Restaurant
              </span>
              <span className="text-concept-muted flex gap-4 text-[0.62em] underline underline-offset-2">
                {menu.map(item => (
                  <span key={item}>{item}</span>
                ))}
              </span>
            </div>

            <div className="bg-concept-shell relative h-[38%] shrink-0 overflow-hidden">
              <Image
                src="/concept/cutlery.webp"
                alt=""
                fill
                sizes="520px"
                className="object-cover"
              />
            </div>

            <div className="flex min-h-0 flex-1 flex-col items-center gap-3 px-8 py-5 text-center">
              <span className="text-[0.95em] font-semibold">Welcome to our website!</span>
              <span className="text-concept-muted max-w-[38ch] text-[0.74em] leading-relaxed">
                Sorrel is a family restaurant in the heart of Fort Greene. Please
                call (718) 555-0142 to make a reservation.
              </span>
              <span className="border-concept-ink/20 font-label mt-1 border px-4 py-1.5 text-[0.55em] tracking-[0.16em]">
                DOWNLOAD MENU · PDF, 4 MB
              </span>
              <span className="text-concept-muted mt-auto text-[0.58em]">
                Last updated March 2016 · Best viewed on a desktop computer
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex min-h-0 flex-col">
        <div className="border-concept-ink/10 flex shrink-0 items-baseline justify-between border-b px-9 py-6">
          <span className="text-concept-clay font-label text-[0.62em] tracking-[0.2em]">
            AFTER
          </span>
          <span className="flex items-center gap-2 text-[0.85em]">
            A site that books, shows tonight and is found
            <RiArrowRightLine className="text-concept-clay size-[1em]" />
          </span>
        </div>

        <div className="bg-concept-shell flex min-h-0 flex-1 items-center justify-center px-9 py-7">
          <div className="border-concept-scrim bg-concept-scrim shadow-elev-2 w-[80%] overflow-hidden rounded-[1.5em] border-[0.35em]">
            <div className="concept-stage relative w-full overflow-hidden rounded-[1.15em] [--concept-base:16] [--concept-height:464] [--concept-width:360]">
              <SorrelHomePhone />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

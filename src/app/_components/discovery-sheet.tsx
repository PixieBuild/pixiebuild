import { RiCheckLine } from "@remixicon/react";
import Image from "next/image";

const asked = [
  "How many products, and how often do they change?",
  "Who buys — on a phone, or at a desk?",
  "How do you want to take payment?",
  "Where do you ship, and what does it cost?",
];

const found = [
  "The three shops your buyers already use",
  "What they expect to see before they buy",
  "Where they give up and leave",
];

const gathered = [
  "/concept/workshop.webp",
  "/concept/table.webp",
  "/concept/product-cups.webp",
  "/concept/product-linen.webp",
];

export function DiscoverySheet() {
  return (
    <div className="concept-page concept-theme-paper bg-concept-canvas text-concept-ink font-display absolute top-0 left-0 flex flex-col">
      <div className="border-concept-ink/10 flex shrink-0 items-baseline justify-between gap-4 border-b px-8 py-5">
        <span className="font-concept-display text-[1.7em] leading-none">
          Norvia — online shop
        </span>
        <span className="text-concept-muted font-label shrink-0 text-[0.62em] tracking-[0.18em]">
          BEFORE ANYTHING IS DESIGNED
        </span>
      </div>

      <div className="grid min-h-0 flex-1 grid-cols-3">
        <div className="border-concept-ink/10 flex min-h-0 flex-col gap-4 border-r p-7">
          <span className="text-concept-clay font-label text-[0.62em] tracking-[0.2em]">
            WHAT WE ASK
          </span>
          {asked.map(item => (
            <span key={item} className="flex gap-3 text-[0.9em] leading-snug">
              <span className="bg-concept-ink/25 mt-[0.6em] size-[0.3em] shrink-0 rounded-full" />
              {item}
            </span>
          ))}
        </div>

        <div className="border-concept-ink/10 flex min-h-0 flex-col gap-4 border-r p-7">
          <span className="text-concept-clay font-label text-[0.62em] tracking-[0.2em]">
            WHAT WE RESEARCH
          </span>
          {found.map(item => (
            <span key={item} className="flex gap-3 text-[0.9em] leading-snug">
              <span className="bg-concept-ink/25 mt-[0.6em] size-[0.3em] shrink-0 rounded-full" />
              {item}
            </span>
          ))}
        </div>

        <div className="flex min-h-0 flex-col gap-4 p-7">
          <span className="text-concept-clay font-label text-[0.62em] tracking-[0.2em]">
            WHAT WE GATHER
          </span>

          <div className="grid grid-cols-2 gap-2">
            {gathered.map(shot => (
              <div
                key={shot}
                className="bg-concept-shell relative aspect-square overflow-hidden"
              >
                <Image
                  src={shot}
                  alt=""
                  fill
                  sizes="120px"
                  className="object-cover object-center"
                />
              </div>
            ))}
          </div>

          <div className="mt-auto flex flex-col gap-2.5">
            {["96 product photos", "Brand photography", "Price and stock list"].map(
              item => (
                <span
                  key={item}
                  className="flex items-center gap-2.5 text-[0.85em]"
                >
                  <span className="bg-concept-clay text-concept-canvas flex size-[1.2em] shrink-0 items-center justify-center rounded-full">
                    <RiCheckLine className="size-[0.85em]" />
                  </span>
                  {item}
                </span>
              ),
            )}
          </div>
        </div>
      </div>

      <div className="bg-concept-scrim text-concept-chalk flex shrink-0 flex-wrap items-center justify-between gap-x-6 gap-y-1 px-8 py-3.5">
        <span className="font-label text-[0.62em] tracking-[0.2em]">
          AGREED · 4 MARCH
        </span>
        <span className="text-[0.85em]">
          24 products · Stripe · live by 14 March
        </span>
      </div>
    </div>
  );
}

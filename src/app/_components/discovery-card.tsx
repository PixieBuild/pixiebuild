import Image from "next/image";

const asked = [
  "How many products, and how often do they change?",
  "Who buys — on a phone, or at a desk?",
  "How do you want to take payment?",
];

const gathered = [
  "/concept/workshop.webp",
  "/concept/table.webp",
  "/concept/product-cups.webp",
  "/concept/product-linen.webp",
];

export function DiscoveryCard() {
  return (
    <div className="concept-page concept-theme-paper bg-concept-canvas text-concept-ink font-display absolute top-0 left-0 flex flex-col">
      <div className="border-concept-ink/10 flex shrink-0 flex-col gap-1.5 border-b px-5 py-4">
        <span className="text-concept-muted font-label text-[0.6em] tracking-[0.2em]">
          PROJECT BRIEF · 4 MARCH
        </span>
        <span className="font-concept-display text-[1.45em] leading-none">
          Norvia — online shop
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 px-5 py-4">
        <span className="text-concept-clay font-label text-[0.6em] tracking-[0.2em]">
          WHAT WE ASK
        </span>
        {asked.map(item => (
          <span key={item} className="flex gap-2.5 text-[0.85em] leading-snug">
            <span className="bg-concept-ink/25 mt-[0.55em] size-[0.28em] shrink-0 rounded-full" />
            {item}
          </span>
        ))}
      </div>

      <div className="border-concept-ink/10 flex shrink-0 flex-col gap-2 border-t px-5 py-3">
        <span className="text-concept-clay font-label text-[0.6em] tracking-[0.2em]">
          WHAT WE GATHER
        </span>
        <div className="flex gap-2">
          {gathered.map(shot => (
            <div
              key={shot}
              className="bg-concept-shell relative aspect-square flex-1 overflow-hidden"
            >
              <Image
                src={shot}
                alt=""
                fill
                sizes="90px"
                className="object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-concept-scrim text-concept-chalk flex shrink-0 items-center justify-between gap-3 px-5 py-2.5">
        <span className="font-label shrink-0 text-[0.6em] tracking-[0.2em]">
          AGREED
        </span>
        <span className="truncate text-[0.8em]">24 products · Stripe</span>
      </div>
    </div>
  );
}

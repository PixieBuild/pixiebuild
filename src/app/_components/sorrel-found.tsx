import {
  RiMapPin2Line,
  RiSearchLine,
  RiSparkling2Fill,
  RiStarFill,
} from "@remixicon/react";
import Image from "next/image";

const others = [
  {
    site: "yelp.com › fort-greene › restaurants",
    title: "The 10 best restaurants in Fort Greene, Brooklyn",
    text: "Reviews and ratings for restaurants and wine bars in and around Fort Greene.",
  },
  {
    site: "timeout.com › newyork › fort-greene",
    title: "Where to eat in Fort Greene right now",
    text: "Our critics' picks for dinner, from neighbourhood standbys to new openings.",
  },
  {
    site: "instagram.com › sorrel.bk",
    title: "Sorrel (@sorrel.bk) · Instagram",
    text: "Kitchen and wine bar on DeKalb Ave. Menu changes every Tuesday.",
  },
];

export function SorrelFound() {
  return (
    <div className="concept-page concept-theme-cool bg-concept-canvas text-concept-ink font-display absolute top-0 left-0 flex flex-col">
      <div className="border-concept-ink/10 flex shrink-0 items-center gap-5 border-b px-9 py-5">
        <span className="font-label text-[1.1em] font-semibold tracking-[0.02em]">
          Search
        </span>
        <span className="border-concept-ink/15 bg-concept-chalk flex flex-1 items-center gap-3 rounded-full border px-5 py-2.5 text-[0.85em]">
          <RiSearchLine className="text-concept-muted size-[1.1em]" />
          dinner near fort greene tonight
        </span>
      </div>

      <div className="grid min-h-0 flex-1 grid-cols-[7fr_5fr]">
        <div className="flex min-h-0 flex-col gap-7 px-9 py-7">
          <div className="border-concept-clay/40 bg-concept-chalk flex flex-col gap-2 border-l-2 py-1 pl-5">
            <span className="flex items-center gap-2 text-[0.7em]">
              <span className="bg-concept-clay text-concept-canvas font-label flex size-[1.6em] items-center justify-center rounded-full text-[0.7em]">
                S
              </span>
              <span>sorrel.com › book</span>
            </span>
            <span className="text-[1.15em] font-medium">
              Sorrel — Kitchen &amp; wine bar in Fort Greene, Brooklyn
            </span>
            <span className="text-concept-muted text-[0.82em] leading-relaxed">
              Dinner from five, Tuesday to Sunday. The menu changes every
              Tuesday. Tables tonight at 7:45 and 9:15, booked on the site.
            </span>
            <span className="mt-1 flex items-center gap-2 text-[0.72em]">
              <span className="text-concept-clay flex items-center gap-0.5">
                {[0, 1, 2, 3, 4].map(star => (
                  <RiStarFill key={star} className="size-[1em]" />
                ))}
              </span>
              <span className="text-concept-muted">4.8 · 212 reviews</span>
              <span className="text-concept-muted">·</span>
              <span className="text-concept-muted flex items-center gap-1">
                <RiMapPin2Line className="size-[1em]" />
                DeKalb Ave, Fort Greene
              </span>
            </span>
            <span className="mt-1 flex gap-5 text-[0.72em]">
              {["Book", "Menu", "Events", "Find us"].map(link => (
                <span key={link} className="text-concept-clay underline-offset-2">
                  {link}
                </span>
              ))}
            </span>
          </div>

          {others.map(result => (
            <div key={result.site} className="flex flex-col gap-1.5 pl-5">
              <span className="text-concept-muted text-[0.7em]">{result.site}</span>
              <span className="text-[1em]">{result.title}</span>
              <span className="text-concept-muted text-[0.8em] leading-relaxed">
                {result.text}
              </span>
            </div>
          ))}
        </div>

        <div className="border-concept-ink/10 bg-concept-shell flex min-h-0 flex-col gap-5 border-l px-8 py-7">
          <span className="text-concept-muted font-label flex items-center gap-2 text-[0.66em] tracking-[0.2em]">
            <RiSparkling2Fill className="text-concept-clay size-[1.3em]" />
            AN ASSISTANT ANSWERS
          </span>

          <p className="text-[0.9em] leading-relaxed">
            Sorrel on DeKalb Ave has tables tonight at{" "}
            <span className="font-medium">7:45 and 9:15</span>. The menu
            changes weekly; tonight there is a roast chicken for two. You can
            book directly on their site.
          </p>

          <div className="bg-concept-canvas border-concept-ink/10 flex items-center gap-4 border p-3">
            <span className="bg-concept-shell relative size-14 shrink-0 overflow-hidden">
              <Image
                src="/concept/hotel-kitchen.webp"
                alt=""
                fill
                sizes="80px"
                className="object-cover"
              />
            </span>
            <span className="flex min-w-0 flex-col gap-0.5">
              <span className="truncate text-[0.85em] font-medium">
                Book a table — Sorrel
              </span>
              <span className="text-concept-muted text-[0.72em]">sorrel.com/book</span>
            </span>
          </div>

          <div className="border-concept-ink/10 mt-2 flex flex-col gap-3 border-t pt-5">
            <span className="text-concept-muted font-label flex items-center gap-2 text-[0.66em] tracking-[0.2em]">
              <RiMapPin2Line className="text-concept-clay size-[1.3em]" />
              ON MAPS
            </span>
            <div className="bg-concept-canvas border-concept-ink/10 flex flex-col gap-2 border p-4 text-[0.8em]">
              <span className="flex items-baseline justify-between">
                <span className="font-medium">Sorrel</span>
                <span className="text-concept-clay flex items-center gap-1">
                  <RiStarFill className="size-[1em]" />
                  4.8
                  <span className="text-concept-muted">(212)</span>
                </span>
              </span>
              <span className="text-concept-muted">
                Restaurant · 184 DeKalb Ave, Fort Greene
              </span>
              <span className="text-concept-muted">
                Open Tue to Sun, 5 to 11 · Walk-ins until 9
              </span>
            </div>
          </div>

          <span className="text-concept-muted mt-auto text-[0.7em]">
            Sources: sorrel.com, Google Maps, 212 reviews
          </span>
        </div>
      </div>
    </div>
  );
}

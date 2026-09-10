import {
  RiMapPin2Line,
  RiSearchLine,
  RiSparkling2Fill,
  RiStarFill,
} from "@remixicon/react";
import Image from "next/image";

const others = [
  {
    site: "yelp.com › hudson › pottery-classes",
    title: "The 10 best pottery classes in Hudson, NY",
    text: "Reviews and ratings for pottery studios and classes in and around Hudson.",
  },
  {
    site: "eventbrite.com › hudson › ceramics",
    title: "Ceramics workshops in Hudson this month",
    text: "Browse upcoming ceramics and pottery events near you.",
  },
  {
    site: "instagram.com › norvia.studio",
    title: "Norvia (@norvia.studio) · Instagram",
    text: "Speckled stoneware, thrown by hand in Hudson. New drop the first Saturday of the month.",
  },
];

export function NorviaFound() {
  return (
    <div className="concept-page concept-theme-cool bg-concept-canvas text-concept-ink font-display absolute top-0 left-0 flex flex-col">
      <div className="border-concept-ink/10 flex shrink-0 items-center gap-5 border-b px-9 py-5">
        <span className="font-label text-[1.1em] font-semibold tracking-[0.02em]">
          Search
        </span>
        <span className="border-concept-ink/15 bg-concept-chalk flex flex-1 items-center gap-3 rounded-full border px-5 py-2.5 text-[0.85em]">
          <RiSearchLine className="text-concept-muted size-[1.1em]" />
          ceramics classes near hudson ny
        </span>
      </div>

      <div className="grid min-h-0 flex-1 grid-cols-[7fr_5fr]">
        <div className="flex min-h-0 flex-col gap-7 px-9 py-7">
          <div className="border-concept-clay/40 bg-concept-chalk flex flex-col gap-2 border-l-2 py-1 pl-5">
            <span className="flex items-center gap-2 text-[0.7em]">
              <span className="bg-concept-clay text-concept-canvas font-label flex size-[1.6em] items-center justify-center rounded-full text-[0.7em]">
                N
              </span>
              <span>norvia.com › classes</span>
            </span>
            <span className="text-[1.15em] font-medium">
              Beginners&apos; wheel classes in Hudson, NY — Norvia
            </span>
            <span className="text-concept-muted text-[0.82em] leading-relaxed">
              Saturday classes at the wheel in a two-person studio. Eight seats,
              all tools and clay included. Next class 3 Oct, two seats left.
            </span>
            <span className="mt-1 flex items-center gap-2 text-[0.72em]">
              <span className="text-concept-clay flex items-center gap-0.5">
                {[0, 1, 2, 3, 4].map(star => (
                  <RiStarFill key={star} className="size-[1em]" />
                ))}
              </span>
              <span className="text-concept-muted">4.9 · 38 reviews</span>
              <span className="text-concept-muted">·</span>
              <span className="text-concept-muted flex items-center gap-1">
                <RiMapPin2Line className="size-[1em]" />
                Warren St, Hudson
              </span>
            </span>
            <span className="mt-1 flex gap-5 text-[0.72em]">
              {["Classes", "Shop", "Commissions", "Visit"].map(link => (
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
            Norvia runs beginners&apos; wheel classes on Saturday mornings in
            Hudson. The next one with seats is{" "}
            <span className="font-medium">3 October</span>, $85 a seat, and
            you can book directly on their site.
          </p>

          <div className="bg-concept-canvas border-concept-ink/10 flex items-center gap-4 border p-3">
            <span className="bg-concept-shell relative size-14 shrink-0 overflow-hidden">
              <Image
                src="/concept/norvia-wheel.webp"
                alt=""
                fill
                sizes="80px"
                className="object-cover"
              />
            </span>
            <span className="flex min-w-0 flex-col gap-0.5">
              <span className="truncate text-[0.85em] font-medium">
                Book a seat — Norvia
              </span>
              <span className="text-concept-muted text-[0.72em]">
                norvia.com/classes
              </span>
            </span>
          </div>

          <div className="border-concept-ink/10 mt-2 flex flex-col gap-3 border-t pt-5">
            <span className="text-concept-muted font-label flex items-center gap-2 text-[0.66em] tracking-[0.2em]">
              <RiMapPin2Line className="text-concept-clay size-[1.3em]" />
              ON MAPS
            </span>
            <div className="bg-concept-canvas border-concept-ink/10 flex flex-col gap-2 border p-4 text-[0.8em]">
              <span className="flex items-baseline justify-between">
                <span className="font-medium">Norvia</span>
                <span className="text-concept-clay flex items-center gap-1">
                  <RiStarFill className="size-[1em]" />
                  4.9
                  <span className="text-concept-muted">(38)</span>
                </span>
              </span>
              <span className="text-concept-muted">Ceramics studio · Warren St, Hudson</span>
              <span className="text-concept-muted">
                Open Thu to Sat · Market Saturdays 9 to 1
              </span>
            </div>
          </div>

          <span className="text-concept-muted mt-auto text-[0.7em]">
            Sources: norvia.com, Google Maps, 38 reviews
          </span>
        </div>
      </div>
    </div>
  );
}

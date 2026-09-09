import { RiCheckLine } from "@remixicon/react";
import Image from "next/image";

const cue = (beat: number, span = 0.3) =>
  ({ "--beat": beat, "--span": span }) as React.CSSProperties;

const map = [
  {
    today: "The Saturday market, most of the month's income",
    must: "Sell the drop, and say what has sold out",
  },
  {
    today: "The workshop door, Thursday to Saturday",
    must: "Tell the story, so a first-time buyer trusts it",
  },
  {
    today: "Eight seats a class, filled from a paper list",
    must: "Fill the classes without the paper list",
  },
  {
    today: "Commissions by phone and Instagram messages",
    must: "Take commissions, with the right questions asked",
  },
];

const gathered = [
  "96 product photos, shot in the studio",
  "Prices and stock for this month's drop",
  "Class dates and seat counts for the season",
];

const pages = [
  { name: "Home", does: "The story, and this month's drop" },
  { name: "Shop", does: "Every piece, with stock shown" },
  { name: "Classes", does: "Dates, seats left, and booking" },
  { name: "Commissions", does: "An enquiry that asks the right questions" },
  { name: "Visit", does: "Market days and studio hours" },
];

export function BriefSheet() {
  return (
    <div className="concept-page concept-theme-paper bg-concept-canvas text-concept-ink font-display absolute top-0 left-0 flex flex-col">
      <div className="border-concept-ink/10 flex shrink-0 items-end justify-between gap-6 border-b px-9 py-7">
        <div className="flex flex-col gap-3">
          <span className="text-concept-muted font-label text-[0.62em] tracking-[0.2em]">
            PROJECT BRIEF · HUDSON, NEW YORK
          </span>
          <span className="font-concept-display text-[2em] leading-none">
            Norvia — a two-person ceramics studio
          </span>
        </div>
        <span className="text-concept-muted font-label shrink-0 text-[0.62em] tracking-[0.18em]">
          BEFORE ANYTHING IS DESIGNED
        </span>
      </div>

      <div className="grid min-h-0 flex-1 grid-cols-12">
        <div className="border-concept-ink/10 col-span-5 flex min-h-0 flex-col gap-6 border-r p-9">
          <span className="text-concept-clay font-label text-[0.62em] tracking-[0.2em]">
            HOW IT WORKS TODAY
          </span>
          <div className="bg-concept-shell relative aspect-video w-full overflow-hidden">
            <Image
              src="/concept/norvia-stall.webp"
              alt=""
              fill
              sizes="480px"
              className="object-cover"
            />
          </div>
          <div className="flex gap-5">
            <div className="bg-concept-shell relative aspect-square w-[38%] shrink-0 overflow-hidden">
              <Image
                src="/concept/norvia-list.webp"
                alt=""
                fill
                sizes="200px"
                className="object-cover"
              />
            </div>
            <p className="text-concept-muted text-[0.95em] leading-relaxed text-pretty">
              Every sale happens in person. Online there is a grid of photos,
              nothing to buy or book, and questions pile up in the inbox.
            </p>
          </div>

          <div className="mt-auto flex flex-col gap-3.5">
            <span className="text-concept-clay font-label text-[0.62em] tracking-[0.2em]">
              WHAT WE GATHERED
            </span>
            {gathered.map((item, index) => (
              <span
                key={item}
                style={cue(0.56 + index * 0.06, 0.2)}
                className="stage-cue build-part flex items-center gap-3 text-[0.95em]"
              >
                <span className="bg-concept-clay text-concept-canvas flex size-[1.25em] shrink-0 items-center justify-center rounded-full">
                  <RiCheckLine className="size-[0.85em]" />
                </span>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="col-span-7 flex min-h-0 flex-col justify-between gap-8 p-9">
          <div className="flex flex-col gap-7">
            <div className="grid grid-cols-[1fr_5em_1fr] gap-x-5">
              <span className="text-concept-clay font-label text-[0.62em] tracking-[0.2em]">
                WHAT NORVIA SELLS
              </span>
              <span />
              <span className="text-concept-clay font-label text-[0.62em] tracking-[0.2em]">
                WHAT THE SITE HAS TO DO
              </span>
            </div>

            {map.map((row, index) => (
              <div
                key={row.today}
                className="grid grid-cols-[1fr_5em_1fr] items-center gap-x-5"
              >
                <span className="text-[1em] leading-snug">{row.today}</span>
                <svg
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                  aria-hidden
                  className="h-3 w-full"
                >
                  <path
                    d="M0 6 H100"
                    pathLength={1}
                    vectorEffect="non-scaling-stroke"
                    strokeWidth={1.5}
                    style={cue(0.02 + index * 0.1)}
                    className="stage-cue stroke-concept-clay fill-none [stroke-dasharray:1] [stroke-dashoffset:calc(1-var(--step))]"
                  />
                </svg>
                <span
                  style={cue(0.14 + index * 0.1, 0.2)}
                  className="stage-cue build-part text-[1em] leading-snug font-medium"
                >
                  {row.must}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3.5">
            <span className="text-concept-clay font-label text-[0.62em] tracking-[0.2em]">
              WHAT WE WILL BUILD
            </span>
            <div className="divide-concept-ink/10 flex flex-col divide-y">
              {pages.map((page, index) => (
                <span
                  key={page.name}
                  style={cue(0.5 + index * 0.05, 0.2)}
                  className="stage-cue build-part flex items-baseline gap-4 py-2.5 text-[0.92em]"
                >
                  <span className="w-[8em] shrink-0 font-medium">{page.name}</span>
                  <span className="text-concept-muted">{page.does}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-concept-scrim text-concept-chalk flex shrink-0 items-center justify-between gap-6 px-9 py-4">
        <span className="font-label text-[0.62em] tracking-[0.2em]">
          AGREED · 12 SEPTEMBER
        </span>
        <span className="text-[0.92em]">
          24 pieces a drop · 8 seats a class · live by 24 October
        </span>
      </div>
    </div>
  );
}

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

export function BriefSheet() {
  return (
    <div className="concept-page concept-theme-paper bg-concept-canvas text-concept-ink font-display absolute top-0 left-0 flex flex-col">
      <div className="border-concept-ink/10 flex shrink-0 items-end justify-between gap-6 border-b px-8 py-5">
        <div className="flex flex-col gap-2">
          <span className="text-concept-muted font-label text-[0.6em] tracking-[0.2em]">
            PROJECT BRIEF · HUDSON, NEW YORK
          </span>
          <span className="font-concept-display text-[1.7em] leading-none">
            Norvia — a two-person ceramics studio
          </span>
        </div>
        <span className="text-concept-muted font-label shrink-0 text-[0.62em] tracking-[0.18em]">
          BEFORE ANYTHING IS DESIGNED
        </span>
      </div>

      <div className="grid min-h-0 flex-1 grid-cols-12">
        <div className="border-concept-ink/10 col-span-5 flex min-h-0 flex-col gap-4 border-r p-7">
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
          <div className="flex gap-4">
            <div className="bg-concept-shell relative aspect-square w-[34%] shrink-0 overflow-hidden">
              <Image
                src="/concept/norvia-list.webp"
                alt=""
                fill
                sizes="160px"
                className="object-cover"
              />
            </div>
            <p className="text-concept-muted text-[0.85em] leading-relaxed text-pretty">
              Every sale happens in person. Online there is a grid of photos,
              nothing to buy or book, and questions pile up in the inbox.
            </p>
          </div>
        </div>

        <div className="col-span-7 flex min-h-0 flex-col p-7">
          <div className="grid grid-cols-[1fr_6em_1fr] gap-x-3">
            <span className="text-concept-clay font-label text-[0.62em] tracking-[0.2em]">
              WHAT NORVIA SELLS
            </span>
            <span />
            <span className="text-concept-clay font-label text-[0.62em] tracking-[0.2em]">
              WHAT THE SITE HAS TO DO
            </span>
          </div>

          <div className="flex flex-1 flex-col justify-around">
            {map.map((row, index) => (
              <div
                key={row.today}
                className="grid grid-cols-[1fr_6em_1fr] items-center gap-x-3"
              >
                <span className="text-[0.88em] leading-snug">{row.today}</span>
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
                    style={cue(0.08 + index * 0.14)}
                    className="stage-cue stroke-concept-clay fill-none [stroke-dasharray:1] [stroke-dashoffset:calc(1-var(--step))]"
                  />
                </svg>
                <span
                  style={cue(0.3 + index * 0.14, 0.2)}
                  className="stage-cue build-part text-[0.88em] leading-snug font-medium"
                >
                  {row.must}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-concept-scrim text-concept-chalk flex shrink-0 items-center justify-between gap-6 px-8 py-3.5">
        <span className="font-label text-[0.62em] tracking-[0.2em]">
          AGREED · 12 SEPTEMBER
        </span>
        <span className="text-[0.85em]">
          24 pieces a drop · 8 seats a class · live by 24 October
        </span>
      </div>
    </div>
  );
}

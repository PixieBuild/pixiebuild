import Image from "next/image";

const cue = (beat: number, span = 0.3) =>
  ({ "--beat": beat, "--span": span }) as React.CSSProperties;

const map = [
  { today: "The Saturday market", must: "Sell the drop, say what's gone" },
  { today: "The workshop door", must: "Tell the story, earn the trust" },
  { today: "Classes from a paper list", must: "Fill the classes online" },
  { today: "Commissions by message", must: "Take commissions properly" },
];

export function BriefCard() {
  return (
    <div className="concept-page concept-theme-paper bg-concept-canvas text-concept-ink font-display absolute top-0 left-0 flex flex-col">
      <div className="border-concept-ink/10 flex shrink-0 flex-col gap-2 border-b px-5 py-4">
        <span className="text-concept-muted font-label text-[0.58em] tracking-[0.2em]">
          PROJECT BRIEF · HUDSON, NY
        </span>
        <span className="font-concept-display text-[1.45em] leading-none">
          Norvia — a two-person ceramics studio
        </span>
      </div>

      <div className="flex shrink-0 gap-2 px-5 pt-4">
        <div className="bg-concept-shell relative h-28 flex-1 overflow-hidden">
          <Image
            src="/concept/norvia-stall.webp"
            alt=""
            fill
            sizes="240px"
            className="object-cover"
          />
        </div>
        <div className="bg-concept-shell relative size-28 shrink-0 overflow-hidden">
          <Image
            src="/concept/norvia-list.webp"
            alt=""
            fill
            sizes="120px"
            className="object-cover"
          />
        </div>
      </div>

      <p className="text-concept-muted shrink-0 px-5 pt-3 text-[0.76em] leading-snug text-pretty">
        Every sale happens in person. Online there is a grid of photos, nothing
        to buy or book, and questions pile up in the inbox.
      </p>

      <div className="flex min-h-0 flex-1 flex-col px-5 pt-4 pb-3">
        <div className="grid grid-cols-[1fr_2.5em_1fr] gap-x-2">
          <span className="text-concept-clay font-label text-[0.55em] tracking-[0.2em]">
            SELLS TODAY
          </span>
          <span />
          <span className="text-concept-clay font-label text-[0.55em] tracking-[0.2em]">
            THE SITE MUST
          </span>
        </div>

        <div className="flex flex-1 flex-col justify-around">
          {map.map((row, index) => (
            <div
              key={row.today}
              className="grid grid-cols-[1fr_2.5em_1fr] items-center gap-x-2"
            >
              <span className="text-[0.78em] leading-snug">{row.today}</span>
              <svg
                viewBox="0 0 100 12"
                preserveAspectRatio="none"
                aria-hidden
                className="h-2.5 w-full"
              >
                <path
                  d="M0 6 H100"
                  pathLength={1}
                  vectorEffect="non-scaling-stroke"
                  strokeWidth={1.5}
                  style={cue(0.06 + index * 0.14)}
                  className="stage-cue stroke-concept-clay fill-none [stroke-dasharray:1] [stroke-dashoffset:calc(1-var(--step))]"
                />
              </svg>
              <span
                style={cue(0.28 + index * 0.14, 0.2)}
                className="stage-cue build-part text-[0.78em] leading-snug font-medium"
              >
                {row.must}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-concept-scrim text-concept-chalk flex shrink-0 items-center justify-between gap-3 px-5 py-3">
        <span className="font-label shrink-0 text-[0.58em] tracking-[0.2em]">
          AGREED · 12 SEPT
        </span>
        <span className="truncate text-[0.78em]">
          24 pieces a drop · 8 seats a class
        </span>
      </div>
    </div>
  );
}

import { cn } from "@/lib/utils";

const beat = {
  mark: 0,
  nav: 0.02,
  navStep: 0.015,
  tile: 0.14,
  tileStep: 0.06,
  panel: 0.4,
  bar: 0.46,
  barStep: 0.03,
};

const part = (at: number) => ({ "--beat": at }) as React.CSSProperties;

const nav = ["w-37", "w-33", "w-28", "w-24"];

const tiles = [
  { label: "MRR", value: "$48.2k", filled: false },
  { label: "CHURN", value: "1.4%", filled: false },
  { label: "ACTIVE", value: "2,310", filled: true },
];

const months = [0.3, 0.5, 0.38, 0.66, 0.55, 0.86, 0.7, 0.94];

export function ConceptCadence() {
  return (
    <div className="relative w-full">
      <div
        aria-hidden
        className="concept-stage shadow-elev-2 relative w-full overflow-hidden border select-none [--concept-height:760] [--concept-width:1200] lg:w-[min(100cqw,calc(100cqh*1.5789),61.25rem)]"
      >
        <div className="concept-page concept-theme-cool bg-concept-canvas text-concept-ink font-display absolute top-0 left-0 flex">
          <span
            aria-hidden
            className="bg-concept-clay absolute inset-x-0 bottom-0 z-10 h-[0.9%]"
          />
          <div className="border-concept-line bg-concept-ink/3 w-62 shrink-0 border-r px-10 pt-14">
            <span
              aria-hidden
              style={part(beat.mark)}
              className="bg-concept-ink build-part block h-2.5 w-30"
            />

            <div className="mt-14 flex flex-col gap-6">
              {nav.map((width, index) => (
                <span
                  key={width}
                  aria-hidden
                  style={part(beat.nav + index * beat.navStep)}
                  className={cn("bg-concept-ink/13 build-part block h-2", width)}
                />
              ))}
            </div>
          </div>

          <div className="min-w-0 flex-1 px-12 pt-15">
            <div className="flex gap-7">
              {tiles.map((tile, index) => (
                <div
                  key={tile.label}
                  style={part(beat.tile + index * beat.tileStep)}
                  className={cn(
                    "build-part h-37 flex-1 px-6 pt-8",
                    tile.filled
                      ? "bg-concept-ink text-concept-canvas"
                      : "border-concept-ink/12 border-2",
                  )}
                >
                  <p
                    className={cn(
                      "font-label text-[1.125em] tracking-[0.16em]",
                      tile.filled ? "opacity-60" : "opacity-50",
                    )}
                  >
                    {tile.label}
                  </p>
                  <p className="mt-4 text-[3.25em] leading-none font-semibold tracking-[-0.03em] tabular-nums">
                    {tile.value}
                  </p>
                </div>
              ))}
            </div>

            <div
              style={part(beat.panel)}
              className="border-concept-ink/12 build-part mt-10 h-110 border-2 px-10 pt-10"
            >
              <div className="flex h-full items-end gap-5.5">
                {months.map((share, index) => (
                  <span
                    key={share}
                    aria-hidden
                    style={{
                      ...part(beat.bar + index * beat.barStep),
                      height: `${share * 100}%`,
                    }}
                    className={cn(
                      "build-part min-w-0 flex-1",
                      index === 5 ? "bg-concept-clay" : "bg-concept-ink/12",
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { RiMenuLine } from "@remixicon/react";

import { cn } from "@/lib/utils";

const beat = {
  mark: 0,
  menu: 0.02,
  tile: 0.14,
  tileStep: 0.06,
  panel: 0.4,
  bar: 0.46,
  barStep: 0.03,
};

const part = (at: number) => ({ "--beat": at }) as React.CSSProperties;

const tiles = [
  { label: "MRR", value: "$48.2k", filled: true },
  { label: "CHURN", value: "1.4%", filled: false },
];

const months = [0.32, 0.5, 0.42, 0.68, 0.58, 0.84, 1];

export function ConceptCadencePhone() {
  return (
    <div className="relative w-full">
      <div
        aria-hidden
        className="concept-stage shadow-elev-2 relative w-full overflow-hidden border select-none [--concept-height:500] [--concept-width:380]"
      >
        <div className="concept-page concept-theme-cool bg-concept-canvas text-concept-ink font-display absolute top-0 left-0">
          <span
            aria-hidden
            className="bg-concept-clay absolute inset-x-0 bottom-0 z-10 h-[1.4%]"
          />

          <div className="border-concept-line flex h-14 items-center justify-between border-b px-6">
            <span
              aria-hidden
              style={part(beat.mark)}
              className="bg-concept-ink build-part block h-2 w-20"
            />
            <RiMenuLine
              style={part(beat.menu)}
              className="text-concept-ink build-part size-4"
            />
          </div>

          <div className="px-6 pt-8">
            <div className="flex gap-4">
              {tiles.map((tile, index) => (
                <div
                  key={tile.label}
                  style={part(beat.tile + index * beat.tileStep)}
                  className={cn(
                    "build-part h-24 flex-1 px-4 pt-4",
                    tile.filled
                      ? "bg-concept-ink text-concept-canvas"
                      : "border-concept-ink/12 border-2",
                  )}
                >
                  <p
                    className={cn(
                      "font-label text-[0.6875em] tracking-[0.16em]",
                      tile.filled ? "opacity-60" : "opacity-50",
                    )}
                  >
                    {tile.label}
                  </p>
                  <p className="mt-2.5 text-[1.75em] leading-none font-semibold tracking-[-0.03em] tabular-nums">
                    {tile.value}
                  </p>
                </div>
              ))}
            </div>

            <div
              style={part(beat.panel)}
              className="border-concept-ink/12 build-part mt-4 h-56 border-2 px-5 pt-5"
            >
              <div className="flex h-full items-end gap-3">
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
                      index === months.length - 1
                        ? "bg-concept-clay"
                        : "bg-concept-ink/12",
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

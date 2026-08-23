import { RiArrowUpLine } from "@remixicon/react";

import { cn } from "@/lib/utils";

const beat = {
  title: 0,
  chip: 0.03,
  tile: 0.14,
  tileStep: 0.06,
  panel: 0.34,
  bar: 0.4,
  barStep: 0.025,
  plan: 0.56,
  planStep: 0.04,
};

const part = (at: number) => ({ "--beat": at }) as React.CSSProperties;

const tiles = [
  { label: "MRR", value: "$48.2k", delta: "12.4%" },
  { label: "ACTIVE", value: "2,310", delta: "184" },
];

const months = [0.36, 0.44, 0.4, 0.55, 0.62, 0.7, 0.78, 0.94];

const plans = [
  { name: "Studio", share: 42 },
  { name: "Team", share: 31 },
];

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

          <div className="border-concept-line flex h-14 items-center justify-between border-b px-5">
            <span
              style={part(beat.title)}
              className="build-part flex items-center gap-2 text-[1.125em] font-medium tracking-[-0.02em]"
            >
              Overview
              <span
                aria-hidden
                className="bg-concept-clay animate-build-pulse build-idle size-1.5 rounded-full"
              />
            </span>
            <span
              style={part(beat.chip)}
              className="border-concept-line text-concept-muted font-label build-part flex h-7 items-center border px-2.5 text-[0.625em] tracking-[0.16em]"
            >
              12M
            </span>
          </div>

          <div className="px-5 pt-5">
            <div className="flex gap-3">
              {tiles.map((tile, index) => (
                <div
                  key={tile.label}
                  style={part(beat.tile + index * beat.tileStep)}
                  className="border-concept-line build-part h-22 min-w-0 flex-1 border px-4 pt-3.5"
                >
                  <p className="text-concept-muted font-label text-[0.625em] tracking-[0.16em]">
                    {tile.label}
                  </p>
                  <p className="mt-2 text-[1.5em] leading-none font-semibold tracking-[-0.03em] tabular-nums">
                    {tile.value}
                  </p>
                  <span className="text-concept-clay font-label build-act mt-2 flex items-center gap-0.5 text-[0.625em] tracking-[0.12em] tabular-nums">
                    <RiArrowUpLine className="size-2.5" />
                    {tile.delta}
                  </span>
                </div>
              ))}
            </div>

            <div
              style={part(beat.panel)}
              className="border-concept-line build-part mt-4 h-48 border px-5 pt-4"
            >
              <div className="flex items-baseline justify-between">
                <span className="text-[0.9375em] font-medium tracking-[-0.02em]">
                  Recurring revenue
                </span>
                <span className="text-concept-muted font-label text-[0.625em] tracking-[0.16em]">
                  $52k
                </span>
              </div>

              <div className="relative mt-4 h-28">
                <span
                  aria-hidden
                  className="border-concept-clay/40 absolute inset-x-0 bottom-[76%] border-t border-dashed"
                />
                <div className="flex h-full items-end gap-2">
                  {months.map((share, index) => (
                    <span
                      key={share}
                      aria-hidden
                      style={{
                        ...part(beat.bar + index * beat.barStep),
                        height: `${share * 100}%`,
                      }}
                      className={cn(
                        "build-part min-w-0 flex-1 origin-bottom",
                        index === months.length - 1
                          ? "bg-concept-clay animate-build-tick build-idle"
                          : "bg-concept-ink/14",
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-4">
              {plans.map((plan, index) => (
                <div
                  key={plan.name}
                  style={part(beat.plan + index * beat.planStep)}
                  className="build-part"
                >
                  <div className="flex items-baseline justify-between text-[0.75em]">
                    <span className="font-medium">{plan.name}</span>
                    <span className="text-concept-muted tabular-nums">
                      {plan.share}%
                    </span>
                  </div>
                  <span
                    aria-hidden
                    className="bg-concept-ink/8 mt-2 block h-1 w-full"
                  >
                    <span
                      aria-hidden
                      style={{ width: `${plan.share}%` }}
                      className={cn(
                        "block h-full",
                        index === 0 ? "bg-concept-clay" : "bg-concept-ink/30",
                      )}
                    />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

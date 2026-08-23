import {
  RiArrowDownLine,
  RiArrowUpLine,
  RiBarChartLine,
  RiGroupLine,
  RiLayoutGridLine,
  RiPriceTag3Line,
  RiSettings3Line,
} from "@remixicon/react";

import { cn } from "@/lib/utils";

const beat = {
  mark: 0,
  nav: 0.02,
  navStep: 0.015,
  chip: 0.1,
  tile: 0.16,
  tileStep: 0.05,
  panel: 0.38,
  bar: 0.44,
  barStep: 0.015,
  rail: 0.44,
  plan: 0.5,
  planStep: 0.035,
};

const part = (at: number) => ({ "--beat": at }) as React.CSSProperties;

const nav = [
  { label: "Overview", icon: RiLayoutGridLine },
  { label: "Revenue", icon: RiBarChartLine },
  { label: "Customers", icon: RiGroupLine },
  { label: "Plans", icon: RiPriceTag3Line },
  { label: "Settings", icon: RiSettings3Line },
];

const tiles = [
  { label: "MRR", value: "$48.2k", delta: "12.4%", up: true },
  { label: "ACTIVE", value: "2,310", delta: "184", up: true },
  { label: "CHURN", value: "1.4%", delta: "0.3pt", up: false },
  { label: "RETENTION", value: "112%", delta: "4pt", up: true },
];

const months = [
  0.34, 0.42, 0.38, 0.51, 0.47, 0.62, 0.58, 0.71, 0.66, 0.79, 0.74, 0.92,
];

const plans = [
  { name: "Studio", share: 42 },
  { name: "Team", share: 31 },
  { name: "Scale", share: 18 },
  { name: "Enterprise", share: 9 },
];

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

          <div className="border-concept-line bg-concept-ink/3 flex w-60 shrink-0 flex-col border-r px-7 pt-7 pb-8">
            <div
              style={part(beat.mark)}
              className="build-part flex items-center gap-3"
            >
              <span aria-hidden className="bg-concept-clay size-6" />
              <span className="font-label text-[1.125em] tracking-[0.16em]">
                CADENCE
              </span>
            </div>

            <div className="mt-11 flex flex-col gap-1.5">
              {nav.map((item, index) => (
                <span
                  key={item.label}
                  style={part(beat.nav + index * beat.navStep)}
                  className={cn(
                    "build-part flex h-11 items-center gap-3.5 px-3 text-[1.0625em]",
                    index === 0
                      ? "bg-concept-ink/8 text-concept-ink font-medium"
                      : "text-concept-muted",
                  )}
                >
                  <item.icon className="size-4.5" />
                  {item.label}
                </span>
              ))}
            </div>

            <div className="border-concept-line mt-auto flex items-center gap-3 border-t pt-6">
              <span aria-hidden className="bg-concept-ink/15 size-8 rounded-full" />
              <span className="flex flex-col gap-1.5">
                <span aria-hidden className="bg-concept-ink/20 block h-1.5 w-20" />
                <span aria-hidden className="bg-concept-ink/10 block h-1.5 w-14" />
              </span>
            </div>
          </div>

          <div className="min-w-0 flex-1">
            <div className="border-concept-line flex h-16 items-center justify-between border-b px-10">
              <span className="flex items-center gap-3 text-[1.5em] font-medium tracking-[-0.02em]">
                Overview
                <span
                  aria-hidden
                  className="bg-concept-clay animate-build-pulse build-idle size-2 rounded-full"
                />
              </span>

              <span
                style={part(beat.chip)}
                className="border-concept-line text-concept-muted font-label build-part flex h-9 items-center border px-4 text-[1em] tracking-[0.16em]"
              >
                LAST 12 MONTHS
              </span>
            </div>

            <div className="px-10 pt-8">
              <div className="flex gap-5">
                {tiles.map((tile, index) => (
                  <div
                    key={tile.label}
                    style={part(beat.tile + index * beat.tileStep)}
                    className="border-concept-line build-part h-36 min-w-0 flex-1 border px-6 pt-6"
                  >
                    <p className="text-concept-muted font-label text-[1em] tracking-[0.16em]">
                      {tile.label}
                    </p>
                    <p className="mt-3.5 text-[2.5em] leading-none font-semibold tracking-[-0.03em] tabular-nums">
                      {tile.value}
                    </p>
                    <span
                      className={cn(
                        "font-label build-act mt-3.5 flex items-center gap-1 text-[0.9375em] tracking-[0.12em] tabular-nums",
                        tile.up ? "text-concept-clay" : "text-concept-muted",
                      )}
                    >
                      {tile.up ? (
                        <RiArrowUpLine className="size-3.5" />
                      ) : (
                        <RiArrowDownLine className="size-3.5" />
                      )}
                      {tile.delta}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex gap-5">
                <div
                  style={part(beat.panel)}
                  className="border-concept-line build-part h-105 min-w-0 flex-1 border px-8 pt-7"
                >
                  <div className="flex items-baseline justify-between">
                    <span className="text-[1.25em] font-medium tracking-[-0.02em]">
                      Recurring revenue
                    </span>
                    <span className="text-concept-muted font-label text-[1em] tracking-[0.16em]">
                      TARGET $52k
                    </span>
                  </div>

                  <div className="relative mt-8 h-63">
                    <span
                      aria-hidden
                      className="border-concept-clay/40 absolute inset-x-0 bottom-[72%] border-t border-dashed"
                    />

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
                            "build-part min-w-0 flex-1 origin-bottom",
                            index === months.length - 1
                              ? "bg-concept-clay animate-build-tick build-idle"
                              : "bg-concept-ink/14",
                          )}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="text-concept-muted font-label mt-4 flex justify-between text-[0.875em] tracking-[0.16em]">
                    <span>JUN</span>
                    <span>SEP</span>
                    <span>DEC</span>
                    <span>MAR</span>
                  </div>
                </div>

                <div
                  style={part(beat.rail)}
                  className="border-concept-line build-part h-105 w-72 shrink-0 border px-7 pt-7"
                >
                  <span className="text-concept-muted font-label text-[1em] tracking-[0.16em]">
                    TOP PLANS
                  </span>

                  <div className="mt-8 flex flex-col gap-7">
                    {plans.map((plan, index) => (
                      <div
                        key={plan.name}
                        style={part(beat.plan + index * beat.planStep)}
                        className="build-part"
                      >
                        <div className="flex items-baseline justify-between text-[1.0625em]">
                          <span className="font-medium">{plan.name}</span>
                          <span className="text-concept-muted tabular-nums">
                            {plan.share}%
                          </span>
                        </div>
                        <span
                          aria-hidden
                          className="bg-concept-ink/8 mt-3 block h-1.5 w-full"
                        >
                          <span
                            aria-hidden
                            style={{ width: `${plan.share}%` }}
                            className={cn(
                              "block h-full",
                              index === 0
                                ? "bg-concept-clay"
                                : "bg-concept-ink/30",
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
        </div>
      </div>
    </div>
  );
}

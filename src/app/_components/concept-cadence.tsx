import Image from "next/image";
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

const ranges = ["30D", "6M", "12M"];

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
        <div className="concept-page concept-theme-cool bg-concept-shell text-concept-ink font-display absolute top-0 left-0 flex">
          <span
            aria-hidden
            className="bg-concept-clay absolute inset-x-0 bottom-0 z-10 h-[0.9%]"
          />

          <div className="bg-concept-canvas border-concept-line flex w-60 shrink-0 flex-col border-r px-6 pt-7 pb-7">
            <div
              style={part(beat.mark)}
              className="build-part flex items-center gap-3 px-2"
            >
              <span
                aria-hidden
                className="bg-concept-clay flex size-7 items-center justify-center rounded-lg"
              >
                <span className="bg-concept-canvas size-2.5 rounded-full" />
              </span>
              <span className="text-[1.25em] font-semibold tracking-[-0.02em]">
                Cadence
              </span>
            </div>

            <div className="mt-10 flex flex-col gap-1">
              {nav.map((item, index) => (
                <span
                  key={item.label}
                  style={part(beat.nav + index * beat.navStep)}
                  className={cn(
                    "build-part flex h-11 items-center gap-3.5 rounded-lg px-3 text-[1.0625em]",
                    index === 0
                      ? "bg-concept-ink text-concept-canvas font-medium"
                      : "text-concept-muted",
                  )}
                >
                  <item.icon className="size-4.5" />
                  {item.label}
                </span>
              ))}
            </div>

            <div className="bg-concept-shell mt-auto flex items-center gap-3 rounded-xl p-3">
              <Image
                src="/concept/avatar.webp"
                alt=""
                width={96}
                height={96}
                sizes="48px"
                className="size-9 shrink-0 rounded-full object-cover"
              />
              <span className="flex min-w-0 flex-col">
                <span className="text-[1em] font-medium">Maya Ortiz</span>
                <span className="text-concept-muted text-[0.9375em]">
                  Finance lead
                </span>
              </span>
            </div>
          </div>

          <div className="min-w-0 flex-1">
            <div className="bg-concept-canvas border-concept-line flex h-16 items-center justify-between border-b px-9">
              <span className="flex items-center gap-3 text-[1.5em] font-semibold tracking-[-0.02em]">
                Overview
                <span className="bg-concept-clay/12 text-concept-clay font-label flex h-7 items-center gap-2 rounded-full px-3 text-[0.875em] tracking-[0.14em]">
                  <span
                    aria-hidden
                    className="bg-concept-clay animate-build-pulse build-idle size-1.5 rounded-full"
                  />
                  LIVE
                </span>
              </span>

              <span
                style={part(beat.chip)}
                className="bg-concept-shell build-part flex h-9 items-center gap-1 rounded-lg p-1"
              >
                {ranges.map((range, index) => (
                  <span
                    key={range}
                    className={cn(
                      "font-label flex h-full items-center rounded-md px-3.5 text-[0.9375em] tracking-[0.14em]",
                      index === ranges.length - 1
                        ? "bg-concept-canvas text-concept-ink shadow-elev-1"
                        : "text-concept-muted",
                    )}
                  >
                    {range}
                  </span>
                ))}
              </span>
            </div>

            <div className="px-9 pt-7">
              <div className="flex gap-4">
                {tiles.map((tile, index) => (
                  <div
                    key={tile.label}
                    style={part(beat.tile + index * beat.tileStep)}
                    className="bg-concept-canvas border-concept-line build-part h-34 min-w-0 flex-1 rounded-xl border px-5 pt-5"
                  >
                    <p className="text-concept-muted font-label text-[0.9375em] tracking-[0.14em]">
                      {tile.label}
                    </p>
                    <p className="mt-3 text-[2.375em] leading-none font-semibold tracking-[-0.03em] tabular-nums">
                      {tile.value}
                    </p>
                    <span
                      className={cn(
                        "font-label build-act mt-3 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[0.875em] tracking-[0.1em] tabular-nums",
                        tile.up
                          ? "bg-concept-clay/12 text-concept-clay"
                          : "bg-concept-ink/6 text-concept-muted",
                      )}
                    >
                      {tile.up ? (
                        <RiArrowUpLine className="size-3" />
                      ) : (
                        <RiArrowDownLine className="size-3" />
                      )}
                      {tile.delta}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex gap-4">
                <div
                  style={part(beat.panel)}
                  className="bg-concept-canvas border-concept-line build-part h-107 min-w-0 flex-1 rounded-xl border px-7 pt-6"
                >
                  <div className="flex items-baseline justify-between">
                    <span className="text-[1.25em] font-semibold tracking-[-0.02em]">
                      Recurring revenue
                    </span>
                    <span className="text-concept-muted font-label text-[0.9375em] tracking-[0.14em]">
                      TARGET $52k
                    </span>
                  </div>

                  <div className="relative mt-7 h-63">
                    <span
                      aria-hidden
                      className="border-concept-clay/45 absolute inset-x-0 bottom-[72%] border-t border-dashed"
                    />
                    <span
                      aria-hidden
                      className="border-concept-line absolute inset-x-0 bottom-[36%] border-t"
                    />

                    <div className="flex h-full items-end gap-2.5">
                      {months.map((share, index) => (
                        <span
                          key={share}
                          aria-hidden
                          style={{
                            ...part(beat.bar + index * beat.barStep),
                            height: `${share * 100}%`,
                          }}
                          className={cn(
                            "build-part min-w-0 flex-1 origin-bottom rounded-t-md",
                            index === months.length - 1
                              ? "bg-concept-clay animate-build-tick build-idle"
                              : "bg-concept-ink/12",
                          )}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="text-concept-muted font-label mt-4 flex justify-between text-[0.875em] tracking-[0.14em]">
                    <span>12 MO AGO</span>
                    <span>8 MO</span>
                    <span>4 MO</span>
                    <span>NOW</span>
                  </div>
                </div>

                <div
                  style={part(beat.rail)}
                  className="bg-concept-canvas border-concept-line build-part h-107 w-70 shrink-0 rounded-xl border px-6 pt-6"
                >
                  <span className="text-[1.25em] font-semibold tracking-[-0.02em]">
                    Top plans
                  </span>

                  <div className="mt-7 flex flex-col gap-6">
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
                          className="bg-concept-ink/8 mt-2.5 block h-2 w-full rounded-full"
                        >
                          <span
                            aria-hidden
                            style={{ width: `${plan.share}%` }}
                            className={cn(
                              "block h-full rounded-full",
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

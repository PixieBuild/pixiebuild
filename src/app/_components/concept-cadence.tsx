import {
  RiAddLine,
  RiArrowLeftRightLine,
  RiArrowRightLine,
  RiCheckLine,
  RiQrScanLine,
  RiSendPlaneLine,
} from "@remixicon/react";

import { cn } from "@/lib/utils";

const beat = {
  mark: 0,
  link: 0.02,
  linkStep: 0.015,
  cta: 0.08,
  trade: 0.14,
  headline: 0.18,
  actions: 0.26,
  disc: 0.06,
  tablet: 0.3,
  phone: 0.2,
  row: 0.36,
  rowStep: 0.04,
  side: 0.34,
  sideStep: 0.06,
};

const part = (at: number) => ({ "--beat": at }) as React.CSSProperties;

const links = ["PRODUCT", "PRICING", "DOCS"];

const readings = ["$2,014,140", "$2,020,900", "$2,026,210", "$2,033,080"];

const actions = [
  { icon: RiSendPlaneLine, label: "Send" },
  { icon: RiAddLine, label: "Add" },
  { icon: RiArrowLeftRightLine, label: "Swap" },
  { icon: RiQrScanLine, label: "Scan" },
];

const rows = [
  { name: "Meridian Grooming", note: "Invoice #1042", amount: "+$6,400" },
  { name: "Payroll · 14 people", note: "Friday", amount: "−$154,000" },
  { name: "Ember & Oak", note: "Retainer", amount: "+$4,800" },
];

const alerts = [
  { title: "Invoice #1042 paid", meta: "$6,400 · just now", wait: "0s" },
  { title: "Payroll scheduled", meta: "Friday · 14 people", wait: "1.4s" },
  { title: "Card used", meta: "$180 · Figma", wait: "2.8s" },
];

const bars = [0.35, 0.5, 0.42, 0.58, 0.55, 0.7, 0.66, 0.8, 0.76, 0.92];

const team = ["AK", "RS", "MP", "JD"];

export function ConceptCadence() {
  return (
    <div className="relative w-full">
      <div
        aria-hidden
        className="concept-stage shadow-elev-2 relative w-full overflow-hidden border select-none [--concept-height:760] [--concept-width:1200] lg:w-[min(100cqw,calc(100cqh*1.5789),61.25rem)]"
      >
        <div className="concept-page concept-theme-cool bg-concept-chalk text-concept-ink font-display absolute top-0 left-0">
          <span
            aria-hidden
            className="bg-concept-clay absolute inset-x-0 bottom-0 z-10 h-[0.9%]"
          />

          <span
            style={part(beat.disc)}
            className="bg-concept-clay build-part absolute top-36 left-1/2 size-140 -translate-x-1/2 rounded-full"
          />
          <span
            style={part(beat.disc)}
            className="border-concept-clay/40 build-part absolute top-24 left-1/2 size-164 -translate-x-1/2 rounded-full border"
          />

          <div className="relative z-10 flex h-20 items-center justify-between px-14">
            <span
              style={part(beat.mark)}
              className="build-part flex items-center gap-3"
            >
              <span
                aria-hidden
                className="bg-concept-clay flex size-7 items-center justify-center rounded-lg"
              >
                <span className="bg-concept-chalk size-2.5 rounded-full" />
              </span>
              <span className="text-[1.375em] font-semibold tracking-[-0.02em]">
                Cadence
              </span>
            </span>

            <div className="flex items-center gap-9">
              {links.map((link, index) => (
                <span
                  key={link}
                  style={part(beat.link + index * beat.linkStep)}
                  className="text-concept-muted font-label build-part text-[1.125em] tracking-[0.16em]"
                >
                  {link}
                </span>
              ))}
              <span
                style={part(beat.cta)}
                className="bg-concept-ink text-concept-chalk build-part flex h-11 items-center rounded-full px-6 text-[1.0625em] font-medium"
              >
                Get the app
              </span>
            </div>
          </div>

          <div className="absolute top-32 left-14 z-10 w-[27%]">
            <span
              style={part(beat.trade)}
              className="text-concept-clay font-label build-part text-[1em] tracking-[0.16em]"
            >
              MONEY FOR SMALL TEAMS
            </span>
            <p
              style={part(beat.headline)}
              className="build-part mt-4 text-[2.75em] leading-[0.94] font-semibold tracking-[-0.04em]"
            >
              Money that <span className="text-concept-clay">moves.</span>
            </p>
            <div
              style={part(beat.actions)}
              className="build-part mt-7 flex items-center gap-5"
            >
              <span className="bg-concept-clay text-concept-chalk flex h-11 items-center gap-3 rounded-full px-5 text-[1em] font-medium">
                Get the app
                <RiArrowRightLine className="size-4" />
              </span>
              <span className="text-[1em] font-medium underline underline-offset-4">
                Pricing
              </span>
            </div>
          </div>

          <div className="build-layer absolute bottom-12 left-12 w-[34%] [--depth:0.7]">
            <div
              style={{ ...part(beat.tablet), animationDelay: "1.1s" }}
              className="bg-concept-canvas border-concept-line shadow-elev-2 build-part motion-safe:animate-build-float build-idle -rotate-2 rounded-2xl border p-5"
            >
              <div className="flex items-baseline justify-between">
                <span className="text-[0.9375em] font-semibold tracking-[-0.02em]">
                  Recurring revenue
                </span>
                <span className="text-concept-clay font-label text-[0.75em] tracking-[0.16em]">
                  +12.4%
                </span>
              </div>
              <div className="mt-4 flex h-28 items-end gap-1.5">
                {bars.map((share, index) => (
                  <span
                    key={index}
                    aria-hidden
                    style={{ height: `${share * 100}%` }}
                    className={cn(
                      "min-w-0 flex-1 rounded-t-md",
                      index === bars.length - 1
                        ? "bg-concept-clay animate-build-tick build-idle origin-bottom"
                        : "bg-concept-ink/12",
                    )}
                  />
                ))}
              </div>
              <div className="border-concept-line mt-4 flex justify-between border-t pt-3">
                {["MRR $48.2K", "ACTIVE 2,310", "RUNWAY 19 MO"].map((item) => (
                  <span
                    key={item}
                    className="text-concept-muted font-label text-[0.6875em] tracking-[0.14em]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="build-layer absolute top-24 left-1/2 w-64 -translate-x-1/2 [--depth:1.4]">
            <div
              style={part(beat.phone)}
              className="bg-concept-ink shadow-elev-2 build-part motion-safe:animate-build-float build-idle relative h-136 rounded-[2.5rem] p-2.5 transform-[rotateY(-8deg)_rotateX(3deg)]"
            >
              <div className="bg-concept-canvas relative h-full overflow-hidden rounded-[2rem]">
                <div className="flex items-center justify-between px-5 pt-3.5">
                  <span className="font-label text-[0.8125em] tracking-[0.08em] tabular-nums">
                    9:41
                  </span>
                  <span className="bg-concept-ink h-5 w-16 rounded-full" />
                  <span className="flex items-center gap-1">
                    <span className="bg-concept-ink h-2 w-1 rounded-sm" />
                    <span className="bg-concept-ink h-2.5 w-1 rounded-sm" />
                    <span className="bg-concept-ink h-3 w-1 rounded-sm" />
                  </span>
                </div>

                <div className="px-5 pt-7">
                  <span className="text-concept-muted font-label text-[0.6875em] tracking-[0.16em]">
                    TOTAL BALANCE
                  </span>
                  <span className="mt-1.5 block h-[1em] overflow-hidden text-[2em] leading-none font-semibold tracking-[-0.04em] tabular-nums">
                    <span className="motion-safe:animate-build-index build-idle block">
                      {readings.map((reading) => (
                        <span key={reading} className="block h-[1em] leading-none">
                          {reading}
                        </span>
                      ))}
                    </span>
                  </span>
                  <span className="bg-concept-clay/12 text-concept-clay font-label mt-2.5 inline-block rounded-full px-2.5 py-1 text-[0.6875em] tracking-widest">
                    +12.4% THIS MONTH
                  </span>
                </div>

                <div className="mt-6 grid grid-cols-4 px-5">
                  {actions.map((action) => (
                    <span
                      key={action.label}
                      className="flex flex-col items-center gap-1.5"
                    >
                      <span className="bg-concept-ink/6 flex size-10 items-center justify-center rounded-full">
                        <action.icon className="size-4" />
                      </span>
                      <span className="text-concept-muted font-label text-[0.625em] tracking-[0.12em]">
                        {action.label.toUpperCase()}
                      </span>
                    </span>
                  ))}
                </div>

                <div className="mt-6 px-5">
                  <span className="text-concept-muted font-label text-[0.6875em] tracking-[0.16em]">
                    RECENT
                  </span>
                  <div className="mt-2 flex flex-col">
                    {rows.map((row, index) => (
                      <span
                        key={row.name}
                        style={part(beat.row + index * beat.rowStep)}
                        className="border-concept-line build-part flex items-center justify-between border-t py-3"
                      >
                        <span className="flex min-w-0 flex-col">
                          <span className="truncate text-[0.875em] font-medium tracking-[-0.01em]">
                            {row.name}
                          </span>
                          <span className="text-concept-muted font-label mt-0.5 text-[0.625em] tracking-[0.12em]">
                            {row.note.toUpperCase()}
                          </span>
                        </span>
                        <span
                          className={cn(
                            "text-[0.875em] font-medium tabular-nums",
                            row.amount.startsWith("+") && "text-concept-clay",
                          )}
                        >
                          {row.amount}
                        </span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="build-layer absolute top-28 right-12 flex w-[27%] flex-col gap-3 [--depth:1]">
            {alerts.map((alert) => (
              <span
                key={alert.title}
                style={{ animationDelay: alert.wait }}
                className="bg-concept-ink text-concept-chalk shadow-elev-2 motion-safe:animate-notify build-idle flex items-center gap-3 rounded-2xl p-4 opacity-0"
              >
                <span className="bg-concept-clay flex size-8 shrink-0 items-center justify-center rounded-full">
                  <RiCheckLine className="size-4" />
                </span>
                <span className="flex min-w-0 flex-col">
                  <span className="truncate text-[0.9375em] font-medium">
                    {alert.title}
                  </span>
                  <span className="text-concept-chalk/60 font-label mt-0.5 text-[0.6875em] tracking-[0.12em]">
                    {alert.meta.toUpperCase()}
                  </span>
                </span>
              </span>
            ))}

            <div
              style={{ ...part(beat.side), animationDelay: "2.2s" }}
              className="bg-concept-canvas border-concept-line shadow-elev-2 build-part motion-safe:animate-build-float build-idle mt-3 rotate-2 rounded-2xl border p-5"
            >
              <div className="flex items-baseline justify-between">
                <span className="text-[0.9375em] font-semibold tracking-[-0.02em]">
                  Payroll
                </span>
                <span className="text-concept-muted font-label text-[0.6875em] tracking-[0.16em]">
                  FRIDAY
                </span>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="flex -space-x-2.5">
                  {team.map((initials) => (
                    <span
                      key={initials}
                      className="bg-concept-ink text-concept-chalk border-concept-canvas font-label flex size-9 items-center justify-center rounded-full border-2 text-[0.625em] tracking-[0.1em]"
                    >
                      {initials}
                    </span>
                  ))}
                  <span className="bg-concept-clay/15 text-concept-clay border-concept-canvas font-label flex size-9 items-center justify-center rounded-full border-2 text-[0.625em] tracking-[0.1em]">
                    +10
                  </span>
                </span>
                <span className="text-[1.125em] font-semibold tracking-[-0.03em] tabular-nums">
                  $154K
                </span>
              </div>
              <span className="bg-concept-ink/8 mt-4 block h-1.5 w-full rounded-full">
                <span className="bg-concept-clay block h-full w-[68%] rounded-full" />
              </span>
              <span className="text-concept-muted font-label mt-2 block text-[0.6875em] tracking-[0.14em]">
                68% APPROVED · 4 PENDING
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

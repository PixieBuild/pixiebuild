import { RiCheckLine } from "@remixicon/react";

import { cn } from "@/lib/utils";

const beat = {
  mark: 0,
  cta: 0.06,
  disc: 0.08,
  phone: 0.16,
  row: 0.3,
  rowStep: 0.04,
};

const part = (at: number) => ({ "--beat": at }) as React.CSSProperties;

const readings = ["$2,014,140", "$2,020,900", "$2,026,210", "$2,033,080"];

const rows = [
  { name: "Meridian Grooming", amount: "+$6,400" },
  { name: "Payroll · 14 people", amount: "−$154,000" },
  { name: "Ember & Oak", amount: "+$4,800" },
];

const alerts = [
  { title: "Invoice #1042 paid", wait: "0s" },
  { title: "Payroll scheduled", wait: "1.4s" },
];

export function ConceptCadencePhone() {
  return (
    <div className="relative w-full">
      <div
        aria-hidden
        className="concept-stage shadow-elev-2 relative w-full overflow-hidden border select-none [--concept-height:500] [--concept-width:380]"
      >
        <div className="concept-page concept-theme-cool bg-concept-chalk text-concept-ink font-display absolute top-0 left-0">
          <span
            aria-hidden
            className="bg-concept-clay absolute inset-x-0 bottom-0 z-10 h-[1.4%]"
          />

          <span
            style={part(beat.disc)}
            className="bg-concept-clay build-part absolute top-24 left-1/2 size-80 -translate-x-1/2 rounded-full"
          />

          <div className="relative z-10 flex h-14 items-center justify-between px-5">
            <span
              style={part(beat.mark)}
              className="build-part flex items-center gap-2"
            >
              <span
                aria-hidden
                className="bg-concept-clay flex size-5 items-center justify-center rounded-md"
              >
                <span className="bg-concept-chalk size-1.5 rounded-full" />
              </span>
              <span className="text-[0.9375em] font-semibold tracking-[-0.02em]">
                Cadence
              </span>
            </span>
            <span
              style={part(beat.cta)}
              className="bg-concept-ink text-concept-chalk build-part flex h-7 items-center rounded-full px-3.5 text-[0.6875em] font-medium"
            >
              Get the app
            </span>
          </div>

          <div
            style={part(beat.phone)}
            className="bg-concept-ink shadow-elev-2 build-part motion-safe:animate-build-float build-idle absolute top-20 left-1/2 h-120 w-52 -translate-x-1/2 rounded-[2rem] p-1.5 transform-[rotateY(-8deg)_rotateX(3deg)]"
          >
            <div className="bg-concept-canvas relative h-full overflow-hidden rounded-[1.625rem]">
              <div className="flex items-center justify-between px-4 pt-3">
                <span className="font-label text-[0.625em] tracking-[0.08em] tabular-nums">
                  9:41
                </span>
                <span className="bg-concept-ink h-4 w-14 rounded-full" />
                <span className="bg-concept-ink h-2.5 w-4 rounded-sm" />
              </div>

              <div className="px-4 pt-6">
                <span className="text-concept-muted font-label text-[0.5em] tracking-[0.16em]">
                  TOTAL BALANCE
                </span>
                <span className="mt-1.5 block h-[1em] overflow-hidden text-[1.5em] leading-none font-semibold tracking-[-0.04em] tabular-nums">
                  <span className="motion-safe:animate-build-index build-idle block">
                    {readings.map((reading) => (
                      <span key={reading} className="block h-[1em] leading-none">
                        {reading}
                      </span>
                    ))}
                  </span>
                </span>
                <span className="bg-concept-clay/12 text-concept-clay font-label mt-2 inline-block rounded-full px-2 py-0.5 text-[0.5em] tracking-widest">
                  +12.4% THIS MONTH
                </span>
              </div>

              <div className="mt-6 px-4">
                <span className="text-concept-muted font-label text-[0.5em] tracking-[0.16em]">
                  RECENT
                </span>
                <div className="mt-2 flex flex-col">
                  {rows.map((row, index) => (
                    <span
                      key={row.name}
                      style={part(beat.row + index * beat.rowStep)}
                      className="border-concept-line build-part flex items-center justify-between border-t py-2.5"
                    >
                      <span className="truncate text-[0.6875em] font-medium tracking-[-0.01em]">
                        {row.name}
                      </span>
                      <span
                        className={cn(
                          "text-[0.6875em] font-medium tabular-nums",
                          row.amount.startsWith("+") && "text-concept-clay",
                        )}
                      >
                        {row.amount}
                      </span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute inset-x-3 top-40 flex flex-col gap-2">
                {alerts.map((alert) => (
                  <span
                    key={alert.title}
                    style={{ animationDelay: alert.wait }}
                    className="bg-concept-ink text-concept-chalk shadow-elev-2 motion-safe:animate-notify build-idle flex items-center gap-2.5 rounded-xl p-2.5 opacity-0"
                  >
                    <span className="bg-concept-clay flex size-6 shrink-0 items-center justify-center rounded-full">
                      <RiCheckLine className="size-3" />
                    </span>
                    <span className="truncate text-[0.6875em] font-medium">
                      {alert.title}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

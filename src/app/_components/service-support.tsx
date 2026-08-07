import { RiCheckLine } from "@remixicon/react";

const beat = { head: 160, uptime: 300, strip: 400, step: 8, log: 820 };

/* One dip, so the strip reads as a record rather than decoration. */
const days = Array.from({ length: 60 }, (_, day) => day === 43);

const log = [
  { what: "Deployed to production", who: "main · a1b2c3d", when: "2m ago" },
  { what: "Dependencies updated", who: "renovate", when: "1d ago" },
  { what: "Analytics report sent", who: "monthly", when: "3d ago" },
];

export function ServiceSupport() {
  return (
    <div className="flex size-full flex-col">
      <div
        style={{ animationDelay: `${beat.head}ms` }}
        className="motion-reduce:animate-none flex shrink-0 animate-rise-in items-center gap-3 border-b px-6 py-4"
      >
        <span className="text-sm font-semibold tracking-tight">Production</span>
        <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/12 px-2.5 py-1 text-[0.6875rem] font-medium text-emerald-500">
          <span className="size-1.5 rounded-full bg-emerald-500" />
          Operational
        </span>
        <span className="text-muted-foreground ml-auto font-mono text-[0.625rem]">
          pixiebuild.com
        </span>
      </div>

      <div className="flex min-h-0 flex-1 flex-col justify-center gap-6 px-6 py-5">
        <div
          style={{ animationDelay: `${beat.uptime}ms` }}
          className="motion-reduce:animate-none animate-rise-in"
        >
          <div className="flex items-baseline gap-2.5">
            <p className="text-2xl leading-none font-semibold tracking-tight tabular-nums">
              99.98%
            </p>
            <p className="text-muted-foreground text-xs">uptime over 60 days</p>
          </div>

          <div className="mt-3.5 flex h-10 items-stretch gap-0.5">
            {days.map((dip, index) => (
              <span
                key={index}
                style={{
                  animationDelay: `${beat.strip + index * beat.step}ms`,
                }}
                className={`motion-reduce:animate-none flex-1 animate-rise-in rounded-xs ${
                  dip ? "bg-amber-500/70" : "bg-emerald-500/70"
                }`}
              />
            ))}
          </div>

          <div className="text-muted-foreground/70 mt-2.5 flex justify-between font-mono text-[0.5625rem]">
            <span>60 days ago</span>
            <span>today</span>
          </div>
        </div>

        <div
          style={{ animationDelay: `${beat.log}ms` }}
          className="motion-reduce:animate-none flex animate-rise-in flex-col gap-3 border-t pt-5"
        >
          {log.map((row) => (
            <div key={row.what} className="flex items-center gap-3">
              <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/12 text-emerald-500">
                <RiCheckLine className="size-3" />
              </span>
              <span className="min-w-0 flex-1 truncate text-xs">
                {row.what}
              </span>
              <span className="text-muted-foreground hidden shrink-0 font-mono text-[0.625rem] sm:block">
                {row.who}
              </span>
              <span className="text-muted-foreground w-14 shrink-0 text-right font-mono text-[0.625rem] tabular-nums">
                {row.when}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

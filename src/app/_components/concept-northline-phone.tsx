import { RiMenuLine } from "@remixicon/react";

import { cn } from "@/lib/utils";

const beat = {
  logo: 0,
  menu: 0.02,
  headline: 0.14,
  copy: 0.34,
  available: 0.4,
  band: 0.46,
  stat: 0.5,
  statStep: 0.04,
  action: 0.64,
};

const part = (at: number) => ({ "--beat": at }) as React.CSSProperties;

const stats = [
  { value: "240", label: "PROJECTS" },
  { value: "18", label: "YEARS" },
  { value: "42", label: "ENGINEERS" },
];

export function ConceptNorthlinePhone() {
  return (
    <div className="relative w-full">
      <div
        aria-hidden
        className="concept-stage shadow-elev-2 relative w-full overflow-hidden border select-none [--concept-height:500] [--concept-width:380]"
      >
        <div className="concept-page concept-theme-paper bg-concept-canvas text-concept-ink font-display absolute top-0 left-0">
          <span
            aria-hidden
            className="bg-concept-clay absolute inset-x-0 bottom-0 z-10 h-[1.4%]"
          />

          <div className="border-concept-line flex h-14 items-center justify-between border-b px-5">
            <span
              style={part(beat.logo)}
              className="font-label build-part text-[0.75em] tracking-[0.16em]"
            >
              NORTHLINE &amp; CO
            </span>
            <RiMenuLine
              style={part(beat.menu)}
              className="text-concept-ink build-part size-4"
            />
          </div>

          <div className="px-5 pt-9">
            <p
              style={part(beat.headline)}
              className="build-part text-[2.125em] leading-[0.95] font-semibold tracking-[-0.035em]"
            >
              Structural
              <br />
              engineering,
              <br />
              quietly precise.
            </p>

            <p
              style={part(beat.copy)}
              className="text-concept-muted build-part mt-5 text-[0.8125em] leading-[1.7]"
            >
              Structure for civic buildings, bridges and transport hubs.
            </p>

            <span
              style={part(beat.available)}
              className="font-label build-part mt-5 flex items-center gap-2 text-[0.625em] tracking-[0.16em]"
            >
              <span
                aria-hidden
                className="bg-concept-clay animate-build-pulse build-idle size-1.5 rounded-full"
              />
              AVAILABLE FOR 2025
            </span>

            <div
              style={part(beat.band)}
              className="border-concept-line build-part mt-7 flex h-18 border-y"
            >
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  style={part(beat.stat + index * beat.statStep)}
                  className={cn(
                    "border-concept-line build-part flex flex-1 flex-col justify-center px-4",
                    index > 0 && "border-l",
                    index === 0 && "pl-0",
                  )}
                >
                  <span className="text-[1.5em] leading-none font-semibold tracking-[-0.03em] tabular-nums">
                    {stat.value}
                  </span>
                  <span className="text-concept-muted font-label mt-2 text-[0.5625em] tracking-[0.16em]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            <span
              style={part(beat.action)}
              className="bg-concept-ink text-concept-canvas font-label build-part relative mt-7 flex h-11 items-center justify-center overflow-hidden text-[0.6875em] tracking-[0.16em]"
            >
              <span
                aria-hidden
                className="bg-concept-clay build-act absolute inset-0 origin-left scale-x-[var(--act,1)]"
              />
              <span className="relative">VIEW PROJECTS</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

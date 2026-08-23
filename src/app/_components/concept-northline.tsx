import { cn } from "@/lib/utils";

const beat = {
  logo: 0,
  link: 0.02,
  linkStep: 0.02,
  headline: 0.14,
  copy: 0.3,
  available: 0.36,
  band: 0.42,
  stat: 0.48,
  statStep: 0.05,
  action: 0.64,
};

const part = (at: number) => ({ "--beat": at }) as React.CSSProperties;

const links = ["SERVICES", "PROJECTS", "CONTACT"];

const stats = [
  { value: "240", label: "PROJECTS DELIVERED" },
  { value: "18", label: "YEARS IN PRACTICE" },
  { value: "42", label: "CHARTERED ENGINEERS" },
];

export function ConceptNorthline() {
  return (
    <div className="relative w-full">
      <div
        aria-hidden
        className="concept-stage shadow-elev-2 relative w-full overflow-hidden border select-none [--concept-height:760] [--concept-width:1200] lg:w-[min(100cqw,calc(100cqh*1.5789),61.25rem)]"
      >
        <div className="concept-page concept-theme-paper bg-concept-canvas text-concept-ink font-display absolute top-0 left-0">
          <span
            aria-hidden
            className="bg-concept-clay absolute inset-x-0 bottom-0 z-10 h-[0.9%]"
          />

          <div className="border-concept-line flex h-24 items-center justify-between border-b px-15">
            <span
              style={part(beat.logo)}
              className="font-label build-part text-[1.25em] tracking-[0.16em]"
            >
              NORTHLINE &amp; CO
            </span>

            <div className="text-concept-muted font-label flex items-center gap-9 text-[1.125em] tracking-[0.16em]">
              {links.map((link, index) => (
                <span
                  key={link}
                  style={part(beat.link + index * beat.linkStep)}
                  className="build-part"
                >
                  {link}
                </span>
              ))}
            </div>
          </div>

          <div className="px-15 pt-14">
            <div className="flex items-start gap-16">
              <p
                style={part(beat.headline)}
                className="build-part min-w-0 flex-1 text-[4.5em] leading-[0.95] font-semibold tracking-[-0.035em]"
              >
                Structural
                <br />
                engineering,
                <br />
                quietly precise.
              </p>

              <div className="w-88 shrink-0 pt-4">
                <p
                  style={part(beat.copy)}
                  className="text-concept-muted build-part text-[1.25em] leading-[1.7]"
                >
                  We design the structure behind civic buildings, bridges and
                  transport hubs across the north of England.
                </p>

                <span
                  style={part(beat.available)}
                  className="font-label build-part mt-8 flex items-center gap-2.5 text-[1.0625em] tracking-[0.16em]"
                >
                  <span
                    aria-hidden
                    className="bg-concept-clay animate-build-pulse build-idle size-2 rounded-full"
                  />
                  AVAILABLE FOR 2025
                </span>
              </div>
            </div>

            <div
              style={part(beat.band)}
              className="border-concept-line build-part mt-16 flex h-38 border-y"
            >
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  style={part(beat.stat + index * beat.statStep)}
                  className={cn(
                    "border-concept-line build-part flex flex-1 flex-col justify-center px-12",
                    index > 0 && "border-l",
                    index === 0 && "pl-0",
                  )}
                >
                  <span className="text-[3.25em] leading-none font-semibold tracking-[-0.03em] tabular-nums">
                    {stat.value}
                  </span>
                  <span className="text-concept-muted font-label mt-4 text-[1.0625em] tracking-[0.16em]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-14 flex items-center justify-between">
              <span
                style={part(beat.action)}
                className="bg-concept-ink text-concept-canvas font-label build-part relative flex h-16 w-62 items-center justify-center overflow-hidden text-[1.25em] tracking-[0.16em]"
              >
                <span
                  aria-hidden
                  className="bg-concept-clay build-act absolute inset-0 origin-left scale-x-[var(--act,1)]"
                />
                <span className="relative">VIEW PROJECTS</span>
              </span>

              <span className="text-concept-muted font-label text-[1.0625em] tracking-[0.16em]">
                ICE ACCREDITED — EST. 2007
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

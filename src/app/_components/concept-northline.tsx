import Image from "next/image";

const beat = {
  logo: 0,
  link: 0.02,
  linkStep: 0.02,
  trade: 0.12,
  headline: 0.18,
  available: 0.36,
  figure: 0.28,
  band: 0.5,
  stat: 0.54,
  statStep: 0.03,
};

const part = (at: number) => ({ "--beat": at }) as React.CSSProperties;

const links = ["SERVICES", "PROJECTS", "CONTACT"];

const stats = [
  { value: "240", label: "PROJECTS" },
  { value: "2008", label: "ESTABLISHED" },
  { value: "42", label: "ENGINEERS" },
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

          <div className="border-concept-line relative flex h-20 items-center justify-between border-b px-15">
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

          <div className="flex h-135">
            <div className="flex w-112 shrink-0 flex-col justify-center px-15">
              <span
                style={part(beat.trade)}
                className="text-concept-muted font-label build-part text-[1.0625em] tracking-[0.16em]"
              >
                STRUCTURAL ENGINEERING
              </span>

              <p
                style={part(beat.headline)}
                className="build-part mt-6 text-[4.5em] leading-[0.95] font-semibold tracking-[-0.035em]"
              >
                Quietly
                <br />
                precise.
              </p>

              <span
                style={part(beat.available)}
                className="font-label build-part mt-9 flex items-center gap-2.5 text-[1.0625em] tracking-[0.16em]"
              >
                <span
                  aria-hidden
                  className="bg-concept-clay animate-build-pulse build-idle size-2 rounded-full"
                />
                AVAILABLE FOR WORK
              </span>
            </div>

            <div
              style={part(beat.figure)}
              className="build-part relative min-w-0 flex-1 overflow-hidden"
            >
              <Image
                src="/concept/viaduct.webp"
                alt=""
                fill
                loading="eager"
                sizes="(min-width: 1024px) 46vw, 70vw"
                className="animate-build-drift build-idle object-cover"
              />
              <span className="bg-concept-canvas text-concept-ink font-label build-act absolute bottom-6 left-6 flex h-9 items-center px-4 text-[1em] tracking-[0.16em]">
                HALDEN VIADUCT — 340 M
              </span>
            </div>
          </div>

          <div
            style={part(beat.band)}
            className="border-concept-line build-part flex h-24 items-center justify-between border-t px-15"
          >
            <div className="flex items-center gap-12">
              {stats.map((stat, index) => (
                <span
                  key={stat.label}
                  style={part(beat.stat + index * beat.statStep)}
                  className="build-part flex items-baseline gap-3"
                >
                  <span className="text-[1.75em] font-semibold tracking-[-0.02em] tabular-nums">
                    {stat.value}
                  </span>
                  <span className="text-concept-muted font-label text-[1em] tracking-[0.16em]">
                    {stat.label}
                  </span>
                </span>
              ))}
            </div>

            <span className="text-concept-muted font-label text-[1.0625em] tracking-[0.16em]">
              ICE ACCREDITED
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

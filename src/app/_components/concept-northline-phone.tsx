import Image from "next/image";
import { RiMenuLine } from "@remixicon/react";

const beat = {
  logo: 0,
  menu: 0.02,
  figure: 0.1,
  trade: 0.24,
  headline: 0.3,
  available: 0.44,
  band: 0.54,
  stat: 0.58,
  statStep: 0.03,
};

const part = (at: number) => ({ "--beat": at }) as React.CSSProperties;

const stats = [
  { value: "240", label: "PROJECTS" },
  { value: "2008", label: "EST." },
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

          <div className="border-concept-line relative flex h-14 items-center justify-between border-b px-5">
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

          <div
            style={part(beat.figure)}
            className="build-part relative h-52 overflow-hidden"
          >
            <Image
              src="/concept/viaduct.webp"
              alt=""
              fill
              loading="eager"
              sizes="80vw"
              className="animate-build-drift build-idle object-cover"
            />
            <span className="bg-concept-canvas text-concept-ink font-label build-act absolute bottom-4 left-4 flex h-7 items-center px-3 text-[0.5625em] tracking-[0.16em]">
              HALDEN VIADUCT — 340 M
            </span>
          </div>

          <div className="px-5 pt-6">
            <span
              style={part(beat.trade)}
              className="text-concept-muted font-label build-part text-[0.625em] tracking-[0.16em]"
            >
              STRUCTURAL ENGINEERING
            </span>

            <p
              style={part(beat.headline)}
              className="build-part mt-3 text-[2.125em] leading-[0.95] font-semibold tracking-[-0.035em]"
            >
              Quietly
              <br />
              precise.
            </p>

            <span
              style={part(beat.available)}
              className="font-label build-part mt-5 flex items-center gap-2 text-[0.625em] tracking-[0.16em]"
            >
              <span
                aria-hidden
                className="bg-concept-clay animate-build-pulse build-idle size-1.5 rounded-full"
              />
              AVAILABLE FOR WORK
            </span>
          </div>

          <div
            style={part(beat.band)}
            className="border-concept-line build-part mt-6 flex h-14 items-center justify-between border-t px-5"
          >
            {stats.map((stat, index) => (
              <span
                key={stat.label}
                style={part(beat.stat + index * beat.statStep)}
                className="build-part flex items-baseline gap-2"
              >
                <span className="text-[0.875em] font-semibold tracking-[-0.02em] tabular-nums">
                  {stat.value}
                </span>
                <span className="text-concept-muted font-label text-[0.5em] tracking-[0.16em]">
                  {stat.label}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

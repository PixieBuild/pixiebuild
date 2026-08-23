import { RiArrowRightUpLine } from "@remixicon/react";

import { cn } from "@/lib/utils";

const beat = {
  logo: 0,
  link: 0.02,
  linkStep: 0.015,
  headline: 0.12,
  label: 0.26,
  row: 0.32,
  rowStep: 0.06,
};

const part = (at: number) => ({ "--beat": at }) as React.CSSProperties;

const links = ["WORK", "STUDIO", "CONTACT"];

const work = [
  { name: "Helios Atlas", craft: "IDENTITY", year: "2024" },
  { name: "North Battery", craft: "EDITORIAL", year: "2024" },
  { name: "Casa Meridian", craft: "MOTION", year: "2023" },
  { name: "Pale Fire Press", craft: "WEB", year: "2023" },
];

export function ConceptFoss() {
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

          <div className="border-concept-line flex h-20 items-center justify-between border-b px-15">
            <span
              style={part(beat.logo)}
              className="font-label build-part text-[1.25em] tracking-[0.16em]"
            >
              ATELIER FOSS
            </span>

            <div className="text-concept-muted font-label flex items-center gap-9 text-[1.125em] tracking-[0.16em]">
              {links.map((link, index) => (
                <span
                  key={link}
                  style={part(beat.link + index * beat.linkStep)}
                  className={cn(
                    "build-part",
                    index === 0 && "text-concept-ink relative",
                  )}
                >
                  {link}
                  {index === 0 && (
                    <span
                      aria-hidden
                      className="bg-concept-ink build-act absolute -bottom-2 left-0 h-px w-full origin-left scale-x-[var(--act,1)]"
                    />
                  )}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-end justify-between px-15 pt-15">
            <p
              style={part(beat.headline)}
              className="build-part text-[4.5em] leading-[0.95] font-semibold tracking-[-0.035em]"
            >
              Form <span className="text-concept-clay">matters.</span>
            </p>

            <span
              style={part(beat.label)}
              className="text-concept-muted font-label build-part pb-3 text-[1.125em] tracking-[0.16em]"
            >
              SELECTED WORK — 2024
            </span>
          </div>

          <div className="border-concept-line relative mt-13 border-t">
            <span
              aria-hidden
              className="bg-concept-clay/10 border-concept-clay animate-build-index build-idle absolute inset-x-0 top-px h-28 border-l-2"
            />

            {work.map((project, index) => (
              <div
                key={project.name}
                style={part(beat.row + index * beat.rowStep)}
                className="border-concept-line build-part relative flex h-28 items-center gap-8 border-b px-15"
              >
                <span className="text-concept-muted font-label w-14 text-[1.1875em] tracking-[0.16em] tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0 flex-1 text-[1.875em] font-medium tracking-[-0.02em]">
                  {project.name}
                </span>
                <span className="text-concept-muted font-label w-56 text-[1.1875em] tracking-[0.16em]">
                  {project.craft}
                </span>
                <span className="text-concept-muted font-label w-20 text-[1.1875em] tracking-[0.16em] tabular-nums">
                  {project.year}
                </span>
                <RiArrowRightUpLine className="text-concept-muted size-7" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

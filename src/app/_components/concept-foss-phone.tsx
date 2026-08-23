import { RiArrowRightUpLine } from "@remixicon/react";

const beat = {
  logo: 0,
  index: 0.02,
  headline: 0.14,
  label: 0.28,
  row: 0.34,
  rowStep: 0.06,
};

const part = (at: number) => ({ "--beat": at }) as React.CSSProperties;

const work = ["Helios Atlas", "North Battery", "Casa Meridian", "Pale Fire"];

export function ConceptFossPhone() {
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
              ATELIER FOSS
            </span>
            <span
              style={part(beat.index)}
              className="text-concept-muted font-label build-part text-[0.75em] tracking-[0.16em]"
            >
              WORK
            </span>
          </div>

          <div className="px-5 pt-11">
            <p
              style={part(beat.headline)}
              className="build-part text-[2.5em] leading-[0.95] font-semibold tracking-[-0.035em]"
            >
              Form <span className="text-concept-clay">matters.</span>
            </p>

            <span
              style={part(beat.label)}
              className="text-concept-muted font-label build-part mt-3 block text-[0.6875em] tracking-[0.16em]"
            >
              SELECTED WORK — 12 PROJECTS
            </span>
          </div>

          <div className="border-concept-line relative mt-9 border-t">
            <span
              aria-hidden
              className="bg-concept-clay/10 border-concept-clay animate-build-index build-idle absolute inset-x-0 top-px h-16 border-l-2"
            />

            {work.map((name, index) => (
              <div
                key={name}
                style={part(beat.row + index * beat.rowStep)}
                className="border-concept-line build-part relative flex h-16 items-center gap-4 border-b px-5"
              >
                <span className="text-concept-muted font-label w-8 text-[0.6875em] tracking-[0.16em] tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0 flex-1 text-[1.125em] font-medium tracking-[-0.02em]">
                  {name}
                </span>
                <RiArrowRightUpLine className="text-concept-muted size-4" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

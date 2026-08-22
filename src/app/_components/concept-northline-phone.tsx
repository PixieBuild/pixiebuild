import { RiMenuLine } from "@remixicon/react";

const beat = {
  logo: 0,
  menu: 0.02,
  headline: 0.14,
  copy: 0.4,
  action: 0.5,
  figure: 0.62,
};

const part = (at: number) => ({ "--beat": at }) as React.CSSProperties;

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

          <div className="border-concept-line flex h-14 items-center justify-between border-b px-6">
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

          <div className="px-6 pt-9">
            <p
              style={part(beat.headline)}
              className="build-part text-[2.5em] leading-[0.94] font-semibold tracking-[-0.035em]"
            >
              Structural
              <br />
              engineering,
              <br />
              quietly precise.
            </p>

            <div
              style={part(beat.copy)}
              className="build-part mt-6 flex flex-col gap-2"
            >
              <span aria-hidden className="bg-concept-ink/12 block h-1.5 w-44" />
              <span aria-hidden className="bg-concept-ink/8 block h-1.5 w-30" />
            </div>

            <span
              style={part(beat.action)}
              className="bg-concept-ink text-concept-canvas font-label build-part mt-6 flex h-11 items-center justify-center text-[0.75em] tracking-[0.16em]"
            >
              VIEW PROJECTS
            </span>

            <div
              style={part(beat.figure)}
              className="bg-concept-stripes build-part relative mt-7 h-30"
            >
              <span className="text-concept-muted font-label absolute bottom-3 left-4 text-[0.6875em] tracking-[0.16em]">
                SITE IMAGERY
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

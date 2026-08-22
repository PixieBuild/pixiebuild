const beat = {
  logo: 0,
  book: 0.02,
  headline: 0.14,
  headlineStep: 0.1,
  rule: 0.48,
  detail: 0.54,
  detailStep: 0.04,
};

const part = (at: number) => ({ "--beat": at }) as React.CSSProperties;

const headline = [
  { word: "Seasonal.", accent: false },
  { word: "Slow.", accent: false },
  { word: "Local.", accent: true },
];

const detail = ["MENU — SPRING", "DINNER 18:00—23:00", "34 ALBION STREET"];

export function ConceptFigVinePhone() {
  return (
    <div className="relative w-full">
      <div
        aria-hidden
        className="concept-stage shadow-elev-2 relative w-full overflow-hidden border select-none [--concept-height:500] [--concept-width:380]"
      >
        <div className="concept-page concept-theme-ink bg-concept-canvas text-concept-ink font-display absolute top-0 left-0">
          <div
            aria-hidden
            className="bg-concept-stripes absolute inset-0 opacity-25"
          />
          <span
            aria-hidden
            className="bg-concept-clay absolute inset-x-0 bottom-0 z-10 h-[1.4%]"
          />

          <div className="relative flex h-14 items-center justify-between px-6">
            <span
              style={part(beat.logo)}
              className="font-label build-part text-[0.75em] tracking-[0.16em]"
            >
              FIG &amp; VINE
            </span>
            <span
              style={part(beat.book)}
              className="font-label build-part text-[0.75em] tracking-[0.16em]"
            >
              RESERVE
            </span>
          </div>

          <div className="relative px-6 pt-14">
            <p className="text-[3.25em] leading-[0.87] font-medium tracking-[-0.035em]">
              {headline.map((line, index) => (
                <span
                  key={line.word}
                  style={part(beat.headline + index * beat.headlineStep)}
                  className={
                    line.accent
                      ? "text-concept-clay build-part block"
                      : "build-part block"
                  }
                >
                  {line.word}
                </span>
              ))}
            </p>

            <span
              aria-hidden
              style={part(beat.rule)}
              className="bg-concept-ink/25 build-part mt-10 block h-px w-full"
            />

            <div className="mt-5 flex flex-col gap-3">
              {detail.map((line, index) => (
                <span
                  key={line}
                  style={part(beat.detail + index * beat.detailStep)}
                  className="text-concept-ink/60 font-label build-part text-[0.75em] tracking-[0.16em]"
                >
                  {line}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

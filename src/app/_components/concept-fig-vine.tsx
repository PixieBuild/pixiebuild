const beat = {
  logo: 0,
  book: 0.02,
  headline: 0.14,
  headlineStep: 0.1,
  rule: 0.42,
  detail: 0.48,
  detailStep: 0.04,
};

const part = (at: number) => ({ "--beat": at }) as React.CSSProperties;

const headline = [
  { word: "Seasonal.", accent: false },
  { word: "Slow.", accent: false },
  { word: "Local.", accent: true },
];

const detail = ["MENU — SPRING", "DINNER 18:00—23:00", "34 ALBION STREET"];

export function ConceptFigVine() {
  return (
    <div className="relative w-full">
      <div
        aria-hidden
        className="concept-stage shadow-elev-2 relative w-full overflow-hidden border select-none [--concept-height:760] [--concept-width:1200] lg:w-[min(100cqw,calc(100cqh*1.5789),61.25rem)]"
      >
        <div className="concept-page concept-theme-ink bg-concept-canvas text-concept-ink font-display absolute top-0 left-0">
          <span
            aria-hidden
            className="bg-concept-clay absolute inset-x-0 bottom-0 z-10 h-[0.9%]"
          />
          <div
            aria-hidden
            className="bg-concept-stripes absolute inset-0 opacity-25"
          />

          <div className="relative flex h-20 items-center justify-between px-14">
            <span
              style={part(beat.logo)}
              className="font-label build-part text-[1.25em] tracking-[0.16em]"
            >
              FIG &amp; VINE
            </span>
            <span
              style={part(beat.book)}
              className="font-label build-part text-[1.25em] tracking-[0.16em]"
            >
              RESERVE A TABLE
            </span>
          </div>

          <div className="relative flex gap-10 px-14">
            <p className="min-w-0 flex-1 pt-25 text-[8.75em] leading-[0.87] font-medium tracking-[-0.035em]">
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

            <div className="w-80 shrink-0 pt-55">
              <span
                aria-hidden
                style={part(beat.rule)}
                className="bg-concept-ink/25 build-part block h-px w-full"
              />

              <div className="mt-8 flex flex-col gap-4.5">
                {detail.map((line, index) => (
                  <span
                    key={line}
                    style={part(beat.detail + index * beat.detailStep)}
                    className="text-concept-ink/60 font-label build-part text-[1.1875em] tracking-[0.16em]"
                  >
                    {line}
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

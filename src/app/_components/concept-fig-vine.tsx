import { cn } from "@/lib/utils";

const beat = {
  logo: 0,
  link: 0.02,
  linkStep: 0.015,
  book: 0.08,
  headline: 0.14,
  headlineStep: 0.08,
  figure: 0.34,
  rule: 0.4,
  detail: 0.44,
  detailStep: 0.03,
  panel: 0.52,
  slot: 0.56,
  slotStep: 0.02,
};

const part = (at: number) => ({ "--beat": at }) as React.CSSProperties;

const links = ["MENU", "STORY"];

const headline = [
  { word: "Seasonal.", accent: false },
  { word: "Slow.", accent: false },
  { word: "Local.", accent: true },
];

const detail = ["MENU — SPRING", "DINNER 18:00—23:00", "34 ALBION STREET"];

const slots = ["18:00", "18:30", "19:00", "19:30", "20:00", "20:30"];

const taken = 3;

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

          <div className="border-concept-line relative flex h-20 items-center justify-between border-b px-14">
            <span
              style={part(beat.logo)}
              className="font-label build-part text-[1.25em] tracking-[0.16em]"
            >
              FIG &amp; VINE
            </span>

            <div className="flex items-center gap-9">
              {links.map((link, index) => (
                <span
                  key={link}
                  style={part(beat.link + index * beat.linkStep)}
                  className="text-concept-muted font-label build-part text-[1.125em] tracking-[0.16em]"
                >
                  {link}
                </span>
              ))}
              <span
                style={part(beat.book)}
                className="bg-concept-clay text-concept-canvas font-label build-part flex h-11 items-center px-6 text-[1.125em] tracking-[0.16em]"
              >
                RESERVE
              </span>
            </div>
          </div>

          <div className="relative flex h-152 gap-12 px-14 pt-14">
            <div className="flex min-w-0 flex-1 flex-col">
              <p className="text-[4.5em] leading-[0.95] font-medium tracking-[-0.035em]">
                {headline.map((line, index) => (
                  <span
                    key={line.word}
                    style={part(beat.headline + index * beat.headlineStep)}
                    className={cn(
                      "build-part block",
                      line.accent && "text-concept-clay",
                    )}
                  >
                    {line.word}
                  </span>
                ))}
              </p>

              <div
                style={part(beat.panel)}
                className="border-concept-line build-part mt-auto border p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="font-label text-[1.0625em] tracking-[0.16em]">
                    TONIGHT — 24 MAY
                  </span>
                  <span className="text-concept-muted font-label flex items-center gap-2.5 text-[1.0625em] tracking-[0.16em]">
                    <span
                      aria-hidden
                      className="bg-concept-clay animate-build-pulse build-idle size-2 rounded-full"
                    />
                    3 TABLES LEFT
                  </span>
                </div>

                <div className="mt-6 flex gap-3">
                  {slots.map((slot, index) => (
                    <span
                      key={slot}
                      style={part(beat.slot + index * beat.slotStep)}
                      className={cn(
                        "border-concept-line font-label build-part relative flex h-14 min-w-0 flex-1 items-center justify-center border text-[1.0625em] tracking-[0.16em] tabular-nums",
                        index === taken
                          ? "text-concept-ink"
                          : "text-concept-muted",
                      )}
                    >
                      {slot}
                      {index === taken && (
                        <span
                          aria-hidden
                          className="border-concept-clay bg-concept-clay/12 build-act absolute -inset-px border-2"
                        />
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex w-96 shrink-0 flex-col">
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

              <div
                style={part(beat.figure)}
                className="build-part relative mt-10 flex-1 overflow-hidden"
              >
                <span
                  aria-hidden
                  className="bg-concept-stripes animate-build-drift build-idle absolute inset-0"
                />
                <span className="text-concept-muted font-label absolute bottom-5 left-6 text-[1.0625em] tracking-[0.16em]">
                  THE DINING ROOM
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

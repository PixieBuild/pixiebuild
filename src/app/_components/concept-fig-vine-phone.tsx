import Image from "next/image";

import { cn } from "@/lib/utils";

const beat = {
  logo: 0,
  book: 0.03,
  figure: 0.1,
  headline: 0.24,
  headlineStep: 0.07,
  panel: 0.48,
  slot: 0.54,
  slotStep: 0.03,
};

const part = (at: number) => ({ "--beat": at }) as React.CSSProperties;

const headline = [
  { word: "Seasonal.", accent: false },
  { word: "Slow.", accent: false },
  { word: "Local.", accent: true },
];

const slots = ["18:30", "19:30", "20:30"];

const taken = 1;

export function ConceptFigVinePhone() {
  return (
    <div className="relative w-full">
      <div
        aria-hidden
        className="concept-stage shadow-elev-2 relative w-full overflow-hidden border select-none [--concept-height:500] [--concept-width:380]"
      >
        <div className="concept-page concept-theme-ink bg-concept-canvas text-concept-ink font-display absolute top-0 left-0">
          <span
            aria-hidden
            className="bg-concept-clay absolute inset-x-0 bottom-0 z-10 h-[1.4%]"
          />

          <div className="border-concept-line relative flex h-14 items-center justify-between border-b px-5">
            <span
              style={part(beat.logo)}
              className="font-label build-part text-[0.75em] tracking-[0.16em]"
            >
              FIG &amp; VINE
            </span>
            <span
              style={part(beat.book)}
              className="bg-concept-clay text-concept-canvas font-label build-part flex h-8 items-center px-3 text-[0.6875em] tracking-[0.16em]"
            >
              RESERVE
            </span>
          </div>

          <div
            style={part(beat.figure)}
            className="build-part relative h-40 overflow-hidden"
          >
            <Image
              src="/concept/dining.webp"
              alt=""
              fill
              sizes="80vw"
              className="animate-build-drift build-idle object-cover"
            />
          </div>

          <div className="px-5 pt-6">
            <p className="text-[2.125em] leading-[0.95] font-medium tracking-[-0.035em]">
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
              className="border-concept-line build-part mt-6 border p-4"
            >
              <div className="flex items-center justify-between">
                <span className="font-label text-[0.625em] tracking-[0.16em]">
                  BOOK TONIGHT
                </span>
                <span className="text-concept-muted font-label flex items-center gap-2 text-[0.625em] tracking-[0.16em]">
                  <span
                    aria-hidden
                    className="bg-concept-clay animate-build-pulse build-idle size-1.5 rounded-full"
                  />
                  3 LEFT
                </span>
              </div>

              <div className="mt-3.5 flex gap-2.5">
                {slots.map((slot, index) => (
                  <span
                    key={slot}
                    style={part(beat.slot + index * beat.slotStep)}
                    className={cn(
                      "border-concept-line font-label build-part relative flex h-10 min-w-0 flex-1 items-center justify-center border text-[0.625em] tracking-[0.16em] tabular-nums",
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
        </div>
      </div>
    </div>
  );
}

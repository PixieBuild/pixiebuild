import Image from "next/image";

import { cn } from "@/lib/utils";

const beat = {
  logo: 0,
  link: 0.02,
  linkStep: 0.015,
  book: 0.08,
  figure: 0.16,
  headline: 0.22,
  headlineStep: 0.07,
  menu: 0.4,
  dish: 0.44,
  dishStep: 0.03,
  panel: 0.54,
  slot: 0.58,
  slotStep: 0.02,
};

const part = (at: number) => ({ "--beat": at }) as React.CSSProperties;

const links = ["MENU", "STORY"];

const headline = [
  { word: "Seasonal.", accent: false },
  { word: "Slow.", accent: false },
  { word: "Local.", accent: true },
];

const dishes = [
  { name: "Hearth bread, cultured butter", price: "6" },
  { name: "Grilled turbot, brown shrimp", price: "28" },
  { name: "Fig leaf custard, honeycomb", price: "9" },
];

const slots = ["18:30", "19:00", "19:30", "20:30"];

const taken = 2;

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

          <div className="flex h-160">
            <div className="flex w-165 shrink-0 flex-col">
              <div
                style={part(beat.figure)}
                className="build-part relative h-105 overflow-hidden"
              >
                <Image
                  src="/concept/dining.webp"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 34vw, 60vw"
                  className="animate-build-drift build-idle object-cover"
                />
              </div>

              <div className="flex min-h-0 flex-1 flex-col px-14 pt-8">
                <span
                  style={part(beat.menu)}
                  className="text-concept-ink/50 font-label build-part text-[1.0625em] tracking-[0.16em]"
                >
                  SEASONAL MENU
                </span>

                <div className="mt-5 flex flex-col gap-3.5">
                  {dishes.map((dish, index) => (
                    <span
                      key={dish.name}
                      style={part(beat.dish + index * beat.dishStep)}
                      className="build-part flex items-baseline justify-between gap-5 text-[1.125em]"
                    >
                      <span className="min-w-0">{dish.name}</span>
                      <span className="text-concept-ink/50 font-label tabular-nums">
                        {dish.price}
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex min-w-0 flex-1 flex-col px-14 pt-14">
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
                className="border-concept-line build-part mt-auto mb-14 border p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="font-label text-[1.0625em] tracking-[0.16em]">
                    BOOK A TABLE TONIGHT
                  </span>
                  <span className="text-concept-muted font-label flex items-center gap-2.5 text-[1.0625em] tracking-[0.16em]">
                    <span
                      aria-hidden
                      className="bg-concept-clay animate-build-pulse build-idle size-2 rounded-full"
                    />
                    3 LEFT
                  </span>
                </div>

                <div className="mt-6 flex gap-2.5">
                  {slots.map((slot, index) => (
                    <span
                      key={slot}
                      style={part(beat.slot + index * beat.slotStep)}
                      className={cn(
                        "border-concept-line font-label build-part relative flex h-13 min-w-0 flex-1 items-center justify-center border text-[1em] tracking-[0.12em] tabular-nums",
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
    </div>
  );
}

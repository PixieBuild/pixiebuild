import { RiMenuLine } from "@remixicon/react";

import { cn } from "@/lib/utils";

const beat = {
  logo: 0,
  menu: 0.02,
  poster: 0.1,
  posterStep: 0.1,
  rule: 0.4,
  headline: 0.44,
  swatch: 0.5,
  swatchStep: 0.03,
};

const part = (at: number) => ({ "--beat": at }) as React.CSSProperties;

const posters = [
  {
    glyph: "H",
    name: "Helios Atlas",
    tone: "bg-concept-clay text-concept-chalk",
    place: "left-0 -rotate-6",
  },
  {
    glyph: "N",
    name: "North Battery",
    tone: "bg-concept-gold text-concept-ink",
    place: "left-[31%] top-3 rotate-2",
  },
  {
    glyph: "C",
    name: "Casa Meridian",
    tone: "bg-concept-ink text-concept-chalk",
    place: "right-0 top-1 rotate-[7deg]",
  },
];

const swatches = [
  "bg-concept-clay",
  "bg-concept-gold",
  "bg-concept-ink",
  "bg-concept-chalk border-concept-line border",
];

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

          <div className="relative flex h-14 items-center justify-between px-5">
            <span
              style={part(beat.logo)}
              className="font-label build-part text-[0.75em] tracking-[0.16em]"
            >
              ATELIER FOSS
            </span>
            <RiMenuLine
              style={part(beat.menu)}
              className="text-concept-ink build-part size-4"
            />
          </div>

          <div className="absolute top-20 right-5 left-5 h-64">
            {posters.map((poster, index) => (
              <div
                key={poster.name}
                style={part(beat.poster + index * beat.posterStep)}
                className={cn(
                  "build-part shadow-elev-2 absolute flex h-56 w-36 flex-col justify-between p-3.5",
                  poster.tone,
                  poster.place,
                )}
              >
                <span className="text-[6.5em] leading-[0.78] font-semibold tracking-[-0.06em]">
                  {poster.glyph}
                </span>
                <span className="text-[0.6875em] font-medium tracking-[-0.01em]">
                  {poster.name}
                </span>
              </div>
            ))}
          </div>

          <div
            style={part(beat.rule)}
            className="border-concept-line build-part absolute inset-x-5 bottom-5 flex items-end justify-between border-t pt-3.5"
          >
            <div style={part(beat.headline)} className="build-part">
              <p className="text-[1.375em] leading-none font-semibold tracking-[-0.04em]">
                Form matters<span className="text-concept-clay">.</span>
              </p>
              <span className="text-concept-muted font-label mt-1.5 block text-[0.5em] tracking-[0.16em]">
                INDEPENDENT BRAND STUDIO
              </span>
            </div>

            <span className="flex items-center gap-2 pb-0.5">
              {swatches.map((swatch, index) => (
                <span
                  key={swatch}
                  style={part(beat.swatch + index * beat.swatchStep)}
                  className={cn("build-part size-4 rounded-full", swatch)}
                />
              ))}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

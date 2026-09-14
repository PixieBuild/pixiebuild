import { RiArrowRightUpLine } from "@remixicon/react";

import { cn } from "@/lib/utils";

const beat = {
  logo: 0,
  link: 0.02,
  linkStep: 0.015,
  poster: 0.1,
  posterStep: 0.1,
  rule: 0.4,
  headline: 0.44,
  specimen: 0.48,
  swatch: 0.52,
  swatchStep: 0.03,
};

const part = (at: number) => ({ "--beat": at }) as React.CSSProperties;

const links = ["WORK", "STUDIO", "CONTACT"];

const posters = [
  {
    glyph: "H",
    name: "Helios Atlas",
    field: "AEROSPACE",
    tone: "bg-concept-clay text-concept-chalk",
    place: "left-14 -rotate-6",
    depth: 0.6,
  },
  {
    glyph: "N",
    name: "North Battery",
    field: "MUSEUM",
    tone: "bg-concept-gold text-concept-ink",
    place: "left-[37%] top-6 rotate-2",
    depth: 1,
  },
  {
    glyph: "C",
    name: "Casa Meridian",
    field: "HOSPITALITY",
    tone: "bg-concept-ink text-concept-chalk",
    place: "right-14 top-2 rotate-[7deg]",
    depth: 1.4,
  },
];

const swatches = [
  { tone: "bg-concept-clay", name: "CLAY" },
  { tone: "bg-concept-gold", name: "GOLD" },
  { tone: "bg-concept-ink", name: "INK" },
  { tone: "bg-concept-chalk border-concept-line border", name: "CHALK" },
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

          <div className="relative flex h-20 items-center justify-between px-14">
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
                      className="bg-concept-ink build-act absolute -bottom-2 left-0 h-px w-full origin-left scale-x-(--act,1)"
                    />
                  )}
                </span>
              ))}
            </div>
          </div>

          <div className="absolute top-28 right-0 left-0 h-108">
            {posters.map((poster, index) => (
              <div
                key={poster.name}
                style={{ "--depth": poster.depth } as React.CSSProperties}
                className={cn("build-layer absolute", poster.place)}
              >
                <div
                  style={part(beat.poster + index * beat.posterStep)}
                  className={cn(
                    "build-part shadow-elev-2 flex h-100 w-76 flex-col justify-between p-7",
                    poster.tone,
                  )}
                >
                  <span className="text-[13em] leading-[0.78] font-semibold tracking-[-0.06em]">
                    {poster.glyph}
                  </span>
                  <span className="flex items-end justify-between">
                    <span className="flex flex-col gap-1">
                      <span className="text-[1.25em] font-medium tracking-[-0.02em]">
                        {poster.name}
                      </span>
                      <span className="font-label text-[0.8125em] tracking-[0.16em] opacity-70">
                        {poster.field}
                      </span>
                    </span>
                    <RiArrowRightUpLine className="size-6 opacity-80" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div
            style={part(beat.rule)}
            className="border-concept-line build-part absolute inset-x-14 bottom-10 flex items-end justify-between border-t pt-6"
          >
            <div style={part(beat.headline)} className="build-part">
              <p className="text-[2.25em] leading-none font-semibold tracking-[-0.04em]">
                Form matters<span className="text-concept-clay">.</span>
              </p>
              <span className="text-concept-muted font-label mt-3 block text-[0.875em] tracking-[0.16em]">
                INDEPENDENT BRAND STUDIO — 12 PROJECTS
              </span>
            </div>

            <div
              style={part(beat.specimen)}
              className="build-part flex items-baseline gap-4"
            >
              <span className="font-concept-display text-[3em] leading-none tracking-[-0.02em] italic">
                Aa
              </span>
              <span className="text-[3em] leading-none font-semibold tracking-tighter">
                Gg
              </span>
            </div>

            <div className="flex items-center gap-4">
              {swatches.map((swatch, index) => (
                <span
                  key={swatch.name}
                  style={part(beat.swatch + index * beat.swatchStep)}
                  className="build-part flex flex-col items-center gap-2"
                >
                  <span className={cn("size-8 rounded-full", swatch.tone)} />
                  <span className="text-concept-muted font-label text-[0.6875em] tracking-[0.16em]">
                    {swatch.name}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

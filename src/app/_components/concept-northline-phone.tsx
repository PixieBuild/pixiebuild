import Image from "next/image";
import { RiHotelBedLine, RiMenuLine, RiRulerLine } from "@remixicon/react";

const beat = {
  figure: 0,
  logo: 0.08,
  menu: 0.1,
  chip: 0.18,
  card: 0.26,
  spec: 0.34,
  specStep: 0.03,
  price: 0.42,
  tile: 0.36,
  tileStep: 0.04,
};

const part = (at: number) => ({ "--beat": at }) as React.CSSProperties;

const specs = [
  { icon: RiHotelBedLine, text: "4 BED" },
  { icon: RiRulerLine, text: "2,860 SQ FT" },
];

const gallery = [
  "/concept/estate-kitchen.webp",
  "/concept/estate-bedroom.webp",
  "/concept/estate-garden.webp",
  "/concept/estate-facade.webp",
];

export function ConceptNorthlinePhone() {
  return (
    <div className="relative w-full">
      <div
        aria-hidden
        className="concept-stage shadow-elev-2 relative w-full overflow-hidden border select-none [--concept-height:500] [--concept-width:380]"
      >
        <div className="concept-page concept-theme-ink bg-concept-canvas text-concept-ink font-display absolute top-0 left-0">
          <div style={part(beat.figure)} className="build-part absolute inset-0">
            <Image
              src="/concept/estate-hero.webp"
              alt=""
              fill
              sizes="80vw"
              className="animate-build-drift build-idle object-cover object-[62%_45%]"
            />
            <span className="from-concept-scrim/90 via-concept-scrim/20 absolute inset-0 bg-linear-to-t to-transparent" />
            <span className="from-concept-scrim/55 absolute inset-x-0 top-0 h-24 bg-linear-to-b to-transparent" />
          </div>

          <span
            aria-hidden
            className="bg-concept-clay absolute inset-x-0 bottom-0 z-10 h-[1.4%]"
          />

          <div className="relative flex h-14 items-center justify-between px-5">
            <span
              style={part(beat.logo)}
              className="build-part text-[0.9375em] font-semibold tracking-[-0.02em]"
            >
              Northline Homes
            </span>
            <RiMenuLine
              style={part(beat.menu)}
              className="build-part size-4"
            />
          </div>

          <span
            style={part(beat.chip)}
            className="bg-concept-clay text-concept-canvas font-label build-part absolute top-16 left-5 flex h-7 items-center gap-2 px-3 text-[0.5625em] tracking-[0.16em]"
          >
            <span aria-hidden className="bg-concept-canvas animate-build-pulse build-idle size-1.5 rounded-full" />
            OPEN HOUSE SAT 11:00
          </span>

          <div className="absolute inset-x-4 bottom-4">
            <div className="mb-3 flex gap-2">
              {gallery.map((photo, index) => (
                <span
                  key={photo}
                  style={part(beat.tile + index * beat.tileStep)}
                  className="build-part relative h-12 min-w-0 flex-1 overflow-hidden"
                >
                  <Image
                    src={photo}
                    alt=""
                    fill
                    sizes="20vw"
                    className="object-cover"
                  />
                </span>
              ))}
            </div>

            <div
              style={part(beat.card)}
              className="bg-concept-canvas/85 border-concept-ink/15 build-part border p-4 backdrop-blur-xl"
            >
              <span className="text-concept-ink/60 font-label text-[0.5em] tracking-[0.16em]">
                KORAMANGALA, BENGALURU
              </span>
              <p className="mt-1 text-[1.5em] leading-none font-semibold tracking-[-0.035em]">
                Villa Arbor
              </p>
              <div className="mt-3 flex items-center gap-4">
                {specs.map((spec, index) => (
                  <span
                    key={spec.text}
                    style={part(beat.spec + index * beat.specStep)}
                    className="text-concept-ink/80 font-label build-part flex items-center gap-1.5 text-[0.5625em] tracking-[0.14em]"
                  >
                    <spec.icon className="size-3" />
                    {spec.text}
                  </span>
                ))}
              </div>
              <div className="border-concept-ink/15 mt-3 flex items-end justify-between border-t pt-3">
                <span
                  style={part(beat.price)}
                  className="build-part text-[1.5em] leading-none font-semibold tracking-[-0.04em] tabular-nums"
                >
                  ₹4.2 Cr
                </span>
                <span className="bg-concept-clay text-concept-canvas font-label flex h-8 items-center px-3 text-[0.5625em] tracking-[0.16em]">
                  BOOK A VIEWING
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

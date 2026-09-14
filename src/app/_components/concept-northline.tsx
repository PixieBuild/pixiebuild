import Image from "next/image";
import {
  RiArrowRightLine,
  RiDropLine,
  RiHotelBedLine,
  RiRulerLine,
} from "@remixicon/react";

const beat = {
  figure: 0,
  logo: 0.08,
  link: 0.1,
  linkStep: 0.015,
  book: 0.16,
  chip: 0.22,
  card: 0.28,
  spec: 0.36,
  specStep: 0.03,
  price: 0.44,
  cta: 0.5,
  gallery: 0.4,
  tile: 0.44,
  tileStep: 0.04,
};

const part = (at: number) => ({ "--beat": at }) as React.CSSProperties;

const links = ["BUY", "RENT", "SELL"];

const specs = [
  { icon: RiHotelBedLine, text: "4 BED" },
  { icon: RiDropLine, text: "3 BATH" },
  { icon: RiRulerLine, text: "2,860 SQ FT" },
];

const gallery = [
  "/concept/estate-kitchen.webp",
  "/concept/estate-bedroom.webp",
  "/concept/estate-garden.webp",
  "/concept/estate-facade.webp",
];

export function ConceptNorthline() {
  return (
    <div className="relative w-full">
      <div
        aria-hidden
        className="concept-stage shadow-elev-2 relative w-full overflow-hidden border select-none [--concept-height:760] [--concept-width:1200] lg:w-[min(100cqw,calc(100cqh*1.5789),61.25rem)]"
      >
        <div className="concept-page concept-theme-ink bg-concept-canvas text-concept-ink font-display absolute top-0 left-0">
          <div className="build-layer absolute -inset-6 [--depth:-0.5]">
            <div style={part(beat.figure)} className="build-part absolute inset-0">
              <Image
                src="/concept/estate-hero.webp"
                /* The only preloaded image on the site: it measures as LCP,
                   and its sizes resolve to the same 80vw the phone frame asks
                   for below 1024px, so one preload serves both variants. */
                priority
                alt=""
                fill
                sizes="(min-width: 1024px) 50vw, 80vw"
                className="animate-build-drift build-idle object-cover object-[60%_45%]"
              />
              <span className="from-concept-scrim/80 via-concept-scrim/10 absolute inset-0 bg-linear-to-t to-transparent" />
              <span className="from-concept-scrim/45 absolute inset-x-0 top-0 h-40 bg-linear-to-b to-transparent" />
            </div>
          </div>

          <span
            aria-hidden
            className="bg-concept-clay absolute inset-x-0 bottom-0 z-10 h-[0.9%]"
          />

          <div className="relative flex h-20 items-center justify-between px-14">
            <span
              style={part(beat.logo)}
              className="build-part text-[1.375em] font-semibold tracking-[-0.02em]"
            >
              Northline Homes
            </span>

            <div className="flex items-center gap-9">
              {links.map((link, index) => (
                <span
                  key={link}
                  style={part(beat.link + index * beat.linkStep)}
                  className="text-concept-ink/75 font-label build-part text-[1.125em] tracking-[0.16em]"
                >
                  {link}
                </span>
              ))}
              <span
                style={part(beat.book)}
                className="bg-concept-canvas text-concept-ink font-label build-part flex h-11 items-center px-6 text-[1em] tracking-[0.16em]"
              >
                BOOK A VIEWING
              </span>
            </div>
          </div>

          <span
            style={part(beat.chip)}
            className="bg-concept-clay text-concept-canvas font-label build-part absolute top-28 left-14 flex h-10 items-center gap-3 px-4 text-[0.9375em] tracking-[0.16em]"
          >
            <span aria-hidden className="bg-concept-canvas animate-build-pulse build-idle size-2 rounded-full" />
            JUST LISTED · OPEN HOUSE SAT 11:00
          </span>

          <div className="build-layer absolute bottom-12 left-14 w-[42%] [--depth:0.9]">
            <div
              style={part(beat.card)}
              className="bg-concept-canvas/85 border-concept-ink/15 shadow-elev-2 build-part border p-7 backdrop-blur-xl"
            >
              <span className="text-concept-ink/60 font-label text-[0.8125em] tracking-[0.16em]">
                HYDE PARK, AUSTIN
              </span>
              <p className="mt-2 text-[2.25em] leading-none font-semibold tracking-[-0.035em]">
                Villa Arbor
              </p>

              <div className="mt-5 flex items-center gap-6">
                {specs.map((spec, index) => (
                  <span
                    key={spec.text}
                    style={part(beat.spec + index * beat.specStep)}
                    className="text-concept-ink/80 font-label build-part flex items-center gap-2 text-[0.875em] tracking-[0.14em]"
                  >
                    <spec.icon className="size-4" />
                    {spec.text}
                  </span>
                ))}
              </div>

              <div className="border-concept-ink/15 mt-6 flex items-end justify-between border-t pt-5">
                <span style={part(beat.price)} className="build-part flex flex-col">
                  <span className="text-concept-ink/60 font-label text-[0.75em] tracking-[0.16em]">
                    ASKING
                  </span>
                  <span className="mt-1 text-[2.5em] leading-none font-semibold tracking-[-0.04em] tabular-nums">
                    $1.24M
                  </span>
                </span>
                <span
                  style={part(beat.cta)}
                  className="bg-concept-clay text-concept-canvas font-label build-part flex h-12 items-center gap-3 px-6 text-[0.9375em] tracking-[0.16em]"
                >
                  BOOK A VIEWING
                  <RiArrowRightLine className="size-4" />
                </span>
              </div>
            </div>
          </div>

          <div className="build-layer absolute right-14 bottom-12 [--depth:1.2]">
            <div style={part(beat.gallery)} className="build-part">
              <span className="text-concept-ink/70 font-label mb-3 block text-right text-[0.8125em] tracking-[0.16em]">
                12 PHOTOS · FLOOR PLAN · 3D TOUR
              </span>
              <div className="relative flex gap-3">
                <span
                  aria-hidden
                  style={{ "--pitch": "calc(var(--spacing) * 31)" } as React.CSSProperties}
                  className="border-concept-canvas motion-safe:animate-gallery-step build-idle absolute -top-1 -left-1 h-[calc(100%+0.5rem)] w-30 border-2"
                />
                {gallery.map((photo, index) => (
                  <span
                    key={photo}
                    style={part(beat.tile + index * beat.tileStep)}
                    className="build-part relative h-20 w-28 overflow-hidden"
                  >
                    <Image
                      src={photo}
                      alt=""
                      fill
                      sizes="8vw"
                      className="object-cover"
                    />
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

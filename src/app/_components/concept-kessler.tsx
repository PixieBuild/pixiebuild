import Image from "next/image";
import { RiArrowRightLine } from "@remixicon/react";

const beat = {
  panel: 0,
  logo: 0.06,
  link: 0.08,
  linkStep: 0.015,
  bag: 0.12,
  sticker: 0.16,
  photo: 0.2,
  photoStep: 0.1,
  cta: 0.4,
  note: 0.46,
};

const part = (at: number) => ({ "--beat": at }) as React.CSSProperties;

const links = ["SHOP", "ABOUT"];

const ring = "NEW SEASON · AUTUMN DROP · 12 PIECES · ";

export function ConceptKessler() {
  return (
    <div className="relative w-full">
      <div
        aria-hidden
        className="concept-stage shadow-elev-2 relative w-full overflow-hidden border select-none [--concept-height:760] [--concept-width:1200] lg:w-[min(100cqw,calc(100cqh*1.5789),61.25rem)]"
      >
        <div className="concept-page concept-theme-cool bg-concept-shell text-concept-ink font-display absolute top-0 left-0">
          <div
            style={part(beat.panel)}
            className="bg-concept-clay build-part absolute inset-y-0 left-0 w-[44%]"
          />

          <span
            aria-hidden
            className="bg-concept-ink absolute inset-x-0 bottom-0 z-10 h-[0.9%]"
          />

          <div className="build-layer absolute top-20 right-0 bottom-0 left-[44%] overflow-hidden [--depth:-0.4]">
            <div
              style={part(beat.photo)}
              className="build-part absolute -inset-6"
            >
              <Image
                src="/concept/ceramics.webp"
                alt=""
                fill
                loading="eager"
                sizes="(min-width: 1024px) 28vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="relative flex h-20 items-center justify-between px-14">
            <span
              style={part(beat.logo)}
              className="text-concept-chalk build-part text-[1.75em] font-semibold tracking-[-0.02em]"
            >
              Kessler Goods
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
                style={part(beat.bag)}
                className="bg-concept-ink text-concept-chalk font-label build-part relative flex h-9 items-center px-4 text-[1em] tracking-[0.16em] tabular-nums"
              >
                <span
                  aria-hidden
                  className="build-act-out absolute inset-0 flex items-center px-4"
                >
                  CART (2)
                </span>
                <span className="build-act">CART (3)</span>
              </span>
            </div>
          </div>

          <div className="build-layer absolute top-30 left-16 size-88 [--depth:1.2]">
            <div
              style={part(beat.sticker)}
              className="bg-concept-chalk text-concept-ink shadow-elev-2 build-part relative size-full rounded-full"
            >
              <svg
                viewBox="0 0 200 200"
                className="motion-safe:animate-build-spin build-idle absolute inset-0 size-full"
              >
                <defs>
                  <path
                    id="kessler-ring"
                    d="M100,100 m-76,0 a76,76 0 1,1 152,0 a76,76 0 1,1 -152,0"
                  />
                </defs>
                <text className="font-label fill-current" fontSize="11.5" letterSpacing="2.6">
                  <textPath href="#kessler-ring">{ring}</textPath>
                </text>
              </svg>
              <div className="absolute inset-[22%] flex flex-col items-center justify-center rounded-full text-center">
                <span className="text-[5em] leading-none font-semibold tracking-[-0.05em]">
                  12
                </span>
                <span className="text-concept-muted font-label mt-1 text-[0.8125em] tracking-[0.16em]">
                  NEW PIECES
                </span>
              </div>
            </div>
          </div>

          <div className="build-layer absolute top-32 right-14 w-64 [--depth:0.9]">
            <div
              style={part(beat.photo + beat.photoStep)}
              className="build-part shadow-elev-2 motion-safe:animate-build-float build-idle relative h-64 overflow-hidden"
            >
              <Image
                src="/concept/bowl.webp"
                alt=""
                fill
                loading="eager"
                sizes="(min-width: 1024px) 14vw, 30vw"
                className="object-cover"
              />
              <span className="bg-concept-clay text-concept-chalk font-label absolute top-4 left-4 flex h-8 items-center px-3 text-[0.9375em] tracking-[0.16em]">
                OAK BOWL — $92
              </span>
            </div>
          </div>

          <div className="build-layer absolute bottom-12 left-[38%] w-60 [--depth:1.6]">
            <div
              style={{ ...part(beat.photo + beat.photoStep * 2), animationDelay: "1.6s" }}
              className="build-part shadow-elev-2 motion-safe:animate-build-float build-idle relative h-56 overflow-hidden"
            >
              <Image
                src="/concept/cutlery.webp"
                alt=""
                fill
                loading="eager"
                sizes="(min-width: 1024px) 12vw, 25vw"
                className="object-cover"
              />
              <span className="bg-concept-clay text-concept-chalk font-label absolute top-4 left-4 flex h-8 items-center px-3 text-[0.9375em] tracking-[0.16em]">
                CUTLERY — $64
              </span>
              <span className="bg-concept-ink text-concept-chalk font-label build-act absolute right-4 bottom-4 flex h-8 items-center px-3 text-[0.875em] tracking-[0.16em]">
                ADDED
              </span>
            </div>
          </div>

          <div className="text-concept-chalk absolute bottom-14 left-14">
            <span
              style={part(beat.cta)}
              className="bg-concept-chalk text-concept-ink font-label build-part flex h-12 w-max items-center gap-3 px-6 text-[1em] tracking-[0.16em]"
            >
              SHOP THE SHELF
              <RiArrowRightLine className="size-4" />
            </span>
          </div>

          <span
            style={part(beat.note)}
            className="bg-concept-chalk text-concept-ink font-label build-part absolute right-12 bottom-12 flex h-10 items-center px-4 text-[0.9375em] tracking-[0.16em]"
          >
            STUDIO CERAMICS — FROM $28
          </span>
        </div>
      </div>
    </div>
  );
}

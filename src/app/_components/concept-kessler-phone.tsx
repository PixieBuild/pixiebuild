import Image from "next/image";
import { RiArrowRightLine } from "@remixicon/react";

const beat = {
  panel: 0,
  logo: 0.06,
  bag: 0.1,
  sticker: 0.16,
  photo: 0.24,
  photoStep: 0.1,
  cta: 0.36,
};

const part = (at: number) => ({ "--beat": at }) as React.CSSProperties;

const ring = "NEW SEASON · AUTUMN DROP · 12 PIECES · ";

export function ConceptKesslerPhone() {
  return (
    <div className="relative w-full">
      <div
        aria-hidden
        className="concept-stage shadow-elev-2 relative w-full overflow-hidden border select-none [--concept-height:500] [--concept-width:380]"
      >
        <div className="concept-page concept-theme-cool bg-concept-shell text-concept-ink font-display absolute top-0 left-0">
          <div
            style={part(beat.panel)}
            className="bg-concept-clay build-part absolute inset-x-0 top-0 h-[54%]"
          />

          <span
            aria-hidden
            className="bg-concept-ink absolute inset-x-0 bottom-0 z-10 h-[1.4%]"
          />

          <div className="text-concept-chalk relative flex h-14 items-center justify-between px-5">
            <span
              style={part(beat.logo)}
              className="build-part text-[1.0625em] font-semibold tracking-[-0.02em]"
            >
              Kessler Goods
            </span>
            <span
              style={part(beat.bag)}
              className="bg-concept-ink text-concept-chalk font-label build-part flex h-6 items-center px-2.5 text-[0.625em] tracking-[0.16em] tabular-nums"
            >
              CART (3)
            </span>
          </div>

          <div
            style={part(beat.sticker)}
            className="bg-concept-chalk text-concept-ink shadow-elev-2 build-part absolute top-18 left-5 size-40 rounded-full"
          >
            <svg
              viewBox="0 0 200 200"
              className="motion-safe:animate-build-spin build-idle absolute inset-0 size-full"
            >
              <defs>
                <path
                  id="kessler-ring-phone"
                  d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0"
                />
              </defs>
              <text className="font-label fill-current" fontSize="12.5" letterSpacing="2.4">
                <textPath href="#kessler-ring-phone">{ring}</textPath>
              </text>
            </svg>
            <div className="absolute inset-[24%] flex flex-col items-center justify-center text-center">
              <span className="text-[2.75em] leading-none font-semibold tracking-[-0.05em]">
                12
              </span>
              <span className="text-concept-muted font-label mt-0.5 text-[0.5em] tracking-[0.16em]">
                NEW PIECES
              </span>
            </div>
          </div>

          <span
            style={part(beat.cta)}
            className="bg-concept-chalk text-concept-ink font-label build-part absolute top-56 left-5 flex h-8 items-center gap-2 px-4 text-[0.625em] tracking-[0.16em]"
          >
            SHOP THE SHELF
            <RiArrowRightLine className="size-3.5" />
          </span>

          <div
            style={part(beat.photo)}
            className="build-part absolute top-14 right-0 bottom-0 left-[58%] overflow-hidden"
          >
            <Image
              src="/concept/ceramics.webp"
              alt=""
              fill
              loading="eager"
              sizes="40vw"
              className="object-cover"
            />
          </div>

          <div
            style={part(beat.photo + beat.photoStep)}
            className="build-part shadow-elev-2 motion-safe:animate-build-float build-idle absolute bottom-6 left-5 h-36 w-40 overflow-hidden"
          >
            <Image
              src="/concept/bowl.webp"
              alt=""
              fill
              loading="eager"
              sizes="40vw"
              className="object-cover"
            />
            <span className="bg-concept-clay text-concept-chalk font-label absolute top-3 left-3 flex h-6 items-center px-2 text-[0.5625em] tracking-[0.16em]">
              OAK BOWL — $92
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

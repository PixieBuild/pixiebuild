"use client";

import {
  RiArrowRightUpLine,
  RiLockLine,
  RiMenuLine,
  RiStarFill,
} from "@remixicon/react";
import Image from "next/image";

/* The order this page puts itself together in, top down. */
const beat = {
  logo: 0,
  menu: 0.05,
  rating: 0.14,
  eyebrow: 0.22,
  headline: 0.32,
  copy: 0.44,
  booking: 0.56,
  house: 0.68,
  card: 0.78,
};

const part = (at: number) => ({ "--beat": at }) as React.CSSProperties;

const photo = {
  harbour: "/concept/harbour.webp",
  room: "/concept/room.webp",
};

const stay = [
  { label: "Arrival", value: "Fri 12 June" },
  { label: "Departure", value: "Sun 14 June" },
];

export function HeroBuildPhone() {
  return (
    <div className="relative mx-auto w-full max-w-105">
      <div
        aria-hidden
        className="bg-build-glow pointer-events-none absolute inset-0 rounded-xl"
      />

      <div
        aria-hidden
        className="concept-stage shadow-elev-2 relative overflow-hidden rounded-xl border select-none [--concept-height:780] [--concept-width:390]"
      >
        <div className="concept-page concept-theme bg-concept-canvas text-concept-ink font-concept absolute top-0 left-0">
          <div className="border-concept-line bg-concept-shell flex h-11 items-center gap-3 border-b px-4">
            <div className="bg-concept-canvas border-concept-line flex h-7 flex-1 items-center justify-center gap-2 rounded-full border">
              <RiLockLine className="text-concept-muted size-3" />
              <span className="text-concept-muted text-[0.75em]">
                calaverde.com
              </span>
            </div>
          </div>

          <div className="relative h-105 overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src={photo.harbour}
                alt=""
                fill
                loading="eager"
                sizes="(min-width: 1152px) 1024px, 100vw"
                className="object-cover object-center"
              />
              <div className="from-concept-scrim/90 via-concept-scrim/40 absolute inset-0 bg-linear-to-t to-transparent" />
              <div className="from-concept-scrim/70 absolute inset-x-0 top-0 h-24 bg-linear-to-b to-transparent" />
            </div>

            <div className="relative flex h-14 items-center justify-between px-5">
              <span
                style={part(beat.logo)}
                className="font-concept-display text-concept-chalk build-part text-[1.25em] tracking-[0.22em]"
              >
                CALA VERDE
              </span>
              <RiMenuLine
                style={part(beat.menu)}
                className="text-concept-chalk build-part size-5"
              />
            </div>

            <div
              style={part(beat.rating)}
              className="border-concept-chalk/20 bg-concept-scrim/55 text-concept-chalk build-part absolute top-16 right-5 flex items-center gap-2 rounded-full border px-3 py-1.5"
            >
              <span className="text-concept-gold flex gap-0.5">
                {[0, 1, 2, 3, 4].map(star => (
                  <RiStarFill key={star} className="size-2.5" />
                ))}
              </span>
              <span className="text-[0.6875em]">4.9</span>
            </div>

            <div className="relative px-5 pt-32">
              <span
                style={part(beat.eyebrow)}
                className="text-concept-chalk/70 build-part flex items-center gap-2 text-[0.625em] font-medium tracking-[0.3em] uppercase"
              >
                <span aria-hidden className="bg-concept-chalk/40 h-px w-5" />
                Liguria, Italy
              </span>

              <p
                style={part(beat.headline)}
                className="font-concept-display text-concept-chalk build-part mt-4 text-[2.5em] leading-[0.98]"
              >
                Where the sea
                <br />
                keeps time.
              </p>

              <p
                style={part(beat.copy)}
                className="text-concept-chalk/80 build-part mt-3 text-[0.875em] leading-relaxed"
              >
                Eleven rooms above the harbour, and a sea pool cut into the
                rock.
              </p>
            </div>
          </div>

          <div
            style={part(beat.booking)}
            className="bg-concept-canvas border-concept-line concept-lift build-part relative z-10 mx-5 -mt-8 rounded-[0.5em] border p-4"
          >
            <div className="flex items-start gap-4">
              {stay.map((field, index) => (
                <div
                  key={field.label}
                  className={
                    index > 0
                      ? "border-concept-line min-w-0 flex-1 border-l pl-4"
                      : "min-w-0 flex-1"
                  }
                >
                  <p className="text-concept-muted text-[0.625em] font-medium tracking-[0.18em] uppercase">
                    {field.label}
                  </p>
                  <p className="mt-1 text-[0.9375em] font-medium">
                    {field.value}
                  </p>
                </div>
              ))}
            </div>

            <span className="bg-concept-clay text-concept-chalk mt-4 flex h-11 items-center justify-center gap-2 rounded-[0.4em] text-[0.875em] font-medium">
              Check availability
              <RiArrowRightUpLine className="size-4" />
            </span>
          </div>

          <div className="px-5 pt-7">
            <div
              style={part(beat.house)}
              className="build-part flex items-end justify-between"
            >
              <p className="font-concept-display text-[1.25em]">The house</p>
              <span className="text-concept-clay flex items-center gap-1 text-[0.625em] font-medium tracking-[0.18em] uppercase">
                Explore
                <RiArrowRightUpLine className="size-3" />
              </span>
            </div>

            <div style={part(beat.card)} className="build-part mt-4">
              <div className="relative h-24 overflow-hidden rounded-[0.4em]">
                <Image
                  src={photo.room}
                  alt=""
                  fill
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="mt-2.5 flex items-baseline justify-between gap-3">
                <p className="text-[0.9375em] font-medium">Eleven rooms</p>
                <p className="text-concept-muted text-[0.75em]">from €340</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

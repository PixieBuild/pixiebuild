"use client";

import {
  RiArrowRightUpLine,
  RiLockLine,
  RiMore2Fill,
  RiStarFill,
} from "@remixicon/react";
import Image from "next/image";

import { cn } from "@/lib/utils";

/* The order the page puts itself together in, top down, spaced so parts land
   one after another rather than together. The first is on zero: something has
   to move as soon as the build appears. The frame and the photograph carry no
   beat — they are what the rest lands on. */
const beat = {
  logo: 0,
  link: 0.04,
  linkStep: 0.03,
  book: 0.18,
  eyebrow: 0.24,
  headline: 0.32,
  copy: 0.42,
  rating: 0.5,
  booking: 0.58,
  house: 0.64,
  card: 0.71,
  cardStep: 0.05,
};

const part = (at: number) => ({ "--beat": at }) as React.CSSProperties;

const photo = {
  harbour: "/concept/harbour.webp",
  room: "/concept/room.webp",
  table: "/concept/table.webp",
  pool: "/concept/pool.webp",
};

const lights = ["bg-red-400", "bg-amber-400", "bg-emerald-500"];

const links = ["Rooms", "The Table", "Spa", "Journal"];

const stay = [
  { label: "Arrival", value: "Fri 12 June" },
  { label: "Departure", value: "Sun 14 June" },
  { label: "Guests", value: "2 adults, 1 room" },
];

const house = [
  { title: "Eleven rooms", meta: "from €340", image: photo.room },
  { title: "The Table", meta: "Dinner, Tue–Sun", image: photo.table },
  { title: "Sea pool & sauna", meta: "Open all year", image: photo.pool },
];

export function HeroBuild() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="bg-build-glow pointer-events-none absolute inset-0 rounded-xl"
      />

      <div
        aria-hidden
        className="concept-stage shadow-elev-2 relative overflow-hidden rounded-xl border select-none [--concept-width:1200] lg:[--concept-width:1366]"
      >
        <div className="concept-page concept-theme bg-concept-canvas text-concept-ink font-concept absolute top-0 left-0">
          <div className="border-concept-line bg-concept-shell flex h-11 items-center gap-4 border-b px-5">
            <div className="flex w-16 shrink-0 items-center gap-2">
              {lights.map(light => (
                <span
                  key={light}
                  className={cn("size-2.5 rounded-full", light)}
                />
              ))}
            </div>

            <div className="bg-concept-canvas border-concept-line mx-auto flex h-7 w-80 items-center justify-center gap-2 rounded-full border">
              <RiLockLine className="text-concept-muted size-3" />
              <span className="text-concept-muted text-[0.8125em]">
                calaverde.com
              </span>
            </div>

            <div className="flex w-16 shrink-0 justify-end">
              <RiMore2Fill className="text-concept-ink/35 size-4" />
            </div>
          </div>

          <div className="relative h-140 overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src={photo.harbour}
                alt=""
                fill
                loading="eager"
                sizes="(min-width: 1152px) 1024px, 100vw"
                className="object-cover object-center"
              />
              <div className="from-concept-scrim/85 via-concept-scrim/25 absolute inset-0 bg-linear-to-r to-transparent" />
              <div className="from-concept-scrim/70 absolute inset-x-0 top-0 h-44 bg-linear-to-b to-transparent" />
            </div>

            <div className="relative flex h-21 items-center justify-between px-14">
              <span
                style={part(beat.logo)}
                className="font-concept-display text-concept-chalk ease-interface build-part cursor-pointer text-[1.625em] tracking-[0.24em] transition-opacity duration-150 hover:opacity-75"
              >
                CALA VERDE
              </span>

              <div className="flex items-center gap-9">
                {links.map((link, index) => (
                  <span
                    key={link}
                    style={part(beat.link + index * beat.linkStep)}
                    className="text-concept-chalk/75 hover:text-concept-chalk ease-interface after:bg-concept-chalk build-part relative cursor-pointer text-[0.8125em] transition-colors duration-200 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100"
                  >
                    {link}
                  </span>
                ))}
                <span
                  style={part(beat.book)}
                  className="border-concept-chalk/40 text-concept-chalk hover:bg-concept-chalk hover:text-concept-scrim hover:border-concept-chalk ease-interface build-part ml-2 cursor-pointer rounded-full border px-5 py-2 text-[0.8125em] font-medium transition-colors duration-200"
                >
                  Book a stay
                </span>
              </div>
            </div>

            <div className="relative px-14 pt-20">
              <span
                style={part(beat.eyebrow)}
                className="text-concept-chalk/70 build-part flex items-center gap-3 text-[0.6875em] font-medium tracking-[0.3em] uppercase"
              >
                <span aria-hidden className="bg-concept-chalk/40 h-px w-8" />
                Liguria, Italy — Est. 1961
              </span>

              <p
                style={part(beat.headline)}
                className="font-concept-display text-concept-chalk build-part mt-7 text-[4.75em] leading-[0.98]"
              >
                Where the sea
                <br />
                keeps time.
              </p>

              <p
                style={part(beat.copy)}
                className="text-concept-chalk/80 build-part mt-6 max-w-[44ch] text-[1.0625em] leading-relaxed"
              >
                Eleven rooms above the harbour, a kitchen that opens at seven,
                and a sea pool cut into the rock.
              </p>
            </div>

            <div
              style={part(beat.rating)}
              className="border-concept-chalk/20 bg-concept-scrim/55 text-concept-chalk build-part absolute right-14 bottom-19 flex items-center gap-2.5 rounded-full border px-4 py-2"
            >
              <span className="text-concept-gold flex gap-0.5">
                {[0, 1, 2, 3, 4].map(star => (
                  <RiStarFill key={star} className="size-3" />
                ))}
              </span>
              <span className="text-[0.8125em]">4.9 · 412 guest reviews</span>
            </div>
          </div>

          <div
            style={part(beat.booking)}
            className="bg-concept-canvas border-concept-line concept-lift build-part relative z-10 mx-14 -mt-12 flex h-24 items-center rounded-[0.45em] border pr-3 pl-8"
          >
            {stay.map((field, index) => (
              <div
                key={field.label}
                className={cn(
                  "min-w-0 flex-1 pr-8",
                  index > 0 && "border-concept-line border-l pl-8",
                )}
              >
                <p className="text-concept-muted text-[0.6875em] font-medium tracking-[0.18em] uppercase">
                  {field.label}
                </p>
                <p className="mt-1.5 text-[1.0625em] font-medium">
                  {field.value}
                </p>
              </div>
            ))}

            <span className="bg-concept-clay text-concept-chalk hover:bg-concept-clay/85 ease-interface group flex h-15 shrink-0 cursor-pointer items-center gap-2 rounded-[0.36em] px-8 text-[0.9375em] font-medium transition-colors duration-200">
              Check availability
              <RiArrowRightUpLine className="ease-interface size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>

          <div className="px-14 pt-11">
            <div
              style={part(beat.house)}
              className="build-part flex items-end justify-between"
            >
              <p className="font-concept-display text-[1.625em]">The house</p>
              <span className="text-concept-clay hover:text-concept-clay/75 ease-interface group flex cursor-pointer items-center gap-1.5 text-[0.75em] font-medium tracking-[0.18em] uppercase transition-colors duration-200">
                Explore everything
                <RiArrowRightUpLine className="ease-interface size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-6">
              {house.map((item, index) => (
                <div
                  key={item.title}
                  style={part(beat.card + index * beat.cardStep)}
                  className="build-part group cursor-pointer"
                >
                  <div className="relative h-36 overflow-hidden rounded-[0.36em]">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      sizes="(min-width: 1152px) 300px, 30vw"
                      className="ease-interface object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-3.5 flex items-baseline justify-between gap-3">
                    <p className="group-hover:text-concept-clay ease-interface text-[1em] font-medium transition-colors duration-200">
                      {item.title}
                    </p>
                    <p className="text-concept-muted text-[0.8125em]">
                      {item.meta}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import {
  RiArrowRightUpLine,
  RiLockLine,
  RiMore2Fill,
  RiStarFill,
} from "@remixicon/react";
import { useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

import { cn } from "@/lib/utils";

const beat = {
  frame: 200,
  photo: 300,
  wordmark: 620,
  link: 680,
  linkStep: 45,
  eyebrow: 860,
  headline: 920,
  copy: 1020,
  rating: 1100,
  booking: 1160,
  section: 1340,
  card: 1400,
  cardStep: 90,
};

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
  const still = useReducedMotion();
  const frame = useRef<HTMLDivElement>(null);
  const seen = useInView(frame, { once: true, margin: "0px 0px -15% 0px" });

  return (
    <div className="relative">
      <div
        aria-hidden
        className="bg-brand-glow pointer-events-none absolute -inset-x-10 -inset-y-12"
      />

      <div
        ref={frame}
        aria-hidden
        style={{ animationDelay: `${beat.frame}ms` }}
        className={cn(
          "concept-stage shadow-elev-2 motion-reduce:animate-none relative animate-build-frame overflow-hidden rounded-xl border select-none [--concept-width:1200] lg:[--concept-width:1366]",
          !seen && !still && "concept-hold",
        )}
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
              <span className="text-concept-muted text-[13px]">
                calaverde.com
              </span>
            </div>

            <div className="flex w-16 shrink-0 justify-end">
              <RiMore2Fill className="text-concept-ink/35 size-4" />
            </div>
          </div>

          <div className="relative h-140 overflow-hidden">
            <div
              style={{ animationDelay: `${beat.photo}ms` }}
              className="motion-reduce:animate-none absolute inset-0 animate-concept-settle"
            >
              <div
                style={{ backgroundImage: `url("${photo.harbour}")` }}
                className="absolute inset-0 bg-cover bg-center"
              />
              <div className="from-concept-scrim/85 via-concept-scrim/25 absolute inset-0 bg-linear-to-r to-transparent" />
              <div className="from-concept-scrim/70 absolute inset-x-0 top-0 h-44 bg-linear-to-b to-transparent" />
            </div>

            <div className="relative flex h-21 items-center justify-between px-14">
              <span
                style={{ animationDelay: `${beat.wordmark}ms` }}
                className="font-concept-display text-concept-chalk ease-interface motion-reduce:animate-none animate-build-place cursor-pointer text-[26px] tracking-[0.24em] transition-opacity duration-150 hover:opacity-75"
              >
                CALA VERDE
              </span>

              <div className="flex items-center gap-9">
                {links.map((link, index) => (
                  <span
                    key={link}
                    style={{
                      animationDelay: `${beat.link + index * beat.linkStep}ms`,
                    }}
                    className="text-concept-chalk/75 hover:text-concept-chalk ease-interface after:bg-concept-chalk motion-reduce:animate-none relative animate-build-place cursor-pointer text-[13px] transition-colors duration-200 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100"
                  >
                    {link}
                  </span>
                ))}
                <span
                  style={{
                    animationDelay: `${beat.link + links.length * beat.linkStep}ms`,
                  }}
                  className="border-concept-chalk/40 text-concept-chalk hover:bg-concept-chalk hover:text-concept-scrim hover:border-concept-chalk ease-interface motion-reduce:animate-none ml-2 animate-build-place cursor-pointer rounded-full border px-5 py-2 text-[13px] font-medium transition-colors duration-200"
                >
                  Book a stay
                </span>
              </div>
            </div>

            <div className="relative px-14 pt-20">
              <span
                style={{ animationDelay: `${beat.eyebrow}ms` }}
                className="text-concept-chalk/70 motion-reduce:animate-none flex animate-build-place items-center gap-3 text-[11px] font-medium tracking-[0.3em] uppercase"
              >
                <span aria-hidden className="bg-concept-chalk/40 h-px w-8" />
                Liguria, Italy — Est. 1961
              </span>

              <p
                style={{ animationDelay: `${beat.headline}ms` }}
                className="font-concept-display text-concept-chalk motion-reduce:animate-none mt-7 animate-build-place text-[76px] leading-[0.98]"
              >
                Where the sea
                <br />
                keeps time.
              </p>

              <p
                style={{ animationDelay: `${beat.copy}ms` }}
                className="text-concept-chalk/80 motion-reduce:animate-none mt-6 max-w-[44ch] animate-build-place text-[17px] leading-relaxed"
              >
                Eleven rooms above the harbour, a kitchen that opens at seven,
                and a sea pool cut into the rock.
              </p>
            </div>

            <div
              style={{ animationDelay: `${beat.rating}ms` }}
              className="border-concept-chalk/20 bg-concept-scrim/30 text-concept-chalk motion-reduce:animate-none absolute right-14 bottom-19 flex animate-build-place items-center gap-2.5 rounded-full border px-4 py-2 backdrop-blur-md"
            >
              <span className="text-concept-gold flex gap-0.5">
                {[0, 1, 2, 3, 4].map(star => (
                  <RiStarFill key={star} className="size-3" />
                ))}
              </span>
              <span className="text-[13px]">4.9 · 412 guest reviews</span>
            </div>
          </div>

          <div
            style={{ animationDelay: `${beat.booking}ms` }}
            className="bg-concept-canvas border-concept-line concept-lift motion-reduce:animate-none relative z-10 mx-14 -mt-12 flex h-24 animate-build-place items-center rounded-lg border pr-3 pl-8"
          >
            {stay.map((field, index) => (
              <div
                key={field.label}
                className={cn(
                  "min-w-0 flex-1 pr-8",
                  index > 0 && "border-concept-line border-l pl-8",
                )}
              >
                <p className="text-concept-muted text-[11px] font-medium tracking-[0.18em] uppercase">
                  {field.label}
                </p>
                <p className="mt-1.5 text-[17px] font-medium">{field.value}</p>
              </div>
            ))}

            <span className="bg-concept-clay text-concept-chalk hover:bg-concept-clay/85 ease-interface group flex h-15 shrink-0 cursor-pointer items-center gap-2 rounded-md px-8 text-[15px] font-medium transition-colors duration-200">
              Check availability
              <RiArrowRightUpLine className="ease-interface size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>

          <div className="px-14 pt-11">
            <div
              style={{ animationDelay: `${beat.section}ms` }}
              className="motion-reduce:animate-none flex animate-build-place items-end justify-between"
            >
              <p className="font-concept-display text-[26px]">The house</p>
              <span className="text-concept-clay hover:text-concept-clay/75 ease-interface group flex cursor-pointer items-center gap-1.5 text-xs font-medium tracking-[0.18em] uppercase transition-colors duration-200">
                Explore everything
                <RiArrowRightUpLine className="ease-interface size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-6">
              {house.map((item, index) => (
                <div
                  key={item.title}
                  style={{
                    animationDelay: `${beat.card + index * beat.cardStep}ms`,
                  }}
                  className="motion-reduce:animate-none group animate-build-place cursor-pointer"
                >
                  <div className="h-36 overflow-hidden rounded-md">
                    <div
                      style={{ backgroundImage: `url("${item.image}")` }}
                      className="ease-interface size-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-3.5 flex items-baseline justify-between gap-3">
                    <p className="group-hover:text-concept-clay ease-interface text-base font-medium transition-colors duration-200">
                      {item.title}
                    </p>
                    <p className="text-concept-muted text-[13px]">
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

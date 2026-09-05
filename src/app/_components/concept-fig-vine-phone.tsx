import Image from "next/image";

import { cn } from "@/lib/utils";

const beat = {
  figure: 0,
  logo: 0.08,
  book: 0.12,
  headline: 0.2,
  panel: 0.28,
  day: 0.34,
  dayStep: 0.006,
  room: 0.44,
  roomStep: 0.06,
};

const part = (at: number) => ({ "--beat": at }) as React.CSSProperties;

const days = Array.from({ length: 21 }, (_, index) => index + 1);

const stay = { from: 12, to: 15 };

const rooms = [
  { name: "Loft", price: "₹8,900", photo: "/concept/hotel-loft.webp" },
  { name: "Courtyard suite", price: "₹12,500", photo: "/concept/hotel-suite.webp" },
];

export function ConceptFigVinePhone() {
  return (
    <div className="relative w-full">
      <div
        aria-hidden
        className="concept-stage shadow-elev-2 relative w-full overflow-hidden border select-none [--concept-height:500] [--concept-width:380]"
      >
        <div className="concept-page concept-theme-ink bg-concept-canvas text-concept-ink font-display absolute top-0 left-0">
          <div style={part(beat.figure)} className="build-part absolute inset-0">
            <Image
              src="/concept/hotel-room.webp"
              alt=""
              fill
              loading="eager"
              sizes="80vw"
              className="object-cover object-[32%_50%]"
            />
            <span className="bg-concept-scrim motion-safe:animate-room-dusk build-idle absolute inset-0" />
            <span className="from-concept-gold/85 via-concept-gold/25 motion-safe:animate-room-lamp build-idle absolute top-[34%] left-[6%] size-36 rounded-full bg-radial to-transparent blur-2xl" />
            <span className="from-concept-scrim/90 via-concept-scrim/35 absolute inset-0 bg-linear-to-t to-transparent" />
          </div>

          <span
            aria-hidden
            className="bg-concept-clay absolute inset-x-0 bottom-0 z-10 h-[1.4%]"
          />

          <div className="relative flex h-14 items-center justify-between px-5">
            <span
              style={part(beat.logo)}
              className="font-label build-part text-[0.75em] tracking-[0.16em]"
            >
              FIG &amp; VINE
            </span>
            <span
              style={part(beat.book)}
              className="bg-concept-clay text-concept-canvas font-label build-part flex h-7 items-center px-3 text-[0.625em] tracking-[0.16em]"
            >
              RESERVE
            </span>
          </div>

          <div className="absolute top-18 left-5">
            <p
              style={part(beat.headline)}
              className="font-concept-display build-part text-[2.5em] leading-[0.9] tracking-[-0.02em] italic"
            >
              Stay <span className="text-concept-clay">slow.</span>
            </p>
          </div>

          <div className="absolute inset-x-4 bottom-4 flex flex-col gap-2.5">
            <div
              style={part(beat.panel)}
              className="bg-concept-canvas/80 border-concept-ink/15 build-part border p-3.5 backdrop-blur-xl"
            >
              <div className="flex items-baseline justify-between">
                <span className="text-[0.8125em] font-medium">October</span>
                <span className="text-concept-ink/60 font-label text-[0.5em] tracking-[0.16em]">
                  12 → 15 · 2 GUESTS
                </span>
              </div>
              <div className="relative mt-2 grid grid-cols-7 gap-y-0.5 text-center">
                <span
                  aria-hidden
                  className="bg-concept-clay motion-safe:animate-cal-range build-idle absolute top-[calc(33.33%+0.0625rem)] left-[57.14%] h-[calc(33.33%-0.125rem)] w-[42.86%] origin-left rounded-full"
                />
                <span
                  aria-hidden
                  style={{ animationDelay: "0.35s" }}
                  className="bg-concept-clay motion-safe:animate-cal-range build-idle absolute top-[calc(66.66%+0.0625rem)] left-0 h-[calc(33.33%-0.125rem)] w-[14.28%] origin-left rounded-full"
                />
                {days.map((day, index) => (
                  <span
                    key={day}
                    style={part(beat.day + index * beat.dayStep)}
                    className={cn(
                      "font-label build-part relative flex h-5 items-center justify-center text-[0.5em] tabular-nums",
                      day >= stay.from && day <= stay.to
                        ? "text-concept-canvas font-medium"
                        : "text-concept-ink/80",
                    )}
                  >
                    {day}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-2">
              {rooms.map((room, index) => (
                <div
                  key={room.name}
                  style={part(beat.room + index * beat.roomStep)}
                  className={cn(
                    "bg-concept-canvas/80 border-concept-ink/15 build-part flex min-w-0 flex-1 items-center gap-2.5 border p-2 pr-3 backdrop-blur-xl",
                    index === 0 && "border-concept-clay",
                  )}
                >
                  <span className="relative h-10 w-14 shrink-0 overflow-hidden">
                    <Image
                      src={room.photo}
                      alt=""
                      fill
                      loading="eager"
                      sizes="15vw"
                      className="object-cover"
                    />
                  </span>
                  <span className="flex min-w-0 flex-col">
                    <span className="truncate text-[0.6875em] font-medium">
                      {room.name}
                    </span>
                    <span className="font-label text-[0.5625em] tracking-[0.08em] tabular-nums">
                      {room.price}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

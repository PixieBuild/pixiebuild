import Image from "next/image";

import { cn } from "@/lib/utils";

const beat = {
  figure: 0,
  logo: 0.08,
  link: 0.1,
  linkStep: 0.015,
  book: 0.16,
  panel: 0.2,
  day: 0.3,
  dayStep: 0.005,
  headline: 0.26,
  caption: 0.34,
  rooms: 0.4,
  room: 0.44,
  roomStep: 0.06,
};

const part = (at: number) => ({ "--beat": at }) as React.CSSProperties;

const links = ["ROOMS", "KITCHEN", "STORY"];

const weekdays = ["M", "T", "W", "T", "F", "S", "S"];

const days = Array.from({ length: 28 }, (_, index) => index + 1);

const stay = { from: 12, to: 15 };

const rooms = [
  { name: "Loft", price: "₹8,900", photo: "/concept/hotel-loft.webp", left: "1 LEFT" },
  { name: "Courtyard", price: "₹12,500", photo: "/concept/hotel-suite.webp", left: "2 LEFT" },
  { name: "The Kitchen", price: "6PM", photo: "/concept/hotel-kitchen.webp", left: "TILL LATE" },
];

export function ConceptFigVine() {
  return (
    <div className="relative w-full">
      <div
        aria-hidden
        className="concept-stage shadow-elev-2 relative w-full overflow-hidden border select-none [--concept-height:760] [--concept-width:1200] lg:w-[min(100cqw,calc(100cqh*1.5789),61.25rem)]"
      >
        <div className="concept-page concept-theme-ink bg-concept-canvas text-concept-ink font-display absolute top-0 left-0">
          <div className="build-layer absolute -inset-6 [--depth:-0.6]">
            <div style={part(beat.figure)} className="build-part absolute inset-0">
              <Image
                src="/concept/hotel-room.webp"
                alt=""
                fill
                sizes="(min-width: 1024px) 50vw, 80vw"
                className="object-cover object-[40%_50%]"
              />
              <span className="bg-concept-scrim motion-safe:animate-room-dusk build-idle absolute inset-0" />
              <span className="from-concept-gold/85 via-concept-gold/25 motion-safe:animate-room-lamp build-idle absolute top-[34%] left-[10%] size-56 rounded-full bg-radial to-transparent blur-2xl" />
              <span className="from-concept-scrim/85 via-concept-scrim/20 absolute inset-0 bg-linear-to-t to-transparent" />
            </div>
          </div>

          <span
            aria-hidden
            className="bg-concept-clay absolute inset-x-0 bottom-0 z-10 h-[0.9%]"
          />

          <div className="relative flex h-20 items-center justify-between px-14">
            <span
              style={part(beat.logo)}
              className="font-label build-part text-[1.25em] tracking-[0.16em]"
            >
              FIG &amp; VINE
            </span>

            <div className="flex items-center gap-9">
              {links.map((link, index) => (
                <span
                  key={link}
                  style={part(beat.link + index * beat.linkStep)}
                  className="text-concept-ink/70 font-label build-part text-[1.125em] tracking-[0.16em]"
                >
                  {link}
                </span>
              ))}
              <span
                style={part(beat.book)}
                className="bg-concept-clay text-concept-canvas font-label build-part flex h-11 items-center px-6 text-[1.125em] tracking-[0.16em]"
              >
                RESERVE
              </span>
            </div>
          </div>

          <div className="build-layer absolute top-26 right-14 w-88 [--depth:1.1]">
            <div
              style={part(beat.panel)}
              className="bg-concept-canvas/80 border-concept-ink/15 shadow-elev-2 build-part border p-6 backdrop-blur-xl"
            >
              <div className="flex items-baseline justify-between">
                <span className="text-[1.0625em] font-medium tracking-[-0.01em]">
                  October
                </span>
                <span className="text-concept-ink/60 font-label text-[0.75em] tracking-[0.16em]">
                  12 → 15 · 2 GUESTS
                </span>
              </div>

              <div className="text-concept-ink/50 font-label mt-4 grid grid-cols-7 text-center text-[0.6875em] tracking-[0.1em]">
                {weekdays.map((day, index) => (
                  <span key={index}>{day}</span>
                ))}
              </div>

              <div className="relative mt-1.5 grid grid-cols-7 gap-y-0.5 text-center">
                <span
                  aria-hidden
                  className="bg-concept-clay motion-safe:animate-cal-range build-idle absolute top-[calc(25%+0.0625rem)] left-[57.14%] h-[calc(25%-0.125rem)] w-[42.86%] origin-left rounded-full"
                />
                <span
                  aria-hidden
                  style={{ animationDelay: "0.35s" }}
                  className="bg-concept-clay motion-safe:animate-cal-range build-idle absolute top-[calc(50%+0.0625rem)] left-0 h-[calc(25%-0.125rem)] w-[14.28%] origin-left rounded-full"
                />
                {days.map((day, index) => (
                  <span
                    key={day}
                    style={part(beat.day + index * beat.dayStep)}
                    className={cn(
                      "font-label build-part relative flex h-8 items-center justify-center text-[0.8125em] tabular-nums",
                      day >= stay.from && day <= stay.to
                        ? "text-concept-canvas font-medium"
                        : "text-concept-ink/80",
                    )}
                  >
                    {day}
                  </span>
                ))}
              </div>

              <span className="bg-concept-ink text-concept-canvas font-label build-act mt-5 flex h-11 items-center justify-center text-[0.9375em] tracking-[0.16em]">
                BOOK 3 NIGHTS — ₹19,200
              </span>
            </div>
          </div>

          <div className="build-layer absolute top-30 left-14 [--depth:0.5]">
            <p
              style={part(beat.headline)}
              className="font-concept-display build-part text-[5.5em] leading-[0.9] tracking-[-0.02em] italic"
            >
              Stay <span className="text-concept-clay">slow.</span>
            </p>
            <span
              style={part(beat.caption)}
              className="text-concept-ink/75 font-label build-part mt-4 block text-[1em] tracking-[0.16em]"
            >
              TWELVE ROOMS ABOVE THE KITCHEN
            </span>
          </div>

          <div className="absolute inset-x-14 bottom-12">
            <span
              style={part(beat.rooms)}
              className="text-concept-ink/70 font-label build-part mb-4 flex items-center justify-between text-[0.8125em] tracking-[0.16em]"
            >
              <span>GARDEN ROOM — ₹6,400 · 3 LEFT TONIGHT</span>
              <span className="motion-safe:animate-room-lamp build-idle flex items-center gap-2">
                <span aria-hidden className="bg-concept-clay animate-build-pulse size-1.5 rounded-full" />
                LAMPS ON · 18:40
              </span>
            </span>
            <div className="flex gap-4">
              {rooms.map((room, index) => (
                <div
                  key={room.name}
                  style={part(beat.room + index * beat.roomStep)}
                  className={cn(
                    "bg-concept-canvas/80 border-concept-ink/15 build-part flex min-w-0 flex-1 items-center gap-4 border p-3 pr-5 backdrop-blur-xl",
                    index === 0 && "border-concept-clay",
                  )}
                >
                  <span className="relative h-20 w-28 shrink-0 overflow-hidden">
                    <Image
                      src={room.photo}
                      alt=""
                      fill
                      sizes="8vw"
                      className="object-cover"
                    />
                  </span>
                  <span className="flex min-w-0 flex-1 flex-col">
                    <span className="truncate text-[1.0625em] font-medium tracking-[-0.01em]">
                      {room.name}
                    </span>
                    <span className="text-concept-ink/60 font-label mt-1 text-[0.75em] tracking-[0.14em]">
                      {room.left}
                    </span>
                  </span>
                  <span className="font-label text-[0.9375em] tracking-[0.08em] tabular-nums">
                    {room.price}
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

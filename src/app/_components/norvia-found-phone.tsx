import {
  RiMapPin2Line,
  RiSearchLine,
  RiSparkling2Fill,
  RiStarFill,
} from "@remixicon/react";
import Image from "next/image";

export function NorviaFoundPhone() {
  return (
    <div className="concept-page concept-theme-cool bg-concept-canvas text-concept-ink font-display absolute top-0 left-0 flex flex-col">
      <div className="border-concept-ink/10 flex shrink-0 items-center gap-3 border-b px-4 py-3">
        <span className="border-concept-ink/15 bg-concept-chalk flex flex-1 items-center gap-2 rounded-full border px-3.5 py-2 text-[0.8em]">
          <RiSearchLine className="text-concept-muted size-[1.1em] shrink-0" />
          <span className="truncate">ceramics classes near hudson</span>
        </span>
      </div>

      <div className="flex min-h-0 flex-1 flex-col gap-4 px-4 py-4">
        <div className="border-concept-clay/40 bg-concept-chalk flex flex-col gap-1.5 border-l-2 py-1 pl-3.5">
          <span className="flex items-center gap-1.5 text-[0.62em]">
            <span className="bg-concept-clay text-concept-canvas font-label flex size-[1.6em] items-center justify-center rounded-full text-[0.7em]">
              N
            </span>
            norvia.com › classes
          </span>
          <span className="text-[0.95em] leading-snug font-medium">
            Beginners&apos; wheel classes in Hudson — Norvia
          </span>
          <span className="text-concept-muted text-[0.72em] leading-relaxed">
            Saturday classes at the wheel. Eight seats, tools and clay
            included. Next class 3 Oct, two seats left.
          </span>
          <span className="flex items-center gap-1.5 text-[0.66em]">
            <span className="text-concept-clay flex items-center gap-0.5">
              {[0, 1, 2, 3, 4].map(star => (
                <RiStarFill key={star} className="size-[1em]" />
              ))}
            </span>
            <span className="text-concept-muted">4.9 · 38 reviews</span>
          </span>
        </div>

        <div className="border-concept-ink/10 bg-concept-shell flex flex-col gap-2.5 border p-3.5">
          <span className="text-concept-muted font-label flex items-center gap-1.5 text-[0.55em] tracking-[0.2em]">
            <RiSparkling2Fill className="text-concept-clay size-[1.3em]" />
            AN ASSISTANT ANSWERS
          </span>
          <p className="text-[0.78em] leading-relaxed">
            Norvia runs beginners&apos; wheel classes on Saturday mornings in
            Hudson. The next one with seats is{" "}
            <span className="font-medium">3 October</span>, $85 a seat.
          </p>
          <div className="bg-concept-canvas border-concept-ink/10 flex items-center gap-3 border p-2">
            <span className="bg-concept-shell relative size-9 shrink-0 overflow-hidden">
              <Image
                src="/concept/norvia-wheel.webp"
                alt=""
                fill
                sizes="48px"
                className="object-cover"
              />
            </span>
            <span className="flex min-w-0 flex-col">
              <span className="truncate text-[0.74em] font-medium">
                Book a seat — Norvia
              </span>
              <span className="text-concept-muted text-[0.62em]">
                norvia.com/classes
              </span>
            </span>
          </div>
        </div>

        <div className="border-concept-ink/10 mt-auto flex items-center gap-3 border p-3">
          <RiMapPin2Line className="text-concept-clay size-[1.2em] shrink-0" />
          <span className="flex min-w-0 flex-1 flex-col">
            <span className="text-[0.78em] font-medium">Norvia</span>
            <span className="text-concept-muted truncate text-[0.66em]">
              Warren St, Hudson · Open Thu to Sat
            </span>
          </span>
          <span className="text-concept-clay flex items-center gap-1 text-[0.7em]">
            <RiStarFill className="size-[1em]" />
            4.9
          </span>
        </div>
      </div>
    </div>
  );
}

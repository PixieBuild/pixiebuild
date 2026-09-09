"use client";

import { RiLinksLine, RiLock2Line } from "@remixicon/react";

import { BriefCard } from "@/app/_components/brief-card";
import { BriefSheet } from "@/app/_components/brief-sheet";
import { NorviaHome } from "@/app/_components/norvia-home";
import { NorviaHomePhone } from "@/app/_components/norvia-home-phone";
import { ReviewPin, type Pin } from "@/app/_components/review-pin";
import { cn } from "@/lib/utils";

const vars = (values: Record<string, string | number>) =>
  values as React.CSSProperties;

const cue = (beat: number, span: number) =>
  ({ "--beat": beat, "--span": span }) as React.CSSProperties;

const pins: { page: Pin[]; phone: Pin[] } = {
  page: [
    {
      n: 1,
      text: "Can it say what has sold out? People drove in for bowls that were gone.",
      left: "20%",
      top: "57%",
      show: 0.05,
      done: 0.62,
    },
    {
      n: 2,
      text: "Show how many seats are left. That is what fills a class.",
      left: "44%",
      top: "64%",
      show: 0.25,
      done: 0.68,
      flip: true,
    },
    {
      n: 3,
      text: "Add the market hours. We get asked every week.",
      left: "22%",
      top: "90%",
      show: 0.42,
      done: 0.74,
    },
  ],
  phone: [
    {
      n: 1,
      text: "Say where we are, up top.",
      left: "8%",
      top: "22%",
      show: 0.05,
      done: 0.62,
    },
    {
      n: 2,
      text: "Can it say what has sold out?",
      left: "10%",
      top: "54%",
      show: 0.25,
      done: 0.68,
    },
    {
      n: 3,
      text: "Show how many seats are left.",
      left: "10%",
      top: "79%",
      show: 0.42,
      done: 0.74,
    },
  ],
};

const asked = [
  "Stock shown on every piece",
  "Seats left on every class",
  "Market hours in the footer",
];

const proof = [
  { value: "2 hrs", name: "TO THE FIRST ORDER" },
  { value: "31", name: "ORDERS, WEEK ONE" },
  { value: "16", name: "CLASS SEATS FILLED" },
  { value: "5", name: "COMMISSION ENQUIRIES" },
];

const swatches = ["bg-concept-chalk", "bg-concept-clay", "bg-concept-gold"];

export function ProcessFrame({
  live,
  phone = false,
}: {
  live: boolean;
  phone?: boolean;
}) {
  return (
    <div
      className={cn(
        "concept-stage concept-theme-paper bg-concept-canvas text-concept-ink shadow-elev-2 border-concept-ink/15 relative w-full overflow-hidden border",
        phone
          ? "[--concept-height:532] [--concept-width:360]"
          : "[--concept-height:960] [--concept-width:1200]",
      )}
    >
      <div
        style={vars({ "--a": "var(--a0)", "--gone": "var(--e1)" })}
        className="stage-layer absolute inset-0"
      >
        {phone ? <BriefCard /> : <BriefSheet />}
      </div>

      <div
        style={vars({ "--in": "var(--e1)" })}
        className="stage-layer absolute inset-0 flex flex-col"
      >
        <div
          className={cn(
            "concept-scale bg-concept-shell border-concept-ink/10 relative z-20 grid shrink-0 border-b",
            phone ? "h-8 px-3" : "h-11 px-4",
          )}
        >
          <div className="col-start-1 row-start-1 flex items-center gap-3 opacity-[calc(1-var(--e2))]">
            <span className="bg-concept-clay motion-reduce:animate-none size-[0.45em] animate-build-pulse rounded-full" />
            <span className="font-label text-[0.6em] tracking-[0.18em]">
              BUILDING
            </span>
            <span className="text-concept-muted font-label truncate text-[0.6em] tracking-[0.12em]">
              norvia / home
            </span>
            {!phone ? (
              <span className="text-concept-muted font-label ml-auto text-[0.6em] tracking-[0.18em]">
                DESIGN AND BUILD, ONE PASS
              </span>
            ) : null}
          </div>

          <div className="col-start-1 row-start-1 flex items-center gap-3 opacity-[calc(var(--e2)-var(--e3))]">
            <span className="bg-concept-canvas border-concept-ink/15 text-concept-muted font-label flex min-w-0 items-center gap-2 border px-3 py-1 text-[0.6em] tracking-[0.12em]">
              <RiLinksLine className="text-concept-clay size-[1.1em] shrink-0" />
              <span className="truncate">norvia.com/preview</span>
            </span>
            <span className="bg-concept-clay text-concept-canvas font-label shrink-0 px-2 py-1 text-[0.55em] tracking-[0.16em]">
              ROUND 2
            </span>
            {!phone ? (
              <span className="text-concept-muted font-label ml-auto text-[0.6em] tracking-[0.18em]">
                SHARED WITH MARA
              </span>
            ) : null}
          </div>

          <div className="col-start-1 row-start-1 flex items-center gap-2 opacity-(--e3)">
            {!phone
              ? [0, 1, 2].map(light => (
                  <span
                    key={light}
                    className="bg-concept-ink/20 size-[0.45em] shrink-0 rounded-full"
                  />
                ))
              : null}
            <span
              className={cn(
                "bg-concept-canvas border-concept-ink/15 text-concept-muted font-label flex min-w-0 flex-1 items-center gap-2 border px-3 py-1 text-[0.6em] tracking-[0.12em]",
                !phone && "ml-2",
              )}
            >
              <RiLock2Line className="text-concept-clay size-[1em] shrink-0" />
              <span className="truncate">https://norvia.com</span>
            </span>
            <span className="bg-concept-clay text-concept-canvas font-label shrink-0 px-2.5 py-1 text-[0.55em] tracking-[0.18em]">
              LIVE
            </span>
          </div>
        </div>

        <div
          inert={!live}
          style={vars({ "--a": "var(--a1)" })}
          className="relative min-h-0 flex-1"
        >
          {phone ? <NorviaHomePhone /> : <NorviaHome />}

          <div
            style={vars({ "--a": "var(--a2)" })}
            className="concept-scale pointer-events-none absolute inset-0 z-20 opacity-[calc(var(--e2)*(1-var(--e3)))]"
          >
            {(phone ? pins.phone : pins.page).map(pin => (
              <ReviewPin key={pin.n} {...pin} />
            ))}
          </div>

        </div>

        {phone ? (
          <div className="concept-scale bg-concept-scrim text-concept-chalk relative z-20 grid h-9 shrink-0 px-4">
            <div className="col-start-1 row-start-1 flex items-center gap-3 opacity-[calc(1-var(--e2))]">
              <span className="flex items-center gap-1.5">
                {swatches.map(tone => (
                  <span
                    key={tone}
                    className={cn("border-concept-chalk/20 size-3 border", tone)}
                  />
                ))}
              </span>
              <span className="text-concept-chalk/55 font-label text-[0.55em] tracking-[0.18em]">
                ARCHIVO · GEIST
              </span>
              <span className="text-concept-chalk/55 font-label ml-auto text-[0.55em] tracking-[0.18em]">
                ONE PASS
              </span>
            </div>

            <div
              style={vars({ "--a": "var(--a2)" })}
              className="col-start-1 row-start-1 flex items-center gap-3 opacity-[calc(var(--e2)-var(--e3))]"
            >
              <span className="text-concept-chalk/55 font-label text-[0.55em] tracking-[0.18em]">
                ROUND 2
              </span>
              <span
                style={cue(0.6, 0.2)}
                className="stage-cue build-part flex items-center gap-2 text-[0.7em]"
              >
                <span className="bg-concept-clay size-[0.35em] rounded-full" />
                Three changes, all done
              </span>
            </div>

            <div
              style={vars({ "--a": "var(--a3)" })}
              className="col-start-1 row-start-1 flex items-center justify-between gap-3 opacity-(--e3)"
            >
              {proof.slice(0, 2).map((item, index) => (
                <span
                  key={item.name}
                  style={cue(0.15 + index * 0.15, 0.25)}
                  className="stage-cue build-part flex items-baseline gap-1.5"
                >
                  <span className="text-[1em] font-semibold whitespace-nowrap tabular-nums">
                    {item.value}
                  </span>
                  <span className="text-concept-chalk/55 font-label text-[0.5em] whitespace-nowrap tracking-[0.16em]">
                    {item.name}
                  </span>
                </span>
              ))}
            </div>
          </div>
        ) : null}

        {!phone ? (
          <div className="concept-scale bg-concept-scrim text-concept-chalk relative z-20 grid h-14 shrink-0 px-7">
            <div className="col-start-1 row-start-1 flex items-center gap-4 opacity-[calc(1-var(--e2))]">
              <span className="text-concept-chalk/55 font-label text-[0.6em] tracking-[0.18em]">
                HOME · SHOP · CLASSES · COMMISSIONS · VISIT
              </span>
              <span className="ml-auto flex items-center gap-3">
                <span className="flex items-center gap-1.5">
                  {swatches.map(tone => (
                    <span
                      key={tone}
                      className={cn(
                        "border-concept-chalk/20 size-3.5 border",
                        tone,
                      )}
                    />
                  ))}
                </span>
                <span className="text-concept-chalk/55 font-label text-[0.6em] tracking-[0.18em]">
                  ARCHIVO · GEIST
                </span>
              </span>
            </div>

            <div
              style={vars({ "--a": "var(--a2)" })}
              className="col-start-1 row-start-1 flex items-center gap-6 opacity-[calc(var(--e2)-var(--e3))]"
            >
              <span className="text-concept-chalk/55 font-label text-[0.6em] tracking-[0.18em]">
                ROUND 2 — YOU ASKED FOR
              </span>
              {asked.map((change, index) => (
                <span
                  key={change}
                  style={cue(0.6 + index * 0.06, 0.1)}
                  className="stage-cue build-part flex items-center gap-2 text-[0.75em]"
                >
                  <span className="bg-concept-clay size-[0.35em] rounded-full" />
                  {change}
                </span>
              ))}
            </div>

            <div
              style={vars({ "--a": "var(--a3)" })}
              className="col-start-1 row-start-1 flex items-center gap-8 opacity-(--e3)"
            >
              {proof.map((item, index) => (
                <span
                  key={item.name}
                  style={cue(0.15 + index * 0.1, 0.25)}
                  className="stage-cue build-part flex items-baseline gap-2"
                >
                  <span className="text-[1.25em] font-semibold whitespace-nowrap tabular-nums">
                    {item.value}
                  </span>
                  <span className="text-concept-chalk/55 font-label text-[0.58em] whitespace-nowrap tracking-[0.18em]">
                    {item.name}
                  </span>
                </span>
              ))}
              <span className="text-concept-chalk/55 font-label ml-auto text-[0.6em] tracking-[0.18em]">
                ALL YOURS
              </span>
            </div>
          </div>
        ) : null}

      </div>
    </div>
  );
}

"use client";

import { RiLock2Line } from "@remixicon/react";

import { SorrelBefore } from "@/app/_components/sorrel-before";
import { SorrelBeforePhone } from "@/app/_components/sorrel-before-phone";
import { SorrelFound } from "@/app/_components/sorrel-found";
import { SorrelFoundPhone } from "@/app/_components/sorrel-found-phone";
import { SorrelHome } from "@/app/_components/sorrel-home";
import { SorrelHomePhone } from "@/app/_components/sorrel-home-phone";
import { SorrelMonth } from "@/app/_components/sorrel-month";
import { SorrelMonthPhone } from "@/app/_components/sorrel-month-phone";
import { services } from "@/lib/services";
import { cn } from "@/lib/utils";

const scenes = [
  { url: "sorrel.com", page: <SorrelHome />, phone: <SorrelHomePhone /> },
  {
    url: "sorrel — before and after",
    page: <SorrelBefore />,
    phone: <SorrelBeforePhone />,
  },
  {
    url: "google.com/search?q=dinner+near+fort+greene+tonight",
    page: <SorrelFound />,
    phone: <SorrelFoundPhone />,
  },
  {
    url: "mail — October at sorrel.com",
    page: <SorrelMonth />,
    phone: <SorrelMonthPhone />,
  },
];

export function ServiceFrame({
  at,
  last = at,
  single = false,
  phone = false,
}: {
  at: number;
  last?: number;
  single?: boolean;
  phone?: boolean;
}) {
  const shown = single ? [at] : services.map((_, place) => place);

  /* The class set for a scene: arriving, leaving, or parked out of sight. */
  const layer = (place: number) => {
    if (single) return "visible opacity-100";
    if (place === at) return "visible z-10 opacity-100 delay-150 duration-300";
    if (place === last) return "invisible z-0 opacity-0 duration-150";
    return "invisible z-0 opacity-0 transition-none";
  };

  return (
    <div
      className={cn(
        "concept-stage concept-theme-cool bg-concept-shell text-concept-ink shadow-elev-2 border-concept-ink/15 relative flex w-full flex-col overflow-hidden border",
        phone
          ? "[--concept-height:500] [--concept-width:360]"
          : "[--concept-base:18] [--concept-height:800] [--concept-width:1200]",
      )}
    >
      <div
        className={cn(
          "concept-scale bg-concept-shell border-concept-ink/10 relative z-20 flex shrink-0 items-center gap-2 border-b",
          phone ? "h-8 px-3" : "h-11 px-4",
        )}
      >
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
            "bg-concept-canvas border-concept-ink/15 text-concept-muted font-label flex min-w-0 flex-1 items-center gap-2 border px-3 py-1 text-[0.66em] tracking-[0.12em]",
            !phone && "ml-2",
          )}
        >
          <RiLock2Line className="text-concept-clay size-[1em] shrink-0" />
          <span className="grid min-w-0">
            {shown.map(place => (
              <span
                key={place}
                className={cn(
                  "ease-entrance motion-reduce:transition-none col-start-1 row-start-1 truncate transition-opacity duration-300",
                  single || place === at ? "opacity-100" : "opacity-0",
                )}
              >
                {scenes[place].url}
              </span>
            ))}
          </span>
        </span>
        <span className="text-concept-muted font-label grid shrink-0 text-[0.66em] tracking-[0.18em] uppercase">
          {shown.map(place => (
            <span
              key={place}
              className={cn(
                "ease-entrance motion-reduce:transition-none col-start-1 row-start-1 text-right transition-opacity duration-300",
                single || place === at ? "opacity-100" : "opacity-0",
              )}
            >
              {services[place].meta}
            </span>
          ))}
        </span>
      </div>

      <div className="relative min-h-0 flex-1">
        {shown.map(place => (
          <div
            key={place}
            inert={!single && place !== at}
            className={cn(
              "ease-entrance motion-reduce:transition-none absolute inset-0 transition-[opacity,visibility]",
              layer(place),
            )}
          >
            {phone ? scenes[place].phone : scenes[place].page}
          </div>
        ))}
      </div>
    </div>
  );
}

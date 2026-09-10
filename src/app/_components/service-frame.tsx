"use client";

import { RiLock2Line } from "@remixicon/react";

import { NorviaBefore } from "@/app/_components/norvia-before";
import { NorviaFound } from "@/app/_components/norvia-found";
import { NorviaHome } from "@/app/_components/norvia-home";
import { NorviaMonth } from "@/app/_components/norvia-month";
import { services } from "@/lib/services";
import { cn } from "@/lib/utils";

const scenes = [
  { url: "norvia.com", scene: <NorviaHome /> },
  { url: null, scene: <NorviaBefore /> },
  { url: "google.com/search?q=ceramics+classes+near+hudson", scene: <NorviaFound /> },
  { url: "mail — October at norvia.com", scene: <NorviaMonth /> },
];

export function ServiceFrame({
  at,
  last = at,
  single = false,
}: {
  at: number;
  last?: number;
  single?: boolean;
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
    <div className="concept-stage concept-theme-cool bg-concept-shell text-concept-ink shadow-elev-2 border-concept-ink/15 relative flex w-full flex-col overflow-hidden border [--concept-height:800] [--concept-width:1200]">
      <div className="concept-scale bg-concept-shell border-concept-ink/10 relative z-20 flex h-11 shrink-0 items-center gap-2 border-b px-4">
        {[0, 1, 2].map(light => (
          <span
            key={light}
            className="bg-concept-ink/20 size-[0.45em] shrink-0 rounded-full"
          />
        ))}
        <span className="bg-concept-canvas border-concept-ink/15 text-concept-muted font-label ml-2 flex min-w-0 flex-1 items-center gap-2 border px-3 py-1 text-[0.6em] tracking-[0.12em]">
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
                {scenes[place].url ?? "norvia — before and after"}
              </span>
            ))}
          </span>
        </span>
        <span className="text-concept-muted font-label grid shrink-0 text-[0.6em] tracking-[0.18em] uppercase">
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
            {scenes[place].scene}
          </div>
        ))}
      </div>
    </div>
  );
}

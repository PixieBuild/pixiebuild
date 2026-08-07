"use client";

import {
  RiArrowRightUpLine,
  RiRestaurantLine,
  RiSparkling2Line,
  RiHotelBedLine,
} from "@remixicon/react";
import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";

const cards = [
  {
    id: "rooms",
    label: "Rooms",
    note: "Eleven rooms above the harbour, from €340.",
    icon: RiHotelBedLine,
    tone: "from-primary/30 to-primary/5 text-primary",
  },
  {
    id: "table",
    label: "The Table",
    note: "Dinner from six, Tuesday through Sunday.",
    icon: RiRestaurantLine,
    tone: "from-violet-500/30 to-violet-500/5 text-violet-400",
  },
  {
    id: "spa",
    label: "Spa",
    note: "Sea pool and sauna, open all year.",
    icon: RiSparkling2Line,
    tone: "from-amber-500/30 to-amber-500/5 text-amber-400",
  },
];

const morph = { type: "spring", stiffness: 280, damping: 32 } as const;

/* A shared-element transition: the tile and its title keep their layoutId
   across both states, so Motion morphs one into the other rather than
   cross-fading two separate things. The grid behind is faded and made inert
   while a card is open, or its labels collide with the expanded copy. */
export function ServiceMotion() {
  const still = useReducedMotion();
  const [open, setOpen] = useState<string | null>(null);
  const card = cards.find((item) => item.id === open);
  const move = still ? { duration: 0 } : morph;

  return (
    <div
      onMouseLeave={() => setOpen(null)}
      className="flex size-full flex-col gap-3 p-6"
    >
      <div className="flex items-baseline justify-between gap-3">
        <p className="text-sm font-medium tracking-tight">The house</p>
        <p className="text-muted-foreground font-mono text-[0.625rem] tracking-widest uppercase">
          Hover a tile
        </p>
      </div>

      <div className="relative min-h-0 flex-1">
        <div
          className={`ease-interface grid size-full grid-cols-3 gap-3 transition-opacity duration-200 ${
            card ? "pointer-events-none opacity-0" : "opacity-100"
          }`}
        >
          {cards.map((item) => (
            <div
              key={item.id}
              onMouseEnter={() => setOpen(item.id)}
              className="flex cursor-pointer flex-col"
            >
              {open === item.id ? null : (
                <>
                  <motion.span
                    layoutId={`tile-${item.id}`}
                    transition={move}
                    style={{ borderRadius: 12 }}
                    className={`flex min-h-0 flex-1 items-end bg-linear-to-br p-3 ${item.tone}`}
                  >
                    <motion.span layout transition={move}>
                      <item.icon className="size-6" />
                    </motion.span>
                  </motion.span>
                  <motion.p
                    layoutId={`name-${item.id}`}
                    transition={move}
                    className="mt-2.5 text-xs font-medium"
                  >
                    {item.label}
                  </motion.p>
                </>
              )}
            </div>
          ))}
        </div>

        {card ? (
          <div className="absolute inset-0 flex flex-col">
            <motion.span
              layoutId={`tile-${card.id}`}
              transition={move}
              style={{ borderRadius: 12 }}
              className={`flex min-h-0 flex-1 items-end bg-linear-to-br p-4 ${card.tone}`}
            >
              <motion.span layout transition={move}>
                <card.icon className="size-6" />
              </motion.span>
            </motion.span>

            <div className="mt-2.5 flex items-end justify-between gap-3">
              <div className="min-w-0">
                <motion.p
                  layoutId={`name-${card.id}`}
                  transition={move}
                  className="text-sm font-semibold tracking-tight"
                >
                  {card.label}
                </motion.p>
                <motion.p
                  initial={still ? false : { opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: still ? 0 : 0.3,
                    delay: still ? 0 : 0.1,
                  }}
                  className="text-muted-foreground mt-0.5 truncate text-[0.6875rem]"
                >
                  {card.note}
                </motion.p>
              </div>

              <motion.span
                initial={still ? false : { opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: still ? 0 : 0.3,
                  delay: still ? 0 : 0.14,
                }}
                className="bg-primary text-primary-foreground flex size-8 shrink-0 items-center justify-center rounded-full"
              >
                <RiArrowRightUpLine className="size-4" />
              </motion.span>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

"use client";

import {
  RiArrowLeftLine,
  RiArrowRightLine,
  RiCheckLine,
  RiCloseLine,
  RiShieldCheckLine,
  RiTruckLine,
} from "@remixicon/react";
import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/utils";

export type Version = 1 | 2 | 3;

const hero = {
  id: "cups",
  name: "Stoneware cups",
  meta: "SET OF FOUR",
  price: 120,
  blurb:
    "Thrown and glazed by hand in Cork. Speckled oatmeal, no two the same, and safe in the dishwasher.",
  short: "Thrown and glazed by hand in Cork. No two the same.",
  photo: "/concept/product-cups.webp",
};

const angles = [
  { id: "stack", src: hero.photo },
  { id: "rim", src: "/concept/product-cups-rim.webp" },
  { id: "detail", src: "/concept/product-cups-detail.webp" },
  { id: "scene", src: "/concept/product-cups-scene.webp" },
];

const goes = [
  { id: "bowl", name: "Serving bowl", price: 160, photo: "/concept/product-bowl.webp" },
  { id: "jug", name: "Milk jug", price: 45, photo: "/concept/product-jug.webp" },
];

const named: Record<string, { name: string; price: number; photo: string }> = {
  [hero.id]: hero,
  ...Object.fromEntries(goes.map(good => [good.id, good])),
};

function Stepper({
  value,
  onChange,
  small,
}: {
  value: number;
  onChange: (by: number) => void;
  small?: boolean;
}) {
  return (
    <span className="border-concept-ink/20 flex shrink-0 items-center border">
      <button
        type="button"
        aria-label="One fewer"
        onClick={() => onChange(-1)}
        className={cn(
          "hover:bg-concept-shell transition-colors duration-300",
          small ? "px-2.5 py-1 text-[0.8em]" : "px-3.5 py-2 text-[0.95em]",
        )}
      >
        −
      </button>
      <span
        className={cn(
          "text-center tabular-nums",
          small ? "w-[1.7em] text-[0.75em]" : "w-[2.2em] text-[0.9em]",
        )}
      >
        {value}
      </span>
      <button
        type="button"
        aria-label="One more"
        onClick={() => onChange(1)}
        className={cn(
          "hover:bg-concept-shell transition-colors duration-300",
          small ? "px-2.5 py-1 text-[0.8em]" : "px-3.5 py-2 text-[0.95em]",
        )}
      >
        +
      </button>
    </span>
  );
}

function Total({
  total,
  action,
  onAct,
  compact,
  note,
}: {
  total: number;
  action: string;
  onAct: () => void;
  compact?: boolean;
  note?: string;
}) {
  return (
    <div
      className={cn(
        "bg-concept-shell flex shrink-0 flex-col",
        compact ? "gap-2.5 px-5 py-3.5" : "w-[33%] gap-4 p-8",
      )}
    >
      {!compact ? (
        <span className="text-concept-muted font-label text-[0.6em] tracking-[0.2em]">
          SUMMARY
        </span>
      ) : null}

      {!compact ? (
        <div className="flex flex-col gap-2.5 text-[0.85em]">
          <span className="flex justify-between">
            <span className="text-concept-muted">Subtotal</span>
            <span className="tabular-nums">€{total}</span>
          </span>
          <span className="flex justify-between">
            <span className="text-concept-muted">Delivery</span>
            <span className="text-concept-clay">Free</span>
          </span>
        </div>
      ) : null}

      <span
        className={cn(
          "flex items-baseline justify-between",
          !compact && "border-concept-ink/15 border-t pt-4",
        )}
      >
        <span className="font-label text-[0.6em] tracking-[0.2em]">TOTAL</span>
        <span
          className={cn(
            "font-concept-display leading-none tabular-nums",
            compact ? "text-[1.5em]" : "text-[1.9em]",
          )}
        >
          €{total}
        </span>
      </span>

      <button
        type="button"
        onClick={onAct}
        className={cn(
          "bg-concept-clay text-concept-canvas font-label text-[0.66em] tracking-[0.2em] transition-opacity duration-300 hover:opacity-85",
          compact ? "py-3" : "mt-auto py-3.5",
        )}
      >
        {action}
      </button>

      {note && !compact ? (
        <span className="text-concept-muted flex items-center justify-center gap-2 text-[0.72em]">
          <RiShieldCheckLine className="size-[1.1em]" />
          {note}
        </span>
      ) : null}
    </div>
  );
}

function Gallery({
  version,
  compact,
  swipeable,
  angle,
  onPick,
  onSwipe,
}: {
  version: Version;
  compact: boolean;
  swipeable: boolean;
  angle: number;
  onPick: (index: number) => void;
  onSwipe: (by: number) => void;
}) {
  const shot = angles[angle];

  return (
    <div
      className={cn(
        "flex min-h-0 shrink-0 flex-col",
        compact ? "w-[46%]" : "w-[45%] gap-2.5 p-6",
      )}
    >
      <div className="bg-concept-shell relative min-h-0 w-full flex-1 overflow-hidden">
        <motion.div
          drag={swipeable ? "x" : false}
          dragDirectionLock
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.18}
          dragSnapToOrigin
          onDragEnd={(_, info) => onSwipe(info.offset.x)}
          className="absolute inset-0 touch-pan-y"
        >
          <Image
            key={shot.src}
            src={shot.src}
            alt=""
            fill
            sizes="(min-width: 1024px) 320px, 100vw"
            className="animate-fade-in object-cover object-center"
          />
        </motion.div>

        {version === 3 ? (
          <span
            className={cn(
              "bg-concept-canvas/90 font-label absolute px-2 py-1 text-[0.55em] tracking-[0.16em]",
              compact ? "top-1.5 left-1.5" : "top-3 left-3",
            )}
          >
            2 LEFT
          </span>
        ) : null}

        {version === 3 && compact ? (
          <span className="absolute inset-x-0 bottom-2 flex items-center justify-center gap-1.5">
            {angles.map((option, index) => (
              <button
                key={option.id}
                type="button"
                aria-label={`View ${option.id}`}
                onClick={() => onPick(index)}
                className={cn(
                  "size-[0.4em] rounded-full transition-colors duration-300",
                  index === angle ? "bg-concept-canvas" : "bg-concept-canvas/45",
                )}
              />
            ))}
          </span>
        ) : null}
      </div>

      {version === 3 && !compact ? (
        <div className="flex shrink-0 gap-2">
          {angles.map((option, index) => (
            <button
              key={option.id}
              type="button"
              aria-label={`View ${option.id}`}
              onClick={() => onPick(index)}
              className={cn(
                "bg-concept-shell relative h-12 flex-1 overflow-hidden border-2 transition-colors duration-300",
                index === angle ? "border-concept-clay" : "border-transparent",
              )}
            >
              <Image
                src={option.src}
                alt=""
                fill
                sizes="80px"
                className="object-cover object-center"
              />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function BagLine({
  id,
  count,
  compact,
  onChange,
  onRemove,
}: {
  id: string;
  count: number;
  compact: boolean;
  onChange: (by: number) => void;
  onRemove: () => void;
}) {
  const good = named[id];

  return (
    <div
      className={cn(
        "border-concept-ink/10 flex shrink-0 items-center border-b",
        compact ? "gap-3 pb-3" : "gap-5 pb-5",
      )}
    >
      <span
        className={cn(
          "bg-concept-shell relative shrink-0 overflow-hidden",
          compact ? "size-[3em]" : "size-[3.6em]",
        )}
      >
        <Image src={good.photo} alt="" fill sizes="110px" className="object-cover" />
      </span>

      <span className="flex min-w-0 flex-col gap-0.5">
        <span
          className={cn(
            "font-concept-display truncate leading-none",
            compact ? "text-[1em]" : "text-[1.15em]",
          )}
        >
          {good.name}
        </span>
        <span className="text-concept-muted text-[0.72em] tabular-nums">
          €{good.price}
        </span>
      </span>

      <span
        className={cn(
          "ml-auto flex shrink-0 items-center",
          compact ? "gap-2.5" : "gap-5",
        )}
      >
        <Stepper value={count} onChange={onChange} small={compact} />
        <span
          className={cn(
            "text-right font-semibold tabular-nums",
            compact ? "w-[3em] text-[0.85em]" : "w-[3.6em] text-[0.95em]",
          )}
        >
          €{good.price * count}
        </span>
        <button
          type="button"
          aria-label={`Remove ${good.name}`}
          onClick={onRemove}
          className="text-concept-muted hover:text-concept-ink transition-colors duration-300"
        >
          <RiCloseLine className="size-[1em]" />
        </button>
      </span>
    </div>
  );
}

const fields = [
  { label: "EMAIL", wide: true },
  { label: "FIRST NAME" },
  { label: "LAST NAME" },
  { label: "ADDRESS", wide: true },
  { label: "TOWN", roomy: true },
  { label: "EIRCODE", roomy: true },
];

function Fields({ compact }: { compact: boolean }) {
  return (
    <div
      className={cn(
        "grid grid-cols-2",
        compact ? "mt-2.5 gap-x-4 gap-y-2" : "mt-7 gap-x-7 gap-y-5",
      )}
    >
      {fields
        .filter(field => !compact || !field.roomy)
        .map(field => (
          <label
            key={field.label}
            className={cn(
              "flex flex-col",
              compact ? "gap-1" : "gap-1.5",
              field.wide && "col-span-2",
            )}
          >
            <span
              className={cn(
                "text-concept-muted font-label tracking-[0.16em]",
                compact ? "text-[0.5em]" : "text-[0.56em]",
              )}
            >
              {field.label}
            </span>
            <span
              className={cn(
                "border-concept-ink/20 block border-b",
                compact ? "h-[1em]" : "h-[2em]",
              )}
            />
          </label>
        ))}
    </div>
  );
}

export function Shop({
  version = 3,
  live = false,
  compact = false,
}: {
  version?: Version;
  live?: boolean;
  compact?: boolean;
}) {
  const [view, setView] = useState<"detail" | "bag" | "pay" | "done">("detail");
  const [bag, setBag] = useState<Record<string, number>>({});
  const [want, setWant] = useState(1);
  const [angle, setAngle] = useState(0);

  const lines = Object.keys(bag).filter(id => bag[id]);
  const count = Object.values(bag).reduce((sum, n) => sum + n, 0);
  const total = lines.reduce((sum, id) => sum + named[id].price * bag[id], 0);
  const held = bag[hero.id] ?? 0;

  const nudge = (id: string, by: number) =>
    setBag(was => {
      const next = Math.max(0, (was[id] ?? 0) + by);
      const rest = { ...was };
      if (next) rest[id] = next;
      else delete rest[id];
      return rest;
    });

  const go = (next: typeof view) => live && setView(next);
  const swipeable = compact && live && version === 3;

  /* A short drag is a tap that wandered, so it leaves the photo where it is. */
  const turn = (by: number) => {
    if (Math.abs(by) < 40) return;
    setAngle(was => (was + (by < 0 ? 1 : -1) + angles.length) % angles.length);
  };
  const pad = compact ? "px-5" : "px-8";

  return (
    <div className="concept-page concept-theme-paper bg-concept-canvas text-concept-ink font-display absolute top-0 left-0 flex flex-col">
      <header
        className={cn(
          "border-concept-ink/10 flex shrink-0 items-center border-b",
          pad,
          compact ? "py-3" : "py-4",
        )}
      >
        <button
          type="button"
          onClick={() => go("detail")}
          className="font-label text-[0.9em] tracking-[0.32em]"
        >
          NORVIA
        </button>

        <button
          type="button"
          onClick={() => count && go("bag")}
          className={cn(
            "font-label ml-auto flex items-center gap-2.5 border px-3.5 py-1.5 text-[0.64em] tracking-[0.2em] transition-colors duration-300",
            count
              ? "bg-concept-clay border-concept-clay text-concept-canvas"
              : "border-concept-ink/20",
          )}
        >
          BAG
          <span className="tabular-nums">{count}</span>
        </button>
      </header>

      {view === "detail" ? (
        <div className="flex min-h-0 flex-1">
          <Gallery
            version={version}
            compact={compact}
            swipeable={swipeable}
            angle={angle}
            onPick={setAngle}
            onSwipe={turn}
          />

          <div
            className={cn(
              "flex min-h-0 flex-1 flex-col justify-center",
              compact ? "p-4" : "p-6 pl-0",
            )}
          >
            <span className="text-concept-muted font-label text-[0.56em] tracking-[0.2em]">
              HOMEWARE / {hero.meta}
            </span>

            <div
              className={cn(
                "mt-2 flex gap-x-4",
                version === 1 || compact
                  ? "flex-col gap-y-1"
                  : "flex-wrap items-baseline",
              )}
            >
              <span
                className={cn(
                  "font-concept-display leading-[1.05]",
                  compact ? "text-[1.3em]" : "text-[2.2em]",
                )}
              >
                {hero.name}
              </span>
              <span
                className={cn(
                  "tabular-nums",
                  version === 1
                    ? "text-concept-muted text-[0.9em]"
                    : cn("font-semibold", compact ? "text-[1em]" : "text-[1.25em]"),
                )}
              >
                €{hero.price}
              </span>
            </div>

            <p
              className={cn(
                "text-concept-muted leading-relaxed",
                compact ? "mt-1.5 text-[0.68em]" : "mt-3 max-w-[36ch] text-[0.85em]",
              )}
            >
              {compact ? hero.short : hero.blurb}
            </p>

            <div className={cn("flex items-center", compact ? "mt-2.5 gap-2" : "mt-6 gap-3")}>
              {held ? (
                <>
                  <Stepper
                    value={held}
                    onChange={by => nudge(hero.id, by)}
                    small={compact}
                  />
                  <button
                    type="button"
                    onClick={() => go("bag")}
                    className={cn(
                      "border-concept-ink text-concept-ink font-label flex flex-1 items-center justify-center border transition-colors duration-300",
                      "hover:bg-concept-ink hover:text-concept-canvas",
                      compact ? "gap-1.5 py-2 text-[0.56em] tracking-[0.14em]" : "gap-2 py-3.5 text-[0.64em] tracking-[0.2em]",
                    )}
                  >
                    VIEW BAG
                    <RiArrowRightLine className="size-[1.2em]" />
                  </button>
                </>
              ) : (
                <>
                  {version > 1 ? (
                    <Stepper
                      value={want}
                      onChange={by => setWant(n => Math.min(9, Math.max(1, n + by)))}
                      small={compact}
                    />
                  ) : null}
                  <button
                    type="button"
                    onClick={() => live && nudge(hero.id, want)}
                    className={cn(
                      "bg-concept-clay text-concept-canvas font-label flex-1 transition-opacity duration-300 hover:opacity-85",
                      compact ? "py-2 text-[0.56em] tracking-[0.14em]" : "py-3.5 text-[0.64em] tracking-[0.2em]",
                    )}
                  >
                    ADD TO BAG
                  </button>
                </>
              )}
            </div>

            {version === 3 ? (
              <span
                className={cn(
                  "text-concept-muted flex items-center gap-1.5",
                  compact ? "mt-2 text-[0.6em]" : "mt-4 text-[0.75em]",
                )}
              >
                <RiTruckLine className="text-concept-clay size-[1.2em] shrink-0" />
                {compact ? "Free delivery over €50" : "Free delivery over €50 · ships in 48 hours"}
              </span>
            ) : null}

            {version === 3 && !compact ? (
              <div className="border-concept-ink/10 mt-6 flex gap-6 border-t pt-5">
                <span className="text-concept-muted font-label self-center text-[0.56em] tracking-[0.18em]">
                  GOES WITH
                </span>
                {goes.map(good => (
                  <span key={good.id} className="flex items-center gap-2.5">
                    <span className="bg-concept-shell relative size-[2.6em] shrink-0 overflow-hidden">
                      <Image
                        src={good.photo}
                        alt=""
                        fill
                        sizes="70px"
                        className="object-cover"
                      />
                    </span>
                    <span className="flex flex-col gap-0.5">
                      <span className="text-[0.75em]">{good.name}</span>
                      <span className="text-concept-muted text-[0.7em] tabular-nums">
                        €{good.price}
                      </span>
                    </span>
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      ) : null}

      {view === "bag" ? (
        <div className={cn("flex min-h-0 flex-1", compact ? "flex-col" : "flex-row")}>
          <div
            className={cn(
              "flex min-h-0 flex-1 flex-col",
              pad,
              compact ? "py-3.5" : "py-7",
            )}
          >
            <div className="flex shrink-0 items-baseline justify-between">
              <span
                className={cn(
                  "font-concept-display leading-none",
                  compact ? "text-[1.4em]" : "text-[1.8em]",
                )}
              >
                Your bag
              </span>
              <span className="text-concept-muted font-label text-[0.58em] tracking-[0.2em]">
                {count} ITEM{count === 1 ? "" : "S"}
              </span>
            </div>

            <div
              className={cn(
                "flex min-h-0 flex-1 flex-col overflow-hidden",
                compact ? "mt-3 gap-3" : "mt-6 gap-5",
              )}
            >
              {lines.map(id => (
                <BagLine
                  key={id}
                  id={id}
                  count={bag[id]}
                  compact={compact}
                  onChange={by => nudge(id, by)}
                  onRemove={() => nudge(id, -bag[id])}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => go("detail")}
              className={cn(
                "text-concept-muted hover:text-concept-ink font-label flex shrink-0 items-center gap-2 self-start text-[0.58em] tracking-[0.2em] transition-colors duration-300",
                compact ? "mt-3" : "mt-5",
              )}
            >
              <RiArrowLeftLine className="size-[1.1em]" />
              KEEP SHOPPING
            </button>
          </div>

          <Total
            total={total}
            action="CHECKOUT"
            onAct={() => go("pay")}
            compact={compact}
            note="Free returns within 30 days"
          />
        </div>
      ) : null}

      {view === "pay" ? (
        <div className={cn("flex min-h-0 flex-1", compact ? "flex-col" : "flex-row")}>
          <div
            className={cn(
              "flex min-h-0 flex-1 flex-col",
              pad,
              compact ? "py-3.5" : "py-7",
            )}
          >
            <span
              className={cn(
                "font-concept-display shrink-0 leading-none",
                compact ? "text-[1.4em]" : "text-[1.8em]",
              )}
            >
              Checkout
            </span>

            <Fields compact={compact} />

            {!compact ? (
              <div className="border-concept-ink/10 mt-auto flex shrink-0 items-center gap-4 border-t pt-5">
                <span className="text-concept-muted font-label text-[0.58em] tracking-[0.16em]">
                  PAY WITH
                </span>
                <span className="border-concept-ink/20 flex gap-2 border px-3 py-1.5">
                  {["bg-concept-ink", "bg-concept-clay", "bg-concept-gold"].map(tone => (
                    <span
                      key={tone}
                      className={cn("h-[0.8em] w-[1.4em] rounded-[0.1em]", tone)}
                    />
                  ))}
                </span>
              </div>
            ) : null}
          </div>

          <Total
            total={total}
            action="PLACE ORDER"
            onAct={() => go("done")}
            compact={compact}
            note="Encrypted, handled by Stripe"
          />
        </div>
      ) : null}

      {view === "done" ? (
        <div
          className={cn(
            "flex min-h-0 flex-1 flex-col items-center justify-center px-6 text-center",
            compact ? "gap-2.5" : "gap-4",
          )}
        >
          <span
            className={cn(
              "bg-concept-clay text-concept-canvas flex items-center justify-center rounded-full",
              compact ? "size-[2.6em]" : "size-[3.2em]",
            )}
          >
            <RiCheckLine className={compact ? "size-[1.3em]" : "size-[1.6em]"} />
          </span>
          <span
            className={cn(
              "font-concept-display leading-none",
              compact ? "text-[1.7em]" : "text-[2.2em]",
            )}
          >
            Order placed
          </span>
          <span
            className={cn(
              "text-concept-muted",
              compact ? "text-[0.78em]" : "text-[0.9em]",
            )}
          >
            #NV-2841 · arriving Thursday
          </span>
          <button
            type="button"
            onClick={() => {
              setBag({});
              setWant(1);
              setView("detail");
            }}
            className={cn(
              "border-concept-ink/25 hover:bg-concept-shell font-label border transition-colors duration-300",
              compact ? "mt-1 px-5 py-2.5 text-[0.6em]" : "mt-3 px-6 py-3 text-[0.64em]",
              "tracking-[0.2em]",
            )}
          >
            BACK TO SHOP
          </button>
        </div>
      ) : null}
    </div>
  );
}

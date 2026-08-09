import {
  RiArrowRightUpLine,
  RiCheckLine,
  RiSpeedUpLine,
} from "@remixicon/react";
import type { Metadata } from "next";

import { Band } from "@/app/styleguide/_components/band";
import { readTokens } from "@/app/styleguide/_components/tokens";
import PbLogo from "@/assets/pb-logo.svg";
import { ThemeToggle } from "@/components/theme-toggle";

export const metadata: Metadata = {
  title: "Design language — PixieBuild",
  robots: { index: false, follow: false },
};

/* Names and values come from globals.css; only the sentence saying what a
   token is for has to be written by hand. */
const colourRoles: Record<string, string> = {
  "--background": "The canvas.",
  "--foreground": "Body copy and headings.",
  "--card": "Raised surfaces — anything with a border and a shadow.",
  "--popover": "Menus and anything floating above the page.",
  "--primary": "The action we want taken, and the brand mark.",
  "--secondary": "A filled control that is not the primary action.",
  "--muted": "Recessed areas.",
  "--muted-foreground": "Leads, captions, metadata — anything secondary.",
  "--accent": "Hover and selected states inside menus.",
  "--destructive": "Errors. Type and tint, not a filled surface.",
  "--border":
    "Edges and dividers. Already softened, so plain `border` is right.",
  "--input": "Field fills and their borders.",
  "--ring": "The focus ring, and nothing else.",
  "--chart-1": "Reserved for `shadcn add chart` — do not delete.",
  "--sidebar": "Reserved for `shadcn add sidebar` — do not delete.",
};

const radiusUsage: Record<string, string> = {
  "--radius": "The base every step below multiplies.",
  "--radius-sm": "Smaller than a card and rarely right.",
  "--radius-md": "Small blocks inside an artifact.",
  "--radius-lg": "The same as the base.",
  "--radius-xl": "Cards and raised surfaces.",
  "--radius-2xl": "Textarea, accordion, menu items.",
  "--radius-3xl": "Input, dropdown menu.",
  "--radius-4xl": "Button.",
};

const shadowUsage: Record<string, string> = {
  "--shadow-panel":
    "Cards and raised surfaces. Elevation plus the lit top edge.",
  "--shadow-elev-1": "Floating chrome — the header, the toggle.",
  "--shadow-elev-2": "Hover, or one featured card in a section.",
};

const motionUsage: Record<string, string> = {
  "--ease-entrance": "Things arriving.",
  "--ease-interface": "Hover, focus, press.",
  "--animate-rise-in": "The entrance, once on load.",
  "--animate-build-sweep": "The coming-soon progress sweep.",
  "--animate-glow-breathe": "The hero's brand glow, breathing.",
};

const typeRoles = [
  {
    role: "Display",
    className:
      "font-heading text-4xl leading-none font-semibold tracking-tight md:text-5xl lg:text-6xl",
    sample: "Beautiful is the baseline.",
    note: "The hero, and section openers that have to carry the page. Tracking goes negative because large type looks loose set solid, but only to -0.025em — past about -0.03em the letters start to collide rather than read as tight. Leading of 1 keeps two lines reading as one block.",
  },
  {
    role: "Heading",
    className: "font-heading text-3xl font-semibold tracking-tight md:text-4xl",
    sample: "Selected work",
    note: "Opens a section. Steps up at md.",
  },
  {
    role: "Subheading",
    className: "font-heading text-xl font-semibold tracking-tight md:text-2xl",
    sample: "Custom web applications",
    note: "h3-level, inside a section. Components that ship their own title styles keep theirs.",
  },
  {
    role: "Body large",
    className: "text-lg leading-relaxed",
    sample:
      "We design and build websites and applications for growing companies.",
    note: "The paragraph under a heading. Same at every width — smaller and it stops reading as a lead.",
  },
  {
    role: "Body",
    className: "text-base",
    sample: "The default. If a decision has not been made, it is this.",
    note: "Same at every width. Body text must never shrink on a phone.",
  },
  {
    role: "Body small",
    className: "text-sm",
    sample: "Delivered in three weeks",
    note: "Secondary detail and dense rows. Same at every width.",
  },
  {
    role: "Label",
    className: "text-xs font-medium tracking-widest uppercase",
    sample: "In development",
    note: "Eyebrows and tags. Same at every width, always uppercase.",
  },
];

const layout = [
  {
    what: "Container",
    classes: "mx-auto max-w-7xl",
    note: "Every band, no exceptions.",
  },
  {
    what: "Horizontal padding",
    classes: "px-6 sm:px-8 md:px-12 lg:px-16",
    note: "Until the container is capped, this is what holds content off the edge.",
  },
  {
    what: "Band rhythm",
    classes: "py-20 md:py-28",
    note: "The vertical space between sections.",
  },
  {
    what: "Columns",
    classes: "grid gap-8 md:grid-cols-12",
    note: "Between columns is gap; against the screen is padding.",
  },
];

const utilities = [
  {
    name: "reveal",
    purpose:
      "Scroll-driven entrance for a section. A view timeline — no JS, and it degrades to rendering in place.",
  },
];

export default async function StyleguidePage() {
  const { colours, radii, shadows, motion } = await readTokens();

  return (
    <main className="flex-1">
      <div className="bg-background/55 shadow-elev-1 fixed right-6 bottom-6 z-50 rounded-full border p-1 backdrop-blur-xl">
        <ThemeToggle />
      </div>

      <header className="py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16">
          <p className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
            Internal reference
          </p>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance md:text-5xl">
            Design language
          </h1>
          <p className="text-muted-foreground mt-5 max-w-prose text-lg leading-relaxed text-pretty">
            Plain Tailwind utilities, plus the CSS variables underneath them.
            Names and values are read straight out of globals.css, so adding a
            token there is all it takes to appear here. Copy the class strings —
            they are the documentation.
          </p>
        </div>
      </header>

      <Band
        title="Colour"
        description="Named by role, not by hue, so a change of palette is one edit. Colour is the one thing that always comes from a variable — that is what makes dark mode work."
      >
        <div className="flex flex-col">
          {colours.map((token) => (
            <div
              key={token.name}
              className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t py-4"
            >
              <span
                style={{ backgroundColor: `var(${token.name})` }}
                className="size-10 shrink-0 rounded-md border"
              />
              <span className="w-52 font-mono text-xs">{token.name}</span>
              <span className="text-muted-foreground w-56 text-sm">
                {token.light}
              </span>
              <span className="text-muted-foreground w-56 text-sm">
                {token.dark}
              </span>
              <span className="text-muted-foreground min-w-0 text-sm text-pretty">
                {colourRoles[token.name]}
              </span>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground mt-6 text-sm">
          Light value, then dark. The swatch follows the theme.
        </p>
      </Band>

      <Band
        title="Typography"
        description="General Sans for headings, Inter for body — the heading face is applied to h1–h6 in the base layer, so a heading never has to remember it. General Sans is licensed, so it ships from our own assets rather than a font CDN. Instrument Serif is not ours: it belongs to the concept builds, which are set in their own faces so they read as somebody else's brand. Read the class strings mobile-first: the plain value is the phone, md: is the step up. Where a role has no md:, that is a decision, not an omission."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border p-6">
            <p className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
              General Sans — font-heading
            </p>
            <p className="font-heading mt-4 text-4xl font-semibold tracking-tight">
              Beautiful is the baseline
            </p>
            <p className="text-muted-foreground mt-4 text-sm text-pretty">
              Applied to h1–h6 in the base layer. Nothing else needs the class.
            </p>
          </div>

          <div className="rounded-xl border p-6">
            <p className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
              Inter — font-sans
            </p>
            <p className="font-sans mt-4 text-4xl font-semibold tracking-tight">
              Beautiful is the baseline
            </p>
            <p className="text-muted-foreground mt-4 text-sm text-pretty">
              Set on html. Everything that is not a heading inherits it.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-10">
          {typeRoles.map((role) => (
            <div
              key={role.role}
              className="flex flex-col gap-3 border-t pt-6 md:flex-row md:items-baseline md:gap-10"
            >
              <div className="shrink-0 md:w-72">
                <p className="text-sm font-medium">{role.role}</p>
                <p className="text-muted-foreground mt-1 font-mono text-xs">
                  {role.className}
                </p>
                <p className="text-muted-foreground mt-2 text-sm text-pretty">
                  {role.note}
                </p>
              </div>
              <p className={`${role.className} min-w-0 text-pretty`}>
                {role.sample}
              </p>
            </div>
          ))}
        </div>
      </Band>

      <Band
        title="Layout"
        description="Four decisions the whole site is built from. Written as utilities so the markup shows what it does — if one has to change everywhere, it belongs in a component."
      >
        <div className="flex flex-col">
          {layout.map((item) => (
            <div
              key={item.what}
              className="flex flex-col gap-1 border-t py-4 md:flex-row md:items-baseline md:gap-6"
            >
              <span className="w-44 shrink-0 text-sm font-medium">
                {item.what}
              </span>
              <span className="text-muted-foreground w-72 shrink-0 font-mono text-xs">
                {item.classes}
              </span>
              <span className="text-muted-foreground min-w-0 text-sm text-pretty">
                {item.note}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-10 overflow-hidden rounded-xl border">
          <div className="bg-muted px-6 py-6 sm:px-8 md:px-12 lg:px-16">
            <div className="bg-card shadow-panel rounded-xl border py-8 text-center text-sm">
              the padding ramp — resize the window
            </div>
          </div>
        </div>
      </Band>

      <Band
        title="Radius"
        description="Every step multiplies one --radius, so the set moves together. Radius scales with the size of the thing."
      >
        <div className="flex flex-col">
          {radii.map((step) => (
            <div
              key={step.name}
              className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t py-4"
            >
              <span
                style={{ borderRadius: `var(${step.name})` }}
                className="bg-muted size-10 shrink-0 border"
              />
              <span className="w-36 font-mono text-xs">{step.utility}</span>
              <span className="text-muted-foreground w-20 text-sm tabular-nums">
                {step.px}
              </span>
              <span className="text-muted-foreground min-w-0 text-sm text-pretty">
                {radiusUsage[step.name]}
              </span>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground mt-6 text-sm">
          rounded-full is Tailwind&rsquo;s own, not a step — pills, tags, dots
          and the header.
        </p>
      </Band>

      <Band
        title="Elevation"
        description="One light source, above — the top edge catches it and the shadow falls below, which is why both invert between themes. Tailwind's own shadow-* cannot do that, which is the only reason these exist."
      >
        <div className="grid gap-6 sm:grid-cols-3">
          {shadows.map((token) => (
            <div
              key={token.name}
              style={{ boxShadow: `var(${token.name})` }}
              className="bg-card rounded-xl border p-6"
            >
              <p className="font-mono text-xs">
                {token.name.replace("--shadow-", "shadow-")}
              </p>
              <p className="text-muted-foreground mt-2 text-sm text-pretty">
                {shadowUsage[token.name]}
              </p>
            </div>
          ))}
        </div>
      </Band>

      <Band
        title="Utilities"
        description="The only custom classes we keep: CSS that utilities cannot express — masks, scroll timelines, layered gradients, keyframes, easing curves. Reach for one of these before writing your own; never add an alias for utilities that already exist."
      >
        <div className="flex flex-col">
          {[
            ...utilities,
            ...motion.map((token) => ({
              name: token.name.replace("--", ""),
              purpose: motionUsage[token.name],
            })),
          ].map((utility) => (
            <div
              key={utility.name}
              className="flex flex-wrap items-baseline gap-x-6 gap-y-2 border-t py-4"
            >
              <span className="w-48 font-mono text-xs">{utility.name}</span>
              <span className="text-muted-foreground min-w-0 text-sm text-pretty">
                {utility.purpose}
              </span>
            </div>
          ))}
        </div>

        <p className="text-muted-foreground mt-10 max-w-prose text-sm text-pretty">
          The landing page also defines{" "}
          <span className="font-mono text-xs">bg-blueprint</span>,{" "}
          <span className="font-mono text-xs">reveal-patch</span> and{" "}
          <span className="font-mono text-xs">text-drift</span>. They are that
          page&rsquo;s backdrop and its one typographic device — deliberately
          not part of the system, and not to be reused elsewhere.
        </p>
      </Band>

      <Band
        title="Icons"
        description="Remix Icon, already installed. Do not add a second icon library — if an icon is missing from Remix, draw it and put the SVG in src/assets."
      >
        <div className="flex flex-col gap-6">
          <div className="text-muted-foreground flex items-center gap-4">
            <RiSpeedUpLine className="size-4" />
            <RiCheckLine className="size-4" />
            <RiArrowRightUpLine className="size-4" />
            <span className="text-sm">
              size-4 inside buttons and rows, size-5 standalone
            </span>
          </div>
          <div className="flex items-center gap-3">
            <PbLogo className="size-6" />
            <span className="text-muted-foreground text-sm">
              the only custom mark — imported through SVGR, inherits
              currentColor
            </span>
          </div>
        </div>
      </Band>
    </main>
  );
}

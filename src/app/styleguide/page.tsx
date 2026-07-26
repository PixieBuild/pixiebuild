import type { Metadata } from "next";

import { Band } from "@/app/styleguide/_components/band";
import { BrowserFrame } from "@/app/styleguide/_components/browser-frame";
import { MiniSite } from "@/app/styleguide/_components/mini-site";

export const metadata: Metadata = {
  title: "Design language — PixieBuild",
  robots: { index: false, follow: false },
};

const typeScale = [
  {
    name: "display",
    spec: "72 · 0.95 · -0.04em · 600",
    usage: "Hero only, once per page",
    className: "text-display",
    sample: "Built with intent",
  },
  {
    name: "heading",
    spec: "44 · 1.05 · -0.03em · 600",
    usage: "Section headings",
    className: "text-heading",
    sample: "Selected work",
  },
  {
    name: "title",
    spec: "28 · 1.2 · -0.02em · 600",
    usage: "Card and sub-section titles",
    className: "text-title",
    sample: "Custom web applications",
  },
  {
    name: "lead",
    spec: "18 · 1.65",
    usage: "The paragraph under a heading",
    className: "text-lead",
    sample: "We design and build websites and applications for growing companies.",
  },
  {
    name: "base",
    spec: "16 · 1.5",
    usage: "Body copy — everything unexceptional",
    className: "text-base",
    sample: "The default. If a decision has not been made, it is this.",
  },
  {
    name: "caption",
    spec: "13 · 1.5",
    usage: "Metadata and secondary detail",
    className: "text-caption",
    sample: "Delivered in three weeks",
  },
  {
    name: "label",
    spec: "12 · 1.2 · 0.09em · 500",
    usage: "Uppercase eyebrows and tags",
    className: "text-label uppercase",
    sample: "In development",
  },
];

const strip = [
  {
    brand: "Meridian",
    eyebrow: "Grooming",
    headline: "A chair, whenever you want one.",
    body: "Booking, calendar and reviews for a barbershop that stopped answering the phone.",
    cta: "Book",
    cards: ["Services", "Booking", "Reviews"],
  },
  {
    brand: "Ember & Oak",
    eyebrow: "Coffee",
    headline: "Roasted the long way round.",
    body: "Brand story, roasting craft, menu and gallery for a café that reopened after twelve years.",
    cta: "Visit",
    cards: ["Story", "Menu", "Gallery"],
  },
  {
    brand: "Sable",
    eyebrow: "Platform",
    headline: "Every model, one endpoint.",
    body: "A dashboard, a bento grid and live product UI for a team shipping inference at scale.",
    cta: "Start",
    cards: ["Models", "Usage", "Keys"],
  },
];

const bento = [
  {
    title: "Company websites",
    body: "Structure, copy and build for companies that have outgrown a one-pager.",
    span: "sm:col-span-2",
  },
  {
    title: "Landing pages",
    body: "One page, one job, shipped fast.",
    span: "sm:col-span-1",
  },
  {
    title: "Custom applications",
    body: "Dashboards, tools and internal software built to be maintained.",
    span: "sm:col-span-3",
  },
];

const borrowed = [
  {
    verdict: "Take",
    items:
      "Bento grids, believable UI artifacts as visuals, artifacts clipped by their container, dotted container rules, centre-weighted strips, two-tone headlines.",
  },
  {
    verdict: "Leave",
    items:
      "Highlight-marker text in headings, coloured gradient number badges, spotlight sweeps, animated gradient borders, meteors, 3D tilt cards.",
  },
];

const surfaces = [
  {
    name: "background",
    className: "bg-background",
    note: "The canvas. No border, no shadow.",
  },
  {
    name: "panel",
    className: "panel",
    note: "Raised card: border, elevation-1, and a lit top edge.",
  },
  {
    name: "panel + elev-2",
    className: "panel shadow-elev-2",
    note: "Reserved for hover, focus, or one featured card per section.",
  },
  {
    name: "muted",
    className: "bg-muted",
    note: "Recessed. Inset areas and code.",
  },
];

const curves = [
  {
    name: "ease-entrance",
    value: "cubic-bezier(0.16, 1, 0.3, 1)",
    usage: "Things arriving. Overshoots slightly, settles late.",
    barClassName: "ease-entrance",
  },
  {
    name: "ease-interface",
    value: "cubic-bezier(0.25, 1, 0.5, 1)",
    usage: "Hover, focus, press. Leaves fast, arrives calm.",
    barClassName: "ease-interface",
  },
  {
    name: "linear",
    value: "for reference only — never ship this",
    usage: "Mechanical. Included so the others are legible by contrast.",
    barClassName: "ease-linear",
  },
];

const durations = [
  {
    name: "150ms",
    usage: "Colour and opacity — hover, focus rings",
    barClassName: "duration-150",
  },
  {
    name: "200ms",
    usage: "The default. Transforms and reveals",
    barClassName: "duration-200",
  },
  {
    name: "300ms",
    usage: "Ceiling. Anything slower reads as broken",
    barClassName: "duration-300",
  },
];

export default function StyleguidePage() {
  return (
    <main className="flex-1">
      <header className="py-band">
        <div className="mx-auto max-w-page px-6">
          <p className="text-muted-foreground text-label uppercase">
            Internal reference
          </p>
          <h1 className="mt-6 text-heading text-balance">Design language</h1>
          <p className="text-muted-foreground mt-5 max-w-prose text-lead text-pretty">
            The vocabulary every section is assembled from. Dark-first —
            hierarchy comes from type and space, depth from a single light
            source above. If something here is not enough to build a section,
            the answer is to extend this page, not to invent locally.
          </p>
        </div>
      </header>

      <Band
        title="Type"
        description="Seven steps with deliberately wide gaps. The jump from 18 to 44 is the hierarchy — a timid middle step would flatten it."
      >
        <div className="flex flex-col gap-10">
          {typeScale.map((step) => (
            <div
              key={step.name}
              className="hairline flex flex-col gap-3 border-t pt-6 md:flex-row md:items-baseline md:gap-10"
            >
              <div className="shrink-0 md:w-56">
                <p className="text-caption font-medium">{step.name}</p>
                <p className="text-muted-foreground mt-1 text-caption tabular-nums">
                  {step.spec}
                </p>
                <p className="text-muted-foreground mt-1 text-caption">
                  {step.usage}
                </p>
              </div>
              <p className={`${step.className} min-w-0 text-pretty`}>
                {step.sample}
              </p>
            </div>
          ))}
        </div>
      </Band>

      <Band
        title="Surfaces"
        description="One card primitive, four states. Every raised thing on the site uses panel, so sections cannot each invent their own border."
      >
        <div className="grid gap-6 sm:grid-cols-2">
          {surfaces.map((surface) => (
            <div key={surface.name} className={`${surface.className} p-8`}>
              <p className="text-caption font-medium">{surface.name}</p>
              <p className="text-muted-foreground mt-2 text-caption text-pretty">
                {surface.note}
              </p>
            </div>
          ))}
        </div>
      </Band>

      <Band
        title="Accent"
        description="One accent, rationed. Three appearances per page is the budget — the logo dot spends one of them. Past that it stops signalling anything."
      >
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="panel overflow-hidden">
            <div className="bg-primary h-28" />
            <div className="p-6">
              <p className="text-caption font-medium">primary</p>
              <p className="text-muted-foreground mt-1 text-caption tabular-nums">
                #0077B6
              </p>
            </div>
          </div>
          <div className="panel p-6 sm:col-span-2">
            <p className="text-caption font-medium">Where it is allowed</p>
            <ul className="text-muted-foreground mt-3 flex flex-col gap-2 text-caption">
              <li>— The primary call to action, once per page</li>
              <li>— The logo dot</li>
              <li>— A single state indicator, where one exists</li>
            </ul>
            <p className="text-muted-foreground mt-4 text-caption text-pretty">
              Not for headings, not for borders, not for icons, not for hover
              states. Those use foreground and muted-foreground.
            </p>
          </div>
        </div>
      </Band>

      <Band
        title="Motion"
        description="Two curves, three durations, one reveal. Hover any panel below to play it — entrances fire once on the real site, so they need replaying to be judged. Everything respects reduced motion."
      >
        <div className="group panel p-6">
          <p className="text-caption font-medium">
            Curves — hover to play all three together
          </p>
          <p className="text-muted-foreground mt-1 text-caption">
            Same distance, same 700ms. Slowed well past shipping speed so the
            difference is visible at all.
          </p>
          <div className="mt-6 flex flex-col gap-5">
            {curves.map((curve) => (
              <div key={curve.name}>
                <div className="flex items-baseline justify-between gap-4">
                  <p className="text-caption font-medium">{curve.name}</p>
                  <p className="text-muted-foreground text-caption">
                    {curve.value}
                  </p>
                </div>
                <div className="bg-muted mt-2 h-1 overflow-hidden rounded-full">
                  <div
                    className={`bg-primary h-full w-0 rounded-full transition-[width] duration-700 group-hover:w-full ${curve.barClassName}`}
                  />
                </div>
                <p className="text-muted-foreground mt-2 text-caption text-pretty">
                  {curve.usage}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="group panel mt-6 p-6">
          <p className="text-caption font-medium">
            Durations — hover to play all three together
          </p>
          <p className="text-muted-foreground mt-1 text-caption">
            All on ease-interface. These are real shipping speeds.
          </p>
          <div className="mt-6 flex flex-col gap-5">
            {durations.map((duration) => (
              <div key={duration.name}>
                <div className="flex items-baseline justify-between gap-4">
                  <p className="text-caption font-medium tabular-nums">
                    {duration.name}
                  </p>
                  <p className="text-muted-foreground text-caption text-pretty">
                    {duration.usage}
                  </p>
                </div>
                <div className="bg-muted mt-2 h-1 overflow-hidden rounded-full">
                  <div
                    className={`bg-primary ease-interface h-full w-0 rounded-full transition-[width] group-hover:w-full ${duration.barClassName}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="group panel mt-6 p-6">
          <p className="text-caption font-medium">
            Entrance pattern — hover to replay
          </p>
          <p className="text-muted-foreground mt-1 text-caption text-pretty">
            Fade and rise, 300ms on ease-entrance, 70ms apart. This is the only
            reveal we use. On the real site it fires once on scroll, which is
            why it needs a hover to be judgeable here.
          </p>
          <div className="mt-6 flex flex-col gap-3">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                style={{ transitionDelay: `${index * 70}ms` }}
                className="bg-muted ease-entrance h-10 translate-y-3 rounded-md opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 motion-reduce:translate-y-0 motion-reduce:opacity-100"
              />
            ))}
          </div>
        </div>

        <div className="panel ease-interface mt-6 p-6 transition-shadow duration-200 hover:shadow-elev-2">
          <p className="text-caption text-pretty">
            Interface response — hover this panel. 200ms on ease-interface,
            lifting to elev-2. That is the entire interaction vocabulary.
          </p>
        </div>
      </Band>

      <Band
        title="Composition"
        description="The patterns the sections are assembled from. These are generic techniques — bento grids, product artifacts, dotted rules — not anyone's signature, which is why they can be used without reading as a copy."
      >
        <div className="flex flex-col gap-12">
          <div>
            <p className="text-muted-foreground text-label uppercase">
              Two-tone headline
            </p>
            <p className="mt-4 text-title text-balance">
              Microinteractions{" "}
              <span className="text-muted-foreground">
                that feel intentional, and never announce themselves.
              </span>
            </p>
            <p className="text-muted-foreground mt-3 max-w-prose text-caption text-pretty">
              The subject stays at full weight, the qualifier drops to muted.
              One line does the work of a heading plus a paragraph, and it
              removes a whole layer of vertical spacing.
            </p>
          </div>

          <div>
            <p className="text-muted-foreground text-label uppercase">
              Artifact frame
            </p>
            <div className="mt-4 grid gap-6 md:grid-cols-2">
              <BrowserFrame label="meridian.pixiebuild.com">
                <div className="h-64">
                  <MiniSite {...strip[0]} />
                </div>
              </BrowserFrame>
              <div className="flex items-center">
                <p className="text-muted-foreground max-w-prose text-caption text-pretty">
                  Not a screenshot — a real page laid out at full size and
                  scaled to half, so the type inside is the same scale as the
                  rest of the site. It is clipped by the frame rather than
                  fitted to it, which is what makes it read as a window onto
                  something bigger instead of a pasted rectangle.
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-muted-foreground text-label uppercase">
              Centre-weighted strip
            </p>
            <div className="strip-focus mt-4 flex items-stretch gap-5 overflow-hidden">
              {strip.map((item) => (
                <div key={item.brand} className="w-80 shrink-0">
                  <BrowserFrame label={`${item.brand.toLowerCase()}.com`}>
                    <div className="h-44">
                      <MiniSite {...item} />
                    </div>
                  </BrowserFrame>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground mt-4 max-w-prose text-caption text-pretty">
              Hover the row — every card recedes except the one under the
              cursor, which comes to full weight and lifts. The focal point
              follows attention instead of being fixed, and the row reads as
              continuing past the viewport rather than ending.
            </p>
          </div>

          <div>
            <p className="text-muted-foreground text-label uppercase">
              Bento
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {bento.map((cell, index) => (
                <div
                  key={cell.title}
                  className={`panel overflow-hidden p-6 ${cell.span}`}
                >
                  <p className="text-caption font-medium">{cell.title}</p>
                  <p className="text-muted-foreground mt-2 max-w-prose text-caption text-pretty">
                    {cell.body}
                  </p>
                  <div className="-mb-20 mt-6">
                    <BrowserFrame>
                      <div className="h-40">
                        <MiniSite {...strip[index % strip.length]} />
                      </div>
                    </BrowserFrame>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground mt-4 max-w-prose text-caption text-pretty">
              Uneven spans stop a grid reading as a table, and each artifact is
              cropped by the bottom edge of its cell. That crop is the detail
              that separates a bento from three cards in a row.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {borrowed.map((row) => (
              <div key={row.verdict} className="panel p-6">
                <p className="text-caption font-medium">{row.verdict}</p>
                <p className="text-muted-foreground mt-2 text-caption text-pretty">
                  {row.items}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Band>

      <Band
        title="Texture"
        description="Two background treatments, both derived from tokens so they follow the accent and border colours rather than hardcoding their own."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="panel relative h-56 overflow-hidden">
            <div className="bg-blueprint absolute inset-0" />
            <p className="absolute bottom-6 left-6 text-caption font-medium">
              bg-blueprint
            </p>
          </div>
          <div className="panel relative h-56 overflow-hidden">
            <div className="bg-brand-glow absolute inset-0" />
            <p className="absolute bottom-6 left-6 text-caption font-medium">
              bg-brand-glow
            </p>
          </div>
        </div>
      </Band>
    </main>
  );
}

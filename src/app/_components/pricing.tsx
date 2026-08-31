import { Rise } from "@/app/_components/rise";
import { PricingFigure } from "@/app/_components/pricing-figure";
import { SectionHeading } from "@/app/_components/section-heading";
import { RiArrowRightLine, RiCheckLine } from "@remixicon/react";

import { ContactButton } from "@/components/contact-button";
import { projects } from "@/lib/pricing";
import { cn } from "@/lib/utils";

type Project = (typeof projects)[number];

/* Side by side while the cell has the width for it, stacked once it does not.
   The quoted one holds its own row a breakpoint longer than the priced pair. */
function Tier({
  project,
  split,
  rule,
}: {
  project: Project;
  split: string;
  rule: string;
}) {
  return (
    <div
      className={cn(
        "flex h-full flex-col p-6 md:p-8",
        project.featured && "bg-primary/[0.045]",
      )}
    >
      <div className={cn("flex flex-1 flex-col", split)}>
        <div>
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="text-base font-semibold tracking-tight">
              {project.name}
            </h3>
            {project.featured ? (
              <span className="bg-primary text-primary-foreground font-label shrink-0 rounded-full px-2.5 py-1 text-[0.625rem] tracking-[0.14em] uppercase">
                Most picked
              </span>
            ) : null}
          </div>
          <p className="text-muted-foreground mt-2 text-sm leading-relaxed text-pretty">
            {project.who}
          </p>

          <p className="mt-7 flex items-baseline gap-1">
            {project.price ? (
              <>
                <span className="text-muted-foreground text-lg font-medium">
                  $
                </span>
                <span className="text-4xl font-semibold tracking-tight tabular-nums">
                  <PricingFigure value={project.price} />
                </span>
              </>
            ) : (
              <span className="text-4xl font-semibold tracking-tight">
                {project.quote}
              </span>
            )}
          </p>
          <p className="text-muted-foreground font-label mt-2.5 text-[0.6875rem] tracking-[0.14em] uppercase">
            {project.meta}
          </p>
        </div>

        <div className="mt-7 flex flex-1 flex-col md:mt-0 lg:mt-7">
          <ul
            className={cn(
              "border-foreground/10 flex flex-col gap-3 border-t pt-6",
              rule,
            )}
          >
            {project.includes.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed">
                <span
                  aria-hidden
                  className={cn(
                    "mt-0.5 flex size-4.5 shrink-0 items-center justify-center rounded-full",
                    project.featured
                      ? "bg-primary text-primary-foreground"
                      : "bg-foreground/8 text-foreground/70",
                  )}
                >
                  <RiCheckLine className="size-3" />
                </span>
                <span className="text-pretty">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-8">
            <ContactButton
              variant={project.featured ? "default" : "outline"}
              className="w-full justify-center gap-2"
            >
              {project.action}
              <RiArrowRightLine className="size-4" />
            </ContactButton>
          </div>
        </div>
      </div>
    </div>
  );
}

const seams = [
  "border-b lg:border-r xl:border-b-0",
  "border-b xl:border-r xl:border-b-0",
  "lg:col-span-2 xl:col-span-1",
];

const splits = [
  "md:grid md:grid-cols-2 md:items-start md:gap-x-12 lg:flex lg:flex-col lg:items-stretch",
  "md:grid md:grid-cols-2 md:items-start md:gap-x-12 lg:flex lg:flex-col lg:items-stretch",
  "md:grid md:grid-cols-2 md:items-start md:gap-x-12 xl:flex xl:flex-col xl:items-stretch",
];

const rules = [
  "md:border-t-0 md:pt-0 lg:border-t lg:pt-6",
  "md:border-t-0 md:pt-0 lg:border-t lg:pt-6",
  "md:border-t-0 md:pt-0 xl:border-t xl:pt-6",
];

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 py-12 md:py-24">
      <div className="mx-auto max-w-page px-6 sm:px-8 md:px-12 lg:px-16">
        <SectionHeading label="Pricing">
          Where projects usually start{" "}
          <span className="text-muted-foreground">— and what that buys.</span>
        </SectionHeading>

        <Rise className="bg-card shadow-elev-2 mt-12 grid overflow-hidden rounded-2xl border md:mt-16 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className={cn("border-foreground/10", seams[index])}
            >
              <Tier
                project={project}
                split={splits[index]}
                rule={rules[index]}
              />
            </div>
          ))}
        </Rise>

        <p className="text-muted-foreground mt-8 text-center text-xs leading-relaxed text-pretty">
          These are starting points. The number moves with scope, and with what
          the site has to do.
        </p>

        <p className="mt-14 text-center text-lg tracking-tight text-balance md:mt-16">
          Not sure which one fits?{" "}
          <ContactButton
            variant="link"
            className="text-primary group/link decoration-primary/40 hover:decoration-primary ease-interface h-auto gap-1 p-0 text-lg font-medium underline decoration-1 underline-offset-4"
          >
            Tell us what you have in mind
            <RiArrowRightLine className="ease-interface size-4 transition-transform duration-300 group-hover/link:translate-x-0.5" />
          </ContactButton>{" "}
          <span className="text-muted-foreground">
            and we will work it out together.
          </span>
        </p>
      </div>
    </section>
  );
}

import { RiArrowRightLine } from "@remixicon/react";

import { ContactButton } from "@/components/contact-button";

const projects = [
  {
    name: "Landing Pages",
    who: "For a launch, a campaign, or one offer that has to earn its click.",
    price: "500",
    action: "Start your landing page",
  },
  {
    name: "Company Websites",
    who: "For a business that needs pages, a CMS, and room to keep growing.",
    price: "1,500",
    action: "Start your site",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 py-12 md:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16">
        <header className="max-w-3xl">
          <p className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
            Pricing
          </p>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-balance md:text-4xl">
            Where projects usually start.
          </h2>
        </header>

        <div className="mt-12 grid gap-5 md:mt-16 md:grid-cols-2 md:gap-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className="bg-card shadow-elev-1 group flex flex-col overflow-hidden rounded-2xl border"
            >
              <div className="flex flex-1 flex-col p-7 md:p-9">
                <h3 className="text-xl font-semibold tracking-tight">
                  {project.name}
                </h3>
                <p className="text-muted-foreground mt-2.5 max-w-xs text-sm leading-relaxed text-pretty">
                  {project.who}
                </p>

                <p className="text-muted-foreground mt-10 font-mono text-[0.6875rem] tracking-widest uppercase md:mt-12">
                  Starting at
                </p>
                <p className="mt-2.5 flex items-baseline gap-1">
                  <span className="text-muted-foreground text-2xl font-medium">
                    $
                  </span>
                  <span className="text-5xl font-semibold tracking-tight tabular-nums md:text-6xl">
                    {project.price}
                  </span>
                </p>
              </div>

              <ContactButton className="h-auto gap-2 rounded-none py-4 text-sm font-medium">
                {project.action}
                <RiArrowRightLine className="ease-interface size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </ContactButton>
            </div>
          ))}
        </div>

        <div className="bg-card mt-5 flex flex-col gap-6 rounded-2xl border p-7 md:mt-6 md:flex-row md:items-center md:justify-between md:p-9">
          <div>
            <h3 className="text-xl font-semibold tracking-tight">
              Custom Web Applications
            </h3>
            <p className="text-muted-foreground mt-2.5 max-w-lg text-sm leading-relaxed text-pretty">
              For software with accounts, data and logic behind the interface.
              Scoped together, and quoted once we both know what it has to do.
            </p>
          </div>

          <ContactButton size="lg" variant="outline" className="shrink-0">
            Book a discovery call
          </ContactButton>
        </div>

        <p className="text-muted-foreground mx-auto mt-10 max-w-lg text-center text-xs leading-relaxed text-pretty">
          Every project is unique. These are starting points, and the number
          moves with scope and requirements.
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

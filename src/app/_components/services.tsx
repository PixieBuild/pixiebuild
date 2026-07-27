import { RiRefreshLine, RiShieldCheckLine, RiSpeedUpLine } from "@remixicon/react";

import { Section } from "@/app/_components/section";
import { BrowserFrame } from "@/components/browser-frame";
import { MiniSite } from "@/components/mini-site";

const services = [
  {
    title: "Marketing websites",
    body: "Positioning, structure, copy and build for companies that have outgrown a template. Every page earns its place or it does not ship.",
    span: "sm:col-span-4",
    mini: {
      brand: "Halcyon",
      eyebrow: "Robotics",
      headline: "Warehouses that run themselves.",
      body: "A five-page site that explains a complicated product to a buyer who has ninety seconds.",
      cta: "Talk to us",
      cards: ["Platform", "Fleet", "Safety"],
    },
  },
  {
    title: "Landing pages",
    body: "One page, one job: a launch, a campaign, a raise. Written, designed and live inside two weeks.",
    span: "sm:col-span-2",
  },
  {
    title: "Web applications",
    body: "Dashboards, portals and internal tools. Built on the same stack as the site, so there is one codebase and one team to call.",
    span: "sm:col-span-3",
    mini: {
      brand: "Ledgerline",
      eyebrow: "Finance",
      headline: "Close the month by Tuesday.",
      body: "The three screens a finance team opens daily, designed before anything else was drawn.",
      cta: "Open app",
      cards: ["Accounts", "Approvals", "Reports"],
    },
  },
  {
    title: "Design systems",
    body: "Tokens, primitives and documentation your own developers can build against without asking us what the spacing should be.",
    span: "sm:col-span-3",
  },
];

const standards = [
  {
    icon: RiSpeedUpLine,
    title: "Performance budgets",
    body: "A page weight ceiling agreed at kickoff, enforced in CI, checked at launch.",
  },
  {
    icon: RiShieldCheckLine,
    title: "Accessibility",
    body: "Keyboard paths, contrast and semantics are part of the build, not an audit afterwards.",
  },
  {
    icon: RiRefreshLine,
    title: "Ongoing care",
    body: "Updates, monitoring and small changes handled monthly, so the site does not quietly rot.",
  },
];

export function Services() {
  return (
    <Section
      id="services"
      index="02"
      eyebrow="What we do"
      title="A small studio that covers the whole thing — strategy through to the deploy."
      description="No handoffs between an agency, a freelancer and whoever your developer knows. The people who design it are the people who ship it."
    >
      <div className="grid gap-4 sm:grid-cols-6">
        {services.map((service) => (
          <div
            key={service.title}
            className={`panel reveal overflow-hidden p-7 ${service.span}`}
          >
            <h3 className="text-title">{service.title}</h3>
            <p className="text-muted-foreground mt-3 max-w-prose text-pretty">
              {service.body}
            </p>
            {service.mini ? (
              <div className="mt-8 -mb-24">
                <BrowserFrame>
                  <div className="h-44">
                    <MiniSite {...service.mini} />
                  </div>
                </BrowserFrame>
              </div>
            ) : null}
          </div>
        ))}

        <div className="panel reveal grid gap-8 p-7 sm:col-span-6 md:grid-cols-3">
          {standards.map((standard) => (
            <div key={standard.title}>
              <standard.icon className="text-muted-foreground size-5" />
              <p className="mt-4 font-medium">{standard.title}</p>
              <p className="text-muted-foreground mt-2 text-caption text-pretty">
                {standard.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

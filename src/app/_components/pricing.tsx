import { RiCheckLine } from "@remixicon/react";

import { Section } from "@/app/_components/section";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Launch",
    price: "$4,800",
    note: "2 weeks",
    summary: "One page, done properly. For a launch, a campaign or a raise.",
    features: [
      "Single long-form page",
      "Custom design, no template",
      "Copy editing and structure",
      "Analytics and SEO basics",
      "One round of revisions",
    ],
    action: "Book this",
    featured: false,
  },
  {
    name: "Studio",
    price: "$12,000",
    note: "4 weeks",
    summary: "The full marketing site, with a system behind it.",
    features: [
      "Up to eight pages",
      "Design system and components",
      "CMS your team can actually use",
      "Performance budget enforced in CI",
      "Three rounds of revisions",
      "30 days of post-launch support",
    ],
    action: "Book this",
    featured: true,
  },
  {
    name: "Product",
    prefix: "from",
    price: "$28,000",
    note: "6 weeks+",
    summary: "Web applications, dashboards and platforms built to be maintained.",
    features: [
      "Discovery and product definition",
      "Full design system",
      "Front and back end build",
      "Auth, payments, integrations",
      "Staged rollout and handover",
    ],
    action: "Start a scope",
    featured: false,
  },
];

export function Pricing() {
  return (
    <Section
      id="pricing"
      index="04"
      eyebrow="Pricing"
      title="Priced per project, quoted before we start."
      description="You get the number on the call, not after a discovery phase you paid for. If the scope changes, we requote before anyone writes code."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`panel reveal flex flex-col p-7 ${tier.featured ? "shadow-elev-2" : ""}`}
          >
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-title">{tier.name}</h3>
              {tier.featured ? (
                <span className="bg-primary text-primary-foreground rounded-full px-3 py-1 text-label uppercase">
                  Recommended
                </span>
              ) : null}
            </div>

            <p className="text-muted-foreground mt-3 text-pretty">
              {tier.summary}
            </p>

            <p className="hairline mt-7 flex items-baseline gap-3 border-t pt-7">
              {tier.prefix ? (
                <span className="text-muted-foreground text-caption">
                  {tier.prefix}
                </span>
              ) : null}
              <span className="text-heading tabular-nums">{tier.price}</span>
              <span className="text-muted-foreground text-caption">
                {tier.note}
              </span>
            </p>

            <ul className="mt-7 flex flex-col gap-3">
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-3 text-caption">
                  <RiCheckLine className="text-muted-foreground mt-px size-4 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-1 items-end">
              <Button
                className="w-full"
                size="lg"
                variant={tier.featured ? "default" : "outline"}
                nativeButton={false}
                render={<a href="#contact" />}
              >
                {tier.action}
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="panel reveal mt-4 flex flex-col gap-5 p-7 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-medium">Care plan — $600 per month</p>
          <p className="text-muted-foreground mt-2 max-w-prose text-caption text-pretty">
            Hosting, monitoring, dependency updates and up to four hours of
            changes a month. Optional on every tier, cancel whenever.
          </p>
        </div>
        <Button
          variant="outline"
          size="lg"
          nativeButton={false}
          render={<a href="#contact" />}
        >
          Ask about care
        </Button>
      </div>
    </Section>
  );
}

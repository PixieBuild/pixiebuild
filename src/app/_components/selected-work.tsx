import { Section } from "@/app/_components/section";
import { BrowserFrame } from "@/components/browser-frame";
import { MiniSite } from "@/components/mini-site";

const projects = [
  {
    domain: "meridian.co",
    year: "2026",
    summary:
      "A barbershop with three chairs and a phone that never stopped ringing. Booking, calendar and reviews, live in nineteen days.",
    outcome: "Bookings taken online instead of over the phone",
    services: ["Brand site", "Booking", "CMS"],
    mini: {
      brand: "Meridian",
      eyebrow: "Grooming",
      headline: "A chair, whenever you want one.",
      body: "Pick a barber, pick a time, done in under a minute — no calls, no waiting on a reply.",
      cta: "Book",
      cards: ["Services", "Booking", "Reviews"],
    },
  },
  {
    domain: "ledgerline.app",
    year: "2026",
    summary:
      "Reconciliation software that finance teams open every morning. We rebuilt the dashboard around the three tasks they actually repeat.",
    outcome: "One screen in place of three spreadsheets",
    services: ["Product design", "Web app", "Design system"],
    mini: {
      brand: "Ledgerline",
      eyebrow: "Finance",
      headline: "Close the month by Tuesday.",
      body: "Reconciliation, approvals and audit trails in one place, for teams that stopped trusting the spreadsheet.",
      cta: "Open app",
      cards: ["Accounts", "Approvals", "Reports"],
    },
  },
  {
    domain: "emberandoak.com",
    year: "2025",
    summary:
      "A café reopening after twelve years closed. Brand story, roasting craft, menu and gallery — built to be updated from a phone.",
    outcome: "A menu the owner updates from his phone",
    services: ["Brand site", "Photography direction", "CMS"],
    mini: {
      brand: "Ember & Oak",
      eyebrow: "Coffee",
      headline: "Roasted the long way round.",
      body: "Twelve years closed, one roastery reopened, and a menu that changes with whatever landed this week.",
      cta: "Visit",
      cards: ["Story", "Menu", "Gallery"],
    },
  },
  {
    domain: "atlashealth.io",
    year: "2025",
    summary:
      "A clinical trials platform that had outgrown its first site. New structure, new copy, and a marketing stack their team can run alone.",
    outcome: "A marketing stack their own team can run",
    services: ["Positioning", "Marketing site", "SEO"],
    mini: {
      brand: "Atlas Health",
      eyebrow: "Clinical trials",
      headline: "Recruit a cohort in weeks.",
      body: "Screening, consent and scheduling for research teams who were running all three out of an inbox.",
      cta: "Book a demo",
      cards: ["Screening", "Consent", "Sites"],
    },
  },
];

export function SelectedWork() {
  return (
    <Section
      id="work"
      index="01"
      eyebrow="Selected work"
      title="A few of the things we have designed and built."
      description="Each of these was taken end to end by the studio — positioning, design, build and launch. No handoffs, no subcontractors, one team to call."
    >
      <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.domain} className="reveal group">
            <div className="ease-interface transition-transform duration-200 group-hover:-translate-y-1">
              <BrowserFrame label={project.domain}>
                <div className="h-52 sm:h-56">
                  <MiniSite {...project.mini} />
                </div>
              </BrowserFrame>
            </div>

            <div className="mt-6 flex items-baseline justify-between gap-4">
              <h3 className="text-title">{project.mini.brand}</h3>
              <p className="text-muted-foreground text-caption tabular-nums">
                {project.year}
              </p>
            </div>

            <p className="text-muted-foreground mt-3 max-w-prose text-pretty">
              {project.summary}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.services.map((service) => (
                <span
                  key={service}
                  className="hairline text-muted-foreground rounded-full border px-3 py-1 text-caption"
                >
                  {service}
                </span>
              ))}
            </div>

            <p className="hairline mt-6 flex flex-wrap items-baseline gap-x-4 gap-y-1 border-t pt-4">
              <span className="text-muted-foreground text-label uppercase">
                Outcome
              </span>
              <span className="text-caption font-medium">
                {project.outcome}
              </span>
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}

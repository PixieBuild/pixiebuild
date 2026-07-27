import { Section } from "@/app/_components/section";

const steps = [
  {
    index: "01",
    title: "Fit",
    when: "Week 0",
    body: "A call, a look at what you have, and a straight answer on whether we are the right studio for it. You leave with a fixed price and a date.",
  },
  {
    index: "02",
    title: "Shape",
    when: "Week 1",
    body: "Sitemap, message hierarchy and the first real screens — designed with your copy in them, never with placeholder text.",
  },
  {
    index: "03",
    title: "Build",
    when: "Weeks 2–3",
    body: "Design and engineering run together on a staging URL you can open any morning. Feedback goes in as comments, not as a document.",
  },
  {
    index: "04",
    title: "Launch",
    when: "Week 4",
    body: "Analytics, redirects, metadata and a performance pass before we go live. Then a walkthrough so your team can run it without us.",
  },
];

export function Process() {
  return (
    <Section
      id="process"
      index="03"
      eyebrow="How it runs"
      title="Four weeks, four stages, and a staging link from day three."
      description="Fixed scope, fixed price, no hourly billing. You always know what is being worked on and what it costs."
    >
      <ol className="grid gap-x-8 gap-y-10 md:grid-cols-4">
        {steps.map((step) => (
          <li key={step.index} className="hairline reveal border-t pt-6">
            <div className="text-muted-foreground flex items-baseline justify-between gap-4 text-label uppercase">
              <span className="tabular-nums">{step.index}</span>
              <span>{step.when}</span>
            </div>
            <h3 className="mt-5 text-title">{step.title}</h3>
            <p className="text-muted-foreground mt-3 text-pretty">{step.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

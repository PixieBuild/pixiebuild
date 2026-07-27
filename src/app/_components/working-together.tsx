import { Section } from "@/app/_components/section";

const terms = [
  {
    title: "You get the people, not a pipeline",
    body: "We run a small number of projects at a time. The person who designs your site is the person who answers your emails and pushes the deploy.",
  },
  {
    title: "The risk sits with us",
    body: "Fixed price agreed before we start, staged payments, and a staging link from the first week. You are never paying for work you have not seen.",
  },
  {
    title: "You own all of it",
    body: "Code, design files and accounts transfer to you at launch. No licence, no lock-in, and no retainer you have to keep paying to stay online.",
  },
];

export function WorkingTogether() {
  return (
    <Section
      id="studio"
      index="05"
      eyebrow="Working together"
      title="A young studio, and deliberate about what that means."
      description="We are building a name rather than trading on one. That shows up in the terms — you carry less risk than you would with a bigger agency, and more of the budget goes into the work."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {terms.map((term) => (
          <div key={term.title} className="panel reveal p-7">
            <h3 className="text-title">{term.title}</h3>
            <p className="text-muted-foreground mt-4 text-pretty">{term.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

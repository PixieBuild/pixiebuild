import { Section } from "@/app/_components/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const questions = [
  {
    question: "How long does a project actually take?",
    answer:
      "A landing page is two weeks, a full marketing site four, an application six or more. The date is agreed before kickoff. The one thing that moves it is copy and content arriving late, so we plan for that from the start.",
  },
  {
    question: "You are a new studio — why take the risk?",
    answer:
      "Fair question. We would rather earn it than claim it, so the terms are built to make the decision easy: a fixed price before we start, staged payments, and work you can see from the first week. If the first stage does not convince you, that is a clean place to stop.",
  },
  {
    question: "Do you write the copy?",
    answer:
      "We write structure and headlines, and edit everything else. Design that waits for copy ships late, so we start with real words on day one and refine them with you.",
  },
  {
    question: "What do you build with?",
    answer:
      "Next.js, TypeScript and Tailwind, deployed on Vercel or your own infrastructure. It is a stack any competent developer can pick up, which matters more than what we happen to prefer.",
  },
  {
    question: "Can you work with our existing brand?",
    answer:
      "Yes. If you have a brand, we extend it into a system for the web. If you do not, we will build a lightweight one — typography, colour and spacing — as part of the project.",
  },
  {
    question: "What happens to performance over time?",
    answer:
      "Every build ships with a page weight budget enforced in CI, so a heavy image or a new script fails the deploy rather than quietly costing you traffic.",
  },
  {
    question: "Who owns the work?",
    answer:
      "You do — code, design files and accounts, transferred at launch. There is no licence, no lock-in, and no requirement to keep us on retainer.",
  },
];

export function Faq() {
  return (
    <Section
      id="faq"
      index="06"
      eyebrow="Questions"
      title="The things people ask on the first call."
      description="If yours is not here, ask it in the form below — we answer within a day, and we will tell you if the project is not a fit."
    >
      <Accordion className="hairline max-w-3xl">
        {questions.map((item) => (
          <AccordionItem key={item.question}>
            <AccordionTrigger className="p-5 text-base hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground max-w-prose px-1 pb-5 text-pretty">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}

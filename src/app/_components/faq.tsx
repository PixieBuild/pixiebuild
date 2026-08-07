import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const questions = [
  {
    ask: "What does the starting price depend on?",
    answer:
      "How many pages there are, whether the words and images already exist, and anything the site has to talk to — a CMS, a booking system, payments. We scope and quote the whole thing before a line is written, so the number is settled before work starts.",
  },
  {
    ask: "How long does a project take?",
    answer:
      "It follows the scope, and how quickly content and feedback come back. We put a date on it together at kickoff, once we both know what is being built, and you watch it happen on a live link rather than waiting for a reveal.",
  },
  {
    ask: "Who owns the site once it is finished?",
    answer:
      "You do — the code, the design files and every account it runs on. We push to your repository, deploy to your hosting, connect your domain and hand over everything we made along the way.",
  },
  {
    ask: "Can we change the content ourselves afterwards?",
    answer:
      "Yes. Anything that needs regular updating ships with a CMS, so your team edits text, images and pages from a browser without touching code or waiting on us.",
  },
  {
    ask: "How do we work together while it is being built?",
    answer:
      "One shared channel on Slack or WhatsApp, and a link you can open at any point to see where things are. Feedback goes in the same place it is answered, so nothing needs chasing through email threads.",
  },
  {
    ask: "What happens after it launches?",
    answer:
      "We stay reachable for anything that breaks, and we are still here when you want to add to it — a new page, a new feature, or the next phase entirely.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 py-12 md:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <header className="lg:col-span-4">
            <p className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
              Questions
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-balance md:text-4xl">
              Worth asking before you start.
            </h2>
          </header>

          <Accordion
            multiple={false}
            className="border-foreground/20 dark:border-foreground/18 rounded-none border-0 border-t border-dashed lg:col-span-8"
          >
            {questions.map((question, index) => (
              <AccordionItem
                key={question.ask}
                value={question.ask}
                className="border-foreground/20 dark:border-foreground/18 border-b border-dashed data-open:bg-transparent"
              >
                <AccordionTrigger className="gap-6 px-0 py-5 hover:no-underline md:py-6">
                  <span className="flex items-start gap-4 md:gap-5">
                    <span className="text-muted-foreground group-aria-expanded/accordion-trigger:text-primary ease-interface mt-1 font-mono text-xs tabular-nums transition-colors duration-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base tracking-tight text-pretty md:text-lg">
                      {question.ask}
                    </span>
                  </span>
                </AccordionTrigger>

                <AccordionContent className="px-0 pb-6 md:pb-7">
                  <p className="text-muted-foreground max-w-xl pl-8 leading-relaxed text-pretty md:pl-9">
                    {question.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

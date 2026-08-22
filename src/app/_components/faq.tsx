import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { questions } from "@/lib/faq";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 py-12 md:py-24">
      <div className="mx-auto max-w-page px-6 sm:px-8 md:px-12 lg:px-16">
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

import { ProcessStage } from "@/app/_components/process-stage";
import { SectionHeading } from "@/app/_components/section-heading";

export function HowWeWork() {
  return (
    <section id="process" className="scroll-mt-24 py-12 lg:py-0">
      <ProcessStage
        heading={
          <div>
            <SectionHeading label="How we work">
              From idea to launch{" "}
              <span className="text-muted-foreground">
                — with the same team throughout.
              </span>
            </SectionHeading>

            <p className="text-muted-foreground mt-5 max-w-md text-[0.9375rem] leading-relaxed text-pretty">
              One team from the first call to the day it goes live. Nothing is
              handed over, queued behind someone else, or explained twice.
            </p>
          </div>
        }
      />
    </section>
  );
}

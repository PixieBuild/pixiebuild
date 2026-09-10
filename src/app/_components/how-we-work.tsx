import { ProcessStage } from "@/app/_components/process-stage";
import { SectionHeading } from "@/app/_components/section-heading";

export function HowWeWork() {
  return (
    <section id="process" className="scroll-mt-24 pt-12 md:pt-24">
      <ProcessStage
        heading={
          <div>
            <SectionHeading
              label="How we work"
              headingClassName="2xl:text-[2.75rem]"
            >
              Not just a website —{" "}
              <span className="text-muted-foreground">a digital presence.</span>
            </SectionHeading>

            <p className="text-muted-foreground mt-4 max-w-md text-[0.9375rem] leading-relaxed text-pretty 2xl:mt-6 2xl:max-w-[40ch] 2xl:text-lg">
              We start with how the business actually makes money, then design,
              build and launch around it.
            </p>
          </div>
        }
      />
    </section>
  );
}

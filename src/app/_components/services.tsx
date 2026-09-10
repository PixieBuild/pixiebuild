import { SectionHeading } from "@/app/_components/section-heading";
import { ServiceStage } from "@/app/_components/service-stage";

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-12 md:py-24">
      <ServiceStage
        heading={
          <div>
            <SectionHeading
              label="Services"
              headingClassName="2xl:text-[2.75rem]"
            >
              What we do&nbsp;—{" "}
              <span className="text-muted-foreground">
                and what it gets your business.
              </span>
            </SectionHeading>

            <p className="text-muted-foreground mt-4 max-w-md text-[0.9375rem] leading-relaxed text-pretty 2xl:mt-6 2xl:max-w-[40ch] 2xl:text-lg">
              Shown on Norvia, the studio from above. Everything here is priced
              in the next section.
            </p>
          </div>
        }
      />
    </section>
  );
}

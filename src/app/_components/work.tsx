import { SectionHeading } from "@/app/_components/section-heading";
import { WorkPreview } from "@/app/_components/work-preview";
import { projects } from "@/lib/record";

const index = (place: number) => String(place + 1).padStart(2, "0");

export function Work() {
  return (
    <section id="work" className="scroll-mt-24 py-12 md:py-24">
      <div className="mx-auto max-w-page px-6 sm:px-8 md:px-12 lg:px-16">
        <SectionHeading
          label="Selected Work"
          headingClassName="2xl:text-[2.75rem]"
        >
          Take a closer look&nbsp;—{" "}
          <span className="text-muted-foreground">
            at what we design, build and ship.
          </span>
        </SectionHeading>

        <div className="mt-12 grid gap-y-10 md:mt-16 md:gap-y-14 lg:grid-cols-2 lg:gap-x-12">
          {projects.map((project, place) => (
            <figure key={project.id}>
              <WorkPreview project={project} />
              <figcaption className="mt-4 flex items-baseline gap-3">
                <span className="text-muted-foreground/60 font-label text-[0.6875rem] tracking-[0.16em] tabular-nums">
                  {index(place)}
                </span>
                <span className="text-base font-medium tracking-tight">
                  {project.business}
                  <span className="text-muted-foreground/60 font-normal">
                    {" "}
                    · {project.place}
                  </span>
                </span>
                <span className="text-muted-foreground/60 font-label ml-auto shrink-0 text-[0.625rem] tracking-[0.16em] uppercase">
                  {project.kind}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

      </div>
    </section>
  );
}

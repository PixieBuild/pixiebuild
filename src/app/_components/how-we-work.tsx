import { ArtifactBuild } from "@/app/_components/artifact-build";
import { ArtifactDelivery } from "@/app/_components/artifact-delivery";
import { ArtifactDiscovery } from "@/app/_components/artifact-discovery";
import { ArtifactIterate } from "@/app/_components/artifact-iterate";

const stages = [
  {
    step: "01",
    lead: "Discovery",
    rest: "what the business actually sells, before anything is drawn.",
    artifact: <ArtifactDiscovery />,
  },
  {
    step: "02",
    lead: "Design and build",
    rest: "as one pass — what gets drawn is what ships, down to the spacing.",
    artifact: <ArtifactBuild />,
  },
  {
    step: "03",
    lead: "Iteration",
    rest: "you can compare — each round is a version to look at, not a description of one.",
    artifact: <ArtifactIterate />,
  },
  {
    step: "04",
    lead: "Delivery",
    rest: "into your own accounts, with everything we made transferred.",
    artifact: <ArtifactDelivery />,
  },
];

export function HowWeWork() {
  return (
    <section id="process" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 md:px-12 lg:px-16">
        <header className="max-w-3xl">
          <p className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
            How we work
          </p>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-balance md:text-4xl">
            From idea to launch{" "}
            <span className="text-muted-foreground">
              — with the same team throughout.
            </span>
          </h2>
        </header>

        {/* Off foreground rather than the border token: border already carries
            an alpha, so the dashes came out invisible in both themes. */}
        <div className="border-foreground/20 dark:border-foreground/18 mt-14 grid overflow-hidden rounded-xl border border-dashed md:mt-16 md:grid-cols-2">
          {stages.map((stage, index) => (
            <div
              key={stage.step}
              className={`bg-background border-foreground/20 dark:border-foreground/18 flex flex-col border-dashed ${
                index < stages.length - 1 ? "border-b" : ""
              } ${index % 2 === 0 ? "md:border-r" : ""} ${
                index >= 2 ? "md:border-b-0" : ""
              }`}
            >
              <div className="bg-muted/25 relative flex h-96 items-center justify-center overflow-hidden px-6 py-8">
                {stage.artifact}
              </div>

              <div className="border-foreground/20 dark:border-foreground/18 flex items-baseline gap-4 border-t border-dashed p-6 sm:p-7">
                <span className="text-muted-foreground font-mono text-xs tabular-nums">
                  {stage.step}
                </span>
                <p className="min-w-0 text-pretty">
                  <span className="font-medium">{stage.lead}</span>{" "}
                  <span className="text-muted-foreground">{stage.rest}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

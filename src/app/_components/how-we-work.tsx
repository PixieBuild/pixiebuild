import { ArtifactBuild } from "@/app/_components/artifact-build";
import { ArtifactDelivery } from "@/app/_components/artifact-delivery";
import { ArtifactDiscovery } from "@/app/_components/artifact-discovery";
import { ArtifactIterate } from "@/app/_components/artifact-iterate";

const stages = [
  {
    step: "01",
    lead: "Discovery",
    rest: "what the business sells, before anything is drawn.",
    artifact: <ArtifactDiscovery />,
  },
  {
    step: "02",
    lead: "One workflow",
    rest: "design and code in one pass, never handed over.",
    artifact: <ArtifactBuild />,
  },
  {
    step: "03",
    lead: "Iteration",
    rest: "every round is a version you can open.",
    artifact: <ArtifactIterate />,
  },
  {
    step: "04",
    lead: "Delivery",
    rest: "into your own accounts, everything transferred.",
    artifact: <ArtifactDelivery />,
  },
];

export function HowWeWork() {
  return (
    <section id="process" className="scroll-mt-24 py-12 md:py-24">
      <div className="mx-auto max-w-page px-6 sm:px-8 md:px-12 lg:px-16">
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

        <div className="mt-14 grid gap-5 md:mt-16 md:grid-cols-2 md:gap-6">
          {stages.map(stage => (
            <div
              key={stage.step}
              className="border-foreground/20 dark:border-foreground/18 bg-background flex flex-col overflow-hidden rounded-xl border border-dashed"
            >
              <div
                data-nosnippet
                className="bg-muted dark:bg-muted/25 relative flex h-96 items-center justify-center overflow-hidden px-6 py-8"
              >
                {stage.artifact}
              </div>

              <div className="flex items-baseline gap-4 p-6 sm:p-7">
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

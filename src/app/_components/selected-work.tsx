import { SectionHeading } from "@/app/_components/section-heading";
import { WorkStack, type Project } from "@/app/_components/work-stack";

const projects: Project[] = [
  {
    name: "Ember & Oak",
    tone: "light",
    sector: "Coffee house",
    built: "The room, the craft and the menu — in that order.",
    delivered: ["Brand site", "Menu", "CMS"],
    year: "2025",
    image: "/work/ember-oak.webp",
    blur: "data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAADwAQCdASoMAAgABABsJZQCdAD0j00NyQAA/u/WhBUm0PACIoMgYbMnKyAAAA==",
  },
  {
    name: "Sable",
    tone: "dark",
    sector: "AI agents",
    built: "An agent platform that leads with the product, not the pitch.",
    delivered: ["Marketing site", "Design system", "Docs"],
    year: "2026",
    image: "/work/sable.webp",
    blur: "data:image/webp;base64,UklGRi4AAABXRUJQVlA4ICIAAACQAQCdASoMAAgABABsJaQAApz73AAA/vLKpUSJLZiqYAAA",
  },
  {
    name: "Flowboard",
    tone: "dark",
    sector: "Task management",
    built: "A kanban board where the work moves by dragging it.",
    delivered: ["Product design", "Web app", "Accounts"],
    year: "2026",
    image: "/work/flowboard.webp",
    blur: "data:image/webp;base64,UklGRigAAABXRUJQVlA4IBwAAAAwAQCdASoMAAgABABsJZwAA3AA/u+ihSjDyAAA",
    unoptimized: true,
  },
  {
    name: "Meridian",
    tone: "light",
    sector: "Grooming",
    built: "A grooming lounge where booking a chair comes first.",
    delivered: ["Brand site", "Booking", "CMS"],
    year: "2026",
    image: "/work/meridian.webp",
    blur: "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACwAQCdASoMAAgABABsJZQAAudVNYqAAP7t3/DlVdAGdnxbaRcM586BwJ94l4AA",
  },
];

export function SelectedWork() {
  return (
    <section id="work" className="scroll-mt-24 py-12 md:py-24">
      <div className="mx-auto max-w-page px-6 sm:px-8 md:px-12 lg:px-16">
        <SectionHeading label="Selected work">
          Take a closer look{" "}
          <span className="text-muted-foreground">
            — at what we design, build and ship.
          </span>
        </SectionHeading>
      </div>

      <div className="mx-auto mt-14 max-w-page px-6 sm:px-8 md:mt-20 md:px-12 lg:px-16">
        <WorkStack projects={projects} />
      </div>
    </section>
  );
}

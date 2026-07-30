import { WorkCarousel, type Project } from "@/app/_components/work-carousel";

const projects: Project[] = [
  {
    name: "Ember & Oak",
    domain: "emberandoak.com",
    sector: "Coffee house",
    built:
      "A neighbourhood coffee house in Portland — the room, the craft and the menu, in the order a first visit asks for them.",
    delivered: ["Brand site", "Menu", "CMS"],
    year: "2025",
    image: "/work/ember-oak.webp",
    phone: "/work/ember-oak-mobile.webp",
  },
  {
    name: "Sable",
    domain: "sable.dev",
    sector: "AI agents",
    built:
      "A marketing site for an agent platform, led by the product itself — the workspace is on screen before a word of copy explains it.",
    delivered: ["Marketing site", "Design system", "Docs"],
    year: "2026",
    image: "/work/sable.webp",
    phone: "/work/sable-mobile.webp",
  },
  {
    name: "Flowboard",
    domain: "flowboard.anuragkumar.dev",
    sector: "Task management",
    built:
      "A kanban tool where a task moves by dragging it — boards and columns you name yourself, subtasks and notes on every card.",
    delivered: ["Product design", "Web app", "Accounts"],
    year: "2026",
    image: "/work/flowboard.webp",
    phone: "/work/flowboard-mobile.webp",
    unoptimized: true,
  },
  {
    name: "Meridian",
    domain: "meridian.co",
    sector: "Grooming",
    built:
      "A grooming lounge where booking a chair is the first thing on the page, with the menu, the prices and the reviews right behind it.",
    delivered: ["Brand site", "Booking", "CMS"],
    year: "2026",
    image: "/work/meridian.webp",
    phone: "/work/meridian-mobile.webp",
  },
];

export function SelectedWork() {
  return (
    <section id="work" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 md:px-12 lg:px-16">
        <header className="max-w-3xl">
          <p className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
            Selected work
          </p>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-balance md:text-4xl">
            Take a closer look{" "}
            <span className="text-muted-foreground">
              — at what we design, build and ship.
            </span>
          </h2>
        </header>
      </div>

      <WorkCarousel projects={projects} />
    </section>
  );
}

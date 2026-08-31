import Image from "next/image";

export type Project = {
  name: string;
  sector: string;
  built: string;
  delivered: string[];
  year: string;
  image: string;
  blur: string;
  tone: "light" | "dark";
  unoptimized?: boolean;
};

/* Each card stops a little lower than the one before, so the edge of every
   project it has already passed stays on screen underneath it. */
const rest = ["lg:top-24", "lg:top-28", "lg:top-32", "lg:top-36"];

export function WorkStack({ projects }: { projects: Project[] }) {
  return (
    <div className="flex flex-col gap-6 md:gap-8">
      {projects.map((project, index) => (
        <article
          key={project.name}
          className={`lg:sticky ${rest[index] ?? "lg:top-36"}`}
        >
          <div className="group bg-card shadow-elev-2 grid overflow-hidden rounded-2xl border lg:grid-cols-[1.4fr_1fr]">
            <div className="relative aspect-16/10">
              <Image
                src={project.image}
                alt={`${project.name} — ${project.sector}`}
                fill
                sizes="(min-width: 1024px) 56vw, 92vw"
                unoptimized={project.unoptimized}
                placeholder="blur"
                blurDataURL={project.blur}
                className="ease-interface object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>

            <div className="flex flex-col justify-between p-7 md:p-10 lg:p-12">
              <div className="text-muted-foreground font-label flex items-baseline justify-between gap-4 text-[0.6875rem] tracking-[0.16em] uppercase">
                <span>{project.sector}</span>
                <span className="flex items-baseline gap-3">
                  <span className="tabular-nums">{project.year}</span>
                  <span className="text-foreground/25 text-sm tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </span>
              </div>

              <div className="mt-10 lg:mt-0">
                <h3 className="text-3xl font-semibold tracking-tight md:text-4xl">
                  {project.name}
                </h3>
                <p className="text-muted-foreground mt-4 leading-relaxed text-pretty">
                  {project.built}
                </p>
                <ul className="border-foreground/10 text-muted-foreground/70 font-label mt-7 flex flex-wrap items-center gap-x-3 gap-y-1.5 border-t pt-5 text-[0.6875rem] tracking-[0.16em] uppercase">
                  {project.delivered.map((item, place) => (
                    <li key={item} className="flex items-center gap-3">
                      {item}
                      {place < project.delivered.length - 1 ? (
                        <span aria-hidden className="bg-border size-1 rounded-full" />
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

import Link from "next/link";

export type LegalSection = {
  title: string;
  body: string[];
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  lead: string;
  updated: string;
  sections: LegalSection[];
};

const papers = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Refunds", href: "/refund" },
];

/* Sections are numbered so a clause can be pointed at in an email. */
const anchor = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export function LegalPage({
  eyebrow,
  title,
  lead,
  updated,
  sections,
}: LegalPageProps) {
  return (
    <main className="flex-1">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-20 sm:px-8 md:px-12 md:pt-24 md:pb-28 lg:px-16">
        <header className="max-w-3xl">
          <p className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
            {eyebrow}
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-balance md:text-5xl">
            {title}
          </h1>
          <p className="text-muted-foreground mt-5 text-lg leading-relaxed text-pretty">
            {lead}
          </p>
          <p className="text-muted-foreground mt-6 text-xs font-medium tracking-widest uppercase">
            Last updated {updated}
          </p>
        </header>

        <div className="mt-14 grid gap-12 md:mt-20 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-16">
          <nav
            aria-label="On this page"
            className="hidden lg:sticky lg:top-16 lg:block lg:self-start"
          >
            <p className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
              On this page
            </p>
            <ol className="mt-5 flex flex-col gap-3">
              {sections.map((section, index) => (
                <li key={section.title} className="flex gap-3 text-sm">
                  <span className="text-muted-foreground/60 tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <a
                    href={`#${anchor(section.title)}`}
                    className="text-muted-foreground hover:text-foreground ease-interface transition-colors duration-200"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="flex max-w-3xl flex-col gap-12 md:gap-14">
            {sections.map((section, index) => (
              <section
                key={section.title}
                id={anchor(section.title)}
                className="scroll-mt-16"
              >
                <div className="flex items-baseline gap-4">
                  <span className="text-muted-foreground/60 text-sm tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
                    {section.title}
                  </h2>
                </div>

                <div className="mt-4 flex flex-col gap-4 lg:pl-10">
                  {section.body.map(paragraph => (
                    <p
                      key={paragraph}
                      className="text-muted-foreground leading-relaxed text-pretty"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}

            <div className="border-t pt-8">
              <p className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
                The rest of the paperwork
              </p>
              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
                {papers
                  .filter(paper => paper.label.toLowerCase() !== eyebrow.toLowerCase())
                  .map(paper => (
                    <Link
                      key={paper.href}
                      href={paper.href}
                      className="hover:text-foreground ease-interface text-sm transition-colors duration-200"
                    >
                      {paper.label}
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

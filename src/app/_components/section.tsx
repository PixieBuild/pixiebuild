import type * as React from "react";

type SectionProps = {
  id: string;
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  children: React.ReactNode;
};

export function Section({
  id,
  index,
  eyebrow,
  title,
  description,
  children,
}: SectionProps) {
  return (
    <section id={id} className="hairline scroll-mt-24 border-t py-band">
      <div className="page-gutter mx-auto max-w-page">
        <header className="grid gap-6 md:grid-cols-12 md:items-end md:gap-10">
          <div className="reveal md:col-span-7">
            <p className="text-muted-foreground flex items-center gap-3 text-label uppercase">
              <span className="tabular-nums">{index}</span>
              <span aria-hidden className="bg-border h-px w-8" />
              {eyebrow}
            </p>
            <h2 className="mt-5 text-title text-balance md:text-heading">
              {title}
            </h2>
          </div>
          <p className="text-muted-foreground reveal text-lead text-pretty md:col-span-5">
            {description}
          </p>
        </header>

        <div className="mt-14 md:mt-16">{children}</div>
      </div>
    </section>
  );
}

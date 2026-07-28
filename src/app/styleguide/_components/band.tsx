import type * as React from "react";

type BandProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export function Band({ title, description, children }: BandProps) {
  return (
    <section className="border-t py-28 first:border-t-0">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 md:px-12 lg:px-16">
        <header className="max-w-prose">
          <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
          <p className="text-muted-foreground mt-3 text-lg leading-relaxed text-pretty">
            {description}
          </p>
        </header>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

import type * as React from "react";

type BandProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export function Band({ title, description, children }: BandProps) {
  return (
    <section className="hairline border-t py-band first:border-t-0">
      <div className="mx-auto max-w-page px-6">
        <header className="max-w-prose">
          <h2 className="text-title">{title}</h2>
          <p className="text-muted-foreground mt-3 text-lead text-pretty">
            {description}
          </p>
        </header>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

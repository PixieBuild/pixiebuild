import type * as React from "react";

type BrowserFrameProps = {
  label?: string;
  children: React.ReactNode;
};

export function BrowserFrame({ label, children }: BrowserFrameProps) {
  return (
    <div className="panel overflow-hidden">
      <div className="hairline flex items-center gap-2 border-b px-4 py-3">
        {[0, 1, 2].map((dot) => (
          <span key={dot} className="bg-border size-2 rounded-full" />
        ))}
        {label ? (
          <span className="bg-muted text-muted-foreground ml-2 truncate rounded-full px-3 py-1 text-caption">
            {label}
          </span>
        ) : null}
      </div>
      <div className="bg-muted relative overflow-hidden">{children}</div>
    </div>
  );
}

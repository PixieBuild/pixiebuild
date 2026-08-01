"use client";

import { useRef, useState } from "react";

export function ArtifactIterate() {
  const [split, setSplit] = useState(52);
  const area = useRef<HTMLDivElement>(null);

  const track = (clientX: number) => {
    const bounds = area.current?.getBoundingClientRect();
    if (!bounds) return;
    const next = ((clientX - bounds.left) / bounds.width) * 100;
    setSplit(Math.min(100, Math.max(0, next)));
  };

  return (
    <div
      ref={area}
      onPointerDown={(event) => {
        event.currentTarget.setPointerCapture(event.pointerId);
        track(event.clientX);
      }}
      onPointerMove={(event) => {
        if (event.buttons > 0) track(event.clientX);
      }}
      className="bg-card shadow-panel relative h-64 w-full cursor-ew-resize touch-none overflow-hidden rounded-xl border select-none"
    >
      <div className="relative h-full">
        <div className="absolute inset-0 flex items-center justify-center px-12">
          <div className="w-full max-w-56 rounded-lg border p-4">
            <p className="text-muted-foreground text-sm">Studio plan</p>
            <p className="text-muted-foreground mt-1 text-sm tabular-nums">
              $1,500
            </p>
            <p className="text-muted-foreground mt-3 text-xs leading-relaxed">
              Design and build, four weeks.
            </p>
            <span className="bg-muted text-muted-foreground mt-3 block w-fit rounded-md px-3 py-1.5 text-xs">
              Book a call
            </span>
          </div>
        </div>

        <div
          style={{ clipPath: `inset(0 ${100 - split}% 0 0)` }}
          className="bg-card absolute inset-0 flex items-center justify-center px-12"
        >
          <div className="bg-background shadow-elev-2 w-full max-w-56 rounded-lg border p-4">
            <div className="flex items-baseline justify-between gap-2">
              <p className="text-sm font-medium tracking-tight">Studio plan</p>
              <span className="text-muted-foreground font-mono text-[0.625rem] tracking-widest uppercase">
                Popular
              </span>
            </div>
            <p className="mt-2 flex items-baseline gap-1.5">
              <span className="text-2xl font-semibold tracking-tight tabular-nums">
                $1,500
              </span>
              <span className="text-muted-foreground text-xs">/ project</span>
            </p>
            <p className="text-muted-foreground mt-2 text-xs leading-relaxed">
              Design and build, four weeks.
            </p>
            <span className="bg-primary text-primary-foreground mt-4 block rounded-full py-2 text-center text-xs font-medium">
              Book a call
            </span>
          </div>
        </div>

        <div
          aria-hidden
          style={{ left: `${split}%` }}
          className="bg-foreground/25 absolute inset-y-0 w-px"
        >
          <span className="bg-background border-foreground/20 absolute top-1/2 left-1/2 size-6 -translate-x-1/2 -translate-y-1/2 rounded-full border shadow-sm" />
        </div>

        <span className="text-muted-foreground bg-background/70 absolute top-1/2 left-3 -translate-y-1/2 rounded-full px-2 py-0.5 font-mono text-[0.625rem] backdrop-blur-sm">
          v2
        </span>
        <span className="text-muted-foreground bg-background/70 absolute top-1/2 right-3 -translate-y-1/2 rounded-full px-2 py-0.5 font-mono text-[0.625rem] backdrop-blur-sm">
          v1
        </span>

        <input
          type="range"
          min={0}
          max={100}
          value={Math.round(split)}
          onChange={(event) => setSplit(Number(event.target.value))}
          aria-label="Compare version one and version two"
          className="sr-only"
        />
      </div>
    </div>
  );
}

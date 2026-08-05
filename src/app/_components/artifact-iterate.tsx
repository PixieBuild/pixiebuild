"use client";

import { RiArrowLeftRightLine } from "@remixicon/react";
import { useRef, useState } from "react";

const asked = ["Name", "Email", "Company", "Budget"];

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
      onPointerDown={event => {
        event.currentTarget.setPointerCapture(event.pointerId);
        track(event.clientX);
      }}
      onPointerMove={event => {
        if (event.buttons > 0) track(event.clientX);
      }}
      className="bg-card shadow-panel relative h-64 w-full cursor-ew-resize touch-none overflow-hidden rounded-xl border select-none"
    >
      <div className="relative h-full">
        <div className="absolute inset-0 flex items-center justify-center px-10">
          <div className="bg-background h-52 w-full max-w-64 rounded-lg border p-3">
            <p className="text-[0.6875rem] font-medium tracking-tight">
              Get in touch
            </p>

            <div className="mt-2 grid grid-cols-2 gap-x-2 gap-y-1">
              {asked.map(field => (
                <div key={field}>
                  <p className="text-muted-foreground text-[0.5625rem]">
                    {field}
                  </p>
                  <span className="bg-muted/40 mt-0.5 block h-5 rounded border" />
                </div>
              ))}
            </div>

            <p className="text-muted-foreground mt-1.5 text-[0.5625rem]">
              Message
            </p>
            <span className="bg-muted/40 mt-0.5 block h-6 rounded border" />

            <span className="text-muted-foreground mt-2 block w-fit rounded-md border px-2.5 py-1 text-[0.625rem]">
              Submit
            </span>
          </div>
        </div>

        <div
          style={{ clipPath: `inset(0 ${100 - split}% 0 0)` }}
          className="bg-card absolute inset-0 flex items-center justify-center px-10"
        >
          <div className="bg-background shadow-elev-2 h-52 w-full max-w-64 rounded-lg border p-3">
            <p className="text-[0.6875rem] font-medium tracking-tight">
              Start a project
            </p>
            <p className="text-muted-foreground mt-1 text-[0.5625rem]">
              Two questions. The rest on the call.
            </p>

            <p className="text-muted-foreground mt-3 text-[0.5625rem]">Email</p>
            <span className="bg-muted/40 mt-0.5 block h-5 rounded border" />

            <p className="text-muted-foreground mt-2 text-[0.5625rem]">
              What are you building?
            </p>
            <span className="bg-muted/40 mt-0.5 block h-6 rounded border" />

            <span className="bg-primary text-primary-foreground mt-3 block rounded-full py-1.5 text-center text-[0.625rem] font-medium">
              Send brief
            </span>
          </div>
        </div>

        <div
          aria-hidden
          style={{ left: `${split}%` }}
          className="bg-foreground/25 absolute inset-y-0 w-px"
        >
          <span className="bg-background border-foreground/20 text-muted-foreground absolute top-1/2 left-1/2 flex size-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border shadow-sm">
            <RiArrowLeftRightLine className="size-3" />
          </span>
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
          onChange={event => setSplit(Number(event.target.value))}
          aria-label="Compare version one and version two"
          className="sr-only"
        />
      </div>
    </div>
  );
}

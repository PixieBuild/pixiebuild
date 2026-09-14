"use client";

import { useReducedMotion } from "motion/react";
import Image from "next/image";
import { useRef, useState } from "react";

import type { Project } from "@/lib/record";
import { cn } from "@/lib/utils";

export function WorkPreview({ project }: { project: Project }) {
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const still = useReducedMotion();

  /* The poster carries the preview until a pointer arrives, so nothing
     downloads or moves until the visitor asks for it. */
  const start = () => {
    if (still || !project.video) return;
    setPlaying(true);
    video.current?.play().catch(() => setPlaying(false));
  };

  const stop = () => {
    setPlaying(false);
    video.current?.pause();
  };

  return (
    <div
      onPointerEnter={start}
      onPointerLeave={stop}
      className="group/preview relative aspect-16/10 w-full overflow-hidden rounded-xl mask-b-from-88%"
    >
      <div className="ease-interface motion-reduce:transition-none absolute inset-0 transition-transform duration-700 group-hover/preview:scale-[1.03]">
        <Image
          src={project.poster}
          alt={`${project.business} in ${project.place}`}
          fill
          sizes="(min-width: 1024px) 50vw, 90vw"
          className="object-cover object-top"
        />

        {project.video ? (
          <video
            ref={video}
            src={project.video}
            muted
            loop
            playsInline
            preload="none"
            tabIndex={-1}
            aria-hidden
            className={cn(
              "ease-interface absolute inset-0 size-full object-cover object-top transition-opacity duration-300",
              playing ? "opacity-100" : "opacity-0",
            )}
          />
        ) : null}
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

export type Project = {
  name: string;
  sector: string;
  built: string;
  image: string;
  blur: string;
  unoptimized?: boolean;
};

export function WorkRail({ projects }: { projects: Project[] }) {
  const [api, setApi] = useState<CarouselApi>();
  const [active, setActive] = useState(0);
  const [ready, setReady] = useState(false);
  const still = useReducedMotion();

  useEffect(() => {
    if (!api) return;

    const sync = () => setActive(api.selectedScrollSnap());

    sync();
    api.on("select", sync);

    return () => {
      api.off("select", sync);
    };
  }, [api]);

  /* Embla only centres the slides once the webfonts have resized them. */
  useEffect(() => {
    if (!api) return;

    const reveal = setTimeout(() => setReady(true), 350);

    return () => clearTimeout(reveal);
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      opts={{ align: "center", loop: true }}
      className="mx-auto max-w-rail px-6 sm:px-8 md:px-12 lg:px-16"
    >
      <CarouselContent
        className={cn(
          "ease-entrance -ml-4 transition-opacity duration-500 md:-ml-6",
          ready ? "opacity-100" : "opacity-0",
        )}
      >
        {projects.map((project, index) => (
          <CarouselItem
            key={project.name}
            className="basis-full pl-4 sm:basis-1/2 md:pl-6 lg:basis-[34%]"
          >
            <motion.article
              initial={false}
              animate={{
                scale: index === active ? 1 : 0.9,
                opacity: index === active ? 1 : 0.4,
                y: index === active ? 0 : 14,
              }}
              transition={
                still
                  ? { duration: 0 }
                  : { type: "spring", stiffness: 220, damping: 17, mass: 0.9 }
              }
              className={cn(
                "bg-card transform-gpu flex h-full flex-col overflow-hidden rounded-2xl border",
                index === active
                  ? "border-primary/40 shadow-focus"
                  : "shadow-elev-1",
              )}
            >
              <div className="relative aspect-16/10 shrink-0 overflow-hidden border-b">
                <Image
                  src={project.image}
                  alt={`${project.name} — ${project.sector}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 88vw"
                  unoptimized={project.unoptimized}
                  placeholder="blur"
                  blurDataURL={project.blur}
                  className="object-cover object-top"
                />
              </div>

              <div className="flex min-h-44 flex-1 flex-col p-6 md:min-h-52 md:p-7">
                <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                  {project.name}
                </h3>
                <p className="text-muted-foreground mt-2.5 text-sm leading-relaxed text-pretty">
                  {project.built}
                </p>

                <div className="border-foreground/10 text-muted-foreground font-label mt-auto flex items-baseline justify-between gap-4 border-t pt-4 text-[0.6875rem] tracking-[0.16em] uppercase">
                  <span>{project.sector}</span>
                  <span className="text-foreground/35 tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </motion.article>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="mt-12 flex items-center gap-4 md:mt-14 md:gap-6">
        <CarouselPrevious className="static size-10 translate-x-0 translate-y-0" />

        <div className="flex items-center">
          {projects.map((project, index) => (
            <Button
              key={project.name}
              variant="ghost"
              size="icon-sm"
              aria-label={`Show ${project.name}`}
              aria-current={index === active}
              onClick={() => api?.scrollTo(index)}
              className="rounded-full hover:bg-transparent"
            >
              <span
                aria-hidden
                className={cn(
                  "ease-interface h-1.5 rounded-full transition-all duration-500",
                  index === active
                    ? "bg-primary w-6"
                    : "bg-border group-hover:bg-foreground/40 w-1.5",
                )}
              />
            </Button>
          ))}
        </div>

        <CarouselNext className="static size-10 translate-x-0 translate-y-0" />
      </div>
    </Carousel>
  );
}

import { Fragment } from "react";

import { SiteHeader } from "@/app/_components/site-header";
import PbLogo from "@/assets/pb-logo.svg";
import { Button } from "@/components/ui/button";

const headline = ["Beautiful", "is", "the", "baseline"];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden className="bg-hero-glow absolute inset-0" />

      <SiteHeader />

      <div className="relative mx-auto max-w-6xl px-6 pt-12 pb-14 sm:px-8 sm:pt-16 sm:pb-16 md:px-12 md:pt-24 md:pb-20 lg:px-16">
        <PbLogo
          aria-hidden
          className="text-foreground pointer-events-none absolute right-0 bottom-0 size-48 opacity-[0.12] mask-[linear-gradient(to_top_left,black,transparent_78%)] sm:bottom-18 md:right-0 md:bottom-22 md:size-64 lg:right-4 lg:size-72 xl:-right-12 2xl:-right-20 dark:opacity-[0.1]"
        />
        <p
          style={{ animationDelay: "0ms" }}
          className="bg-background/55 text-foreground motion-reduce:animate-none inline-flex animate-rise-in items-center gap-2.5 rounded-full border py-1.5 pr-4 pl-3 text-sm backdrop-blur-xl"
        >
          <span aria-hidden className="bg-emerald-500 size-1.5 rounded-full" />
          Open for new projects
        </p>

        <h1 className="mt-7 text-[clamp(2.75rem,6.6vw,4.5rem)] leading-[1.05] font-semibold tracking-[-0.035em] sm:mt-8 md:mt-12 md:leading-[1.15]">
          <span className="block">
            {headline.map((word, index) => (
              <Fragment key={word}>
                <span
                  style={{ animationDelay: `${120 + index * 70}ms` }}
                  className="motion-reduce:animate-none inline-block animate-rise-in"
                >
                  {word === "baseline" ? (
                    <>
                      <span className="text-drift inline-block">baseline</span>.
                    </>
                  ) : (
                    word
                  )}
                </span>{" "}
              </Fragment>
            ))}
          </span>
          <span
            style={{ animationDelay: "430ms" }}
            className="text-muted-foreground motion-reduce:animate-none block animate-rise-in"
          >
            Fast is the point.
          </span>
        </h1>

        <div className="mt-9 sm:mt-11 md:mt-16">
          <span
            aria-hidden
            className="from-border to-transparent mb-8 hidden h-px bg-linear-to-r from-45% to-85% md:block"
          />

          <p
            style={{ animationDelay: "520ms" }}
            className="text-muted-foreground motion-reduce:animate-none max-w-[40ch] animate-rise-in text-lg leading-relaxed text-pretty"
          >
            Websites and web apps for startups and businesses — designed, built
            and shipped in weeks.
          </p>

          <div
            style={{ animationDelay: "580ms" }}
            className="motion-reduce:animate-none mt-7 flex animate-rise-in flex-wrap gap-3 sm:mt-8"
          >
            <Button
              size="lg"
              nativeButton={false}
              render={<a href="#contact" />}
            >
              Start a project
            </Button>
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              render={<a href="#work" />}
            >
              See our work
            </Button>
          </div>
        </div>

        <div
          style={{ animationDelay: "640ms" }}
          className="text-muted-foreground motion-reduce:animate-none mt-11 flex animate-rise-in flex-wrap items-center gap-x-3 gap-y-2 text-xs font-medium tracking-widest uppercase sm:mt-12 sm:gap-x-4 md:mt-16"
        >
          <span className="whitespace-nowrap">Fast by default</span>
          <span
            aria-hidden
            className="bg-border size-1 shrink-0 rounded-full"
          />
          <span className="whitespace-nowrap">Accessible by design</span>
          <span
            aria-hidden
            className="from-border hidden h-px min-w-6 flex-1 bg-linear-to-r to-transparent sm:block"
          />
        </div>
      </div>
    </section>
  );
}

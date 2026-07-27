import { Fragment } from "react";

import { HeroBackdrop } from "@/app/_components/hero-backdrop";
import { SiteHeader } from "@/app/_components/site-header";
import { Button } from "@/components/ui/button";

/* Split so the words land one after another, and so the rule can sit under
   the word it is a pun on. */
const headline = ["Beautiful", "is", "the", "baseline"];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <HeroBackdrop />

      <SiteHeader />

      <div className="page-gutter relative mx-auto max-w-page pt-12 pb-14 sm:pt-16 sm:pb-16 md:pt-24 md:pb-20">
        <p
          style={{ animationDelay: "0ms" }}
          className="hairline bg-background/55 text-muted-foreground motion-reduce:animate-none inline-flex animate-rise-in items-center gap-2.5 rounded-full border py-1.5 pr-4 pl-3 text-caption backdrop-blur-xl"
        >
          <span aria-hidden className="bg-primary size-1.5 rounded-full" />
          Open for new projects
        </p>

        {/* Sized against the width the line has to fit, not against the
            breakpoints: at 6.6vw the first sentence holds one line from 640px
            up, and it lands on the display step at ~1090px. */}
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

        <div className="hairline mt-9 grid gap-8 sm:mt-11 sm:gap-10 md:mt-16 md:grid-cols-12 md:gap-8 md:border-t md:pt-8">
          <div className="md:col-span-6">
            <p
              style={{ animationDelay: "520ms" }}
              className="text-muted-foreground motion-reduce:animate-none max-w-[40ch] animate-rise-in text-lead text-pretty"
            >
              Websites and web apps for startups and businesses — designed,
              built and shipped in weeks.
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
            className="motion-reduce:animate-none animate-rise-in md:col-span-5 md:col-start-8 lg:col-span-4 lg:col-start-9"
          >
            <p className="text-muted-foreground text-label uppercase">
              Who we build for
            </p>
            <p className="mt-3 max-w-[46ch] text-pretty md:mt-4">
              Founders shipping a first product, and businesses whose website
              stopped looking like the company behind it.
            </p>
          </div>
        </div>

        <div
          style={{ animationDelay: "700ms" }}
          className="text-muted-foreground motion-reduce:animate-none mt-11 flex animate-rise-in flex-wrap items-center gap-x-3 gap-y-2 text-label uppercase sm:mt-12 sm:gap-x-4 md:mt-16"
        >
          <span className="whitespace-nowrap">Fast by default</span>
          <span aria-hidden className="bg-border size-1 shrink-0 rounded-full" />
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

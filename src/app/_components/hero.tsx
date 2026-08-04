import { Fragment } from "react";

import { ContactButton } from "@/components/contact-button";
import { HeroBuild } from "@/app/_components/hero-build";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";

const headline = ["Beautiful", "is", "the", "baseline"];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden className="bg-hero-glow absolute inset-0" />

      <SiteHeader />

      <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-14 sm:px-8 sm:pb-16 md:px-12 md:pb-20 lg:px-16 xl:pt-24">
        <p
          style={{ animationDelay: "0ms" }}
          className="bg-background/55 text-foreground motion-reduce:animate-none inline-flex animate-rise-in items-center gap-2.5 rounded-full border py-1.5 pr-4 pl-3 text-sm backdrop-blur-xl"
        >
          <span aria-hidden className="relative flex size-1.5">
            <span className="bg-emerald-500 motion-safe:animate-ping absolute inline-flex size-full rounded-full opacity-60" />
            <span className="bg-emerald-500 relative inline-flex size-1.5 rounded-full" />
          </span>
          Now booking new projects
        </p>

        <h1 className="mt-5 text-[clamp(2.25rem,4.8vw,3.25rem)] leading-[1.05] font-semibold tracking-[-0.035em] sm:mt-6 md:mt-7 md:leading-[1.08]">
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

        <p
          style={{ animationDelay: "520ms" }}
          className="text-muted-foreground motion-reduce:animate-none mt-4 max-w-[40ch] animate-rise-in text-lg leading-relaxed text-pretty sm:mt-5"
        >
          Websites and web apps for startups and businesses — designed, built
          and shipped in weeks.
        </p>

        <div
          style={{ animationDelay: "580ms" }}
          className="motion-reduce:animate-none mt-6 flex animate-rise-in flex-wrap gap-3 sm:mt-7"
        >
          <ContactButton size="lg">Start a project</ContactButton>
          <Button
            size="lg"
            variant="outline"
            nativeButton={false}
            render={<a href="#work" />}
          >
            See our work
          </Button>
        </div>

        <div className="mt-9 sm:mt-10 md:mt-11">
          <HeroBuild />
        </div>
      </div>
    </section>
  );
}

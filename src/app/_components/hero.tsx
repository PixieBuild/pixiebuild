import { RiArrowRightUpLine } from "@remixicon/react";
import { Fragment } from "react";

import { ContactButton } from "@/components/contact-button";
import { HeroBuild } from "@/app/_components/hero-build";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";

const headline = ["Beautiful", "is", "the", "baseline"];

const practice = [
  "Landing pages",
  "Company websites",
  "Custom web applications",
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <SiteHeader />

      <div className="relative mx-auto max-w-7xl px-6 pt-[clamp(3rem,9svh,8rem)] pb-14 sm:px-8 sm:pb-16 md:px-12 md:pb-20 lg:px-16">
        <p
          style={{ animationDelay: "0ms" }}
          className="text-muted-foreground motion-reduce:animate-none flex animate-rise-in items-center gap-3 text-xs font-medium tracking-widest uppercase"
        >
          <span aria-hidden className="bg-border h-px w-8" />
          Now booking new projects
        </p>

        <h1 className="font-display mt-6 text-5xl leading-[1.05] sm:mt-7 md:mt-8 md:text-6xl lg:text-7xl">
          <span className="block">
            {headline.map((word, index) => (
              <Fragment key={word}>
                <span
                  style={{ animationDelay: `${120 + index * 70}ms` }}
                  className="motion-reduce:animate-none inline-block animate-rise-in"
                >
                  {word === "baseline" ? (
                    <>
                      <span className="text-drift inline-block">baseline</span>
                      .
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
          className="text-muted-foreground motion-reduce:animate-none mt-6 max-w-[44ch] animate-rise-in text-base leading-relaxed text-pretty sm:mt-7 sm:text-lg"
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
            variant="link"
            nativeButton={false}
            render={<a href="#work" />}
          >
            See our work
            <RiArrowRightUpLine />
          </Button>
        </div>

        <div className="mt-9 sm:mt-10 md:mt-11">
          <HeroBuild />

          <div className="text-muted-foreground mt-4 flex items-baseline justify-between gap-6">
            <p className="text-sm">
              Concept build — Cala Verde, a boutique hotel in Liguria.
            </p>
            <ul className="hidden shrink-0 items-center gap-6 text-xs font-medium tracking-widest uppercase md:flex">
              {practice.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

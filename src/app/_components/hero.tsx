import { RiArrowRightUpLine } from "@remixicon/react";
import { Fragment } from "react";

import { BuildAssembly } from "@/app/_components/build-assembly";
import { ContactButton } from "@/components/contact-button";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";

const headline = ["Beautiful", "by", "default"];

export function Hero() {
  return (
    <section id="top" className="relative overflow-x-clip">
      <div
        aria-hidden
        className="bg-brand-glow motion-reduce:animate-none pointer-events-none absolute top-0 left-0 h-[min(48rem,100svh)] w-[min(100%,52rem)] translate-y-[-6%] animate-glow-breathe sm:w-[min(100%,64rem)] lg:w-[min(100%,72rem)] 2xl:h-[min(56rem,100svh)] 2xl:w-[min(100%,80rem)]"
      />

      <div className="relative w-full">
        <SiteHeader />

        <div className="mx-auto w-full max-w-7xl px-6 pt-16 pb-12 sm:px-8 sm:pt-20 sm:pb-14 md:px-12 md:pt-24 md:pb-16 lg:px-16 lg:pt-32 lg:pb-20 xl:pt-36 2xl:pt-40 2xl:pb-24">
          <p
            style={{ animationDelay: "0ms" }}
            className="text-muted-foreground motion-reduce:animate-none flex animate-rise-in items-center gap-3 text-xs font-medium tracking-widest uppercase 2xl:text-sm"
          >
            <span
              aria-hidden
              style={{ animationDelay: "260ms" }}
              className="bg-primary motion-reduce:animate-none h-0.5 w-8 origin-left animate-draw-rule sm:w-12 2xl:w-14"
            />
            <span aria-hidden className="relative flex size-1.5">
              <span className="bg-primary motion-reduce:animate-none absolute inset-0 animate-ping rounded-full opacity-75" />
              <span className="bg-primary relative size-1.5 rounded-full" />
            </span>
            Booking new projects
          </p>

          <h1 className="font-heading mt-7 text-[44px] leading-[1.12] font-semibold tracking-normal sm:mt-8 sm:text-6xl sm:leading-[1.06] sm:tracking-tight lg:mt-10 lg:text-7xl xl:text-8xl">
            <span className="block md:whitespace-nowrap">
              {headline.map((word, index) => (
                <Fragment key={word}>
                  <span
                    style={{ animationDelay: `${120 + index * 70}ms` }}
                    className="motion-reduce:animate-none inline-block animate-rise-in"
                  >
                    {word === "default" ? (
                      <>
                        <span className="text-drift after:bg-primary motion-reduce:after:animate-none relative inline-block after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:animate-draw-rule after:[animation-delay:900ms] sm:after:h-1">
                          Default
                        </span>
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
              className="text-muted-foreground/75 motion-reduce:animate-none mt-1 block animate-rise-in sm:mt-0"
            >
              Fast by Design.
            </span>
          </h1>

          <div className="mt-8 flex max-w-3xl flex-col gap-7 sm:mt-10 md:mt-12 md:max-w-none md:flex-row md:items-end md:justify-between md:gap-10 lg:gap-14">
            <p
              style={{ animationDelay: "520ms" }}
              className="text-muted-foreground motion-reduce:animate-none max-w-[34ch] animate-rise-in text-base leading-relaxed text-pretty sm:max-w-[38ch] sm:text-lg md:max-w-[34ch] lg:max-w-[40ch] xl:max-w-[42ch] 2xl:text-xl 2xl:leading-relaxed"
            >
              Websites and web apps for startups and businesses — designed,
              built and shipped in weeks.
            </p>

            <div
              style={{ animationDelay: "580ms" }}
              className="motion-reduce:animate-none flex w-full animate-rise-in flex-col items-stretch gap-3.5 md:w-auto md:shrink-0 md:flex-row md:items-center md:gap-3"
            >
              <ContactButton size="lg" className="w-full md:w-auto">
                Start a project
              </ContactButton>
              <Button
                size="lg"
                variant="link"
                className="self-start md:self-auto"
                nativeButton={false}
                render={<a href="#work" />}
              >
                See our work
                <RiArrowRightUpLine className="ease-interface transition-transform duration-200 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <BuildAssembly />
    </section>
  );
}

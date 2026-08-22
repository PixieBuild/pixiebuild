import { RiArrowRightUpLine } from "@remixicon/react";

import { HeroStage } from "@/app/_components/hero-stage";
import { ContactButton } from "@/components/contact-button";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";

const headline = ["Leave", "Boring", "Behind."];

export function Hero() {
  return (
    <HeroStage
      header={<SiteHeader />}
      title={
        <>
          <p
            style={{ animationDelay: "140ms" }}
            className="text-muted-foreground font-label motion-reduce:animate-none flex animate-rise-in items-center gap-3 text-[0.6875rem] tracking-[0.16em] uppercase"
          >
            <span aria-hidden className="bg-primary size-1.5" />
            Web design &amp; development studio
          </p>
          <h1 className="mt-7 ml-[-0.03em] text-[clamp(3.5rem,calc(25vw-11px),7rem)] leading-[0.97] font-bold tracking-wide sm:mt-9 lg:text-[clamp(3.5rem,calc(5vw+44px),11rem)]">
            {headline.map((word, place) => (
              <span
                key={word}
                className="mb-[-0.14em] block overflow-hidden pb-[0.14em]"
              >
                <span
                  style={{ animationDelay: `${200 + place * 110}ms` }}
                  className="motion-reduce:animate-none block animate-set-line"
                >
                  {word}
                </span>
              </span>
            ))}
          </h1>
        </>
      }
      lead={
        <p
          style={{ animationDelay: "560ms" }}
          className="text-muted-foreground motion-reduce:animate-none max-w-[38ch] animate-rise-in text-base leading-relaxed text-pretty lg:max-w-[34ch]"
        >
          You get one first impression. We design and build the site that earns
          it — and put it live in weeks, not quarters.
        </p>
      }
      actions={
        <div
          style={{ animationDelay: "640ms" }}
          className="motion-reduce:animate-none flex shrink-0 animate-rise-in flex-nowrap items-center gap-3"
        >
          <ContactButton className="h-12 shrink-0 gap-0 py-0 pr-1.5 pl-6 text-sm sm:h-13 sm:pl-7 sm:text-[0.9375rem]">
            Start a project
            <span className="bg-primary-foreground/15 ease-interface ml-3 flex size-9 items-center justify-center rounded-full transition-transform duration-300 group-hover/button:rotate-45 sm:ml-6 sm:size-10">
              <RiArrowRightUpLine className="size-4" />
            </span>
          </ContactButton>
          <Button
            variant="outline"
            nativeButton={false}
            render={<a href="#work" />}
            className="hidden h-12 shrink-0 px-5 text-sm min-[360px]:inline-flex sm:h-13 sm:px-7 sm:text-[0.9375rem]"
          >
            See our work
          </Button>
        </div>
      }
    />
  );
}

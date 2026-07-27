import { HeroBackdrop } from "@/app/_components/hero-backdrop";
import { SiteHeader } from "@/app/_components/site-header";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <HeroBackdrop />

      <SiteHeader />

      <div className="relative mx-auto max-w-page px-6 pt-28 pb-32 md:pt-40 md:pb-44">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <h1
            style={{ animationDelay: "0ms" }}
            className="motion-reduce:animate-none max-w-[40ch] animate-rise-in text-[1.8rem] leading-[1.15] font-semibold tracking-[-0.03em] sm:text-[2rem] md:text-[2.375rem] lg:text-[2.75rem]"
          >
            Beautifully engineered
            <br /> websites for{" "}
            {/* box-decoration-clone: when the phrase wraps, each fragment needs
                its own ramp rather than a slice of a single one. */}
            <span className="from-foreground to-primary box-decoration-clone bg-linear-to-r bg-clip-text text-transparent">
              ambitious businesses
            </span>
          </h1>

          <p
            style={{ animationDelay: "120ms" }}
            className="text-muted-foreground motion-reduce:animate-none mt-6 max-w-[52ch] animate-rise-in text-base leading-relaxed sm:text-lead"
          >
            We design and build custom websites and web applications that help
            businesses earn trust, stand out, and grow online.
          </p>

          <div
            style={{ animationDelay: "220ms" }}
            className="motion-reduce:animate-none mt-10 flex animate-rise-in flex-wrap items-center justify-center gap-3"
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

          <div
            style={{ animationDelay: "300ms" }}
            className="text-muted-foreground motion-reduce:animate-none mt-10 flex animate-rise-in items-center justify-center gap-3 text-label uppercase sm:gap-4"
          >
            <span
              aria-hidden
              className="via-border h-px w-6 bg-linear-to-r from-transparent to-transparent sm:w-14"
            />
            <span className="whitespace-nowrap">
              Fast<span className="hidden sm:inline"> by default</span>
            </span>
            <span aria-hidden className="bg-border size-1 shrink-0 rounded-full" />
            <span className="whitespace-nowrap">
              Accessible<span className="hidden sm:inline"> by design</span>
            </span>
            <span
              aria-hidden
              className="via-border h-px w-6 bg-linear-to-r from-transparent to-transparent sm:w-14"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

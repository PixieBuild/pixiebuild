import { Button } from "@/components/ui/button";

export function ClosingCall() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div aria-hidden className="bg-brand-glow absolute inset-0" />

      <div className="relative mx-auto max-w-6xl px-6 text-center sm:px-8 md:px-12 lg:px-16">
        <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-balance md:text-5xl">
          Tell us what you are building.
        </h2>
        <p className="text-muted-foreground mx-auto mt-5 max-w-md text-base md:text-lg leading-relaxed text-pretty">
          A page, a site, or something with a login and a database behind it.
          Start with the idea and we will take it from there.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Button size="lg" nativeButton={false} render={<a href="#contact" />}>
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
    </section>
  );
}

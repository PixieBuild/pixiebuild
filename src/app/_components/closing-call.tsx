import { ContactButton } from "@/components/contact-button";
import { Button } from "@/components/ui/button";

export function ClosingCall() {
  return (
    <section className="relative overflow-hidden py-12 md:py-24">
      <div aria-hidden className="bg-brand-glow absolute inset-0" />

      <div className="relative mx-auto max-w-page px-6 text-center sm:px-8 md:px-12 lg:px-16">
        <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-balance md:text-4xl">
          Tell us what you are building.
        </h2>
        <p className="text-muted-foreground mx-auto mt-5 max-w-md text-base leading-relaxed text-pretty">
          A page, a site, or something with a login and a database behind it.
          Start with the idea and we will take it from there.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <ContactButton size="lg">Tell us about it</ContactButton>
          <Button
            size="lg"
            variant="outline"
            nativeButton={false}
            render={<a href="#process" />}
          >
            See how we work
          </Button>
        </div>
      </div>
    </section>
  );
}

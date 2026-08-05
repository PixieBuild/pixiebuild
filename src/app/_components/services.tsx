import { ServiceWall } from "@/app/_components/service-wall";

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-12 md:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16">
        <header className="max-w-3xl">
          <p className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
            Services
          </p>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-balance md:text-4xl">
            Everything around the product.
          </h2>
        </header>

        <ServiceWall />
      </div>
    </section>
  );
}

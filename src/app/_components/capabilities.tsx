import { CapabilityWall } from "@/app/_components/capability-wall";

export function Capabilities() {
  return (
    <section id="services" className="scroll-mt-24 py-12 md:py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 md:px-12 lg:px-16">
        <header className="max-w-3xl">
          <p className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
            Capabilities
          </p>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-balance md:text-4xl">
            Beyond the build{" "}
            <span className="text-muted-foreground">
              — the rest of what you can hand us.
            </span>
          </h2>
        </header>

        <CapabilityWall />
      </div>
    </section>
  );
}

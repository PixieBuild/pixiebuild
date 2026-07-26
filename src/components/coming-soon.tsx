import PbLogo from "@/assets/pb-logo.svg";

type ComingSoonProps = {
  title?: string;
  description?: string;
};

export function ComingSoon({
  title = "Something is being built here",
  description = "This part of PixieBuild is under construction. It is on the way — check back soon.",
}: ComingSoonProps) {
  return (
    <section className="relative flex flex-1 items-center justify-center overflow-hidden px-6 py-16">
      <div aria-hidden className="bg-blueprint absolute inset-0" />
      <div aria-hidden className="bg-brand-glow absolute inset-0" />

      <div className="relative flex flex-col items-center gap-7 text-center">
        <PbLogo className="size-14" />

        <span className="text-muted-foreground inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium tracking-wide uppercase">
          <span className="bg-primary size-1.5 rounded-full motion-safe:animate-pulse" />
          In development
        </span>

        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            {title}
          </h1>
          <p className="text-muted-foreground max-w-md text-pretty">
            {description}
          </p>
        </div>

        <div
          aria-hidden
          className="bg-border relative h-1 w-56 overflow-hidden rounded-full"
        >
          <div className="bg-primary absolute inset-y-0 w-1/3 rounded-full motion-safe:animate-build-sweep" />
        </div>
      </div>
    </section>
  );
}

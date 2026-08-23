import { cn } from "@/lib/utils";

const beat = {
  logo: 0,
  bag: 0.03,
  filter: 0.1,
  filterStep: 0.02,
  tile: 0.2,
  tileStep: 0.07,
  checkout: 0.52,
};

const part = (at: number) => ({ "--beat": at }) as React.CSSProperties;

const filters = ["ALL", "CERAMICS", "WOOD"];

const shelf = [
  { name: "Ceramic Mug", price: "$28" },
  { name: "Linen Apron", price: "$64" },
];

export function ConceptKesslerPhone() {
  return (
    <div className="relative w-full">
      <div
        aria-hidden
        className="concept-stage shadow-elev-2 relative w-full overflow-hidden border select-none [--concept-height:500] [--concept-width:380]"
      >
        <div className="concept-page concept-theme-cool bg-concept-chalk text-concept-ink font-display absolute top-0 left-0">
          <span
            aria-hidden
            className="bg-concept-clay absolute inset-x-0 bottom-0 z-10 h-[1.4%]"
          />

          <div className="border-concept-line flex h-14 items-center justify-between border-b px-5">
            <span
              style={part(beat.logo)}
              className="build-part text-[1.25em] font-semibold tracking-[-0.02em]"
            >
              Kessler Goods
            </span>
            <span
              style={part(beat.bag)}
              className="font-label build-part relative text-[0.6875em] tracking-[0.16em] tabular-nums"
            >
              <span aria-hidden className="build-act-out absolute inset-0">
                CART (2)
              </span>
              <span className="build-act">CART (3)</span>
            </span>
          </div>

          <div className="border-concept-line flex h-10 items-center gap-5 border-b px-5">
            {filters.map((filter, index) => (
              <span
                key={filter}
                style={part(beat.filter + index * beat.filterStep)}
                className={cn(
                  "font-label build-part text-[0.625em] tracking-[0.16em]",
                  index === 0 ? "text-concept-ink" : "text-concept-muted",
                )}
              >
                {filter}
              </span>
            ))}
          </div>

          <div className="flex gap-4 px-5 pt-6">
            {shelf.map((item, index) => (
              <div
                key={item.name}
                style={part(beat.tile + index * beat.tileStep)}
                className="build-part min-w-0 flex-1"
              >
                <div className="relative h-56 overflow-hidden">
                  <span
                    aria-hidden
                    style={{ animationDelay: `${index * -3.5}s` }}
                    className="bg-concept-stripes animate-build-drift build-idle absolute inset-0"
                  />
                  {index === 0 && (
                    <span className="bg-concept-clay text-concept-chalk font-label build-act absolute top-3 left-3 flex h-6 items-center px-2 text-[0.5625em] tracking-[0.16em]">
                      ADDED
                    </span>
                  )}
                </div>

                <div className="mt-3.5 flex items-baseline justify-between">
                  <span className="text-[0.875em] font-medium tracking-[-0.02em]">
                    {item.name}
                  </span>
                  <span className="text-concept-muted font-label text-[0.75em] tabular-nums">
                    {item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <span
            style={part(beat.checkout)}
            className="bg-concept-ink text-concept-chalk font-label build-part mx-5 mt-7 flex h-11 items-center justify-center text-[0.6875em] tracking-[0.16em]"
          >
            CHECKOUT
          </span>
        </div>
      </div>
    </div>
  );
}

import { cn } from "@/lib/utils";

const beat = {
  logo: 0,
  link: 0.02,
  linkStep: 0.015,
  bag: 0.06,
  filter: 0.12,
  filterStep: 0.02,
  tile: 0.22,
  tileStep: 0.06,
  rule: 0.46,
  promise: 0.5,
  checkout: 0.56,
};

const part = (at: number) => ({ "--beat": at }) as React.CSSProperties;

const links = ["SHOP", "ABOUT"];

const filters = ["ALL", "CERAMICS", "TEXTILES", "WOOD"];

const shelf = [
  { name: "Ceramic Mug", price: "$28" },
  { name: "Linen Apron", price: "$64" },
  { name: "Oak Board", price: "$92" },
];

export function ConceptKessler() {
  return (
    <div className="relative w-full">
      <div
        aria-hidden
        className="concept-stage shadow-elev-2 relative w-full overflow-hidden border select-none [--concept-height:760] [--concept-width:1200] lg:w-[min(100cqw,calc(100cqh*1.5789),61.25rem)]"
      >
        <div className="concept-page concept-theme-cool bg-concept-chalk text-concept-ink font-display absolute top-0 left-0">
          <span
            aria-hidden
            className="bg-concept-clay absolute inset-x-0 bottom-0 z-10 h-[0.9%]"
          />

          <div className="border-concept-line flex h-20 items-center justify-between border-b px-15">
            <span
              style={part(beat.logo)}
              className="build-part text-[1.75em] font-semibold tracking-[-0.02em]"
            >
              Kessler Goods
            </span>

            <div className="flex items-center gap-9">
              {links.map((link, index) => (
                <span
                  key={link}
                  style={part(beat.link + index * beat.linkStep)}
                  className="text-concept-muted font-label build-part text-[1.125em] tracking-[0.16em]"
                >
                  {link}
                </span>
              ))}

              <span
                style={part(beat.bag)}
                className="font-label build-part relative text-[1.125em] tracking-[0.16em] tabular-nums"
              >
                <span aria-hidden className="build-act-out absolute inset-0">
                  CART (2)
                </span>
                <span className="build-act">CART (3)</span>
              </span>
            </div>
          </div>

          <div className="border-concept-line flex h-14 items-center justify-between border-b px-15">
            <div className="flex items-center gap-8">
              {filters.map((filter, index) => (
                <span
                  key={filter}
                  style={part(beat.filter + index * beat.filterStep)}
                  className={cn(
                    "font-label build-part text-[1.0625em] tracking-[0.16em]",
                    index === 0
                      ? "text-concept-ink"
                      : "text-concept-muted",
                  )}
                >
                  {filter}
                </span>
              ))}
            </div>

            <span className="text-concept-muted font-label text-[1.0625em] tracking-[0.16em]">
              12 ITEMS
            </span>
          </div>

          <div className="flex gap-7 px-15 pt-12">
            {shelf.map((item, index) => (
              <div
                key={item.name}
                style={part(beat.tile + index * beat.tileStep)}
                className="build-part min-w-0 flex-1"
              >
                <div className="relative h-88 overflow-hidden">
                  <span
                    aria-hidden
                    style={{ animationDelay: `${index * -3.5}s` }}
                    className="bg-concept-stripes animate-build-drift build-idle absolute inset-0"
                  />
                  {index === 0 && (
                    <span className="bg-concept-clay text-concept-chalk font-label build-act absolute top-5 left-5 flex h-8 items-center px-3 text-[0.9375em] tracking-[0.16em]">
                      ADDED
                    </span>
                  )}
                </div>

                <div className="mt-6 flex items-baseline justify-between">
                  <span className="text-[1.375em] font-medium tracking-[-0.02em]">
                    {item.name}
                  </span>
                  <span className="text-concept-muted font-label text-[1.125em] tabular-nums">
                    {item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="border-concept-line mx-15 mt-12 flex items-center justify-between border-t pt-8">
            <span
              style={part(beat.promise)}
              className="text-concept-muted font-label build-part text-[1.1875em] tracking-[0.16em]"
            >
              FREE SHIPPING OVER $80
            </span>
            <span
              style={part(beat.checkout)}
              className="bg-concept-ink text-concept-chalk font-label build-part flex h-14 w-60 items-center justify-center text-[1.1875em] tracking-[0.16em]"
            >
              CHECKOUT
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

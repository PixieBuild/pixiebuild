const beat = {
  logo: 0,
  bag: 0.03,
  tile: 0.14,
  tileStep: 0.06,
  rule: 0.42,
  promise: 0.48,
  checkout: 0.54,
};

const part = (at: number) => ({ "--beat": at }) as React.CSSProperties;

const shelf = ["CERAMIC MUG · $28", "LINEN APRON · $64", "OAK BOARD · $92"];

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
          <div className="flex h-27 items-end justify-between px-15">
            <span
              style={part(beat.logo)}
              className="build-part text-[2.75em] leading-none font-semibold tracking-[-0.03em]"
            >
              Kessler Goods
            </span>
            <span
              style={part(beat.bag)}
              className="text-concept-ink/50 font-label build-part text-[1.1875em] tracking-[0.16em]"
            >
              CART (2)
            </span>
          </div>

          <div className="mt-11 flex gap-7 px-15">
            {shelf.map((item, index) => (
              <div
                key={item}
                style={part(beat.tile + index * beat.tileStep)}
                className="build-part min-w-0 flex-1"
              >
                <div className="bg-concept-stripes h-100" />
                <p className="text-concept-ink/60 font-label mt-7 text-[1.1875em] tracking-[0.16em]">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <span
            aria-hidden
            style={part(beat.rule)}
            className="bg-concept-ink/12 build-part mx-15 mt-13 block h-px"
          />

          <div className="mt-8 flex items-center justify-between px-15">
            <span
              style={part(beat.promise)}
              className="text-concept-ink/50 font-label build-part text-[1.1875em] tracking-[0.16em]"
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

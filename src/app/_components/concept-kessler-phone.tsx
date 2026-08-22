const beat = {
  logo: 0,
  bag: 0.03,
  tile: 0.16,
  label: 0.36,
  rule: 0.48,
  promise: 0.54,
  checkout: 0.6,
};

const part = (at: number) => ({ "--beat": at }) as React.CSSProperties;

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

          <div className="flex h-16 items-end justify-between px-6">
            <span
              style={part(beat.logo)}
              className="build-part text-[1.5em] leading-none font-semibold tracking-[-0.03em]"
            >
              Kessler Goods
            </span>
            <span
              style={part(beat.bag)}
              className="text-concept-ink/50 font-label build-part text-[0.6875em] tracking-[0.16em]"
            >
              CART (2)
            </span>
          </div>

          <div className="px-6 pt-6">
            <div
              style={part(beat.tile)}
              className="bg-concept-stripes build-part h-52"
            />

            <p
              style={part(beat.label)}
              className="text-concept-ink/60 font-label build-part mt-4 text-[0.75em] tracking-[0.16em]"
            >
              CERAMIC MUG · $28
            </p>

            <span
              aria-hidden
              style={part(beat.rule)}
              className="bg-concept-ink/12 build-part mt-6 block h-px"
            />

            <p
              style={part(beat.promise)}
              className="text-concept-ink/50 font-label build-part mt-4 text-[0.6875em] tracking-[0.16em]"
            >
              FREE SHIPPING OVER $80
            </p>

            <span
              style={part(beat.checkout)}
              className="bg-concept-ink text-concept-chalk font-label build-part mt-4 flex h-12 items-center justify-center text-[0.75em] tracking-[0.16em]"
            >
              CHECKOUT
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

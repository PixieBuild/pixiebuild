const beat = {
  logo: 0,
  link: 0.02,
  linkStep: 0.02,
  headline: 0.16,
  copy: 0.4,
  action: 0.5,
  figure: 0.3,
};

const part = (at: number) => ({ "--beat": at }) as React.CSSProperties;

const links = ["Services", "Projects", "Contact"];

export function ConceptNorthline() {
  return (
    <div className="relative w-full">
      <div
        aria-hidden
        className="concept-stage shadow-elev-2 relative w-full overflow-hidden border select-none [--concept-height:760] [--concept-width:1200] lg:w-[min(100cqw,calc(100cqh*1.5789),61.25rem)]"
      >
        <div className="concept-page concept-theme-paper bg-concept-canvas text-concept-ink font-display absolute top-0 left-0">
          <span
            aria-hidden
            className="bg-concept-clay absolute inset-x-0 bottom-0 z-10 h-[0.9%]"
          />
          <div className="border-concept-line flex h-26 items-center justify-between border-b px-15">
            <span
              style={part(beat.logo)}
              className="font-label build-part text-[1.25em] tracking-[0.16em]"
            >
              NORTHLINE &amp; CO
            </span>

            <div className="text-concept-muted font-label flex items-center gap-9 text-[1.125em] tracking-[0.16em]">
              {links.map((link, index) => (
                <span
                  key={link}
                  style={part(beat.link + index * beat.linkStep)}
                  className="build-part"
                >
                  {link.toUpperCase()}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-12 px-15">
            <div className="min-w-0 flex-1 pt-30">
              <p
                style={part(beat.headline)}
                className="build-part text-[5em] leading-[0.91] font-semibold tracking-[-0.03em]"
              >
                Structural
                <br />
                engineering,
                <br />
                quietly precise.
              </p>

              <div
                style={part(beat.copy)}
                className="build-part mt-11 flex flex-col gap-2.5"
              >
                <span aria-hidden className="bg-concept-ink/12 block h-2 w-80" />
                <span aria-hidden className="bg-concept-ink/8 block h-2 w-52" />
              </div>

              <span
                style={part(beat.action)}
                className="bg-concept-ink text-concept-canvas font-label build-part mt-8 flex h-16 w-62 items-center justify-center text-[1.25em] tracking-[0.16em]"
              >
                VIEW PROJECTS
              </span>
            </div>

            <div
              style={part(beat.figure)}
              className="bg-concept-stripes build-part relative mt-11 h-130 w-100 shrink-0"
            >
              <span className="text-concept-muted font-label absolute bottom-5 left-6 text-[1.125em] tracking-[0.16em]">
                SITE IMAGERY
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

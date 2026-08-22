import { cn } from "@/lib/utils";

const beat = {
  logo: 0,
  index: 0.02,
  form: 0.14,
  matters: 0.26,
  rule: 0.5,
  discipline: 0.56,
  disciplineStep: 0.04,
};

const part = (at: number) => ({ "--beat": at }) as React.CSSProperties;

const disciplines = ["IDENTITY", "EDITORIAL", "MOTION", "WEB"];

export function ConceptFoss() {
  return (
    <div className="relative w-full">
      <div
        aria-hidden
        className="concept-stage shadow-elev-2 relative w-full overflow-hidden border select-none [--concept-height:760] [--concept-width:1200] lg:w-[min(100cqw,calc(100cqh*1.5789),61.25rem)]"
      >
        <div className="concept-page concept-theme-paper bg-concept-shell text-concept-ink font-display absolute top-0 left-0">
          <span
            aria-hidden
            className="bg-concept-clay absolute inset-x-0 bottom-0 z-10 h-[0.9%]"
          />
          <div className="flex h-20 items-center justify-between px-15">
            <span
              style={part(beat.logo)}
              className="font-label build-part text-[1.25em] tracking-[0.16em]"
            >
              ATELIER FOSS
            </span>
            <span
              style={part(beat.index)}
              className="text-concept-muted font-label build-part text-[1.25em] tracking-[0.16em]"
            >
              INDEX — 01/12
            </span>
          </div>

          <p className="px-11 pt-25 text-[15.625em] leading-[0.8] font-bold tracking-[-0.04em]">
            <span style={part(beat.form)} className="build-part block">
              FORM
            </span>
            <span
              style={part(beat.matters)}
              className="text-concept-clay build-part block"
            >
              MATTERS
            </span>
          </p>

          <div
            style={part(beat.rule)}
            className="border-concept-ink/18 build-part mt-20 flex h-25 border-t"
          >
            {disciplines.map((item, index) => (
              <span
                key={item}
                style={part(beat.discipline + index * beat.disciplineStep)}
                className={cn(
                  "border-concept-ink/18 text-concept-muted font-label build-part flex flex-1 items-center pl-15 text-[1.1875em] tracking-[0.16em]",
                  index > 0 && "border-l",
                )}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import { cn } from "@/lib/utils";

const beat = {
  logo: 0,
  index: 0.02,
  form: 0.14,
  matters: 0.26,
  rule: 0.52,
  discipline: 0.58,
  disciplineStep: 0.04,
};

const part = (at: number) => ({ "--beat": at }) as React.CSSProperties;

const disciplines = ["IDENTITY", "EDITORIAL", "MOTION", "WEB"];

export function ConceptFossPhone() {
  return (
    <div className="relative w-full">
      <div
        aria-hidden
        className="concept-stage shadow-elev-2 relative w-full overflow-hidden border select-none [--concept-height:500] [--concept-width:380]"
      >
        <div className="concept-page concept-theme-paper bg-concept-shell text-concept-ink font-display absolute top-0 left-0">
          <span
            aria-hidden
            className="bg-concept-clay absolute inset-x-0 bottom-0 z-10 h-[1.4%]"
          />

          <div className="flex h-14 items-center justify-between px-5">
            <span
              style={part(beat.logo)}
              className="font-label build-part text-[0.75em] tracking-[0.16em]"
            >
              ATELIER FOSS
            </span>
            <span
              style={part(beat.index)}
              className="text-concept-muted font-label build-part text-[0.75em] tracking-[0.16em]"
            >
              INDEX — 01/12
            </span>
          </div>

          <p className="px-5 pt-12 text-[4.5em] leading-[0.82] font-bold tracking-[-0.04em]">
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
            className="border-concept-ink/18 mt-14 grid grid-cols-2 border-t"
          >
            {disciplines.map((item, index) => (
              <span
                key={item}
                style={part(beat.discipline + index * beat.disciplineStep)}
                className={cn(
                  "border-concept-ink/18 text-concept-muted font-label build-part flex h-14 items-center pl-5 text-[0.6875em] tracking-[0.16em]",
                  index % 2 === 1 && "border-l",
                  index > 1 && "border-t",
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

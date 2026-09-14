import { RiCheckLine } from "@remixicon/react";

import { cn } from "@/lib/utils";

export type Pin = {
  n: number;
  text: string;
  left: string;
  top: string;
  show: number;
  done: number;
  flip?: boolean;
};

const cue = (beat: number, span: number) =>
  ({ "--beat": beat, "--span": span }) as React.CSSProperties;

export function ReviewPin({ n, text, left, top, show, done, flip }: Pin) {
  return (
    <div
      style={{ left, top, ...cue(show, 0.12) }}
      className={cn(
        "stage-cue build-part absolute flex items-start gap-2",
        flip && "flex-row-reverse",
      )}
    >
      <span className="bg-concept-clay text-concept-canvas ring-concept-canvas font-label flex size-[1.6em] shrink-0 items-center justify-center rounded-full text-[0.6em] tabular-nums ring-[0.2em]">
        {n}
      </span>
      <span className="bg-concept-canvas border-concept-ink/15 shadow-elev-2 flex w-[15em] flex-col gap-1.5 border px-3 py-2.5">
        <span className="text-[0.72em] leading-snug">{text}</span>
        <span className="text-concept-muted font-label flex items-center gap-2 text-[0.62em] tracking-[0.14em]">
          MARA · NORVIA
          <span
            style={cue(done, 0.1)}
            className="stage-cue build-part text-concept-clay ml-auto flex items-center gap-1"
          >
            <RiCheckLine className="size-[1.4em]" />
            DONE
          </span>
        </span>
      </span>
    </div>
  );
}

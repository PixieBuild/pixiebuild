import { RiCheckLine } from "@remixicon/react";

const numbers = [
  { value: "31", name: "orders" },
  { value: "16", name: "seats booked" },
  { value: "5", name: "enquiries" },
  { value: "1,240", name: "visits" },
];

const done = [
  "Holiday hours added to the Visit page",
  "November drop photos live",
  "Two small checkout fixes",
];

export function NorviaMonthPhone() {
  return (
    <div className="concept-page concept-theme-cool bg-concept-canvas text-concept-ink font-display absolute top-0 left-0 flex flex-col">
      <div className="border-concept-ink/10 flex shrink-0 flex-col gap-2 border-b px-5 py-4">
        <span className="text-[1.1em] leading-tight font-medium">
          October at norvia.com
        </span>
        <span className="flex items-center gap-2 text-[0.7em]">
          <span className="bg-concept-ink text-concept-canvas font-label flex size-[2em] items-center justify-center rounded-full text-[0.65em]">
            PB
          </span>
          <span>
            <span className="font-medium">Anurag at PixieBuild</span>
            <span className="text-concept-muted"> to Mara</span>
          </span>
        </span>
      </div>

      <div className="flex min-h-0 flex-1 flex-col gap-4 px-5 py-4">
        <p className="text-[0.8em] leading-relaxed">
          Hi Mara — a quiet month, which is the good kind. Here is October.
        </p>

        <div className="border-concept-ink/10 grid grid-cols-2 gap-x-4 gap-y-3 border-y py-3">
          {numbers.map(item => (
            <div key={item.name} className="flex items-baseline gap-2">
              <span className="text-[1.4em] leading-none font-medium tabular-nums">
                {item.value}
              </span>
              <span className="text-concept-muted text-[0.68em]">{item.name}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-concept-muted font-label text-[0.55em] tracking-[0.2em]">
            WHAT WE DID
          </span>
          {done.map(item => (
            <span key={item} className="flex items-start gap-2 text-[0.78em]">
              <span className="bg-concept-clay text-concept-canvas mt-[0.15em] flex size-[1.15em] shrink-0 items-center justify-center rounded-full">
                <RiCheckLine className="size-[0.8em]" />
              </span>
              {item}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-col gap-1">
          <p className="text-[0.82em] font-medium">Nothing needs your attention.</p>
          <p className="text-concept-muted text-[0.72em] leading-relaxed">
            Reply if anything comes up. Backups and updates are done, and the
            hosting stays in your name.
          </p>
        </div>
      </div>

      <div className="bg-concept-scrim text-concept-chalk flex shrink-0 items-center justify-between px-5 py-2.5">
        <span className="font-label text-[0.55em] tracking-[0.2em]">SENT MONTHLY</span>
        <span className="text-[0.72em]">Up 99.9% of the month</span>
      </div>
    </div>
  );
}

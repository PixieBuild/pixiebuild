import { RiCheckLine } from "@remixicon/react";

const numbers = [
  { value: "31", name: "orders" },
  { value: "16", name: "class seats booked" },
  { value: "5", name: "commission enquiries" },
  { value: "1,240", name: "visits" },
];

const done = [
  "Holiday hours added to the Visit page",
  "November drop photos uploaded and live",
  "Two small fixes on the checkout, nothing you would have noticed",
];

export function NorviaMonth() {
  return (
    <div className="concept-page concept-theme-cool bg-concept-canvas text-concept-ink font-display absolute top-0 left-0 flex flex-col">
      <div className="border-concept-ink/10 flex shrink-0 flex-col gap-2.5 border-b px-10 py-5">
        <div className="flex items-baseline justify-between gap-6">
          <span className="text-[1.5em] font-medium">October at norvia.com</span>
          <span className="text-concept-muted text-[0.75em]">Tue 4 Nov, 9:02</span>
        </div>
        <div className="flex items-center gap-3 text-[0.8em]">
          <span className="bg-concept-ink text-concept-canvas font-label flex size-[2em] items-center justify-center rounded-full text-[0.7em]">
            PB
          </span>
          <span>
            <span className="font-medium">Anurag at PixieBuild</span>
            <span className="text-concept-muted"> to Mara</span>
          </span>
        </div>
      </div>

      <div className="flex min-h-0 flex-1 flex-col gap-6 px-10 py-7">
        <p className="max-w-[46ch] text-[0.95em] leading-relaxed">
          Hi Mara — a quiet month, which is the good kind. Here is what
          happened on the site in October.
        </p>

        <div className="border-concept-ink/10 divide-concept-ink/10 grid grid-cols-4 divide-x border-y">
          {numbers.map(item => (
            <div key={item.name} className="flex flex-col gap-1.5 px-5 py-5 first:pl-0">
              <span className="text-[2em] leading-none font-medium tabular-nums">
                {item.value}
              </span>
              <span className="text-concept-muted text-[0.75em]">{item.name}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-concept-muted font-label text-[0.66em] tracking-[0.2em]">
            WHAT WE DID
          </span>
          {done.map(item => (
            <span key={item} className="flex items-start gap-3 text-[0.9em]">
              <span className="bg-concept-clay text-concept-canvas mt-[0.15em] flex size-[1.2em] shrink-0 items-center justify-center rounded-full">
                <RiCheckLine className="size-[0.85em]" />
              </span>
              {item}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-concept-muted font-label text-[0.66em] tracking-[0.2em]">
            COMING UP
          </span>
          <span className="text-[0.9em]">
            The November drop goes live Saturday 1 Nov at 9am. We will check it
            the night before.
          </span>
        </div>

        <div className="mt-auto flex flex-col gap-2">
          <p className="text-[0.95em] font-medium">Nothing needs your attention.</p>
          <p className="text-concept-muted max-w-[52ch] text-[0.85em] leading-relaxed">
            Reply to this email if anything comes up, or if you want the
            December drop up early. Backups and updates are done, and the
            hosting stays in your name.
          </p>
        </div>
      </div>

      <div className="bg-concept-scrim text-concept-chalk flex shrink-0 items-center justify-between px-10 py-4">
        <span className="font-label text-[0.62em] tracking-[0.2em]">
          SENT MONTHLY · SINCE LAUNCH
        </span>
        <span className="text-[0.85em]">Up 99.9% of the month</span>
      </div>
    </div>
  );
}

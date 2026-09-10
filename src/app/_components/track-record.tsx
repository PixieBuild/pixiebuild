import { RecordLedger } from "@/app/_components/record-ledger";
import { SectionHeading } from "@/app/_components/section-heading";
import { figures } from "@/lib/record";

export function TrackRecord() {
  return (
    <section id="work" className="scroll-mt-24 py-12 md:py-24">
      <div className="mx-auto max-w-page px-6 sm:px-8 md:px-12 lg:px-16">
        <SectionHeading label="Work" headingClassName="2xl:text-[2.75rem]">
          Every job so far&nbsp;—{" "}
          <span className="text-muted-foreground">and what they said.</span>
        </SectionHeading>

        <p className="text-muted-foreground mt-4 max-w-md text-[0.9375rem] leading-relaxed text-pretty 2xl:mt-6 2xl:max-w-[40ch] 2xl:text-lg">
          One row per job: what we built, how long it took, and the
          owner&apos;s words once it was live.
        </p>

        <dl className="border-foreground/12 divide-foreground/12 mt-12 grid grid-cols-2 divide-y border-y sm:grid-cols-4 sm:divide-x sm:divide-y-0 md:mt-16">
          {figures.map(figure => (
            <div
              key={figure.name}
              className="flex flex-col gap-1.5 px-5 py-6 first:pl-0 last:pr-0 nth-2:pr-0 nth-3:pl-0 sm:py-7 sm:nth-2:pr-5 sm:nth-3:pl-5"
            >
              <dd className="text-3xl font-semibold tracking-tight tabular-nums md:text-4xl">
                {figure.value}
              </dd>
              <dt className="text-muted-foreground font-label text-[0.6875rem] tracking-[0.16em] uppercase">
                {figure.name}
              </dt>
            </div>
          ))}
        </dl>

        <RecordLedger />
      </div>
    </section>
  );
}

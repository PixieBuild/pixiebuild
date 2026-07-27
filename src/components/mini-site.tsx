type MiniSiteProps = {
  brand: string;
  eyebrow: string;
  headline: string;
  body: string;
  cta: string;
  cards: string[];
};

/* Laid out at full width and scaled to half, so the type inside stays on the
   real scale rather than being set at miniature sizes. */
export function MiniSite({
  brand,
  eyebrow,
  headline,
  body,
  cta,
  cards,
}: MiniSiteProps) {
  return (
    <div className="bg-background h-full w-[200%] origin-top-left scale-50">
      <div className="hairline flex items-center justify-between border-b px-8 py-5">
        <div className="flex items-center gap-2">
          <span className="bg-foreground size-4 rounded-sm" />
          <span className="text-base font-semibold tracking-tight">
            {brand}
          </span>
        </div>
        <div className="text-muted-foreground flex items-center gap-6 text-caption">
          <span>Work</span>
          <span>Services</span>
          <span className="bg-primary text-primary-foreground rounded-full px-4 py-2">
            {cta}
          </span>
        </div>
      </div>

      <div className="px-8 pt-12 pb-8">
        <p className="text-muted-foreground text-label uppercase">{eyebrow}</p>
        <h3 className="mt-4 max-w-2xl text-heading text-balance">{headline}</h3>
        <p className="text-muted-foreground mt-4 max-w-xl text-lead text-pretty">
          {body}
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4 px-8">
        {cards.map((card) => (
          <div key={card} className="hairline rounded-lg border p-5">
            <div className="bg-muted mb-4 h-16 rounded-md" />
            <p className="text-base font-medium">{card}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

import { Rise } from "@/app/_components/rise";
import { reviews } from "@/lib/record";

const cell =
  "border-foreground/12 border-t py-8 sm:border-l sm:px-8 sm:odd:border-l-0 sm:odd:pl-0 lg:odd:border-l lg:odd:pl-8 lg:nth-[3n+1]:border-l-0 lg:nth-[3n+1]:pl-0";

export function KindWords() {
  return (
    <div>
      <p className="text-muted-foreground font-label flex items-center gap-3 text-[0.6875rem] tracking-[0.16em] uppercase">
        <span aria-hidden className="bg-primary size-1.5" />
        Kind words
      </p>

      <div className="border-foreground/12 mt-8 grid border-b sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review, place) => (
          <Rise key={review.id} delay={place * 0.05} className={cell}>
            <figure className="flex h-full flex-col justify-between gap-10">
              <blockquote className="font-heading text-xl leading-snug font-medium tracking-tight text-pretty md:text-2xl">
                &ldquo;{review.quote}&rdquo;
              </blockquote>

              <figcaption className="flex flex-col gap-0.5">
                <span className="text-sm font-medium">{review.client}</span>
                <span className="text-muted-foreground text-sm">
                  {review.role}
                </span>
              </figcaption>
            </figure>
          </Rise>
        ))}
      </div>
    </div>
  );
}

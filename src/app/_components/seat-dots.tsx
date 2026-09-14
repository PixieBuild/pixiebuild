import { cn } from "@/lib/utils";

export function SeatDots({
  seats,
  taken,
  className,
}: {
  seats: number;
  taken: number;
  className?: string;
}) {
  return (
    <span
      aria-label={`${seats - taken} of ${seats} seats open`}
      className={cn("flex items-center gap-[0.3em]", className)}
    >
      {Array.from({ length: seats }, (_, index) => (
        <span
          key={index}
          className={cn(
            "size-[0.38em] rounded-full transition-colors duration-300",
            index < taken ? "bg-concept-ink/20" : "bg-concept-clay",
          )}
        />
      ))}
    </span>
  );
}

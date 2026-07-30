type PagePlaceholderProps = {
  phone?: boolean;
};

export function PagePlaceholder({ phone = false }: PagePlaceholderProps) {
  if (phone) {
    return (
      <div
        aria-hidden
        className="absolute inset-0 flex flex-col gap-[4%] p-[8%]"
      >
        <div className="flex shrink-0 items-center justify-between">
          <span className="bg-foreground/50 size-2.5 rounded-md" />
          <div className="flex flex-col gap-0.75">
            {[0, 1, 2].map((line) => (
              <span
                key={line}
                className="bg-foreground/40 h-px w-2.5 rounded-full"
              />
            ))}
          </div>
        </div>

        <div className="flex shrink-0 flex-col gap-1 pt-[6%]">
          <span className="bg-foreground/60 h-2 w-[85%] rounded-full" />
          <span className="bg-foreground/60 h-2 w-[60%] rounded-full" />
          <span className="bg-muted-foreground/25 mt-0.75 h-1 w-[70%] rounded-full" />
          <span className="bg-foreground/40 mt-[6%] h-3.5 w-[55%] rounded-full" />
        </div>

        <div className="flex min-h-0 flex-1 flex-col gap-[4%]">
          {[0, 1, 2].map((card) => (
            <div
              key={card}
              className="border-foreground/5 bg-foreground/4 flex flex-1 flex-col justify-end rounded border p-[7%]"
            >
              <span className="bg-muted-foreground/25 h-1 w-[70%] rounded-full" />
              <span className="bg-muted-foreground/15 mt-1 h-1 w-[45%] rounded-full" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      aria-hidden
      className="absolute inset-0 flex flex-col gap-[4%] p-[5%] sm:gap-[3.5%]"
    >
      <div className="flex shrink-0 items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="bg-foreground/50 size-3.5 rounded" />
          <span className="bg-foreground/50 h-2 w-14 rounded-full" />
        </div>
        <div className="hidden items-center gap-3 sm:flex">
          {[12, 10, 11].map((width) => (
            <span
              key={width}
              style={{ width: `${width * 4}px` }}
              className="bg-muted-foreground/25 h-1.5 rounded-full"
            />
          ))}
          <span className="bg-foreground/40 h-5 w-12 rounded-full" />
        </div>
      </div>

      <div className="flex shrink-0 flex-col gap-2 pt-[3%]">
        <span className="bg-foreground/60 h-3.5 w-[62%] rounded-full" />
        <span className="bg-foreground/60 h-3.5 w-[40%] rounded-full" />
        <span className="bg-muted-foreground/25 mt-1 h-2 w-[52%] rounded-full" />
      </div>

      <div className="grid min-h-0 flex-1 grid-cols-3 gap-[2.5%]">
        {[0, 1, 2].map((card) => (
          <div
            key={card}
            className="border-foreground/5 bg-foreground/4 flex flex-col justify-end rounded-md border p-[6%]"
          >
            <span className="bg-muted-foreground/25 h-1.5 w-[70%] rounded-full" />
            <span className="bg-muted-foreground/15 mt-1.5 h-1.5 w-[45%] rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

import Link from "next/link";

import PbLogo from "@/assets/pb-logo.svg";
import { SiteFooter } from "@/components/site-footer";
import { ThemeToggle } from "@/components/theme-toggle";

export default function LegalLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <header className="relative z-20 w-full">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 pt-6 sm:px-8 md:px-12 lg:px-16">
          <Link
            href="/"
            className="ease-interface flex shrink-0 items-center gap-2.5 transition-opacity duration-150 hover:opacity-75"
            aria-label="PixieBuild"
          >
            <PbLogo className="size-6" />
            <span className="font-heading text-lg font-semibold tracking-tight">
              PixieBuild
            </span>
          </Link>

          <ThemeToggle />
        </div>
      </header>

      {children}

      <SiteFooter />
    </>
  );
}

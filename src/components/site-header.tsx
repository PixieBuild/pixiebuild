import Link from "next/link";

import { MobileNav } from "@/components/mobile-nav";
import PbLogo from "@/assets/pb-logo.svg";

const links = [
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
];

export function SiteHeader() {
  return (
    <header
      id="site-header"
      style={{ animationDelay: "60ms" }}
      className="motion-reduce:animate-none relative z-20 w-full animate-rise-in"
    >
      <div className="mx-auto flex w-full max-w-page items-center justify-between gap-4 px-6 pt-6 sm:px-8 md:px-12 lg:px-16">
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

        <nav className="-mr-3.5 hidden items-center gap-0.5 md:flex">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground hover:bg-muted ease-interface rounded-full px-3.5 py-2 text-sm transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <span className="shrink-0 md:hidden">
          <MobileNav links={links} />
        </span>
      </div>
    </header>
  );
}

import Link from "next/link";

import { MobileNav } from "@/app/_components/mobile-nav";
import PbLogo from "@/assets/pb-logo.svg";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
];

export function SiteHeader() {
  return (
    <header className="relative z-20 px-6 pt-6">
      <div
        style={{ animationDelay: "60ms" }}
        className="hairline motion-reduce:animate-none bg-background/55 shadow-elev-1 mx-auto flex h-14 max-w-3xl animate-rise-in items-center justify-between gap-4 rounded-full border py-2 pr-3 pl-7 backdrop-blur-xl"
      >
        <Link
          href="/"
          className="ease-interface flex shrink-0 items-center gap-2.5 transition-opacity duration-150 hover:opacity-75"
          aria-label="PixieBuild"
        >
          <PbLogo className="size-6" />
          <span className=" text-base font-semibold tracking-tight">
            PixieBuild
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground hover:bg-muted ease-interface rounded-full px-3.5 py-2 text-caption transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5">
          <ThemeToggle />
          <Button
            className="hidden md:inline-flex"
            size="sm"
            nativeButton={false}
            render={<a href="#contact" />}
          >
            Start a project
          </Button>
          <span className="md:hidden">
            <MobileNav links={links} />
          </span>
        </div>
      </div>
    </header>
  );
}

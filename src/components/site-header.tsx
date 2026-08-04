import Link from "next/link";

import { ContactButton } from "@/components/contact-button";
import { MobileNav } from "@/components/mobile-nav";
import PbLogo from "@/assets/pb-logo.svg";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
];

export function SiteHeader() {
  return (
    <header
      style={{ animationDelay: "60ms" }}
      className="motion-reduce:animate-none relative z-20 mx-auto flex max-w-6xl animate-rise-in items-center justify-between gap-4 px-6 pt-7 sm:px-8 md:px-12 lg:px-16"
    >
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

      <nav className="hidden items-center gap-8 md:flex">
        {links.map(link => (
          <a
            key={link.href}
            href={link.href}
            className="text-muted-foreground hover:text-foreground after:bg-foreground ease-interface relative text-sm transition-colors duration-200 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="flex shrink-0 items-center gap-1.5">
        <ThemeToggle />
        <ContactButton className="hidden md:inline-flex" size="sm">
          Start a project
        </ContactButton>
        <span className="md:hidden">
          <MobileNav links={links} />
        </span>
      </div>
    </header>
  );
}

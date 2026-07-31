import Link from "next/link";

import PbLogo from "@/assets/pb-logo.svg";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Questions", href: "#faq" },
];

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-6 pt-10 pb-20 sm:px-8 md:px-12 md:py-12 lg:px-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <PbLogo aria-hidden className="text-foreground size-6" />
            <span className="font-heading text-sm font-semibold tracking-tight">
              PixieBuild
            </span>
          </Link>

          <nav className="grid grid-cols-3 gap-x-4 gap-y-4 sm:flex sm:flex-wrap sm:items-center sm:gap-x-6">
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground ease-interface text-sm transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between md:mt-10">
          <span className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} PixieBuild
          </span>

          <div className="flex items-center justify-between gap-4 sm:justify-start">
            <a
              href="mailto:hello@pixiebuild.com"
              className="text-muted-foreground hover:text-foreground ease-interface text-xs transition-colors duration-300"
            >
              hello@pixiebuild.com
            </a>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}

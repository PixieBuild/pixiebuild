import Link from "next/link";

import PbLogo from "@/assets/pb-logo.svg";

const links = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "Questions", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function SiteFooter() {
  return (
    <footer className="hairline border-t py-16">
      <div className="mx-auto flex max-w-page flex-col gap-12 px-6 md:flex-row md:justify-between md:gap-16">
        <div className="max-w-sm">
          <Link
            href="/"
            className="ease-interface flex items-center gap-2.5 transition-opacity duration-150 hover:opacity-75"
            aria-label="PixieBuild"
          >
            <PbLogo className="size-6" />
            <span className="text-base font-semibold tracking-tight">
              PixieBuild
            </span>
          </Link>
          <p className="text-muted-foreground mt-5 text-caption text-pretty">
            A web studio for startups and businesses. Design, engineering and
            launch, handled by the people you meet on the first call.
          </p>
        </div>

        <nav className="grid grid-cols-2 gap-x-12 gap-y-3 sm:grid-cols-3 md:gap-x-16">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground ease-interface text-caption transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="hairline text-muted-foreground mx-auto mt-16 flex max-w-page flex-col gap-2 border-t px-6 pt-8 text-caption sm:flex-row sm:justify-between">
        <p>© 2026 PixieBuild</p>
        <p>Designed and built in-house.</p>
      </div>
    </footer>
  );
}

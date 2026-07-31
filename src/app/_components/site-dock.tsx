"use client";

import { RiCheckLine, RiCompass3Line } from "@remixicon/react";
import { useEffect, useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const fonts = [
  { name: "Inter", token: "var(--font-inter)" },
  { name: "Geist", token: "var(--font-geist)" },
  { name: "Manrope", token: "var(--font-manrope)" },
  { name: "DM Sans", token: "var(--font-dm-sans)" },
];

const brands = [
  { name: "Cobalt", token: "oklch(0.5464 0.1313 242.68)" },
  { name: "Violet", token: "oklch(0.552 0.196 288)" },
  { name: "Evergreen", token: "oklch(0.545 0.124 163)" },
  { name: "Ember", token: "oklch(0.585 0.161 46)" },
  { name: "Rose", token: "oklch(0.585 0.196 15)" },
];

const sections = [
  { label: "Process", id: "process" },
  { label: "Work", id: "work" },
  { label: "Services", id: "services" },
  { label: "Pricing", id: "pricing" },
  { label: "Questions", id: "faq" },
];

export function SiteDock() {
  const [font, setFont] = useState(fonts[0]);
  const [brand, setBrand] = useState(brands[0]);
  const [here, setHere] = useState<string | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--font-sans", font.token);
    root.style.setProperty("--primary", brand.token);
    root.style.setProperty("--sidebar-primary", brand.token);
  }, [brand, font]);

  useEffect(() => {
    const marks = sections
      .map(section => document.getElementById(section.id))
      .filter((mark): mark is HTMLElement => Boolean(mark));

    const watcher = new IntersectionObserver(
      entries => {
        const showing = entries.find(entry => entry.isIntersecting);
        if (showing) setHere(showing.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );

    marks.forEach(mark => watcher.observe(mark));
    return () => watcher.disconnect();
  }, []);

  const at = sections.find(section => section.id === here);

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-5 z-40 flex justify-center px-4">
      <div className="bg-background/70 shadow-elev-2 pointer-events-auto flex items-center rounded-full border p-1 backdrop-blur-xl">
        <DropdownMenu>
          <DropdownMenuTrigger
            aria-label={`Body font: ${font.name}`}
            className="hover:bg-muted ease-interface rounded-full px-3.5 py-2 text-sm transition-colors duration-300 outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
          >
            <span style={{ fontFamily: font.token }}>{font.name}</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            side="top"
            sideOffset={12}
            className="w-44 p-1.5"
          >
            {fonts.map(option => (
              <DropdownMenuItem
                key={option.name}
                onClick={() => setFont(option)}
                className="justify-between rounded-2xl px-3 py-2.5"
              >
                <span style={{ fontFamily: option.token }}>{option.name}</span>
                {option.name === font.name ? (
                  <RiCheckLine className="text-primary size-4" />
                ) : null}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <span aria-hidden className="bg-border mx-1 h-5 w-px" />

        <DropdownMenu>
          <DropdownMenuTrigger
            aria-label="Jump to a section"
            className="hover:bg-muted ease-interface flex items-center gap-2 rounded-full px-3.5 py-2 text-sm transition-colors duration-300 outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
          >
            <RiCompass3Line className="text-muted-foreground size-4" />
            {at ? at.label : "Sections"}
          </DropdownMenuTrigger>
          <DropdownMenuContent
            side="top"
            sideOffset={12}
            className="w-44 p-1.5"
          >
            {sections.map(section => (
              <DropdownMenuItem
                key={section.id}
                nativeButton={false}
                render={<a href={`#${section.id}`} />}
                className="justify-between rounded-2xl px-3 py-2.5"
              >
                {section.label}
                {section.id === here ? (
                  <RiCheckLine className="text-primary size-4" />
                ) : null}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <span aria-hidden className="bg-border mx-1 h-5 w-px" />

        <DropdownMenu>
          <DropdownMenuTrigger
            aria-label={`Brand colour: ${brand.name}`}
            className="hover:bg-muted ease-interface flex items-center gap-2 rounded-full px-3.5 py-2 text-sm transition-colors duration-300 outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
          >
            <span
              aria-hidden
              style={{ background: brand.token }}
              className="size-3 rounded-full"
            />
            Brand
          </DropdownMenuTrigger>
          <DropdownMenuContent
            side="top"
            sideOffset={12}
            className="w-44 p-1.5"
          >
            {brands.map(option => (
              <DropdownMenuItem
                key={option.name}
                onClick={() => setBrand(option)}
                className="gap-3 rounded-2xl px-3 py-2.5"
              >
                <span
                  aria-hidden
                  style={{ background: option.token }}
                  className="size-3 shrink-0 rounded-full"
                />
                {option.name}
                {option.name === brand.name ? (
                  <RiCheckLine className="text-primary ml-auto size-4" />
                ) : null}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

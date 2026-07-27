"use client";

import { RiCloseLine, RiMenuLine } from "@remixicon/react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

type MobileNavProps = {
  links: { label: string; href: string }[];
};

export function MobileNav({ links }: MobileNavProps) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger
        render={
          <Button variant="ghost" size="icon-sm" aria-label="Open menu">
            {open ? (
              <RiCloseLine className="size-4" />
            ) : (
              <RiMenuLine className="size-4" />
            )}
          </Button>
        }
      />
      <DropdownMenuContent
        align="end"
        alignOffset={-8}
        sideOffset={20}
        className="w-[calc(100vw-3rem)] p-2"
      >
        {links.map(link => (
          <DropdownMenuItem
            key={link.href}
            nativeButton={false}
            render={<a href={link.href} />}
            className="rounded-2xl px-4 py-3.5 text-base font-medium"
          >
            {link.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

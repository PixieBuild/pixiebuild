"use client";

import { Button } from "@/components/ui/button";
import { useAppStore } from "@/store";

export function ContactButton({
  ...props
}: React.ComponentProps<typeof Button>) {
  const openContact = useAppStore((state) => state.openContact);

  return <Button type="button" onClick={openContact} {...props} />;
}

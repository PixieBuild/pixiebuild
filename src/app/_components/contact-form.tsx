"use client";

import type * as React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type ContactFormProps = {
  email: string;
};

export function ContactForm({ email }: ContactFormProps) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const body = [
      `Name: ${data.get("name")}`,
      `Company: ${data.get("company")}`,
      `Budget: ${data.get("budget")}`,
      "",
      `${data.get("brief")}`,
    ].join("\n");

    const subject = `Project enquiry — ${data.get("name")}`;

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="panel flex flex-col gap-5 p-7">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" required autoComplete="name" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="company">Company or URL</Label>
          <Input id="company" name="company" autoComplete="organization" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="budget">Budget range</Label>
        <Input id="budget" name="budget" placeholder="$10k–$20k" />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="brief">What are you building?</Label>
        <Textarea
          id="brief"
          name="brief"
          required
          rows={5}
          placeholder="What it is, who it is for, and the date it needs to be live."
        />
      </div>

      <Button type="submit" size="lg" className="mt-1 w-full">
        Send the brief
      </Button>

      <p className="text-muted-foreground text-caption text-pretty">
        This opens your mail app with the details filled in — nothing is stored
        here. Prefer to write it yourself? {email}
      </p>
    </form>
  );
}

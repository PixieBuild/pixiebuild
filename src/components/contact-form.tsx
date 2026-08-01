"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { RiCheckLine } from "@remixicon/react";
import { Controller, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  contactSchema,
  projectKinds,
  type ContactBrief,
} from "@/lib/contact-schema";

export function ContactForm() {
  const form = useForm<ContactBrief>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", kind: "Website", brief: "" },
  });

  const onSubmit = async (values: ContactBrief) => {
    try {
      const reply = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!reply.ok) throw new Error(await reply.text());
    } catch {
      form.setError("root", {
        message: "That did not send. Try again, or email hello@pixiebuild.com.",
      });
    }
  };

  const sent = form.formState.isSubmitSuccessful && !form.formState.errors.root;

  if (sent) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center gap-3 text-center">
        <span className="bg-primary/10 text-primary flex size-11 items-center justify-center rounded-full">
          <RiCheckLine className="size-5" />
        </span>
        <p className="font-medium">That is on its way.</p>
        <p className="text-muted-foreground max-w-xs text-sm text-pretty">
          We read every one of these ourselves and will come back to you by
          email.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <FieldGroup className="gap-5">
        <Controller
          name="name"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Name</FieldLabel>
              <Input
                {...field}
                id={field.name}
                autoComplete="name"
                aria-invalid={fieldState.invalid}
              />
              {fieldState.invalid ? (
                <FieldError errors={[fieldState.error]} />
              ) : null}
            </Field>
          )}
        />

        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Email</FieldLabel>
              <Input
                {...field}
                id={field.name}
                autoComplete="email"
                aria-invalid={fieldState.invalid}
              />
              {fieldState.invalid ? (
                <FieldError errors={[fieldState.error]} />
              ) : null}
            </Field>
          )}
        />

        <Controller
          name="kind"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>What are you after?</FieldLabel>
              <div id={field.name} className="flex flex-wrap gap-2">
                {projectKinds.map(kind => (
                  <button
                    key={kind}
                    type="button"
                    onClick={() => field.onChange(kind)}
                    aria-pressed={kind === field.value}
                    className="ease-interface aria-pressed:border-primary aria-pressed:bg-primary/10 aria-pressed:text-foreground text-muted-foreground hover:text-foreground rounded-full border px-3 py-1.5 text-sm transition-colors duration-300"
                  >
                    {kind}
                  </button>
                ))}
              </div>
            </Field>
          )}
        />

        <Controller
          name="brief"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>
                What are you building?
              </FieldLabel>
              <Textarea
                {...field}
                id={field.name}
                rows={5}
                placeholder="A sentence or two is plenty."
                aria-invalid={fieldState.invalid}
              />
              {fieldState.invalid ? (
                <FieldError errors={[fieldState.error]} />
              ) : null}
            </Field>
          )}
        />

        {form.formState.errors.root ? (
          <p className="text-destructive text-sm">
            {form.formState.errors.root.message}
          </p>
        ) : null}

        <Button
          type="submit"
          size="lg"
          disabled={form.formState.isSubmitting}
          className="w-full"
        >
          {form.formState.isSubmitting ? "Sending…" : "Send it over"}
        </Button>
      </FieldGroup>
    </form>
  );
}

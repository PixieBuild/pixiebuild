import { z } from "zod";

export const projectKinds = ["Landing page", "Website", "Web app"] as const;

export const contactSchema = z.object({
  name: z.string().min(2, "Tell us what to call you."),
  email: z.email("That address does not look right."),
  kind: z.enum(projectKinds),
  brief: z.string().min(20, "A sentence or two, so we know what to reply to."),
});

export type ContactBrief = z.infer<typeof contactSchema>;

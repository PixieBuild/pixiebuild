import { Resend } from "resend";

import { buildBriefEmail } from "@/lib/contact-email";
import { contactSchema } from "@/lib/contact-schema";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const key = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM;

  /* Resend takes an array, so CONTACT_TO can list several addresses. */
  const to = (process.env.CONTACT_TO ?? "")
    .split(",")
    .map((address) => address.trim())
    .filter(Boolean);

  if (!key || !from || !to.length) {
    console.error(
      "Contact: needs RESEND_API_KEY, CONTACT_FROM and CONTACT_TO in the environment",
    );
    return Response.json({ error: "Mail is not configured." }, { status: 500 });
  }

  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Expected JSON." }, { status: 400 });
  }

  const brief = contactSchema.safeParse(payload);

  if (!brief.success) {
    return Response.json(
      { error: "That brief did not look right." },
      { status: 400 },
    );
  }

  const { subject, html, text } = buildBriefEmail(brief.data);

  const { error } = await new Resend(key).emails.send({
    from,
    to,
    subject,
    html,
    text,
    replyTo: brief.data.email,
  });

  if (error) {
    console.error("Contact: Resend refused the send", error);
    return Response.json({ error: "That did not send." }, { status: 502 });
  }

  return Response.json({ ok: true });
}

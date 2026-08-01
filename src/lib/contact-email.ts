import type { ContactBrief } from "@/lib/contact-schema";

function escape(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function stamp() {
  return new Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  }).format(new Date());
}

const ink = "#0b1215";
const muted = "#5b676c";
const line = "#e4e8ea";
const brand = "#0077b6";

function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding:14px 0;border-bottom:1px solid ${line};width:132px;vertical-align:top;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:${muted};">${label}</td>
      <td style="padding:14px 0;border-bottom:1px solid ${line};font-size:15px;color:${ink};">${value}</td>
    </tr>`;
}

export function buildBriefEmail(brief: ContactBrief) {
  const name = escape(brief.name);
  const email = escape(brief.email);
  const kind = escape(brief.kind);
  const words = escape(brief.brief).replace(/\n/g, "<br />");

  const subject = `New brief · ${brief.kind} · ${brief.name}`;

  const text = [
    `${brief.name} is after a ${brief.kind.toLowerCase()}.`,
    ``,
    `Email: ${brief.email}`,
    `Sent:  ${stamp()}`,
    ``,
    brief.brief,
    ``,
    `Reply straight to this email to reach them.`,
  ].join("\n");

  const html = `<!doctype html>
<html>
  <body style="margin:0;padding:24px;background:#f4f6f7;font-family:ui-sans-serif,-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid ${line};border-radius:14px;">
      <tr>
        <td style="padding:28px 28px 0 28px;">
          <p style="margin:0;font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:${muted};">New project brief</p>
          <h1 style="margin:10px 0 0 0;font-size:22px;line-height:1.3;color:${ink};font-weight:600;">
            ${name} is after a ${kind.toLowerCase()}
          </h1>
        </td>
      </tr>

      <tr>
        <td style="padding:20px 28px 0 28px;">
          <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
            ${row("Name", name)}
            ${row("Email", `<a href="mailto:${email}" style="color:${brand};text-decoration:none;">${email}</a>`)}
            ${row("Looking for", kind)}
            ${row("Sent", escape(stamp()))}
          </table>
        </td>
      </tr>

      <tr>
        <td style="padding:24px 28px 0 28px;">
          <p style="margin:0 0 10px 0;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:${muted};">In their words</p>
          <div style="padding:18px;background:#f7f9fa;border:1px solid ${line};border-radius:10px;font-size:15px;line-height:1.65;color:${ink};">
            ${words}
          </div>
        </td>
      </tr>

      <tr>
        <td style="padding:24px 28px 28px 28px;">
          <a href="mailto:${email}?subject=${encodeURIComponent(`Re: your ${brief.kind.toLowerCase()}`)}"
             style="display:inline-block;padding:12px 20px;background:${brand};color:#ffffff;border-radius:999px;font-size:14px;font-weight:500;text-decoration:none;">
            Reply to ${name}
          </a>
          <p style="margin:16px 0 0 0;font-size:13px;color:${muted};">
            Replying to this email reaches them directly.
          </p>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  return { subject, html, text };
}

import type { Metadata } from "next";

import {
  LegalPage,
  type LegalSection,
} from "@/app/(legal)/_components/legal-page";
import { site } from "@/lib/site";
import { commercial } from "@/lib/terms";

export const metadata: Metadata = {
  title: "Refunds",
  description:
    "When a PixieBuild deposit is refundable, what happens if you stop a project part-way, and what we do if we are the ones who cannot deliver.",
  alternates: { canonical: "/refund" },
};

const sections: LegalSection[] = [
  {
    title: "Why this is not a returns policy",
    body: [
      "Nothing here is bought off a shelf. A project is people spending hours on your business, and those hours are spent the moment work starts — they cannot be put back on a shelf if you change your mind.",
      "So this policy is about time: what has been spent, what has not, and who is at fault when something stops. It is meant to be fair in both directions, including when the fault is ours.",
    ],
  },
  {
    title: "Before we start",
    body: [
      `A deposit books time in our calendar and turns work away. If you cancel before we have started, we refund the ${commercial.deposit} deposit in full, less anything already spent on your behalf — a licence bought, a domain registered.`,
      "In practice that means telling us before the kickoff call. Once discovery has happened, hours have gone into your project even if you have not seen a design yet.",
    ],
  },
  {
    title: "Once we have started",
    body: [
      "Fees covering work already done are not refundable. If you stop a project part-way, you pay for the stage in progress, anything after it is cancelled and not charged, and we hand over everything that exists at that point — files, code, whatever state it is in.",
      "If you have paid ahead for stages we have not reached, that money comes back to you. We do not keep money for work we have not done.",
    ],
  },
  {
    title: "After we have delivered",
    body: [
      `A delivered project is not refundable. If something is broken, that is not a refund question — it is a fix, and fixing defects in what we built is free for the first ${commercial.support} after launch.`,
      "If what we delivered is not what was quoted, say so and we will put it right. That is the remedy, and it is a better one than money back and no website.",
    ],
  },
  {
    title: "If we are the ones who cannot deliver",
    body: [
      "If we stop being able to do the work — we take on too much, something happens, we simply get it wrong — you get back every rupee or dollar for work not completed, and you keep everything produced up to that point with no strings on it.",
      "If we miss a date we set together and the delay is ours rather than a wait on content or approvals, you can stop the project and take that refund. We would rather fix the timeline, but the choice is yours.",
    ],
  },
  {
    title: "Money we spent on your behalf",
    body: [
      "Domains, hosting, fonts, stock images, paid plugins. Once bought, those are governed by whoever sold them, and most are not refundable at all.",
      "They are yours either way — registered in your name, on your accounts — so if a project stops, you keep them.",
    ],
  },
  {
    title: "How to ask",
    body: [
      `Email ${site.email} and say what you would like refunded and why. No form, no process.`,
      "We will reply within 5 working days with a number and how we got to it. Approved refunds go back the way they came, and usually take 5 to 10 working days to appear depending on your bank.",
    ],
  },
  {
    title: "Chargebacks",
    body: [
      "If you think something is wrong, email us before your bank. A chargeback raised without a word to us first freezes the project and the conversation, and it is a slower route to the same answer.",
      "We have never needed this paragraph. It is here so the position is clear.",
    ],
  },
  {
    title: "Changes, and getting in touch",
    body: [
      "If this policy changes we will change the date at the top. Your project is covered by the policy in force when you booked it.",
      `Questions before you book are welcome — they are cheaper than questions afterwards: ${site.email}.`,
    ],
  },
];

export default function RefundPage() {
  return (
    <LegalPage
      eyebrow="Refunds"
      title="Refund policy"
      lead="What happens to money already paid if a project stops — whichever side stops it."
      updated={commercial.updated}
      sections={sections}
    />
  );
}

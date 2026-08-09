import type { Metadata } from "next";

import { LegalPage, type LegalSection } from "@/app/(legal)/_components/legal-page";
import { site } from "@/lib/site";
import { commercial } from "@/lib/terms";

export const metadata: Metadata = {
  title: "Terms",
  description:
    "How a PixieBuild project runs: what we quote, what we need from you, when payment is due, who owns the work, and what happens if either of us stops.",
  alternates: { canonical: "/terms" },
};

const sections: LegalSection[] = [
  {
    title: "What these cover",
    body: [
      `These terms apply to the work ${site.name} does for you and to this website. ${site.name} — also written ${site.alsoKnownAs} — is a web design and development studio founded in 2026, based in India, working with clients worldwide.`,
      "Every project also has a written quote or proposal. Where that document and this page disagree, the quote wins — it was written about your project, and this page was not.",
    ],
  },
  {
    title: "How a project runs",
    body: [
      "We scope and quote the whole thing before a line is written, so the number and what it buys are settled before work starts. If the scope cannot be pinned down yet, we say so rather than guess.",
      "Then it runs in four stages: discovery, where we work out what the business actually sells; design and build in one pass, by the same people; rounds of iteration you can compare, each a version to look at rather than a description of one; and delivery into your own accounts.",
      "We put a date on it together at kickoff, once we both know what is being built. You watch it happen on a live link rather than waiting for a reveal, and feedback goes in one shared channel so nothing needs chasing through email.",
    ],
  },
  {
    title: "What we need from you",
    body: [
      "Content, feedback and access, roughly when we agreed them. Most projects that slip do so because words, images or approvals are waiting on someone, not because the build is slow.",
      "A date we set together assumes replies within a few working days. If something waits longer than that, the date moves — we will tell you when it does rather than let it drift quietly.",
      "We take what you send us as yours to send. If you give us text, images or fonts, we assume you have the right to use them.",
    ],
  },
  {
    title: "Scope, and changes to it",
    body: [
      "The quote lists what is being built. Anything outside it — extra pages, a feature that appears mid-project, a redesign of something already signed off — is quoted separately before we start on it.",
      "Small things we can absorb, we absorb without an invoice or a conversation about it. We are not looking to bill you for a paragraph.",
    ],
  },
  {
    title: "Revisions",
    body: [
      `Each stage includes ${commercial.revisions} of changes. That is normally more than enough, because you are seeing the work as it happens rather than at the end.`,
      "Beyond that, or where a change reverses something already approved, we quote the extra time before doing it.",
    ],
  },
  {
    title: "Fees and payment",
    body: [
      `Unless your quote says otherwise, ${commercial.deposit} is due to book the work in and the remaining ${commercial.balance} before the site goes live or the files are handed over. Prices on this site are in US dollars and exclude any taxes you owe locally.`,
      `Invoices are due within ${commercial.invoiceDays} days. If an invoice goes unpaid past that, we may pause work until it is settled — we will tell you before we do.`,
    ],
  },
  {
    title: "Who owns the work",
    body: [
      "You do, once it is paid for in full: the code, the design files, and every account it runs on. We push to your repository, deploy to your hosting, connect your domain, and hand over everything we made along the way.",
      "Until final payment, the work is licensed to you for review, not owned by you. This matters only in the case where a project is abandoned mid-way.",
      "Two things stay ours: the general techniques and know-how we bring to every project, and anything we built before you hired us. You get an unrestricted licence to use those as part of your project, but they are not exclusive to you.",
      "Third-party licences — fonts, stock photography, paid plugins — are yours to hold. We will tell you which ones a project needs and what they cost before we use them.",
    ],
  },
  {
    title: "Things we buy on your behalf",
    body: [
      "Domains, hosting, a CMS plan, an email service, licences. Where we can, we set these up in your name and on your card, so you own them outright and are never locked to us.",
      "Where we pay for something on your behalf, we invoice it at cost. Those services have their own terms and their own uptime, and we are not able to answer for them.",
    ],
  },
  {
    title: "After it launches",
    body: [
      `For ${commercial.support} after launch we fix anything that is broken in what we built, at no charge. That is defects, not new work.`,
      "After that we stay reachable, and we are still here when you want to add to it — a new page, a new feature, or the next phase entirely. That is quoted like any other work.",
    ],
  },
  {
    title: "Showing the work",
    body: [
      "We may show finished work in our portfolio, in case studies and on social media, including a link to your site. If you would rather we did not, tell us and we will not — before or after launch, no reason needed.",
      "We will never show anything you have told us is confidential, and we will not publish anything before your site is live.",
    ],
  },
  {
    title: "Confidentiality",
    body: [
      "Anything you tell us about your business that is not public, we keep to ourselves, and we expect the same of anything we share about how we work.",
      "This carries on after the project ends.",
    ],
  },
  {
    title: "What we do not promise",
    body: [
      "We build the thing we quoted, to a professional standard, and we fix what is broken in it. We cannot promise a particular ranking on Google, a level of traffic, a conversion rate, or revenue — nobody honest can, because those depend on your market and your offer as much as your website.",
      "Beyond what we have agreed in writing, the work is provided as it is. Where the law allows us to limit it, our liability for any project is capped at what you have paid us for that project.",
      "Neither of us is liable for indirect or consequential loss — lost profit, lost data, business interruption — and nothing here limits liability for fraud, death or personal injury, or anything else the law does not let us limit.",
    ],
  },
  {
    title: "If either of us stops",
    body: [
      "You can stop a project at any point by telling us in writing. You pay for the work done up to that point, we hand over what exists in whatever state it is in, and the refund policy sets out what happens to money already paid.",
      "We may stop if an invoice goes unpaid well past its date, if what is being asked for falls outside anything we agreed, or if the working relationship stops being a workable one. We would talk to you first.",
    ],
  },
  {
    title: "Governing law",
    body: [
      "These terms are governed by the laws of India, and the courts of India have jurisdiction over any dispute. If you are a consumer somewhere with protections that cannot be waived, you keep those.",
      "Before anyone goes near a court, email us. Most things are a misunderstanding, and it is quicker to say so.",
    ],
  },
  {
    title: "Changes, and getting in touch",
    body: [
      "If these terms change we will change the date at the top. A change never applies retroactively to a project already quoted and underway — your project runs on the terms in force when you booked it.",
      `Anything at all: ${site.email}.`,
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms"
      title="Terms of service"
      lead="How a project runs, when payment is due, and who owns what at the end of it. Written to be read, not to be got past."
      updated={commercial.updated}
      sections={sections}
    />
  );
}

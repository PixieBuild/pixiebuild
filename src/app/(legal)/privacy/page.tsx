import type { Metadata } from "next";

import {
  LegalPage,
  type LegalSection,
} from "@/app/(legal)/_components/legal-page";
import { site } from "@/lib/site";
import { commercial } from "@/lib/terms";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "What PixieBuild collects when you visit this site or send a brief, who processes it, how long it is kept, and how to have it removed.",
  alternates: { canonical: "/privacy" },
};

const sections: LegalSection[] = [
  {
    title: "Who we are",
    body: [
      `PixieBuild is a web design and development studio, founded in 2026, based in India and working with clients worldwide. For anything on this page, write to ${site.email}.`,
      "We are small. There is no data team here — the person reading your enquiry is the person who built the form.",
    ],
  },
  {
    title: "When you send us a brief",
    body: [
      "The contact form asks for your name, your email address, the kind of project, and a short brief. We use those to read your enquiry and reply to it, and for nothing else.",
      "The form does not write to a database. It is delivered to our inbox as an email through Resend, our email provider, and then it lives in that inbox.",
      "We do not sell it, we do not add you to a mailing list, and we do not send you anything you did not ask for.",
    ],
  },
  {
    title: "When you book a call",
    body: [
      "Booking a call opens Cal.com inside this page. Cal.com takes your name, email and the time you choose in order to make the booking, and it is the controller of what you type in there — their privacy policy governs it, alongside this one.",
    ],
  },
  {
    title: "When you just visit",
    body: [
      "This site is hosted on Vercel, which keeps short-lived server logs including IP addresses in order to serve the site and defend it from abuse.",
      "We use Vercel Analytics and Vercel Speed Insights to see which pages get read and how quickly they load. Neither sets advertising cookies, neither builds a profile of you, and neither follows you to other sites.",
      "There is no Google Analytics here, no advertising pixels and no tracking cookies. The only thing this site stores in your browser is whether you chose the light or dark theme, and it never leaves your device.",
    ],
  },
  {
    title: "Why we are allowed to",
    body: [
      "Where the UK or EU GDPR applies: replying to your enquiry is processing necessary to take steps at your request before a contract; keeping the site up and understanding which pages are read is our legitimate interest in running a business, weighed against how little we collect.",
      "Where India's Digital Personal Data Protection Act applies, you give us your details for a purpose we have stated, and we use them for that purpose only.",
    ],
  },
  {
    title: "How long we keep it",
    body: [
      "Enquiries stay in our inbox for as long as the conversation is live, and for up to two years afterwards in case you come back — a lot of projects start with a second email a year later. Ask us to delete one sooner and we will.",
      "If you become a client, records tied to invoices are kept as long as tax law requires. Server logs are short-lived and handled by Vercel. Analytics data is aggregated and holds nothing that identifies you.",
    ],
  },
  {
    title: "Who else touches it",
    body: [
      "Three companies, each for one job: Vercel for hosting and analytics, Resend for delivering the form to our inbox, and Cal.com if you book a call. That is the complete list.",
      "They process data outside India, including in the United States and the European Union. We picked them for their own privacy posture, and we do not give any of them permission to use your data for their own purposes.",
    ],
  },
  {
    title: "Keeping it safe",
    body: [
      "The site is served over HTTPS, the form is validated before it is sent anywhere, and access to the inbox is protected by two-factor authentication.",
      "Nobody can honestly promise perfect security, and we will not. What we can say is that the less we collect, the less there is to lose — which is most of why this page is short.",
    ],
  },
  {
    title: "Children",
    body: [
      "This site is for businesses and is not aimed at children. We do not knowingly collect anything from anyone under 16. If you think we have, tell us and it will be deleted.",
    ],
  },
  {
    title: "Your rights",
    body: [
      "Wherever you are: ask what we hold about you, ask for a copy, ask us to correct it, or ask us to delete it.",
      "Under the UK and EU GDPR you can also object to processing, ask us to restrict it, and complain to your local supervisory authority. Under India's DPDP Act you can nominate someone to exercise these rights for you.",
      `One email to ${site.email} is enough. We answer within 30 days, usually the same week, and we will not ask you to prove who you are beyond writing from the address in question.`,
    ],
  },
  {
    title: "Changes, and getting in touch",
    body: [
      "If this changes we will change the date at the top. There is no archive of earlier versions, so if the detail matters to you, keep a copy.",
      `Anything at all: ${site.email}.`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy"
      title="Privacy policy"
      lead="What this site collects, who else touches it, how long it is kept, and how to have it removed."
      updated={commercial.updated}
      sections={sections}
    />
  );
}

import { ClosingCall } from "@/app/_components/closing-call";
import { Faq } from "@/app/_components/faq";
import { Hero } from "@/app/_components/hero";
import { HowWeWork } from "@/app/_components/how-we-work";
import { PageGlow } from "@/app/_components/page-glow";
import { Pricing } from "@/app/_components/pricing";
import { Services } from "@/app/_components/services";
import { TrackRecord } from "@/app/_components/track-record";
import { ContactDialog } from "@/components/contact-dialog";
import { SiteDock } from "@/components/site-dock";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <PageGlow />

      <main className="flex-1">
        <Hero />
        <HowWeWork />
        <TrackRecord />
        <Services />
        <Pricing />
        <Faq />
        <ClosingCall />
      </main>

      <SiteFooter />
      <SiteDock />
      <ContactDialog />
    </>
  );
}

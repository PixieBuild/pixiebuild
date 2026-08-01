import { ClosingCall } from "@/app/_components/closing-call";
import { Faq } from "@/app/_components/faq";
import { Hero } from "@/app/_components/hero";
import { HowWeWork } from "@/app/_components/how-we-work";
import { PageBackdrop } from "@/app/_components/page-backdrop";
import { Pricing } from "@/app/_components/pricing";
import { SelectedWork } from "@/app/_components/selected-work";
import { Services } from "@/app/_components/services";
import { ContactDialog } from "@/components/contact-dialog";
import { SiteDock } from "@/components/site-dock";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <PageBackdrop />

      <main className="flex-1">
        <Hero />
        <HowWeWork />
        <SelectedWork />
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

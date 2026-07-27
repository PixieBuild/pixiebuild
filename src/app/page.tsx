import { Contact } from "@/app/_components/contact";
import { Faq } from "@/app/_components/faq";
import { Hero } from "@/app/_components/hero";
import { Pricing } from "@/app/_components/pricing";
import { Process } from "@/app/_components/process";
import { SelectedWork } from "@/app/_components/selected-work";
import { Services } from "@/app/_components/services";
import { SiteFooter } from "@/app/_components/site-footer";
import { WorkingTogether } from "@/app/_components/working-together";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <Hero />
        {/* <SelectedWork /> */}
        {/* <Services /> */}
        {/* <Process /> */}
        {/* <Pricing /> */}
        {/* <WorkingTogether /> */}
        {/* <Faq /> */}
        {/* <Contact /> */}
      </main>
      {/* <SiteFooter /> */}
    </>
  );
}

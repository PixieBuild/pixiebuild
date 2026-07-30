import { Hero } from "@/app/_components/hero";
import { HowWeWork } from "@/app/_components/how-we-work";
import { PageBackdrop } from "@/app/_components/page-backdrop";
import { SelectedWork } from "@/app/_components/selected-work";

export default function Home() {
  return (
    <>
      <PageBackdrop />

      <main className="flex-1">
        <Hero />
        <HowWeWork />
        <SelectedWork />
      </main>
    </>
  );
}

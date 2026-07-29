import { Hero } from "@/app/_components/hero";
import { HowWeWork } from "@/app/_components/how-we-work";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <HowWeWork />
    </main>
  );
}

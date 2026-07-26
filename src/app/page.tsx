import PbLogo from "@/assets/pb-logo.svg";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6">
      <PbLogo className="size-16" />
      <h1 className="text-2xl font-medium tracking-tight">Coming soon</h1>
    </main>
  );
}

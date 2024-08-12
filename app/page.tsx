import Hero from "@/components/pages/hero";
import About from "@/components/pages/about";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <About />
    </main>
  );
}

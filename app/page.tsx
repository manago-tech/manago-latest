import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Services from "@/components/sections/services";
import Testimonials from "@/components/sections/testimonials";
import Team from "@/components/sections/team";
import Success from "@/components/sections/success";
import Footer from "@/components/sections/footer";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="flex min-h-screen overflow-x-hidden flex-col">
      <Hero />
      <About />
      <div className="flex justify-center">
        <Separator className="max-w-40 sm:max-w-sm md:max-w-lg" />
      </div>
      <Services />
      <div className="flex justify-center">
        <Separator className="max-w-40 sm:max-w-sm md:max-w-lg" />
      </div>
      <Testimonials />
      <div className="flex justify-center">
        <Separator className="max-w-40 sm:max-w-sm md:max-w-lg" />
      </div>
      <Team />
      <div className="flex justify-center">
        <Separator className="max-w-40 sm:max-w-sm md:max-w-lg" />
      </div>
      <Success />
      <Footer />
    </main>
  );
}
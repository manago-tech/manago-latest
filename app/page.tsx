import Hero from "@/components/pages/hero";
import About from "@/components/pages/about";
import Services from "@/components/pages/services";
import Testimonials from "@/components/pages/testimonials";
import Team from "@/components/pages/team";
import Success from "@/components/pages/success";
import Footer from "@/components/pages/footer";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="flex min-h-screen overflow-x-hidden flex-col">
      <Hero />
      <About />
      <div className="flex justify-center">
        <Separator className="max-w-lg" />
      </div>
      <Services />
      <div className="flex justify-center">
        <Separator className="max-w-lg" />
      </div>
      <Testimonials />
      <div className="flex justify-center">
        <Separator className="max-w-lg" />
      </div>
      <Team />
      <div className="flex justify-center">
        <Separator className="max-w-lg" />
      </div>
      <Success />
      <Footer />
    </main>
  );
}

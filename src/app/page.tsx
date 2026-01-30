import Hero from "@/components/Hero";
import WhoItsFor from "@/components/WhoItsFor";
import Features from "@/components/Features";
import Security from "@/components/Security";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <>
      
      <main className="flex-1">
        <Hero />
        <WhoItsFor />
        <Features />
        <Security />
        <Pricing />
      </main>
    </>
  );
}

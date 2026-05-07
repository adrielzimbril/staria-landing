import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Logos } from "@/components/sections/Logos";
import { Gallery } from "@/components/sections/Gallery";
import { Workflow } from "@/components/sections/Workflow";
import { StudioBento } from "@/components/sections/StudioBento";
import { Features } from "@/components/sections/Features";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import PixelBlast from "@/components/PixelBlast";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-eggshell">
        <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.75]">
          <PixelBlast
            variant="square"
            pixelSize={2}
            color="#fcddc0"
            patternScale={1.5}
            patternDensity={0.4}
            enableRipples={true}
            rippleSpeed={0.4}
            rippleThickness={0.15}
            rippleIntensityScale={0.6}
            speed={0.02}
            transparent
            edgeFade={0.4}
          />
        </div>
        <div className="relative z-10 size-full">
          <Hero />
          <Logos />
          <Gallery />
          <Workflow />
          <StudioBento />
          <Features />
          <Pricing />
          <FAQ />
          <CTA />
        </div>
      </main>
      <Footer />
    </>
  );
}

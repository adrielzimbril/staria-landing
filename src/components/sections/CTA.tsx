import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section id="cta" className="px-4 py-[var(--section-gap)]">
      <div className="section-shell">
        <div className="interactive-card grid overflow-hidden !p-0 lg:grid-cols-[1fr_1.1fr]">
          <div className="flex flex-col justify-center p-8 md:p-16 lg:p-20">
            <p className="label-type mb-6 text-slate-text">Private beta</p>
            <h2 className="display-type text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] text-midnight-ink">
              Build the first Staria content factory.
            </h2>
            <p className="body-type mt-8 max-w-xl text-[18px] leading-relaxed text-slate-text">
              Join a fictional waitlist for a real production-quality landing
              page pattern: clear copy, strong metadata, optimized images, and a
              restrained visual system.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="mailto:hello@example.com"
                className="pill-primary"
              >
                Request access
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="#gallery" className="pill-secondary">
                See outputs
              </Link>
            </div>
          </div>
          <div className="relative min-h-[400px] bg-fog-gray lg:min-h-full">
            <Image
              src="/img/silhouette-woman-wearing-sunglasses.jpg"
              alt="AI-generated silhouette portrait used in Staria AI call to action"
              fill
              sizes="(max-width: 1024px) 100vw, 800px"
              className="object-cover transition-transform duration-1000 hover:scale-[1.03]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

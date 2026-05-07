import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section id="cta" className="px-4 py-16 md:py-24">
      <div className="section-shell">
        <div className="hairline-card grid overflow-hidden lg:grid-cols-[0.92fr_1.08fr]">
          <div className="p-6 md:p-10 lg:p-12">
            <p className="mb-4 text-sm text-slate-gray font-medium uppercase tracking-wider">Private beta</p>
            <h2 className="display-type max-w-2xl text-[clamp(2.4rem,6vw,4.5rem)] leading-[0.98] text-midnight-graphite">
              Build the first Staria content factory.
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-7 text-slate-gray">
              Join a fictional waitlist for a real production-quality landing
              page pattern: clear copy, strong metadata, optimized images, and a
              restrained visual system.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
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
          <div className="relative min-h-[320px] bg-cloud-white lg:min-h-[520px]">
            <Image
              src="/img/silhouette-woman-wearing-sunglasses.jpg"
              alt="AI-generated silhouette portrait used in Staria AI call to action"
              fill
              sizes="(max-width: 1024px) 100vw, 600px"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

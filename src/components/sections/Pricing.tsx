import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { plans } from "@/lib/data";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function Pricing() {
  return (
    <section id="pricing" className="px-4 py-[var(--section-gap)]">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Pricing"
          title="Start with a personal queue. Scale into a studio system."
          body="Simple plans for a conceptual product: creator volume, shared team workflows, and enterprise governance."
        />

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`interactive-card flex min-h-[640px] flex-col !p-10 ${
                  plan.featured 
                    ? "bg-midnight-ink text-canvas-white border-midnight-ink shadow-xl ring-1 ring-white/10" 
                    : "bg-canvas-white text-midnight-ink border-border-ash"
                }`}
              >
                <div className="mb-12 flex items-center justify-between">
                  <span
                    className={`rounded-md px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider ${
                      plan.featured
                        ? "bg-canvas-white/10 text-canvas-white"
                        : "bg-fog-gray text-slate-text"
                    }`}
                  >
                    {plan.featured ? "Recommended" : "Standard"}
                  </span>
                </div>
  
                <h3 className="display-type text-4xl tracking-tight">
                  {plan.name}
                </h3>
                <p
                  className={`mt-6 body-type text-[15px] leading-relaxed ${
                    plan.featured ? "text-canvas-white/70" : "text-slate-text"
                  }`}
                >
                  {plan.description}
                </p>
  
                <div className="my-12 flex items-baseline gap-2">
                  <span className="display-type text-6xl">
                    {plan.price}
                  </span>
                  {plan.price !== "Custom" ? (
                    <span
                      className={`text-[20px] ${
                        plan.featured ? "text-canvas-white/50" : "text-slate-text"
                      }`}
                    >
                      /mo
                    </span>
                  ) : null}
                </div>
  
                <div className="space-y-5 mb-12">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-4">
                      <div
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          plan.featured
                            ? "bg-canvas-white text-midnight-ink"
                            : "bg-midnight-ink text-canvas-white"
                        }`}
                      >
                        <Check className="h-3 w-3" aria-hidden="true" />
                      </div>
                      <span
                        className={`text-[15px] ${
                          plan.featured ? "text-canvas-white/90" : "text-midnight-ink"
                        }`}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
  
                <Link
                  href="#cta"
                  className={`mt-auto inline-flex min-h-[56px] items-center justify-center gap-3 rounded-[var(--radius-buttons)] px-8 text-[16px] font-medium no-underline transition-all hover:scale-[1.02] active:scale-[0.98] ${
                    plan.featured
                      ? "bg-canvas-white text-midnight-ink hover:bg-white"
                      : "bg-midnight-ink text-canvas-white hover:bg-jet-black"
                  }`}
                >
                  Get Started
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { plans } from "@/lib/data";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function Pricing() {
  return (
    <section id="pricing" className="px-4 py-16 md:py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Pricing"
          title="Start with a personal queue. Scale into a studio system."
          body="Simple plans for a conceptual product: creator volume, shared team workflows, and enterprise governance."
        />

        <div className="mt-8 grid gap-3 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`hairline-card flex min-h-[540px] flex-col p-6 pb-8 md:p-7 md:pb-9 ${
                plan.featured ? "bg-midnight-graphite text-canvas-white" : "text-midnight-graphite"
              }`}
            >
              <div className="mb-10 flex items-center justify-between">
                <span
                  className={`rounded-full px-3 py-1.5 text-xs font-medium ${
                    plan.featured
                      ? "bg-canvas-white/10 text-canvas-white"
                      : "bg-cloud-white text-slate-gray"
                  }`}
                >
                  {plan.featured ? "Best for teams" : "Monthly"}
                </span>
                {plan.featured ? (
                  <span className="h-2.5 w-2.5 rounded-full bg-agent-violet" />
                ) : null}
              </div>

              <h3 className="display-type text-4xl leading-none">
                {plan.name}
              </h3>
              <p
                className={`mt-4 text-sm leading-6 ${
                  plan.featured ? "text-canvas-white/60" : "text-slate-gray"
                }`}
              >
                {plan.description}
              </p>

              <div className="my-10 flex items-end gap-2">
                <span className="display-type text-6xl leading-none">
                  {plan.price}
                </span>
                {plan.price !== "Custom" ? (
                  <span
                    className={`pb-2 text-sm ${
                      plan.featured ? "text-canvas-white/50" : "text-slate-gray"
                    }`}
                  >
                    /mo
                  </span>
                ) : null}
              </div>

              <div className="space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <span
                      className={`flex h-5 w-5 items-center justify-center rounded-full ${
                        plan.featured
                          ? "bg-canvas-white text-midnight-graphite"
                          : "bg-midnight-graphite text-canvas-white"
                      }`}
                    >
                      <Check className="h-3 w-3" aria-hidden="true" />
                    </span>
                    <span
                      className={`text-sm ${
                        plan.featured ? "text-canvas-white/80" : "text-slate-gray"
                      }`}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="#cta"
                className={`mt-auto mb-1 inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium no-underline transition-all hover:scale-[1.02] ${
                  plan.featured
                    ? "bg-canvas-white text-midnight-graphite"
                    : "bg-cloud-white text-midnight-graphite"
                }`}
              >
                Choose {plan.name}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

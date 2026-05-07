import Link from "next/link";
import { ArrowRight, CheckCircle2, CircleDollarSign, Sparkles } from "lucide-react";
import { navItems } from "@/lib/data";
import { Logo } from "@/components/shared/Logo";

export function Footer() {
  return (
    <footer className="px-4 pb-6 pt-10 md:pt-16">
      <div className="section-shell overflow-hidden rounded-[24px] bg-midnight-graphite text-canvas-white shadow-card">
        <div className="grid gap-10 p-6 md:grid-cols-[1.1fr_0.9fr] md:p-10 lg:p-12">
          <div>
            <div className="[&_span:first-child]:bg-canvas-white [&_span:first-child]:text-midnight-graphite [&_span:last-child]:text-canvas-white">
              <Logo />
            </div>
            <h2 className="display-type mt-8 max-w-2xl text-[clamp(2.25rem,6vw,4.5rem)] leading-[0.98]">
              Content systems for creators that move fast.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-canvas-white/60">
              Staria is a conceptual AI-powered social media content factory built with production
              structure, precise visual rhythm, and reusable components for the
              Day 7 landing page challenge.
            </p>
          </div>

          <div className="grid content-between gap-8">
            <div className="grid gap-3 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
              {[
                [Sparkles, "Render queue", "8s avg"],
                [CheckCircle2, "Review state", "Synced"],
                [CircleDollarSign, "Usage model", "Creator"],
              ].map(([Icon, label, value]) => {
                const LucideIcon = Icon as typeof Sparkles;

                return (
                  <div key={label as string} className="rounded-[16px] bg-white/[0.06] p-4 shadow-[rgba(255,255,255,0.08)_0_0_0_1px_inset]">
                    <LucideIcon className="mb-5 h-4 w-4 text-canvas-white/70" aria-hidden="true" />
                    <p className="text-[11px] font-medium uppercase text-canvas-white/40">
                      {label as string}
                    </p>
                    <p className="mt-1 text-sm font-medium">{value as string}</p>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-3 text-sm text-canvas-white/60">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-full bg-white/[0.06] px-3 py-2 no-underline transition-colors hover:bg-white/[0.12] hover:text-canvas-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <Link
                href="#cta"
                className="inline-flex min-h-11 w-fit items-center justify-center gap-2 rounded-full bg-canvas-white px-5 text-sm font-medium text-midnight-graphite no-underline transition-transform hover:scale-[1.02]"
              >
                Request access
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 border-t border-white/10 px-6 py-4 text-xs text-canvas-white/40 md:flex-row md:items-center md:justify-between md:px-10 lg:px-12">
          <p>Day 7 / One landing page per day</p>
          <p>Next.js, TypeScript, Tailwind CSS v4</p>
        </div>
      </div>
    </footer>
  );
}

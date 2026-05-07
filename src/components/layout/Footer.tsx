import Link from "next/link";
import { ArrowRight, CheckCircle2, CircleDollarSign, Sparkles } from "lucide-react";
import { navItems } from "@/lib/data";
import { Logo } from "@/components/shared/Logo";

export function Footer() {
  return (
    <footer className="px-4 pb-6 pt-10 md:pt-16">
      <div className="section-shell overflow-hidden rounded-[48px] md:rounded-[80px] bg-midnight-ink text-canvas-white shadow-card">
        <div className="grid gap-10 p-6 md:grid-cols-[1.1fr_0.9fr] md:p-10 lg:p-16">
          <div>
            <div className="[&_span:first-child]:bg-canvas-white [&_span:first-child]:text-midnight-ink [&_span:last-child]:text-canvas-white">
              <Logo />
            </div>
            <h2 className="display-type mt-8 max-w-2xl text-[clamp(2.25rem,6vw,4.5rem)] leading-[0.98]">
              Content systems for creators that move fast.
            </h2>
            <p className="mt-6 max-w-xl text-[17px] leading-7 text-canvas-white/60 font-medium">
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
                  <div key={label as string} className="rounded-[24px] bg-white/[0.04] p-5 border border-white/10">
                    <LucideIcon className="mb-6 h-5 w-5 text-canvas-white/70" aria-hidden="true" />
                    <p className="text-[11px] font-bold uppercase tracking-widest text-canvas-white/40">
                      {label as string}
                    </p>
                    <p className="mt-1 text-base font-medium">{value as string}</p>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap gap-4 text-sm font-medium text-canvas-white/60">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-full bg-white/[0.06] px-4 py-2 no-underline transition-colors hover:bg-white/[0.12] hover:text-canvas-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <Link
                href="#cta"
                className="inline-flex min-h-12 w-fit items-center justify-center gap-2 rounded-full bg-canvas-white px-6 text-base font-medium text-midnight-ink no-underline transition-transform hover:scale-[1.02]"
              >
                Request access
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 border-t border-white/5 px-6 py-6 text-xs font-medium text-canvas-white/30 md:flex-row md:items-center md:justify-between md:px-10 lg:px-16">
          <p>Day 7 / One landing page per day</p>
          <div className="flex items-center gap-4">
            <p>Next.js, TypeScript</p>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <p>Tailwind CSS v4</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

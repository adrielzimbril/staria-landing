import Link from "next/link";
import { ArrowRight, CheckCircle2, CircleDollarSign, Sparkles } from "lucide-react";
import { navItems } from "@/lib/data";
import { Logo } from "@/components/shared/Logo";

export function Footer() {
  return (
    <footer className="px-4 pb-8 pt-12 md:pt-20">
      <div className="section-shell overflow-hidden rounded-[var(--radius-cards)] bg-midnight-ink text-canvas-white shadow-[rgba(0,0,0,0.1)_0_32px_64px_-16px]">
        <div className="grid gap-12 p-8 md:grid-cols-[1.2fr_0.8fr] md:p-12 lg:p-20">
          <div>
            <div className="[&_span:first-child]:bg-canvas-white [&_span:first-child]:text-midnight-ink [&_span:last-child]:text-canvas-white">
              <Logo />
            </div>
            <h2 className="display-type mt-10 max-w-2xl text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.92]">
              Content systems <br />
              <span className="opacity-40 text-canvas-white">that move fast.</span>
            </h2>
            <p className="body-type mt-8 max-w-xl text-canvas-white/60">
              Staria is a high-fidelity AI content factory built with production 
              rhythm, precise visual hierarchy, and the Sprig design system.
            </p>
          </div>

          <div className="grid content-between gap-10">
            <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
              {[
                [Sparkles, "Render queue", "8s avg"],
                [CheckCircle2, "Review state", "Synced"],
                [CircleDollarSign, "Usage model", "Creator"],
              ].map(([Icon, label, value]) => {
                const LucideIcon = Icon as typeof Sparkles;

                return (
                  <div key={label as string} className="rounded-[var(--radius-buttons)] bg-canvas-white/[0.04] p-6 border border-white/5">
                    <LucideIcon className="mb-8 h-5 w-5 text-canvas-white/40" aria-hidden="true" />
                    <p className="label-type text-[10px] text-canvas-white/40">
                      {label as string}
                    </p>
                    <p className="mt-2 text-lg font-medium">{value as string}</p>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col gap-8">
              <div className="flex flex-wrap gap-3">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-md bg-canvas-white/[0.05] px-5 py-2.5 text-sm font-medium transition-all hover:bg-canvas-white hover:text-midnight-ink"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <Link
                href="#cta"
                className="pill-primary min-h-14 w-fit px-10 text-lg !bg-canvas-white !text-midnight-ink !border-none"
              >
                Request access
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 border-t border-white/5 px-8 py-8 text-xs font-medium text-canvas-white/20 md:flex-row md:items-center md:justify-between md:px-12 lg:px-20">
          <p>Staria © 2026 / Day 7 Challenge</p>
          <div className="flex items-center gap-6">
            <p>Next.js 15</p>
            <span className="h-1 w-1 rounded-full bg-white/10" />
            <p>TypeScript</p>
            <span className="h-1 w-1 rounded-full bg-white/10" />
            <p>Tailwind v4</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

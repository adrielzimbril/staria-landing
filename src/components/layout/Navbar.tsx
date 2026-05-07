import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { navItems } from "@/lib/data";
import { Logo } from "@/components/shared/Logo";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-3 z-50 md:top-6">
      <nav className="section-shell flex h-16 items-center justify-between gap-4 rounded-[var(--radius-cards)] border border-border-ash bg-canvas-white/70 px-4 shadow-[rgba(0,0,0,0.02)_0_12px_32px] backdrop-blur-xl md:px-6">
        <Logo />
        <div className="hidden items-center gap-1 rounded-[var(--radius-buttons)] bg-fog-gray/80 p-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-5 py-2 text-[15px] font-medium text-medium-gray transition-all hover:bg-canvas-white hover:text-midnight-ink"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="#pricing"
            className="hidden text-[15px] font-semibold text-midnight-ink hover:opacity-70 sm:inline-flex"
          >
            Log in
          </Link>
          <Link
            href="#cta"
            className="pill-primary h-11 px-6 text-sm"
          >
            Join waitlist
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </nav>
    </header>
  );
}

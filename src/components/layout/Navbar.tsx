import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { navItems } from "@/lib/data";
import { Logo } from "@/components/shared/Logo";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-3 z-50 md:top-5">
      <nav className="section-shell flex h-14 items-center justify-between gap-3 rounded-full bg-canvas-white/80 px-3 shadow-[rgba(0,0,0,0.03)_0_0_0_1px,rgba(0,0,0,0.02)_0_10px_30px] backdrop-blur-2xl md:px-4">
        <Logo />
        <div className="hidden items-center gap-1 rounded-full bg-fog-gray/50 p-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm text-medium-gray no-underline transition-colors hover:bg-canvas-white hover:text-midnight-ink"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="#pricing"
            className="hidden rounded-full border border-border-ash bg-canvas-white px-4 py-2 text-sm font-medium text-midnight-ink no-underline sm:inline-flex"
          >
            Log in
          </Link>
          <Link
            href="#cta"
            className="pill-primary max-[430px]:h-10 max-[430px]:w-10 max-[430px]:px-0"
          >
            <span className="max-[430px]:sr-only">Join waitlist</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </nav>
    </header>
  );
}

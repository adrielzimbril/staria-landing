import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-2.5 no-underline"
      aria-label="Staria home"
    >
      <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-midnight-graphite text-canvas-white transition-transform group-hover:scale-105">
        <svg
          aria-hidden="true"
          viewBox="0 0 28 28"
          className="h-5 w-5"
          fill="none"
        >
          <path
            d="M14 4L16.5 11.5H24L18 16L20.5 23.5L14 19L7.5 23.5L10 16L4 11.5H11.5L14 4Z"
            fill="currentColor"
          />
        </svg>
        <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-agent-violet ring-2 ring-canvas-white animate-pulse" />
      </span>
      <span className="text-[17px] font-bold tracking-tight text-midnight-graphite">Staria</span>
    </Link>
  );
}

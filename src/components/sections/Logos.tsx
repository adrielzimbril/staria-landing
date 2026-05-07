const logos = ["Arc", "NOVA", "PALM", "Morrow", "Studio N", "Atlas"];

export function Logos() {
  return (
    <section className="px-4 py-16">
      <div className="section-shell border-y border-border-ash py-12">
        <div className="grid gap-8 md:grid-cols-[320px_1fr] md:items-center">
          <p className="body-type text-[16px] leading-relaxed text-medium-gray">
            Designed for creative teams producing high-volume visual systems.
          </p>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {logos.map((logo) => (
              <div
                key={logo}
                className="label-type flex h-14 items-center justify-center rounded-lg bg-canvas-white text-midnight-ink shadow-subtle hover:bg-fog-gray transition-colors"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const logos = ["Arc", "NOVA", "PALM", "Morrow", "Studio N", "Atlas"];

export function Logos() {
  return (
    <section className="px-4 py-12">
      <div className="section-shell border-y border-chalk py-8">
        <div className="grid gap-6 md:grid-cols-[260px_1fr] md:items-center">
          <p className="text-sm font-medium leading-6 text-obsidian">
            Designed for creative teams producing high-volume visual systems.
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {logos.map((logo) => (
              <div
                key={logo}
                className="label-type flex h-12 items-center justify-center rounded-full bg-white text-obsidian shadow-[rgba(0,0,0,0.18)_0_0_0_1px,rgba(0,0,0,0.05)_0_6px_18px]"
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

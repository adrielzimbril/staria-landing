import { featureBlocks, proofPoints } from "@/lib/data";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function Features() {
  return (
    <section id="features" className="px-4 py-[var(--section-gap)]">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Studio controls"
          title="The generation model is only useful if the system around it is precise."
          body="The interface favors reusable controls and inspectable states over spectacle, keeping creative review legible."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Main Use Case Card */}
          <div className="interactive-card flex min-h-[480px] flex-col justify-between !bg-canvas-white">
            <div>
              <p className="label-type text-slate-text">Use cases</p>
              <h3 className="display-type mt-6 text-[clamp(2.5rem,5vw,3.5rem)] leading-[1.05] text-midnight-ink">
                Visual assets for the entire campaign arc.
              </h3>
            </div>
            <div className="mt-12 flex flex-wrap gap-2">
              {proofPoints.map((point, index) => (
                <span
                  key={point}
                  className="inline-flex items-center rounded-full border border-border-ash bg-fog-gray px-4 py-2 text-sm font-medium text-midnight-ink"
                >
                  <span
                    className={`mr-2 h-2 w-2 rounded-full ${
                      index % 3 === 0 
                        ? "bg-midnight-ink" 
                        : index % 3 === 1 
                        ? "bg-medium-gray" 
                        : "bg-subtle-link"
                    }`}
                  />
                  {point}
                </span>
              ))}
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {featureBlocks.map(({ icon: Icon, title, body }) => (
              <article key={title} className="interactive-card flex flex-col">
                <div className="mb-12 flex h-10 w-10 items-center justify-center rounded-2xl bg-fog-gray text-midnight-ink">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="display-type text-[20px] text-midnight-ink">{title}</h3>
                <p className="body-type mt-4 text-[16px] text-slate-text">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

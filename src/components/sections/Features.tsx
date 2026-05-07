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

        <div className="mt-16 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Main Use Case Card */}
          <article className="interactive-card flex min-h-[520px] flex-col justify-between !bg-canvas-white">
            <div>
              <p className="label-type text-slate-text">Use cases</p>
              <h3 className="display-type mt-8 text-[clamp(2.5rem,5vw,3.5rem)] leading-[1.05] text-midnight-ink">
                Visual assets for the entire campaign arc.
              </h3>
            </div>
            <div className="mt-12 flex flex-wrap gap-3">
              {proofPoints.map((point, index) => (
                <span
                  key={point}
                  className="inline-flex items-center rounded-lg border border-border-ash bg-fog-gray px-5 py-2.5 text-[14px] font-medium text-midnight-ink"
                >
                  <span
                    className={`mr-3 h-2 w-2 rounded-full ${
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
          </article>
 
          {/* Feature Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {featureBlocks.map(({ icon: Icon, title, body }) => (
              <article key={title} className="interactive-card flex flex-col group">
                <div className="mb-12 flex h-12 w-12 items-center justify-center rounded-lg bg-fog-gray text-midnight-ink transition-colors group-hover:bg-midnight-ink group-hover:text-canvas-white">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="display-type text-[22px] leading-tight text-midnight-ink">{title}</h3>
                <p className="body-type mt-4 text-[16px] text-slate-text leading-relaxed">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

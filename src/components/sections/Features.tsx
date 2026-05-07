import { featureBlocks, proofPoints } from "@/lib/data";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function Features() {
  return (
    <section id="features" className="px-4 py-16 md:py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Studio controls"
          title="The generation model is only useful if the system around it is precise."
          body="The interface favors reusable controls and inspectable states over spectacle, keeping creative review legible."
        />

        <div className="mt-8 grid gap-3 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="hairline-card flex min-h-[420px] flex-col justify-between p-6">
            <div>
              <p className="label-type text-slate-gray">Use cases</p>
              <h3 className="display-type mt-4 text-[clamp(2rem,4vw,3rem)] leading-[1.05] text-midnight-graphite">
                Visual assets for the entire campaign arc.
              </h3>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {proofPoints.map((point, index) => (
                <span
                  key={point}
                  className="rounded-full bg-cloud-white px-3 py-2 text-sm text-midnight-graphite"
                >
                  <span
                    className={`mr-2 inline-block h-2 w-2 rounded-full ${
                      index % 2 === 0 ? "bg-agent-violet" : "bg-action-blue"
                    }`}
                  />
                  {point}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {featureBlocks.map(({ icon: Icon, title, body }) => (
              <article key={title} className="hairline-card interactive-card p-6">
                <Icon className="mb-12 h-5 w-5 text-midnight-graphite" aria-hidden="true" />
                <h3 className="text-[18px] font-medium text-midnight-graphite">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-gray">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { workflowSteps } from "@/lib/data";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function Workflow() {
  return (
    <section id="workflow" className="px-4 py-16 md:py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Workflow"
          title="A high-velocity production loop for social-first teams."
          body="Staria is positioned as a high-velocity production factory for social teams: orchestrating multiple agents to maintain scale without losing your unique brand voice."
        />

        <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {workflowSteps.map(({ icon: Icon, title, body }, index) => (
            <article key={title} className="hairline-card p-5">
              <div className="mb-10 flex items-center justify-between">
                <span className="font-mono text-sm text-fog">
                  0{index + 1}
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cloud-white text-midnight-graphite">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
              </div>
              <h3 className="text-[17px] font-medium text-midnight-graphite">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-gray">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

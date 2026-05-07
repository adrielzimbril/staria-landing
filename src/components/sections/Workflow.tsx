import { workflowSteps } from "@/lib/data";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function Workflow() {
  return (
    <section id="workflow" className="px-4 py-[var(--section-gap)]">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Workflow"
          title="A high-velocity production loop for social-first teams."
          body="Staria is positioned as a high-velocity production factory for social teams: orchestrating multiple agents to maintain scale without losing your unique brand voice."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {workflowSteps.map(({ icon: Icon, title, body }, index) => (
            <article key={title} className="interactive-card flex flex-col !p-8">
              <div className="mb-12 flex items-center justify-between">
                <span className="font-mono text-sm font-semibold text-medium-gray">
                  0{index + 1}
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-fog-gray text-midnight-ink">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
              </div>
              <h3 className="display-type text-[18px] text-midnight-ink">{title}</h3>
              <p className="body-type mt-4 text-[14px] leading-relaxed text-slate-text">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

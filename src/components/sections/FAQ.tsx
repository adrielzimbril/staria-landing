import { faqs } from "@/lib/data";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function FAQ() {
  return (
    <section id="faq" className="px-4 py-[var(--section-gap)]">
      <div className="section-shell">
        <SectionHeader
          eyebrow="FAQ"
          title="Clear answers for a conceptual product page."
        />
        <div className="mt-16 grid gap-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="interactive-card group !p-8"
            >
              <summary className="display-type flex list-none items-center justify-between gap-4 text-[20px] text-midnight-ink outline-none focus-visible:ring-2 focus-visible:ring-midnight-ink/20 cursor-pointer">
                {faq.question}
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-fog-gray text-xl text-midnight-ink transition-all group-open:rotate-45 group-hover:bg-midnight-ink group-hover:text-canvas-white">
                  +
                </span>
              </summary>
              <p className="body-type mt-6 max-w-3xl text-[16px] leading-relaxed text-slate-text">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

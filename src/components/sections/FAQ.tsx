import { faqs } from "@/lib/data";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function FAQ() {
  return (
    <section id="faq" className="px-4 py-16 md:py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="FAQ"
          title="Clear answers for a conceptual product page."
        />
        <div className="mt-8 grid gap-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="hairline-card interactive-card group p-5"
            >
              <summary className="flex list-none items-center justify-between gap-4 text-[17px] font-medium text-midnight-graphite outline-none focus-visible:ring-2 focus-visible:ring-midnight-graphite/20 cursor-pointer">
                {faq.question}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cloud-white text-sm text-slate-gray transition-transform group-open:rotate-45 group-hover:bg-midnight-graphite group-hover:text-canvas-white">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-gray">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

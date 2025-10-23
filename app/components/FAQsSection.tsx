import { SectionHeading } from "./SectionHeading";
import { faqs } from "../data/faqs";

export function FAQsSection() {
  return (
    <section
      id="faq"
      className="px-6 pb-24 pt-20 sm:px-12 lg:px-20 scroll-mt-28"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:items-start">
        <div className="max-w-sm">
          <SectionHeading
            eyebrow="support"
            title="FAQs for collectors"
            description="You pull the grail — we handle the display. Answers to the most common collector questions before commissioning a MythPoke frame."
          />
        </div>
        <div className="flex-1 space-y-4">
          {faqs.map((faq) => (
            <article
              key={faq.question}
              className="rounded-2xl border border-surface-border bg-surface-elevated/80 p-6 shadow-[0_15px_40px_-30px_rgba(139,92,246,0.4)] transition hover:border-myth-purple/60"
            >
              <h3 className="font-heading text-lg text-white">
                {faq.question}
              </h3>
              <p className="mt-3 text-sm text-white/70">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

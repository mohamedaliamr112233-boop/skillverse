"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is SkillVerse?",
    answer:
      "SkillVerse is an online learning platform that helps students build real-world programming skills.",
  },
  {
    question: "Will I receive a certificate?",
    answer:
      "Yes. Every completed course includes a certificate that you can share on LinkedIn and your CV.",
  },
  {
    question: "Can I learn at my own pace?",
    answer:
      "Absolutely. You can watch lessons anytime and continue where you left off.",
  },
  {
    question: "Are there lifetime updates?",
    answer:
      "Yes. Premium members receive lifetime course updates.",
  },
  {
    question: "Can I access courses on mobile?",
    answer:
      "Yes. SkillVerse works perfectly on desktop, tablet, and mobile devices.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-slate-900 py-24">
      <div className="mx-auto max-w-4xl px-6">

        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-white">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-slate-400">
            Everything you need to know about SkillVerse.
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="w-full space-y-4"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-xl border border-slate-700 bg-slate-950 px-6"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-white">
                {faq.question}
              </AccordionTrigger>

              <AccordionContent className="text-slate-400">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

      </div>
    </section>
  );
}
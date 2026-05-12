"use client";

import { motion } from "framer-motion";
import { SectionShell } from "@/components/landing/section-shell";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { Locale } from "@/lib/i18n";
import { formatPricingCopy } from "@/lib/landing-data";

export function Faq({
  locale,
  content,
}: {
  locale: Locale;
  content: {
    eyebrow: string;
    title: string;
    description: string;
    pricing: {
      monthlyValue: number;
      yearlyValue: number;
      freePrice: string;
    };
    questions: Array<{ question: string; answer: string }>;
  };
}) {
  return (
    <SectionShell
      id="faq"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        className="mx-auto max-w-4xl rounded-3xl border border-white/14 bg-white/8 px-4 py-3 shadow-[var(--shadow-card)] sm:px-6"
      >
        <Accordion>
          {content.questions.map((item) => (
            <AccordionItem key={item.question} value={item.question}>
              <AccordionTrigger className="min-h-14 text-base text-white">{item.question}</AccordionTrigger>
              <AccordionContent className="text-base leading-7 text-white/76">
                {formatPricingCopy(item.answer, locale, content.pricing)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </SectionShell>
  );
}

import { SectionShell } from "@/components/landing/section-shell";

type Question = {
  question: string;
  answer: string;
};

export function Faq({
  content,
}: {
  content: {
    eyebrow: string;
    title: string;
    description: string;
    questions: Question[];
  };
}) {
  return (
    <SectionShell id="faq" eyebrow={content.eyebrow} title={content.title} description={content.description}>
      <div className="mx-auto grid max-w-4xl gap-4">
        {content.questions.map((item, index) => (
          <details
            key={item.question}
            className="group rounded-[24px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:border-white/18"
            open={index === 0}
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
              <span className="text-base font-semibold text-white">{item.question}</span>
              <span className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-black/25 text-white/60 transition group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/64">{item.answer}</p>
          </details>
        ))}
      </div>
    </SectionShell>
  );
}


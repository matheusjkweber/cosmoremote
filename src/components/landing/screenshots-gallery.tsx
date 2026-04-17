import { SectionShell } from "@/components/landing/section-shell";
import { MockScreen } from "@/components/landing/mock-screen";
import type { Locale } from "@/lib/i18n";

export function ScreenshotsGallery({
  locale,
  content,
}: {
  locale: Locale;
  content: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{ title: string; caption: string; variant: string }>;
  };
}) {
  return (
    <SectionShell
      id="screenshots"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {content.items.map((item) => (
          <figure
            key={item.title}
            className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition hover:-translate-y-1 hover:border-white/18"
          >
            <MockScreen
              locale={locale}
              variant={item.variant as "stream" | "sessions" | "pairing" | "history" | "composer"}
              className="min-h-[18rem] transition duration-300 group-hover:scale-[1.01]"
            />
            <figcaption className="p-1 pt-4">
              <h3 className="text-base font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-white/60">{item.caption}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </SectionShell>
  );
}

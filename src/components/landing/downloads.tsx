import { SectionShell } from "@/components/landing/section-shell";
import { AppleIcon, AndroidIcon, MonitorIcon } from "@/components/landing/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { tr } from "@/lib/copy";
import type { Locale } from "@/lib/i18n";

const iconMap = {
  ios: AppleIcon,
  android: AndroidIcon,
  macos: MonitorIcon,
} as const;

type DownloadCard = {
  platform: string;
  title: string;
  status: string;
  note: string;
};

export function Downloads({
  locale,
  content,
}: {
  locale: Locale;
  content: {
    eyebrow: string;
    title: string;
    description: string;
    cards: DownloadCard[];
    cta: string;
    comingSoon: string;
  };
}) {
  return (
    <SectionShell
      id="downloads"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    >
      <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="grid gap-5 md:grid-cols-3">
          {content.cards.map((card) => {
            const Icon = iconMap[card.platform as keyof typeof iconMap] ?? MonitorIcon;
            return (
              <article
                key={card.title}
                className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_16px_40px_rgba(0,0,0,0.16)] backdrop-blur-sm transition hover:-translate-y-1 hover:border-white/18"
              >
                <div className="flex items-center justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/8 text-white/88">
                    <Icon className="h-6 w-6" />
                  </div>
                  <Badge className="border-amber-300/18 bg-amber-300/10 text-amber-100">
                    {card.status}
                  </Badge>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/60">{card.note}</p>
                <Button variant="secondary" className="mt-6 w-full" href="#faq">
                  {content.cta}
                </Button>
              </article>
            );
          })}
        </div>
        <div className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(52,152,219,0.14),rgba(255,255,255,0.04))] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.18)] backdrop-blur-sm">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/70">
            {content.comingSoon}
          </p>
          <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">
            {content.title}
          </h3>
          <p className="mt-4 text-sm leading-7 text-white/68">{content.description}</p>
          <div className="mt-8 rounded-[24px] border border-white/10 bg-black/25 p-5">
            <p className="text-sm font-medium text-white">
              {tr(locale, {
                en: "Pre-launch status",
                "pt-BR": "Status de pré-lançamento",
                es: "Estado de prelanzamiento",
              })}
            </p>
            <p className="mt-2 text-sm leading-7 text-white/58">
              {tr(locale, {
                en: "Build trust early with honest badges, no fake download counts, and clear platform availability.",
                "pt-BR": "Construa confiança cedo com badges honestos, sem contagens falsas de downloads e com disponibilidade clara por plataforma.",
                es: "Genere confianza desde el inicio con badges honestos, sin cifras falsas de descargas y con disponibilidad clara por plataforma.",
              })}
            </p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

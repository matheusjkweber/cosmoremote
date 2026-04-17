import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/cn";
import { getLocaleLabel, locales, type Locale } from "@/lib/i18n";
import { tr } from "@/lib/copy";

export function Navbar({
  locale,
  labels,
}: {
  locale: Locale;
  labels: {
    brand: string;
    links: { features: string; screenshots: string; pricing: string; downloads: string; faq: string };
  };
}) {
  const navItems = [
    ["features", labels.links.features],
    ["screenshots", labels.links.screenshots],
    ["pricing", labels.links.pricing],
    ["downloads", labels.links.downloads],
    ["faq", labels.links.faq],
  ] as const;

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[rgba(5,8,14,0.72)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a href={`/${locale}`} className="group flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/12 bg-[linear-gradient(135deg,rgba(52,152,219,0.24),rgba(46,204,113,0.14))] shadow-[0_16px_32px_rgba(0,0,0,0.24)]">
            <span className="text-sm font-bold tracking-[0.22em] text-white">CR</span>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">{labels.brand}</p>
            <p className="text-[11px] text-white/50">
              {tr(locale, {
                en: "Remote control for agent workflows",
                "pt-BR": "Controle remoto para fluxos com agentes",
                es: "Control remoto para flujos con agentes",
              })}
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-sm text-white/58 transition hover:text-white"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LocaleSwitcher locale={locale} />
          <Badge className="hidden border-emerald-400/20 bg-emerald-400/10 text-emerald-100 sm:inline-flex">
            {tr(locale, {
              en: "Pre-launch",
              "pt-BR": "Pré-lançamento",
              es: "Prelanzamiento",
            })}
          </Badge>
          <Button variant="outline" href={`#downloads`} className="hidden sm:inline-flex">
            {tr(locale, {
              en: "Get the apps",
              "pt-BR": "Ver apps",
              es: "Ver apps",
            })}
          </Button>
        </div>
      </div>
    </header>
  );
}

function LocaleSwitcher({ locale }: { locale: Locale }) {
  return (
    <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur">
      {locales.map((code) => (
        <a
          key={code}
          href={`/${code}`}
          aria-label={`Switch language to ${code}`}
          className={cn(
            "rounded-full px-3 py-1.5 text-xs font-semibold transition",
            code === locale
              ? "bg-white text-slate-950 shadow-sm"
              : "text-white/55 hover:bg-white/8 hover:text-white",
          )}
        >
          {getLocaleLabel(code)}
        </a>
      ))}
    </div>
  );
}

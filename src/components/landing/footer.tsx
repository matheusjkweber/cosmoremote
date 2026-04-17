import { locales, type Locale } from "@/lib/i18n";
import { tr } from "@/lib/copy";

export function Footer({
  locale,
  content,
}: {
  locale: Locale;
  content: {
    brand: string;
    tagline: string;
    links: { features: string; screenshots: string; pricing: string; downloads: string; faq: string };
    legal: string;
  };
}) {
  const items = [
    ["features", content.links.features],
    ["screenshots", content.links.screenshots],
    ["pricing", content.links.pricing],
    ["downloads", content.links.downloads],
    ["faq", content.links.faq],
  ] as const;

  return (
    <footer className="border-t border-white/8 bg-black/30">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div>
          <p className="text-2xl font-semibold tracking-tight text-white">{content.brand}</p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/60">{content.tagline}</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-white/36">
              {tr(locale, {
                en: "Navigate",
                "pt-BR": "Navegar",
                es: "Navegar",
              })}
            </p>
            <ul className="mt-4 space-y-3">
              {items.map(([id, label]) => (
                <li key={id}>
                  <a href={`#${id}`} className="text-sm text-white/58 transition hover:text-white">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-white/36">{content.legal}</p>
            <div className="mt-4 space-y-3 text-sm text-white/56">
              <p>{locale === "pt-BR" ? "App em pré-lançamento." : locale === "es" ? "Aplicación en pre-lanzamiento." : "Pre-launch application."}</p>
              <p>
                {locale === "pt-BR"
                  ? "Sem números falsos, sem reviews inventadas."
                  : locale === "es"
                    ? "Sin números falsos ni reseñas inventadas."
                    : "No fake installs, no invented reviews."}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/8 py-5">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 text-xs text-white/42 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} CosmoRemote</p>
          <p className="tracking-[0.18em] uppercase">{locales.join(" / ")}</p>
        </div>
      </div>
    </footer>
  );
}

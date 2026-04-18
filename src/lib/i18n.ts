import en from "@/messages/en.json";
import es from "@/messages/es.json";
import ptBR from "@/messages/pt-BR.json";

export const locales = ["en", "pt-BR", "es"] as const;
export const routedLocales = ["pt-BR", "es"] as const;

export type Locale = (typeof locales)[number];
export type RoutedLocale = (typeof routedLocales)[number];
export type LandingDictionary = typeof en;

export const defaultLocale: Locale = "en";

const dictionaries = {
  en: () => Promise.resolve(en),
  "pt-BR": () => Promise.resolve(ptBR),
  es: () => Promise.resolve(es),
} satisfies Record<Locale, () => Promise<LandingDictionary>>;

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function isRoutedLocale(value: string): value is RoutedLocale {
  return (routedLocales as readonly string[]).includes(value);
}

export async function getDictionary(locale: Locale) {
  return dictionaries[locale]();
}

export function getLocaleLabel(locale: Locale) {
  switch (locale) {
    case "pt-BR":
      return "PT";
    case "es":
      return "ES";
    default:
      return "EN";
  }
}

export function getCanonicalPath(locale: Locale) {
  return locale === defaultLocale ? "/" : `/${locale}`;
}

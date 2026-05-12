import type { Locale } from "@/lib/i18n";

export function tr(
  locale: Locale,
  values: { en: string; "pt-BR": string; es: string },
) {
  return values[locale];
}


import type { Locale } from "@/lib/i18n";
import { getLocaleScreenshots } from "@/lib/landing-data";

export type ScreenshotDevice = "iphone" | "ipad";

export type ScreenshotAsset = {
  src: string;
  alt: string;
  device: ScreenshotDevice;
};

export function getScreenshotsForLocale(locale: Locale) {
  const shots = getLocaleScreenshots(locale);
  return {
    iphone: shots.iphone.map((item) => ({ ...item, device: "iphone" as const })),
    ipad: shots.ipad.map((item) => ({ ...item, device: "ipad" as const })),
  };
}

export function getHeroScreenshots(locale: Locale) {
  const shots = getScreenshotsForLocale(locale);
  const primary = shots.iphone[0] ?? shots.ipad[0] ?? null;
  const secondary = shots.ipad[0] ?? shots.iphone[1] ?? null;

  return { primary, secondary };
}

export function getGalleryScreenshots(locale: Locale) {
  const shots = getScreenshotsForLocale(locale);
  const ordered = [shots.iphone[0], shots.iphone[1], shots.ipad[0]].filter(Boolean);

  return ordered.slice(0, 2);
}

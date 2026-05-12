import type { Metadata } from "next";
import { LandingPage } from "@/components/landing/landing-page";
import { defaultLocale, getDictionary } from "@/lib/i18n";
import { generateLandingMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getDictionary(defaultLocale);
  return generateLandingMetadata(defaultLocale, dict);
}

export default async function Page() {
  const dict = await getDictionary(defaultLocale);

  return <LandingPage locale={defaultLocale} dict={dict} />;
}

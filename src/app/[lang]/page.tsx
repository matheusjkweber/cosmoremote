import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingPage } from "@/components/landing/landing-page";
import { getDictionary, isRoutedLocale, routedLocales, type Locale } from "@/lib/i18n";
import { generateLandingMetadata } from "@/lib/metadata";

type PageProps = {
  params: Promise<{ lang: string }>;
};

export function generateStaticParams() {
  return routedLocales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;

  if (!isRoutedLocale(lang)) {
    return {};
  }

  const locale = lang as Locale;
  const dict = await getDictionary(locale);

  return generateLandingMetadata(locale, dict);
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params;

  if (!isRoutedLocale(lang)) {
    notFound();
  }

  const locale = lang as Locale;
  const dict = await getDictionary(locale);

  return <LandingPage locale={locale} dict={dict} />;
}

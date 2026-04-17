import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/landing/footer";
import { Faq } from "@/components/landing/faq";
import { FeatureBento } from "@/components/landing/feature-bento";
import { Hero } from "@/components/landing/hero";
import { Navbar } from "@/components/landing/navbar";
import { Pricing } from "@/components/landing/pricing";
import { ScreenshotsGallery } from "@/components/landing/screenshots-gallery";
import { Downloads } from "@/components/landing/downloads";
import { getDictionary, isLocale, locales, type Locale } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;

  if (!isLocale(lang)) {
    return {};
  }

  const dict = await getDictionary(lang);

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const locale = lang as Locale;
  const dict = await getDictionary(locale);

  return (
    <main className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">
      <Navbar locale={locale} labels={dict.nav} />
      <Hero locale={locale} content={dict.hero} />
      <FeatureBento content={dict.features} />
      <ScreenshotsGallery locale={locale} content={dict.screenshots} />
      <Pricing locale={locale} content={dict.pricing} />
      <Downloads locale={locale} content={dict.downloads} />
      <Faq content={dict.faq} />
      <Footer locale={locale} content={dict.footer} />
    </main>
  );
}

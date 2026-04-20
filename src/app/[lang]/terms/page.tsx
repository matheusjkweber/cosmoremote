import { notFound } from "next/navigation";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { getDictionary, isRoutedLocale, type Locale } from "@/lib/i18n";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isRoutedLocale(lang)) return {};
  const dict = await getDictionary(lang as Locale);
  return { title: dict.footer.legal.terms };
}

export default async function TermsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isRoutedLocale(lang)) notFound();
  
  const locale = lang as Locale;
  const dict = await getDictionary(locale);

  return (
    <main className="min-h-screen overflow-x-clip bg-background text-foreground">
      <Navbar locale={locale} labels={dict.nav} />
      <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8 min-h-[60vh]">
        <h1 className="text-4xl font-bold text-white mb-8">{dict.footer.legal.terms}</h1>
        <div className="prose prose-invert prose-lg text-white/80 space-y-6">
          <p>Effective Date: April 2026</p>
          <p>Welcome to CosmoRemote. By using our application, you agree to these Terms of Service.</p>
          
          <h2 className="text-2xl font-semibold text-white mt-10 mb-4">1. Use of Service</h2>
          <p>You agree to use our service for lawful purposes. CosmoRemote acts as a bridge for your local AI CLIs (Claude Code and Codex), bringing them to your mobile devices via our proprietary relay service.</p>
          
          <h2 className="text-2xl font-semibold text-white mt-10 mb-4">2. Privacy & Data</h2>
          <p>Your session histories and API keys are stored locally on your devices. Relay tokens are safely encrypted and are only used to stream sessions securely.</p>
          
          <h2 className="text-2xl font-semibold text-white mt-10 mb-4">3. Subscriptions</h2>
          <p>Some features, such as parallel sessions and removing the daily message limit, are available through a "Pro" subscription. Subscriptions are billed via your device's app store platform.</p>
          
          <h2 className="text-2xl font-semibold text-white mt-10 mb-4">4. Disclaimers</h2>
          <p>The service is provided "as is". We are not responsible for any third-party charges incurred directly by your use of Claude Code or Codex API keys.</p>
        </div>
      </div>
      <Footer locale={locale} content={dict.footer} />
    </main>
  );
}

import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { getDictionary, defaultLocale } from "@/lib/i18n";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getDictionary(defaultLocale);
  return { title: dict.footer.legal.privacy };
}

export default async function PrivacyPage() {
  const dict = await getDictionary(defaultLocale);

  return (
    <main className="min-h-screen overflow-x-clip bg-background text-foreground">
      <Navbar locale={defaultLocale} labels={dict.nav} />
      <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8 min-h-[60vh]">
        <h1 className="text-4xl font-bold text-white mb-8">{dict.footer.legal.privacy}</h1>
        <div className="prose prose-invert prose-lg text-white/80 space-y-6">
          <p>Effective Date: April 2026</p>
          <p>At CosmoRemote, we believe your data is your business. Period.</p>
          
          <h2 className="text-2xl font-semibold text-white mt-10 mb-4">1. Local Processing</h2>
          <p>CosmoRemote works as a secure bridge between your Mac and your mobile device. Your code, context, and prompts are streamed end-to-end between your devices. We do not store your code on our servers.</p>
          
          <h2 className="text-2xl font-semibold text-white mt-10 mb-4">2. Session History</h2>
          <p>Offline session history is saved directly onto your device. You are the only person who has access to your conversation histories.</p>
          
          <h2 className="text-2xl font-semibold text-white mt-10 mb-4">3. External Providers</h2>
          <p>CosmoRemote functions by bridging your commands to independent third-party CLIs (like Claude Code and Codex). Ensure you review their privacy policies regarding how they handle the data sent via their APIs.</p>
          
          <h2 className="text-2xl font-semibold text-white mt-10 mb-4">4. Telemetry</h2>
          <p>We may collect anonymized usage metrics to improve stability and performance. You can opt out of any non-essential telemetry from within the app settings.</p>
        </div>
      </div>
      <Footer locale={defaultLocale} content={dict.footer} />
    </main>
  );
}

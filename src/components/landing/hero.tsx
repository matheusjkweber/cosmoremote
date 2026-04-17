import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MockScreen } from "@/components/landing/mock-screen";
import { SparkIcon, StatusIcon } from "@/components/landing/icons";
import { tr } from "@/lib/copy";
import type { Locale } from "@/lib/i18n";

export function Hero({
  locale,
  content,
}: {
  locale: Locale;
  content: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    note: string;
    metrics: Array<{ value: string; label: string }>;
  };
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(52,152,219,0.18),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(155,89,182,0.14),transparent_24%),radial-gradient(circle_at_50%_80%,rgba(46,204,113,0.12),transparent_26%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:36px_36px] opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_0,rgba(5,8,14,0.22)_70%)]" />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-12 sm:px-6 sm:pb-28 sm:pt-16 lg:px-8 lg:pt-20">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div className="max-w-2xl">
            <Badge className="border-cyan-300/20 bg-cyan-300/10 text-cyan-100">
              <SparkIcon className="h-3.5 w-3.5" />
              {content.eyebrow}
            </Badge>
            <h1 className="mt-6 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              {content.title}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/70 sm:text-lg">
              {content.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#downloads">{content.primaryCta}</Button>
              <Button href="#screenshots" variant="secondary">
                {content.secondaryCta}
              </Button>
            </div>

            <p className="mt-5 flex items-center gap-2 text-sm text-white/54">
              <StatusIcon className="h-4 w-4 text-emerald-300" />
              {content.note}
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {content.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                >
                  <p className="text-2xl font-semibold text-white">{metric.value}</p>
                  <p className="mt-2 text-sm leading-6 text-white/58">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-8 top-8 h-40 w-40 rounded-full bg-cyan-400/15 blur-3xl" />
            <div className="absolute -right-8 bottom-2 h-52 w-52 rounded-full bg-violet-500/15 blur-3xl" />
            <div className="relative grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="translate-y-0 lg:translate-y-4">
                <MockScreen
                  locale={locale}
                  variant="stream"
                  className="animate-[float_8s_ease-in-out_infinite]"
                />
              </div>
              <div className="grid gap-5">
                <MockScreen
                  locale={locale}
                  variant="sessions"
                  className="animate-[float_10s_ease-in-out_infinite]"
                />
                <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.28em] text-white/42">
                    {tr(locale, {
                      en: "Focused view",
                      "pt-BR": "Tela em foco",
                      es: "Vista activa",
                    })}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/72">
                    {tr(locale, {
                      en: "Real-time streaming, session routing, and project switching live in one local control surface.",
                      "pt-BR": "Streaming em tempo real, roteamento de sessões e troca de projeto em uma única superfície local.",
                      es: "Streaming en tiempo real, enrutamiento de sesiones y cambio de proyectos en una sola superficie local.",
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { SectionShell } from "@/components/landing/section-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

type Plan = {
  name: string;
  price: string;
  cadence: string;
  description: string;
  featured?: boolean;
  badge?: string;
  cta: string;
  bullets: string[];
};

export function Pricing({
  content,
  locale,
}: {
  locale: string;
  content: {
    eyebrow: string;
    title: string;
    description: string;
    saveLabel: string;
    freeLabel: string;
    monthlyLabel: string;
    yearlyLabel: string;
    lifetimeLabel: string;
    monthlyCadence: string;
    yearlyCadence: string;
    lifetimeCadence: string;
    freeCadence: string;
    cards: {
      free: string[];
      monthly: string[];
      yearly: string[];
      lifetime: string[];
      cta: string;
      waitlist: string;
      comingSoon: string;
      freeCta: string;
    };
  };
}) {
  const plans: Plan[] = [
    {
      name: content.freeLabel,
      price: "R$0",
      cadence: content.freeCadence,
      description: locale === "pt-BR" ? "Ideal para começar" : locale === "es" ? "Perfecto para empezar" : "Best for getting started",
      cta: content.cards.freeCta,
      bullets: content.cards.free,
    },
    {
      name: content.monthlyLabel,
      price: "R$19.90",
      cadence: content.monthlyCadence,
      description:
        locale === "pt-BR"
          ? "Acesso Pro mensal para uso flexível"
          : locale === "es"
            ? "Acceso Pro mensual para uso flexible"
            : "Monthly Pro access for flexible use",
      cta: content.cards.cta,
      bullets: content.cards.monthly,
    },
    {
      name: content.yearlyLabel,
      price: "R$199.90",
      cadence: content.yearlyCadence,
      description:
        locale === "pt-BR"
          ? "Melhor valor para quem usa todos os dias"
          : locale === "es"
            ? "La mejor opción para uso diario"
            : "Best value for daily users",
      featured: true,
      badge: content.saveLabel,
      cta: content.cards.cta,
      bullets: content.cards.yearly,
    },
    {
      name: content.lifetimeLabel,
      price: "TBA",
      cadence: content.lifetimeCadence,
      description:
        locale === "pt-BR"
          ? "Plano vitalício planejado para depois do lançamento"
          : locale === "es"
            ? "Plan vitalicio previsto para después del lanzamiento"
            : "Lifetime plan planned for after launch",
      cta: content.cards.waitlist,
      bullets: content.cards.lifetime,
    },
  ];

  return (
    <SectionShell
      id="pricing"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    >
      <div className="grid gap-5 xl:grid-cols-4">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={cn(
              "relative rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.035))] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.16)] backdrop-blur-sm transition hover:-translate-y-1 hover:border-white/18",
              plan.featured && "border-cyan-300/28 bg-[linear-gradient(180deg,rgba(52,152,219,0.17),rgba(255,255,255,0.05))] ring-1 ring-cyan-300/20 xl:scale-[1.03]",
            )}
          >
            {plan.badge && (
              <Badge className="absolute right-5 top-5 border-cyan-300/20 bg-cyan-300/10 text-cyan-100">
                {plan.badge}
              </Badge>
            )}
            <div className="pr-20">
              <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
              <p className="mt-2 text-sm leading-7 text-white/60">{plan.description}</p>
            </div>
            <div className="mt-6 flex items-end gap-2">
              <p className="text-4xl font-semibold tracking-[-0.04em] text-white">{plan.price}</p>
              <span className="pb-1 text-sm text-white/48">{plan.cadence}</span>
            </div>
            <ul className="mt-6 space-y-3 text-sm leading-6 text-white/70">
              {plan.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--secondary)] shadow-[0_0_14px_rgba(46,204,113,0.8)]" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <Button
              variant={plan.featured ? "default" : "secondary"}
              className="mt-8 w-full"
              href="#downloads"
            >
              {plan.cta}
            </Button>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}


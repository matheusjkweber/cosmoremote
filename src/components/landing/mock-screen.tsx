import { cn } from "@/lib/cn";
import { tr } from "@/lib/copy";
import type { Locale } from "@/lib/i18n";

type Variant = "stream" | "sessions" | "pairing" | "history" | "composer";

export function MockScreen({
  locale,
  variant,
  className,
}: {
  locale: Locale;
  variant: Variant;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[28px] border border-white/12 bg-[linear-gradient(180deg,rgba(9,14,24,0.98),rgba(7,10,16,0.94))] shadow-[0_24px_80px_rgba(0,0,0,0.42)] ring-1 ring-white/6",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-white/8 px-4 py-3">
        <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <div className="ml-3 text-xs font-medium tracking-[0.22em] text-white/44">
          CosmoRemote
        </div>
      </div>
      <div className="relative min-h-[18rem] p-4 sm:p-5">
        <ScreenGradient />
        {variant === "stream" && <StreamContent locale={locale} />}
        {variant === "sessions" && <SessionsContent locale={locale} />}
        {variant === "pairing" && <PairingContent locale={locale} />}
        {variant === "history" && <HistoryContent locale={locale} />}
        {variant === "composer" && <ComposerContent locale={locale} />}
      </div>
    </div>
  );
}

function ScreenGradient() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(52,152,219,0.18),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(155,89,182,0.16),transparent_42%),linear-gradient(180deg,transparent,rgba(255,255,255,0.02))]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20" />
    </>
  );
}

function StreamContent({ locale }: { locale: Locale }) {
  return (
    <div className="relative grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
        <div className="flex items-center justify-between text-xs text-white/52">
          <span>
            {tr(locale, {
              en: "real-time stream",
              "pt-BR": "stream em tempo real",
              es: "stream en tiempo real",
            })}
          </span>
          <span className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-2 py-1 text-[10px] text-emerald-200">
            {tr(locale, { en: "connected", "pt-BR": "conectado", es: "conectado" })}
          </span>
        </div>
        <div className="mt-4 space-y-3 font-mono text-[11px] leading-6 text-white/84">
          <Line prompt="$" command="cosmoremote start" />
          <Line prompt=">" command="bridge daemon ready on ws://192.168.0.28:5544" tone="green" />
          <Line prompt=">" command="pair QR scanned • Codex session linked" tone="cyan" />
          <Line prompt=">" command="streaming 128 tokens without polling" tone="violet" />
          <div className="mt-5 rounded-2xl border border-white/8 bg-black/30 p-3">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-white/40">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.9)]" />
              {tr(locale, { en: "output", "pt-BR": "saída", es: "salida" })}
            </div>
            <div className="mt-3 space-y-2 text-xs text-white/82">
              <p>
                <span className="text-cyan-300">CosmoRemote</span>{" "}
                {tr(locale, {
                  en: "syncs with your working directory and keeps the thread visible.",
                  "pt-BR": "sincroniza com seu diretório de trabalho e mantém a thread visível.",
                  es: "se sincroniza con tu directorio de trabajo y mantiene el hilo visible.",
                })}
              </p>
              <p>
                <span className="text-violet-300">Claude Code</span> and{" "}
                <span className="text-emerald-300">Codex</span> can run side by
                {tr(locale, {
                  en: " side, each with its own session state.",
                  "pt-BR": " lado a lado, cada um com seu próprio estado de sessão.",
                  es: " lado a lado, cada uno con su propio estado de sesión.",
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-4">
        <MiniCard
          title={tr(locale, { en: "Session list", "pt-BR": "Lista de sessões", es: "Lista de sesiones" })}
          value={tr(locale, { en: "4 active", "pt-BR": "4 ativas", es: "4 activas" })}
          accent="cyan"
        />
        <MiniCard
          title={tr(locale, { en: "Working dir", "pt-BR": "Diretório", es: "Directorio" })}
          value="cosmoremote/landing"
          accent="violet"
        />
        <MiniCard
          title={tr(locale, { en: "Sync state", "pt-BR": "Estado", es: "Estado" })}
          value={tr(locale, { en: "auto-scroll on", "pt-BR": "auto-scroll ligado", es: "auto-scroll activo" })}
          accent="emerald"
        />
      </div>
    </div>
  );
}

function SessionsContent({ locale }: { locale: Locale }) {
  return (
    <div className="grid gap-4">
      {[
        [
          tr(locale, { en: "Landing / Claude Code", "pt-BR": "Landing / Claude Code", es: "Landing / Claude Code" }),
          tr(locale, { en: "Token stream", "pt-BR": "Stream de tokens", es: "Stream de tokens" }),
          tr(locale, { en: "active", "pt-BR": "ativa", es: "activa" }),
        ],
        [
          tr(locale, { en: "CosmoRemote / Codex", "pt-BR": "CosmoRemote / Codex", es: "CosmoRemote / Codex" }),
          tr(locale, { en: "Reviewing diff", "pt-BR": "Revisando diff", es: "Revisando diff" }),
          tr(locale, { en: "remote", "pt-BR": "remota", es: "remota" }),
        ],
        [
          tr(locale, { en: "App / Claude Code", "pt-BR": "App / Claude Code", es: "App / Claude Code" }),
          tr(locale, {
            en: "Idle history restored",
            "pt-BR": "Histórico inativo restaurado",
            es: "Historial inactivo restaurado",
          }),
          tr(locale, { en: "offline", "pt-BR": "offline", es: "offline" }),
        ],
      ].map(([title, detail, state]) => (
        <div
          key={title}
          className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
        >
          <div>
            <p className="text-sm font-medium text-white">{title}</p>
            <p className="mt-1 text-xs text-white/50">{detail}</p>
          </div>
          <span className="rounded-full border border-white/10 bg-black/30 px-2.5 py-1 text-[10px] uppercase tracking-[0.24em] text-white/70">
            {state}
          </span>
        </div>
      ))}
      <div className="rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(52,152,219,0.12),rgba(52,152,219,0.03))] p-4">
        <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/80">
          {tr(locale, { en: "queue", "pt-BR": "fila", es: "cola" })}
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <MiniStat
            label={tr(locale, { en: "Parallel sessions", "pt-BR": "Sessões paralelas", es: "Sesiones paralelas" })}
            value={tr(locale, { en: "2 ready", "pt-BR": "2 prontas", es: "2 listas" })}
          />
          <MiniStat
            label={tr(locale, { en: "Messages/day", "pt-BR": "Mensagens/dia", es: "Mensajes/día" })}
            value={tr(locale, {
              en: "unlimited on Pro",
              "pt-BR": "ilimitadas no Pro",
              es: "ilimitados en Pro",
            })}
          />
        </div>
      </div>
    </div>
  );
}

function PairingContent({ locale }: { locale: Locale }) {
  return (
    <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
        <div className="grid grid-cols-8 gap-1.5">
          {Array.from({ length: 64 }).map((_, index) => (
            <span
              key={index}
              className={cn(
                "aspect-square rounded-[3px]",
                index % 5 === 0 || index % 13 === 0 ? "bg-white/85" : "bg-white/10",
              )}
            />
          ))}
        </div>
      </div>
      <div className="grid gap-4">
        <MiniCard
          title={tr(locale, { en: "Local host", "pt-BR": "Host local", es: "Host local" })}
          value="192.168.0.28"
          accent="cyan"
        />
        <MiniCard
          title={tr(locale, { en: "Auth token", "pt-BR": "Token de auth", es: "Token de auth" })}
          value={tr(locale, { en: "paired and encrypted", "pt-BR": "pareado e criptografado", es: "emparejado y cifrado" })}
          accent="emerald"
        />
        <MiniCard
          title={tr(locale, { en: "Relay", "pt-BR": "Relay", es: "Relay" })}
          value={tr(locale, { en: "WebSocket direct", "pt-BR": "WebSocket direto", es: "WebSocket directo" })}
          accent="violet"
        />
      </div>
    </div>
  );
}

function HistoryContent({ locale }: { locale: Locale }) {
  return (
    <div className="grid gap-4">
      {[
        [
          tr(locale, { en: "Today", "pt-BR": "Hoje", es: "Hoy" }),
          tr(locale, {
            en: "session restored from offline history",
            "pt-BR": "sessão restaurada do histórico offline",
            es: "sesión restaurada desde el historial offline",
          }),
        ],
        [
          tr(locale, { en: "Yesterday", "pt-BR": "Ontem", es: "Ayer" }),
          tr(locale, {
            en: "copied output from a code block",
            "pt-BR": "copiou a saída de um bloco de código",
            es: "copió la salida de un bloque de código",
          }),
        ],
        [
          tr(locale, { en: "Monday", "pt-BR": "Segunda", es: "Lunes" }),
          tr(locale, {
            en: "switched from Claude Code to Codex",
            "pt-BR": "alternou de Claude Code para Codex",
            es: "cambió de Claude Code a Codex",
          }),
        ],
      ].map(([date, copy], index) => (
        <div key={date} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="mt-1 h-3 w-3 rounded-full bg-[color:var(--primary)] shadow-[0_0_18px_rgba(52,152,219,0.7)]" />
          <div className="min-w-0">
            <p className="text-xs uppercase tracking-[0.28em] text-white/42">{date}</p>
            <p className="mt-2 text-sm text-white/82">{copy}</p>
          </div>
          <span className="ml-auto text-[10px] uppercase tracking-[0.24em] text-white/36">
            0{index + 1}
          </span>
        </div>
      ))}
    </div>
  );
}

function ComposerContent({ locale }: { locale: Locale }) {
  return (
    <div className="grid gap-4">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
        <p className="text-xs uppercase tracking-[0.28em] text-white/42">
          {tr(locale, { en: "command palette", "pt-BR": "paleta de comandos", es: "paleta de comandos" })}
        </p>
        <div className="mt-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 font-mono text-sm text-white/90">
          <span className="text-cyan-300">$</span>
          <span>
            {tr(locale, {
              en: "review the landing copy and diff",
              "pt-BR": "revisar a copy da landing e o diff",
              es: "revisar la copy de la landing y el diff",
            })}
          </span>
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <MiniCard
          title={tr(locale, { en: "CLI selector", "pt-BR": "Seletor de CLI", es: "Selector de CLI" })}
          value="Codex"
          accent="cyan"
        />
        <MiniCard
          title={tr(locale, { en: "Path selector", "pt-BR": "Seletor de pasta", es: "Selector de ruta" })}
          value="./src/app"
          accent="emerald"
        />
      </div>
    </div>
  );
}

function Line({
  prompt,
  command,
  tone = "default",
}: {
  prompt: string;
  command: string;
  tone?: "default" | "green" | "cyan" | "violet";
}) {
  const toneClasses = {
    default: "text-white/82",
    green: "text-emerald-300",
    cyan: "text-cyan-300",
    violet: "text-violet-300",
  };

  return (
    <div className="flex gap-3">
      <span className="w-4 text-white/38">{prompt}</span>
      <span className={toneClasses[tone]}>{command}</span>
    </div>
  );
}

function MiniCard({
  title,
  value,
  accent,
}: {
  title: string;
  value: string;
  accent: "cyan" | "violet" | "emerald";
}) {
  const accentClass = {
    cyan: "from-cyan-400/16 to-cyan-400/6 text-cyan-100 border-cyan-300/20",
    violet: "from-violet-400/16 to-violet-400/6 text-violet-100 border-violet-300/20",
    emerald: "from-emerald-400/16 to-emerald-400/6 text-emerald-100 border-emerald-300/20",
  }[accent];

  return (
    <div
      className={cn(
        "rounded-3xl border bg-gradient-to-br p-4 backdrop-blur-sm",
        "border-white/10",
        accentClass,
      )}
    >
      <p className="text-[10px] uppercase tracking-[0.3em] text-white/50">{title}</p>
      <p className="mt-3 text-sm font-medium text-white">{value}</p>
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/25 p-3">
      <p className="text-[10px] uppercase tracking-[0.25em] text-white/40">{label}</p>
      <p className="mt-2 text-sm font-medium text-white">{value}</p>
    </div>
  );
}

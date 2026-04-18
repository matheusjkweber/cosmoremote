import { cn } from "@/lib/cn";
import type { Locale } from "@/lib/i18n";

type Variant = "stream" | "sessions" | "pairing" | "history" | "composer";

export function MockScreen({
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
        "relative overflow-hidden rounded-[28px] border border-white/14 bg-[linear-gradient(180deg,rgba(9,14,24,0.98),rgba(7,10,16,0.94))] shadow-[0_24px_80px_rgba(0,0,0,0.42)]",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <div className="ml-2 h-2 w-20 rounded-full bg-white/18" />
      </div>

      <div className="relative min-h-[16rem] p-4">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(52,152,219,0.18),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(155,89,182,0.16),transparent_42%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:20px_20px] opacity-25" />

        {variant === "stream" && <StreamPattern />}
        {variant === "sessions" && <SessionsPattern />}
        {variant === "pairing" && <PairingPattern />}
        {variant === "history" && <HistoryPattern />}
        {variant === "composer" && <ComposerPattern />}
      </div>
    </div>
  );
}

function StreamPattern() {
  return (
    <div className="relative grid gap-3">
      <div className="rounded-2xl border border-white/12 bg-white/7 p-3">
        <div className="h-2 w-32 rounded bg-cyan-300/70" />
        <div className="mt-3 space-y-2">
          <div className="h-2 w-full rounded bg-white/30" />
          <div className="h-2 w-5/6 rounded bg-white/25" />
          <div className="h-2 w-2/3 rounded bg-violet-300/40" />
          <div className="h-2 w-4/5 rounded bg-emerald-300/40" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div className="h-14 rounded-xl border border-white/12 bg-white/8" />
        <div className="h-14 rounded-xl border border-white/12 bg-white/8" />
        <div className="h-14 rounded-xl border border-white/12 bg-white/8" />
      </div>
    </div>
  );
}

function SessionsPattern() {
  return (
    <div className="relative grid gap-2">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="flex items-center justify-between rounded-xl border border-white/12 bg-white/8 p-3">
          <div className="space-y-2">
            <div className="h-2 w-28 rounded bg-white/35" />
            <div className="h-2 w-20 rounded bg-white/22" />
          </div>
          <div className="h-6 w-12 rounded-full bg-cyan-300/20" />
        </div>
      ))}
    </div>
  );
}

function PairingPattern() {
  return (
    <div className="relative grid gap-3 sm:grid-cols-[0.8fr_1.2fr]">
      <div className="rounded-2xl border border-white/12 bg-white/8 p-3">
        <div className="grid grid-cols-8 gap-1">
          {Array.from({ length: 64 }).map((_, index) => (
            <span
              key={index}
              className={cn(
                "aspect-square rounded-[2px]",
                index % 5 === 0 || index % 13 === 0 ? "bg-white/85" : "bg-white/12",
              )}
            />
          ))}
        </div>
      </div>
      <div className="grid gap-2">
        <div className="h-14 rounded-xl border border-white/12 bg-white/8" />
        <div className="h-14 rounded-xl border border-white/12 bg-white/8" />
        <div className="h-14 rounded-xl border border-white/12 bg-white/8" />
      </div>
    </div>
  );
}

function HistoryPattern() {
  return (
    <div className="relative grid gap-2">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="flex items-start gap-3 rounded-xl border border-white/12 bg-white/8 p-3">
          <div className="mt-1 size-2.5 rounded-full bg-cyan-300/80" />
          <div className="w-full space-y-2">
            <div className="h-2 w-20 rounded bg-white/25" />
            <div className="h-2 w-full rounded bg-white/30" />
          </div>
        </div>
      ))}
    </div>
  );
}

function ComposerPattern() {
  return (
    <div className="relative grid gap-3">
      <div className="h-12 rounded-xl border border-white/12 bg-black/35" />
      <div className="h-12 rounded-xl border border-white/12 bg-white/8" />
      <div className="grid grid-cols-2 gap-2">
        <div className="h-14 rounded-xl border border-white/12 bg-white/8" />
        <div className="h-14 rounded-xl border border-white/12 bg-white/8" />
      </div>
    </div>
  );
}

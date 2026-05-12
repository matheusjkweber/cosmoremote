import { cn } from "@/lib/cn";

export function Badge({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-white/12 bg-white/6 px-3 py-1 text-xs font-semibold text-white/80 backdrop-blur",
        className,
      )}
    >
      {children}
    </span>
  );
}

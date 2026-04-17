import { cn } from "@/lib/cn";

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: React.PropsWithChildren<{
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
}>) {
  return (
    <section id={id} className={cn("relative scroll-mt-24 py-20 sm:py-28", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300/80">
            {eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-sm leading-7 text-white/68 sm:text-base">
            {description}
          </p>
        </div>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}


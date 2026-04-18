import { cn } from "@/lib/utils";

type SectionShellProps = React.PropsWithChildren<{
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
}>;

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: SectionShellProps) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-16 md:py-24", className)}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-[0.24em] text-[#8fd1ff] uppercase">{eyebrow}</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-white md:text-[2.25rem]">{title}</h2>
          <p className="mx-auto mt-4 max-w-prose text-base leading-7 text-white/78 md:text-lg">{description}</p>
        </div>
        <div className="mt-10 md:mt-14">{children}</div>
      </div>
    </section>
  );
}

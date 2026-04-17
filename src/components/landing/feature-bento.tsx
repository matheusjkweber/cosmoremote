import { SectionShell } from "@/components/landing/section-shell";
import {
  CodeIcon,
  CopyIcon,
  FolderIcon,
  QrIcon,
  SparkIcon,
  StatusIcon,
  StreamIcon,
} from "@/components/landing/icons";
import { cn } from "@/lib/cn";

const iconMap = {
  spark: SparkIcon,
  qr: QrIcon,
  stream: StreamIcon,
  folder: FolderIcon,
  code: CodeIcon,
  copy: CopyIcon,
  status: StatusIcon,
} as const;

type FeatureItem = {
  title: string;
  description: string;
  icon: string;
  span?: string;
};

export function FeatureBento({
  content,
}: {
  content: {
    eyebrow: string;
    title: string;
    description: string;
    items: FeatureItem[];
  };
}) {
  return (
    <SectionShell
      id="features"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    >
      <div className="grid gap-5 lg:grid-cols-12">
        {content.items.map((item, index) => {
          const Icon = iconMap[item.icon as keyof typeof iconMap] ?? SparkIcon;
          return (
            <article
              key={item.title}
              className={cn(
                "group relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-6 shadow-[0_16px_40px_rgba(0,0,0,0.16)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:border-white/18",
                item.span ?? "lg:col-span-4",
                index === 0 ? "lg:col-span-5 lg:row-span-2 min-h-[18rem]" : "",
                index === 1 ? "lg:col-span-7" : "",
                index === 2 ? "lg:col-span-3" : "",
                index === 3 ? "lg:col-span-4" : "",
                index === 4 ? "lg:col-span-5" : "",
                index === 5 ? "lg:col-span-3" : "",
                index === 6 ? "lg:col-span-7" : "",
                index === 7 ? "lg:col-span-5" : "",
              )}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(52,152,219,0.18),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(46,204,113,0.08),transparent_32%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <div className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/6 text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/64">{item.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </SectionShell>
  );
}

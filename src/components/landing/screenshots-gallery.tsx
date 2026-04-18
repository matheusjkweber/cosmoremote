"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionShell } from "@/components/landing/section-shell";
import { getGalleryScreenshots } from "@/lib/screenshots";
import type { Locale } from "@/lib/i18n";

export function ScreenshotsGallery({
  locale,
  content,
}: {
  locale: Locale;
  content: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{ title: string; caption: string; variant: string }>;
  };
}) {
  const shots = getGalleryScreenshots(locale);

  if (shots.length === 0) {
    return null;
  }

  const cards = shots.map((shot, index) => {
    const copy = content.items[index] ?? content.items[0];

    return {
      ...shot,
      title: copy?.title ?? "CosmoRemote",
      caption: copy?.caption ?? "",
      key: `${shot.src}-${index}`,
    };
  });

  return (
    <SectionShell
      id="screenshots"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {cards.map((card, index) => (
          <motion.figure
            key={card.key}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ delay: 0.08 * index, duration: 0.4 }}
            className="overflow-hidden rounded-3xl border border-white/14 bg-white/8 shadow-[var(--shadow-card)]"
          >
            <div className="border-b border-white/10 p-2">
              <Image
                src={card.src}
                alt={card.alt}
                width={1800}
                height={2200}
                className="h-auto w-full rounded-2xl"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <figcaption className="p-4 sm:p-5">
              <h3 className="text-xl font-semibold text-white">{card.title}</h3>
              <p className="mt-2 max-w-prose text-base leading-7 text-white/72">{card.caption}</p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </SectionShell>
  );
}

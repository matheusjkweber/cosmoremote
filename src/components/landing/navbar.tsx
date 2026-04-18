"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { BrandMark } from "@/components/landing/icons";
import { getLocaleLabel, locales, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type NavbarProps = {
  locale: Locale;
  labels: {
    brand: string;
    tagline: string;
    menuLabel: string;
    prelaunch: string;
    links: {
      features: string;
      screenshots: string;
      pricing: string;
      downloads: string;
      faq: string;
    };
  };
};

const localeHref = (code: Locale) => (code === "en" ? "/" : `/${code}`);

export function Navbar({ locale, labels }: NavbarProps) {
  const [open, setOpen] = useState(false);

  const navItems = [
    ["features", labels.links.features],
    ["screenshots", labels.links.screenshots],
    ["pricing", labels.links.pricing],
    ["downloads", labels.links.downloads],
    ["faq", labels.links.faq],
  ] as const;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#202020]/85 backdrop-blur-xl">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-20 items-center justify-between gap-3 py-3">
          <Link href={localeHref(locale)} className="flex min-w-0 items-center gap-3">
            <BrandMark className="size-11 shrink-0 rounded-xl" />
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-white">{labels.brand}</p>
              <p className="truncate text-xs text-white/70">{labels.tagline}</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-5 lg:flex">
            {navItems.map(([id, label]) => (
              <a key={id} href={`#${id}`} className="text-sm text-white/80 transition hover:text-white">
                {label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <LocaleSwitcher locale={locale} />
            <Badge className="border-amber-200/30 bg-amber-200/15 text-amber-100">{labels.prelaunch}</Badge>
          </div>

          <button
            aria-label={labels.menuLabel}
            onClick={() => setOpen((prev) => !prev)}
            className="grid size-11 place-items-center rounded-xl border border-white/15 bg-white/10 text-white md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/10 bg-[#262626] md:hidden"
          >
            <div className="mx-auto w-full max-w-7xl space-y-2 px-4 py-4 sm:px-6">
              {navItems.map(([id, label]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-base text-white/90 hover:bg-white/8"
                >
                  {label}
                </a>
              ))}
              <div className="pt-2">
                <LocaleSwitcher locale={locale} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function LocaleSwitcher({ locale }: { locale: Locale }) {
  return (
    <div className="inline-flex items-center rounded-full border border-white/15 bg-white/8 p-1">
      {locales.map((code) => (
        <Link
          key={code}
          href={localeHref(code)}
          className={cn(
            "rounded-full px-3 py-2 text-xs font-semibold transition",
            code === locale ? "bg-white text-[#242424]" : "text-white/75 hover:bg-white/10 hover:text-white",
          )}
        >
          {getLocaleLabel(code)}
        </Link>
      ))}
    </div>
  );
}

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, locales, routedLocales } from "@/lib/i18n";

function getPreferredLocale(request: NextRequest) {
  const header = request.headers.get("accept-language");

  if (!header) {
    return defaultLocale;
  }

  const candidates = header
    .split(",")
    .map((part) => part.split(";")[0]?.trim())
    .filter(Boolean) as string[];

  for (const candidate of candidates) {
    const normalized = candidate.toLowerCase();

    const exact = locales.find((locale) => locale.toLowerCase() === normalized);
    if (exact) {
      return exact;
    }

    const base = normalized.split("-")[0];
    const byBase = locales.find((locale) => locale.toLowerCase().startsWith(base));
    if (byBase) {
      return byBase;
    }
  }

  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    pathname.match(/\.[^/]+$/)
  ) {
    return NextResponse.next();
  }

  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname === "/en" ? "/" : pathname.replace(/^\/en/, "") || "/";
    return NextResponse.redirect(url);
  }

  const hasRoutedLocale = routedLocales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (hasRoutedLocale || pathname !== "/") {
    return NextResponse.next();
  }

  const locale = getPreferredLocale(request);

  if (locale === defaultLocale) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}`;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|robots.txt|sitemap.xml|.*\\.).*)"],
};

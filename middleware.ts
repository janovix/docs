import { NextRequest, NextResponse } from "next/server";

const LOCALES = ["en", "es"] as const;
const DEFAULT_LOCALE = "es";
const COOKIE_NAME = "NEXT_LOCALE";

const HAS_LOCALE_RE = new RegExp(`^\\/(${LOCALES.join("|")})(\\\/|$)`);

function getPreferredLocale(request: NextRequest): string {
	const acceptLanguage = request.headers.get("accept-language") ?? "";
	const matched = LOCALES.find((locale) =>
		acceptLanguage.toLowerCase().includes(locale.toLowerCase()),
	);
	return matched ?? DEFAULT_LOCALE;
}

export function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;
	const cookieLocale = request.cookies.get(COOKIE_NAME)?.value;

	if (!HAS_LOCALE_RE.test(pathname)) {
		const locale = cookieLocale ?? getPreferredLocale(request);
		// Use new URL(request.url) — request.nextUrl.clone() is unreliable in CF Workers
		// Avoid trailing slash on root to prevent Cloudflare slash-normalization loops
		const localizedPath =
			pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;
		return NextResponse.redirect(new URL(localizedPath, request.url));
	}

	const [, requestLocale] = pathname.split("/", 2);
	if (requestLocale !== cookieLocale) {
		const response = NextResponse.next();
		response.cookies.set(COOKIE_NAME, requestLocale);
		return response;
	}
}

export const config = {
	matcher: [
		"/((?!_next/static|_next/image|favicon.ico|icon.svg|apple-icon.png|manifest|_pagefind|pagefind).*)",
	],
};

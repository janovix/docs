export { proxy as middleware } from "nextra/locales";

export const config = {
	matcher: [
		"/((?!_next/static|_next/image|favicon.ico|icon.svg|apple-icon.png|manifest|_pagefind).*)",
	],
};

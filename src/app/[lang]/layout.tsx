import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "nextra-theme-docs/style.css";
import "../globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: {
		default: "Janovix Documentation",
		template: "%s – Janovix Docs",
	},
	description:
		"Complete documentation for the Janovix AML compliance platform. User manuals for AML management, Settings, Watchlist screening, and full API integration guide with multi-language examples.",
	keywords: [
		"Janovix",
		"AML",
		"KYC",
		"anti-money laundering",
		"LFPIORPI",
		"watchlist",
		"compliance",
		"API",
	],
	openGraph: {
		title: "Janovix Documentation",
		description:
			"Complete documentation for the Janovix AML compliance platform.",
		type: "website",
	},
};

export default function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: Promise<{ lang: string }>;
}>) {
	// Note: params.lang is available at runtime but we can't use it in metadata
	// For dynamic lang attribute, you may need to use JavaScript after hydration
	// or use a child component with useParams hook if needed for client-side lang detection

	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}

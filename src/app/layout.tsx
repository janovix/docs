import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Head } from "nextra/components";
import { CopyPageLocale } from "@/components/CopyPageLocale";
import "nextra-theme-docs/style.css";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const docsMetadataBase =
	process.env.NEXT_PUBLIC_DOCS_URL ??
	(process.env.VERCEL_URL
		? `https://${process.env.VERCEL_URL}`
		: "http://localhost:3000");

// Icons, manifest, viewport: keep in sync with aml/src/app/layout.tsx
export const metadata: Metadata = {
	metadataBase: new URL(docsMetadataBase),
	title: {
		default: "Janovix Documentation",
		template: "%s – Janovix Docs",
	},
	manifest: "/site.webmanifest",
	icons: {
		icon: [
			{ url: "/favicon.ico" },
			{ url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
			{ url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
		],
		apple: [
			{
				url: "/apple-touch-icon.png",
				sizes: "180x180",
				type: "image/png",
			},
		],
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

export const viewport: Viewport = {
	themeColor: "#0f766e",
	width: "device-width",
	initialScale: 1,
	maximumScale: 5,
	userScalable: true,
	viewportFit: "cover",
	interactiveWidget: "resizes-content",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<Head
				color={{
					hue: { light: 262, dark: 295 },
					saturation: { light: 73, dark: 50 },
					lightness: { light: 50, dark: 78 },
				}}
			/>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<CopyPageLocale />
				{children}
			</body>
		</html>
	);
}

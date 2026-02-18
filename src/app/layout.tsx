import type { Metadata } from "next";
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

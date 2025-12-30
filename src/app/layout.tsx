import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
	title: "Documentación Legal",
	description:
		"Ley Federal para la Prevención e Identificación de Operaciones con Recursos de Procedencia Ilícita",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}

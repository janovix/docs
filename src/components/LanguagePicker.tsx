"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

export function LanguagePicker() {
	const params = useParams();
	const currentLang = (params.lang as string) || "en";
	const mdxPath = Array.isArray(params.mdxPath)
		? params.mdxPath.join("/")
		: params.mdxPath || "";

	const languages = [
		{ code: "en", name: "English", flag: "🇺🇸" },
		{ code: "es", name: "Español", flag: "🇲🇽" },
	];

	const otherLang = languages.find((lang) => lang.code !== currentLang);

	if (!otherLang) return null;

	const href = mdxPath ? `/${otherLang.code}/${mdxPath}` : `/${otherLang.code}`;

	return (
		<Link
			href={href}
			className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
			title={`Switch to ${otherLang.name}`}
			aria-label={`Switch to ${otherLang.name}`}
		>
			<span className="text-lg">{otherLang.flag}</span>
			<span className="hidden sm:inline">{otherLang.name}</span>
			<span className="sm:hidden">{otherLang.code.toUpperCase()}</span>
		</Link>
	);
}

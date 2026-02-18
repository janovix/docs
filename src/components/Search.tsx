"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useCallback, useMemo } from "react";

interface PagefindResult {
	url: string;
	meta: { title?: string };
	excerpt: string;
}

interface PagefindSearchResult {
	data: () => Promise<PagefindResult>;
}

interface PagefindInstance {
	search: (query: string) => Promise<{ results: PagefindSearchResult[] }>;
	init: () => Promise<void>;
}

declare global {
	interface Window {
		pagefind?: PagefindInstance;
	}
}

/** Pagefind indexes static HTML and uses .html URLs; the app uses clean URLs. Strip .html so links work. */
function toCleanResultUrl(url: string): string {
	if (url.endsWith(".html")) return url.slice(0, -5);
	return url;
}

const SEARCH_STRINGS = {
	en: {
		triggerLabel: "Search documentation",
		triggerShort: "Search docs…",
		placeholder: "Search documentation…",
		noResults: "No results for",
		startTyping: "Start typing to search the documentation…",
	},
	es: {
		triggerLabel: "Buscar documentación",
		triggerShort: "Buscar docs…",
		placeholder: "Buscar documentación…",
		noResults: "No hay resultados para",
		startTyping: "Escribe para buscar en la documentación…",
	},
} as const;

export function Search() {
	const pathname = usePathname();
	const locale = pathname?.startsWith("/es") ? "es" : "en";
	const t = useMemo(() => SEARCH_STRINGS[locale], [locale]);

	const [open, setOpen] = useState(false);
	const [query, setQuery] = useState("");
	const [results, setResults] = useState<PagefindResult[]>([]);
	const [loading, setLoading] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);

	// Lazy-load pagefind
	const loadPagefind = useCallback(async () => {
		if (window.pagefind) return;
		try {
			// Pagefind is served as a static asset from /pagefind/pagefind.js
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const pf = await (eval(
				'import("/pagefind/pagefind.js")',
			) as Promise<any>);
			window.pagefind = pf as PagefindInstance;
			await (pf as PagefindInstance).init?.();
		} catch {
			// In dev mode, pagefind is not yet built — silently ignore
		}
	}, []);

	// Keyboard shortcut: Ctrl+K / Cmd+K
	useEffect(() => {
		const handler = (e: KeyboardEvent) => {
			if ((e.ctrlKey || e.metaKey) && e.key === "k") {
				e.preventDefault();
				setOpen((v) => !v);
			}
			if (e.key === "Escape") {
				setOpen(false);
			}
		};
		document.addEventListener("keydown", handler);
		return () => document.removeEventListener("keydown", handler);
	}, []);

	// Focus input when dialog opens
	useEffect(() => {
		if (open) {
			void loadPagefind();
			setTimeout(() => inputRef.current?.focus(), 50);
		} else {
			setQuery("");
			setResults([]);
		}
	}, [open, loadPagefind]);

	// Click outside to close
	useEffect(() => {
		const handler = (e: MouseEvent) => {
			if (
				containerRef.current &&
				!containerRef.current.contains(e.target as Node)
			) {
				setOpen(false);
			}
		};
		if (open) document.addEventListener("mousedown", handler);
		return () => document.removeEventListener("mousedown", handler);
	}, [open]);

	// Perform search
	useEffect(() => {
		if (!query.trim()) {
			setResults([]);
			return;
		}
		let cancelled = false;
		const run = async () => {
			setLoading(true);
			try {
				const pf = window.pagefind;
				if (!pf) {
					setLoading(false);
					return;
				}
				const { results: raw } = await pf.search(query);
				const settled = await Promise.all(raw.slice(0, 8).map((r) => r.data()));
				if (!cancelled)
					setResults(
						settled.map((r) => ({ ...r, url: toCleanResultUrl(r.url) })),
					);
			} finally {
				if (!cancelled) setLoading(false);
			}
		};
		const t = setTimeout(() => void run(), 200);
		return () => {
			cancelled = true;
			clearTimeout(t);
		};
	}, [query]);

	return (
		<>
			{/* Trigger button */}
			<button
				onClick={() => setOpen(true)}
				className="flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-3 py-1.5 text-sm text-neutral-500 shadow-sm transition-colors hover:border-neutral-300 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-600 dark:hover:bg-neutral-800"
				aria-label={t.triggerLabel}
			>
				<SearchIcon className="h-3.5 w-3.5" />
				<span className="hidden sm:inline">{t.triggerShort}</span>
				<kbd className="ml-1 hidden rounded border border-neutral-200 px-1 py-0.5 font-mono text-xs text-neutral-400 dark:border-neutral-700 dark:text-neutral-500 sm:inline">
					⌘K
				</kbd>
			</button>

			{/* Modal overlay */}
			{open && (
				<div className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh]">
					{/* Backdrop */}
					<div
						className="absolute inset-0 bg-black/40 backdrop-blur-sm"
						onClick={() => setOpen(false)}
					/>

					{/* Dialog */}
					<div
						ref={containerRef}
						className="relative z-10 w-full max-w-2xl rounded-xl border border-neutral-200 bg-white shadow-2xl dark:border-neutral-700 dark:bg-neutral-900"
					>
						{/* Search input */}
						<div className="flex items-center gap-3 border-b border-neutral-200 px-4 py-3 dark:border-neutral-700">
							<SearchIcon className="h-4 w-4 shrink-0 text-neutral-400" />
							<input
								ref={inputRef}
								value={query}
								onChange={(e) => setQuery(e.target.value)}
								placeholder={t.placeholder}
								className="flex-1 bg-transparent text-sm text-neutral-900 placeholder-neutral-400 outline-none dark:text-neutral-100"
							/>
							{loading && (
								<span className="h-4 w-4 animate-spin rounded-full border-2 border-neutral-300 border-t-neutral-600 dark:border-neutral-600 dark:border-t-neutral-300" />
							)}
							<kbd
								className="rounded border border-neutral-200 px-1.5 py-0.5 font-mono text-xs text-neutral-400 dark:border-neutral-700"
								onClick={() => setOpen(false)}
							>
								ESC
							</kbd>
						</div>

						{/* Results */}
						<div className="max-h-[60vh] overflow-y-auto p-2">
							{results.length > 0 ? (
								<ul className="space-y-0.5">
									{results.map((r, i) => (
										<li key={i}>
											<a
												href={r.url}
												onClick={() => setOpen(false)}
												className="block rounded-lg px-4 py-3 hover:bg-neutral-100 dark:hover:bg-neutral-800"
											>
												<p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
													{r.meta?.title ?? r.url}
												</p>
												<p
													className="mt-0.5 line-clamp-2 text-xs text-neutral-500 dark:text-neutral-400"
													dangerouslySetInnerHTML={{ __html: r.excerpt }}
												/>
											</a>
										</li>
									))}
								</ul>
							) : query.trim() ? (
								<p className="py-8 text-center text-sm text-neutral-500 dark:text-neutral-400">
									{t.noResults} <strong>&ldquo;{query}&rdquo;</strong>
								</p>
							) : (
								<p className="py-8 text-center text-sm text-neutral-500 dark:text-neutral-400">
									{t.startTyping}
								</p>
							)}
						</div>
					</div>
				</div>
			)}
		</>
	);
}

function SearchIcon({ className }: { className?: string }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<circle cx="11" cy="11" r="8" />
			<path d="m21 21-4.35-4.35" />
		</svg>
	);
}

"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const COPY_PAGE_EN = "Copy page";
const COPY_PAGE_ES = "Copiar página";
const COPIED_EN = "Copied";
const COPIED_ES = "Copiado";

/**
 * Nextra's CopyPage component uses hardcoded English. This component finds the
 * copy button in the DOM and replaces its label when the locale is Spanish.
 */
export function CopyPageLocale() {
	const pathname = usePathname();
	const isEs = pathname?.startsWith("/es") ?? false;

	useEffect(() => {
		if (!isEs) return;

		const replaceCopyButtonText = () => {
			document.querySelectorAll("button").forEach((btn) => {
				const text = btn.textContent?.trim();
				if (text === COPY_PAGE_EN) {
					btn.textContent = COPY_PAGE_ES;
				} else if (text === COPIED_EN) {
					btn.textContent = COPIED_ES;
				}
			});
		};

		replaceCopyButtonText();

		const observer = new MutationObserver(() => {
			replaceCopyButtonText();
		});
		observer.observe(document.body, {
			childList: true,
			subtree: true,
			characterData: true,
			characterDataOldValue: true,
		});

		return () => observer.disconnect();
	}, [isEs]);

	return null;
}

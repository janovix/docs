import fs from "node:fs";
import path from "node:path";
import { importPage } from "nextra/pages";
import { getPageMap } from "nextra/page-map";
import { Layout, Navbar, Footer } from "nextra-theme-docs";
import { useMDXComponents as getMDXComponents } from "@/mdx-components";
import { Logo } from "@/components/Logo";
import { Search } from "@/components/Search";

const LOCALES = ["en", "es"] as const;

function collectMdxPaths(
	dir: string,
	segments: string[],
	lang: string,
): { lang: string; mdxPath: string[] }[] {
	const params: { lang: string; mdxPath: string[] }[] = [];
	if (!fs.existsSync(dir)) return params;

	const entries = fs.readdirSync(dir, { withFileTypes: true });
	for (const ent of entries) {
		const full = path.join(dir, ent.name);
		if (ent.isDirectory()) {
			params.push(...collectMdxPaths(full, [...segments, ent.name], lang));
		} else if (ent.isFile() && ent.name.endsWith(".mdx")) {
			if (ent.name === "index.mdx") {
				if (segments.length > 0) params.push({ lang, mdxPath: segments });
			} else {
				params.push({
					lang,
					mdxPath: [...segments, ent.name.replace(/\.mdx$/, "")],
				});
			}
		}
	}
	return params;
}

export async function generateStaticParams(): Promise<
	{ lang: string; mdxPath?: string[] }[]
> {
	const contentDir = path.join(process.cwd(), "content");
	const params: { lang: string; mdxPath?: string[] }[] = [];

	for (const lang of LOCALES) {
		const localeDir = path.join(contentDir, lang);
		if (!fs.existsSync(localeDir)) continue;
		params.push({ lang, mdxPath: [] });
		params.push(
			...collectMdxPaths(localeDir, [], lang).map((p) => ({
				lang: p.lang,
				mdxPath: p.mdxPath.length > 0 ? p.mdxPath : undefined,
			})),
		);
	}
	return params;
}

export async function generateMetadata(props: {
	params: Promise<{ mdxPath?: string[]; lang: string }>;
}) {
	const params = await props.params;
	// Prepend locale to the path
	const fullPath = [params.lang, ...(params.mdxPath ?? [])];
	const { metadata } = await importPage(fullPath);
	return metadata;
}

export default async function Page(props: {
	params: Promise<{ mdxPath?: string[]; lang: string }>;
}) {
	const params = await props.params;
	// Prepend locale to the path
	const fullPath = [params.lang, ...(params.mdxPath ?? [])];
	const result = await importPage(fullPath);
	const { default: MDXContent, toc, metadata, sourceCode } = result;

	const pageMap = await getPageMap(`/${params.lang}`);
	const components = getMDXComponents({});
	const Wrapper = components.wrapper;

	return (
		<Layout
			pageMap={pageMap}
			i18n={[
				{ locale: "en", name: "English" },
				{ locale: "es", name: "Español" },
			]}
			search={<Search />}
			navbar={
				<Navbar
					logo={
						<div className="flex items-center gap-3">
							<Logo variant="icon" width={32} height={32} />
							<h1 className="text-xl font-bold">Docs</h1>
						</div>
					}
				/>
			}
			footer={
				<Footer>
					<div className="flex items-center gap-3">
						<Logo variant="logo" width={102} height={16} />
						<span>
							© {new Date().getFullYear()} Janovix. Platform for AML compliance
							and KYC management.
						</span>
					</div>
				</Footer>
			}
		>
			<Wrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
				<MDXContent {...props} params={params} />
			</Wrapper>
		</Layout>
	);
}

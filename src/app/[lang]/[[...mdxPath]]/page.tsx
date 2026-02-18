import { importPage } from "nextra/pages";
import { getPageMap } from "nextra/page-map";
import { Layout, Navbar, Footer, LocaleSwitch } from "nextra-theme-docs";
import { useMDXComponents as getMDXComponents } from "@/mdx-components";
import { Search } from "@/components/Search";
import { Logo } from "@/components/Logo";

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
			navbar={
				<Navbar
					logo={<Logo variant="icon" width={32} height={32} />}
					projectLink="https://github.com/janovix"
				>
					<Search />
					<LocaleSwitch />
				</Navbar>
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

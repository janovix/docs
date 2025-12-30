import { generateStaticParamsFor, importPage } from "nextra/pages";
import { getPageMap } from "nextra/page-map";
import { Layout, Navbar, Footer } from "nextra-theme-docs";
import { useMDXComponents as getMDXComponents } from "@/mdx-components";
import themeConfig from "../../../theme.config";

export const generateStaticParams = generateStaticParamsFor("slug");

export async function generateMetadata(props: {
	params: Promise<{ slug?: string[] }>;
}) {
	const params = await props.params;
	// Handle root route (undefined slug) by passing empty array
	const { metadata } = await importPage(params.slug ?? []);
	return metadata;
}

export default async function Page(props: {
	params: Promise<{ slug?: string[] }>;
}) {
	const params = await props.params;
	// Handle root route (undefined slug) by passing empty array
	const result = await importPage(params.slug ?? []);
	const { default: MDXContent, toc, metadata, sourceCode } = result;

	// Get pageMap for ConfigProvider
	const pageMap = await getPageMap();

	// Get MDX components
	const components = getMDXComponents({});

	const Wrapper = components.wrapper;

	return (
		<Layout
			pageMap={pageMap}
			navbar={
				<Navbar
					logo={themeConfig.logo}
					projectLink={themeConfig.project?.link}
				/>
			}
			footer={<Footer />}
		>
			<Wrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
				<MDXContent {...props} params={params} />
			</Wrapper>
		</Layout>
	);
}

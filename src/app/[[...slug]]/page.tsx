import { generateStaticParamsFor, importPage } from "nextra/pages";
import { useMDXComponents as getMDXComponents } from "@/mdx-components";

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
	const { default: MDXContent, toc, metadata } = result;

	// Get MDX components wrapper for rendering
	const components = getMDXComponents({});
	const Wrapper = components.wrapper;

	return (
		<Wrapper toc={toc} metadata={metadata}>
			<MDXContent />
		</Wrapper>
	);
}

import { useMDXComponents as useNextraMDXComponents } from "nextra-theme-docs";

// Type-safe wrapper for MDX components
// This function wraps Nextra's useMDXComponents
// Using a more specific type than 'any' while maintaining compatibility with Nextra's internal types
type MDXComponentsInput = Record<
	string,
	React.ComponentType<Record<string, unknown>> | string
>;

export function useMDXComponents(
	components?: MDXComponentsInput,
): ReturnType<typeof useNextraMDXComponents> {
	// Type assertion needed due to Nextra's complex internal MDXComponents type structure
	// This is safer than using 'any' as it provides a clear contract for the input type
	// The function can be called with or without arguments per Nextra's API
	if (components) {
		return useNextraMDXComponents(components as never);
	}
	return useNextraMDXComponents();
}

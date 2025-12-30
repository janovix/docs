import type { NextConfig } from "next";
import nextra from "nextra";

const nextConfig: NextConfig = {
	/* config options here */
};

// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
// Only initialize in development mode, not during builds (which can cause build loops in CI)
if (process.env.NODE_ENV === "development" && !process.env.CI) {
	const { initOpenNextCloudflareForDev } = require("@opennextjs/cloudflare");
	initOpenNextCloudflareForDev();
}

export default nextra({
	// Nextra 4.x configuration
	theme: "nextra-theme-docs",
	themeConfig: "./theme.config.tsx",
	contentDirBasePath: "/",
})(nextConfig);

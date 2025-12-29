import type { NextConfig } from "next";
// @ts-ignore - Nextra types may not be fully compatible
import withNextra from "nextra";

const nextConfig: NextConfig = {
	/* config options here */
};

// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();

export default withNextra({
	theme: "nextra-theme-docs",
	themeConfig: "./theme.config.tsx",
} as any)(nextConfig);

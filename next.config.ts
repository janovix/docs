import type { NextConfig } from "next";
import nextra from "nextra";

const nextConfig: NextConfig = {
	/* config options here */
};

// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();

export default nextra({
	// Nextra 4.x configuration
})(nextConfig);

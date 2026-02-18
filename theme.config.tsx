import React from "react";

const config = {
	logo: (
		<span
			style={{ fontWeight: 700, fontSize: "1.1rem", letterSpacing: "-0.01em" }}
		>
			Janovix <span style={{ fontWeight: 400, opacity: 0.6 }}>Docs</span>
		</span>
	),
	project: {
		link: "https://github.com/janovix",
	},
	docsRepositoryBase: "https://github.com/janovix/docs",
	footer: {
		text: (
			<span>
				© {new Date().getFullYear()} Janovix. Platform for AML compliance and
				KYC management.
			</span>
		),
	},
	sidebar: {
		defaultMenuCollapseLevel: 1,
	},
	useNextSeoProps() {
		return {
			titleTemplate: "%s – Janovix Docs",
		};
	},
	head: (
		<>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta property="og:title" content="Janovix Documentation" />
			<meta
				property="og:description"
				content="Complete guide for the Janovix AML compliance platform — user manuals for AML, Settings, Watchlist, and API integration."
			/>
		</>
	),
};

export default config;

import React from "react";

const config = {
	project: {
		link: "https://janovix.com",
	},
	docsRepositoryBase: "https://github.com/janovix/docs",
	sidebar: {
		defaultMenuCollapseLevel: 1,
	},
	useNextSeoProps() {
		return {
			titleTemplate: "%s – Yenio Docs",
		};
	},
	head: (
		<>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta property="og:title" content="Yenio Documentation" />
			<meta
				property="og:description"
				content="Complete guide for the Yenio AML compliance platform — user manuals for AML, Settings, Watchlist, and API integration."
			/>
		</>
	),
};

export default config;

export default function robots() {
	const base = "https://hoa.help";
	return {
		rules: {
			userAgent: "*",
			allow: "/",
		},
		sitemap: `${base}/sitemap.xml`,
		host: base,
	};
}

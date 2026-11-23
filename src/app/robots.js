export default function robots() {
	const base = "https://www.hoa.help";
	return {
		rules: {
			userAgent: "*",
			allow: "/",
		},
		sitemap: [`${base}/sitemap.xml`, `${base}/sitemap-images.xml`],
	};
}
